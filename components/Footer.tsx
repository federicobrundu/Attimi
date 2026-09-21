const navLinks = [
  { label: "Chi Siamo", href: "#chi-siamo" },
  { label: "Servizi", href: "#servizi" },
  { label: "Come Lavoriamo", href: "#come-lavoriamo" },
  { label: "Gallery", href: "#gallery" },
  { label: "Destination", href: "#destination" },
  { label: "Contatti", href: "#contatti" },
];

const serviceLinks = [
  { label: "Musica & DJ Set", href: "#servizi" },
  { label: "Servizi IT", href: "#servizi" },
  { label: "Fotografia & Video", href: "#servizi" },
  { label: "Fiori & Decorazioni", href: "#servizi" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Pinterest", href: "https://pinterest.com" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] px-6 pb-10 pt-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
            <p className="font-display text-2xl font-bold tracking-[0.35em] text-[#F8E9D8]">
              ATTIMI
            </p>
            <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#C7B299]/50">
              Wedding Experience
            </p>
            <p className="mt-2 font-display text-base italic text-[#C7B299]/70">
              Costruiamo esperienze che restano.
            </p>
            <a
              href="mailto:info@attimiexperience.it"
              className="mt-2 font-sans text-[11px] tracking-wide text-[#F8E9D8]/30 transition-colors duration-200 hover:text-[#C7B299]"
            >
              info@attimiexperience.it
            </a>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-3">
            <p className="mb-1 font-sans text-[10px] uppercase tracking-[0.4em] text-[#C7B299]/40">
              Menu
            </p>
            {navLinks.map((l) => (
              <a
                key={l.href + l.label}
                href={l.href}
                className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#F8E9D8]/40 transition-colors duration-200 hover:text-[#C7B299]"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Services */}
          <div className="flex flex-col gap-3">
            <p className="mb-1 font-sans text-[10px] uppercase tracking-[0.4em] text-[#C7B299]/40">
              Servizi
            </p>
            {serviceLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#F8E9D8]/40 transition-colors duration-200 hover:text-[#C7B299]"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <p className="mb-1 font-sans text-[10px] uppercase tracking-[0.4em] text-[#C7B299]/40">
              Seguici
            </p>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#F8E9D8]/40 transition-colors duration-200 hover:text-[#C7B299]"
              >
                {s.label}
              </a>
            ))}
            <p className="mt-4 font-sans text-[10px] leading-relaxed tracking-wide text-[#F8E9D8]/20">
              Roma, Italia
              <br />
              Destination Weddings
            </p>
          </div>
        </div>

        <div className="my-12 h-px bg-[#C7B299]/10" />

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
