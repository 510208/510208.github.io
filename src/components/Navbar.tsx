import { Link } from "react-router-dom";
import { Gravatar } from "./ui/Gravatar";
import { ModeToggle } from "./ui/mode-toggle";
// @ts-expect-error: react-headroom does not have TypeScript types
import Headroom from "react-headroom";
import { useState, useEffect } from "react";
import { AlignRight } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
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

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  const menuItems = [
    {
      label: "ABOUT",
      to: "/about",
    },
    {
      label: "PROJECTS",
      to: "/projects",
    },
    {
      label: "BLOG",
      to: "https://samhacker.xyz",
    },
  ];

  return (
    <Headroom className="sticky top-0 z-999999">
      <nav
        id="navbar"
        className={`border-none backdrop-blur-md ${
          isSticky
            ? "bg-white/50 dark:bg-neutral-900/50"
            : "bg-gray-100 dark:bg-neutral-900"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* 品牌名稱 - 左側 */}
            <div className="flex-shrink-0 flex items-center space-x-2">
              <Gravatar size="40" className="rounded-md" />
              <Link to="/">
                <h1 className="text-black dark:text-white text-2xl font-normal font-noto capitalize cursor-pointer">
                  SamHacker
                </h1>
              </Link>
            </div>

            {/* 導航選單 - 右側，在手機版隱藏 */}
            <NavigationMenu className="hidden md:flex items-center">
              <NavigationMenuList className="flex items-center space-x-7">
                {menuItems.map((item) => (
                  <>
                    <NavigationMenuItem key={item.label}>
                      <Link
                        to={item.to}
                        className={`text-sm font-medium font-noto uppercase transition-colors px-4 py-2 rounded-md ${
                          item.label === "BLOG"
                            ? "hover:text-neutral-50 dark:hover:text-neutral-900 hover:bg-gray-800 dark:hover:bg-neutral-100"
                            : "hover:text-neutral-600 dark:hover:text-neutral-500 text-black dark:text-white"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuItem>

                    {/* 分隔符號 */}
                    {item.label !== "BLOG" && (
                      <NavigationMenuItem>
                        <span className="text-neutral-400 text-sm font-noto">
                          /
                        </span>
                      </NavigationMenuItem>
                    )}
                    {item.label === "BLOG" && (
                      <NavigationMenuItem>
                        <span className="text-neutral-400 text-sm font-noto mr-7.5">
                          /
                        </span>
                      </NavigationMenuItem>
                    )}
                  </>
                ))}
              </NavigationMenuList>
              <ModeToggle />
            </NavigationMenu>

            {/* 手機版漢堡選單按鈕 */}
            <div className="md:hidden">
              <button
                className="p-2 rounded-md text-black dark:text-white"
                onClick={toggleMobileMenu}
              >
                <span className="text-neutral-400 text-sm font-noto">/</span>
                <ModeToggle />
              </button>
            </div>

            {/* 手機版漢堡選單按鈕 */}
            <div className="md:hidden">
              <button
                className="p-2 rounded-md text-black dark:text-white"
                onClick={toggleMobileMenu}
              >
                <AlignRight />
              </button>
            </div>

            {/* 手機版導航選單 - 在手機版顯示 */}
            <div
              className={`md:hidden absolute top-16 right-0 bg-white dark:bg-neutral-900 shadow-lg rounded-md w-48 h-[100vh] ${
                mobileMenuOpen ? "block" : "hidden"
              }`}
            >
              <div className="flex flex-col items-start p-4 space-y-2">
                <Link
                  to="/about"
                  className="text-black dark:text-white text-sm font-medium font-noto uppercase hover:text-neutral-600 dark:hover:text-neutral-500 transition-colors"
                >
                  ABOUT
                </Link>
                <Link
                  to="/projects"
                  className="text-black dark:text-white text-sm font-medium font-noto uppercase hover:text-neutral-600 dark:hover:text-neutral-500 transition-colors"
                >
                  PROJECTS
                </Link>
                <Link
                  to="https://samhacker.xyz"
                  className="text-black dark:text-white text-sm font-medium font-noto uppercase hover:bg-neutral-900 dark:hover:bg-neutral-50 hover:text-neutral-50 dark:hover:text-neutral-500 transition-colors"
                >
                  BLOG
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Headroom>
  );
};
