import { Copyright } from "lucide-react";

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
  return (
    <section
      className="my-16 max-w-[1200px] mx-auto bg-transparent overflow-hidden relative rounded-2xl"
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
