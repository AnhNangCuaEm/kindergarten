'use client';

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import EnrollmentForm from "@/components/EnrollmentForm";
import BackToTop from "@/components/BackToTop";

export default function EnrollmentPage() {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <Header />
            <main className="flex flex-col flex-1 px-4 pt-24 pb-12 gap-16 items-center w-full max-w-6xl mx-auto">
                {/* Hero Section */}
                <section className="w-full text-center pt-8">
                    <h1 className="text-4xl md:text-5xl font-black text-text-main mb-4">
                        入園案内・申込
                    </h1>
                    <p className="text-lg text-text-light max-w-3xl mx-auto">
                        ハル幼稚園へようこそ。入園についてのご案内と、簡単な申込フォームをご用意しています。
                    </p>
                </section>

                {/* Enrollment Information */}
                <section className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* 対象年齢 */}
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100/30 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-2 mb-4">
                                <Image
                                    src={"/kid.svg"}
                                    width={32}
                                    height={32}
                                    alt="対象年齢"
                                />
                                <h3 className="text-xl font-bold text-text-main">対象年齢</h3>
                            </div>
                            <ul className="space-y-3 text-text-light">
                                <li className="flex items-start gap-2">
                                    <span className="text-theme-200 font-bold mt-1">•</span>
                                    <span><strong>プレイグループ：</strong>1才6ヶ月～2才児</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-theme-200 font-bold mt-1">•</span>
                                    <span><strong>満3才児：</strong>3才になる年の誕生日から</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-theme-200 font-bold mt-1">•</span>
                                    <span><strong>3才児～5才児：</strong>該当学年のお子様</span>
                                </li>
                            </ul>
                        </div>

                        {/* 保育時間 */}
                        <div className="bg-gradient-to-br from-green-50 to-green-100/30 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-2 mb-4">
                                <Image
                                    src={"/time.svg"}
                                    width={32}
                                    height={32}
                                    alt="時間"
                                />
                                <h3 className="text-xl font-bold text-text-main">保育時間</h3>
                            </div>
                            <ul className="space-y-3 text-text-light">
                                <li className="flex items-start gap-2">
                                    <span className="text-theme-200 font-bold mt-1">•</span>
                                    <span><strong>通常保育：</strong>8:30～14:30</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-theme-200 font-bold mt-1">•</span>
                                    <span><strong>預かり保育：</strong>7:00～19:00</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-theme-200 font-bold mt-1">•</span>
                                    <span><strong>給食：</strong>週4回（お弁当の日あり）</span>
                                </li>
                            </ul>
                        </div>

                        {/* 入園手続き */}
                        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100/30 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-2 mb-4">
                                <Image
                                    src={"/note.svg"}
                                    width={32}
                                    height={32}
                                    alt="入園手続き"
                                />
                                <h3 className="text-xl font-bold text-text-main">入園手続き</h3>
                            </div>
                            <ul className="space-y-3 text-text-light">
                                <li className="flex items-start gap-2">
                                    <span className="text-theme-200 font-bold mt-1">1.</span>
                                    <span>本フォームで申込</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-theme-200 font-bold mt-1">2.</span>
                                    <span>個別面談のご案内</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-theme-200 font-bold mt-1">3.</span>
                                    <span>見学・個別面談</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-theme-200 font-bold mt-1">4.</span>
                                    <span>入園契約・書類提出</span>
                                </li>
                            </ul>
                        </div>

                        {/* 費用について */}
                        <div className="bg-gradient-to-br from-pink-50 to-pink-100/30 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-2 mb-4">
                                <Image
                                    src={"/money.svg"}
                                    width={32}
                                    height={32}
                                    alt="費用について"
                                />
                                <h3 className="text-xl font-bold text-text-main">費用について</h3>
                            </div>
                            <ul className="space-y-3 text-text-light">
                                <li className="flex items-start gap-2">
                                    <span className="text-theme-200 font-bold mt-1">•</span>
                                    <span>入園金、月謝、給食費等の詳細は <br /> 個別面談時にご説明いたします。</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-theme-200 font-bold mt-1">•</span>
                                    <span>子育て支援制度など各種助成金対象</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Enrollment Steps */}
                <section className="w-full bg-gradient-to-r from-theme-100/30 to-theme-200/20 shadow-lg rounded-3xl p-4 md:p-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-main text-center mb-8">
                        入園までの流れ
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-theme-200 to-theme-300 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                                1
                            </div>
                            <h4 className="font-bold text-text-main text-center">申込</h4>
                            <p className="text-sm text-text-light text-center">
                                下記フォームよりお申込みください
                            </p>
                        </div>

                        {/* Arrow */}
                        <div className="flex items-center justify-center md:col-span-1">
                            <div className="hidden md:block text-2xl text-theme-200 font-bold">→</div>
                            <div className="md:hidden w-full h-0.5 bg-theme-200/50"></div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-theme-200 to-theme-300 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                                2
                            </div>
                            <h4 className="font-bold text-text-main text-center">確認ご連絡</h4>
                            <p className="text-sm text-text-light text-center">
                                24時間以内にご連絡いたします
                            </p>
                        </div>

                        {/* Arrow */}
                        <div className="flex items-center justify-center md:col-span-1">
                            <div className="hidden md:block text-2xl text-theme-200 font-bold">→</div>
                            <div className="md:hidden w-full h-0.5 bg-theme-200/50"></div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-theme-200 to-theme-300 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                                3
                            </div>
                            <h4 className="font-bold text-text-main text-center">面談・見学</h4>
                            <p className="text-sm text-text-light text-center">
                                園の雰囲気をご体験ください
                            </p>
                        </div>

                        {/* Arrow */}
                        <div className="flex items-center justify-center md:col-span-1">
                            <div className="hidden md:block text-2xl text-theme-200 font-bold">→</div>
                            <div className="md:hidden w-full h-0.5 bg-theme-200/50"></div>
                        </div>

                        {/* Step 4 */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-theme-200 to-theme-300 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                                ✓
                            </div>
                            <h4 className="font-bold text-text-main text-center">入園決定</h4>
                            <p className="text-sm text-text-light text-center">
                                ようこそ、ハル幼稚園へ！
                            </p>
                        </div>
                    </div>
                </section>

                {/* Enrollment Form */}
                <section className="w-full py-8">
                    <EnrollmentForm />
                </section>

                {/* Contact Section */}
                <section className="w-full bg-white/50 rounded-3xl p-8 md:p-12 shadow-md border border-theme-200/20">
                    <h2 className="text-2xl font-bold text-text-main mb-8 text-center">
                        ご質問・ご不明な点は
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                        <div>
                            <p className="text-gray-500 font-semibold mb-2">電話でのお問い合わせ</p>
                            <p className="text-2xl font-bold text-theme-200">03-3344-1010</p>
                            <p className="text-sm text-text-light mt-2">平日 9:00 ~ 17:00</p>
                            <p className="text-sm text-text-light mt-2">土曜日: 8:00 ~ 18:00</p>

                        </div>
                        <div>
                            <p className="text-gray-500 font-semibold mb-2">メールでのお問い合わせ</p>
                            <p className="text-lg font-bold text-theme-200">halkindergarten@gmail.com</p>
                            <p className="text-sm text-text-light mt-2">24時間以内にご返信いたします</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <BackToTop />
        </div>
    );
}