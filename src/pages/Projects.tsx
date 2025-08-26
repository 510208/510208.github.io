import { GeneralHeroSection } from "@/components/GeneralHeroSection";
import { ProjectsList } from "@/components/section/Projects/ProjectsList";
import { BasePages } from "./base-page";

export const Projects = () => {
  return (
    <BasePages>
      <GeneralHeroSection
        title="Projects"
        subtitle="這裡展示了我的一些開源專案和技術作品，涵蓋了網站開發、Minecraft 相關工具等多個領域。"
        backgroundImage="/assets/page_background/projects_bg.webp"
        backgroundAuthor="RealToughCandy.com"
        backgroundAuthorUrl="https://www.pexels.com/zh-tw/@realtoughcandy/"
        backgroundText="我的專案"
      />
      <div className="container mx-auto px-4 py-8 max-w-[1200px] bg-transparent">
        <ProjectsList />
      </div>
    </BasePages>
  );
};
