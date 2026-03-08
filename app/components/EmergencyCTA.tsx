import { Phone, AlertTriangle, ChevronRight } from 'lucide-react';

export default function EmergencyCTA() {
  return (
    <section className="relative py-16 md:py-20 bg-red-700 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 70px)',
        }} />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <AlertTriangle size={48} className="text-white/80 mx-auto mb-5" />
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Roof Emergency? We&apos;re Here to Help.
        </h2>
        <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
          Leaks, storm damage, slipped tiles, damaged flashing — if your roof needs urgent attention, call us now. We offer fast emergency callouts across Nottingham and Nottinghamshire.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:01159826754"
            className="inline-flex items-center justify-center gap-2 bg-white text-red-700 font-bold text-lg px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors pulse-emergency"
          >
            <Phone size={22} />
            Call Now: 0115 982 6754
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-red-800 hover:bg-red-900 text-white font-bold text-lg px-8 py-4 rounded-xl border border-red-500/30 transition-colors"
          >
            Request Free Quote
            <ChevronRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
