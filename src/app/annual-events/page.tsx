import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/BackToTop";
import Image from "next/image";

interface Event {
    month: string;
    monthNum: number;
    events: {
        name: string;
        description: string;
        icon: string;
    }[];
}

const annualEvents: Event[] = [
    {
        month: "4月",
        monthNum: 4,
        events: [
            {
                name: "入園式",
                description: "新しいお友達を迎える大切な式典。園での生活がスタートします。",
                icon: "graduation"
            },
            {
                name: "春の遠足",
                description: "公園を探検して、春の自然を感じます。",
                icon: "tree"
            }
        ]
    },
    {
        month: "5月",
        monthNum: 5,
        events: [
            {
                name: "親子ピクニック",
                description: "お家の人と一緒に楽しい時間を過ごします。",
                icon: "heart"
            },
            {
                name: "こどもの日のお祝い",
                description: "こいのぼりを作ったり、昔のあそびを楽しみます。",
                icon: "party"
            }
        ]
    },
    {
        month: "6月",
        monthNum: 6,
        events: [
            {
                name: "プール開き",
                description: "水遊びが楽しい季節がやってきました。",
                icon: "swim"
            },
            {
                name: "七夕飾り制作",
                description: "願い事を短冊に書いて、七夕飾りを作ります。",
                icon: "paint"
            }
        ]
    },
    {
        month: "7月",
        monthNum: 7,
        events: [
            {
                name: "夏祭り",
                description: "ヨーヨーすくいやゲーム、盆踊りなど楽しい催し物がいっぱい！",
                icon: "party"
            },
            {
                name: "スイカ割り",
                description: "夏の味覚を全身で味わいます。",
                icon: "watermelon"
            },
            {
                name: "夏休み",
                description: "おはようからおやすみまで、預かり保育も実施しています。",
                icon: "sofa"
            }
        ]
    },
    {
        month: "8月",
        monthNum: 8,
        events: [
            {
                name: "お泊り保育",
                description: "年長さんが幼稚園でお泊りする特別な経験をします。",
                icon: "gym"
            },
            {
                name: "夏休み継続",
                description: "預かり保育で夏休みもサポートします。",
                icon: "sofa"
            }
        ]
    },
    {
        month: "9月",
        monthNum: 9,
        events: [
            {
                name: "運動会",
                description: "かけっこ、ダンス、親子競技など。皆で一緒に頑張ります！",
                icon: "sports"
            },
            {
                name: "敬老の日のお祝い",
                description: "おじいちゃん、おばあちゃんに感謝の気持ちを伝えます。",
                icon: "heart"
            }
        ]
    },
    {
        month: "10月",
        monthNum: 10,
        events: [
            {
                name: "秋の遠足",
                description: "紅葉狩りやどんぐり拾いなど、秋の自然を楽しみます。",
                icon: "tree"
            },
            {
                name: "ハロウィンイベント",
                description: "仮装をして園内でハロウィンパーティー！",
                icon: "party"
            }
        ]
    },
    {
        month: "11月",
        monthNum: 11,
        events: [
            {
                name: "七五三のお祝い",
                description: "成長を感謝し、これからも健やかに育つことを願います。",
                icon: "party"
            },
            {
                name: "絵画展",
                description: "子どもたちの作品を展示して、創造性を表現します。",
                icon: "paint"
            },
            {
                name: "お芋掘り",
                description: "畑でサツマイモを収穫。自然から学びます。",
                icon: "potato"
            }
        ]
    },
    {
        month: "12月",
        monthNum: 12,
        events: [
            {
                name: "クリスマス会",
                description: "ステージでの発表会。サンタさんからプレゼントをもらいます。",
                icon: "music"
            },
            {
                name: "餅つき大会",
                description: "昔ながらの文化を体験。自分で作ったお餅を食べます。",
                icon: "party"
            },
            {
                name: "冬休み",
                description: "お正月準備をしながら、ご家族と楽しい時間を過ごします。",
                icon: "sofa"
            }
        ]
    },
    {
        month: "1月",
        monthNum: 1,
        events: [
            {
                name: "お正月行事",
                description: "凧揚げ、羽根つき、福笑いなど、お正月の遊びを楽しみます。",
                icon: "time"
            },
            {
                name: "園庭で雪遊び",
                description: "雪が降った時は、雪だるま作りやソリ滑りをします。",
                icon: "snowman"
            }
        ]
    },
    {
        month: "2月",
        monthNum: 2,
        events: [
            {
                name: "豆まき",
                description: "節分の文化を学び、鬼は外！福は内！",
                icon: "party"
            },
            {
                name: "生活発表会",
                description: "子どもたちが1年間の学びを舞台で表現します。",
                icon: "music"
            }
        ]
    },
    {
        month: "3月",
        monthNum: 3,
        events: [
            {
                name: "ひな祭りのお祝い",
                description: "ひな人形を飾り、女の子の成長を祝います。",
                icon: "party"
            },
            {
                name: "卒園式",
                description: "年長さんが幼稚園を卒園。新しいステージへ！",
                icon: "graduation"
            },
            {
                name: "修了式",
                description: "1年間の成長を振り返り、春休みへ。",
                icon: "heart"
            }
        ]
    }
];

const iconMap: { [key: string]: string } = {
    graduation: "/graduation.svg",
    party: "/party.svg",
    tree: "/tree.svg",
    heart: "/heart.svg",
    goal: "/goal.svg",
    sofa: "/sofa.svg",
    watermelon: "/watermelon.svg",
    potato: "/potato.svg",
    swim: "/swim.svg",
    paint: "/paint.svg",
    music: "/music.svg",
    snowman: "/snowman.svg",
    time: "/time.svg",
    bright: "/bright.svg",
    gym: "/gym.svg",
    sports: "/sports.svg",
    friendly: "/friendly.svg",
    earth: "/earth.svg",
    note: "/note.svg"
};

export default function AnnualEventsPage() {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <Header />
            <main className="flex flex-col flex-1 px-4 pt-32 gap-12 w-full max-w-6xl mx-auto pb-12">
                {/* Header Section */}
                <div className="text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-theme-600 mb-4">年間行事</h1>
                    <p className="text-lg text-text-light mb-2">ハル幼稚園での1年間のイベント</p>
                    <p className="text-base text-text-light">子どもたちの成長と季節の移ろいを感じながら、様々な体験ができます。</p>
                </div>

                {/* Event Details List */}
                <div className="w-full">
                    <div className="bg-white/70 rounded-3xl p-8 border border-theme-200/30 shadow-md">
                        <h2 className="text-2xl font-bold text-theme-600 mb-6">行事の詳細</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {annualEvents.map((monthData, index) => (
                                <section key={index} className={`pb-6 scroll-animate scroll-fade-up scroll-delay-${index * 100}`}>
                                    <h3 className="text-lg font-bold text-theme-600 mb-4 pb-2 border-b-2 border-theme-300">
                                        {monthData.month}
                                    </h3>
                                    <div className="space-y-3">
                                        {monthData.events.map((event, eventIndex) => (
                                            <div key={eventIndex} className="flex gap-3">
                                                <div className="flex-shrink-0">
                                                    <div className="w-12 h-12 rounded-full bg-theme-100 flex items-center justify-center">
                                                        <Image
                                                            src={iconMap[event.icon]}
                                                            alt={event.name}
                                                            width={24}
                                                            height={24}
                                                            className="w-6 h-6"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="font-bold text-theme-700 mb-1">{event.name}</h4>
                                                    <p className="text-sm text-text-light leading-relaxed">{event.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Info Box */}
                <section className="bg-gradient-to-r from-theme-50 to-theme-100/50 rounded-3xl p-6 md:p-8 border border-theme-200/50 scroll-animate scroll-fade-up">
                    <h3 className="text-xl font-bold text-theme-700 mb-3">📌 ご注意</h3>
                    <ul className="space-y-2 text-text-light">
                        <li className="flex items-start gap-2">
                            <span className="text-theme-600 font-bold mt-0.5">•</span>
                            <span>行事予定は、天候や園の事情により変更される場合があります。</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-theme-600 font-bold mt-0.5">•</span>
                            <span>詳細なスケジュールは、毎月配布される園便りをご確認ください。</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-theme-600 font-bold mt-0.5">•</span>
                            <span>保護者の参加が必要な行事については、事前にお知らせします。</span>
                        </li>
                    </ul>
                </section>
            </main>
            <Footer />
            <BackToTop />
        </div>
    );
}
