"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Areas We Cover", href: "#areas" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-950/98 backdrop-blur-md shadow-2xl shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-18 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-11 h-11 bg-teal-500 rounded-xl flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M3 21h18M3 21V10l9-7 9 7v11" strokeLinejoin="round" strokeLinecap="round" />
                </svg>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-navy-950" />
            </div>
            <div className="leading-none">
              <span className="text-white font-extrabold text-lg tracking-tight block">
                RH Roofing
              </span>
              <span className="text-teal-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                Nottingham
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-steel-300 hover:text-white px-3.5 py-2 rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a href="tel:01159826754" className="flex items-center gap-2 text-white font-semibold text-sm group/phone">
              <span className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center group-hover/phone:bg-teal-500/30 transition-colors">
                <Phone className="w-4 h-4 text-teal-400" />
              </span>
              <span className="text-steel-300 group-hover/phone:text-white transition-colors">0115 982 6754</span>
            </a>
            <a
              href="#contact"
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-all hover:shadow-lg hover:shadow-teal-500/25 flex items-center gap-1.5"
            >
              Get Free Quote
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-950 border-t border-white/5 animate-fade-in">
          <nav className="flex flex-col px-4 py-5 gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-steel-300 font-medium py-3 px-4 rounded-xl hover:bg-white/5 hover:text-white transition-all"
              >
                {link.label}
              </a>
            ))}
            <hr className="my-3 border-white/5" />
            <a href="tel:01159826754" className="flex items-center gap-3 text-white font-bold py-3 px-4">
              <Phone className="w-5 h-5 text-teal-400" /> 0115 982 6754
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="bg-teal-500 text-white font-bold py-3.5 px-6 rounded-xl text-center mt-2"
            >
              Get Free Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
