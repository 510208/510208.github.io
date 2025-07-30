# 貢獻指南

感謝您對 510208.github.io 專案的興趣！我們歡迎所有形式的貢獻。

## 🤝 如何貢獻

### 報告問題

如果您發現了 bug 或有功能建議：

1. 檢查 [Issues](https://github.com/510208/510208.github.io/issues) 確認問題尚未被報告
2. 創建新的 Issue，請提供：
   - 清楚的問題描述
   - 重現步驟（如果是 bug）
   - 預期行為
   - 實際行為
   - 截圖（如果適用）
   - 環境資訊（瀏覽器、作業系統等）

### 提交代碼

1. **Fork 專案**

   ```bash
   git clone https://github.com/your-username/510208.github.io.git
   cd 510208.github.io
   ```

2. **創建功能分支**

   ```bash
   git checkout -b feature/your-feature-name
   # 或
   git checkout -b fix/your-bug-fix
   ```

3. **進行開發**

   - 遵循現有的代碼風格
   - 添加適當的註釋
   - 確保代碼通過 ESLint 檢查
   - 測試您的更改

4. **提交更改**

   ```bash
   git add .
   git commit -m "feat: add your feature description"
   # 或
   git commit -m "fix: fix your bug description"
   ```

5. **推送分支**

   ```bash
   git push origin feature/your-feature-name
   ```

6. **創建 Pull Request**
   - 提供清楚的 PR 標題和描述
   - 說明您的更改內容
   - 如果修復了 Issue，請在描述中引用它

## 📝 代碼風格

### TypeScript/React

- 使用 TypeScript 進行型別安全
- 遵循 React Hooks 最佳實踐
- 使用函式組件而非類組件
- 適當的錯誤處理

### CSS/Tailwind

- 優先使用 Tailwind CSS 類別
- 保持響應式設計
- 支援暗色模式
- 使用語義化的類別名稱

### 提交訊息格式

使用 [Conventional Commits](https://www.conventionalcommits.org/) 格式：

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**類型 (type):**

- `feat`: 新功能
- `fix`: 修復 bug
- `docs`: 文檔更新
- `style`: 代碼格式調整
- `refactor`: 重構代碼
- `test`: 添加測試
- `chore`: 維護任務

**範例:**

```
feat(projects): add automatic GitHub data fetching
fix(ui): resolve dark mode toggle issue
docs: update README with new setup instructions
```

## 🧪 測試

在提交之前，請確保：

```bash
# 安裝依賴
npm install

# 代碼檢查
npm run lint

# 構建測試
npm run build

# 預覽測試
npm run preview
```

## 📁 專案架構

```
src/
├── components/          # React 組件
│   ├── ui/             # 基礎 UI 組件
│   └── section/        # 頁面區塊組件
├── pages/              # 頁面組件
├── lib/                # 工具函式
├── assets/             # 靜態資源
└── ...
```

## 🔧 開發環境設置

1. Node.js 18+
2. 推薦使用 VS Code
3. 安裝推薦的擴展：
   - ES7+ React/Redux/React-Native snippets
   - Tailwind CSS IntelliSense
   - TypeScript Importer
   - Prettier - Code formatter

## 📄 授權條款

提交代碼即表示您同意將您的貢獻以 MIT 授權條款發佈。

## 💬 社群

- 在 Issues 中討論問題
- 查看 [GitHub Discussions](https://github.com/510208/510208.github.io/discussions) 參與社群討論

感謝您的貢獻！🎉
