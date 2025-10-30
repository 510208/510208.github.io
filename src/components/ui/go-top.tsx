import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./button";

const GoTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    // console.log("Scroll position:", scrollY); // 調試信息
    if (scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // console.log("GoTopButton isVisible:", isVisible); // 調試信息

  return (
    <div
      className={`fixed bottom-14 right-6 z-50 transition-all duration-300 ${
        isVisible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <Button
        onClick={scrollToTop}
        variant={"ghost"}
        size={"icon"}
        className="cursor-pointer backdrop-blur-sm"
      >
        <ArrowUp size={20} />
      </Button>
    </div>
  );
};

export default GoTopButton;
