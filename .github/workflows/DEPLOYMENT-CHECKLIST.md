# CFBot Website 部署檢查清單

使用此檢查清單確保正確設定 GitHub Actions 自動部署。

## 📋 部署前檢查

### 專案結構檢查

- [ ] 專案使用 `pnpm` 作為套件管理器
- [ ] 存在 `pnpm-lock.yaml` 文件
- [ ] `package.json` 中包含 `build` 腳本
- [ ] 執行 `pnpm run build` 能成功建置
- [ ] 建置輸出位於 `build/client/` 目錄
- [ ] `build/client/` 目錄中包含 `index.html`

### GitHub 倉庫設定

- [ ] 倉庫已建立且可以推送程式碼
- [ ] 已將工作流程文件複製到 `.github/workflows/` 目錄
- [ ] 工作流程文件名稱為有意義的名稱（如 `deploy.yml`）

### GitHub Pages 設定

- [ ] 前往 **Settings** > **Pages**
- [ ] 選擇部署來源（建議使用 **gh-pages branch**）
- [ ] 確認 GitHub Actions 有寫入權限
  - 前往 **Settings** > **Actions** > **General**
  - 在 **Workflow permissions** 中選擇 **Read and write permissions**
  - 勾選 **Allow GitHub Actions to create and approve pull requests**

## 🚀 部署步驟

1. **推送工作流程文件**
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Add GitHub Actions deployment workflow"
   git push origin main
   ```

2. **監控首次部署**
   - 前往 **Actions** 頁面
   - 查看工作流程是否成功執行
   - 檢查每個步驟的日誌

3. **驗證部署結果**
   - 前往 **Settings** > **Pages** 查看發布的 URL
   - 訪問網站確認正常運作
   - 測試所有頁面和路由

## 🔧 常見問題處理

### 建置失敗

如果建置階段失敗：

1. **檢查本地建置**
   ```bash
   pnpm install
   pnpm run build
   ```
   確保本地可以成功建置

2. **檢查 Node.js 版本**
   - 工作流程使用 Node.js 24.3.0
   - 確認專案支援此版本，或修改工作流程中的版本

3. **檢查依賴**
   - 確認所有依賴都在 `package.json` 中
   - 檢查是否有缺少的環境變數

### 部署失敗

如果部署階段失敗：

1. **檢查權限**
   - 確認 GitHub Token 有足夠權限
   - 檢查 Workflow permissions 設定

2. **檢查 gh-pages 分支**
   - 查看是否成功建立 gh-pages 分支
   - 檢查分支內容是否正確

3. **檢查 GitHub Pages 設定**
   - 確認 Pages 來源設定正確
   - 確認沒有自訂網域衝突

### 網站無法訪問

如果網站無法正常顯示：

1. **檢查 404 錯誤**
   - 確認 404.html 已正確複製
   - 檢查路由設定

2. **檢查資源路徑**
   - 確認 CSS/JS 路徑正確
   - 檢查是否需要設定 base URL

3. **清除快取**
   - 使用無痕模式或清除瀏覽器快取
   - 等待 CDN 快取更新（可能需要幾分鐘）

## 📝 可選配置

### 新增環境變數

如果專案需要環境變數，在工作流程中添加：

```yaml
jobs:
  build:
    name: Build
    runs-on: ubuntu-latest
    env:
      NODE_ENV: production
      VITE_API_URL: ${{ secrets.API_URL }}
```

然後在 GitHub 設定中新增對應的 Secrets：
- **Settings** > **Secrets and variables** > **Actions**
- 點擊 **New repository secret**
- 添加所需的 secrets

### 自訂觸發條件

預設在推送到 `main` 分支時觸發，可以修改為：

```yaml
on:
  push:
    branches:
      - main
      - develop
  pull_request:
    branches:
      - main
  workflow_dispatch:  # 允許手動觸發
```

### 新增通知

可以在工作流程結束時發送通知：

```yaml
- name: Notify deployment status
  if: always()
  run: |
    echo "Deployment completed with status: ${{ job.status }}"
```

## ✅ 部署完成確認

- [ ] 工作流程執行成功（綠色勾勾）
- [ ] GitHub Pages 顯示正確的 URL
- [ ] 網站可以正常訪問
- [ ] 所有頁面和功能正常運作
- [ ] 響應式設計在不同裝置上正常顯示

## 🎉 成功！

恭喜！CFBot Website 已成功設定自動部署。

後續只需要推送程式碼到 `main` 分支，GitHub Actions 就會自動建置和部署網站。

---

如有任何問題，請參考：
- [GitHub Actions 文檔](https://docs.github.com/en/actions)
- [詳細部署指南](./README-cfbot-deployment.md)
