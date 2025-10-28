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
        <section className="relative w-full py-32 flex items-center justify-center text-center rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/images/img_2.png"
            alt="幼稚園の外観写真"
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
            <button className="py-2 px-4 rounded-full text-black font-semibold bg-gradient-to-r from-theme-200 to-theme-300 transition-all duration-300 transform hover:scale-105 cursor-pointer">
              詳しく見る
            </button>
          </div>
        </section>

        {/* new building section */}
        <section
          className="w-full scroll-animate scroll-fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">新園舎ニュース</h2>
          <div className="max-w-4xl mx-auto p-4 rounded-4xl shadow-xl border border-theme-200/30 hover:-translate-y-2 transition-transform duration-300">
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
                <button className="py-2 px-4 rounded-full text-black font-semibold bg-gradient-to-r from-theme-200 to-theme-300 transition-all duration-300 transform hover:scale-105 cursor-not-allow shadow-lg">
                  もっと見る
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* special programs section */}
        <section
          id="programs"
          className="w-full bg-gradient-to-r from-theme-100/20 to-theme-200/20 rounded-4xl shadow-lg p-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">特別プログラム</h2>
              <p className="text-base text-text-light">3才から特別講師による指導！ ※普通保育の中で行いますので、保育料は別途徴収はいたしません。</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* 絵画造形教育 */}
              <section
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-6 scroll-animate scroll-fade-up">
                <div className="flex flex-col items-center gap-4 h-full">
                  <div className="p-4 rounded-full bg-blue-200/50">
                    <Image
                      src="/paint.svg"
                      alt="絵画造形教育"
                      width={48}
                      height={48}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-text-main text-center">絵画造形教育</h3>
                  <p className="text-sm text-text-light text-center">色彩や形の表現を通じて、創造性と美的感覚を育みます。</p>
                </div>
              </section>

              {/* 英語教育 */}
              <section
                className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-6 scroll-animate scroll-fade-up scroll-delay-100">
                <div className="flex flex-col items-center gap-4 h-full">
                  <div className="p-4 rounded-full bg-green-200/50">
                    <Image
                      src="/earth.svg"
                      alt="英語教育"
                      width={48}
                      height={48}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-text-main text-center">英語教育</h3>
                  <p className="text-sm text-text-light text-center">楽しいアクティビティを通じて、国際感覚を養います。</p>
                </div>
              </section>

              {/* プール指導 */}
              <section
                className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-3xl p-6 scroll-animate scroll-fade-up scroll-delay-200">
                <div className="flex flex-col items-center gap-4 h-full">
                  <div className="p-4 rounded-full bg-cyan-200/50">
                    <Image
                      src="/swim.svg"
                      alt="プール指導"
                      width={48}
                      height={48}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-text-main text-center">プール指導</h3>
                  <p className="text-sm text-text-light text-center">水に親しみ、体力と自信を育てます。</p>
                </div>
              </section>

              {/* 体操 */}
              <section
                className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-6 scroll-animate scroll-fade-up scroll-delay-300">
                <div className="flex flex-col items-center gap-4 h-full">
                  <div className="p-4 rounded-full bg-orange-200/50">
                    <Image
                      src="/gym.svg"
                      alt="体操"
                      width={48}
                      height={48}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-text-main text-center">体操</h3>
                  <p className="text-sm text-text-light text-center">基本的な運動能力と心身のバランスを養います。</p>
                </div>
              </section>

              {/* 声楽指導 */}
              <section
                className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl p-6 scroll-animate scroll-fade-up scroll-delay-400">
                <div className="flex flex-col items-center gap-4 h-full">
                  <div className="p-4 rounded-full bg-pink-200/50">
                    <Image
                      src="/music.svg"
                      alt="声楽指導"
                      width={48}
                      height={48}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-text-main text-center">声楽指導</h3>
                  <p className="text-sm text-text-light text-center">音楽の基礎と表現力を身につけます。</p>
                </div>
              </section>

              {/* 自然教育 */}
              <section
                className="bg-gradient-to-br from-green-100 to-theme-300/30 rounded-3xl p-6 scroll-animate scroll-fade-up scroll-delay-500">
                <div className="flex flex-col items-center gap-4 h-full">
                  <div className="p-4 rounded-full bg-theme-300/50">
                    <Image
                      src="/tree.svg"
                      alt="自然教育"
                      width={48}
                      height={48}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-text-main text-center">自然教育</h3>
                  <p className="text-sm text-text-light text-center">自然とのふれあいを通じて、感性を育みます。</p>
                </div>
              </section>

              {/* 中国語 */}
              <section
                className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-6 scroll-animate scroll-fade-up scroll-delay-600">
                <div className="flex flex-col items-center gap-4 h-full">
                  <div className="p-4 rounded-full bg-red-200/50">
                    <Image
                      src="/china.svg"
                      alt="中国語"
                      width={48}
                      height={48}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-text-main text-center">中国語<br /><span className="text-xs text-text-light font-normal">年長5才のみ</span></h3>
                  <p className="text-sm text-text-light text-center">アジアの文化と言語に触れます。</p>
                </div>
              </section>

              {/* ローマ字指導 */}
              <section
                className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-6 scroll-animate scroll-fade-up scroll-delay-700">
                <div className="flex flex-col items-center gap-4 h-full">
                  <div className="p-4 rounded-full bg-purple-200/50">
                    <Image
                      src="/abc.svg"
                      alt="ローマ字指導"
                      width={48}
                      height={48}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-text-main text-center">ローマ字指導<br /><span className="text-xs text-text-light font-normal">年長5才のみ</span></h3>
                  <p className="text-sm text-text-light text-center">文字学習の基礎を養います。</p>
                </div>
              </section>
            </div>

            <div className="mt-8 p-4 bg-white rounded-2xl text-center">
              <p className="text-sm text-theme-400 font-semibold">専門講師による質の高い教育で、お子様の才能を引き出します！</p>
            </div>
          </div>
        </section>

        {/* education section */}
        <section
          id="about"
          className="w-full bg-[#F8F0EA] rounded-4xl shadow-lg scroll-animate scroll-fade-up">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mt-12">ハル幼稚園の教育</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center py-16 px-4 ">
              <section className="flex flex-col items-center gap-4 p-6 rounded-4xl bg-white/70 shadow-soft">
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
              </section>
              <section className="flex flex-col items-center gap-4 p-6 rounded-4xl bg-white/70 shadow-soft">
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
              </section>
              <section className="flex flex-col items-center gap-4 p-6 rounded-4xl bg-white/70 shadow-soft">
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
              </section>
            </div>
          </div>
        </section>

        {/* today's kindergarten section */}
        <section
          className="w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">今日の幼稚園</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="group relative rounded-3xl overflow-hidden shadow-soft scroll-animate scroll-fade-up">
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
            <div className="group relative rounded-3xl overflow-hidden shadow-soft scroll-animate scroll-fade-up scroll-delay-100">
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
            <div className="group relative rounded-3xl overflow-hidden shadow-soft scroll-animate scroll-fade-up scroll-delay-200">
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
            <div className="group relative rounded-3xl overflow-hidden shadow-soft scroll-animate scroll-fade-up scroll-delay-300">
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

        {/* after-school program section */}
        <section
          className="w-full rounded-4xl p-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">課外保育「ハル塾」</h2>
            <p className="text-center text-theme-400 font-semibold mb-12">先進的なテクノロジーとクリエイティビティを融合させた学び</p>

            <div className="bg-gradient-to-br from-pink-50/50 via-purple-50/50 to-blue-50/50 rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="flex flex-col gap-4 items-center">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
                    ハル幼稚園は、<span className="text-theme-400">「塾」</span>も開講しています。
                  </h3>
                </div>
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                  <div className="w-full md:w-1/2 scroll-animate scroll-fade-right">
                    <Image
                      className="aspect-square w-full h-full object-cover rounded-2xl shadow-md"
                      alt="ハル塾の様子"
                      src="/images/ilus_5.jpg"
                      height={300}
                      width={400}
                    />
                  </div>

                  <div className="w-full md:w-1/2">
                    <div className="space-y-6">
                      <section className="bg-theme-100/80 rounded-2xl p-4 border-l-4 border-theme-400 scroll-animate scroll-fade-left">
                        <div className="flex items-center gap-2">
                          <Image
                            src="/goal.svg"
                            alt="HAL塾ってな～に？アイコン"
                            width={24}
                            height={24}
                          />
                          <p className="text-base text-text-main font-semibold">HAL塾ってな～に？</p>
                        </div>
                        <p className="text-sm text-text-light mt-2">
                          保育後に専門講師が先進的なテクノロジーとクリエイティビティに焦点を当てた教育を提供します。
                        </p>
                      </section>

                      <section className="bg-purple-100/80 rounded-2xl p-4 border-l-4 border-purple-400 scroll-animate scroll-fade-left scroll-delay-100">
                        <div className="flex items-center gap-2">
                          <Image
                            src="/bright.svg"
                            alt="私たちの想いアイコン"
                            width={24}
                            height={24}
                          />
                          <p className="text-base text-text-main font-semibold">私たちの想い</p>
                        </div>
                        <p className="text-sm text-text-light mt-2">
                          幼少期の教育が将来の可能性を拓くと信じています。遊びを通じた学びで、好奇心と創造力を育みます。
                        </p>
                      </section>

                      <section className="bg-pink-100/80 rounded-2xl p-4 border-l-4 border-pink-400 scroll-animate scroll-fade-left scroll-delay-200">
                        <div className="flex items-center gap-2">
                          <Image
                            src="/books.svg"
                            alt="カリキュラムの特徴アイコン"
                            width={24}
                            height={24}
                          />
                          <p className="text-base text-text-main font-semibold">カリキュラムの特徴</p>
                        </div>
                        <p className="text-sm text-text-light mt-2">
                          成長段階に合わせた設計。学習、芸術、体育など幅広い分野で多様なスキルを習得します。
                        </p>
                      </section>
                    </div>

                    <button className="mt-8 py-3 px-6 rounded-full font-bold bg-gradient-to-r from-theme-200 to-blue-200 transition-all duration-300 transform hover:scale-105 cursor-not-allowed shadow-lg">
                      HAL塾について詳しく知る →
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* announcement section */}
        <section id="announcements" className="w-full mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">お知らせ</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <section className="p-4 rounded-3xl bg-white/70 shadow-md hover:shadow-lg transition-shadow scroll-animate scroll-fade-up">
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-white bg-theme-300 rounded-md px-3 py-1">イベント</span>
                <p className="text-sm text-text-light">2024.7.7</p>
              </div>
              <Link className="block mt-2 text-lg font-bold text-text-main hover:text-theme-400 transition-colors duration-300" href="/announcements">入園説明会～新宿コクーンタワー～</Link>
            </section>
            <section className="p-4 rounded-3xl bg-white/70 shadow-md hover:shadow-lg transition-shadow scroll-animate scroll-fade-up scroll-delay-100">
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-white bg-[#ff9d5b] rounded-md px-3 py-1">募集</span>
                <p className="text-sm text-text-light">2024.7.1</p>
              </div>
              <Link className="block mt-2 text-lg font-bold text-text-main hover:text-theme-400 transition-colors duration-300" href="/announcements">未就園児親子教室（ひよこ組）の参加者募集について</Link>
            </section>
            <section className="p-4 rounded-3xl bg-white/70 shadow-md hover:shadow-lg transition-shadow scroll-animate scroll-fade-up scroll-delay-200">
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-white bg-[#ff9d5b] rounded-md px-3 py-1">募集</span>
                <p className="text-sm text-text-light">2024.6.25</p>
              </div>
              <Link className="block mt-2 text-lg font-bold text-text-main hover:text-theme-400 transition-colors duration-300" href="/announcements">親と子の絵画教室 参加者募集</Link>
            </section>
            <section className="p-4 rounded-3xl bg-white/70 shadow-md hover:shadow-lg transition-shadow scroll-animate scroll-fade-up scroll-delay-300">
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-white bg-[#a5e4ff] rounded-md px-3 py-1">お知らせ</span>
                <p className="text-sm text-text-light">2024.6.5</p>
              </div>
              <Link className="block mt-2 text-lg font-bold text-text-main hover:text-theme-400 transition-colors duration-300" href="/announcements">運幼年消防クラブ 発会式</Link>
            </section>
          </div>
          <Link
            href="/announcements">
            <button className="mt-8 mx-auto block py-2 px-4 rounded-full bg-gradient-to-r from-theme-200 to-theme-300 transition-all duration-300 transform hover:scale-105 cursor-pointer">
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
