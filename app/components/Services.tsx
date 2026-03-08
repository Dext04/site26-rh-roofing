import { Wrench, Home, Layers, AlertTriangle, Building, Droplets, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Roof Repairs',
    description: 'Prompt, reliable roof repairs for leaks, damaged tiles, broken ridges, and storm damage across Nottingham.',
  },
  {
    icon: Home,
    title: 'New Roofs',
    description: 'Complete new roof installations for homes and extensions, built to last with quality materials and expert fitting.',
  },
  {
    icon: Layers,
    title: 'Flat Roofing',
    description: 'Modern flat roofing solutions including EPDM rubber, fibreglass (GRP), and felt roofing for garages, extensions, and porches.',
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Roof Repairs',
    description: 'Urgent callouts for storm damage, serious leaks, and dangerous roof issues. Fast response across Nottinghamshire.',
  },
  {
    icon: Building,
    title: 'Chimney Repairs',
    description: 'Chimney repointing, rebuilds, flaunching, and lead flashing repairs to keep your chimney weathertight and safe.',
  },
  {
    icon: Droplets,
    title: 'Fascias, Soffits & Guttering',
    description: 'Replacement fascias, soffits, bargeboards, and guttering in uPVC. Neat finishes and proper rainwater drainage.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
            Our Roofing Services
          </h2>
          <p className="text-slate-600 text-lg">
            From small repairs to full re-roofs, we cover all aspects of domestic and commercial roofing in Nottingham.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md border border-gray-100 transition-all group"
            >
              <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-amber-100 transition-colors">
                <service.icon size={26} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-5 leading-relaxed text-sm">
                {service.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-amber-600 hover:text-amber-700 font-semibold text-sm transition-colors"
              >
                Get a Quote
                <ChevronRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* Extra services */}
        <div className="mt-10 text-center">
          <p className="text-slate-500 text-sm">
            We also offer <span className="font-semibold text-slate-700">leadwork</span>,{' '}
            <span className="font-semibold text-slate-700">roof surveys & inspections</span>,{' '}
            <span className="font-semibold text-slate-700">valley repairs</span>, and{' '}
            <span className="font-semibold text-slate-700">moss removal</span>.{' '}
            <a href="#contact" className="text-amber-600 font-semibold hover:underline">Get in touch</a> to discuss your requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
