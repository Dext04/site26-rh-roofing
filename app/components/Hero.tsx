'use client';
import { Phone, ChevronRight, Shield, Clock, MapPin, Star, BadgeCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center bg-slate-900 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1632759145351-1d592919f522?w=1920&q=80"
          alt="Roofing work in progress"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-32 md:py-40">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <BadgeCheck size={16} />
            Trusted Local Roofers Since 2009
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up">
            Reliable Roof Repairs in{' '}
            <span className="text-amber-400">Nottingham</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed animate-fade-in-up animation-delay-100">
            From emergency leak repairs to complete new roofs, we provide honest, dependable roofing services across Nottingham and Nottinghamshire. Free quotes with no obligation.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in-up animation-delay-200">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-lg px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-amber-500/25"
            >
              Get Free Quote
              <ChevronRight size={20} />
            </a>
            <a
              href="tel:01159826754"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-4 rounded-xl border border-white/20 transition-all"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in-up animation-delay-300">
            {[
              { icon: Shield, label: 'Fully Insured' },
              { icon: BadgeCheck, label: 'Free Quotes' },
              { icon: Clock, label: 'Fast Response' },
              { icon: MapPin, label: 'Local Roofers' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 text-slate-300"
              >
                <item.icon size={18} className="text-amber-400 shrink-0" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Rating */}
          <div className="mt-8 flex items-center gap-3 animate-fade-in-up animation-delay-400">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-slate-400 text-sm">
              Rated <span className="text-white font-semibold">4.8/5</span> from 120+ local reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
