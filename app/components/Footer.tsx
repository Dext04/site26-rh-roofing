import { Phone, Mail, MapPin } from 'lucide-react';

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About Us' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
];

const serviceLinks = [
  'Roof Repairs',
  'New Roofs',
  'Flat Roofing',
  'Emergency Repairs',
  'Chimney Repairs',
  'Fascias & Guttering',
  'Leadwork',
  'Roof Surveys',
];

const areaLinks = [
  'Nottingham', 'West Bridgford', 'Beeston', 'Arnold',
  'Carlton', 'Mapperley', 'Hucknall', 'Long Eaton',
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-amber-500 rounded-lg flex items-center justify-center">
                <span className="text-slate-900 font-black text-sm">RH</span>
              </div>
              <div>
                <span className="text-white font-bold block text-sm">RH Roofing</span>
                <span className="text-amber-400 text-xs">NOTTINGHAM</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Trusted local roofers serving Nottingham and Nottinghamshire for over 15 years. Professional, reliable roofing services for homes and small businesses.
            </p>
            <div className="space-y-2.5">
              <a href="tel:01159826754" className="flex items-center gap-2 text-sm hover:text-amber-400 transition-colors">
                <Phone size={14} />
                0115 982 6754
              </a>
              <a href="mailto:info@rhroofing-nottingham.co.uk" className="flex items-center gap-2 text-sm hover:text-amber-400 transition-colors">
                <Mail size={14} />
                info@rhroofing-nottingham.co.uk
              </a>
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={14} />
                Nottingham, Nottinghamshire
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm hover:text-amber-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4">Our Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-sm hover:text-amber-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4">Areas We Cover</h3>
            <ul className="space-y-2.5">
              {areaLinks.map((area) => (
                <li key={area}>
                  <a href="#areas" className="text-sm hover:text-amber-400 transition-colors">
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} RH Roofing Nottingham. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Fully insured roofing contractors serving Nottingham & Nottinghamshire
          </p>
        </div>
      </div>
    </footer>
  );
}
