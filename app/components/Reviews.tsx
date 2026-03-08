import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah T.",
    location: "West Bridgford",
    text: "Had a leak in the back bedroom that had been bothering us for months. RH Roofing came out the same day, found the problem straight away, and had it sorted within a couple of hours. Really impressed.",
    rating: 5,
    initials: "ST",
  },
  {
    name: "David M.",
    location: "Arnold",
    text: "Used RH for a full re-roof on our 1930s semi. Fair price, no hidden extras, and the lads were professional throughout. The roof looks brilliant and we\u2019ve had no issues since. Would definitely recommend.",
    rating: 5,
    initials: "DM",
  },
  {
    name: "Karen P.",
    location: "Beeston",
    text: "Called them for an emergency repair after the storms last winter. They came out first thing the next morning and made everything safe. Followed up with a proper repair later that week. Honest and reliable.",
    rating: 5,
    initials: "KP",
  },
  {
    name: "James W.",
    location: "Carlton",
    text: "RH replaced the flat roof on our garage and fitted new fascias and guttering. The quote was clear and the work was done neatly. Nice to deal with a local company that does what they say.",
    rating: 5,
    initials: "JW",
  },
  {
    name: "Linda H.",
    location: "Mapperley",
    text: "We had some chimney work and lead flashing done. The team were punctual, polite, and did a cracking job. It\u2019s been through a few heavy downpours since and not a drop of water. Very pleased.",
    rating: 5,
    initials: "LH",
  },
  {
    name: "Mark S.",
    location: "Hucknall",
    text: "Great service from start to finish. Competitive price, turned up on time, and the quality of workmanship was spot on. Would happily use them again and have already passed their details on to neighbours.",
    rating: 4,
    initials: "MS",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[3px] bg-teal-500 rounded-full" />
              <span className="text-teal-600 font-bold text-sm uppercase tracking-wider">Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-navy-900">
              What Our Customers Say
            </h2>
          </div>
          <div className="flex items-center gap-3 bg-navy-900 rounded-2xl px-6 py-4">
            <div className="flex -space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <div>
              <span className="text-white font-bold text-lg">4.8</span>
              <span className="text-steel-400 text-sm ml-1">/ 5 average</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-steel-50 hover:bg-white rounded-2xl p-7 border border-steel-100 hover:border-teal-200 hover:shadow-xl hover:shadow-steel-100/50 transition-all duration-300 group"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < r.rating ? "text-amber-400 fill-amber-400" : "text-steel-200 fill-steel-200"}`}
                  />
                ))}
              </div>
              <p className="text-steel-700 leading-relaxed mb-6 text-[14px]">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-5 border-t border-steel-100 group-hover:border-teal-100 transition-colors">
                <div className="w-10 h-10 bg-navy-900 rounded-xl flex items-center justify-center text-white text-xs font-bold">
                  {r.initials}
                </div>
                <div>
                  <p className="font-bold text-navy-900 text-sm">{r.name}</p>
                  <p className="text-steel-500 text-xs">{r.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
