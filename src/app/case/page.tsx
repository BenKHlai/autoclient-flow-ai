import type { Metadata } from "next";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "成功案例｜網上蛋糕平台 · 智客流",
};

export default function CasePage() {
  return (
    <article>
      <header className="relative h-[42vh] min-h-72 overflow-hidden">
        <img src="/images/Wcvyg.jpg" alt="" className="h-full w-full object-cover brightness-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg" />
        <div className="absolute bottom-8 left-0 right-0 mx-auto max-w-5xl px-5">
          <p className="text-xs tracking-[0.2em] text-gold">CASE · 網上蛋糕平台</p>
          <h1 className="mt-2 text-3xl font-extrabold md:text-5xl">
            佢專心整蛋糕。
            <br />
            社交我哋管。
          </h1>
        </div>
      </header>
      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-14 md:grid-cols-[1.3fr_.7fr]">
        <div className="space-y-4 leading-8 text-mute">
          <p className="text-text">
            客戶每日專注做蛋糕、保品質，根本無時間經營社交帳戶。帳戶長期得 Instagram
            一條，粉絲大約 800。
          </p>
          <p>
            智客流接手後幫佢開 Facebook 同 Threads，按檔期做內容設計、寫粵語
            caption、配圖、補 Hashtag，然後自動發佈。老闆繼續做自己專長。
          </p>
          <p className="text-sm">
            The client reported revenue doubled in one month. Not a guarantee for every shop.
          </p>
          <img src="/images/ba-cake.jpg" alt="蛋糕產品相變成 feed 圖" className="rounded-2xl" />
        </div>
        <aside className="space-y-4">
          <div className="mx-auto flex h-36 w-36 flex-col items-center justify-center rounded-full bg-terra ring-4 ring-gold">
            <span className="text-4xl font-extrabold text-black">×2</span>
            <span className="text-xs text-black">營業額一個月</span>
          </div>
          <ul className="rounded-2xl border border-line bg-card p-5 text-sm">
            <li>起點：只有 IG · 約 800 粉</li>
            <li className="mt-2">新開：Facebook + Threads</li>
            <li className="mt-2">節奏：每日自動生成並發佈</li>
          </ul>
          <img src="/images/7W0s5.jpg" alt="" className="rounded-2xl" />
        </aside>
      </div>
      <div className="border-t border-white/10 py-12 text-center">
        <p className="font-semibold">帶 10 張產品相，48 小時出一週示範日曆。</p>
        <a href={waLink} className="mt-4 inline-block rounded-full bg-terra px-6 py-3 text-sm font-bold text-black">
          WhatsApp 我哋
        </a>
      </div>
    </article>
  );
}
