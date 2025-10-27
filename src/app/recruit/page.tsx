import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/BackToTop";
import Image from "next/image";

export default function RecruitPage() {
    const jobPositions = [
        {
            title: "保育士",
            description: "子どもたちの成長をサポートする重要な役割。保育計画の立案から実行まで、子どもたちとの関係構築を大切にしています。",
            requirements: ["保育士資格必須", "子どもたちとの関わりに情熱がある方", "チームワークを大切にできる方"],
            types: ["正社員", "パートタイム"]
        },
        {
            title: "看護師",
            description: "園児の健康管理と保護者のサポート。保育園での経験を活かして、安心で安全な環境作りに貢献します。",
            requirements: ["看護師免許必須", "保育園勤務経験者優遇", "子ども中心の接遇ができる方"],
            types: ["正社員", "パートタイム"]
        },
        {
            title: "栄養士",
            description: "おいしく栄養バランスの取れた給食の企画・調理。アレルギー対応も含め、子どもたちの健康を食から支えます。",
            requirements: ["栄養士資格必須", "大量調理経験者優遇", "アレルギー対応食の知識がある方"],
            types: ["正社員", "パートタイム"]
        }
    ];

    return (
        <div className="flex flex-col items-center min-h-screen">
            <Header />
            <main className="flex flex-col flex-1 px-4 pt-24 pb-12 gap-16 items-center w-full max-w-6xl mx-auto">
                {/* Hero Section */}
                <section className="w-full text-center pt-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-theme-600 mb-4">採用情報</h1>
                    <p className="text-base md:text-lg text-text-light">ハル幼稚園では、子どもたちの笑顔とともに成長できる仲間を募集しています</p>
                </section>

                {/* Introduction Section */}
                <section className="w-full bg-white/50 rounded-3xl p-8 md:p-12 shadow-md border border-theme-200/20">
                    <h2 className="text-2xl font-bold text-text-main mb-6">私たちについて</h2>
                    <p className="text-base md:text-lg text-text-light leading-relaxed mb-4">
                        ハル幼稚園は、子ども一人ひとりの個性を大切にし、心豊かな成長をサポートする幼稚園です。
                    </p>
                    <p className="text-base md:text-lg text-text-light leading-relaxed mb-4">
                        私たちのチームに参加することで、子どもたちの人生における大切な時期に立ち会い、彼らの成長を直接サポートすることができます。情熱と思いやりを持って、一緒に素晴らしい保育環境を作りましょう。
                    </p>
                    <div className="bg-gradient-to-r from-theme-100/30 to-theme-200/30 rounded-2xl p-6 mt-6">
                        <p className="text-base font-semibold text-theme-600">
                            💡 当園の特徴：新園舎完成、充実した特別プログラム（絵画造形教育、英語教育、プール指導、体操、声楽指導）、温かいチーム環境
                        </p>
                    </div>
                </section>

                {/* Job Positions Section */}
                <section className="w-full">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-text-main mb-12">募集職種</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {jobPositions.map((job, index) => (
                            <div key={index} className="bg-white/60 rounded-2xl p-6 shadow-md border border-theme-200/20 hover:shadow-lg hover:border-theme-200/40 transition-all duration-300 hover:-translate-y-2">
                                <h3 className="text-xl font-bold text-theme-600 mb-2">{job.title}</h3>
                                <div className="flex gap-2 mb-4">
                                    {job.types.map((type, idx) => (
                                        <span key={idx} className="inline-block bg-theme-100/60 text-theme-600 text-xs font-semibold px-3 py-1 rounded-full border border-theme-200/40">
                                            {type}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-sm md:text-base text-text-light mb-6 leading-relaxed">{job.description}</p>
                                <div className="space-y-2">
                                    <p className="text-sm font-semibold text-text-main">応募要件：</p>
                                    <ul className="space-y-1">
                                        {job.requirements.map((req, idx) => (
                                            <li key={idx} className="text-sm text-text-light flex items-start gap-2">
                                                <span className="text-theme-300 mt-1">✓</span>
                                                <span>{req}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Application Info Section */}
                <section className="w-full bg-gradient-to-br from-theme-100/20 to-theme-200/20 rounded-3xl p-8 md:p-12">
                    <h2 className="text-2xl font-bold text-text-main mb-8">応募方法・採用フロー</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-bold text-theme-600 mb-4 flex items-center gap-2">
                                <span className="bg-theme-300 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">1</span>
                                応募書類の準備
                            </h3>
                            <ul className="space-y-2 text-text-light">
                                <li className="flex gap-2">
                                    <span className="text-theme-300">•</span>
                                    <span>履歴書（写真貼付、手書き可）</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-theme-300">•</span>
                                    <span>職務経歴書</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-theme-300">•</span>
                                    <span>資格証明書のコピー</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-theme-600 mb-4 flex items-center gap-2">
                                <span className="bg-theme-300 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">2</span>
                                書類選考
                            </h3>
                            <p className="text-text-light mb-3">
                                応募書類を拝見し、適性と資格を確認させていただきます。
                            </p>
                            <p className="text-sm text-text-light">
                                ※ 書類選考通過者には、1週間以内に面接日時をご連絡いたします
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-theme-600 mb-4 flex items-center gap-2">
                                <span className="bg-theme-300 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">3</span>
                                面接・施設見学
                            </h3>
                            <p className="text-text-light mb-3">
                                園長および担当者との面接を行います。園の施設も見学いただけます。
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-theme-600 mb-4 flex items-center gap-2">
                                <span className="bg-theme-300 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">4</span>
                                採用決定
                            </h3>
                            <p className="text-text-light">
                                面接結果は1週間以内にご連絡いたします。
                            </p>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="w-full">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-text-main mb-12">待遇・福利厚生</h2>
                    <div className="bg-white/60 rounded-3xl p-8 md:p-12 shadow-md border border-theme-200/20">
                        {/* Working Hours */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-theme-200/30">
                            <div className="flex gap-4">
                                <div>
                                    <h4 className="flex gap-2 items-center font-bold text-text-main mb-2">
                                        <Image
                                            src="/calendar.svg"
                                            alt="勤務時間 Icon"
                                            width={24}
                                            height={24}
                                            className="h-auto"
                                        >
                                        </Image>
                                        勤務時間</h4>
                                    <div className="space-y-3">
                                        <div>
                                            <p className="font-semibold text-theme-600 text-sm">【正社員】</p>
                                            <p className="text-text-light text-sm">月～金曜日 8:00～17:00<br />（昼休憩1時間）</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-theme-600 text-sm">【パートタイム】</p>
                                            <p className="text-text-light text-sm">朝番: 7:00～12:00<br />昼番: 11:30～16:30<br />夕番: 15:00～19:00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div>
                                    <h4 className="flex gap-2 items-center font-bold text-text-main mb-2">
                                        <Image
                                            src="/money.svg"
                                            alt="給与 Icon"
                                            width={24}
                                            height={24}
                                            className="h-auto"
                                        >
                                        </Image>
                                        給与</h4>
                                    <div className="space-y-3">
                                        <div>
                                            <p className="font-semibold text-theme-600 text-sm">【正社員】</p>
                                            <p className="text-text-light text-sm">経験・資格に応じた給与体系<br />賞与年2回、昇給制度あり</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-theme-600 text-sm">【パートタイム】</p>
                                            <p className="text-text-light text-sm">経験・資格に応じた時給体系<br />昇給制度あり<br />週1日からの勤務相談可</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Common Benefits */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex gap-4">
                                <div>
                                    <h4 className="flex gap-2 items-center font-bold text-text-main mb-1">
                                        <Image
                                            src="/medic.svg"
                                            alt="保険・福利厚生 Icon"
                                            width={24}
                                            height={24}
                                            className="h-auto"
                                        >
                                        </Image>
                                        保険・福利厚生</h4>
                                    <p className="text-text-light text-sm">社会保険完備、健康診断年1回<br />職員向け研修制度</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div>
                                    <h4 className="flex gap-2 items-center font-bold text-text-main mb-1">
                                        <Image
                                            src="/graduation.svg"
                                            alt="研修・成長 Icon"
                                            width={24}
                                            height={24}
                                            className="h-auto"
                                        >
                                        </Image>研修・成長</h4>
                                    <p className="text-text-light text-sm">園内研修、外部研修への参加サポート<br />キャリア支援あり</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div>
                                    <h4 className="flex gap-2 items-center font-bold text-text-main mb-1">
                                        <Image
                                            src="/friendly.svg"
                                            alt="シフト対応 Icon"
                                            width={24}
                                            height={24}
                                            className="h-auto"
                                        >
                                        </Image>
                                        シフト対応</h4>
                                    <p className="text-text-light text-sm">柔軟なシフト調整、ライフスタイルに合わせた勤務相談可</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div>
                                    <h4 className="flex gap-2 items-center font-bold text-text-main mb-1">
                                        <Image
                                            src="/heart.svg"
                                            alt="職場環境 Icon"
                                            width={24}
                                            height={24}
                                            className="h-auto"
                                        >
                                        </Image>職場環境</h4>
                                    <p className="text-text-light text-sm">温かいチーム環境、子どもたちの笑顔に囲まれた職場</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="w-full bg-white/50 rounded-3xl p-8 md:p-12 shadow-md border border-theme-200/20">
                    <h2 className="text-2xl font-bold text-text-main mb-8 text-center">
                        ご応募・ご質問はこちらから
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                        <div>
                            <p className="text-gray-500 font-semibold mb-2">電話でのお問い合わせ</p>
                            <p className="text-2xl font-bold text-theme-200">03-3344-1010</p>
                            <p className="text-sm text-text-light mt-2">平日 7:00 ~ 19:00</p>
                            <p className="text-sm text-text-light">土曜日: 8:00 ~ 18:00</p>
                        </div>
                        <div>
                            <p className="text-gray-500 font-semibold mb-2">メールでのご応募・お問い合わせ</p>
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