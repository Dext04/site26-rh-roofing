'use client';
import { Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="tel:01159826754"
      className="fixed bottom-6 right-6 z-40 md:hidden bg-amber-500 hover:bg-amber-600 text-slate-900 w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/30 transition-all"
      aria-label="Call us"
    >
      <Phone size={24} />
    </a>
  );
}
