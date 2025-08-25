export function isDarkMode(): boolean {
  // 僅檢查 <html> 標籤本身是否有 "dark" class
  if (document.documentElement.classList.contains("dark")) {
    console.log(`Dark mode: true (via <html> class)`);
    return true;
  }
  console.log(`Dark mode: false (via <html> class)`);
  return false;
}
