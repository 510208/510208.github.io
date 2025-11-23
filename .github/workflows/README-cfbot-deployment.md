# CFBot Website GitHub Actions 部署工作流程

此工作流程文件 (`cfbot-website-deploy.yml`) 專為 CFBot Website 專案設計，提供自動化建置和部署到 GitHub Pages 的功能。

## 📋 功能特色

- ✅ 自動執行 `pnpm build` 建置專案
- ✅ 將建置結果從 `/build/client/` 部署到 GitHub Pages
- ✅ 支援 pnpm 快取，加速建置過程
- ✅ 自動處理 SPA 路由（404.html）
- ✅ 避免 Jekyll 處理（.nojekyll）

## 🚀 使用方法

### 1. 複製工作流程文件

將 `cfbot-website-deploy.yml` 複製到目標專案的 `.github/workflows/` 目錄：

```bash
# 在 CFBot Website 專案中
mkdir -p .github/workflows
cp /path/to/cfbot-website-deploy.yml .github/workflows/deploy.yml
```

### 2. 確認專案結構

確保你的專案符合以下要求：

- 使用 `pnpm` 作為套件管理器
- `package.json` 中有 `build` 腳本
- 建置輸出目錄為 `build/client/`

### 3. 設定 GitHub Pages

在 GitHub 專案設定中：

1. 前往 **Settings** > **Pages**
2. Source 選擇 **GitHub Actions** 或 **gh-pages branch**（取決於部署方式）
3. 確保 GitHub Token 有適當的權限

### 4. 推送到 main 分支

```bash
git add .
git commit -m "Add GitHub Actions workflow"
git push origin main
```

工作流程將自動觸發並開始建置和部署。

## 🔧 工作流程說明

### 建置階段 (Build Job)

1. **Checkout repo** - 檢出程式碼
2. **Setup Node** - 安裝 Node.js 24.3.0
3. **Install pnpm** - 安裝 pnpm 9.15.0
4. **Setup pnpm cache** - 設定 pnpm 快取以加速建置
5. **Install dependencies** - 安裝專案依賴（使用 `--frozen-lockfile`）
6. **Build project** - 執行 `pnpm run build`
7. **Add .nojekyll file** - 避免 Jekyll 處理靜態文件
8. **Copy 404.html** - 為 SPA 路由設定 fallback
9. **Upload artifact** - 上傳建置結果

### 部署階段 (Deploy Job)

1. **Download artifact** - 下載建置結果
2. **Deploy to GitHub Pages** - 使用 peaceiris/actions-gh-pages 部署到 gh-pages 分支

## ⚙️ 自訂設定

### 修改 Node.js 版本

```yaml
- name: Setup Node
  uses: actions/setup-node@v4
  with:
    node-version: 20.11.0  # 修改為所需版本
```

### 修改 pnpm 版本

```yaml
- name: Install pnpm
  uses: pnpm/action-setup@v4
  with:
    version: 8  # 修改為所需版本
```

### 修改建置目錄

如果建置輸出目錄不同，請修改：

```yaml
- name: Add .nojekyll file
  run: echo > your/build/directory/.nojekyll

- name: Copy 404.html
  run: cp your/build/directory/index.html your/build/directory/404.html

- name: Upload production-ready build files
  uses: actions/upload-artifact@v4
  with:
    name: production-files
    path: ./your/build/directory
```

### 使用自訂 Secret Token

如果需要使用自訂 token（例如有更多權限或跨倉庫部署）：

```yaml
- name: Deploy to GitHub Pages
  uses: peaceiris/actions-gh-pages@v4
  with:
    personal_token: ${{ secrets.DEPLOY_TOKEN }}  # 使用自訂 secret
    publish_dir: ./build/client
```

記得在專案的 **Settings** > **Secrets and variables** > **Actions** 中新增對應的 secret。

## 📝 注意事項

1. **pnpm-lock.yaml** - 確保專案中有此文件，用於快取依賴
2. **建置腳本** - 確保 `package.json` 中的 `build` 腳本正確設定
3. **環境變數** - 如果建置過程需要環境變數，可在 `build` job 中添加：

```yaml
jobs:
  build:
    name: Build
    runs-on: ubuntu-latest
    env:
      NODE_ENV: production
      # 其他需要的環境變數
```

4. **GitHub Pages 設定** - 確保倉庫的 GitHub Pages 功能已啟用

## 🔍 監控部署狀態

部署完成後，可以在以下位置查看狀態：

- **Actions** 頁面：查看工作流程執行歷史
- **Environments** 頁面：查看 github-pages 環境部署記錄
- **Settings > Pages**：查看當前發布的 URL

## 🆘 疑難排解

### 建置失敗

- 檢查 `pnpm run build` 在本地是否可以正常執行
- 確認所有依賴都已正確列在 `package.json` 中
- 查看 Actions 日誌中的錯誤訊息

### 部署失敗

- 確認 GitHub Token 有足夠權限
- 檢查 `build/client/` 目錄是否包含預期的檔案
- 確認 GitHub Pages 設定正確

### 快取問題

如果遇到快取相關問題，可以在 Actions 介面中手動清除快取，或在工作流程中移除快取步驟。

## 📚 相關資源

- [GitHub Actions 文檔](https://docs.github.com/en/actions)
- [pnpm 文檔](https://pnpm.io/)
- [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)
- [GitHub Pages 文檔](https://docs.github.com/en/pages)

---

此工作流程基於 510208.github.io 的部署經驗改編，適配 CFBot Website 專案的需求。
