import { GeneralHeroSection } from "@/components/GeneralHeroSection";
import { EquipmentsGrid } from "@/components/section/Equipments/EquipmentsGrid";
import { BasePages } from "./base-page";

const PeripheralEquipments = [
  {
    name: "Logitech G Pro Wireless",
    description: "雖然沒在打電競，反正人家送了就用嘛awa",
    thumbnail: "/assets/equipments/logitech_g_pro_wireless.webp",
  },
  {
    name: "Logitech K380",
    description: "藍牙鍵盤，跟筆電內建的鍵盤換著用，筆電鍵盤才能用久一點",
    thumbnail: "/assets/equipments/logitech_k380.webp",
  },
  {
    name: "RedMi Buds 6 Lite",
    description: "有ANC主動降噪，又便宜，邊打Code邊聽音樂真的很爽",
    thumbnail: "/assets/equipments/redmi_buds_6_lite.webp",
  },
];

const DevelopmentTools = [
  {
    name: "Visual Studio Code",
    description: "微軟推出的開源程式碼編輯器，擴充性與可自訂性都是數一數二的",
    thumbnail: "/assets/equipments/vscode.webp",
  },
  {
    name: "NeoVim",
    description:
      "終端打Code的工具，雖然還在學習中，但高效與輕量是它獨一無二的優勢",
    thumbnail: "/assets/equipments/neovim.webp",
  },
  {
    name: "JetBrains PyCharm",
    description:
      "專業的Python IDE，提供強大的代碼輔助功能，但我不是很熟就是了ww",
    thumbnail: "/assets/equipments/pycharm.webp",
  },
  {
    name: "JetBrains WebStorm",
    description:
      "專業的JavaScript IDE，提供強大的代碼輔助功能，因為GitHub學生開發包有免費授權，所以用一下",
    thumbnail: "/assets/equipments/webstorm.webp",
  },
  {
    name: "GitHub Copilot",
    description:
      "這個網站有一部份是它幫我的，教育版真的好棒（我有自己寫啦 (>///<) 放心）",
    thumbnail: (
      <img
        src="/assets/equipments/copilot.webp"
        alt="GitHub Copilot"
        className="rounded-xl"
      />
    ),
  },
  {
    name: "Discord",
    description: "它是開發工具...是吧...邊聊天邊打Code很正常啊（？才怪勒）",
    thumbnail: "/assets/equipments/discord.webp",
  },
  {
    name: "Figma",
    description: "做介面用的軟體，技術太爛寫不出個什麼我畫個圖做夢還不行嗎？",
    thumbnail: "/assets/equipments/figma.webp",
  },
  {
    name: "Minecraft",
    description:
      "Minecraft不只是剪片軟體、遊戲引擎，還是建模工具。你說它是遊戲？才怪，我看你完全是不懂喔。",
    thumbnail: "/assets/equipments/minecraft.webp",
  },
  {
    name: "GitHub",
    description:
      "全球最大交友社...不對，是全球最大開源社區（不過說是交友平台也不是不行就是了）",
    thumbnail: "/assets/equipments/github.webp",
  },
  {
    name: "ThunderClient",
    description:
      "集成在VSCode中的API測試工具，雖然Postman更好用，但我懶得開Postman了有夠麻煩",
    thumbnail: "/assets/equipments/thunder_client.webp",
  },
  {
    name: "Word",
    description:
      "據老外說是比VSCode還好的編輯器，還搭載人肉ESLint（？）有人試過嗎？",
    thumbnail: "/assets/equipments/word.webp",
  },
];

export const Equipments = () => {
  return (
    <BasePages>
      <GeneralHeroSection
        title="Equipments"
        subtitle="所使用的裝置、工具與語言"
        backgroundImage="/assets/page_background/equipments_bg.webp"
        backgroundAuthor="Pixabay"
        backgroundAuthorUrl="https://www.pexels.com/zh-tw/@pixabay/"
        backgroundText="我的裝備"
      />
      <div className="container mx-auto px-4 pb-8 max-w-[1200px] bg-transparent">
        <h2 className="text-2xl font-bold mb-4">筆電</h2>
        <div className="w-[100%] justify-center flex">
          <div id="equipments-intro" className="text-center mb-8 w-full">
            <img
              src="/assets/equipments/gigabyte_g6_kf_2024.webp"
              alt="GIGABYTE G6 KF (2024)"
              className="max-w-[100%] w-full rounded-xl border"
            />
            <small className="dark:text-gray-100/80">
              <strong className="font-inter mr-2">GIGABYTE G6 KF (2024)</strong>
              <span>Intel Core i7 13700H and NVIDIA GeForce RTX 4060</span>
            </small>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 pb-8 max-w-[1200px] bg-transparent">
        <h2 className="text-2xl font-bold mb-4">周邊裝置</h2>
        <EquipmentsGrid equipments={PeripheralEquipments} />
      </div>
      <div className="container mx-auto px-4 pb-8 max-w-[1200px] bg-transparent">
        <h2 className="text-2xl font-bold mb-4">開發工具</h2>
        <EquipmentsGrid equipments={DevelopmentTools} />
      </div>
    </BasePages>
  );
};
