import React from "react";
import { Youtube } from "lucide-react";

// 改為從 src/assets 導入
import discordSymbol from "@/assets/contact-icons/discord_symbol.svg"; // v
import bentoLogo from "@/assets/contact-icons/bento_symbol.svg"; // v
import micropediaLogo from "@/assets/contact-icons/micropedia_logo.svg";
import wordpressLogo from "@/assets/contact-icons/wordpresscom_symbol.svg"; // v
import githubSymbol from "@/assets/contact-icons/github_symbol.svg"; // v
import roc_flag from "@/assets/contact-icons/roc_flag.svg"; // v

// 聯絡資訊卡片介面
interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description?: string;
  link?: string;
  gradientColors: string[];
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  subtitle,
  description,
  link,
  gradientColors,
}) => {
  const cardContent = (
    <div className="relative bg-gray-100/90 dark:bg-white/10 border border-gray-200/50 dark:border-white/6 rounded-lg p-4 h-36 sm:h-40 transition-all duration-300 group">
      {/* 圖標背景 */}
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
        style={{
          background: `radial-gradient(50% 50% at 50% 50%, ${gradientColors.join(
            ", "
          )} 0%, transparent 90%)`,
        }}
      >
        <div className="w-6 h-6 flex items-center justify-center">{icon}</div>
      </div>

      {/* 卡片標題 */}
      <h3 className="font-bold text-lg sm:text-xl text-black dark:text-white mb-1 font-inter">
        {title}
      </h3>

      {/* 卡片副標題/描述 */}
      <div className="text-sm text-gray-600 dark:text-gray-400 font-inter">
        <p className="mb-0 leading-normal">{subtitle}</p>
        {description && <p className="mb-0 leading-normal">{description}</p>}
      </div>
    </div>
  );

  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block transition-transform duration-300 hover:scale-105"
    >
      {cardContent}
    </a>
  ) : (
    cardContent
  );
};

export const ContactSection: React.FC = () => {
  // 聯絡卡片資料
  const contactCards: ContactCardProps[] = [
    {
      icon: (
        <img src={roc_flag} alt="ROC Flag" className="w-6 h-6 rounded-md" />
      ),
      title: "國籍",
      subtitle: "臺灣",
      description: "（Taiwan, ROC）",
      gradientColors: ["rgba(104, 159, 99, 0.6)", "rgba(180, 207, 177, 0.3)"],
    },
    {
      icon: <img src={discordSymbol} alt="Discord" className="w-6 h-6" />,
      title: "Discord",
      subtitle: "@samhacker",
      description: "@samhacker_test",
      gradientColors: ["rgba(88, 101, 242, 0.6)", "rgba(130, 140, 245, 0.45)"],
    },
    {
      icon: <img src={bentoLogo} alt="Bento" className="w-6 h-6" />,
      title: "Bento",
      subtitle: "https://bento.me/",
      description: "510208",
      link: "https://bento.me/510208",
      gradientColors: ["rgba(255, 134, 134, 1)", "rgba(255, 195, 195, 0.5)"],
    },
    {
      icon: <Youtube className="w-6 h-6 text-red-500" />,
      title: "YouTube",
      subtitle: "@penguinbrother_xux",
      link: "https://youtube.com/@penguinbrother_xux",
      gradientColors: ["rgba(255, 134, 134, 1)", "rgba(255, 195, 195, 0.5)"],
    },
    {
      icon: <img src={githubSymbol} alt="GitHub" className="w-6 h-6" />,
      title: "GitHub",
      subtitle: "@510208",
      link: "https://github.com/510208",
      gradientColors: ["rgba(0, 0, 0, 0.6)", "rgba(128, 128, 128, 0.3)"],
    },
    {
      icon: (
        <img
          src="https://crafatar.com/avatars/9ea02044-6a4c-4e46-86b8-e5d0bde8ce56?size=100"
          alt="Minecraft"
          className="w-6 h-6 rounded"
        />
      ),
      title: "Minecraft",
      subtitle: "Sam510208",
      gradientColors: ["rgba(170, 119, 100, 0.6)", "rgba(213, 187, 178, 0.3)"],
    },
    {
      icon: <img src={micropediaLogo} alt="微國家百科" className="w-6 h-6" />,
      title: "微國家百科",
      subtitle: "Samhacker",
      link: "https://www.micropedia.uk/wiki/samhacker",
      gradientColors: ["rgba(26, 1, 134, 0.6)", "rgba(55, 33, 149, 0.525)"],
    },
    {
      icon: <img src={wordpressLogo} alt="Blog" className="w-6 h-6" />,
      title: "Blog",
      subtitle: "Samhacker Blog",
      link: "https://samhacker.xyz",
      gradientColors: ["rgba(56, 88, 233, 0.6)", "rgba(106, 130, 239, 0.45)"],
    },
  ];

  return (
    <div>
      <section className="relative w-full min-h-[598px] px-4 py-8 md:px-6 lg:px-8 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto">
          {/* 標題區塊 */}
          <div className="relative text-center lg:text-left mb-8 md:mb-12">
            {/* 背景文字 */}
            <div className="absolute inset-0 flex items-center justify-center lg:justify-start overflow-hidden">
              <div
                className="bg-clip-text bg-gradient-to-r font-black font-inter text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[96px] text-center lg:text-left whitespace-nowrap
                          from-transparent via-black/10 to-transparent dark:via-white/10 leading-none select-none pointer-events-none lg:-translate-x-24"
                style={{ WebkitTextFillColor: "transparent" }}
              >
                Contact Me
              </div>
            </div>

            {/* 前景標題 */}
            <div className="relative z-10 pt-8 lg:pt-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black dark:text-white font-noto">
                聯絡我
              </h2>
            </div>
          </div>

          {/* 聯絡卡片網格 */}
          <div className="max-w-5xl mx-auto lg:mx-0">
            {/* 手機版：2列布局 */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5 md:hidden">
              {contactCards.map((card, index) => (
                <ContactCard key={index} {...card} />
              ))}
            </div>

            {/* 平板版：3列布局 */}
            <div className="hidden md:grid lg:hidden grid-cols-3 gap-5">
              {contactCards.map((card, index) => (
                <ContactCard key={index} {...card} />
              ))}
            </div>

            {/* 桌面版：4列2行布局 */}
            <div className="hidden lg:grid grid-cols-4 grid-rows-2 gap-5 h-auto">
              {contactCards.map((card, index) => (
                <ContactCard key={index} {...card} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
