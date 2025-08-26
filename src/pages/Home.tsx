import { HeroSection } from "../components/section/Home/HeroSection";
import { SkillGrid } from "../components/section/Home/SkillGrid";
import IntroSection from "../components/section/Home/IntroSection";
import MottoSection from "@/components/section/Home/MottoSection";
import ContactSection from "../components/section/Home/ContactSection";
import { BasePages } from "./base-page";

export const Home = () => {
  return (
    <BasePages>
      <HeroSection />
      <SkillGrid />
      <IntroSection />
      <MottoSection />
      <ContactSection />
    </BasePages>
  );
};
