import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Earth } from "lucide-react";
import {
  SiDiscord,
  SiGithub,
  SiInstagram,
  SiTwitch,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import { Newspaper } from "lucide-react";

const icons = {
  Earth,
  Github: SiGithub,
  Instagram: SiInstagram,
  Newspaper,
  Twitch: SiTwitch,
  Youtube: SiYoutube,
  Discord: SiDiscord,
};

type UserAvatarProps = {
  image: string;
  name: string;
};

type LinksProps = {
  name: string;
  links: { icon: keyof typeof icons; to: string; label: string }[];
};

export function UserAvatar({ image, name }: UserAvatarProps) {
  return (
    <Avatar className="h-12 w-12">
      <AvatarImage src={image} />
      <AvatarFallback>{name.charAt(0)}</AvatarFallback>
    </Avatar>
  );
}

export function UserLinks({ name, links }: LinksProps) {
  return (
    <>
      <div className="flex flex-wrap gap-2 text-xs">
        <TooltipProvider>
          {links.map((link) => {
            const Icon = icons[link.icon];
            return (
              <Tooltip key={link.to}>
                <TooltipTrigger asChild>
                  <a
                    href={link.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`${name}的${link.label}（另開新視窗）`}
                    aria-label={`${name}的${link.label}（另開新視窗）`}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                    )}
                  >
                    <Icon className="size-4" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{link.label}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </TooltipProvider>
      </div>
    </>
  );
}
