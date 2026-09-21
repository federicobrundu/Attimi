"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Chi Siamo", href: "/about" },
  { label: "Servizi", href: "/servizi" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Destination", href: "/destination" },
  { label: "Contatti", href: "/contatti" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#111010]/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-lg font-bold tracking-[0.35em] text-[#F8E9D8] transition-opacity duration-200 hover:opacity-70"
          >
            ATTIMI
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`font-sans text-[10px] uppercase tracking-[0.3em] transition-colors duration-200 ${
                  pathname === l.href
                    ? "text-[#C7B299]"
                    : "text-[#F8E9D8]/50 hover:text-[#C7B299]"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contatti"
              className="border border-[#C7B299]/40 px-5 py-2 font-sans text-[10px] uppercase tracking-[0.3em] text-[#C7B299] transition-all duration-300 hover:bg-[#C7B299]/10"
            >
              Inizia da qui
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col items-end gap-1.5 md:hidden"
            aria-label="Menu"
          >
            <span
              className={`block h-px bg-[#C7B299] transition-all duration-300 ${open ? "w-5 translate-y-2.5 rotate-45" : "w-5"}`}
            />
            <span
              className={`block h-px bg-[#C7B299] transition-all duration-300 ${open ? "w-0 opacity-0" : "w-4"}`}
            />
            <span
              className={`block h-px bg-[#C7B299] transition-all duration-300 ${open ? "w-5 -translate-y-2.5 -rotate-45" : "w-3"}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: "easeOut" as const }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[#111010]"
          >
            {links.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4, ease: "easeOut" as const }}
              >
                <Link
                  href={l.href}
                  className={`font-display text-3xl font-light tracking-widest ${
                    pathname === l.href ? "text-[#C7B299]" : "text-[#F8E9D8]/70"
                  }`}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
