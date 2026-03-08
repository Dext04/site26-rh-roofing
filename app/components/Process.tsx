import { MessageCircle, ClipboardCheck, Hammer, ThumbsUp } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    step: '01',
    title: 'Get in Touch',
    description: 'Give us a call or fill in our enquiry form. Tell us about your roofing issue and we\'ll take it from there.',
  },
  {
    icon: ClipboardCheck,
    step: '02',
    title: 'Free Quote & Assessment',
    description: 'We\'ll arrange a convenient time to inspect your roof, assess the work needed, and provide a clear, honest quote.',
  },
  {
    icon: Hammer,
    step: '03',
    title: 'Work Carried Out',
    description: 'Once you\'re happy to proceed, we\'ll schedule the work and complete it efficiently with minimal disruption.',
  },
  {
    icon: ThumbsUp,
    step: '04',
    title: 'Final Check & Clean Finish',
    description: 'We inspect all work to ensure it meets our standards, tidy the site, and make sure you\'re completely satisfied.',
  },
];

export default function Process() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
            Simple, Straightforward Process
          </h2>
          <p className="text-slate-600 text-lg">
            We make it easy to get your roofing work sorted. No hassle, no pressure — just clear steps from start to finish.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative bg-white rounded-2xl p-7 shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center">
                  <step.icon size={24} className="text-amber-400" />
                </div>
                <span className="text-4xl font-extrabold text-slate-100">{step.step}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 text-slate-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
