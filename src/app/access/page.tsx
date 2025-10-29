import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/BackToTop";

export default function AccessPage() {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <Header />
            <main className="flex flex-col flex-1 px-4 pt-32 row-start-2 items-center sm:items-start">
                {/* Hero Section */}
                <section className="w-full text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-theme-600 mb-8">
                        アクセス
                    </h1>
                </section>

                <section className="w-full md:w-4xl scroll-animate scroll-fade-up">
                    <h2 className="text-lg text-center font-semibold mb-4">
                        〒160-0023 東京都新宿区西新宿1-7-3
                    </h2>
                    <h2 className="text-lg text-center mb-4">
                        <span className="font-bold">最寄駅からのアクセス</span>
                        <br />
                        新宿（西口）駅前・徒歩3分。
                        <br />
                        JR・小田急・京王・地下鉄から地下街が直結。
                    </h2>
                    <h3 className="text-lg text-center mb-4">
                        <span className="font-bold">交通アクセス</span>
                        <br />
                        東京駅／JR中央線（14分）→新宿駅
                        <br />
                        上野駅／JR山手線（24分）→新宿駅
                        <br />
                        羽田空港／京急空港線快特（14分）→品川駅／JR山手線（19分）→新宿駅
                    </h3>
                    <h4 className="text-lg text-center mb-8">
                        <span className="font-bold">送迎バス</span>
                        <br />
                        送迎バスは１８＋６コース、停留所は２２０箇所「。自宅のすぐ側まで」を基本に、毎年見直ししています。
                    </h4>
                </section>

                <div className="w-full md:w-4xl scroll-animate scroll-fade-up scroll-delay-200">
                    <section className="w-full max-w-4xl mb-12 rounded-2xl shadow-lg overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4827.855015438452!2d139.6974373946253!3d35.68995363895258!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188db4f3887ae7%3A0x3d4f3619214cc0ea!2z44Kz44Kv44O844Oz44K_44Ov44O8!5e1!3m2!1sja!2sjp!4v1761549907561!5m2!1sja!2sjp"
                            width="100%"
                            height="500"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full aspect-video"
                        />
                    </section>
                </div>

            </main>
            <Footer />
            <BackToTop />
        </div>
    );
}