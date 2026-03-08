'use client';
import { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#areas', label: 'Areas We Cover' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg'
          : 'bg-slate-900'
      }`}
    >
      {/* Top bar */}
      <div className="hidden md:block bg-slate-950 text-slate-300 text-sm">
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex justify-between items-center">
          <span>Trusted Roofers Serving Nottingham & Nottinghamshire</span>
          <a
            href="tel:01159826754"
            className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold transition-colors"
          >
            <Phone size={14} />
            0115 982 6754
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
              <span className="text-slate-900 font-black text-lg">RH</span>
            </div>
            <div className="leading-tight">
              <span className="text-white font-bold text-lg block">RH Roofing</span>
              <span className="text-amber-400 text-xs font-medium tracking-wide hidden sm:block">NOTTINGHAM</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a
              href="tel:01159826754"
              className="hidden md:flex items-center gap-2 text-white font-semibold"
            >
              <div className="w-9 h-9 bg-amber-500 rounded-full flex items-center justify-center">
                <Phone size={16} className="text-slate-900" />
              </div>
              <span className="text-sm">0115 982 6754</span>
            </a>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              Get Free Quote
              <ChevronRight size={16} />
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-700/50">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-slate-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 space-y-2">
              <a
                href="tel:01159826754"
                className="flex items-center justify-center gap-2 bg-white/10 text-white font-semibold py-3 rounded-lg"
              >
                <Phone size={18} />
                0115 982 6754
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 bg-amber-500 text-slate-900 font-bold py-3 rounded-lg"
              >
                Get Free Quote
                <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
