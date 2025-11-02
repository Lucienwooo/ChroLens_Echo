// ===== ChroLens_Echo 複製與統計模組 =====

// ===== 複製歷史 =====
let copyHistory = [];
const MAX_HISTORY = 10;

// ===== 統計資料 =====
let translateCount = 0;
let visitCount = 0;

// ===== 複製功能 =====
function copyToClipboard(elementId) {
    const text = document.getElementById(elementId).innerText;
    if (!text || text.includes('翻譯中') || text.includes('輸入') || text.includes('❌')) {
        return;
    }
    navigator.clipboard.writeText(text).then(() => {
        const statusMsg = document.getElementById('status-message');
        const originalMsg = statusMsg.innerText;
        statusMsg.innerText = '✅ 已複製到剪貼簿';
        setTimeout(() => {
            statusMsg.innerText = originalMsg;
        }, 2000);
        
        addToCopyHistory(text);
    }).catch(err => {
        console.error('複製失敗:', err);
    });
}

// ===== 複製歷史管理 =====
function addToCopyHistory(text) {
    const existingIndex = copyHistory.findIndex(item => item.text === text);
    
    if (existingIndex !== -1) {
        copyHistory[existingIndex].count++;
        copyHistory[existingIndex].timestamp = Date.now();
    } else {
        copyHistory.push({
            text: text,
            count: 1,
            timestamp: Date.now()
        });
    }
    
    copyHistory.sort((a, b) => {
        if (b.count === a.count) {
            return b.timestamp - a.timestamp;
        }
        return b.count - a.count;
    });
    
    if (copyHistory.length > MAX_HISTORY) {
        copyHistory = copyHistory.slice(0, MAX_HISTORY);
    }
    
    localStorage.setItem('copyHistory', JSON.stringify(copyHistory));
    renderCopyHistory();
}

function renderCopyHistory() {
    const container = document.getElementById('copy-history-list');
    const historyContainer = document.getElementById('copy-history-container');
    
    if (copyHistory.length === 0) {
        historyContainer.style.display = 'none';
        return;
    }
    
    historyContainer.style.display = 'block';
    container.innerHTML = '';
    
    copyHistory.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'history-item';
        div.onclick = () => copyHistoryItem(item.text);
        div.title = '點擊複製';
        
        const meta = document.createElement('div');
        meta.className = 'history-item-meta';
        meta.textContent = `複製 ${item.count} 次 | ${formatTimestamp(item.timestamp)}`;
        
        const content = document.createElement('div');
        const displayText = item.text.length > 100 ? 
            item.text.substring(0, 100) + '...' : item.text;
        content.textContent = displayText;
        
        div.appendChild(meta);
        div.appendChild(content);
        container.appendChild(div);
    });
}

function copyHistoryItem(text) {
    navigator.clipboard.writeText(text).then(() => {
        const statusMsg = document.getElementById('status-message');
        const originalMsg = statusMsg.innerText;
        statusMsg.innerText = '✅ 已從歷史複製到剪貼簿';
        setTimeout(() => {
            statusMsg.innerText = originalMsg;
        }, 2000);
        
        addToCopyHistory(text);
    }).catch(err => {
        console.error('複製失敗:', err);
    });
}

function clearCopyHistory() {
    if (confirm('確定要清空所有複製紀錄嗎？')) {
        copyHistory = [];
        localStorage.removeItem('copyHistory');
        renderCopyHistory();
    }
}

function loadCopyHistory() {
    const saved = localStorage.getItem('copyHistory');
    if (saved) {
        try {
            copyHistory = JSON.parse(saved);
            renderCopyHistory();
        } catch (e) {
            console.error('載入複製歷史失敗:', e);
            copyHistory = [];
        }
    }
}

function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    
    if (diff < 60000) {
        return '剛剛';
    }
    if (diff < 3600000) {
        return Math.floor(diff / 60000) + '分鐘前';
    }
    if (diff < 86400000) {
        return Math.floor(diff / 3600000) + '小時前';
    }
    return date.toLocaleDateString('zh-TW', { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
}

// ===== 統計功能 =====
function getTodayKey() {
    const today = new Date();
    return today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();
}

function loadStats() {
    const key = getTodayKey();
    translateCount = parseInt(localStorage.getItem('translateCount_' + key) || '0');
    visitCount = parseInt(localStorage.getItem('visitCount_' + key) || '0');
    document.getElementById('translate-count').innerText = translateCount;
    document.getElementById('visit-count').innerText = visitCount;
}

function incTranslateCount() {
    const key = getTodayKey();
    translateCount++;
    localStorage.setItem('translateCount_' + key, translateCount);
    document.getElementById('translate-count').innerText = translateCount;
}

function incVisitCount() {
    const key = getTodayKey();
    visitCount++;
    localStorage.setItem('visitCount_' + key, visitCount);
    document.getElementById('visit-count').innerText = visitCount;
}

// 匯出函數
window.copyManager = {
    copyToClipboard,
    addToCopyHistory,
    renderCopyHistory,
    copyHistoryItem,
    clearCopyHistory,
    loadCopyHistory,
    formatTimestamp
};

window.statsManager = {
    getTodayKey,
    loadStats,
    incTranslateCount,
    incVisitCount
};

// 為向後相容,也掛載到 window
window.copyToClipboard = copyToClipboard;
window.clearCopyHistory = clearCopyHistory;
window.incTranslateCount = incTranslateCount;
