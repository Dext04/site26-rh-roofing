import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=800",
    title: "Full Re-Roof",
    location: "West Bridgford, Nottingham",
    tag: "Pitched Roof",
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=800",
    title: "Storm Damage Repair",
    location: "Arnold, Nottingham",
    tag: "Emergency",
  },
  {
    image: "https://images.unsplash.com/photo-1523413184730-e85dbbd04aba?q=80&w=800",
    title: "Flat Roof Installation",
    location: "Beeston, Nottingham",
    tag: "Flat Roof",
  },
  {
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800",
    title: "Chimney Rebuild & Lead Flashing",
    location: "Mapperley, Nottingham",
    tag: "Chimney",
  },
];

export default function Gallery() {
  return (
    <section className="py-24 md:py-32 bg-steel-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[3px] bg-teal-500 rounded-full" />
            <span className="text-teal-600 font-bold text-sm uppercase tracking-wider">Our Work</span>
            <div className="w-10 h-[3px] bg-teal-500 rounded-full" />
          </div>
          <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-navy-900 mb-5">
            Recent Projects
          </h2>
          <p className="text-steel-600 max-w-2xl mx-auto text-[15px] leading-relaxed">
            A selection of roofing work we&apos;ve recently completed for homeowners across Nottingham.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative rounded-2xl overflow-hidden bg-navy-900 cursor-pointer"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-72 object-cover group-hover:scale-110 group-hover:opacity-60 transition-all duration-700 opacity-80"
              />
              {/* Tag */}
              <div className="absolute top-4 left-4 bg-teal-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                {p.tag}
              </div>
              {/* Overlay content */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-white font-bold text-sm mb-0.5">{p.title}</h3>
                    <p className="text-steel-400 text-xs">{p.location}</p>
                  </div>
                  <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-teal-500 transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
