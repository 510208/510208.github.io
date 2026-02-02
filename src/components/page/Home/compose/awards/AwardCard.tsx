import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@components/ui/hover-card";
import type { ShsiteConfig } from "@/types/shsite.config";

export const AwardCard = ({
  awardItem,
}: {
  awardItem: ShsiteConfig["rewards"][number];
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="mb-6">
          <h3 className="text-lg font-semibold">{awardItem.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {awardItem.organization} &middot;{" "}
            {awardItem.year.acquirement.getFullYear()}
          </p>
          {awardItem.aka && (
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              {awardItem.aka}
            </p>
          )}
        </div>
      </HoverCardTrigger>
      <HoverCardContent
        side="right"
        align="center"
        className="w-80 p-0 overflow-hidden"
      >
        <img
          src={awardItem.logo.src}
          alt={awardItem.title}
          className="aspect-3/1 object-cover w-full"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold">{awardItem.title}</h2>
          <span className="text-sm text-gray-600 dark:text-gray-400">
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
