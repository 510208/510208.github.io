import { Copyright } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

interface GeneralHeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundAuthor?: string;
  backgroundAuthorUrl?: string;
}

export const GeneralHeroSection = ({
  title,
  subtitle,
  backgroundImage,
  backgroundAuthor = "",
  backgroundAuthorUrl = "",
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
      className="w-100vw lg:my-16 lg:max-w-[1200px] mx-auto bg-transparent overflow-hidden relative lg:rounded-2xl"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // 背景透明度
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "multiply",
      }}
    >
      {/* 粒子效果層 - 在背景圖片上方，但在內容下方 */}
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
                random: false,
                speed: 2, // 降低速度使動畫更柔和
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                },
                value: 100, // 粒子數量
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-32 text-center">
          <h1 className="text-4xl font-bold text-white font-noto">{title}</h1>
          <p className="mt-4 text-lg text-white font-noto">{subtitle}</p>
        </div>
      </div>

      {/* 右下角留下一個小區塊註明背景作者 */}
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
