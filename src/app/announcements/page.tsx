import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/BackToTop";
import AnnouncementItem from "@/components/AnnouncementItem";

const announcements = [
    { type: 'イベント', date: '2024.7.7', title: '入園説明会～新宿コクーンタワー～', bgColor: 'theme-300' },
    { type: '募集', date: '2024.7.1', title: '未就園児親子教室（ひよこ組）の参加者募集について', bgColor: '#ff9d5b' },
    { type: '募集', date: '2024.6.25', title: '親と子の絵画教室 参加者募集', bgColor: '#ff9d5b' },
    { type: 'お知らせ', date: '2024.6.5', title: '運幼年消防クラブ 発会式', bgColor: '#a5e4ff' },
    { type: 'イベント', date: '2024.4.5', title: '花見イベントを開催します', bgColor: 'theme-300' },
    { type: 'イベント', date: '2024.3.21', title: '花見イベントを開催します', bgColor: 'theme-300' },
    { type: 'お知らせ', date: '2024.3.10', title: '2024年度 入園式について', bgColor: '#a5e4ff' },
    { type: '募集', date: '2024.2.28', title: '2024年度 新入園児募集について', bgColor: '#ff9d5b' },
    { type: 'イベント', date: '2024.2.10', title: 'もちつき大会を開催しました', bgColor: 'theme-300' },
    { type: 'お知らせ', date: '2024.1.20', title: '冬休み期間のお預かり保育について', bgColor: '#a5e4ff' },
    { type: 'イベント', date: '2023.12.15', title: 'クリスマス発表会を開催しました', bgColor: 'theme-300' },
];

export default function AnnouncementsPage() {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <Header />
            <main className="flex flex-col flex-1 px-4 pt-32 gap-12 row-start-2 items-center sm:items-start">
                <h1
                    className="text-3xl md:text-4xl w-full text-center font-bold text-theme-600 mb-4">
                    お知らせ
                </h1>
                <div className="max-w-3xl w-fit md:w-3xl mx-auto space-y-4">
                    {announcements.map((item, index) => (
                        <AnnouncementItem
                            key={index}
                            {...item}
                            delay={index * 0.05}
                        />
                    ))}

                    <section
                        className="flex items-center justify-center gap-4 mt-8">
                        <hr className="flex-1 border-black" />
                        <p className="whitespace-nowrap">最新のお知らせをお見逃しなく!</p>
                        <hr className="flex-1 border-black" />
                    </section>
                </div>
            </main>
            <Footer />
            <BackToTop />
        </div>
    );
}
