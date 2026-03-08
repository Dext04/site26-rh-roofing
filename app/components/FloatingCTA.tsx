"use client";

import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Mobile floating call button */}
      <a
        href="tel:01159826754"
        className="fixed bottom-6 right-6 z-50 md:hidden bg-teal-500 hover:bg-teal-600 text-white w-15 h-15 rounded-2xl flex items-center justify-center shadow-2xl shadow-teal-500/30 transition-all pulse-glow"
        aria-label="Call RH Roofing"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* Desktop sticky CTA */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block animate-slide-up">
        <a
          href="#contact"
          className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-6 py-3.5 rounded-2xl shadow-2xl shadow-teal-500/25 transition-all flex items-center gap-2 text-sm hover:-translate-y-0.5"
        >
          <Phone className="w-4 h-4" />
          Get Free Quote
        </a>
      </div>
    </>
  );
}
