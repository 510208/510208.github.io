import { useEffect, useRef, useState } from "react";

const CursorFollower = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const scrollOffset = useRef(0);
  const lastScrollY = useRef(window.scrollY);
  const [hoverLink, setHoverLink] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // 檢查游標下方是否為超連結物件
      const element = document.elementFromPoint(e.clientX, e.clientY);
      setHoverLink(element?.tagName === "A");
      // console.log("Hovering over link:", element?.tagName === "A");
    };
    window.addEventListener("mousemove", handleMove);

    const handleScroll = () => {
      const deltaY = window.scrollY - lastScrollY.current;
      // 反轉移動方向
      scrollOffset.current = Math.max(-80, Math.min(80, (0 - deltaY) * 1.5));
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);

    let frame: number;
    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;
      // scrollOffset 漸漸回到 0
      scrollOffset.current += (0 - scrollOffset.current) * 0.1;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x - 5}px, ${
          pos.current.y - 5 + scrollOffset.current
        }px, 0)`;
      }
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <div
      ref={dotRef}
      className={
        "hidden lg:block fixed pointer-events-none z-[9999] w-[10px] h-[10px] rounded-full bg-black dark:bg-white transition-colors duration-300" +
        (hoverLink ? " scale-200" : "")
      }
      style={{ left: 0, top: 0 }}
    />
  );
};

export default CursorFollower;
