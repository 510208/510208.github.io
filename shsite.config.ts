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

import apcsLogo from "@/assets/pages/home/rewards/apcs.webp";
import gameTcLogo from "@/assets/pages/home/rewards/game-tc.webp";
import gceLogo from "@/assets/pages/home/rewards/gemini-certified-educator.webp";

const config: ShsiteConfig = {
  navBar: {
    links: [
      { title: "Home", href: "/", icon: Home },
      { title: "About", href: "/about", icon: Info },
      { title: "Blog", href: "https://samhacker.xyz/", icon: Newspaper },
    ],
  },

  rewards: [
    {
      logo: gameTcLogo,
      title: "SCRATCH應用 國中程式設計 甲組",
      aka: "臺中市中小學資訊網路應用競賽",
      result: "甲等",
      year: {
        acquirement: new Date(2023, 4, 12),
      },
      organization: "臺中市政府教育局",
      link: "https://game.tc.edu.tw/application/work-appreciation/index",
      type: "competition",
    },
    {
      logo: gameTcLogo,
      title: "Scratch應用 國中創意設計 甲組",
      aka: "臺中市中小學資訊網路應用競賽",
      result: "優等",
      year: {
        acquirement: new Date(2024, 4, 12),
      },
      organization: "臺中市政府教育局",
      link: "https://game.tc.edu.tw/application/work-appreciation/index",
      type: "competition",
    },
    {
      logo: apcsLogo,
      title: "APCS",
      aka: "大學程式設計先修檢測",
      result: "概念3級分 / 實作3級分",
      year: {
        acquirement: new Date(2025, 5, 15),
      },
      organization: "國立臺灣師範大學資訊工程學系",
      link: "https://apcs.csie.ntnu.edu.tw/",
      type: "certification",
    },
    {
      logo: gceLogo,
      title: "Gemini Certified Educator",
      result: "通過",
      year: {
        acquirement: new Date(2025, 11, 7),
        expiration: new Date(2028, 11, 7),
      },
      organization: "Google for Education",
      link: "https://edu.google.accredible.com/0fe723bf-539d-42c1-b545-2150a0b7c6b9#acc.YJuCmEKe",
      type: "certification",
    },
  ],

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
