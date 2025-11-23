# CFBot Website 自動部署方案 - 總覽

此目錄包含為 CFBot Website 專案設計的 GitHub Actions 自動部署工作流程和完整文件。

## 📁 檔案說明

### 工作流程檔案
- **`cfbot-website-deploy.yml`** - 主要的 GitHub Actions 工作流程檔案
  - 自動執行 `pnpm build`
  - 部署 `/build/client/` 到 GitHub Pages
  - 包含快取優化和安全性設定

### 文件檔案
1. **`QUICK-START.md`** - 快速開始指南 ⚡
   - 最快速的部署方式
   - 一鍵複製完整工作流程設定
   - 適合快速上手

2. **`README-cfbot-deployment.md`** - 完整部署指南 📖
   - 詳細的使用說明和步驟
   - 自訂配置選項
   - 疑難排解指引
   - 最佳實踐建議

3. **`DEPLOYMENT-CHECKLIST.md`** - 部署檢查清單 ✅
   - 部署前準備清單
   - 步驟式檢查項目
   - 常見問題處理
   - 可選配置說明

4. **`README-CFBOT-OVERVIEW.md`** (本檔案) - 總覽文件 📋
   - 所有檔案的概述
   - 使用流程建議

## 🚀 快速使用流程

### 第一次使用
1. 先閱讀 **`QUICK-START.md`** 了解基本概念
2. 複製 `cfbot-website-deploy.yml` 到你的 CFBot Website 專案
3. 按照 **`DEPLOYMENT-CHECKLIST.md`** 檢查每個步驟
4. 推送到 GitHub 並確認部署成功

### 需要深入了解
- 閱讀 **`README-cfbot-deployment.md`** 了解工作流程的詳細運作
- 查看自訂配置選項
- 了解如何針對特定需求調整工作流程

### 遇到問題時
1. 查看 **`DEPLOYMENT-CHECKLIST.md`** 的疑難排解章節
2. 參考 **`README-cfbot-deployment.md`** 的詳細說明
3. 檢查 GitHub Actions 執行日誌

## 📊 工作流程特點

### 技術規格
- **套件管理器**: pnpm 9.15.0
- **Node.js 版本**: 24.3.0
- **建置指令**: `pnpm run build`
- **輸出目錄**: `build/client/`
- **部署目標**: GitHub Pages (gh-pages branch)

### 功能特色
✅ **效能優化**
- pnpm 快取機制
- 分離建置和部署階段
- 最小化部署檔案大小

✅ **完整支援**
- SPA 路由處理 (404.html fallback)
- 繞過 Jekyll 處理 (.nojekyll)
- 自動化部署流程

✅ **安全性**
- 明確的 GITHUB_TOKEN 權限設定
- 遵循最小權限原則
- 通過 CodeQL 安全檢查

✅ **易用性**
- 完整的中文文件
- 詳細的步驟說明
- 多層次的文件支援

## 🎯 適用場景

這套工作流程適合以下專案：
- 使用 **pnpm** 作為套件管理器
- 建置輸出在 **`build/client/`** 目錄
- 需要部署到 **GitHub Pages**
- 使用 **SPA (Single Page Application)** 架構

如果你的專案不完全符合以上條件，請參考 **`README-cfbot-deployment.md`** 的自訂配置章節。

## 📝 使用前準備

在使用此工作流程前，請確保：
- [ ] 你的專案使用 pnpm
- [ ] 存在 `pnpm-lock.yaml` 檔案
- [ ] `package.json` 中有 `build` 腳本
- [ ] 本地可以成功執行 `pnpm run build`
- [ ] 建置輸出在 `build/client/` 目錄
- [ ] GitHub 倉庫已啟用 GitHub Pages

## 🔄 更新與維護

### 版本更新
如需更新 Node.js 或 pnpm 版本：
1. 修改工作流程檔案中的版本號
2. 測試確保建置成功
3. 更新相關文件中的版本說明

### 文件維護
如發現文件需要改進：
1. 參考現有文件的格式和風格
2. 保持中文表達的清晰和準確
3. 確保所有範例代碼可以正常運作

## 📞 取得協助

遇到問題？
1. 檢查 **`DEPLOYMENT-CHECKLIST.md`** 的疑難排解部分
2. 閱讀 **`README-cfbot-deployment.md`** 的詳細說明
3. 查看 GitHub Actions 的執行日誌
4. 參考 [GitHub Actions 官方文件](https://docs.github.com/en/actions)

## 🎉 成功案例

使用此工作流程後，你將獲得：
- ✅ 自動化的建置和部署流程
- ✅ 每次推送到 main 分支自動更新網站
- ✅ 可靠且可重現的建置環境
- ✅ 安全的權限管理
- ✅ 優化的建置速度

---

**建立日期**: 2025-11-23  
**適用專案**: CFBot Website (510208/cfbot-website)  
**基於**: 510208.github.io 的部署經驗

如有任何問題或建議，歡迎提出 Issue 或 Pull Request！
