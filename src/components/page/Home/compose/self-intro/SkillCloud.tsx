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
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@components/ui/hover-card";

export const SkillCloud = () => {
  const skills = [
    {
      icon: <SiReact color="#58C4DC" className="rounded-lg" size={100} />,
      title: "React",
      description: "A JavaScript library for building user interfaces.",
    },
    {
      icon: <SiFigma color="#FF3737" className="rounded-lg" size={100} />,
      title: "Figma",
      description: "A collaborative interface design tool.",
    },
    {
      icon: <SiCss color="#663399" className="rounded-lg" size={100} />,
      title: "CSS",
      description:
        "A stylesheet language used to describe the presentation of a document.",
    },
    {
      icon: <SiHtml5 color="#E34F26" className="rounded-lg" size={100} />,
      title: "HTML5",
      description: "The standard markup language for creating web pages.",
    },
    {
      icon: <SiJavascript color="#F7DF1E" className="rounded-lg" size={100} />,
      title: "JavaScript",
      description:
        "A programming language that conforms to the ECMAScript specification.",
    },
    {
      icon: <SiTypescript color="#3178C6" className="rounded-lg" size={100} />,
      title: "TypeScript",
      description:
        "A typed superset of JavaScript that compiles to plain JavaScript.",
    },
    {
      icon: <SiNextdotjs color="#FFFFFF" className="rounded-lg" size={100} />,
      title: "Next.js",
      description: "A React framework for production.",
    },
    {
      icon: <SiNodedotjs color="#5FA04E" className="rounded-lg" size={100} />,
      title: "Node.js",
      description:
        "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
    },
    {
      icon: <SiPython color="#3776AB" className="rounded-lg" size={100} />,
      title: "Python",
      description:
        "A programming language that lets you work quickly and integrate systems more effectively.",
    },
    {
      icon: <SiDiscord color="#5865F2" className="rounded-lg" size={100} />,
      title: "Discord",
      description:
        "A VoIP, instant messaging and digital distribution platform.",
    },
    {
      icon: (
        <SiDiscorddotjs color="#5865F2" className="rounded-lg" size={100} />
      ),
      title: "discord.js",
      description:
        "A powerful JavaScript library for interacting with the Discord API.",
    },
    {
      icon: <SiTailwindcss color="#06B6D4" className="rounded-lg" size={100} />,
      title: "Tailwind CSS",
      description:
        "A utility-first CSS framework for rapidly building custom designs.",
    },
    {
      icon: <SiAstro color="#BC52EE" className="rounded-lg" size={100} />,
      title: "Astro",
      description:
        "A modern static site builder that delivers lightning-fast performance.",
    },
    {
      icon: <SiVite color="#9135FF" className="rounded-lg" size={100} />,
      title: "Vite",
      description:
        "A build tool that aims to provide a faster and leaner development experience for modern web projects.",
    },
    {
      icon: <SiGithub color="white" className="rounded-lg" size={100} />,
      title: "GitHub",
      description:
        "A provider of Internet hosting for software development and version control using Git.",
    },
    {
      icon: <SiArchlinux color="#1793D1" className="rounded-lg" size={100} />,
      title: "Arch Linux",
      description:
        "A lightweight and flexible Linux distribution that tries to Keep It Simple.",
    },
    {
      icon: <SiLinux color="#FCC624" className="rounded-lg" size={100} />,
      title: "Linux",
      description:
        "A family of open-source Unix-like operating systems based on the Linux kernel.",
    },
    {
      icon: <SiUbuntu color="#E95420" className="rounded-lg" size={100} />,
      title: "Ubuntu",
      description:
        "A Debian-based Linux operating system based on free software.",
    },
  ];
  const sortedSkills = skills.sort((a, b) => a.title.localeCompare(b.title));
  const skillIcons = sortedSkills.map((skill) => skill.icon);
  console.log("Skill Icons:", skillIcons);
  return <IconCloud icons={skillIcons} />;
};
