# 專案設置說明

## GitHub Token 設置

1. 前往 [GitHub Personal Access Tokens](https://github.com/settings/tokens) 頁面
2. 點擊 "Generate new token" -> "Generate new token (classic)"
3. 為 token 命名（例如：`510208.github.io-projects`）
4. 選擇過期時間
5. 選擇權限：
   - 對於公共倉庫，只需要勾選 `public_repo`
   - 對於私人倉庫，需要勾選整個 `repo` 範圍
6. 點擊 "Generate token"
7. 複製生成的 token

## 環境變數設置

1. 複製 `.env.example` 為 `.env`：

   ```bash
   cp .env.example .env
   ```

2. 在 `.env` 文件中填入您的 GitHub token：
   ```
   GITHUB_TOKEN=ghp_your_token_here
   ```

## 構建和開發

### 開發模式

```bash
npm run dev
# 或
yarn dev
```

### 生成專案數據（手動）

```bash
npm run generate-projects
# 或
yarn generate-projects
```

### 構建專案

```bash
npm run build
# 或
yarn build
```

構建時會自動執行以下步驟：

1. 生成專案數據（`generate-projects`）
2. TypeScript 編譯（`tsc -b`）
3. Vite 構建（`vite build`）

## 專案數據

專案數據會生成到 `public/projects-data.json`，包含以下資訊：

- 專案名稱
- 描述
- 程式語言
- 星星數量
- Fork 數量
- 最後更新時間
- 主題標籤
- 許可證資訊
- GitHub URL
- OpenGraph 圖片 URL

> **注意**: 只會包含非 Fork 的專案。
