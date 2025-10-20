'use client';

import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Header />
      <main className="flex flex-col flex-1  px-4 gap-[32px] row-start-2 items-center sm:items-start">

      </main>
      <Footer />
    </div>
  );
}
