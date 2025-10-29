import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import PageWrapper from "@/components/PageWrapper";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "ハル幼稚園",
  description: "ハル幼稚園の公式サイトです。",
  icons: {
    icon: "/svg/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${notoSansJP.variable} antialiased`}
      >
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}
