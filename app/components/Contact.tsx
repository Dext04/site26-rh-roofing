"use client";

import { useState } from "react";
import { Phone, Mail, Clock, MapPin, Send, Shield, Star, CheckCircle2 } from "lucide-react";

const serviceOptions = [
  "Roof Repairs",
  "New Roof Installation",
  "Flat Roofing",
  "Emergency Roof Repair",
  "Chimney Repairs",
  "Fascias, Soffits & Guttering",
  "Leadwork",
  "Roof Inspection",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", postcode: "", service: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("This is a demo website. In production, this form would send an enquiry to the business.");
  };

  const update = (field: string, value: string) => setForm({ ...form, [field]: value });

  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[3px] bg-teal-500 rounded-full" />
            <span className="text-teal-600 font-bold text-sm uppercase tracking-wider">Contact Us</span>
            <div className="w-10 h-[3px] bg-teal-500 rounded-full" />
          </div>
          <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-navy-900 mb-5">
            Get Your Free Quote
          </h2>
          <p className="text-steel-600 max-w-2xl mx-auto text-[15px] leading-relaxed">
            Fill in the form below or give us a call. We&apos;ll get back to you as quickly as possible with a no-obligation quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-steel-50 rounded-3xl p-8 md:p-10 border border-steel-100 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-2">Your Name *</label>
                  <input
                    type="text" required value={form.name} onChange={(e) => update("name", e.target.value)}
                    className="w-full px-5 py-3.5 rounded-xl border border-steel-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all text-navy-900 bg-white"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-2">Phone Number *</label>
                  <input
                    type="tel" required value={form.phone} onChange={(e) => update("phone", e.target.value)}
                    className="w-full px-5 py-3.5 rounded-xl border border-steel-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all text-navy-900 bg-white"
                    placeholder="07700 900000"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-2">Email Address</label>
                  <input
                    type="email" value={form.email} onChange={(e) => update("email", e.target.value)}
                    className="w-full px-5 py-3.5 rounded-xl border border-steel-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all text-navy-900 bg-white"
                    placeholder="john@example.co.uk"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-2">Postcode *</label>
                  <input
                    type="text" required value={form.postcode} onChange={(e) => update("postcode", e.target.value)}
                    className="w-full px-5 py-3.5 rounded-xl border border-steel-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all text-navy-900 bg-white"
                    placeholder="NG1 5AW"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-navy-900 mb-2">Service Required</label>
                <select
                  value={form.service} onChange={(e) => update("service", e.target.value)}
                  className="w-full px-5 py-3.5 rounded-xl border border-steel-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all text-navy-900 bg-white"
                >
                  <option value="">Select a service...</option>
                  {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-navy-900 mb-2">Tell Us About the Job</label>
                <textarea
                  rows={4} value={form.message} onChange={(e) => update("message", e.target.value)}
                  className="w-full px-5 py-3.5 rounded-xl border border-steel-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all text-navy-900 bg-white resize-none"
                  placeholder="Describe the issue or work you need..."
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-teal-500 hover:bg-teal-600 text-white font-bold px-10 py-4.5 rounded-xl text-lg transition-all shadow-lg shadow-teal-500/20 hover:shadow-xl"
              >
                <Send className="w-5 h-5" />
                Send Enquiry
              </button>

              {/* Mini trust badges */}
              <div className="flex flex-wrap gap-5 pt-5 border-t border-steel-200 mt-3">
                {[
                  { icon: Shield, label: "Fully Insured" },
                  { icon: Star, label: "4.8/5 Rated" },
                  { icon: CheckCircle2, label: "No Obligation" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-xs text-steel-500 font-medium">
                    <Icon className="w-4 h-4 text-teal-500" />
                    {label}
                  </div>
                ))}
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2">
            <div className="bg-navy-900 rounded-3xl p-8 md:p-10 text-white h-full flex flex-col">
              <h3 className="text-xl font-bold mb-8">Contact Details</h3>
              <div className="space-y-7 flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-500/15 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-sm">Phone</p>
                    <a href="tel:01159826754" className="text-steel-400 hover:text-teal-400 transition-colors block text-sm">0115 982 6754</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-500/15 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-sm">Email</p>
                    <a href="mailto:info@rhroofing-nottingham.co.uk" className="text-steel-400 hover:text-teal-400 transition-colors text-sm">info@rhroofing-nottingham.co.uk</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-500/15 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-sm">Service Area</p>
                    <p className="text-steel-400 text-sm">Nottingham &amp; Nottinghamshire</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-500/15 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-sm">Opening Hours</p>
                    <p className="text-steel-400 text-sm">Mon &ndash; Fri: 7:30am &ndash; 6:00pm</p>
                    <p className="text-steel-400 text-sm">Sat: 8:00am &ndash; 1:00pm</p>
                    <p className="text-steel-400 text-sm">Sun: Emergency only</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-white/5 border border-white/5 rounded-2xl p-6">
                <p className="text-sm text-white/90 mb-4">
                  <strong>Need urgent help?</strong> Our emergency line is available for
                  roof leaks and storm damage across Nottingham.
                </p>
                <a
                  href="tel:01159826754"
                  className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all w-full justify-center"
                >
                  <Phone className="w-4 h-4" />
                  Call Emergency Line
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
