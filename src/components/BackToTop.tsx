"use client";

import { useState, useEffect } from "react";

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300 && !isVisible) {
                setIsVisible(true);
                setIsAnimating(true);
            } else if (window.scrollY <= 300 && isVisible) {
                setIsAnimating(false);
                setTimeout(() => setIsVisible(false), 300);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, [isVisible]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-4 right-4 py-2 px-4 bg-theme-400 text-2xl text-white font-bold rounded-full shadow-lg hover:bg-theme-500 transition duration-300 cursor-pointer z-50 hover:scale-110 ${isAnimating ? "animate-fade-in-up" : "animate-fade-out-down"
                }`}
            aria-label="Back to Top"
        >
            ↑
        </button>
    );
}