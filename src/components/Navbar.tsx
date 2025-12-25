import { Link } from "react-router-dom";
import { Gravatar } from "./ui/Gravatar";
import { ModeToggle } from "./ui/mode-toggle";
// import Headroom from "react-headroom";
import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import OpenCommandButton from "./command/OpenCommandButton";
import menuItems from "@/pages/PageList";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="inset-x-0 top-0 lg:top-4 mx-auto sticky z-50 w-full lg:w-[calc(100%-theme(space.4))] max-w-7xl justify-center lg:border rounded-none lg:rounded-2xl overflow-hidden lg:shadow">
      <nav
        id="navbar"
        className={`border-none backdrop-blur-md ${
          isSticky
            ? "bg-white/50 dark:bg-neutral-900/50"
            : "bg-gray-100 dark:bg-neutral-900"
        }`}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            {/* 品牌名稱 - 左側 */}
            <div className="ml-2 lg:ml-0 flex-shrink-0 flex items-center space-x-2">
              <Link to="/">
                <Gravatar size="36" className="rounded-md" />
              </Link>
              <Link to="/" className="hidden md:block">
                <h1 className="text-black dark:text-white text-xl font-bold font-writing capitalize cursor-pointer">
                  SamHacker
                </h1>
              </Link>
            </div>

            {/* 導航選單 - 右側，在手機版隱藏 */}
            <NavigationMenu className="hidden lg:flex items-center">
              <NavigationMenuList className="flex items-center space-x-7 mr-4">
                {menuItems.map((item) => {
                  // 檢查item是否為目前頁面
                  const isActive = window.location.pathname === item.to;

                  return (
                    <div key={item.label} className="flex items-center mr-0">
                      <NavigationMenuItem>
                        <Tooltip>
                          <TooltipTrigger>
                            <Link
                              to={item.to}
                              className={`text-sm font-medium font-noto uppercase transition-colors px-4 py-2 rounded-md ml-2 mr-2 h-[64px] ${
                                item.label === "BLOG"
                                  ? "hover:text-neutral-50 dark:hover:text-neutral-900 hover:bg-gray-800 dark:hover:bg-neutral-100"
                                  : "hover:text-neutral-600 dark:hover:text-neutral-500 text-black dark:text-white"
                              } ${
                                isActive ? "bg-nav-link-indicator" : ""
                              } transition-all duration-300`}
                            >
                              {item.label}
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent className="z-50">
                            <span>{item.labelZh}</span>
                          </TooltipContent>
                        </Tooltip>

                        {/* 分隔符號 */}
                        {item.label !== "BLOG" && (
                          <span className="text-neutral-400 text-sm font-noto">
                            /
                          </span>
                        )}
                        {item.label === "BLOG" && (
                          <span className="text-neutral-400 text-sm font-noto">
                            /
                          </span>
                        )}
                      </NavigationMenuItem>
                    </div>
                  );
                })}
              </NavigationMenuList>
              <OpenCommandButton className="mr-4" />
              <ModeToggle />
            </NavigationMenu>

            {/* 手機版漢堡選單按鈕 */}
            <NavigationMenu className="lg:hidden flex items-center">
              <NavigationMenuList
                className={`flex items-center space-x-3 ${
                  isSticky ? "hidden" : ""
                }`}
              >
                {menuItems.map((item) => (
                  <div key={item.label}>
                    <NavigationMenuItem>
                      <Link
                        to={item.to}
                        className={`text-sm font-medium font-noto uppercase transition-colors px-4 py-2 rounded-md ${
                          item.label === "BLOG"
                            ? "hover:text-neutral-50 dark:hover:text-neutral-900 hover:bg-gray-800 dark:hover:bg-neutral-100"
                            : "hover:text-neutral-600 dark:hover:text-neutral-500 text-black dark:text-white"
                        }`}
                      >
                        {item.icon}
                      </Link>
                    </NavigationMenuItem>
                  </div>
                ))}
              </NavigationMenuList>
              <div className={`ml-4 ${isSticky ? "" : "hidden"}`}>
                <ModeToggle />
              </div>
            </NavigationMenu>
          </div>
        </div>
      </nav>
    </div>
  );
};
