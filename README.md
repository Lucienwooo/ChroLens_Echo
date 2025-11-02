# ChroLens_Echo - 無廣告翻譯工具

> 🌐 **簡潔、快速、無廣告的多語言翻譯工具**

[![Version](https://img.shields.io/badge/version-2.0-blue.svg)](https://github.com/Lucienwooo)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

---

## 📖 目錄

- [功能特色](#-功能特色)
- [快速開始](#-快速開始)
- [功能說明](#-功能說明)
- [技術架構](#-技術架構)
- [使用指南](#-使用指南)
- [部署說明](#-部署說明)
- [常見問題](#-常見問題)
- [更新日誌](#-更新日誌)
- [貢獻指南](#-貢獻指南)
- [授權資訊](#-授權資訊)

---

## ✨ 功能特色

### 🎯 核心功能

- **📝 即時翻譯** - 輸入文字 0.5 秒後自動翻譯
- **🌍 多語言支援** - 支援 18 種常用語言
  - 預設: 日本語 🇯🇵、English 🇬🇧、繁體中文 🇹🇼
  - 額外: 韓文、法文、德文、西班牙文、義大利文、葡萄牙文、俄文、阿拉伯文、泰文、越南文、印尼文、荷蘭文、波蘭文、土耳其文、印地文
- **🔊 文字轉語音** - 所有翻譯結果支援語音播放
- **📋 一鍵複製** - 點擊輸出框或按鈕快速複製
- **📜 複製歷史** - 自動記錄最近 10 次複製,按使用頻率排序
- **🎨 主題切換** - 深色/淺色模式自由切換
- **💾 本地儲存** - 翻譯歷史與偏好設定持久保存

### 🚀 技術亮點

- **多重備援系統** - Google Apps Script → DeepL API → Google Translate 網頁
- **智慧語言偵測** - 自動識別輸入語言 (中文/日文/英文)
- **防抖動設計** - 避免過度呼叫 API,節省資源
- **超時控制** - 5 秒超時機制,確保使用者體驗
- **離線友善** - 核心功能不依賴複雜框架
- **模組化架構** - 易於維護和擴展

---

## 🚀 快速開始

### 方法 1: 直接使用 (推薦)

1. 下載 `index.html` 檔案
2. 雙擊檔案用瀏覽器開啟
3. 開始翻譯!

### 方法 2: 部署到網站

```bash
# 1. 克隆專案
git clone https://github.com/Lucienwooo/ChroLens_Echo.git

# 2. 進入目錄
cd ChroLens_Echo

# 3. 使用任何 Web 伺服器
# Python 3
python -m http.server 8000

# Node.js
npx http-server

# 4. 開啟瀏覽器訪問
http://localhost:8000
```

### 方法 3: 模組化開發版本

```bash
# 使用模組化版本 (適合開發)
open index_modular.html
```

---

## 📚 功能說明

### 1. 語言選擇

#### 預設語言 (最多選 2 個)
- ☑️ **日本語** - 日文翻譯
- ☑️ **English** - 英文翻譯
- ☑️ **繁體中文** - 繁體中文翻譯

**規則:**
- 預設全部不勾選,不顯示任何輸出框
- 最多同時勾選 2 個語言
- 勾選第 3 個時,自動取消最早勾選的語言

#### 額外語言 (下拉選單)
從 `[Language]` 下拉選單選擇其他 15 種語言:
- 🇰🇷 Korean (한국어)
- 🇫🇷 French (Français)
- 🇩🇪 German (Deutsch)
- 🇪🇸 Spanish (Español)
- 🇮🇹 Italian (Italiano)
- 🇵🇹 Portuguese (Português)
- 🇷🇺 Russian (Русский)
- 🇸🇦 Arabic (العربية)
- 🇹🇭 Thai (ไทย)
- 🇻🇳 Vietnamese (Tiếng Việt)
- 🇮🇩 Indonesian (Bahasa Indonesia)
- 🇳🇱 Dutch (Nederlands)
- 🇵🇱 Polish (Polski)
- 🇹🇷 Turkish (Türkçe)
- 🇮🇳 Hindi (हिन्दी)

**特點:**
- 選擇語言後自動顯示輸出框
- 選擇 `[Language]` 可取消額外語言
- 不計入 2 個語言的限制

---

### 2. 翻譯功能

#### 智慧語言偵測
系統會自動判斷輸入語言:
```
中文 → 翻譯成日文、英文等
日文 (平假名/片假名) → 翻譯成中文、英文等
英文 → 翻譯成中文、日文等
混合語言 → 智慧判斷主要語言
```

#### 多重備援機制
```
第一優先: Google Apps Script API
    ↓ 失敗
第二優先: DeepL Free API
    ↓ 失敗
最終備援: Google Translate 網頁版
```

**超時設定:**
- API 請求: 5 秒超時
- 自動切換到下一個備援
- 確保翻譯不會卡住

---

### 3. 複製歷史記錄

#### 功能特點
- 📝 **自動記錄** - 每次複製自動加入歷史
- 🔢 **計數統計** - 顯示每個項目的複製次數
- ⏰ **時間標記** - 顯示「剛剛」、「5分鐘前」、「2小時前」
- 🎯 **智慧排序** - 按複製次數排序 (相同次數則按時間)
- 💾 **持久儲存** - 使用 localStorage 保存記錄
- 🔄 **快速複製** - 點擊歷史項目立即複製

#### 顯示格式
```
複製 3 次 | 2小時前
翻訳機能をテストする_測試一下翻譯的功能
[🔊 語音播放按鈕]
```

#### 容量限制
- 最多保存 **10 個項目**
- 超過 10 個時自動移除排序最後的項目
- 可手動清空所有歷史記錄

---

### 4. 文字轉語音 (TTS)

#### 支援範圍
- ✅ 所有輸出框 (TW、JP、EN、EXTRA)
- ✅ 所有複製歷史記錄

#### 語音設定
- 🎤 使用瀏覽器內建 **Web Speech Synthesis API**
- 🌐 自動偵測語言,選擇對應語音
- ⚡ 無需額外 API 金鑰,完全免費
- 📢 支援語速調整 (預設 0.9x)

#### 語言對應
```javascript
日文 (含平假名/片假名/漢字) → ja-JP
英文 → en-US
中文 → zh-TW
其他語言 → 自動偵測
```

---

### 5. 主題切換

#### 兩種模式
- ☀️ **淺色模式** - 白色背景,適合白天使用
- 🌙 **深色模式** - 深色背景,適合夜間使用

#### 特點
- 🎨 一鍵切換,即時生效
- 💾 自動記憶使用者偏好
- 🔄 重新載入頁面保持設定

---

## 🛠️ 技術架構

### 技術棧

```
前端框架: 純 Vanilla JavaScript (無依賴)
樣式: 原生 CSS3 (含自訂主題)
字型: LINE Seed TW (繁體中文優化)
儲存: localStorage API
語音: Web Speech Synthesis API
剪貼簿: Clipboard API
```

### 檔案結構

```
ChroLens_Echo/
├── index.html              # 單一檔案版本 (推薦部署)
├── index_modular.html      # 模組化版本 (推薦開發)
├── css/
│   └── style.css          # 所有樣式 (主題、動畫、RWD)
├── js/
│   ├── translate.js       # 翻譯核心模組
│   ├── ui.js              # UI 管理模組
│   ├── utils.js           # 工具函數模組
│   └── init.js            # 初始化模組
├── LINE Seed TW_ver02/    # 字型檔案
│   └── TTF/
│       └── LINESeedTW_TTF_Rg.ttf
├── umi_去背.ico           # 網站圖示
└── README.md              # 說明文件
```

### 核心模組說明

#### translate.js - 翻譯核心
```javascript
// 主要功能
- detectLang(text)                    // 智慧語言偵測
- translateSingle(text, src, tgt)     // 單一語言翻譯
- translateMulti()                     // 多語言平行翻譯
- translateWithDeepL(text, src, tgt)  // DeepL API 備援
- fetchWithTimeout(url, options, ms)  // 超時控制
```

#### ui.js - UI 管理
```javascript
// 主要功能
- autoTranslate()                     // 自動翻譯觸發
- updateOutputVisibility()            // 輸出框顯示控制
- handleExtraLangChange()             // 額外語言處理
- toggleTheme()                       // 主題切換
- toggleStats()                       // 統計視窗切換
```

#### utils.js - 工具函數
```javascript
// 主要功能
- copyToClipboard(elementId)          // 複製到剪貼簿
- addToCopyHistory(text, source)      // 加入複製歷史
- renderCopyHistory()                 // 渲染歷史列表
- speakText(text, lang)               // 文字轉語音
- formatTimestamp(timestamp)          // 時間格式化
```

---

## 📖 使用指南

### 基本操作

#### 1. 翻譯文字
```
1. 在輸入框輸入文字
2. 勾選想要翻譯的語言 (最多 2 個)
3. 等待 0.5 秒,自動翻譯
4. 查看翻譯結果
```

#### 2. 複製翻譯
```
方法 1: 點擊輸出框任意位置
方法 2: 點擊右下角「複製」按鈕
方法 3: 點擊複製歷史記錄項目
```

#### 3. 語音播放
```
1. 翻譯完成後,點擊「🔊」按鈕
2. 系統自動播放對應語言的語音
3. 再次點擊可重複播放
```

#### 4. 使用額外語言
```
1. 點擊 [Language] 下拉選單
2. 選擇想要的語言 (如 Korean)
3. 輸出框自動顯示為「KO」
4. 選擇 [Language] 可取消
```

### 進階技巧

#### 快捷操作
```
Ctrl + A     → 全選輸入框文字
Ctrl + C     → 複製選取的文字
Ctrl + V     → 貼上文字到輸入框
點擊輸出框  → 直接複製翻譯結果
```

#### 歷史記錄管理
```
- 最常複製的項目會自動排在最前面
- 點擊「清空」按鈕可清除所有歷史
- 歷史記錄會自動儲存,下次開啟仍存在
- 最多保留 10 個項目,超過自動刪除舊的
```

#### 主題切換時機
```
☀️ 白天使用 → 淺色模式 (白色背景)
🌙 夜間使用 → 深色模式 (深色背景)
👀 護眼需求 → 深色模式 (減少藍光)
```

---

## 🚀 部署說明

### 部署到 GitHub Pages

```bash
# 1. 推送到 GitHub
git add .
git commit -m "Deploy ChroLens_Echo"
git push origin main

# 2. 在 GitHub 專案設定中
Settings → Pages → Source: main branch → Save

# 3. 訪問網址
https://your-username.github.io/ChroLens_Echo/
```

### 部署到 Vercel

```bash
# 1. 安裝 Vercel CLI
npm i -g vercel

# 2. 部署
vercel

# 3. 跟隨提示完成部署
```

### 部署到 Netlify

```bash
# 1. 拖放整個資料夾到 Netlify Drop
https://app.netlify.com/drop

# 2. 或使用 Netlify CLI
npm install netlify-cli -g
netlify deploy
```

### 自架伺服器

```nginx
# Nginx 配置範例
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/ChroLens_Echo;
    index index.html;
    
    location / {
        try_files $uri $uri/ =404;
    }
}
```

---

## ❓ 常見問題

### Q1: 翻譯速度很慢怎麼辦?
**A:** 
- 檢查網路連線是否正常
- 系統會自動在 5 秒後切換到備援 API
- 可嘗試重新整理頁面

### Q2: 為什麼有些語言翻譯不準確?
**A:**
- 使用的是免費 API,翻譯品質可能不如專業服務
- 建議重要文件使用專業翻譯工具
- 可提供回饋幫助改善

### Q3: 複製歷史可以匯出嗎?
**A:**
- 目前版本尚未提供匯出功能
- 歷史記錄儲存在瀏覽器 localStorage
- 清除瀏覽器資料會刪除歷史記錄

### Q4: 支援行動裝置嗎?
**A:**
- ✅ 完全支援響應式設計
- ✅ 手機、平板皆可正常使用
- ✅ 建議使用現代瀏覽器 (Chrome、Safari、Firefox)

### Q5: 可以離線使用嗎?
**A:**
- ⚠️ 翻譯功能需要網路連線
- ✅ 複製歷史可離線查看
- ✅ 主題切換可離線使用

### Q6: 語音播放沒有聲音?
**A:**
- 檢查裝置音量是否開啟
- 確認瀏覽器支援 Web Speech API
- 某些語言可能沒有對應語音包

### Q7: 可以自訂 API 金鑰嗎?
**A:**
- 目前版本使用公用 API
- 如需自訂,請修改 `translate.js` 中的 API URL
- 建議進階使用者自架後端

### Q8: 統計功能暫未開放?
**A:**
- 統計功能需要後端支援
- 可參考文件整合 Google Analytics
- 或使用 Cloudflare Web Analytics

---

## 📝 更新日誌

### v2.0.0 (2025-11-02)
#### ✨ 新功能
- 新增 15 種額外語言支援
- 新增複製歷史記錄功能 (最多 10 項)
- 新增文字轉語音功能 (所有輸出框)
- 新增複製次數統計和排序
- 新增時間戳記顯示 (相對時間)

#### 🔧 改進
- 優化語言偵測邏輯
- 改善翻譯即時性
- 增強錯誤處理機制
- 優化 UI/UX 設計
- 改善深色模式對比度

#### 🐛 修復
- 修復翻譯不即時顯示的問題
- 修復語言切換時的延遲
- 修復複製功能在某些瀏覽器的問題
- 修復主題切換後樣式錯亂

#### 📦 架構
- 完成代碼模組化重構
- 分離樣式到獨立 CSS 檔案
- 分離 JavaScript 到多個模組
- 改善代碼可維護性

### v1.0.0 (2024-XX-XX)
- 初始版本發布
- 基本翻譯功能
- 深色/淺色主題
- 本地統計功能

---

## 🤝 貢獻指南

歡迎貢獻!以下是參與方式:

### 回報問題
1. 前往 [Issues](https://github.com/Lucienwooo/ChroLens_Echo/issues)
2. 點擊「New Issue」
3. 描述問題並提供截圖

### 提交功能請求
1. 前往 [Issues](https://github.com/Lucienwooo/ChroLens_Echo/issues)
2. 選擇「Feature Request」
3. 詳細描述您想要的功能

### 提交程式碼
```bash
# 1. Fork 專案
# 2. 建立分支
git checkout -b feature/your-feature

# 3. 提交變更
git commit -m "Add: your feature description"

# 4. 推送分支
git push origin feature/your-feature

# 5. 建立 Pull Request
```

### 開發指南
- 遵循現有代碼風格
- 添加適當的註解
- 測試所有變更
- 更新相關文件

---

## 📜 授權資訊

### 專案授權
本專案採用 **MIT License** 授權

```
MIT License

Copyright (c) 2025 Lucienwooo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### 第三方資源
- **LINE Seed TW 字型** - [LINE Corporation](https://seed.line.me/index_tw.html)
- **Google Translate API** - [Google LLC](https://cloud.google.com/translate)
- **DeepL API** - [DeepL SE](https://www.deepl.com/pro-api)

---

## 🔗 相關連結

- **GitHub 專案**: [ChroLens_Echo](https://github.com/Lucienwooo/ChroLens_Echo)
- **作者 Linktree**: [https://linktr.ee/lucienwooo](https://linktr.ee/lucienwooo)
- **問題回報**: [Issues](https://github.com/Lucienwooo/ChroLens_Echo/issues)
- **功能請求**: [Feature Requests](https://github.com/Lucienwooo/ChroLens_Echo/issues/new)

---

## 💖 致謝

感謝所有使用 ChroLens_Echo 的使用者!

特別感謝:
- Google Translate 提供免費 API
- DeepL 提供高品質翻譯服務
- LINE Corporation 提供優質中文字型
- GitHub 提供免費託管服務

---

## 📧 聯絡方式

如有任何問題或建議,歡迎聯繫:
- **GitHub**: [@Lucienwooo](https://github.com/Lucienwooo)
- **Linktree**: [https://linktr.ee/lucienwooo](https://linktr.ee/lucienwooo)

---

<div align="center">

**Made with ❤️ by Lucienwooo**

⭐ 如果覺得這個專案有幫助,請給個星星! ⭐

</div>
