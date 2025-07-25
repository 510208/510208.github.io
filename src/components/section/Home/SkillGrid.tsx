import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

// 定義單一技能的資料結構
interface Skill {
  name: string;
  fileName: string;
  darkFileName?: string; // 可選的深色模式檔案名稱
  gradientColors: string[];
  position: { row: number; col: number };
}

// 技能圖標數據配置 - 基於實際檔案
const skillIcons: Skill[] = [
  {
    name: "WordPress",
    fileName: "wordpresscom_symbol.svg",
    gradientColors: ["rgba(56, 88, 233, 0.4)"],
    position: { row: 1, col: 2 },
  },
  {
    name: "Python",
    fileName: "python_symbol.svg",
    gradientColors: ["rgba(255, 212, 59, 0.4)"],
    position: { row: 1, col: 3 },
  },
  {
    name: "Git",
    fileName: "git_symbol.svg",
    gradientColors: ["rgba(240, 81, 51, 0.4)"],
    position: { row: 1, col: 4 },
  },
  {
    name: "JavaScript",
    fileName: "js_symbol.svg",
    gradientColors: ["rgba(104, 159, 99, 0.4)"],
    position: { row: 1, col: 6 },
  },
  {
    name: "Scratch",
    fileName: "scratch_symbol.svg",
    gradientColors: ["rgba(249, 168, 58, 0.4)"],
    position: { row: 1, col: 7 },
  },
  {
    name: "Next.js",
    fileName: "nextjs_symbol.svg",
    darkFileName: "nextjs_symbol_dark.svg",
    gradientColors: ["rgba(103, 103, 103, 0.4)"],
    position: { row: 2, col: 1 },
  },
  {
    name: "Linux",
    fileName: "linux_symbol.svg",
    gradientColors: ["rgba(247, 184, 32, 0.4)"],
    position: { row: 2, col: 3 },
  },
  {
    name: "DaVinci Resolve",
    fileName: "davinci_symbol.svg",
    gradientColors: ["rgba(56, 155, 216, 0.4)"],
    position: { row: 2, col: 4 },
  },
  {
    name: "Figma",
    fileName: "figma_symbol.svg",
    gradientColors: ["rgba(162, 89, 255, 0.4)"],
    position: { row: 2, col: 5 },
  },
  {
    name: "Svelte",
    fileName: "svelte_symbol.svg",
    gradientColors: ["rgba(255, 62, 0, 0.4)"],
    position: { row: 2, col: 7 },
  },
  {
    name: "Minecraft",
    fileName: "minecraft_symbol.svg",
    gradientColors: ["rgba(136, 184, 88, 0.4)"],
    position: { row: 2, col: 8 },
  },
];

interface SkillIconProps {
  skill: Skill;
  isDesktop?: boolean; // 新增屬性來判斷是否為桌面版布局
}

const SkillIcon = ({ skill, isDesktop = false }: SkillIconProps) => {
  return (
    <Tooltip>
      <TooltipContent className="bg-neutral-800 text-white p-2 rounded-lg shadow-lg">
        <p className="text-sm font-medium text-neutral-200 dark:text-neutral-800">
          {skill.name}
        </p>
      </TooltipContent>
      <TooltipTrigger>
        <div
          className={`relative overflow-hidden rounded-lg md:rounded-xl aspect-square transition-all duration-300 hover:scale-110 w-full h-auto min-h-[60px] md:min-h-[80px]`}
          style={{
            background: `radial-gradient(50% 50% at 50% 50%, ${skill.gradientColors.join(
              ", "
            )} 0%, transparent 90%)`,
            // 只在桌面版布局時使用 grid positioning
            ...(isDesktop
              ? {
                  gridColumnStart: skill.position.col,
                  gridRowStart: skill.position.row,
                }
              : {}),
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center p-3 md:p-5">
            {/* 預設圖示 (淺色模式，或當沒有深色圖示時的後備) */}
            <img
              src={`/assets/skill-icons/${skill.fileName}`}
              alt={skill.name}
              className={`w-6 h-6 md:w-10 md:h-10 object-contain filter ${
                skill.darkFileName ? "dark:hidden" : ""
              }`}
              loading="lazy"
            />
            {/* 深色模式專用圖示 (僅當 darkFileName 存在時渲染) */}
            {skill.darkFileName && (
              <img
                src={`/assets/skill-icons/${skill.darkFileName}`}
                alt={skill.name}
                className="w-6 h-6 md:w-10 md:h-10 object-contain filter hidden dark:block"
                loading="lazy"
              />
            )}
          </div>
        </div>
      </TooltipTrigger>
    </Tooltip>
  );
};

export const SkillGrid = () => {
  return (
    <section className="w-full py-8 md:py-16">
      <div className="container mx-auto px-4">
        {/* 標題區塊 */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 md:mb-4 font-noto">
            技術技能
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto font-noto px-4">
            我熟悉的各種技術和工具，涵蓋前端開發、後端技術、設計工具等領域
          </p>
        </div>

        {/* 技能圖標網格 */}
        <div className="max-w-sm sm:max-w-md md:max-w-4xl mx-auto">
          {/* 手機版：3列布局，自動行數 */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:hidden">
            {skillIcons.map((skill) => (
              <SkillIcon key={skill.name} skill={skill} isDesktop={false} />
            ))}
          </div>

          {/* 桌面版：8列2行布局 */}
          <div className="hidden md:grid md:grid-cols-8 md:grid-rows-2 md:gap-4 md:h-[200px]">
            {skillIcons.map((skill) => (
              <SkillIcon key={skill.name} skill={skill} isDesktop={true} />
            ))}
          </div>
        </div>

        {/* 跑馬燈技能標籤 */}
        <div className="mt-8 md:mt-12 w-full relative py-4">
          {/* 跑馬燈容器 */}
          <div className="flex animate-marquee gap-4 whitespace-nowrap -rotate-1">
            {/* 第一組標籤 */}
            {skillIcons.map((skill) => (
              <Badge
                key={skill.name}
                variant="outline"
                className="flex-shrink-0 px-3 py-1.5 text-sm font-medium bg-muted/30 text-muted-foreground border-muted hover:bg-accent hover:text-accent-foreground transition-colors font-inter cursor-default"
                style={{
                  backgroundImage: `linear-gradient(to right, ${skill.gradientColors.join(
                    ", "
                  )} 0%, transparent 90%)`,
                }}
              >
                <img
                  src={`/assets/skill-icons/${skill.fileName}`}
                  alt={skill.name}
                  className="w-4 h-4 md:w-6 md:h-6 object-contain mr-1 dark:hidden"
                  loading="lazy"
                />
                <img
                  src={`/assets/skill-icons/${
                    skill.darkFileName || skill.fileName
                  }`}
                  alt={skill.name}
                  className="w-4 h-4 md:w-6 md:h-6 object-contain mr-1 hidden dark:block"
                  loading="lazy"
                />
                {skill.name}
              </Badge>
            ))}
            {/* 第二組標籤（無縫銜接） */}
            {skillIcons.map((skill) => (
              <Badge
                key={skill.name}
                variant="outline"
                className="flex-shrink-0 px-3 py-1.5 text-sm font-medium bg-muted/30 text-muted-foreground border-muted hover:bg-accent hover:text-accent-foreground transition-colors font-inter cursor-default"
                style={{
                  backgroundImage: `linear-gradient(to right, ${skill.gradientColors.join(
                    ", "
                  )} 0%, transparent 90%)`,
                }}
              >
                <img
                  src={`/assets/skill-icons/${skill.fileName}`}
                  alt={skill.name}
                  className="w-4 h-4 md:w-6 md:h-6 object-contain mr-1 dark:hidden"
                  loading="lazy"
                />
                <img
                  src={`/assets/skill-icons/${
                    skill.darkFileName || skill.fileName
                  }`}
                  alt={skill.name}
                  className="w-4 h-4 md:w-6 md:h-6 object-contain mr-1 hidden dark:block"
                  loading="lazy"
                />
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
