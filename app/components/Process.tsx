import { Phone, ClipboardCheck, HardHat, ThumbsUp } from "lucide-react";

const steps = [
  {
    icon: Phone,
    num: "01",
    title: "Get in Touch",
    text: "Give us a call or fill in the enquiry form. Tell us what\u2019s going on and we\u2019ll arrange a convenient time to come round.",
  },
  {
    icon: ClipboardCheck,
    num: "02",
    title: "Free Assessment & Quote",
    text: "We\u2019ll inspect the roof, explain exactly what\u2019s needed, and give you a clear written quote. No pressure, no obligation.",
  },
  {
    icon: HardHat,
    num: "03",
    title: "Work Carried Out",
    text: "Our experienced team gets the job done efficiently and to a high standard, keeping you updated throughout.",
  },
  {
    icon: ThumbsUp,
    num: "04",
    title: "Final Check & Tidy Finish",
    text: "We carry out a thorough final inspection, clear away all debris, and make sure you\u2019re completely satisfied.",
  },
];

export default function Process() {
  return (
    <section className="py-24 md:py-32 bg-navy-900 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[3px] bg-teal-500 rounded-full" />
            <span className="text-teal-400 font-bold text-sm uppercase tracking-wider">How It Works</span>
            <div className="w-10 h-[3px] bg-teal-500 rounded-full" />
          </div>
          <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-white mb-5">
            Simple, Straightforward Process
          </h2>
          <p className="text-steel-400 max-w-2xl mx-auto text-[15px] leading-relaxed">
            From your first call to the finished job, we keep things clear, professional, and hassle-free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.num} className="relative group">
                <div className="bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-teal-500/30 rounded-2xl p-7 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-teal-500/10 rounded-2xl flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                      <Icon className="w-7 h-7 text-teal-400" />
                    </div>
                    <span className="text-teal-500/30 font-extrabold text-4xl group-hover:text-teal-500/50 transition-colors">{s.num}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-steel-400 text-sm leading-relaxed">{s.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
