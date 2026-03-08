import { CheckCircle2, ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-steel-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image stack */}
          <div className="relative">
            <div className="relative z-10">
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-navy-900/10">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070"
                  alt="Roofer carrying out repairs on a pitched roof"
                  className="w-full h-[480px] object-cover"
                />
              </div>
              {/* Overlay card */}
              <div className="absolute -bottom-6 -left-4 md:left-6 bg-navy-900 text-white rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-extrabold">15+</span>
                  </div>
                  <div>
                    <div className="font-bold text-lg">Years of</div>
                    <div className="text-steel-400 text-sm">Trusted Experience</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Background decorative */}
            <div className="absolute top-6 -right-6 w-full h-full bg-teal-500/10 rounded-3xl -z-0" />
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[3px] bg-teal-500 rounded-full" />
              <span className="text-teal-600 font-bold text-sm uppercase tracking-wider">About Us</span>
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-navy-900 leading-tight mb-7">
              Nottingham&apos;s Trusted
              <br />Local Roofers
            </h2>
            <p className="text-steel-600 leading-relaxed mb-5 text-[15px]">
              RH Roofing Nottingham has been helping homeowners, landlords, and small businesses
              across the city and wider Nottinghamshire with practical, reliable roofing solutions
              for over 15 years. We started out as a small, local outfit and built our reputation
              the old-fashioned way &mdash; through honest work and fair pricing.
            </p>
            <p className="text-steel-600 leading-relaxed mb-8 text-[15px]">
              We&apos;re not a faceless national company with a call centre. We&apos;re your local roofers
              who take pride in every single job. Whether it&apos;s a quick repair on a terraced house
              in West Bridgford or a full re-roof in Arnold, we treat every property like our own.
              Most of our work still comes through word of mouth and recommendations.
            </p>

            <div className="grid sm:grid-cols-2 gap-3.5 mb-9">
              {[
                "Experienced local team",
                "Residential & commercial work",
                "Fully insured",
                "Free, no-obligation quotes",
                "Clean and tidy service",
                "Insurance work undertaken",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-steel-100">
                  <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                  <span className="text-navy-900 text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-navy-900/20 hover:shadow-xl"
            >
              Get in Touch
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
