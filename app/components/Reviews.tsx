import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah T.',
    location: 'West Bridgford',
    text: 'Had a leak in the back bedroom that had been bothering us for months. RH Roofing came out the same day, found the problem quickly, and had it sorted within a couple of hours. Really impressed with how tidy they left everything.',
    rating: 5,
  },
  {
    name: 'David M.',
    location: 'Arnold',
    text: 'Used RH for a full re-roof on our 1930s semi. Fair price, no hidden extras, and the lads were professional throughout. The roof looks brilliant and we\'ve had no issues since. Would definitely recommend to anyone in Nottingham.',
    rating: 5,
  },
  {
    name: 'Karen P.',
    location: 'Beeston',
    text: 'Called them for an emergency repair after the storms last winter. They came out first thing the next morning and made everything safe. Followed up with a proper repair later that week. Honest and reliable — exactly what you want.',
    rating: 5,
  },
  {
    name: 'James W.',
    location: 'Carlton',
    text: 'RH replaced the flat roof on our garage and fitted new fascias and guttering. The quote was clear and the work was done neatly. Nice to deal with a local company that actually does what they say they\'ll do.',
    rating: 5,
  },
  {
    name: 'Linda H.',
    location: 'Mapperley',
    text: 'We had some chimney work and lead flashing done. The team were punctual, polite, and did a cracking job. It\'s been through a few heavy downpours since and not a drop of water. Very pleased.',
    rating: 5,
  },
  {
    name: 'Mark S.',
    location: 'Hucknall',
    text: 'Great service from start to finish. Competitive price, turned up on time, and the quality of workmanship was spot on. Would happily use them again and have already passed their details on to neighbours.',
    rating: 4,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Customer Reviews</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-slate-600 text-lg">
            Don&apos;t just take our word for it. Here&apos;s what homeowners across Nottingham have to say about our work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <Quote size={24} className="text-amber-400/40 mb-4" />
              <p className="text-slate-700 text-sm leading-relaxed mb-5">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900 text-sm">{review.name}</div>
                  <div className="text-slate-500 text-xs">{review.location}</div>
                </div>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
