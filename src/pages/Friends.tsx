import Footer from "@/components/Footer";
import { GeneralHeroSection } from "@/components/GeneralHeroSection";
import { Navbar } from "@/components/Navbar";
import { FriendList } from "@/components/section/Friends/FriendList";

export const Friends = () => {
  return (
    <>
      <Navbar />
      <GeneralHeroSection
        title="我的朋友"
        subtitle="這裡是我的一些朋友和他們的資訊。"
        backgroundImage="/assets/page_background/friends_bg.webp"
        backgroundAuthor="SamHacker"
        backgroundAuthorUrl="/" // 替換為實際的作者 URL
      />
      <div className="container mx-auto px-4 py-8 max-w-[1200px] bg-transparent">
        <FriendList />
      </div>
      <Footer />
    </>
  );
};
