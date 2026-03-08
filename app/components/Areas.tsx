import { MapPin } from 'lucide-react';

const areas = [
  'Nottingham', 'West Bridgford', 'Beeston', 'Arnold', 'Carlton',
  'Mapperley', 'Hucknall', 'Long Eaton', 'Gedling', 'Mansfield', 'Newark',
];

export default function Areas() {
  return (
    <section id="areas" className="py-20 md:py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Service Areas</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
            Areas We Cover
          </h2>
          <p className="text-slate-400 text-lg">
            We provide roofing services across Nottingham and the wider Nottinghamshire area. If your location isn&apos;t listed, give us a call — we may still be able to help.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {areas.map((area) => (
            <div
              key={area}
              className="bg-slate-800 hover:bg-slate-700 border border-slate-700/50 rounded-xl px-4 py-4 text-center transition-colors group"
            >
              <MapPin size={20} className="text-amber-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-white font-medium text-sm">{area}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-400 text-sm">
            Covering all of Nottingham, Nottinghamshire, and nearby areas including Ilkeston, Eastwood, Stapleford, and Bulwell.
          </p>
        </div>
      </div>
    </section>
  );
}
