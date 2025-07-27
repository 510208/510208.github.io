import React from "react";
import { AtSign, Earth, Github, Youtube } from "lucide-react";
import penana from "@/assets/contact-icons/penana_symbol.svg"; // v

export const Footer: React.FC = () => {
  // 獲取當前年份
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full h-[300px] sm:h-[364px] bg-white dark:bg-black overflow-hidden transition-colors duration-200 ease-in-out">
      {/* 背景漸變效果 */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background: `radial-gradient(ellipse at center bottom, rgba(104, 159, 99, 0.4) 0%, rgba(104, 159, 99, 0.4) 37%, transparent 70%)`,
        }}
      />

      {/* 背景裝飾 */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        {/* 大型背景文字 */}
        {/* <div className="text-center select-none pointer-events-none">
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-200/10 dark:text-white/5 leading-none">
            DESIGNED BY
          </div>
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none mt-2">
            <span className="text-gray-200/10 dark:text-white/5">SAM</span>
            <span className="text-green-500/30">HACKER</span>
          </div>
        </div> */}
        <img
          src="/assets/light_footer-background.png"
          alt="Background Decoration"
          className="absolute inset-0 w-auto h-full object-cover dark:hidden"
        />
        <img
          src="/assets/dark_footer-background.png"
          alt="Background Decoration"
          className="absolute inset-0 w-auto h-full object-cover hidden dark:block"
        />
      </div>

      {/* 主要內容 */}
      <div className="relative z-10 h-full flex flex-col justify-between py-8 px-4 sm:px-6 lg:px-8">
        {/* 頂部版權資訊和社交圖標 */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          {/* 版權資訊 */}
          <div className="text-center sm:text-left">
            <p className="text-sm md:text-base font-bold text-gray-700 dark:text-gray-300 font-inter">
              Copyright Observed by SamHacker © {currentYear}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* 社交媒體圖標 */}

            <a
              href="https://www.threads.com/@samhacker.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200"
              aria-label="Penana"
            >
              <img
                src={penana}
                alt="Penana"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
              />
            </a>

            <a
              href="https://youtube.com/@penguinbrother_xux"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200"
              aria-label="YouTube"
            >
              <Youtube className="w-full h-full" />
            </a>

            <a
              href="https://github.com/510208"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="w-full h-full" />
            </a>

            <a
              href="https://samhacker.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200"
              aria-label="SamHacker Blog"
            >
              <Earth />
            </a>

            <a
              href="https://www.threads.com/@samhacker.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200"
              aria-label="Threads"
            >
              <AtSign />
            </a>
          </div>
        </div>

        {/* 底部額外資訊（可選） */}
        <div className="text-center">
          <p className="text-xs text-gray-500 dark:text-gray-500 font-inter">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
