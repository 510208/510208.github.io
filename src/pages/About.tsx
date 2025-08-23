import { GeneralHeroSection } from "@/components/GeneralHeroSection";
import { BasePages } from "./base-page";
// import "@/components/section/About/index.css";

export const About = () => {
  return (
    <BasePages>
      <GeneralHeroSection
        title="About"
        subtitle="嗨嗨！我是SamHacker，一個熱愛Coding的高中牲（生）"
        backgroundImage="/assets/page_background/about_bg.webp"
        backgroundAuthor="Pixabay"
        backgroundAuthorUrl="https://www.pexels.com/zh-tw/@pixabay/"
        backgroundText="關於站長"
        backgroundPosition={["top", "center"]}
      />
      <div className="container mx-auto px-4 py-8 max-w-[1200px] bg-transparent">
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4">我是誰</h2>
          <p className="content-text">
            嗨！我是 SamHacker，一個熱愛 Coding
            的高中生。現年（2025年）16歲，善於運用
            <a href="https://www.typescriptlang.org/">TypeScript</a>、
            <a href="https://www.python.org/">Python</a>
            等語言。最近在學習
            <a href="https://nextjs.org/">Next.js</a>、
            <a href="https://vitejs.dev/">Vite</a>、
            <a href="https://reactjs.org/">React</a>、
            <a href="https://greensock.com/gsap/">GSAP</a>
            等前端框架，也計畫要涉獵 Svelte、Vue
            等框架。前端可能還算可以，但做後端就真的完全不行。
          </p>
          <p className="content-text">
            未來可能會去學習
            <a href="https://laravel.com/">Laravel</a>、
            <a href="https://www.djangoproject.com/">Django</a>
            等後端框架，充實自己的能力。我對網頁前端設計、Python 腳本、AI 與
            AIGC 等領域有些興趣。
            <br />
            雖然技術仍然不足以稱為專家，但如果你也對這些領域有興趣，或許我們可以一起交流？
          </p>
        </div>
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4">關於這個網站</h2>
          <p className="content-text">
            同樣的網址，我所製作的第一個網站是採用純粹的 HTML、CSS 與 JavaScript
            所建構的，並沒有使用任何框架或庫。
            但很遺憾的，不才是個非常之大懶蟲，手寫靜態網站應該會寫到死掉，所以決定痛定思痛，邁出腳步探索更強大的框架。
          </p>
          <p className="content-text">
            因為 Next.js
            是個受許多大佬推廣的框架，所以我也曾經打算使用它來做這個網站。但因為當時還沒有任何
            SSR
            的基礎、也不想接觸那麼複雜的東西，再加上電腦真的很爛的緣故（2024年用四代
            i5 配 8GB 記憶體來寫網站應該也只有我了吧？），所以選了不用在意 SSR
            的框架 Vite 來開發。
          </p>
          <p className="content-text">
            用框架開發的第一個版本是使用 Vite + React
            開發，沒有任何多重頁面路由，純粹一個網站，甚至連捲動都不能捲動，當然更遑論動畫什麼的，那叫奢望。
          </p>
          <p className="content-text">
            當時是國三，畢竟還要準備考高中什麼的，根本沒時間完善我的個人網站。
            因此這些完善內容的工作就交給了會考完的我。
            專案做了將近兩個月，最終也算是有了一些進展，也就是現在你們看到的這個網站。
          </p>
        </div>
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4">技術棧與靈感來源</h2>
          <p className="content-text">
            能夠搞出這樣一個網站，離不開許多強大的框架的協助。因為篇幅不夠、族繁不及備載，所以就列出幾個重要的就好，詳細內容可以參考這個網站的
            <pre>
              <code>package.json</code>
            </pre>
            <ul className="skill-list list-disc ml-8 mt-4 mb-4">
              <li>
                <a
                  href="https://vitejs.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vite
                </a>
                ：建立前端的框架，並提供快速的開發環境。
              </li>
              <li>
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React
                </a>
                ：用於構建用戶界面的 JavaScript 庫。可以將重複的 HTML
                內容「提出公因式化簡」，進而提高代碼的可維護性。
              </li>
              <li>
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tailwind CSS
                </a>
                ：一個強大的 CSS 框架，讓開發者可以直接「在 class 中寫
                CSS」，可以不用再寫一個 CSS，懶鬼福音！
              </li>
              <li>
                <a
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TypeScript
                </a>
                ：JavaScript Pro
                Max，提供靜態類型檢查和更強大的編輯器支持，讓開發者可以更輕鬆地編寫和維護網站的原始碼。
              </li>
              <li>
                <a
                  href="https://pages.github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Pages
                </a>
                ：一個強大的靜態網站託管服務，讓開發者可以輕鬆地將網站部署到網路上，不須付費租用主機。
              </li>
              <li>
                <a
                  href="https://code.visualstudio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visual Studio Code
                </a>
                ：一個強大的開源編輯器，支援多種程式語言和擴充功能，讓開發者可以更輕鬆地編寫和維護網站的原始碼。
              </li>
              <li>
                <a
                  href="https://github.com/features/copilot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Copilot
                </a>
                ：一個強大的 AI
                輔助工具，能夠自動補全程式碼、提供建議和範例。它幫助我的事，已經多到不知道怎麼感謝了。
              </li>
            </ul>
          </p>
          <p className="content-text">
            此外，這個網站的設計靈感來自於許多優秀的網站和設計師。例如以下幾個網站：
            <ol className="skill-list list-disc ml-8 mt-4 mb-4">
              <li>
                <a href="https://nelsonlai.me/zh-TW">Nelson Lai</a>
                ：頁首設計、網站整體布局
              </li>
              <li>
                <a href="https://s24egao.com/">木白</a>
                ：字體搭配、網站整體布局、色彩運用
              </li>
              <li>
                <a href="https://zhenyuan.dev">Zhenyuan</a>
                ：色彩布局、網站內容、自我介紹架構
              </li>
              <li>
                <a href="https://samhacker.xyz">SamHacker Blog</a>：主設計語言
              </li>
              <li>
                <a href="https://www.figma.com/community/">
                  以及許多 Figma 上的設計
                </a>
              </li>
            </ol>
            等的網站設計風格，這些網站設計幫助我造出了這個網站。
          </p>
        </div>
      </div>
    </BasePages>
  );
};
