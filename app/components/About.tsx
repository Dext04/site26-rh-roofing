import { CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left - Content */}
          <div>
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-6">
              Nottingham&apos;s Trusted Roofing Team
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                RH Roofing Nottingham has been helping homeowners, landlords, and small businesses across Nottingham and the surrounding areas with practical, reliable roofing solutions for over 15 years.
              </p>
              <p>
                We started out as a small, local outfit and have built our reputation the old-fashioned way — through honest work, fair pricing, and turning up when we say we will. Most of our work still comes through word of mouth and recommendations from satisfied customers.
              </p>
              <p>
                Whether it&apos;s a few slipped tiles or a full re-roof, we treat every job with the same level of care and attention. We&apos;re not a faceless company — we&apos;re local tradespeople who take pride in doing a proper job.
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {[
                'Experienced local team',
                'Residential & commercial work',
                'All roof types covered',
                'Free, no-obligation quotes',
                'Emergency callouts',
                'Insurance work undertaken',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle size={18} className="text-amber-400 shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
              alt="Roofing team working on a pitched roof"
              className="rounded-2xl shadow-lg w-full object-cover h-[400px] md:h-[480px]"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
