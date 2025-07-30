# 510208.github.io

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://510208.github.io)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deployed-blue?logo=github)](https://510208.github.io)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Latest-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.5-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.11-38B2AC?logo=tailwindcss)](https://tailwindcss.com/)

> 我的個人網站，展示我的專案作品集、技能和友好連結。

## 🌟 功能特色

- **響應式設計** - 完美適配桌面、平板和手機
- **暗色模式支援** - 自動適應系統主題偏好
- **動態專案展示** - 自動從 GitHub API 獲取專案資訊
- **流暢動畫效果** - 使用 Lenis 和 TypeIt 提供優雅的使用者體驗
- **粒子背景特效** - 使用 @tsparticles 創造視覺吸引力
- **SEO 優化** - 完整的 meta 標籤和 sitemap
- **國際化支援** - 繁體中文界面

## 🛠️ 技術棧

### 前端框架

- **React 19.1.0** - 現代化的 UI 函式庫
- **TypeScript** - 型別安全的 JavaScript
- **Vite 7.0.5** - 快速的構建工具

### UI 組件與樣式

- **Tailwind CSS 4.1.11** - 實用優先的 CSS 框架
- **Radix UI** - 無樣式、可訪問的 UI 組件
- **Lucide React** - 美觀的圖標庫
- **Fontsource** - 自託管字體（Inter、Fira Code、Noto Sans TC）

### 動畫與特效

- **Lenis** - 平滑滾動效果
- **TypeIt React** - 打字機動畫
- **@tsparticles** - 粒子系統
- **React Fast Marquee** - 滾動跑馬燈
- **React Headroom** - 動態導航列

### 3D 與遊戲

- **Three.js** - 3D 圖形渲染
- **skin3d** - Minecraft 皮膚 3D 展示

### 開發工具

- **ESLint** - 代碼品質檢查
- **Vite Plugin Legacy** - 舊瀏覽器兼容性

## 🚀 快速開始

### 環境需求

- Node.js 18+
- npm/yarn/pnpm
- Git

### 安裝步驟

1. **克隆專案**

   ```bash
   git clone https://github.com/510208/510208.github.io.git
   cd 510208.github.io
   ```

2. **安裝依賴**

   ```bash
   # 使用 npm
   npm install

   # 或使用 yarn
   yarn install

   # 或使用 ni (推薦)
   ni
   ```

3. **設置環境變數**

   ```bash
   # 複製環境變數範本
   cp .env.example .env

   # 編輯 .env 文件，填入您的 GitHub Token
   # GITHUB_TOKEN=your_github_token_here
   ```

4. **啟動開發服務器**

   ```bash
   npm run dev
   # 或
   yarn dev
   # 或
   nr dev
   ```

5. **在瀏覽器中開啟**

   開啟 [http://localhost:5173](http://localhost:5173) 查看網站

## 📝 可用腳本

```bash
# 開發模式
npm run dev

# 生成專案數據（手動）
npm run generate-projects

# 構建專案
npm run build

# 預覽構建結果
npm run preview

# 代碼檢查
npm run lint
```

## 🔧 GitHub Token 設置

為了自動獲取 GitHub 專案數據，您需要設置 GitHub Personal Access Token：

1. 前往 [GitHub Personal Access Tokens](https://github.com/settings/tokens)
2. 點擊 "Generate new token" → "Generate new token (classic)"
3. 選擇適當的權限：
   - 公共倉庫：勾選 `public_repo`
   - 私人倉庫：勾選整個 `repo` 範圍
4. 將生成的 token 填入 `.env` 文件

## 📁 專案結構

```
510208.github.io/
├── docs/                      # 文檔資料夾
│   ├── README.md              # 主要說明文件
│   └── SETUP.md               # 設置指南
├── public/                    # 靜態資源
│   ├── assets/                # 圖片資源
│   ├── projects-data.json     # 自動生成的專案資料
│   └── ...
├── scripts/                   # 構建腳本
│   └── generate-projects-data.js  # 專案數據生成腳本
├── src/                       # 源代碼
│   ├── assets/                # 組件資源
│   ├── components/            # React 組件
│   │   ├── ui/                # UI 基礎組件
│   │   └── section/           # 頁面區塊組件
│   ├── lib/                   # 工具函式
│   ├── pages/                 # 頁面組件
│   └── ...
├── .env                       # 環境變數（需自行創建）
├── .env.example              # 環境變數範本
├── package.json              # 專案配置
├── vite.config.ts            # Vite 配置
└── ...
```

## 🎨 自定義設置

### 修改個人資訊

1. **個人資料** - 編輯 `src/components/section/Home/` 中的組件
2. **技能標籤** - 修改 `src/components/section/Home/SkillGrid.tsx`
3. **專案展示** - 專案數據會自動從 GitHub 獲取
4. **友好連結** - 編輯 `src/components/section/Friends/FriendList.tsx`

### 主題配置

- **顏色配置** - 修改 `tailwind.config.js`
- **字體配置** - 在 `src/main.tsx` 中調整字體導入
- **暗色模式** - 使用 `next-themes` 提供的主題切換

## 🚀 部署

### GitHub Pages

專案已配置為自動部署到 GitHub Pages：

1. 推送代碼到 `main` 分支
2. GitHub Actions 會自動構建並部署
3. 網站將在 `https://510208.github.io` 上線

### 手動部署

```bash
# 構建專案
npm run build

# 部署 dist 資料夾到您的服務器
```

## 🤝 貢獻指南

歡迎提交 Issue 和 Pull Request！

詳細的貢獻指南請查看 [CONTRIBUTING.md](./CONTRIBUTING.md)。

1. Fork 這個專案
2. 創建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

## 🚀 部署指南

專案支援多種部署方式，詳細說明請查看 [DEPLOYMENT.md](./DEPLOYMENT.md)：

- **GitHub Pages** (推薦) - 自動部署
- **Vercel** - 連接 GitHub 自動部署
- **Netlify** - 快速靜態站點部署
- **自託管服務器** - 完全控制的部署方案

## 📄 授權條款

本專案採用 MIT 授權條款 - 查看 [LICENSE](LICENSE) 文件了解詳情。

## 📧 聯絡方式

- **GitHub**: [@510208](https://github.com/510208)
- **網站**: [https://510208.github.io](https://510208.github.io)
- **Email**: [聯絡方式請見網站]

## 🙏 致謝

感謝以下開源專案：

- [React](https://reactjs.org/) - UI 函式庫
- [Vite](https://vitejs.dev/) - 構建工具
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [Radix UI](https://www.radix-ui.com/) - UI 組件
- [Three.js](https://threejs.org/) - 3D 圖形
- 以及所有其他依賴的開源專案

## 📊 統計資訊

[![GitHub stars](https://img.shields.io/github/stars/510208/510208.github.io?style=social)](https://github.com/510208/510208.github.io/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/510208/510208.github.io?style=social)](https://github.com/510208/510208.github.io/network/members)
[![GitHub issues](https://img.shields.io/github/issues/510208/510208.github.io)](https://github.com/510208/510208.github.io/issues)
[![GitHub license](https://img.shields.io/github/license/510208/510208.github.io)](https://github.com/510208/510208.github.io/blob/main/LICENSE)

---

<p align="center">
  用 ❤️ 與 <a href="https://reactjs.org/">React</a> 製作
</p>
