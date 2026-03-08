import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Areas We Cover", href: "#areas" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Roof Repairs",
  "New Roofs",
  "Flat Roofing",
  "Emergency Roofing",
  "Chimney Repairs",
  "Fascias & Guttering",
  "Leadwork",
  "Roof Inspections",
];

const areas = ["Nottingham", "West Bridgford", "Beeston", "Arnold", "Carlton", "Mapperley", "Hucknall", "Mansfield"];

export default function Footer() {
  return (
    <footer className="bg-navy-950">
      {/* Top CTA strip */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-extrabold text-xl mb-1">Ready to get started?</h3>
            <p className="text-steel-500 text-sm">Get a free, no-obligation quote for your roofing project today.</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:01159826754" className="flex items-center gap-2 text-steel-300 hover:text-teal-400 font-semibold text-sm transition-colors">
              <Phone className="w-4 h-4" /> 0115 982 6754
            </a>
            <a
              href="#contact"
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all flex items-center gap-1.5"
            >
              Get Free Quote <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M3 21h18M3 21V10l9-7 9 7v11" strokeLinejoin="round" strokeLinecap="round" />
                </svg>
              </div>
              <div className="leading-none">
                <span className="text-white font-extrabold block">RH Roofing</span>
                <span className="text-teal-400 text-[10px] font-bold uppercase tracking-[0.2em]">Nottingham</span>
              </div>
            </div>
            <p className="text-steel-500 text-sm leading-relaxed mb-6">
              Trusted local roofers serving Nottingham &amp; Nottinghamshire. Fully insured,
              free quotes, quality workmanship on every job.
            </p>
            <div className="space-y-2.5 text-sm">
              <a href="tel:01159826754" className="flex items-center gap-2.5 text-steel-500 hover:text-teal-400 transition-colors">
                <Phone className="w-4 h-4" /> 0115 982 6754
              </a>
              <a href="mailto:info@rhroofing-nottingham.co.uk" className="flex items-center gap-2.5 text-steel-500 hover:text-teal-400 transition-colors">
                <Mail className="w-4 h-4" /> info@rhroofing-nottingham.co.uk
              </a>
              <div className="flex items-center gap-2.5 text-steel-500">
                <MapPin className="w-4 h-4" /> Nottingham, Nottinghamshire
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-steel-500 text-sm hover:text-teal-400 transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-steel-500 text-sm hover:text-teal-400 transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Areas We Cover</h4>
            <ul className="space-y-3">
              {areas.map((a) => (
                <li key={a}>
                  <a href="#areas" className="text-steel-500 text-sm hover:text-teal-400 transition-colors">{a}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-steel-600">
          <p>&copy; {new Date().getFullYear()} RH Roofing Nottingham. All rights reserved.</p>
          <p>Trusted roofers in Nottingham &amp; Nottinghamshire</p>
        </div>
      </div>
    </footer>
  );
}
