import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/BackToTop";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

export default function FAQPage() {
    const faqs = [
        {
            question: "入園手続きはどのように行いますか？",
            answer: "入園手続きは、当園のウェブサイトからオンラインで行うことができます。「入園案内」ページをご覧ください。",
        },
        {
            question: "園の見学はできますか？",
            answer: <>はい、園の見学は事前予約制で行っています。ウェブサイトの<Link href="/enrollment" className="text-theme-300 hover:text-theme-400">「入園案内」</Link>ページからお申し込みください。</>,
        },
        {
            question: "給食は提供されていますか？",
            answer: "はい、当園では栄養バランスの取れた給食を提供しています。アレルギー対応も行っておりますので、ご相談ください。",
        },
        {
            question: "保育時間は何時から何時までですか？",
            answer: <>通常保育は月 ~ 金曜日の8:30 ~ 14:30です。延長保育は19:00までご利用いただけます。詳細は<Link href="/enrollment" className="text-theme-300 hover:text-theme-400">「入園案内」</Link>ページをご覧ください。</>,
        },
        {
            question: "保育料はいくらですか？",
            answer: "月額保育料は年齢により異なります。詳細は当園までお問い合わせください。また、補助金制度もございます。",
        },
        {
            question: "病気の時は登園できますか？",
            answer: "発熱や感染症の症状がある場合は、登園をお控えください。医師の許可が出るまでお休みをお願いします。",
        },
        {
            question: "親の参加行事にはどのようなものがありますか？",
            answer: <>運動会、発表会、保護者懇談会などがあります。年間予定表を<Link href="/schedule" className="text-theme-300 hover:text-theme-400">「年間行事」</Link>ページでご確認ください。</>,
        },
        {
            question: "登園・降園時間に遅刻・早退はできますか？",
            answer: "事前にご連絡いただければ対応可能です。当日の場合は朝7:00までにお電話ください。",
        },
    ];

    return (
        <div className="flex flex-col items-center min-h-screen">
            <Header />
            <main className="flex flex-col flex-1 px-4 pt-24 pb-12 gap-16 items-center w-full max-w-6xl mx-auto">
                {/* Hero Section */}
                <section className="w-full text-center pt-8">
                    <h1 className="text-3xl font-bold">よくある質問</h1>
                </section>

                <div className="w-full text-lg md:text-2xl rounded-3xl bg-gradient-to-br from-theme-200/10 to-purple-200/10 p-8 shadow-md">
                    <Accordion transition transitionTimeout={250} className="flex flex-col space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                header={
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-theme-300 text-white font-semibold text-sm">
                                            {index + 1}
                                        </span>
                                        <span className="text-left font-semibold">{faq.question}</span>
                                    </div>
                                }
                                className="border-b border-purple-200 pb-2"
                            >
                                <p className="text-md md:text-xl">{faq.answer}</p>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

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