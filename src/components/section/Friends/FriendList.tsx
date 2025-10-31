import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import { Earth, Github, Instagram, Twitch, Youtube } from "lucide-react";

import discordSymbol from "@/assets/contact-icons/discord_symbol.svg"; // v
import penana from "@/assets/contact-icons/penana_symbol.svg"; // v
import micropedia from "@/assets/contact-icons/micropedia_logo.svg"; // v
import WaterFall from "@/components/ui/waterfall";

interface FriendCardProps {
  image: string;
  name: string;
  slug: string;
  description: React.ReactNode;
  links: {
    icon: React.ReactNode;
    to: string;
    label: string;
  }[];
}

function FriendCard({
  image,
  name,
  slug,
  description,
  links,
}: FriendCardProps) {
  return (
    <Card className="relative p-4 bg-white dark:bg-gray-800 overflow-hidden">
      {/* 裝飾性背景圖 - 右下角 */}
      <div className="absolute -right-0 -bottom-0 w-[171px] h-[171px] opacity-40 pointer-events-none">
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        {/* 淺色模式漸層遮罩 */}
        <div
          className="absolute inset-0 dark:hidden"
          style={{
            background:
              "radial-gradient(circle at bottom right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 68.75%)",
          }}
        />
        {/* 暗色模式漸層遮罩 */}
        <div
          className="absolute inset-0 hidden dark:block"
          style={{
            background:
              "radial-gradient(circle at bottom right, rgba(31,41,55,0) 0%, rgba(31,41,55,1) 68.75%)",
          }}
        />
      </div>

      {/* 卡片內容 */}
      <div className="flex justify-start gap-4 relative z-10">
        <Avatar className="w-12 h-12">
          <AvatarImage src={image} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="space-y-1 w-full">
          <h3 className="text-lg font-bold">{name}</h3>
          <h4 className="text-sm font-semibold opacity-30">@{slug}</h4>
          <p className="text-sm">{description}</p>
          <div className="text-xs gap-2 flex flex-wrap">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.to}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <Tooltip>
                  <TooltipTrigger>
                    <Button variant="ghost" size="icon" aria-label={link.label}>
                      {link.icon}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{link.label}</p>
                  </TooltipContent>
                </Tooltip>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
export function FriendList() {
  const friends = [
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
          icon: <img src={discordSymbol} alt="Discord" className="w-4 h-4" />,
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
          icon: <img src={discordSymbol} alt="Discord" className="w-4 h-4" />,
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
          icon: <img src={penana} alt="Penana" className="w-4 h-4" />,
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
          icon: <img src={penana} alt="Penana" className="w-4 h-4" />,
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
      image: "/assets/friend_photo/jingyu.webp",
      name: "司馬定瑄（張靜羽）",
      slug: "jingyu",
      description: (
        <>
          張靜羽（英文:<i>JingYu</i>），舊稱維仁，微國國際政治家，曾任
          <a
            href="/wiki/%E7%B4%85%E8%8A%B1%E5%9D%82%E6%B0%91%E4%B8%BB%E5%85%B1%E5%92%8C%E5%9C%8B"
            title="紅花坂民主共和國"
            className="hyperlink"
          >
            紅花坂民主共和國
          </a>{" "}
          副總統、
          <a
            href="/wiki/%E8%8A%B1%E5%9D%82%E5%9C%8B%E6%B0%91%E9%BB%A8"
            title="花坂國民黨"
            className="hyperlink"
          >
            花坂國民黨
          </a>{" "}
          副黨主席、
          <a
            href="/wiki/%E5%A8%81%E7%88%BE%E8%98%AD%E7%8E%8B%E5%9C%8B"
            title="威爾蘭王國"
            className="hyperlink"
          >
            威爾蘭王國
          </a>{" "}
          外務部官員。現今活躍於Facebook、discord。
        </>
      ),
      links: [
        {
          icon: <img src={micropedia} alt="微國家百科" className="w-4 h-4" />,
          to: "https://www.micropedia.uk/wiki/%E5%BC%B5%E7%B6%AD%E4%BB%81",
          label: "微國家百科",
        },
      ],
    },
  ];

  return (
    <WaterFall
      items={friends}
      className="columns-1 sm:columns-2 lg:columns-3 [column-gap:1rem]"
      renderItem={(friend) => (
        <FriendCard
          key={friend.slug}
          image={friend.image}
          name={friend.name}
          slug={friend.slug}
          description={friend.description}
          links={friend.links}
        />
      )}
    />
  );

  // return (
  //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  //     {friends.map((friend, index) => (
  //       <Card
  //         className="bg-white dark:bg-gray-800 min-h-[400px] transition-transform transform duration-300 hover:scale-101"
  //         key={index}
  //       >
  //         <img
  //           src={friend.image}
  //           alt={`${friend.name} 的圖片`}
  //           className="w-full h-60 object-cover rounded-t-lg mt-0"
  //         />
  //         <CardHeader>
  //           <CardTitle className="text-xl font-bold">{friend.name}</CardTitle>
  //           <CardDescription className="text-gray-500">
  //             {`@${friend.slug}`}
  //           </CardDescription>
  //         </CardHeader>
  //         <CardContent>
  //           <p>{friend.description}</p>
  //         </CardContent>
  //         <CardFooter>
  //           <div className="flex flex-wrap gap-2">
  //             {friend.links.map((link, linkIndex) =>
  //               linkIndex === 0 ? (
  //                 <Button key={linkIndex} variant="outline" size="sm" asChild>
  //                   <a href={link.to} target="_blank" rel="noopener noreferrer">
  //                     {link.icon} {link.label}
  //                   </a>
  //                 </Button>
  //               ) : (
  //                 <Tooltip key={linkIndex}>
  //                   <TooltipTrigger asChild>
  //                     <Button variant="outline" size="sm" asChild>
  //                       <a
  //                         href={link.to}
  //                         target="_blank"
  //                         rel="noopener noreferrer"
  //                       >
  //                         {link.icon}
  //                       </a>
  //                     </Button>
  //                   </TooltipTrigger>
  //                   <TooltipContent>{link.label}</TooltipContent>
  //                 </Tooltip>
  //               )
  //             )}
  //           </div>
  //         </CardFooter>
  //       </Card>
  //     ))}
  //   </div>
  // );
}
