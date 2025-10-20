import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center pt-8 pb-4 mt-8 w-full bg-theme-600 text-white">
            <div>
                <div className="flex flex-col sm:flex-row gap-8 sm:gap-24 mb-4">
                    <div>
                        <Image src={"/logo.svg"} alt="Logo" width={200} height={100} className="mb-2"/>
                        <p>〒123-4567 東京都にこにこ区</p>
                        <p>わくわく町 1-2-3</p>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-xl font-semibold mb-2">お問い合わせ</h3>
                        <p>電話: 03-1234-5678</p>
                        <p>FAX: 03-1234-5679</p>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-xl font-semibold mb-2">開園時間</h3>
                        <p>月曜日〜金曜日: 7:00 - 19:00</p>
                        <p>土曜日: 8:00 - 18:00</p>
                        <p>日曜日・祝日: 休園</p>
                    </div>
                </div>
                <div className="w-full text-center border-t pt-4 text-sm text-gray-300">
                    &copy; {new Date().getFullYear()} My Company. All rights reserved.
                </div>
            </div>
        </footer>
    );
}