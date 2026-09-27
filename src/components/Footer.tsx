import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-neutral-500">
      <p>© 2026 AutoClient Flow AI 智客流</p>
      <p className="mt-2 text-xs">個案數字由該客戶反映，並非所有客戶保證。</p>
      <p className="mt-3 flex justify-center gap-4 text-neutral-300">
        <Link href="/">首頁</Link>
        <Link href="/case">案例</Link>
        <Link href="/contact">聯絡</Link>
      </p>
    </footer>
  );
}
