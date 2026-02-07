import { Earth } from "lucide-react";
import {
  Discord,
  Github,
  Instagram,
  Twitch,
  Youtube,
} from "simple-icons-astro";
import penana from "@/assets/pages/friends/penana_symbol.svg";
import type { FriendCardProps } from "@/types/shsite.friends";

const friends: FriendCardProps[] = [
  {
    image: "https://zhenyuan.dev/avatar.jpg",
    name: "Zhenyuan",
    slug: "awdrgyj8",
    description: (
      <>
        嗨😆 我是Zhenyuan ✨ <br />
        來自台灣 就讀MUST資工系 🏫 <br />
        喜愛研究電腦相關事務！🥺
      </>
    ),
    links: [
      {
        icon: <Earth />,
        to: "https://zhenyuan.dev",
        label: "個人網站",
      },
      {
        icon: <Github />,
        to: "https://github.com/awdrgyj8",
        label: "GitHub",
      },
      {
        icon: <Discord />,
        to: "https://discord.gg/FMKsu7dDx8",
        label: "Discord",
      },
      {
        icon: <Youtube />,
        to: "https://www.youtube.com/@zhenyuan0427",
        label: "YouTube",
      },
    ],
  },
  {
    image: "/assets/friend_photo/dennis911.webp",
    name: "Dennis911",
    slug: "T3chHAX0R",
    description: (
      <>
        羊駝、病毒、黑客和Monkey的結合體， <br />
        喜歡看VTuber的標準宅宅…， <br />
        a.k.a.我認識的人裡面最會講贛話的www
      </>
    ),
    links: [
      {
        icon: <Github />,
        to: "https://github.com/T3chHAX0R",
        label: "GitHub",
      },
    ],
  },
  {
    image: "/assets/friend_photo/woodypegasus382.webp",
    name: "夜間部",
    slug: "woodypegasus382",
    description: (
      <>
        114準考生
        <br />
        <a
          href="https://discord.gg/CKGwRtFcFw"
          target="_blank"
          rel="noopener noreferrer"
          className="hyperlink"
        >
          https://discord.gg/CKGwRtFcFw
        </a>
        <br />
        重來好像也沒差
      </>
    ),
    links: [
      {
        icon: <Github />,
        to: "https://github.com/woodypegasus382",
        label: "GitHub",
      },
      {
        icon: <Twitch />,
        to: "https://www.twitch.tv/lnstw",
        label: "Twitch",
      },
      {
        icon: <Discord />,
        to: "https://discord.gg/CKGwRtFcFw",
        label: "Discord",
      },
    ],
  },
  {
    image: "/assets/friend_photo/kunweb04.webp",
    name: "麟澤 (OHO)",
    slug: "kunweb04",
    description: (
      <>
        一個隨心所欲，追求效率之學生。
        <br />
        喜宅於家，屬於上知天文下肢癱瘓的類型。
        <br />
        臆想著某天可以自給自足（網頁、應用、電器）
      </>
    ),
    links: [
      {
        icon: <Earth />,
        to: "https://kunweb04.github.io/introduce2/index.html",
        label: "個人網站",
      },
      {
        icon: <Github />,
        to: "https://github.com/kunweb04",
        label: "GitHub",
      },
    ],
  },
  {
    image: "/assets/friend_photo/sorbet1686.webp",
    name: "雪樂",
    slug: "sorbet1686",
    description: (
      <>
        嗨嗨！我是雪樂~
        <br />
        國中生，學渣一枚……
        <br />
        喜歡動漫、小說、畫畫，遊戲（但遊戲玩得很爛(¯∇¯٥)
        <br />
        目前是以經營網誌為主，沒有寫小說
        <br />
        歡迎大家找我聊天ヾ(*´∇`*)ﾉ
      </>
    ),
    links: [
      {
        icon: <img src={penana.src} alt="Penana" className="w-4 h-4" />,
        to: "https://www.penana.com/user/150616/",
        label: "蕉站",
      },
      {
        icon: <Youtube />,
        to: "https://www.youtube.com/@sorbet1686",
        label: "YouTube",
      },
      {
        icon: <Instagram />,
        to: "https://www.instagram.com/sorbet1686/",
        label: "Instagram",
      },
    ],
  },
  {
    image: "/assets/friend_photo/lumu.webp",
    name: "璐沐",
    slug: "lumu",
    description: (
      <>
        一隻小鹿~
        <br />
        偏好新詩，古代詩。
        <br />
        畢竟才疏學淺，還需人們指點一番~
        <br />
        雖然更新速度超級慢，但請相信，不會停更!
        <br />
        在此附上YT帳號連結
        <a
          href="https://youtube.com/channel/UCDGmv1oiOAvu9d0V6qKTGjA?si=Ugeg7pOVdvkEoF7N"
          target="_blank"
          rel="noopener noreferrer"
          className="hyperlink"
        >
          點我前往
        </a>
        <br />
        歡迎來玩+催更~
        <br />
        （給小鹿一點建議吧！！！
      </>
    ),
    links: [
      {
        icon: <img src={penana.src} alt="Penana" className="w-4 h-4" />,
        to: "https://www.penana.com/user/233957/%E7%92%90%E6%B2%90",
        label: "蕉站",
      },
      {
        icon: <Youtube />,
        to: "https://www.youtube.com/channel/UCDGmv1oiOAvu9d0V6qKTGjA?si=Ugeg7pOVdvkEoF7N",
        label: "YouTube",
      },
      {
        icon: <Instagram />,
        to: "https://www.instagram.com/miaomiaomiao4035/",
        label: "Instagram",
      },
    ],
  },
  {
    image: "/assets/friend_photo/ruixue.webp",
    name: "Ruixue",
    slug: "ruixue",
    description: (
      <>
        我是Ruixue,喜歡AI、寫程式、還有可愛的小蘿莉,也愛分享生活趣事,正在經營自己的Discord機器人Minging-ru與社群,一步步打造專屬的數位天地。
      </>
    ),
    links: [
      {
        icon: <Earth />,
        to: "https://ruixue.onrender.com/",
        label: "個人網站",
      },
    ],
  },
  {
    image: "https://gravatar.com/avatar/f6d0a62624d1d82d90ea3232e3663561",
    name: "三哥",
    slug: "sangege",
    description: <>　</>,
    links: [
      {
        icon: <Earth />,
        to: "https://sange.ge/",
        label: "個人網站",
      },
    ],
  },
];

export default friends;
