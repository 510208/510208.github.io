import { GeneralHeroSection } from "@/components/GeneralHeroSection";
import { Navbar } from "@/components/Navbar";

export const Friends = () => {
  return (
    <>
      <Navbar />
      <GeneralHeroSection
        title="我的朋友"
        subtitle="這裡是我在 Minecraft 社區中的一些朋友和他們的作品。"
        backgroundImage="/assets/page_background/friends_bg.webp"
        backgroundAuthor="SamHacker"
        backgroundAuthorUrl="/" // 替換為實際的作者 URL
      />
    </>
  );
};
