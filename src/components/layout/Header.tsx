'use client'

import GlassHeader from "@/components/GlassHeader"
import Image from "next/image"
import Link from "next/link"
import { Sling as Hamburger } from 'hamburger-react'
import { useState } from "react"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [copiedEmail, setCopiedEmail] = useState(false);

    // Handle email copy feedback
    const handleEmailCopy = () => {
        setCopiedEmail(true);
        navigator.clipboard.writeText("halkindergarten@gmail.com");
        setTimeout(() => setCopiedEmail(false), 2000);
    };

    // Main navigation items
    const mainNavItems = [
        { href: "/#about", label: "園について" },
        { href: "/#life", label: "園での生活" },
        { href: "/#announcements", label: "お知らせ" },
        { href: "/enrollment", label: "入園案内" },
    ]

    // Additional menu items for the drawer
    const additionalMenuItems = [
        { href: "/#schedule", label: "年間行事" },
        { href: "/#recruitment", label: "採用" },
        { href: "/access", label: "アクセス" },
        { href: "/faq", label: "よくある質問" },
    ]

    return (
        <>
            <header className="fixed w-full max-w-[90vw] sm:max-w-3xl flex justify-center mx-4 sm:mx-0 mt-4 mb-4 sm:mb-8 z-99">
                <GlassHeader className="h-fit justify-between">
                    <div className="flex items-center justify-between w-full">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/logo.svg"
                                alt="サイトロゴ"
                                width={200}
                                height={80}
                                className="w-42 h-auto"
                                priority
                            />
                        </Link>

                        {/* Desktop Navigation - Hidden on mobile */}
                        <nav className="hidden md:block">
                            <ul className="flex space-x-6 text-lg font-semibold text-black">
                                {mainNavItems.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className="hover:text-theme-400 transition-colors duration-300"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Hamburger Button - Always visible */}
                        <div className="z-50 relative">
                            <Hamburger
                                toggled={isOpen}
                                toggle={setIsOpen}
                                size={24}
                                color="#000"
                            />
                        </div>
                    </div>
                </GlassHeader>
            </header>

            {/* Full Screen Menu Overlay */}
            <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}>
                {/* White Background Overlay */}
                <div
                    className="absolute inset-0 bg-gray-800/50"
                    onClick={() => setIsOpen(false)}
                />

                {/* Menu Content */}
                <div className={`relative z-10 bg-white rounded-3xl shadow-2xl max-w-md w-[90vw] max-h-[80vh] overflow-y-auto transition-all duration-300 ${isOpen ? 'scale-100' : 'scale-95'
                    }`}>
                    <div className="p-8 sm:p-10">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/10 transition-colors cursor-pointer"
                            aria-label="Close menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        {/* Mobile - Show all navigation */}
                        <div className="md:hidden mb-8">
                            <h3 className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wider">
                                メインメニュー
                            </h3>
                            <nav>
                                <ul className="space-y-3">
                                    {mainNavItems.map((item) => (
                                        <li key={item.href}>
                                            <Link
                                                href={item.href}
                                                className="block text-2xl font-bold text-black hover:text-theme-200 transition-colors duration-300"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        {/* Additional Menu Items - Visible on both mobile and desktop */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wider">
                                その他
                            </h3>
                            <nav>
                                <ul className="space-y-3">
                                    {additionalMenuItems.map((item) => (
                                        <li key={item.href}>
                                            <Link
                                                href={item.href}
                                                className="block text-xl font-semibold text-black hover:text-theme-200 transition-colors duration-300"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        {/* Contact info */}
                        <div className="mt-8 pt-6 border-t border-gray-300">
                            <p className="text-sm font-semibold text-gray-600">
                                お問い合わせ
                            </p>
                            <div className="flex gap-1">
                                <p className="text-black font-semibold text-base">
                                    halkindergarten@gmail.com
                                </p>
                                <button
                                    onClick={handleEmailCopy}
                                    className="p-1 hover:bg-gray-100 rounded-md transition-colors cursor-pointer"
                                    title="クリックしてコピー"
                                >
                                    {copiedEmail ? (
                                        <svg
                                            className="w-5 h-5 text-green-600 animate-scale-check"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="w-5 h-5 text-gray-600 animate-fade-in"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            <p className="text-black font-semibold text-base">
                                03-3344-1010
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <style jsx global>{`
                @keyframes scale-check {
                    0% {
                        transform: scale(0);
                    }
                    50% {
                        transform: scale(1.2);
                    }
                    100% {
                        transform: scale(1);
                    }
                }
                
                .animate-scale-check {
                    animation: scale-check 0.3s ease-in-out;
                }

                @keyframes fade-in {
                    0% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                }
                    
                .animate-fade-in {
                    animation: fade-in 0.3s ease-in-out;
                }
            `}</style>
        </>
    )
}