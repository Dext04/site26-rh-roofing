import { MapPinned, ShieldCheck, PoundSterling, Clock, Hammer, ThumbsUp } from "lucide-react";

const reasons = [
  {
    icon: MapPinned,
    title: "Local Nottingham Specialists",
    text: "We\u2019re based right here in Nottingham. We know the local properties, the weather, and what works best for homes in this area.",
    num: "01",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    text: "Complete peace of mind with full public liability insurance on every single job we carry out.",
    num: "02",
  },
  {
    icon: PoundSterling,
    title: "Honest Quotes",
    text: "No hidden extras, no surprise charges. We give you a clear, written quote upfront and stick to it.",
    num: "03",
  },
  {
    icon: Clock,
    title: "Prompt Service",
    text: "We know roof problems can\u2019t wait. Most repairs are completed within 24\u201348 hours of your go-ahead.",
    num: "04",
  },
  {
    icon: Hammer,
    title: "Quality Materials",
    text: "We only use materials from trusted UK suppliers. Every job is built to last, with a workmanship guarantee included.",
    num: "05",
  },
  {
    icon: ThumbsUp,
    title: "Reliable & Tidy",
    text: "We turn up when we say we will, keep you informed throughout, and always leave your property clean and tidy.",
    num: "06",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/3 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[3px] bg-teal-500 rounded-full" />
            <span className="text-teal-600 font-bold text-sm uppercase tracking-wider">Why Us</span>
            <div className="w-10 h-[3px] bg-teal-500 rounded-full" />
          </div>
          <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-navy-900 mb-5">
            Why Choose RH Roofing?
          </h2>
          <p className="text-steel-600 max-w-2xl mx-auto text-[15px] leading-relaxed">
            Homeowners across Nottingham trust us because we do what we say, charge what we quote, and stand behind every job.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="group relative bg-steel-50 hover:bg-navy-900 rounded-2xl p-7 transition-all duration-500 border border-steel-100 hover:border-navy-800"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 bg-teal-500/10 group-hover:bg-teal-500/20 rounded-xl flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6 text-teal-500" />
                  </div>
                  <span className="text-steel-200 group-hover:text-steel-700 font-extrabold text-3xl transition-colors">{r.num}</span>
                </div>
                <h3 className="font-bold text-navy-900 group-hover:text-white text-lg mb-2.5 transition-colors">{r.title}</h3>
                <p className="text-steel-600 group-hover:text-steel-400 leading-relaxed text-[14px] transition-colors">{r.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
