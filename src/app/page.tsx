'use client';

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/BackToTop";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Home() {
  const words = "お子様のすばらしい能力を\n花咲かせます。";

  return (
    <div className="flex flex-col items-center min-h-screen">
      <Header />
      <main className="flex flex-col flex-1 px-4 pt-32 gap-18 row-start-2 items-center sm:items-start">
        {/* hero section */}
        <section className="relative w-full py-32 flex items-center justify-center text-center rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/images/img_2.png"
            alt="Kindergarten Hero"
            width={1000}
            height={800}
            className="absolute inset-0 w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/10"></div>
          <div className="relative z-10 flex flex-col items-center gap-6 px-4 md:px-32">
            <h1 className="text-white leading-8 md:leading-20 text-3xl md:text-6xl font-black" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
              <TextGenerateEffect words={words} />
            </h1>
            <p className="text-white text-base md:text-lg font-normal leading-relaxed" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>
              ハル幼稚園へようこそ。私たちは、子ども一人ひとりの個性を大切にし、<br />心豊かな成長をサポートします。
            </p>
            <button className="py-2 px-4 rounded-full text-black font-semibold bg-theme-200 transition-all duration-300 transform hover:scale-105 cursor-pointer">
              詳しく見る
            </button>
          </div>
        </section>

        {/* new building section */}
        <section className="w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">新園舎ニュース</h2>
          <div className="max-w-4xl mx-auto p-4 rounded-4xl shadow-2xl hover:-translate-y-2 transition-transform duration-300">
            <div className="flex flex-col md:flex-row items-center justify-start gap-6 md:gap-8 rounded-lg overflow-hidden">
              <Image
                src="/images/img_3.png"
                alt="新しい幼稚園舎の写真"
                width={500}
                height={300}
                className="w-full md:w-1/2 aspect-video bg-cover bg-center rounded-xl"
              />
              <div className="flex w-full md:w-1/2 flex-col items-start justify-center gap-3 p-6 md:p-0">
                <p className="text-xl md:text-2xl font-bold">子どもたちにも大人気☆待望の新園舎が完成しました！</p>
                <p className="text-base font-normal leading-relaxed text-">明るく広々とした新しい園舎で、子どもたちは毎日元気に遊んでいます。最新の設備と安全な環境で、学びと遊びの可能性がさらに広がります。</p>
                <button className="py-2 px-4 rounded-full text-black font-semibold bg-theme-200 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  もっと見る
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* education section */}
        <section id="about" className="w-full bg-[#F8F0EA] rounded-4xl">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mt-12">ハル幼稚園の教育</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center py-16 px-4 ">
              <div className="flex flex-col items-center gap-4 p-6 rounded-4xl bg-white/70 shadow-soft">
                <div className="p-4 rounded-full bg-gray-300/30">
                  <Image
                    src={"/psychology.svg"}
                    height={48}
                    width={48}
                    alt="SIあそびアイコン"
                  />
                </div>
                <h3 className="text-xl font-bold text-text-main">SIあそび</h3>
                <p className="text-base text-text-light">知能(Structure of Intellect)を伸ばすための遊び。子どもたちが自ら考え、創造する力を育みます。</p>
              </div>
              <div className="flex flex-col items-center gap-4 p-6 rounded-4xl bg-white/70 shadow-soft">
                <div className="p-4 rounded-full bg-blue-200/30">
                  <Image
                    src={"/palette.svg"}
                    height={48}
                    width={48}
                    alt="表現活動アイコン"
                  />
                </div>
                <h3 className="text-xl font-bold text-text-main">表現活動</h3>
                <p className="text-base text-text-light">絵画や音楽、劇などを通して、豊かな感性と自己表現力を養います。</p>
              </div>
              <div className="flex flex-col items-center gap-4 p-6 rounded-4xl bg-white/70 shadow-soft">
                <div className="p-4 rounded-full bg-pink-200/30">
                  <Image
                    src={"/sports.svg"}
                    height={48}
                    width={48}
                    alt="体育活動アイコン"
                  />
                </div>
                <h3 className="text-xl font-bold text-text-main">体育活動</h3>
                <p className="text-base text-text-light">専門講師による指導のもと、健やかな心と体を育む楽しい運動を行います。</p>
              </div>
            </div>
          </div>
        </section>

        {/* today's kindergarten section */}
        <section className="w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">今日の幼稚園</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="group relative rounded-3xl overflow-hidden shadow-soft cursor-pointer transform hover:-translate-y-2 transition-transform duration-300">
              <Image className="aspect-square w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                src="/images/ilus_1.png"
                height={200}
                width={200}
                alt="子供たちがカラフルなブロックで遊んでいる様子。"
              />
              <div className="absolute inset-0 bg-black/20 flex items-end p-4">
                <p className="text-white font-bold">ブロックあそび</p>
              </div>
            </div>
            <div className="group relative rounded-3xl overflow-hidden shadow-soft cursor-pointer transform hover:-translate-y-2 transition-transform duration-300">
              <Image className="aspect-square w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                alt="子供がカラフルな絵を描いている様子。"
                src="/images/ilus_2.png"
                height={200}
                width={200}
              />
              <div className="absolute inset-0 bg-black/20 flex items-end p-4">
                <p className="text-white font-bold">お絵かき</p>
              </div>
            </div>
            <div className="group relative rounded-3xl overflow-hidden shadow-soft cursor-pointer transform hover:-translate-y-2 transition-transform duration-300">
              <Image className="aspect-square w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                alt="子供たちが外で走り回って遊んでいる様子。"
                src="/images/ilus_3.png"
                height={200}
                width={200}
              />
              <div className="absolute inset-0 bg-black/20 flex items-end p-4">
                <p className="text-white font-bold">外あそび</p>
              </div>
            </div>
            <div className="group relative rounded-3xl overflow-hidden shadow-soft cursor-pointer transform hover:-translate-y-2 transition-transform duration-300">
              <Image className="aspect-square w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                alt="子供たちが先生の読み聞かせを聞いている様子。"
                src="/images/ilus_4.png"
                height={200}
                width={200}
              />
              <div className="absolute inset-0 bg-black/20 flex items-end p-4">
                <p className="text-white font-bold">絵本の時間</p>
              </div>
            </div>
          </div>
        </section>

        {/* announcement section */}
        <section id="announcements" className="w-full mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">お知らせ</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="p-4 rounded-3xl bg-white/70 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-white bg-theme-300 rounded-md px-3 py-1">イベント</span>
                <p className="text-sm text-text-light">2024.7.7</p>
              </div>
              <Link className="block mt-2 text-lg font-bold text-text-main hover:text-theme-400 transition-colors duration-300" href="/announcements">入園説明会～新宿コクーンタワー～</Link>
            </div>
            <div className="p-4 rounded-3xl bg-white/70 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-white bg-[#ff9d5b] rounded-md px-3 py-1">募集</span>
                <p className="text-sm text-text-light">2024.7.1</p>
              </div>
              <Link className="block mt-2 text-lg font-bold text-text-main hover:text-theme-400 transition-colors duration-300" href="/announcements">未就園児親子教室（ひよこ組）の参加者募集について</Link>
            </div>
            <div className="p-4 rounded-3xl bg-white/70 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-white bg-[#ff9d5b] rounded-md px-3 py-1">募集</span>
                <p className="text-sm text-text-light">2024.6.25</p>
              </div>
              <Link className="block mt-2 text-lg font-bold text-text-main hover:text-theme-400 transition-colors duration-300" href="/announcements">親と子の絵画教室 参加者募集</Link>
            </div>
            <div className="p-4 rounded-3xl bg-white/70 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-white bg-[#a5e4ff] rounded-md px-3 py-1">お知らせ</span>
                <p className="text-sm text-text-light">2024.6.5</p>
              </div>
              <Link className="block mt-2 text-lg font-bold text-text-main hover:text-theme-400 transition-colors duration-300" href="/announcements">運幼年消防クラブ 発会式</Link>
            </div>
          </div>
          <Link
            href="/announcements">
            <button className="mt-8 mx-auto block py-2 px-4 rounded-full bg-theme-200 transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <p className="text-black font-semibold">
                その他のお知らせ
              </p>
            </button>
          </Link>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
