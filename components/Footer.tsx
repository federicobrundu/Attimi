const navLinks = [
  { label: "Chi Siamo", href: "#chi-siamo" },
  { label: "Servizi", href: "#servizi" },
  { label: "Come Lavoriamo", href: "#come-lavoriamo" },
  { label: "Gallery", href: "#gallery" },
  { label: "Destination", href: "#destination" },
  { label: "Contatti", href: "#contatti" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] px-6 pb-10 pt-20">
      <div className="mx-auto max-w-5xl">
        {/* Top row */}
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <p className="font-display text-2xl font-bold tracking-[0.35em] text-[#F8E9D8]">
              ATTIMI
            </p>
            <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#C7B299]/50">
              Wedding Experience
            </p>
            <p className="mt-2 font-display text-base italic text-[#C7B299]/70">
              Diamo ritmo alle emozioni.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#F8E9D8]/40 transition-colors duration-200 hover:text-[#C7B299]"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Social + contact */}
          <div className="flex flex-col gap-4">
            <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#C7B299]/40">
              Seguici
            </p>
            {socialLinks.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#F8E9D8]/40 transition-colors duration-200 hover:text-[#C7B299]"
              >
                {s.label}
              </a>
            ))}
            <a
              href="mailto:info@attimiexperience.it"
              className="mt-2 font-sans text-[11px] tracking-wide text-[#F8E9D8]/30 transition-colors duration-200 hover:text-[#C7B299]"
            >
              info@attimiexperience.it
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-[#C7B299]/10" />

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#F8E9D8]/20">
            Roma &nbsp;|&nbsp; Italia &amp; Destination Weddings
          </p>
          <p className="font-sans text-[10px] tracking-wider text-[#F8E9D8]/20">
            &copy; {new Date().getFullYear()} ATTIMI Wedding Experience
          </p>
        </div>
      </div>
    </footer>
  );
}
