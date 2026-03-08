import { MapPin, Phone } from "lucide-react";

const areas = [
  "Nottingham",
  "West Bridgford",
  "Beeston",
  "Arnold",
  "Carlton",
  "Mapperley",
  "Hucknall",
  "Long Eaton",
  "Gedling",
  "Mansfield",
  "Newark",
  "Sherwood",
  "Bulwell",
  "Stapleford",
  "Kimberley",
  "Eastwood",
];

export default function Areas() {
  return (
    <section id="areas" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[3px] bg-teal-500 rounded-full" />
              <span className="text-teal-600 font-bold text-sm uppercase tracking-wider">Coverage</span>
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-navy-900 leading-tight mb-6">
              Areas We Cover
            </h2>
            <p className="text-steel-600 text-[15px] leading-relaxed mb-8">
              Based in Nottingham, we provide roofing services across the city and wider
              Nottinghamshire. If your area isn&apos;t listed, just give us a ring &mdash;
              we can most likely still help.
            </p>

            <div className="bg-navy-900 rounded-2xl p-7">
              <p className="text-white font-bold mb-1">Need a roofer elsewhere in Nottinghamshire?</p>
              <p className="text-steel-400 text-sm mb-5">Give us a call and we&apos;ll let you know if we cover your area.</p>
              <a
                href="tel:01159826754"
                className="inline-flex items-center gap-2.5 bg-teal-500 hover:bg-teal-600 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                0115 982 6754
              </a>
            </div>
          </div>

          {/* Right - areas grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3">
            {areas.map((area, i) => (
              <div
                key={area}
                className={`flex items-center gap-2.5 rounded-xl px-4 py-3.5 transition-all duration-200 cursor-default ${
                  i === 0
                    ? "bg-navy-900 text-white border border-navy-800"
                    : "bg-steel-50 text-steel-700 border border-steel-100 hover:border-teal-200 hover:bg-teal-500/5"
                }`}
              >
                <MapPin className={`w-4 h-4 flex-shrink-0 ${i === 0 ? "text-teal-400" : "text-teal-500"}`} />
                <span className="font-semibold text-sm">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
