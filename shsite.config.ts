import type { ShsiteConfig } from "@/types/shsite.config";
import { Home, Info, Newspaper } from "lucide-react";
import {
  Astro,
  Bento,
  Discord,
  Github,
  Gravatar,
  Pypi,
  Reddit,
  Steam,
  Threads,
  Wakatime,
  X,
  Youtube,
} from "simple-icons-astro";

const config: ShsiteConfig = {
  navBar: {
    links: [
      { title: "Home", href: "/", icon: Home },
      { title: "About", href: "/about", icon: Info },
      { title: "Blog", href: "/blog", icon: Newspaper },
    ],
  },

  socialLinks: [
    {
      icon: Discord,
      title: "Discord",
      href: "https://discordapp.com/users/959977374471028779",
    },
    {
      icon: Bento,
      title: "Bento",
      href: "https://bento.me/510208",
    },
    {
      icon: Youtube,
      title: "YouTube",
      href: "https://youtube.com/@penguinbrother_xux",
    },
    {
      icon: Github,
      title: "GitHub",
      href: "https://github.com/510208",
    },
    {
      icon: Astro,
      title: "Blog",
      href: "https://samhacker.xyz",
    },
    {
      icon: Threads,
      title: "Threads",
      href: "https://www.threads.net/@samhacker.xyz",
    },
    {
      icon: Wakatime,
      title: "Wakatime",
      href: "https://wakatime.com/@SamHacker",
    },
    {
      icon: X,
      title: "X",
      href: "https://x.com/xux510208",
    },
    {
      icon: Steam,
      title: "Steam",
      href: "https://steamcommunity.com/id/PB510208/",
    },
    {
      icon: Reddit,
      title: "Reddit",
      href: "https://reddit.com/u/DiligentCarpenter421",
    },
    {
      icon: Pypi,
      title: "PyPI",
      href: "https://pypi.org/user/510208/",
    },
    {
      icon: Gravatar,
      title: "Gravatar",
      href: "https://gravatar.com/samhacker0616",
    },
  ],
};

export default config;
