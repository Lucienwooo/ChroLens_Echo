// ===== ChroLens_Echo 初始化模組 =====

// 頁面載入時設置主題（預設深色）
(function() {
    let theme = localStorage.getItem('theme');
    if (!theme) theme = 'dark';
    window.uiManager.setTheme(theme);
})();

// 頁面載入完成後的初始化
window.onload = function() {
    // 統計訪問次數
    const key = window.statsManager.getTodayKey();
    if (!localStorage.getItem('visitCount_' + key)) {
        window.statsManager.incVisitCount();
    } else {
        window.statsManager.loadStats();
    }
    
    // 載入複製歷史
    window.copyManager.loadCopyHistory();
    
    // 初始翻譯和輸出設定
    window.uiManager.translateMulti();
    window.uiManager.updateOutputVisibility();
};

// 為向後相容,將主要函數掛載到 window
window.autoTranslate = window.uiManager.autoTranslate;
window.handleExtraLangChange = window.uiManager.handleExtraLangChange;
window.updateOutputVisibility = window.uiManager.updateOutputVisibility;
window.toggleStats = window.uiManager.toggleStats;
window.toggleOther = window.uiManager.toggleOther;
window.toggleSettings = window.uiManager.toggleSettings;
window.toggleTheme = window.uiManager.toggleTheme;
