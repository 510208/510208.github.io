import React from "react";
import {
  GraduationCapIcon,
  ThumbsUpIcon,
  GamepadIcon,
  CodeIcon,
} from "lucide-react"; // 確保已安裝 lucide-icons-react 包
const MinecraftSkinViewer = React.lazy(
  () => import("@/components/ui/MCPlayer")
);

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description }) => (
  <div
    color="rgba(104, 159, 99, 0.6)"
    className="bg-gray-100/90 dark:bg-white/10 border border-gray-200/50 dark:border-white/6 rounded-lg p-4 h-[140px] sm:h-[160px] flex flex-col"
  >
    {/* 圖標背景 */}
    <div className="w-9 h-9 rounded-lg overflow-hidden mb-2">
      <div
        className="w-full h-full flex items-center justify-center"
        style={{
          background: `radial-gradient(50% 50% at 50% 50%, rgba(104, 159, 99, 0.60) 0%, rgba(255, 255, 255, 0.00) 100%)`,
        }}
      >
        {icon}
      </div>
    </div>

    {/* 卡片標題 */}
    <div className="font-noto font-bold text-xl sm:text-lg leading-normal text-black dark:text-white mb-1">
      {title}
    </div>

    {/* 卡片描述 */}
    <div className="font-noto text-sm leading-normal whitespace-pre-line text-gray-600 dark:text-gray-400 flex-1 glowable-text">
      {description}
    </div>
  </div>
);

const IntroSection: React.FC = () => {
  const infoCards = [
    {
      icon: <GraduationCapIcon color="#689F63" />,
      title: "學歷",
      description: "呃...\n高中還沒畢業ww",
    },
    {
      icon: <ThumbsUpIcon color="#689F63" />,
      title: "專長",
      description: "鬼扯&幹話、Python、\n網頁設計、搞事",
    },
    {
      icon: <GamepadIcon color="#689F63" />,
      title: "活躍",
      description: "微國、GitHub、\n網路上的各個奇怪角落",
    },
    {
      icon: <CodeIcon color="#689F63" />,
      title: "Coding生涯",
      description: "大概過了...\n15年吧？",
    },
  ];

  return (
    <section
      id="intro"
      className="relative w-full min-h-[598px] px-4 py-8 md:px-6 lg:px-8 bg-white dark:bg-black"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-center min-h-[598px]">
        {/* 左側區域 */}
        <div className="flex-1 relative w-full max-w-[466px]">
          {/* 背景文字 */}
          <div className="absolute font-black font-inter text-6xl md:text-7xl lg:text-8xl xl:text-[96px] leading-none whitespace-nowrap select-none pointer-events-none text-black/10 dark:text-white/10 -translate-x-8 md:-translate-x-12 lg:-translate-x-16 xl:-translate-x-24 max-lg:relative max-lg:translate-x-0 max-lg:text-center max-lg:mb-4 max-lg:text-5xl md:max-lg:text-6xl top-[77px] max-lg:top-0">
            Who Am I
          </div>

          {/* 主標題 */}
          <div className="relative z-10 text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-bold font-noto leading-tight text-black dark:text-white max-lg:text-center max-lg:text-3xl md:max-lg:text-4xl mt-[124px] max-lg:mt-0">
            關於我
          </div>

          {/* 資訊卡片網格 */}
          <div className="grid grid-cols-2 gap-5 mt-4 lg:mt-[20px] w-full max-w-[400px] max-lg:mx-auto max-sm:gap-3">
            {infoCards.map((card, index) => (
              <InfoCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>

        {/* 右側區域 */}
        <div className="flex-1 relative w-full max-w-[466px]">
          {/* 文字內容 */}
          <div className="relative z-10 text-lg xl:text-[18px] leading-relaxed xl:leading-[28px] text-gray-700 dark:text-gray-300 max-lg:text-center max-sm:text-base max-w-[429px] font-noto">
            <p className="mb-0 leading-[28px]">
              你好，我是 SamHacker，一個寫 Blog
              的閒人，平時喜歡在電腦前鼓搗一些技術活，比如 Minecraft
              開服、WordPress 架站、還有各種很廢的自由軟體。
            </p>

            <p className="mb-0 leading-[28px]">&nbsp;</p>

            <p className="mb-0 leading-[28px]">
              雖然聽起來好像很專業，但其實我就是熱愛分享這些東西，讓大家少走彎路、輕鬆上手。然後我絕對不會說有些事情叫AI幫忙比自己來省事…
            </p>

            <p className="mb-0 leading-[28px]">&nbsp;</p>

            <p className="mb-0 leading-[28px]">
              SamHacker Blog，這是我架的部落格的名稱，內容涵蓋從 Minecraft
              伺服器開服的教學，到怎麼架設 WordPress 網站。
            </p>

            <p className="mb-0 leading-[28px]">&nbsp;</p>

            <p className="leading-[28px]">
              <span>另外，最近開始在混微國圈</span>
              <sup className="text-[11.61px] text-gray-500 dark:text-gray-400">
                [
                <a
                  className="underline decoration-solid underline-offset-2"
                  href="https://www.micropedia.uk/wiki/samhacker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  1
                </a>
                ]
              </sup>
              <span>...</span>
            </p>
          </div>

          {/* 背景裝飾 */}
          <div className="hidden md:block absolute -bottom-30 -right-20 pointer-events-none opacity-50">
            <MinecraftSkinViewer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
