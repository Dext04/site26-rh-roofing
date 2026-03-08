import { Award, Hammer, Clock, ThumbsUp } from 'lucide-react';

const stats = [
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: Hammer, value: '2,500+', label: 'Jobs Completed' },
  { icon: Clock, value: 'Same Day', label: 'Response Available' },
  { icon: ThumbsUp, value: '98%', label: 'Customer Satisfaction' },
];

export default function TrustStrip() {
  return (
    <section className="bg-slate-800 border-y border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon size={28} className="text-amber-400 mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-extrabold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
