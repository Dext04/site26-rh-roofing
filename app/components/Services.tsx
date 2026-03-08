import { Wrench, Home, Layers, AlertTriangle, Flame, Droplets, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Roof Repairs",
    desc: "Slipped slates, broken tiles, leaks, and storm damage. We carry out all types of roof repairs quickly and properly across Nottingham.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Home,
    title: "New Roofs",
    desc: "Complete roof replacements and new roof installations for homes and extensions. Quality materials, experienced fitters, and a clean finish every time.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Layers,
    title: "Flat Roofing",
    desc: "GRP fibreglass, EPDM rubber, and felt flat roofing for garages, extensions, and dormers. Watertight results with modern systems.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Roof Repairs",
    desc: "Roof leaking right now? We provide rapid emergency call-outs across Nottingham. Same-day response where possible.",
    color: "bg-red-600/5 text-red-600",
  },
  {
    icon: Flame,
    title: "Chimney Repairs",
    desc: "Chimney repointing, stack rebuilds, lead flashing, and cowl fitting. Keeping your chimney safe, stable, and watertight.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: Droplets,
    title: "Fascias, Soffits & Guttering",
    desc: "We supply and fit uPVC fascias, soffits, and guttering. Protecting your property from water damage and keeping it looking smart.",
    color: "bg-cyan-50 text-cyan-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-steel-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[3px] bg-teal-500 rounded-full" />
              <span className="text-teal-600 font-bold text-sm uppercase tracking-wider">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-navy-900 leading-tight">
              Roofing Solutions for
              <br className="hidden md:block" />
              Every Property
            </h2>
          </div>
          <p className="text-steel-600 max-w-md text-[15px] leading-relaxed md:text-right">
            From a small repair to a complete new roof, we offer a full range of roofing
            services for homes and businesses across Nottingham and Nottinghamshire.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.title}
                href="#contact"
                className="group bg-white rounded-2xl p-7 border border-steel-100 hover:border-teal-200 transition-all duration-300 hover:shadow-xl hover:shadow-steel-200/50 hover:-translate-y-1 block"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-13 h-13 ${s.color.split(" ")[0]} rounded-xl flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${s.color.split(" ")[1]}`} />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-steel-300 group-hover:text-teal-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2.5 group-hover:text-teal-600 transition-colors">{s.title}</h3>
                <p className="text-steel-600 leading-relaxed text-[14px]">{s.desc}</p>
              </a>
            );
          })}
        </div>

        {/* Extra services note */}
        <div className="mt-12 bg-navy-900 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-lg mb-1">
              We also provide leadwork, roof surveys, ridge tile repairs, and valley gutter work.
            </p>
            <p className="text-steel-400 text-sm">Whatever the roofing job, give us a call to discuss.</p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-600 text-white font-bold px-8 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-teal-500/20 flex items-center gap-2"
          >
            Discuss Your Project
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
