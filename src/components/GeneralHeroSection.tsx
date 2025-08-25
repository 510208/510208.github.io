import { Copyright } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { DecoratedBreadcrumb } from "./Breadcrumb";

interface GeneralHeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundAuthor?: string;
  backgroundAuthorUrl?: string;
  backgroundText?: string;
  backgroundPosition?: [string, string];
}

export const GeneralHeroSection = ({
  title,
  subtitle,
  backgroundImage,
  backgroundAuthor = "",
  backgroundAuthorUrl = "",
  backgroundText = "",
  backgroundPosition = ["center", "center"],
}: GeneralHeroSectionProps) => {
  const [init, setInit] = useState(false);

  // 初始化粒子引擎，每個應用程式生命週期只執行一次
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    console.log(container);
  }, []);

  return (
    <section
      className="border w-100vw lg:my-16 lg:max-w-[1200px] mx-auto bg-transparent overflow-hidden relative lg:rounded-2xl"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: backgroundPosition.join(" "),
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "multiply",
      }}
    >
      {/* 疊加層：根據主題切換顏色 */}
      <div className="absolute inset-0 z-0 bg-white/80 dark:bg-black/80 pointer-events-none" />
      {/* 粒子效果層 */}
      {init && (
        <Particles
          id="hero-particles"
          particlesLoaded={particlesLoaded}
          className="absolute inset-0 z-0"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fullScreen: {
              enable: false,
              zIndex: 0,
            },
            fpsLimit: 45,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "repulse" },
                resize: { enable: true },
              },
              modes: {
                push: { quantity: 4 },
                repulse: { distance: 200, duration: 0.4 },
              },
            },
            particles: {
              color: { value: "#ffffff" },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: false,
                speed: 2,
                straight: false,
              },
              number: { density: { enable: true }, value: 100 },
              opacity: { value: 0.3 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
      )}

      {/* 背景文字 */}
      <div className="absolute -inset-y-10 -right-10 flex items-center justify-end lg:justify-end w-full">
        <h1 className="font-inter font-black text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-black/20 dark:text-white/20 select-none whitespace-nowrap uppercase">
          {backgroundText ? backgroundText : title}
        </h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-32 text-left md:pl-32">
          <DecoratedBreadcrumb label={backgroundText ?? ""} />
          <h1 className="text-4xl font-bold text-black dark:text-white font-writing">
            {title}
          </h1>
          <p className="mt-2 text-lg text-black/60 dark:text-white/60 font-noto ">
            {subtitle}
          </p>
        </div>
      </div>

      {(backgroundAuthor || backgroundAuthorUrl) && (
        <div className="absolute bottom-4 right-4 text-xs text-white font-noto z-10 flex items-center gap-1 bg-black/10 px-2 py-1 backdrop-blur-2xl rounded">
          <Copyright />
          背景圖片來源：
          <a
            href={backgroundAuthorUrl}
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {backgroundAuthor || "未知"}
          </a>
        </div>
      )}
    </section>
  );
};
