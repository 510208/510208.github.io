export const HeroSection = () => {
  return (
    <section className="relative bg-gray-100 dark:bg-neutral-900 min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full py-16">
          {/* Div Left - 文字內容 */}
          <div className="relative w-full lg:w-1/2 z-10 text-center lg:text-left md:pt-8 lg:pt-0 md:h-auto">
            {/* 背景文字 - absolute positioning */}
            <div className="absolute -inset-x-10 flex items-center justify-center lg:justify-start">
              <h1 className="-inset-y-200 font-inter font-black text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-black/10 dark:text-white/10 select-none whitespace-nowrap">
                SamHacker
              </h1>
            </div>

            {/* 前景內容 */}
            <div className="relative z-10 pt-8 lg:pt-0">
              <h2 className="font-inter font-bold text-4xl sm:text-5xl lg:text-6xl text-neutral-950 dark:text-white mb-6">
                SamHacker
              </h2>
              <div className="font-noto text-lg text-gray-600 dark:text-gray-300 leading-7 max-w-md mx-auto lg:mx-0">
                <p className="mb-0">
                  我是一個熱愛分享技術的部落客，
                  <br />
                  專注於 Minecraft 開服、網站建設、開源軟體等領域。
                  <br />
                  我的目標是讓更多人能夠輕鬆學習和應用技術。
                </p>
              </div>
            </div>
          </div>

          {/* Div Right - 角色圖片與背景方格 */}
          <div className="relative w-full lg:w-1/2 h-96 lg:h-full mt-8 lg:mt-0">
            {/* 背景方格 - 淺色模式 */}
            <div
              className="absolute inset-0 opacity-60 dark:opacity-0 transition-opacity duration-300"
              style={{
                backgroundImage: `url('/assets/light_bg-grid.svg')`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right center",
              }}
            />

            {/* 背景方格 - 深色模式 */}
            <div
              className="absolute inset-0 opacity-0 dark:opacity-40 transition-opacity duration-300"
              style={{
                backgroundImage: `url('/assets/dark_bg-grid.svg')`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right center",
              }}
            />

            {/* 角色圖片 */}
            <div
              className="absolute inset-0 bg-center bg-contain bg-no-repeat"
              style={{
                backgroundImage: `url('/assets/misana-character.png')`,
                backgroundSize: "450px",
                backgroundPosition: "center bottom",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
