import { HeroSection } from "../components/section/Home/HeroSection";
import { Navbar } from "../components/Navbar";
import { SkillGrid } from "../components/section/Home/SkillGrid";
import IntroSection from "../components/section/Home/IntroSection";

export const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SkillGrid />
      <IntroSection />
    </>
  );
};
