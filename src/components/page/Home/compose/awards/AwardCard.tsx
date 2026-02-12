import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@components/ui/hover-card";
import type { ShsiteConfig } from "@/types/shsite.config";
import { cn } from "@lib/utils";

export const AwardCard = ({
  awardItem,
  className,
}: {
  awardItem: ShsiteConfig["rewards"][number];
  className?: string;
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div
          // 加上 suppressHydrationWarning 避免因 client-side 動畫插入 inline style 導致的 hydration mismatch
          suppressHydrationWarning
          data-animate-target="award"
          className={cn("sh-awards-animation mb-6", className)}
        >
          <h3 className="text-lg font-semibold">{awardItem.title}</h3>
          <p className="text-sm text-gray-400">
            {awardItem.organization} &middot;{" "}
            {awardItem.year.acquirement.getFullYear()}
          </p>
          {awardItem.aka && (
            <p className="mt-1 text-gray-400">{awardItem.aka}</p>
          )}
        </div>
      </HoverCardTrigger>
      <HoverCardContent
        side="right"
        align="center"
        className="w-80 overflow-hidden p-0"
      >
        <img
          src={awardItem.logo.src}
          alt={awardItem.title}
          className="aspect-3/1 w-full object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold">{awardItem.title}</h2>
          <span className="text-sm text-gray-400">
            {awardItem.aka ? (
              <>
                {awardItem.aka}
                <br />
              </>
            ) : (
              ""
            )}
            {awardItem.organization}
          </span>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default AwardCard;
