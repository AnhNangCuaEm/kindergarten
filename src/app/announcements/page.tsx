import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/BackToTop";

export default function AnnouncementsPage() {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <Header />
            <main className="flex flex-col flex-1 px-4 pt-32 gap-12 row-start-2 items-center sm:items-start">
                <h1 className="text-3xl md:text-4xl w-full text-center font-bold text-theme-600 mb-4">お知らせ</h1>
                <div className="max-w-3xl w-fit md:w-3xl mx-auto space-y-4">
                    <div className="p-4 rounded-3xl bg-white/70 shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-bold text-white bg-theme-300 rounded-md px-3 py-1">イベント</span>
                            <p className="text-sm text-text-light">2024.7.7</p>
                        </div>
                        <p className="block mt-2 text-lg font-bold text-text-main">入園説明会～新宿コクーンタワー～</p>
                    </div>
                    <div className="p-4 rounded-3xl bg-white/70 shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-bold text-white bg-[#ff9d5b] rounded-md px-3 py-1">募集</span>
                            <p className="text-sm text-text-light">2024.7.1</p>
                        </div>
                        <p className="block mt-2 text-lg font-bold text-text-main">未就園児親子教室（ひよこ組）の参加者募集について</p>
                    </div>
                    <div className="p-4 rounded-3xl bg-white/70 shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-bold text-white bg-[#ff9d5b] rounded-md px-3 py-1">募集</span>
                            <p className="text-sm text-text-light">2024.6.25</p>
                        </div>
                        <p className="block mt-2 text-lg font-bold text-text-main">親と子の絵画教室 参加者募集</p>
                    </div>
                    <div className="p-4 rounded-3xl bg-white/70 shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-bold text-white bg-[#a5e4ff] rounded-md px-3 py-1">お知らせ</span>
                            <p className="text-sm text-text-light">2024.6.5</p>
                        </div>
                        <p className="block mt-2 text-lg font-bold text-text-main">運幼年消防クラブ 発会式</p>
                    </div>
                    <div className="p-4 rounded-3xl bg-white/70 shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-bold text-white bg-theme-300 rounded-md px-3 py-1">イベント</span>
                            <p className="text-sm text-text-light">2024.4.5</p>
                        </div>
                        <p className="block mt-2 text-lg font-bold text-text-main">花見イベントを開催します</p>
                    </div>
                    <div className="p-4 rounded-3xl bg-white/70 shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-bold text-white bg-theme-300 rounded-md px-3 py-1">イベント</span>
                            <p className="text-sm text-text-light">2024.3.21</p>
                        </div>
                        <p className="block mt-2 text-lg font-bold text-text-main">花見イベントを開催します</p>
                    </div>
                    <div className="p-4 rounded-3xl bg-white/70 shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-bold text-white bg-[#a5e4ff] rounded-md px-3 py-1">お知らせ</span>
                            <p className="text-sm text-text-light">2024.3.10</p>
                        </div>
                        <p className="block mt-2 text-lg font-bold text-text-main">2024年度 入園式について</p>
                    </div>
                    <div className="p-4 rounded-3xl bg-white/70 shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-bold text-white bg-[#ff9d5b] rounded-md px-3 py-1">募集</span>
                            <p className="text-sm text-text-light">2024.2.28</p>
                        </div>
                        <p className="block mt-2 text-lg font-bold text-text-main">2024年度 新入園児募集について</p>
                    </div>
                    <div className="p-4 rounded-3xl bg-white/70 shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-bold text-white bg-theme-300 rounded-md px-3 py-1">イベント</span>
                            <p className="text-sm text-text-light">2024.2.10</p>
                        </div>
                        <p className="block mt-2 text-lg font-bold text-text-main">もちつき大会を開催しました</p>
                    </div>
                    <div className="p-4 rounded-3xl bg-white/70 shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-bold text-white bg-[#a5e4ff] rounded-md px-3 py-1">お知らせ</span>
                            <p className="text-sm text-text-light">2024.1.20</p>
                        </div>
                        <p className="block mt-2 text-lg font-bold text-text-main">冬休み期間のお預かり保育について</p>
                    </div>
                    <div className="p-4 rounded-3xl bg-white/70 shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-bold text-white bg-theme-300 rounded-md px-3 py-1">イベント</span>
                            <p className="text-sm text-text-light">2023.12.15</p>
                        </div>
                        <p className="block mt-2 text-lg font-bold text-text-main">クリスマス発表会を開催しました</p>
                    </div>
                    {/* end of announcements */}
                    {/* end of announcements */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <hr className="flex-1 border-black" />
                        <p className="whitespace-nowrap">最新のお知らせをお見逃しなく!</p>
                        <hr className="flex-1 border-black" />
                    </div>
                </div>
            </main>
            <Footer />
            <BackToTop />
        </div>
    );
}
