import * as skin3d from "skin3d";
import { useEffect, useRef } from "react";

const MinecraftSkinViewer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const viewer = new skin3d.View({
        canvas: canvasRef.current,
        width: 300,
        height: 400,
        skin: `https://crafatar.com/skins/9ea020446a4c4e4686b8e5d0bde8ce56`, // 你的 UUID 對應的 Skin 圖片
      });

      // 可選設定
      viewer.controls.enableRotate = true;
      viewer.controls.enableZoom = true;
      viewer.controls.enablePan = false;

      // 動畫範例
      viewer.animation = new skin3d.WalkingAnimation();
      viewer.animation.speed = 1.0;
    }
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default MinecraftSkinViewer;
