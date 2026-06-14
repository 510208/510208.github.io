import type { LanguageProps } from "@/types/shsite.projects";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@components/ui/tooltip";

export const ProjectTooltip = ({ language }: { language: LanguageProps }) => {
  return (
    <Tooltip>
      <TooltipTrigger className="relative">
        <span>{language.name}</span>
      </TooltipTrigger>
      <TooltipContent className="invisible absolute bottom-full left-1/2 z-30 mb-2 -translate-x-1/2 rounded bg-stone-900 px-2 py-1 text-xs whitespace-nowrap text-white shadow-md group-hover/tooltip:visible">
        {language.name}
      </TooltipContent>
    </Tooltip>
  );
};
