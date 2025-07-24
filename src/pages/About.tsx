import { Navbar } from "@/components/section/Navbar";

export const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-neutral-950 dark:text-white mb-8 font-inter">
              關於我
            </h1>
            <div className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 font-noto leading-8">
              <p className="mb-6">
                你好！我是 SamHacker，一個熱愛分享技術的部落客。
              </p>
              <p className="mb-6">
                我專注於 Minecraft 開服、網站建設、開源軟體等領域，
                希望透過我的經驗分享，讓更多人能夠輕鬆學習和應用技術。
              </p>
              <p className="mb-6">
                在這個網站上，你可以找到我的最新文章、專案展示，
                以及各種技術教學內容。歡迎與我交流討論！
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
