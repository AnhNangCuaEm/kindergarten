import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/BackToTop";
import SimpleGallery from "@/components/SimpleGallery";

const galleryImages = [
    {
        thumbnailURL: "/life_img/02.jpg",
        largeURL: "/life_img/02.jpg",
        width: 690,
        height: 457,
    },
    {
        thumbnailURL: "/life_img/03.jpg",
        largeURL: "/life_img/03.jpg",
        width: 690,
        height: 457,
    },
    {
        thumbnailURL: "/life_img/04.jpg",
        largeURL: "/life_img/04.jpg",
        width: 690,
        height: 457,
    },
    {
        thumbnailURL: "/life_img/05.jpg",
        largeURL: "/life_img/05.jpg",
        width: 690,
        height: 457,
    },
    {
        thumbnailURL: "/life_img/06.jpg",
        largeURL: "/life_img/06.jpg",
        width: 690,
        height: 457,
    },
    {
        thumbnailURL: "/life_img/07.jpg",
        largeURL: "/life_img/07.jpg",
        width: 690,
        height: 457,
    },
    {
        thumbnailURL: "/life_img/08.jpg",
        largeURL: "/life_img/08.jpg",
        width: 690,
        height: 457,
    },
    {
        thumbnailURL: "/life_img/09.jpg",
        largeURL: "/life_img/09.jpg",
        width: 690,
        height: 457,
    },
    {
        thumbnailURL: "/life_img/10.jpg",
        largeURL: "/life_img/10.jpg",
        width: 690,
        height: 457,
    },
    {
        thumbnailURL: "/life_img/11.jpg",
        largeURL: "/life_img/11.jpg",
        width: 690,
        height: 457,
    },
    {
        thumbnailURL: "/life_img/13.jpg",
        largeURL: "/life_img/13.jpg",
        width: 3960,
        height: 2640,
    },
    {
        thumbnailURL: "/life_img/22.jpg",
        largeURL: "/life_img/22.jpg",
        width: 600,
        height: 450,
    },
    {
        thumbnailURL: "/life_img/15.jpg",
        largeURL: "/life_img/15.jpg",
        width: 3648,
        height: 2736,
    },
    {
        thumbnailURL: "/life_img/16.jpg",
        largeURL: "/life_img/16.jpg",
        width: 1600,
        height: 1200,
    },
    {
        thumbnailURL: "/life_img/23.jpg",
        largeURL: "/life_img/23.jpg",
        width: 1066,
        height: 799,
    },
    {
        thumbnailURL: "/life_img/18.jpg",
        largeURL: "/life_img/18.jpg",
        width: 600,
        height: 450,
    },
    {
        thumbnailURL: "/life_img/19.jpg",
        largeURL: "/life_img/19.jpg",
        width: 3264,
        height: 2448,
    },
    {
        thumbnailURL: "/life_img/24.jpg",
        largeURL: "/life_img/24.jpg",
        width: 600,
        height: 450,
    },
];

export default function LifePage() {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <Header />
            <main className="flex flex-col flex-1 px-4 pt-24 pb-12 gap-16 items-center w-full max-w-6xl mx-auto">
                {/* Hero Section */}
                <section className="w-full text-center pt-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-theme-600 mb-4">
                        園での生活
                    </h1>
                    <p className="text-lg text-text-light max-w-3xl mx-auto">
                        ハル幼稚園へようこそ。園での生活についてのご案内と、簡単な申込フォームをご用意しています。
                    </p>
                </section>

                {/* gallery Section */}
                <section className="w-full">
                    <SimpleGallery
                        galleryID="life-gallery"
                        images={galleryImages.map((img) => ({
                            thumbnailURL: img.thumbnailURL,
                            largeURL: img.largeURL,
                            width: img.width,
                            height: img.height,
                        }))}
                    />
                </section>
            </main>
            <Footer />
            <BackToTop />
        </div>
    );
}
