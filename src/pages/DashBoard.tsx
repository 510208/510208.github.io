import { GeneralHeroSection } from "@/components/GeneralHeroSection";
import { BasePages } from "./base-page";
import { DashboardGrid } from "@/components/section/DashBoard/DashboardGrid";

export const DashBoard = () => {
  return (
    <BasePages>
      <GeneralHeroSection
        title="Dashboard"
        subtitle="我把我的一些資訊整理在這塊儀表板中，部署成 Serverless Functions 供大家參考。"
        backgroundImage="/assets/page_background/friends_bg.webp"
        backgroundAuthor="SamHacker"
        backgroundAuthorUrl="/" // 替換為實際的作者 URL
        backgroundText="資訊儀表"
      />
      <div className="container mx-auto px-4 py-8 max-w-[1200px] bg-transparent">
        <DashboardGrid />
      </div>
    </BasePages>
  );
};
