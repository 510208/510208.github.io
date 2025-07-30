# 部署指南

本文檔說明如何將 510208.github.io 專案部署到不同的平台。

## 🚀 GitHub Pages（推薦）

專案已配置為自動部署到 GitHub Pages。

### 自動部署

1. **推送到主分支**

   ```bash
   git push origin main
   ```

2. **GitHub Actions 自動處理**

   - 自動安裝依賴
   - 生成專案數據
   - 構建專案
   - 部署到 GitHub Pages

3. **訪問網站**

   網站將在 `https://510208.github.io` 上線

### 手動觸發部署

在 GitHub 倉庫頁面：

1. 點擊 "Actions" 標籤
2. 選擇部署工作流程
3. 點擊 "Run workflow"

## 🔧 其他平台部署

### Vercel

1. **連接 GitHub 倉庫**

   - 前往 [Vercel](https://vercel.com)
   - 選擇 "Import Project"
   - 連接您的 GitHub 倉庫

2. **配置構建設置**

   ```
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

3. **設置環境變數**

   - 在 Vercel 專案設置中添加 `GITHUB_TOKEN`

4. **部署**
   - Vercel 會自動構建和部署
   - 每次推送都會觸發新的部署

### Netlify

1. **連接倉庫**

   - 登入 [Netlify](https://netlify.com)
   - 點擊 "New site from Git"
   - 選擇您的 GitHub 倉庫

2. **構建設置**

   ```
   Build command: npm run build
   Publish directory: dist
   ```

3. **環境變數**

   - 在站點設置中添加 `GITHUB_TOKEN`

4. **自動部署**
   - 推送到主分支即可自動部署

### 自託管服務器

1. **構建專案**

   ```bash
   # 本地構建
   npm install
   npm run build
   ```

2. **上傳文件**

   ```bash
   # 將 dist 資料夾內容上傳到服務器
   scp -r dist/* user@your-server:/path/to/webroot/
   ```

3. **Nginx 配置範例**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           root /path/to/webroot;
           index index.html;
           try_files $uri $uri/ /index.html;
       }

       # 靜態資源快取
       location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }
   }
   ```

## 🔐 環境變數配置

不同平台的環境變數設置：

### GitHub Actions

在 GitHub 倉庫設置中：

1. 前往 Settings → Secrets and variables → Actions
2. 添加 `GITHUB_TOKEN` 密鑰

### Vercel

在專案設置中：

1. 前往 Settings → Environment Variables
2. 添加 `GITHUB_TOKEN`

### Netlify

在站點設置中：

1. 前往 Site settings → Environment variables
2. 添加 `GITHUB_TOKEN`

## 📊 構建優化

### 性能優化

1. **代碼分割**

   - Vite 自動進行代碼分割
   - 大型依賴會分離到獨立的 chunk

2. **資源壓縮**

   ```bash
   # 構建時自動啟用
   npm run build
   ```

3. **圖片優化**
   - 使用 WebP 格式
   - 適當的圖片尺寸
   - 懶加載實現

### SEO 優化

1. **Meta 標籤**

   - 在 `index.html` 中配置
   - OpenGraph 標籤支援

2. **Sitemap**
   - 靜態 sitemap.xml
   - 搜索引擎友好的 URL

## 🚨 常見問題

### 構建失敗

1. **檢查 Node.js 版本**

   ```bash
   node --version  # 應該 >= 18
   ```

2. **清理緩存**

   ```bash
   npm ci
   rm -rf node_modules
   npm install
   ```

3. **檢查環境變數**
   - 確保 `GITHUB_TOKEN` 已正確設置
   - Token 需要適當的權限

### 部署後無法訪問

1. **檢查路由配置**

   - SPA 需要重定向到 index.html

2. **檢查靜態資源路徑**

   - 確保 base URL 配置正確

3. **瀏覽器快取**
   - 清除瀏覽器快取
   - 強制重新整理 (Ctrl+F5)

## 📈 監控和分析

### Google Analytics

在 `src/main.tsx` 中已集成 GTM：

```typescript
import TagManager from "@sooro-io/react-gtm-module";
```

### 錯誤監控

可以集成如 Sentry 等錯誤監控服務：

```bash
npm install @sentry/react
```

## 🔄 持續部署

### 自動化工作流程

1. **開發** → 推送到 `dev` 分支
2. **測試** → 創建 Pull Request
3. **發佈** → 合併到 `main` 分支
4. **部署** → 自動部署到生產環境

### 版本管理

使用語義化版本：

```bash
npm version patch  # 修補版本
npm version minor  # 次要版本
npm version major  # 主要版本
```

---

如需更多協助，請查看 [GitHub Issues](https://github.com/510208/510208.github.io/issues) 或創建新的 Issue。
