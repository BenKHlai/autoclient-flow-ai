import type { Metadata } from "next";
import { waLink } from "@/lib/site";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "聯絡我們｜智客流 AutoClient Flow AI",
};

export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-5xl gap-10 px-5 py-16 md:grid-cols-2">
      <div>
        <p className="text-xs tracking-[0.2em] text-gold">CONTACT</p>
        <h1 className="mt-2 text-3xl font-extrabold md:text-4xl">傳 10 張產品相，開始對稿。</h1>
        <p className="mt-3 text-mute">Send 10 product photos. We start a sample week.</p>
        <a href={waLink} className="mt-6 inline-block rounded-full bg-terra px-6 py-3 text-sm font-bold text-black">
          開啟 WhatsApp
        </a>
        <p className="mt-4 text-xs text-mute">號碼待補 · 而家連去佔位 wa.me</p>
        <img src="/images/calendar.jpg" alt="內容週曆示範" className="mt-8 rounded-2xl border border-line" />
      </div>
      <ContactForm />
    </div>
  );
}
