import { HeroSection } from "../components/section/Home/HeroSection";
import { Navbar } from "../components/section/Home/Navbar";
import { SkillGrid } from "../components/section/Home/SkillGrid";

export const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SkillGrid />
    </>
  );
};
