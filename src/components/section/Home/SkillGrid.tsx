import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
}

const SkillIcon = ({ skill }: SkillIconProps) => {
  return (
    <Tooltip>
      <TooltipContent className="bg-neutral-800 text-white p-2 rounded-lg shadow-lg">
        <p className="text-sm font-medium text-neutral-200 dark:text-neutral-800">
          {skill.name}
        </p>
      </TooltipContent>
      <TooltipTrigger>
        <div
          className={`relative overflow-hidden rounded-xl aspect-square transition-all duration-300 hover:scale-110`}
          style={{
            background: `radial-gradient(50% 50% at 50% 50%, ${skill.gradientColors.join(
              ", "
            )} 0%, transparent 90%)`,
            borderRadius: "10px",
            gridColumnStart: skill.position.col,
            gridRowStart: skill.position.row,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center p-5">
            {/* 預設圖示 (淺色模式，或當沒有深色圖示時的後備) */}
            <img
              src={`/assets/skill-icons/${skill.fileName}`}
              alt={skill.name}
              className={`w-10 h-10 object-contain filter ${
                skill.darkFileName ? "dark:hidden" : ""
              }`}
              loading="lazy"
            />
            {/* 深色模式專用圖示 (僅當 darkFileName 存在時渲染) */}
            {skill.darkFileName && (
              <img
                src={`/assets/skill-icons/${skill.darkFileName}`}
                alt={skill.name}
                className="w-10 h-10 object-contain filter hidden dark:block"
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
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        {/* 技能圖標網格 */}
        <div className="max-w-xl md:max-w-4xl mx-auto">
          <div className="grid grid-cols-2 grid-rows-8 gap-x-0 gap-y-30 md:grid-cols-8 md:grid-rows-2 md:gap-4 h-[200px]">
            {skillIcons.map((skill) => (
              <SkillIcon key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
