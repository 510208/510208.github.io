import { HeroSection } from "../components/section/Home/HeroSection";
import { Navbar } from "../components/Navbar";
import { SkillGrid } from "../components/section/Home/SkillGrid";
import IntroSection from "../components/section/Home/IntroSection";
import MottoSection from "@/components/section/Home/MottoSection";
import ContactSection from "../components/section/Home/ContactSection";
import Footer from "../components/Footer";
import GoTopButton from "@/components/ui/go-top";

export const Home = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      <HeroSection />
      <SkillGrid />
      <IntroSection />
      <MottoSection />
      <ContactSection />
      <GoTopButton />
      <Footer />
    </div>
  );
};
