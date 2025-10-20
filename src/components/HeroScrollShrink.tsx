"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function HeroScrollShrink() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0rem", "2rem"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section ref={ref} className="h-[200vh] bg-gray-50">
      <motion.div
        style={{ scale, borderRadius, opacity }}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        <Image
          src="/images/img_1.jpg"
          alt="hero"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </section>
  );
}
