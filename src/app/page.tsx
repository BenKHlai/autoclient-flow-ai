import Link from "next/link";
import { waLink } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <header className="mx-auto max-w-4xl px-5 pb-6 pt-16 text-center">
        <p className="mb-6 text-[11px] tracking-[0.2em] text-mute">
          LOCAL FIRST · 粵語內容 · 自動發佈
        </p>
        <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight md:text-7xl">
          你做生意，
          <br />
          我哋幫你出 <span className="border-b-8 border-gold">post</span>.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-mute md:text-lg">
          幫舖頭諦主題、寫 caption、整圖、配 Hashtag，再自動發去 Instagram、Facebook、Threads、X、YouTube。
          <br />
          頻率你定：每週 3 篇、隔日 1 篇、每日 1 篇，以至每日 3 篇。
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <img src="/images/SEtP3.jpg" alt="Instagram" className="h-11 w-11 rounded-xl object-cover" />
          <img src="/images/S4F0y.jpg" alt="Facebook" className="h-11 w-11 rounded-xl object-cover" />
          <img src="/images/RoOVl.jpg" alt="Threads" className="h-11 w-11 rounded-xl object-cover" />
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href={waLink} className="inline-block rounded-full bg-terra px-6 py-3 text-sm font-bold text-black">
            WhatsApp 開始對稿 →
          </a>
          <Link href="/case" className="inline-block rounded-full border border-white/20 px-6 py-3 text-sm">
            睇成功案例
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-5 pb-8">
        <div className="rounded-[28px] bg-gradient-to-br from-[#3a2410] via-terra to-[#1a1208] p-[3px]">
          <img src="/images/cover-phones.jpg" alt="IG／FB／Threads 同時出不同行業 post" className="w-full rounded-[25px]" />
        </div>
      </div>

      <div className="mx-auto grid max-w-5xl gap-3 px-5 pb-8 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["每週 3", "剛開始、貨少"],
          ["隔日 1", "中等更新"],
          ["每日 1", "餐飲／零售主力"],
          ["每日 3", "多貨、多平台、旺季"],
        ].map(([n, d]) => (
          <div key={n} className="rounded-2xl border border-line bg-card p-4">
            <p className="text-2xl font-bold text-gold">{n}</p>
            <p className="text-sm text-mute">{d}</p>
          </div>
        ))}
      </div>

      <section className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="text-center text-3xl font-extrabold md:text-4xl">做生意想經營社交，通常卡喺呢三樣。</h2>
        <p className="mb-8 text-center text-mute">問題唔係唔識出 post，係出唔到、出唔密、出唔起。</p>
        <div className="grid gap-3 md:grid-cols-3">
          {[
            ["人手貴", "全職小編連 MPF 動轋兩萬起；代理月費過萬。", "請唔起，或者請完又唔穩定。"],
            ["外判貴、又唔夠密", "基礎方案貴，每月得 2–3 篇；全面方案先至每日出。", "錢出咗，專頁仍然疎。"],
            ["每日要諦", "收工仲要想主題、寫字、執相。", "一忙就斷更，客人當你結業。"],
          ].map(([t, b, f]) => (
            <article key={t} className="rounded-2xl border border-line bg-card p-6">
              <h3 className="text-xl font-bold">{t}</h3>
              <p className="mt-3 text-sm text-mute">{b}</p>
              <p className="mt-4 text-sm text-gold">{f}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-8">
        <h2 className="text-center text-3xl font-extrabold">五步幫你解決</h2>
        <p className="mb-8 text-center text-mute">你交產品相。我哋交已發佈嘅 post。</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {[
            ["01", "主題／內容設計", "計設每篇主題"],
            ["02", "文字 Caption", "寫可出街內文"],
            ["03", "配圖", "執你相，或 AI 場景"],
            ["04", "Hashtag", "跟平台同本地搜尋"],
            ["05", "自動發佈", "轉規格，到點就出"],
          ].map(([n, t, d]) => (
            <article key={n} className="rounded-2xl border border-line bg-card p-5">
              <p className="text-gold font-bold">{n}</p>
              <h3 className="mt-2 font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-mute">{d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="mb-6 text-center text-3xl font-extrabold">店舖產品相，變成人用緊嘅圖。</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {[
            ["/images/ba-fashion.jpg", "服裝 · 平鋪 → 模特上身"],
            ["/images/ba-nails.jpg", "美甲 · 特寫 → 手持場景"],
            ["/images/ba-flowers.jpg", "花店 · 花束 → 客人捧花"],
          ].map(([img, t]) => (
            <article key={t} className="overflow-hidden rounded-2xl border border-line bg-card">
              <img src={img} alt={t} className="h-48 w-full object-cover" />
              <p className="p-4 text-sm">{t}</p>
            </article>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-mute">貨要真；場景可以生成。唔會憑空發明你冇嘅產品。</p>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-8">
        <div className="grid items-center gap-8 rounded-3xl border border-line bg-card p-6 md:grid-cols-[1.2fr_.8fr] md:p-8">
          <div>
            <p className="text-xs tracking-[0.2em] text-gold">CASE</p>
            <h2 className="mt-2 text-3xl font-extrabold">網上蛋糕平台 · 一個月營業額升一倍</h2>
            <p className="mt-3 text-mute">
              老闆專心整蛋糕。我哋幫佢吸客。原本只有 Instagram、約 800 粉。智客流開 Facebook 同
              Threads，每日自動出。該客戶反映營業額一個月升一倍。
            </p>
            <Link href="/case" className="mt-4 inline-block text-terra">
              閱讀完整案例 →
            </Link>
          </div>
          <div className="mx-auto flex h-36 w-36 flex-col items-center justify-center rounded-full bg-terra ring-4 ring-gold">
            <span className="text-4xl font-extrabold text-black">×2</span>
            <span className="text-xs text-black">營業額</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-20">
        <h2 className="text-center text-3xl font-extrabold">頻率你定（價格稍後公佈）</h2>
        <p className="mb-8 text-center text-mute">Plans · prices TBD · 非報價單</p>
        <div className="grid gap-3 md:grid-cols-3">
          <article className="rounded-2xl border border-line bg-card p-6">
            <h3 className="text-lg font-semibold">每週 3 篇</h3>
            <p className="mt-2 text-2xl font-bold text-gold">HKD TBD</p>
            <p className="mt-2 text-sm text-mute">剛開始、貨少</p>
          </article>
          <article className="rounded-2xl bg-terra p-6 text-black">
            <h3 className="text-lg font-semibold">每日 1 篇</h3>
            <p className="mt-2 text-2xl font-bold">HKD TBD</p>
            <p className="mt-2 text-sm">餐飲／零售主力 · IG + FB + Threads</p>
          </article>
          <article className="rounded-2xl border border-line bg-card p-6">
            <h3 className="text-lg font-semibold">每日 3 篇</h3>
            <p className="mt-2 text-2xl font-bold text-gold">HKD TBD</p>
            <p className="mt-2 text-sm text-mute">多貨、多平台、旺季</p>
          </article>
        </div>
      </section>
    </>
  );
}
