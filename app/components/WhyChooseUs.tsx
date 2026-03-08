import { MapPin, Shield, PoundSterling, Clock, Gem, Sparkles } from 'lucide-react';

const reasons = [
  {
    icon: MapPin,
    title: 'Local Nottingham Specialists',
    description: 'Based in Nottingham, we know the local area and can respond quickly to any roofing need.',
  },
  {
    icon: Shield,
    title: 'Fully Insured Workmanship',
    description: 'All our roofing work is fully insured, giving you complete peace of mind.',
  },
  {
    icon: PoundSterling,
    title: 'Honest, Fair Pricing',
    description: 'No hidden costs or surprises. We provide clear quotes upfront before any work begins.',
  },
  {
    icon: Clock,
    title: 'Prompt Response Times',
    description: 'We aim to respond to all enquiries within hours, not days. Emergency callouts available.',
  },
  {
    icon: Gem,
    title: 'Quality Materials',
    description: 'We only use trusted, high-quality roofing materials from reputable UK suppliers.',
  },
  {
    icon: Sparkles,
    title: 'Reliable & Tidy Service',
    description: 'We treat every property with respect, leaving the site clean and tidy after every job.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left - Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80"
              alt="Professional roofer at work"
              className="rounded-2xl shadow-lg w-full object-cover h-[400px] md:h-[500px]"
            />
            <div className="absolute -bottom-5 -right-5 bg-amber-500 text-slate-900 rounded-xl p-5 shadow-lg hidden md:block">
              <div className="text-3xl font-extrabold">15+</div>
              <div className="text-sm font-semibold">Years Serving<br />Nottingham</div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
              Dependable Roofers You Can Trust
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Choosing the right roofer matters. We&apos;re committed to providing honest, professional roofing services that Nottingham homeowners can rely on.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-3">
                  <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center shrink-0">
                    <reason.icon size={20} className="text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1">{reason.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
