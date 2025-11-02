# ChroLens_Echo - 無廣告多語言翻譯工具

## 📖 專案簡介

ChroLens_Echo 是一個簡潔、快速、無廣告的網頁翻譯工具,支援多種語言即時翻譯。

**特色:**
- ✅ 完全免費,無廣告
- ✅ 支援 18+ 種語言
- ✅ 深色/淺色主題
- ✅ 智慧複製歷史
- ✅ 離線可用 (PWA 支援)
- ✅ 隱私保護 (無伺服器追蹤)

---

## 🚀 版本資訊

**當前版本:** v2.0  
**發布日期:** 2025年11月2日

### 🎯 v2.0 新功能
1. 🌍 新增語言下拉選單 (15種額外語言)
2. 📋 智慧複製歷史記錄 (最多10個)
3. 📊 統計功能強化說明
4. 🤖 智慧翻譯功能評估
5. 🏗️ 代碼模組化重構
6. 🎨 保持原有外觀設計

---

## 📁 檔案結構

```
ChroLens_Echo/
├── index.html                      # 單一檔案版本 (推薦一般使用)
├── index_modular.html              # 模組化版本 (推薦開發使用)
│
├── css/
│   └── style.css                   # 樣式表模組
│
├── js/
│   ├── translate.js                # 翻譯核心模組
│   ├── ui.js                       # UI 管理模組
│   ├── utils.js                    # 工具函數模組
│   └── init.js                     # 初始化模組
│
├── 📚 說明文件/
│   ├── 快速開始指南.md              # 新手必讀!
│   ├── 更新說明.md                  # 詳細功能說明
│   ├── 統計功能與AI翻譯說明.md      # 進階功能實作指南
│   └── 代碼分析報告.md              # 代碼品質分析
│
├── LINE Seed TW_ver02/             # 字型檔案
│   └── TTF/
│       └── LINESeedTW_TTF_Rg.ttf
│
├── umi_去背.ico                     # 網站圖示
├── LICENSE                         # 授權條款
└── README.md                       # 本文件
```

---

## 🎯 快速開始

### 方法 1: 直接開啟 (最簡單)
1. 下載整個專案資料夾
2. 雙擊 `index.html` 
3. 開始使用!

### 方法 2: 部署到網站
1. 上傳所有檔案到網站主機
2. 訪問 `index.html` 或 `index_modular.html`
3. 完成!

### 方法 3: 本地伺服器 (開發用)
```bash
# 使用 Python
python -m http.server 8000

# 使用 Node.js
npx http-server

# 訪問 http://localhost:8000
```

---

## 🌍 支援語言

### 基本語言 (勾選框)
- 🇹🇼 繁體中文
- 🇯🇵 日本語
- 🇬🇧 English

### 額外語言 (下拉選單)
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

---

## 💡 主要功能

### 1. 即時翻譯
- 輸入延遲 0.5 秒自動翻譯
- 支援多語言同時翻譯
- 智慧語言偵測

### 2. 複製歷史
- 自動記錄複製內容
- 智慧排序 (按複製次數)
- 最多保存 10 個項目
- 點擊即可複製

### 3. 主題切換
- 深色主題 (預設)
- 淺色主題
- 自動記憶偏好

### 4. 統計功能
- 每日翻譯次數
- 本地訪問記錄
- 支援整合 Google Analytics

### 5. API 備援
- Google Apps Script API (主要)
- DeepL API (備援)
- Google Translate 網頁 (最終備援)

---

## 🔧 技術規格

### 前端技術
- 純 HTML5 + CSS3 + JavaScript (ES6+)
- 無需框架或建置工具
- 完全靜態,可部署於任何主機

### API 整合
- Google Apps Script Web API
- DeepL Free API
- Fetch API with AbortController (超時控制)

### 瀏覽器支援
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### 儲存方式
- localStorage (複製歷史、統計、主題偏好)
- 無後端資料庫
- 完全本地化

---

## 📚 文件指南

### 🎯 新手必讀
**`快速開始指南.md`**
- 功能介紹
- 使用技巧
- 常見問題

### 📖 詳細說明
**`更新說明.md`**
- 完整功能說明
- 技術細節
- 測試清單

### 🤖 進階開發
**`統計功能與AI翻譯說明.md`**
- 統計功能實作方案
- AI 翻譯功能評估
- 整合教學

### 🔍 代碼分析
**`代碼分析報告.md`**
- 代碼品質評估
- 改進建議
- 未來規劃

---

## 🎨 版本選擇

### `index.html` - 單一檔案版
**適合:**
- 一般使用者
- 快速部署
- 簡單維護

**特點:**
- 所有代碼在一個檔案
- 約 850 行代碼
- 開啟即用

### `index_modular.html` - 模組化版
**適合:**
- 開發者
- 團隊協作
- 功能擴展

**特點:**
- 代碼分離為 4 個 JS 模組
- 結構清晰
- 易於維護

**兩個版本功能完全相同!**

---

## 🔒 隱私政策

- ✅ 不收集個人資訊
- ✅ 不使用追蹤 Cookie
- ✅ 翻譯內容不上傳到自有伺服器
- ✅ 統計數據僅儲存在本地瀏覽器
- ⚠️ 翻譯內容會傳送至 Google/DeepL API

**完全開源,代碼透明!**

---

## 📊 統計功能說明

目前的統計功能是**本地記錄**,無法追蹤真實的不重複 IP。

如需真實的訪問統計,建議整合:
1. **Google Analytics** (最推薦)
2. **Cloudflare Web Analytics** (最注重隱私)
3. **自建後端 API** (完全控制)

詳細教學請參考 `統計功能與AI翻譯說明.md`

---

## 🤖 智慧翻譯功能 (規劃中)

### 可立即實現 (無需額外 API)
- ✅ 專業術語詞庫
- ✅ 使用者自訂詞彙替換

### 需要 AI API
- ⚠️ 上下文理解 (記憶前文)
- ⚠️ AI 改寫潤飾功能

詳細評估請參考 `統計功能與AI翻譯說明.md`

---

## 🛠️ 開發指南

### 本地開發
```bash
# 克隆專案
git clone https://github.com/Lucienwooo/ChroLens_Echo.git

# 進入目錄
cd ChroLens_Echo

# 啟動本地伺服器
python -m http.server 8000

# 訪問 http://localhost:8000
```

### 修改模組
1. 編輯 `js/` 資料夾中的對應模組
2. 使用 `index_modular.html` 測試
3. 重新整理瀏覽器即可看到變更

### 建立單一檔案版
如果您修改了模組化版本,可以手動合併:
1. 複製 `css/style.css` 內容到 `<style>` 標籤
2. 複製各 JS 模組內容到 `<script>` 標籤
3. 保持載入順序: translate.js → ui.js → utils.js → init.js

---

## 📝 更新日誌

### v2.0 (2025年11月2日)
- ✅ 新增語言下拉選單 (15種語言)
- ✅ 新增複製歷史記錄功能
- ✅ 提供統計功能整合方案
- ✅ 提供智慧翻譯功能評估
- ✅ 完成代碼模組化重構
- ✅ 修復翻譯即時性問題
- ✅ 改進語言偵測邏輯
- ✅ 增強錯誤處理

### v1.0 (初始版本)
- 基本翻譯功能
- 中日英三語支援
- 深色/淺色主題
- 本地統計功能

---

## 🤝 貢獻指南

歡迎貢獻! 以下是建議的貢獻方式:

1. Fork 本專案
2. 創建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交變更 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

### 貢獻領域
- 🌍 新增語言支援
- 🎨 UI/UX 改進
- 🐛 Bug 修復
- 📚 文件完善
- 🧪 測試覆蓋
- ⚡ 效能優化

---

## 📄 授權條款

本專案採用 MIT 授權條款。

查看 [LICENSE](LICENSE) 檔案了解詳情。

---

## 💬 聯絡方式

**開發者:** Lucienwooo

**聯絡管道:**
- 🔗 Linktree: https://linktr.ee/lucienwooo
- 💻 GitHub: https://github.com/Lucienwooo

---

## 🙏 致謝

感謝以下技術和服務:
- Google Apps Script API
- DeepL Translation API
- LINE Seed TW 字型
- 所有使用者的支持!

---

## ⭐ 如果您喜歡這個專案

- ⭐ 給我們一個 Star
- 🔀 分享給您的朋友
- 💬 提供意見回饋
- 🤝 參與貢獻

---

*最後更新: 2025年11月2日*  
*專案版本: v2.0*  
*文件版本: 1.0*
