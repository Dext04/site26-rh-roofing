'use client';
import { Phone, Mail, MapPin, Clock, Shield, Star, CheckCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
            Request a Free Quote
          </h2>
          <p className="text-slate-600 text-lg">
            Fill in the form below or give us a call. We&apos;ll get back to you promptly with a no-obligation quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Name *</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone *</label>
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email</label>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Postcode</label>
                  <input
                    type="text"
                    placeholder="e.g. NG1 5AW"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Service Required</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm text-slate-600">
                  <option value="">Select a service...</option>
                  <option value="roof-repairs">Roof Repairs</option>
                  <option value="new-roof">New Roof Installation</option>
                  <option value="flat-roofing">Flat Roofing</option>
                  <option value="emergency">Emergency Roof Repair</option>
                  <option value="chimney">Chimney Repairs</option>
                  <option value="fascias-guttering">Fascias, Soffits & Guttering</option>
                  <option value="leadwork">Leadwork</option>
                  <option value="survey">Roof Survey / Inspection</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your roofing needs..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-4 rounded-xl transition-colors text-lg"
              >
                Send Enquiry
              </button>
              <p className="text-xs text-slate-400 text-center">
                We&apos;ll respond within 24 hours. Your details are safe and won&apos;t be shared.
              </p>
            </form>

            {/* Trust badges */}
            <div className="mt-6 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <Shield size={14} className="text-amber-500" />
                Fully Insured
              </div>
              <div className="flex items-center gap-1.5">
                <Star size={14} className="text-amber-500" />
                4.8/5 Rating
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-amber-500" />
                No Obligation
              </div>
            </div>
          </div>

          {/* Contact info sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Phone */}
            <div className="bg-slate-900 rounded-2xl p-7 text-white">
              <h3 className="font-bold text-lg mb-4">Prefer to Call?</h3>
              <a
                href="tel:01159826754"
                className="flex items-center gap-3 bg-amber-500 text-slate-900 font-bold py-4 px-6 rounded-xl hover:bg-amber-400 transition-colors text-lg justify-center"
              >
                <Phone size={22} />
                0115 982 6754
              </a>
              <p className="text-slate-400 text-sm mt-3 text-center">
                Speak directly with our team
              </p>
            </div>

            {/* Details */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 space-y-5">
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900 text-sm">Email</div>
                  <a href="mailto:info@rhroofing-nottingham.co.uk" className="text-slate-600 text-sm hover:text-amber-600 transition-colors">
                    info@rhroofing-nottingham.co.uk
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900 text-sm">Areas Covered</div>
                  <p className="text-slate-600 text-sm">
                    Nottingham & all surrounding areas across Nottinghamshire
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900 text-sm">Opening Hours</div>
                  <p className="text-slate-600 text-sm">
                    Mon - Fri: 7:30am - 6:00pm<br />
                    Sat: 8:00am - 1:00pm<br />
                    Sun: Emergency calls only
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
