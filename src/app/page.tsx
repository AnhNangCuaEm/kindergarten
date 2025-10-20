'use client';

import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Header />
      <main className="flex flex-col flex-1 px-4 pt-32 gap-16 row-start-2 items-center sm:items-start">
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
          <div className="relative z-10 flex flex-col items-center gap-6 px-8 md:px-32">
            <h1 className="text-white text-3xl md:text-6xl font-black" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
              お子様のすばらしい能力を<br />花咲かせます。
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
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">新園舎ニュース</h2>
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
      </main>
      <Footer />
    </div>
  );
}
