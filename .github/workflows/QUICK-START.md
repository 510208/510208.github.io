# CFBot Website - 快速部署指南

## 🎯 一鍵複製指令

### 1. 複製工作流程文件到 CFBot Website 專案

```bash
# 假設你在 CFBot Website 專案根目錄
mkdir -p .github/workflows
```

### 2. 建立 deploy.yml 文件

在 `.github/workflows/deploy.yml` 中貼上以下內容：

```yaml
name: Deploy CFBot Website

on:
  push:
    branches:
      - main

jobs:
  build:
    name: Build
    runs-on: ubuntu-latest
    permissions:
      contents: read

    steps:
      - name: Checkout repo
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 24.3.0

      - name: Install pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 9.15.0

      - name: Get pnpm store directory
        shell: bash
        run: |
          echo "STORE_PATH=$(pnpm store path --silent)" >> $GITHUB_ENV

      - name: Setup pnpm cache
        uses: actions/cache@v4
        with:
          path: ${{ env.STORE_PATH }}
          key: ${{ runner.os }}-pnpm-store-${{ hashFiles('**/pnpm-lock.yaml') }}
          restore-keys: |
            ${{ runner.os }}-pnpm-store-

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Build project
        run: pnpm run build

      - name: Add .nojekyll file
        run: touch build/client/.nojekyll

      - name: Copy 404.html
        run: cp build/client/index.html build/client/404.html

      - name: Upload production-ready build files
        uses: actions/upload-artifact@v4
        with:
          name: production-files
          path: ./build/client

  deploy:
    name: Deploy
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    permissions:
      contents: write

    steps:
      - name: Download artifact
        uses: actions/download-artifact@v4
        with:
          name: production-files
          path: ./build/client

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build/client
```

### 3. 設定 GitHub Actions 權限

```bash
# 在 GitHub 網頁介面操作：
# Settings > Actions > General > Workflow permissions
# 選擇 "Read and write permissions"
```

### 4. 推送並部署

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions deployment workflow"
git push origin main
```

## ✨ 就這麼簡單！

推送後，前往 GitHub 的 **Actions** 頁面查看部署進度。
部署完成後，在 **Settings > Pages** 可以找到網站 URL。

---

## 📚 詳細文檔

- [完整部署指南](./README-cfbot-deployment.md)
- [部署檢查清單](./DEPLOYMENT-CHECKLIST.md)
- [原始工作流程文件](./cfbot-website-deploy.yml)

## 🆘 需要幫助？

如果遇到問題，請檢查：
1. 本地執行 `pnpm run build` 是否成功
2. 建置輸出是否在 `build/client/` 目錄
3. GitHub Actions 權限是否正確設定
4. `pnpm-lock.yaml` 文件是否存在

---

**專案需求：**
- Node.js 24.3.0 或相容版本
- pnpm 9.x
- 建置輸出目錄：`build/client/`
- 建置指令：`pnpm run build`
