// ===== ChroLens_Echo UI 管理模組 =====

let timer = null;
let lastInput = "";
let currentExtraLang = null;

const langNames = {
    'ko': 'KO', 'fr': 'FR', 'de': 'DE', 'es': 'ES', 
    'it': 'IT', 'pt': 'PT', 'ru': 'RU', 'ar': 'AR',
    'th': 'TH', 'vi': 'VI', 'id': 'ID', 'nl': 'NL',
    'pl': 'PL', 'tr': 'TR', 'hi': 'HI'
};

// ===== 輸入偵測 =====
function autoTranslate() {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
        const text = document.getElementById('input-text').value.trim();
        if (text !== "") {
            translateMulti();
        }
    }, 500);
}

// ===== 多語翻譯 =====
async function translateMulti() {
    const text = document.getElementById('input-text').value.trim();
    if (text === "") {
        document.getElementById('output-tw').innerText = "";
        document.getElementById('output-ja').innerText = "";
        document.getElementById('output-en').innerText = "";
        document.getElementById('output-extra').innerText = "";
        document.getElementById('status-message').innerText = "";
        lastInput = "";
        return;
    }
    
    lastInput = text;
    document.getElementById('status-message').innerText = "";

    const lang = window.translateCore.detectLang(text);

    const tw = document.getElementById('chk-tw').checked;
    const ja = document.getElementById('chk-ja').checked;
    const en = document.getElementById('chk-en').checked;

    document.getElementById('output-tw-title').innerText = "TW";
    document.getElementById('output-ja-title').innerText = "JP";
    document.getElementById('output-en-title').innerText = "EN";

    if (!tw) document.getElementById('output-tw').innerText = "";
    if (!ja) document.getElementById('output-ja').innerText = "";
    if (!en) document.getElementById('output-en').innerText = "";

    if (lang === "zh-tw") {
        if (tw) document.getElementById('output-tw').innerText = "（輸入日文或英文才會翻譯成繁體中文）";
        if (ja) window.translateCore.translateSingle(text, "zh-tw", "ja", "output-ja");
        if (en) window.translateCore.translateSingle(text, "zh-tw", "en", "output-en");
    }
    else if (lang === "ja") {
        if (tw) window.translateCore.translateSingle(text, "ja", "zh-tw", "output-tw");
        if (ja) document.getElementById('output-ja').innerText = "（輸入中文或英文才會翻譯成日文）";
        if (en) window.translateCore.translateSingle(text, "ja", "en", "output-en");
    }
    else if (lang === "en") {
        if (tw) window.translateCore.translateSingle(text, "en", "zh-tw", "output-tw");
        if (ja) window.translateCore.translateSingle(text, "en", "ja", "output-ja");
        if (en) document.getElementById('output-en').innerText = "（輸入中文或日文才會翻譯成英文）";
    }
    else {
        if (tw) document.getElementById('output-tw').innerText = "（輸入日文或英文才會翻譯成繁體中文）";
        if (ja) window.translateCore.translateSingle(text, lang, "ja", "output-ja");
        if (en) window.translateCore.translateSingle(text, lang, "en", "output-en");
    }
    
    if (currentExtraLang) {
        window.translateCore.translateSingle(text, lang, currentExtraLang, "output-extra");
    }
}

// ===== 額外語言處理 =====
function handleExtraLangChange() {
    const select = document.getElementById('extra-lang-select');
    const langCode = select.value;
    
    if (langCode) {
        currentExtraLang = langCode;
        document.getElementById('output-extra-box').style.display = 'block';
        document.getElementById('output-extra-title').innerText = langNames[langCode];
        
        const text = document.getElementById('input-text').value.trim();
        if (text !== "") {
            translateMulti();
        }
    } else {
        currentExtraLang = null;
        document.getElementById('output-extra-box').style.display = 'none';
        document.getElementById('output-extra').innerText = '';
    }
}

// ===== 輸出語言勾選框控制 =====
function updateOutputVisibility() {
    const boxes = [
        document.getElementById('chk-ja'),
        document.getElementById('chk-en'),
        document.getElementById('chk-tw')
    ];

    if (!window.checkedOrder) window.checkedOrder = [];
    window.checkedOrder = window.checkedOrder.filter(id => document.getElementById(id).checked);

    for (let box of boxes) {
        if (box.checked && !window.checkedOrder.includes(box.id)) {
            window.checkedOrder.push(box.id);
        }
    }

    const checkedCount = window.checkedOrder.length;
    if (checkedCount === 0) {
        boxes[0].checked = true;
        window.checkedOrder = [boxes[0].id];
    }
    if (checkedCount > 2) {
        const firstId = window.checkedOrder.shift();
        document.getElementById(firstId).checked = false;
    }

    document.getElementById('output-ja-box').style.display = boxes[0].checked ? 'block' : 'none';
    document.getElementById('output-en-box').style.display = boxes[1].checked ? 'block' : 'none';
    document.getElementById('output-tw-box').style.display = boxes[2].checked ? 'block' : 'none';

    const text = document.getElementById('input-text').value.trim();
    if (text !== "") {
        translateMulti();
    }
}

// ===== 按鈕功能 =====
function toggleStats() {
    document.getElementById('stats-info').style.display =
        document.getElementById('stats-info').style.display === 'none' ? 'block' : 'none';
    document.getElementById('other-info').style.display = 'none';
    document.getElementById('settings-info').style.display = 'none';
}

function toggleOther() {
    document.getElementById('other-info').style.display =
        document.getElementById('other-info').style.display === 'none' ? 'block' : 'none';
    document.getElementById('stats-info').style.display = 'none';
    document.getElementById('settings-info').style.display = 'none';
}

function toggleSettings() {
    document.getElementById('settings-info').style.display =
        document.getElementById('settings-info').style.display === 'none' ? 'block' : 'none';
    document.getElementById('stats-info').style.display = 'none';
    document.getElementById('other-info').style.display = 'none';
}

// ===== 主題切換 =====
function setTheme(theme) {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    if (document.body.classList.contains('dark')) {
        setTheme('light');
    } else {
        setTheme('dark');
    }
}

// 匯出函數
window.uiManager = {
    autoTranslate,
    translateMulti,
    handleExtraLangChange,
    updateOutputVisibility,
    toggleStats,
    toggleOther,
    toggleSettings,
    toggleTheme,
    setTheme
};
