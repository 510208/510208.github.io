import { GeneralHeroSection } from "@/components/GeneralHeroSection";
import { Navbar } from "@/components/Navbar";

export const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white dark:bg-neutral-900">
        <GeneralHeroSection
          title="我的專案"
          subtitle="這裡展示了我的一些開源專案和技術作品，涵蓋了網站開發、Minecraft 相關工具等多個領域。"
          backgroundImage="/assets/page_background/projects_bg.webp"
          backgroundAuthor="RealToughCandy.com"
          backgroundAuthorUrl="https://www.pexels.com/zh-tw/@realtoughcandy/"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 專案卡片範例 */}
            <div className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-neutral-950 dark:text-white mb-3 font-inter">
                專案範例 1
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 font-noto">
                這是一個專案的簡短描述，說明它的主要功能和技術特色。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
                  TypeScript
                </span>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-neutral-950 dark:text-white mb-3 font-inter">
                專案範例 2
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 font-noto">
                這是另一個專案的簡短描述，展示不同的技術應用。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full">
                  Python
                </span>
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-sm rounded-full">
                  Minecraft
                </span>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-neutral-950 dark:text-white mb-3 font-inter">
                專案範例 3
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 font-noto">
                第三個專案的描述，showcasing 更多技術能力。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-sm rounded-full">
                  Vue.js
                </span>
                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-sm rounded-full">
                  Node.js
                </span>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-neutral-950 dark:text-white mb-3 font-inter">
                專案範例 1
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 font-noto">
                這是一個專案的簡短描述，說明它的主要功能和技術特色。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
                  TypeScript
                </span>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-neutral-950 dark:text-white mb-3 font-inter">
                專案範例 1
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 font-noto">
                這是一個專案的簡短描述，說明它的主要功能和技術特色。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
                  TypeScript
                </span>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-neutral-950 dark:text-white mb-3 font-inter">
                專案範例 1
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 font-noto">
                這是一個專案的簡短描述，說明它的主要功能和技術特色。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
                  TypeScript
                </span>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-neutral-950 dark:text-white mb-3 font-inter">
                專案範例 1
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 font-noto">
                這是一個專案的簡短描述，說明它的主要功能和技術特色。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
                  TypeScript
                </span>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-neutral-950 dark:text-white mb-3 font-inter">
                專案範例 1
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 font-noto">
                這是一個專案的簡短描述，說明它的主要功能和技術特色。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
                  TypeScript
                </span>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-neutral-950 dark:text-white mb-3 font-inter">
                專案範例 1
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 font-noto">
                這是一個專案的簡短描述，說明它的主要功能和技術特色。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
                  TypeScript
                </span>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-neutral-950 dark:text-white mb-3 font-inter">
                專案範例 1
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 font-noto">
                這是一個專案的簡短描述，說明它的主要功能和技術特色。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
                  TypeScript
                </span>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-neutral-950 dark:text-white mb-3 font-inter">
                專案範例 1
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 font-noto">
                這是一個專案的簡短描述，說明它的主要功能和技術特色。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
                  TypeScript
                </span>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-neutral-950 dark:text-white mb-3 font-inter">
                專案範例 1
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 font-noto">
                這是一個專案的簡短描述，說明它的主要功能和技術特色。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
                  TypeScript
                </span>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-neutral-950 dark:text-white mb-3 font-inter">
                專案範例 1
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 font-noto">
                這是一個專案的簡短描述，說明它的主要功能和技術特色。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
                  TypeScript
                </span>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-neutral-950 dark:text-white mb-3 font-inter">
                專案範例 1
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 font-noto">
                這是一個專案的簡短描述，說明它的主要功能和技術特色。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
                  TypeScript
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
