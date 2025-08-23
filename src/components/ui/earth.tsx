import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { useSpring } from "react-spring";

interface EarthProps {
  width?: number;
  markerLocation?: [number, number];
  markerSize?: number;
}

const fadeMask =
  "radial-gradient(circle at 50% 50%, rgb(0, 0, 0) 60%, rgb(0, 0, 0, 0) 70%)";

const Earth = ({
  width = 388,
  markerLocation = [22.3193, 114.1694],
  markerSize = 0.1,
}: EarthProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));

  useEffect(() => {
    let globeWidth = width;
    const onResize = () => {
      if (canvasRef.current) {
        globeWidth = canvasRef.current.offsetWidth || width;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: globeWidth * 2,
      height: globeWidth * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 2,
      mapSamples: 12000,
      mapBrightness: 2,
      baseColor: [0.8, 0.8, 0.8],
      markerColor: [1, 1, 1],
      glowColor: [0.5, 0.5, 0.5],
      markers: [{ location: markerLocation, size: markerSize }],
      scale: 1.05,
      onRender: (state) => {
        state.phi = 2.75 + r.get();
        state.width = globeWidth * 2;
        state.height = globeWidth * 2;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [r, width, markerLocation, markerSize]);

  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "1/1",
        maxWidth: 800,
        WebkitMaskImage: fadeMask,
        maskImage: fadeMask,
      }}
    >
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current =
            e.clientX - pointerInteractionMovement.current;
          if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({ r: delta / 200 });
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({ r: delta / 100 });
          }
        }}
        style={{
          width: "100%",
          height: "100%",
          contain: "layout paint size",
          cursor: "auto",
          userSelect: "none",
        }}
      />
    </div>
  );
};

export default Earth;
