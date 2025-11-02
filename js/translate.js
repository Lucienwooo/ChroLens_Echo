// ===== ChroLens_Echo 核心翻譯模組 =====

// API 設定
const API_URLS = [
    "https://script.google.com/macros/s/AKfycbxSUTL_ztpG9JY2bYyZFWvmuzY9Kf6fJneZi1ddsZBO4s7OP8AHvqfBAbLhqTgmN84/exec",
    "https://script.google.com/macros/s/AKfycbzl--LvEA8pWCvwV5oXShC6dsmW4L8MC4KvNm2xmpQlTagP1toabvWfrTizRuuIGHtg/exec",
    "https://script.google.com/macros/s/AKfycbwtnn2V-O8MkQ-qvwGBtUwSoQGgGyFkHKFAYgUQg1DTMSVHlj68BgmRl2QbEsTNAekc/exec",
    "https://script.google.com/macros/s/AKfycbzjefXUT5qEe5YvpKZ1Gu-FK4UXyjeGLFGUDED_Mrm0dXEeEyQZifNRBQknlcGhVBfk/exec",
    "https://script.google.com/macros/s/AKfycbwgcGENGItJiZPKDnmDT4_C0J0duRElp4A82xOm0f1_gXT5gCQJcg6nJLwj_QGwNZcv/exec"
];

let currentApiIndex = 0;

// ===== 語言偵測 =====
function detectLang(text) {
    const hasHiragana = /[\u3040-\u309f]/.test(text);
    const hasKatakana = /[\u30a0-\u30ff]/.test(text);
    const hasKanji = /[\u4e00-\u9faf]/.test(text);
    const hasEnglish = /[a-zA-Z]/.test(text);
    
    if (hasHiragana || hasKatakana) return "ja";
    
    const englishCount = (text.match(/[a-zA-Z]/g) || []).length;
    const totalChars = text.replace(/\s/g, '').length;
    if (englishCount > totalChars * 0.5) return "en";
    
    if (hasKanji) return "zh-tw";
    if (hasEnglish) return "en";
    
    return "zh-tw";
}

// ===== Google翻譯備援 =====
function openGoogleTranslateFallback(text, sourceLang, targetLang) {
    const googleTranslateUrl = `https://translate.google.com/?sl=${sourceLang}&tl=${targetLang}&text=${encodeURIComponent(text)}&op=translate`;
    window.open(googleTranslateUrl, '_blank');
}

// ===== DeepL API =====
async function translateWithDeepL(text, sourceLang, targetLang) {
    const apiKey = "078b54f1-0f39-47e0-9276-04a7335c4696:fx";
    const url = `https://api-free.deepl.com/v2/translate`;
    
    let deeplSource = sourceLang.toUpperCase();
    let deeplTarget = targetLang.toUpperCase();
    
    if (sourceLang === 'zh-tw') deeplSource = 'ZH';
    if (targetLang === 'zh-tw') deeplTarget = 'ZH-HANT';
    
    const params = new URLSearchParams({
        auth_key: apiKey,
        text: text,
        source_lang: deeplSource,
        target_lang: deeplTarget
    });
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    
    const response = await fetch(url, {
        method: "POST",
        body: params,
        signal: controller.signal
    });
    clearTimeout(timeoutId);
    
    if (!response.ok) {
        throw new Error(`DeepL API error: ${response.status}`);
    }
    
    const data = await response.json();
    if (data.translations && data.translations.length > 0) {
        return data.translations[0].text;
    }
    throw new Error('No translation returned');
}

// ===== 單一翻譯處理 =====
async function translateSingle(text, sourceLang, targetLang, outputId) {
    let attempts = 0;
    let success = false;
    const maxAttempts = API_URLS.length;
    const startTime = performance.now();
    let apiIndex = currentApiIndex;

    document.getElementById(outputId).innerText = "翻譯中...";

    // Google Apps Script API
    while (attempts < maxAttempts && !success) {
        const apiUrl = API_URLS[apiIndex];
        const url = `${apiUrl}?text=${encodeURIComponent(text)}&source=${sourceLang}&target=${targetLang}`;
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 5000);
            
            const response = await fetch(url, { signal: controller.signal });
            clearTimeout(timeoutId);
            
            const data = await response.json();
            if (data.status === 'success' && data.translatedText) {
                const endTime = performance.now();
                const elapsed = ((endTime - startTime) / 1000).toFixed(2);
                document.getElementById(outputId).innerText = data.translatedText;
                document.getElementById('status-message').innerText =
                    `花費 ${elapsed} 秒，✅翻譯成功 (當前使用 Google Script API)`;
                success = true;
                currentApiIndex = (apiIndex + 1) % API_URLS.length;
                window.incTranslateCount();
                return;
            }
        } catch (e) {
            console.warn(`API ${apiIndex + 1} 失敗:`, e.message);
        }
        apiIndex = (apiIndex + 1) % API_URLS.length;
        attempts++;
    }

    // DeepL API
    if (!success) {
        try {
            const deeplResult = await translateWithDeepL(text, sourceLang, targetLang);
            if (deeplResult) {
                const endTime = performance.now();
                const elapsed = ((endTime - startTime) / 1000).toFixed(2);
                document.getElementById(outputId).innerText = deeplResult;
                document.getElementById('status-message').innerText =
                    `花費 ${elapsed} 秒，✅翻譯成功 (當前使用 DeepL API)`;
                window.incTranslateCount();
                return;
            }
        } catch (e) {
            console.warn('DeepL API 失敗:', e.message);
        }
    }

    // Google翻譯網頁
    document.getElementById(outputId).innerText = "❌ 額度用盡或連線失敗，自動開啟 Google 翻譯。";
    document.getElementById('status-message').innerText =
        "❌ 額度用盡或連線失敗 (當前使用 Google 翻譯網頁)";
    openGoogleTranslateFallback(text, sourceLang, targetLang);
    window.incTranslateCount();
}

// 匯出函數供全域使用
window.translateCore = {
    detectLang,
    translateSingle,
    translateWithDeepL,
    openGoogleTranslateFallback
};
