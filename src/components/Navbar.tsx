import { Link } from "react-router-dom";
import { Gravatar } from "./ui/Gravatar";
import { ModeToggle } from "./ui/mode-toggle";
// import Headroom from "react-headroom";
import { useState, useEffect } from "react";
import { UsersRound, FolderGit, Newspaper, ToolCase, Info } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

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

  const menuItems = [
    {
      label: "ABOUT",
      to: "/about",
      icon: <Info size={18} />,
    },
    {
      label: "FRIENDS",
      to: "/friends",
      icon: <UsersRound size={18} />,
    },
    {
      label: "PROJECTS",
      to: "/projects",
      icon: <FolderGit size={18} />,
    },
    {
      label: "EQUIPMENTS",
      to: "/equipments",
      icon: <ToolCase size={18} />,
    },
    {
      label: "BLOG",
      to: "/blog-posts",
      icon: <Newspaper size={18} />,
    },
  ];

  return (
    <div className="inset-x-0 top-0 lg:top-4 mx-auto sticky z-999 w-full lg:w-[calc(100%-theme(space.4))] max-w-7xl justify-center lg:border rounded-none lg:rounded-2xl overflow-hidden lg:shadow">
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
            <div className="ml-4 lg:ml-0 flex-shrink-0 flex items-center space-x-2">
              <Gravatar size="36" className="rounded-md" />
              <Link to="/">
                <h1 className="text-black dark:text-white text-xl font-bold font-writing capitalize cursor-pointer">
                  SamHacker
                </h1>
              </Link>
            </div>

            {/* 導航選單 - 右側，在手機版隱藏 */}
            <NavigationMenu className="hidden lg:flex items-center">
              <NavigationMenuList className="flex items-center space-x-7">
                {menuItems.map((item) => {
                  // 檢查item是否為目前頁面
                  const isActive = window.location.pathname === item.to;

                  return (
                    <div key={item.label} className="flex items-center mr-0">
                      <NavigationMenuItem>
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

                        {/* 分隔符號 */}
                        {item.label !== "BLOG" && (
                          <span className="text-neutral-400 text-sm font-noto">
                            /
                          </span>
                        )}
                        {item.label === "BLOG" && (
                          <span className="text-neutral-400 text-sm font-noto mr-4">
                            /
                          </span>
                        )}
                      </NavigationMenuItem>
                    </div>
                  );
                })}
              </NavigationMenuList>
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
