import { Link } from "react-router-dom";
import { Gravatar } from "../../ui/Gravatar";
import { ModeToggle } from "../../ui/mode-toggle";

export const Navbar = () => {
  return (
    <nav
      id="navbar"
      className="bg-white/50 border-none dark:bg-neutral-900/50 sticky top-0 z-999999 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 品牌名稱 - 左側 */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <Gravatar size="40" className="rounded-md" />
            <Link to="/">
              <h1 className="text-black dark:text-white text-2xl font-normal font-noto capitalize">
                SamHacker
              </h1>
            </Link>
          </div>

          {/* 導航選單 - 右側，在手機版隱藏 */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/about"
              className="text-black dark:text-white text-sm font-medium font-noto uppercase hover:text-neutral-600 dark:hover:text-neutral-500 transition-colors px-4 py-2 rounded-md"
            >
              ABOUT
            </Link>
            <span className="text-neutral-400 text-sm font-noto">/</span>
            <Link
              to="/projects"
              className="text-black dark:text-white text-sm font-medium font-noto uppercase hover:text-neutral-600 dark:hover:text-neutral-500 transition-colors px-4 py-2 rounded-md"
            >
              PROJECTS
            </Link>
            <span className="text-neutral-400 text-sm font-noto">/</span>
            <Link
              to="https://samhacker.xyz"
              className="text-black dark:text-white text-sm font-medium font-noto uppercase hover:bg-neutral-50 hover:text-neutral-600 dark:hover:text-neutral-500 transition-colors px-4 py-2 rounded-md"
            >
              BLOG
            </Link>
            <span className="text-neutral-400 text-sm font-noto">/</span>
            <ModeToggle />
          </div>

          {/* 手機版漢堡選單按鈕（可選，目前隱藏選單） */}
          <div className="md:hidden">
            {/* 如果需要可以在這裡加入漢堡選單按鈕 */}
          </div>
        </div>
      </div>
    </nav>
  );
};
