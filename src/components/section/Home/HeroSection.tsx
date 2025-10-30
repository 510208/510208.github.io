import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useCallback, useEffect, useState } from "react";
import { StatusBadge } from "@/components/StatusBadge";

export const HeroSection = () => {
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
    <section className="hero-section relative bg-gray-100 dark:bg-neutral-900 min-h-screen overflow-hidden">
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
                value: "transparent", // 背景透明，讓背景圖片顯示
              },
            },
            fullScreen: {
              enable: false, // 禁用全螢幕模式
              zIndex: 0,
            },
            fpsLimit: 45,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "attract",
                },
                resize: {
                  enable: true,
                },
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.3, // 降低透明度以免遮蓋背景
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 2, // 降低速度使動畫更柔和
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                },
                value: 50, // 粒子數量
              },
              opacity: {
                value: 0.3, // 降低透明度
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 }, // 縮小粒子大小
              },
            },
            detectRetina: true,
          }}
        />
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full pt-8">
          {/* Div Left - 文字內容 */}
          <div className="relative w-full lg:w-1/2 z-10 text-center pt-40 lg:text-left md:pt-8 lg:pt-0 md:h-auto">
            {/* 背景文字 - absolute positioning */}
            <div className="absolute -inset-x-10 flex items-center justify-center lg:justify-start">
              <h1 className="-inset-y-200 font-inter font-black text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-black/10 dark:text-white/10 select-none whitespace-nowrap">
                SamHacker
              </h1>
            </div>

            {/* 前景內容 */}
            <div className="relative z-10 pt-8 lg:pt-0">
              <StatusBadge />
              <h2 className="font-inter font-bold text-4xl sm:text-5xl lg:text-6xl text-neutral-950 dark:text-white mb-6 mt-2">
                SamHacker
              </h2>
              <div className="font-noto text-lg text-gray-600 dark:text-gray-300 leading-7 max-w-md mx-auto lg:mx-0">
                <p className="mb-0">
                  我是一個熱愛分享技術的部落客，
                  <br />
                  專注於 Minecraft 開服、網站建設、開源軟體等領域。
                  <br />
                  我的目標是讓更多人能夠輕鬆學習和應用技術。
                </p>
              </div>
            </div>
          </div>

          {/* Div Right - 角色圖片與背景方格 */}
          <div className="relative w-full lg:w-1/2 h-96 lg:h-full mt-8 lg:mt-0">
            {/* 背景方格 - 淺色模式 */}
            <div
              className="absolute inset-0 opacity-60 dark:opacity-0 transition-opacity duration-300"
              style={{
                backgroundImage: `url('/assets/light_bg-grid.svg')`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right center",
              }}
            />

            {/* 背景方格 - 深色模式 */}
            <div
              className="absolute inset-0 opacity-0 dark:opacity-10 transition-opacity duration-300"
              style={{
                backgroundImage: `url('/assets/dark_bg-grid.svg')`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right center",
              }}
            />

            {/* 角色圖片 */}
            <img
              src="/assets/misana-character.png"
              alt="Misana Character"
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-full max-h-96 lg:max-h-full w-auto object-contain object-bottom"
              style={{ maxWidth: "550px" }}
            />
          </div>
        </div>
      </div>
      {/* </Glow>
      </GlowCapture> */}
    </section>
  );
};
