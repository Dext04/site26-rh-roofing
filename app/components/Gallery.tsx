const projects = [
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    title: 'Tile Roof Repair',
    location: 'Nottingham City Centre',
  },
  {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',
    title: 'Flat Roof Replacement',
    location: 'Beeston',
  },
  {
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80',
    title: 'Chimney Repair & Repointing',
    location: 'Arnold',
  },
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
    title: 'Full Re-Roof',
    location: 'West Bridgford',
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    title: 'Fascias & Guttering',
    location: 'Carlton',
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
    title: 'Storm Damage Repair',
    location: 'Mapperley',
  },
];

export default function Gallery() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Our Work</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
            Recent Projects
          </h2>
          <p className="text-slate-600 text-lg">
            A selection of recent roofing work completed for customers across Nottingham and the surrounding areas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-bold text-lg">{project.title}</h3>
                <p className="text-slate-300 text-sm">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
