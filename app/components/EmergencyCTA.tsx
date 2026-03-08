import { AlertTriangle, Phone, ArrowUpRight, Zap } from "lucide-react";

export default function EmergencyCTA() {
  return (
    <section className="relative py-24 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-950" />
      <div
        className="absolute inset-0 opacity-[0.06] bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=2032')" }}
      />
      {/* Accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 bg-red-600/15 border border-red-500/20 rounded-full px-5 py-2 mb-8">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-red-400 font-bold text-sm">Emergency Roof Repairs</span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white mb-7 leading-tight">
            Roof Leaking?
            <br />
            Storm Damage?
            <br />
            <span className="text-gradient">We&apos;re Here to Help.</span>
          </h2>

          <p className="text-steel-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Slipped tiles, cracked flashing, water pouring through &mdash; don&apos;t wait for it
            to get worse. Our emergency roofers are available across Nottingham for rapid
            call-outs. We&apos;ll make your roof safe and watertight as quickly as possible.
          </p>

          {/* Emergency features */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {["Same-day response", "Emergency line available", "Temporary & permanent fixes", "Storm damage specialists"].map((item) => (
              <div key={item} className="flex items-center gap-2 bg-white/5 border border-white/5 rounded-xl px-4 py-2.5">
                <Zap className="w-3.5 h-3.5 text-teal-400" />
                <span className="text-steel-300 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:01159826754"
              className="group inline-flex items-center justify-center gap-2.5 bg-teal-500 hover:bg-teal-600 text-white font-bold px-10 py-5 rounded-2xl text-lg transition-all shadow-xl shadow-teal-500/20 hover:shadow-teal-500/30 pulse-glow"
            >
              <Phone className="w-5 h-5" />
              Call Now &mdash; 0115 982 6754
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-bold px-8 py-5 rounded-2xl text-lg transition-all border border-white/10 hover:border-white/20"
            >
              Request Free Quote
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
