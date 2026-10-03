import dennis911Photo from "@/assets/pages/friends/friend_photo/dennis911.webp";
import lnstwPhoto from "@/assets/pages/friends/friend_photo/lnstw.webp";
import kunweb04Photo from "@/assets/pages/friends/friend_photo/kunweb04.webp";
import sorbet1686Photo from "@/assets/pages/friends/friend_photo/sorbet1686.webp";
import lumuPhoto from "@/assets/pages/friends/friend_photo/lumu.webp";
import ruixuePhoto from "@/assets/pages/friends/friend_photo/ruixue.webp";
import yemoguPhoto from "@/assets/pages/friends/friend_photo/yemogu.jpg";
import emPhoto from "@/assets/pages/friends/friend_photo/elvis_mao.jpg";
import type { FriendCardProps } from "@/types/shsite.friends";

const link = (
  icon: FriendCardProps["links"][number]["icon"],
  to: string,
  label: string,
) => ({ icon, to, label });

const friends: FriendCardProps[] = [
  {
    image: "https://www.gravatar.com/avatar/07f375105a68074c6b90379762cd1443",
    name: "Zhenyuan",
    slug: "awdrgyj8",
    description:
      "嗨😆 我是Zhenyuan ✨<br />來自台灣 就讀MUST資工系 🏫<br />喜愛研究電腦相關事務！🥺",
    links: [
      link("Earth", "https://zhenyuan.dev", "個人網站"),
      link("Github", "https://github.com/awdrgyj8", "GitHub"),
      link("Discord", "https://discord.gg/FMKsu7dDx8", "Discord"),
      link("Youtube", "https://www.youtube.com/@zhenyuan0427", "YouTube"),
    ],
  },
  {
    image: dennis911Photo,
    name: "Dennis911",
    slug: "T3chHAX0R",
    description:
      "羊駝、病毒、黑客和Monkey的結合體，<br />喜歡看VTuber的標準宅宅…<br />a.k.a.我認識的人裡面最會講贛話的www",
    links: [link("Github", "https://github.com/T3chHAX0R", "GitHub")],
  },
  {
    image: lnstwPhoto,
    name: "夜間部",
    slug: "woodypegasus382",
    description: "114準考生<br />重來好像也沒差",
    links: [
      link("Github", "https://github.com/woodypegasus382", "GitHub"),
      link("Twitch", "https://www.twitch.tv/lnstw", "Twitch"),
      link("Discord", "https://discord.gg/CKGwRtFcFw", "Discord"),
    ],
  },
  {
    image: kunweb04Photo,
    name: "麟澤 (OHO)",
    slug: "kunweb04",
    description:
      "一個隨心所欲，追求效率之學生。<br />喜宅於家，屬於上知天文下肢癱瘓的類型。",
    links: [
      link(
        "Earth",
        "https://kunweb04.github.io/introduce2/index.html",
        "個人網站",
      ),
      link("Github", "https://github.com/kunweb04", "GitHub"),
    ],
  },
  {
    image: sorbet1686Photo,
    name: "雪樂",
    slug: "sorbet1686",
    description:
      "嗨嗨！我是雪樂~<br />國中生，學渣一枚……<br />喜歡動漫、小說、畫畫，遊戲",
    links: [
      link("Earth", "https://www.penana.com/user/150616/", "蕉站"),
      link("Youtube", "https://www.youtube.com/@sorbet1686", "YouTube"),
      link("Instagram", "https://www.instagram.com/sorbet1686/", "Instagram"),
    ],
  },
  {
    image: lumuPhoto,
    name: "璐沐",
    slug: "lumu",
    description: "一隻小鹿~<br />偏好新詩，古代詩。<br />歡迎來玩+催更~",
    links: [
      link("Earth", "https://www.penana.com/user/233957/", "蕉站"),
      link(
        "Youtube",
        "https://www.youtube.com/channel/UCDGmv1oiOAvu9d0V6qKTGjA",
        "YouTube",
      ),
      link(
        "Instagram",
        "https://www.instagram.com/miaomiaomiao4035/",
        "Instagram",
      ),
    ],
  },
  {
    image: ruixuePhoto,
    name: "Ruixue",
    slug: "ruixue",
    description: "我是Ruixue,喜歡AI、寫程式、還有可愛的小蘿莉。",
    links: [link("Earth", "https://ruixue.onrender.com/", "個人網站")],
  },
  {
    image: "https://gravatar.com/avatar/f6d0a62624d1d82d90ea3232e3663561",
    name: "三哥",
    slug: "sangege",
    description: "　",
    links: [link("Earth", "https://sange.ge/", "個人網站")],
  },
  {
    image:
      "https://www.gravatar.com/avatar/6b4acff32864e0e522937ec26e016709db956e97f199b46968e0ddc7ce6b79e8",
    name: "JN",
    slug: "giveanornot",
    description:
      "現居台北，家鄉台中大里草湖（有很好吃的芋仔冰）<br />現在在銀行做雲端工程師。",
    links: [link("Newspaper", "https://blog.giveanornot.com/", "部落格")],
  },
  {
    image: yemoguPhoto,
    name: "野蘑菇",
    slug: "yemogu",
    description: "搭好我們是野蘑菇<br />在這裡和大家一起畫畫",
    links: [
      link("Instagram", "https://www.instagram.com/yemogu._.810/", "Instagram"),
    ],
  },
  {
    image: emPhoto,
    name: "毛哥EM",
    slug: "elvismao",
    description: "全端工程龍",
    links: [
      link("Github", "https://github.com/elvisdragonmao", "GitHub"),
      link("Discord", "https://dc.elvismao.com/", "Discord"),
      link("Newspaper", "https://emtech.cc/", "Blog"),
    ],
  },
];
export default friends;
