import TypeIt from "typeit-react";

export const MottoSection = () => {
  return (
    <section className="relative w-full min-h-[377px] flex items-center justify-center py-16 px-4">
      <div className="relative max-w-6xl w-full flex items-center justify-center">
        {/* 背景文字 - 淡化效果 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="bg-clip-text bg-gradient-to-r font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[96px] text-center whitespace-nowrap
                       from-transparent via-black/15 to-transparent dark:via-white/30 leading-none font-inter overflow-hidden"
            style={{ WebkitTextFillColor: "transparent" }}
          >
            The power of knowledge lies in sharing, and the joy of achievement
            comes from growing together.
          </div>
        </div>

        {/* 前景文字 - 主要內容 */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <div className="font-medium text-black dark:text-white italic">
            <TypeIt
              options={{ loop: true, waitUntilVisible: true, speed: 120 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-2 sm:mb-4 font-noto"
              getBeforeInit={(instance) => {
                instance
                  .type("知識的力量來自於分享，")
                  .pause(750)
                  .type("<br />")
                  .pause(500)
                  .type("而成就的喜悅來自於共同與成長。")
                  .pause(750)
                  .delete(40)
                  .go();

                // Remember to return it!
                return instance;
              }}
            >
              {/* 知識的力量來自於分享，
              <br />
              而成就的喜悅來自於共同與成長。 */}
            </TypeIt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MottoSection;
