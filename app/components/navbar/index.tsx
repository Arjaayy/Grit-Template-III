"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home",         href: "#home" },
  { label: "About",        href: "#about" },
  { label: "Services",     href: "#services" },
  { label: "Results",      href: "#stats" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact",      href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-white border-b border-[#0a1628]/10 shadow-sm"
        : "bg-[#0a1628]"
    }`}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/logo/gritLogo2.png"
            alt="Grit"
            width={36}
            height={36}
            priority
            className={`w-9 h-9 object-contain transition-all duration-300 ${
              scrolled ? "brightness-0" : "brightness-100"
            }`}
          />

        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={`text-xs font-medium tracking-[0.15em] uppercase transition-colors relative group ${
                  scrolled
                    ? "text-[#0a1628]/60 hover:text-[#0a1628]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-[2px] bg-[#DA1D3A] transition-all duration-200" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className={`hidden lg:flex items-center gap-2 text-xs font-bold px-6 py-3 uppercase tracking-widest transition-all duration-200 ${
            scrolled
              ? "bg-[#0a1628] text-white hover:bg-[#DA1D3A]"
              : "bg-white text-[#0a1628] hover:bg-[#DA1D3A] hover:text-white"
          }`}
        >
          Register Now →
        </a>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden transition-colors ${
            scrolled ? "text-[#0a1628]" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen
              ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
              : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
            }
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-[#0a1628]/10 px-6 py-6 flex flex-col gap-4">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-[#0a1628]/60 text-sm uppercase tracking-widest hover:text-[#DA1D3A] transition-colors border-b border-[#0a1628]/5 pb-3"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#0a1628] text-white font-bold px-4 py-3 text-center uppercase tracking-widest text-sm mt-2 hover:bg-[#DA1D3A] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Register Now →
          </a>
        </div>
      )}
    </header>
  );
}