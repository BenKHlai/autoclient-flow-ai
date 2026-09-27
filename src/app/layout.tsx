import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const noto = Noto_Sans_TC({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "智客流 AutoClient Flow AI｜舖頭社交每日自動出 post",
  description:
    "幫香港店舖自動生成文字、圖片、Hashtag，並發佈到 Instagram、Facebook、Threads。",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant" className={`${noto.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-bg text-text">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
