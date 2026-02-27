# Jenny & Poy 婚禮網站

## 檔案結構

```
jenny_poy_weddings/
├── index.html              # 主婚禮頁面
├── rsvp.html               # 出席回覆表單
├── css/
│   └── style.css           # 全站樣式
├── js/
│   ├── main.js             # 主要 JavaScript（導覽、相簿燈箱）
│   └── google-apps-script.js  # Google Apps Script 說明與程式碼
├── images/                 # 放置婚禮照片
└── README.md
```

## 本地測試

```bash
# 方法一：Python（推薦）
python3 -m http.server 8080
# 開啟 http://localhost:8080

# 方法二：Node.js npx
npx serve .
```

## 部署到 GitHub Pages

1. 在 GitHub 建立新 Repository，名稱為 `[username].github.io` 或任意名稱
2. 上傳所有檔案：
   ```bash
   git init
   git add .
   git commit -m "Initial wedding website"
   git remote add origin https://github.com/[username]/[repo].git
   git push -u origin main
   ```
3. 到 GitHub → Repository → Settings → Pages → Source 選 `main` branch
4. 網站將發布於 `https://[username].github.io/[repo]/`

## Google Sheets 表單整合

詳細說明請見 `js/google-apps-script.js`。

1. 建立 Google Sheets 試算表
2. 新增 Apps Script，貼入 `google-apps-script.js` 中的程式碼
3. 部署為網頁應用程式，取得網址
4. 將網址填入 `rsvp.html` 中的 `SCRIPT_URL` 變數

## 內容替換清單

在 `index.html` 及 `rsvp.html` 中搜尋以下佔位符並替換：

- `Jenny` → 新娘姓名
- `Poy` → 新郎姓名
- `2025 年 XX 月 XX 日` → 婚禮日期
- `婚宴場地名稱` → 實際場地
- `your@email.com` → 聯絡 Email
- `XXXX 年 XX 月 XX 日`（回覆截止）→ 截止日期
- 故事內容、行程、場地資訊 → 實際內容
- 照片 → 放入 `images/` 資料夾並更新 HTML
