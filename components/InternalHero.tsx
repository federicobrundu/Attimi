"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { asset } from "@/lib/asset";

interface InternalHeroProps {
  title: string;
  subtitle?: string;
  label?: string;
  image: string;
  /** Tailwind height class, e.g. "h-[55vh]". Defaults to "h-[55vh]". */
  height?: string;
}

export default function InternalHero({
  title,
  subtitle,
  label,
  image,
  height = "h-[55vh]",
}: InternalHeroProps) {
  return (
    <section className={`relative overflow-hidden bg-[#111010] ${height}`}>
      {/* Background image */}
      <Image
        src={asset(image)}
        alt={title}
        fill
        priority
        className="object-cover object-center opacity-40"
      />

      {/* Vignette overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111010] via-[#111010]/30 to-[#111010]/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#111010]/40 via-transparent to-[#111010]/40" />

      {/* Centered content — absolute so it never adds height */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
        {label && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
            className="mb-4 font-sans text-[10px] uppercase tracking-[0.5em] text-[#C7B299]/60"
          >
            {label}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.1 }}
          className="font-display text-5xl font-light text-[#F8E9D8] md:text-7xl"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.3 }}
          className="mt-6 h-px w-12 origin-center bg-[#C7B299]/40"
        />

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.45 }}
            className="mt-6 max-w-xl font-sans text-sm leading-8 tracking-wide text-[#F8E9D8]/50"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
