import Link from "next/link";
import { waLink } from "@/lib/site";

export default function Header() {
  return (
    <>
      <div className="bg-terra py-2 text-center text-[13px] font-semibold text-black">
        香港舖頭每日自動出 post · Instagram / Facebook / Threads
      </div>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3">
          <Link href="/" className="flex items-center gap-2 font-extrabold">
            <img src="/images/go4TW.jpg" alt="" className="h-9 w-9 rounded-lg object-cover" />
            <span className="leading-tight">
              AutoClient Flow AI
              <span className="block text-xs font-medium text-gold">智客流</span>
            </span>
          </Link>
          <nav className="hidden gap-6 text-sm text-neutral-300 md:flex">
            <Link href="/">首頁</Link>
            <Link href="/case">案例</Link>
            <Link href="/contact">聯絡</Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/contact" className="hidden rounded-full border border-white/20 px-4 py-2 text-sm md:inline">
              詢價
            </Link>
            <a href={waLink} className="rounded-full bg-terra px-4 py-2 text-sm font-bold text-black">
              WhatsApp →
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
