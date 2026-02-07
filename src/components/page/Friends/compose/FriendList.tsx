import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import WaterFall from "@/components/ui/waterfall";
import friends from "@shFriends";
import type { FriendCardProps } from "@/types/shsite.friends";

function getFriendImageUrl(image: ImageMetadata | string): string {
  return typeof image === "string" ? image : image.src;
}

function FriendCard({
  image,
  name,
  slug,
  description,
  links,
}: FriendCardProps) {
  return (
    <Card className="relative p-4 bg-stone-900 overflow-hidden">
      {/* 裝飾性背景圖 - 右下角 */}
      <div className="absolute -right-0 -bottom-0 w-[171px] h-[171px] opacity-40 pointer-events-none">
        <img
          src={getFriendImageUrl(image)}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at bottom right, rgba(28,25,23,0) 0%, rgba(28,25,23,1) 68.75%)",
          }}
        />
      </div>

      {/* 卡片內容 */}
      <div className="flex justify-start gap-4 relative z-10">
        <Avatar className="w-12 h-12">
          <AvatarImage src={getFriendImageUrl(image)} />
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
export default function FriendList() {
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
}
