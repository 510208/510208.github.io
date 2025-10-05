import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { BasePages } from "./base-page";

export const NotFound = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  useEffect(() => {
    const calculateHeight = () => {
      const navbarHeight = navbarRef.current?.offsetHeight || 0;
      const footerHeight = footerRef.current?.offsetHeight || 0;
      const windowHeight = window.innerHeight;
      setContentHeight(windowHeight - navbarHeight - footerHeight);
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);

    return () => {
      window.removeEventListener("resize", calculateHeight);
    };
  }, []);

  return (
    <BasePages>
      <div
        className="flex flex-col items-center justify-center p-4"
        style={{ height: `${contentHeight}px` }}
      >
        <img
          src="/assets/404.png"
          alt="404 找不到所請求的資源"
          className="h-[20vh] lg:h-70 w-auto bg-contain"
        />
        <p className="text-xl mb-8 font-noto">
          好吧，看起來你要找的東西目前還不在這裡...
        </p>
        <Button asChild className="p-4 font-noto">
          <Link to="/" className="text-lg">
            返回首頁
          </Link>
        </Button>
      </div>
    </BasePages>
  );
};
