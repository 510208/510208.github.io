import Footer from "@/components/Footer";
import { GeneralHeroSection } from "@/components/GeneralHeroSection";
import { Navbar } from "@/components/Navbar";
import { ProjectsList } from "@/components/section/Projects/ProjectsList";

export const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <GeneralHeroSection
          title="我的專案"
          subtitle="這裡展示了我的一些開源專案和技術作品，涵蓋了網站開發、Minecraft 相關工具等多個領域。"
          backgroundImage="/assets/page_background/projects_bg.webp"
          backgroundAuthor="RealToughCandy.com"
          backgroundAuthorUrl="https://www.pexels.com/zh-tw/@realtoughcandy/"
        />
        <div className="container mx-auto px-4 py-8 max-w-[1200px] bg-transparent">
          <ProjectsList />
        </div>
        <Footer />
      </div>
    </>
  );
};
