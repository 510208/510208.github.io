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
        <h1 className="text-8xl font-bold mb-4 font-inter">404</h1>
        <p className="text-xl mb-8 font-noto">頁面未找到</p>
        <Button asChild className="p-4 font-noto">
          <Link to="/" className="text-lg">
            返回首頁
          </Link>
        </Button>
      </div>
    </BasePages>
  );
};
