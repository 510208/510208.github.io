import React from "react";
import Earth from "@/components/ui/earth";
import roc_flag from "@/assets/contact-icons/roc_flag.svg";

interface NationalityCardProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

const NationalityCard: React.FC<NationalityCardProps> = ({
  title = "國籍",
  subtitle = "臺灣",
  description = "",
}) => {
  return (
    <div className="relative bg-gray-100/90 dark:bg-white/10 border border-gray-200/50 dark:border-white/6 rounded-lg p-4 h-36 sm:h-40 transition-all duration-300 group overflow-hidden">
      {/* 地球儀背景 */}
      <div className="absolute -top-2 z-0 flex items-center pointer-events-none">
        <div className="w-64 h-64 opacity-40">
          <Earth
            width={128}
            markerLocation={[24.23321, 120.9417]}
            markerSize={0.13}
          />
        </div>
      </div>
      {/* Emoji 國旗圖示 */}
      <div className="relative z-10 w-9 h-9 rounded-lg flex items-center justify-center mb-3 bg-white/80 dark:bg-black/40">
        <img src={roc_flag} alt="ROC Flag" className="w-6 h-6 rounded-md" />
      </div>
      {/* 卡片標題 */}
      <h3 className="relative z-10 font-bold text-lg sm:text-xl text-black dark:text-white mb-1 font-inter">
        {title}
      </h3>
      {/* 卡片副標題/描述 */}
      <div className="relative z-10 text-sm text-gray-600 dark:text-gray-400 font-inter">
        <p className="mb-0 leading-normal">{subtitle}</p>
        {description && <p className="mb-0 leading-normal">{description}</p>}
      </div>
    </div>
  );
};

export default NationalityCard;
