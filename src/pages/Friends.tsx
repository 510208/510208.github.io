import { GeneralHeroSection } from "@/components/GeneralHeroSection";
import { FriendList } from "@/components/section/Friends/FriendList";
import { BasePages } from "./base-page";

export const Friends = () => {
  return (
    <BasePages>
      <GeneralHeroSection
        title="Friends"
        subtitle="這裡是我的一些朋友和他們的資訊。"
        backgroundImage="/assets/page_background/friends_bg.webp"
        backgroundAuthor="SamHacker"
        backgroundAuthorUrl="/" // 替換為實際的作者 URL
        backgroundText="我的朋友"
      />
      <div className="container mx-auto px-4 py-8 max-w-[1200px] bg-transparent">
        <FriendList />
      </div>
    </BasePages>
  );
};
