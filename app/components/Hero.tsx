"use client";

import { Phone, ArrowRight, Shield, Clock, Star, MapPin, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900/95 to-navy-950/80" />
        {/* Geometric accents */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/3 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-32 md:py-40">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 bg-teal-500/10 border border-teal-500/20 rounded-full px-5 py-2 mb-8 animate-slide-right">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-teal-400 text-sm font-semibold">Available for Emergency Call-Outs</span>
            </div>

            <h1 className="text-[2.75rem] md:text-6xl lg:text-[4.25rem] font-extrabold text-white leading-[1.05] mb-7 animate-slide-up">
              Reliable Roof Repairs
              <br />
              in <span className="text-gradient">Nottingham</span>
            </h1>

            <p className="text-lg md:text-xl text-steel-400 mb-10 leading-relaxed max-w-xl animate-slide-up delay-100">
              Over 15 years keeping Nottinghamshire homes and businesses safe and watertight.
              Expert repairs, full re-roofs, flat roofing, and emergency call-outs &mdash;
              backed by honest pricing and proper workmanship.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up delay-200">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2.5 bg-teal-500 hover:bg-teal-600 text-white font-bold px-8 py-4.5 rounded-2xl text-lg transition-all shadow-xl shadow-teal-500/20 hover:shadow-teal-500/30 hover:-translate-y-0.5"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:01159826754"
                className="inline-flex items-center justify-center gap-2.5 bg-white/5 hover:bg-white/10 text-white font-bold px-8 py-4.5 rounded-2xl text-lg transition-all border border-white/10 hover:border-white/20"
              >
                <Phone className="w-5 h-5 text-teal-400" />
                Call 0115 982 6754
              </a>
            </div>

            {/* Rating row */}
            <div className="flex flex-wrap items-center gap-6 animate-slide-up delay-300">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-steel-400 text-sm font-medium">
                  <strong className="text-white">4.8</strong>/5 from 120+ reviews
                </span>
              </div>
              <div className="h-4 w-px bg-white/10 hidden sm:block" />
              <span className="text-steel-400 text-sm font-medium">Fully Insured &amp; Guaranteed</span>
            </div>
          </div>

          {/* Right side - trust cards stack */}
          <div className="lg:col-span-5 hidden lg:flex flex-col gap-4 animate-scale-in delay-400">
            {[
              { icon: Shield, label: "Fully Insured", sub: "Public liability cover on every job" },
              { icon: Clock, label: "Fast Response", sub: "Same-day emergency call-outs" },
              { icon: Zap, label: "Free Quotes", sub: "No-obligation written estimates" },
              { icon: MapPin, label: "Local Roofers", sub: "Based in Nottingham since 2009" },
            ].map(({ icon: Icon, label, sub }, i) => (
              <div
                key={label}
                className={`flex items-center gap-4 bg-white/[0.04] hover:bg-white/[0.07] backdrop-blur-sm border border-white/[0.06] rounded-2xl px-6 py-5 transition-all duration-300 hover:translate-x-1 ${i % 2 === 1 ? "ml-8" : ""}`}
              >
                <div className="w-12 h-12 bg-teal-500/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5.5 h-5.5 text-teal-400" />
                </div>
                <div>
                  <span className="text-white font-bold text-sm block">{label}</span>
                  <span className="text-steel-500 text-xs">{sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile trust badges */}
        <div className="grid grid-cols-2 gap-3 mt-10 lg:hidden animate-slide-up delay-400">
          {[
            { icon: Shield, label: "Fully Insured" },
            { icon: Clock, label: "Fast Response" },
            { icon: Zap, label: "Free Quotes" },
            { icon: MapPin, label: "Local Roofers" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 bg-white/[0.04] border border-white/[0.06] rounded-xl px-4 py-3"
            >
              <Icon className="w-4.5 h-4.5 text-teal-400" />
              <span className="text-white font-semibold text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
