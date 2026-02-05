import type { ShsiteConfig } from "@/types/shsite.config";
import { Home, Info, Newspaper, Handshake } from "lucide-react";
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

import minecraftCover from "@/assets/pages/about/games/minecraft_cover.png";
import endfieldCover from "@/assets/pages/about/games/endfield_cover.png";
import phigrosCover from "@/assets/pages/about/games/phigros_cover.png";
import pjskCover from "@/assets/pages/about/games/pjsk_cover.png";
import maimaiCover from "@/assets/pages/about/games/maimaidx_cover.png";
import vscodeCover from "@/assets/pages/about/games/vscode_cover.png";

const config: ShsiteConfig = {
  navBar: {
    links: [
      { title: "Home", href: "/", icon: Home },
      { title: "About", href: "/about", icon: Info },
      { title: "Friends", href: "/friends", icon: Handshake },
      { title: "Blog", href: "https://samhacker.xyz/", icon: Newspaper },
    ],
  },

  rewards: [
    {
      logo: gameTcLogo,
      title: "Scratch應用 國中程式設計 甲組",
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

  game: [
    {
      name: "Minecraft",
      platform: ["電腦", "手機"],
      description:
        "麥塊，一個潛力被嚴重低估的遊戲。雖然說建築是真的很難，不過至少我還會玩紅石電路（應該玩得不差吧？）\n另外，我也很喜歡玩各種模組，像是工業模組、魔法模組之類的，學Java也有很大部分是因為想要自己寫模組來玩玩看。",
      link: "https://www.minecraft.net/",
      image: minecraftCover,
      username: "Sam510208",
    },
    {
      name: "明日方舟：終末地",
      platform: ["電腦"],
      description:
        "終末地，a.k.a.電工模擬器（X\n明日方舟我是沒玩過啦，會入坑主要只是因為小陳很可愛（被揍），放心好了我不會移情別戀的ww，害我現在養成寒假每天都要上線拉電線的習慣www",
      image: endfieldCover,
      link: "https://endfield.gryphline.com/zh-tw",
      username: "御坂糸紗奈",
    },
    {
      name: "Phigros",
      platform: ["手機"],
      description:
        "Phigros，俗稱屁股肉，是一款判定線患有嚴重過動症的音遊。重點是，完全免費啊你各位，每張譜都能享受到譜師的用（惡）心（意）。雖然我不是鴿遊，但這聽起來很不錯對吧（是在M幾點）",
      link: "https://play.google.com/store/apps/details?id=com.PigeonGames.Phigros",
      username: "SamHacker",
      image: phigrosCover,
    },
    {
      name: "世界計畫",
      platform: ["手機"],
      description:
        "世界計畫，或稱斷觸計畫（對真的會斷觸），一款咪哭只是附加的音遊。不過我其實不是很喜歡就是了，世畫的判定真的有夠機歪www，會去玩主要只是去聽歌的。順便說一下我打台服的",
      link: "https://www.tw-pjsekai.com/",
      username: "7487103114991033141（UID）",
      image: pjskCover,
    },
    {
      name: "maimai DX",
      platform: ["街機"],
      description:
        "maimai DX，簡稱麥麥，除了一道三十貴到靠北以外真的很讚。還是要在自己的網站上抱怨一下，雙押我恨你...淦╰（‵□′）╯\n喔對，不要問我為甚麼明明已經更新到CiRCLE了我圖還是放Prism Plus的，找不到咩你要幫我做嗎？",
      link: "https://maimai.sega.jp/",
      username: "101995462599988（好友代碼）",
      image: maimaiCover,
    },
    {
      name: "微軟大戰代碼",
      platform: ["電腦"],
      description:
        "好啦這也算遊戲對不對www，那我還是好好介紹一下：這是由微軟工作室推出的模擬類遊戲，擁有近乎無限的開放性、支援各國語言（我說程式），並且有不亞於Minecraft的龐大社群。重點是，它是免費的！（我到底在公三小）",
      link: "http://code.visualstudio.com/",
      image: vscodeCover,
    },
  ],
};

export default config;
