import { IconCloud } from "@components/ui/icon-cloud";
import {
  SiArchlinux,
  SiAstro,
  SiCss,
  SiDiscord,
  SiDiscorddotjs,
  SiFigma,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiUbuntu,
  SiVite,
} from "@icons-pack/react-simple-icons";

export const SkillCloud = () => {
  return (
    <IconCloud
      icons={[
        <SiReact color="#58C4DC" className="rounded-lg" size={100} />,
        <SiFigma color="#FF3737" className="rounded-lg" size={100} />,
        <SiCss color="#663399" className="rounded-lg" size={100} />,
        <SiHtml5 color="#E34F26" className="rounded-lg" size={100} />,
        <SiJavascript color="#F7DF1E" className="rounded-lg" size={100} />,
        <SiTypescript color="#3178C6" className="rounded-lg" size={100} />,
        <SiNextdotjs color="#FFFFFF" className="rounded-lg" size={100} />,
        <SiNodedotjs color="#5FA04E" className="rounded-lg" size={100} />,
        <SiPython color="#3776AB" className="rounded-lg" size={100} />,
        <SiDiscord color="#5865F2" className="rounded-lg" size={100} />,
        <SiDiscorddotjs color="#5865F2" className="rounded-lg" size={100} />,
        <SiTailwindcss color="#06B6D4" className="rounded-lg" size={100} />,
        <SiAstro color="#BC52EE" className="rounded-lg" size={100} />,
        <SiVite color="#9135FF" className="rounded-lg" size={100} />,
        <SiGithub color="white" className="rounded-lg" size={100} />,
        <SiArchlinux color="#1793D1" className="rounded-lg" size={100} />,
        <SiLinux color="#FCC624" className="rounded-lg" size={100} />,
        <SiUbuntu color="#E95420" className="rounded-lg" size={100} />,
      ]}
    />
  );
};
