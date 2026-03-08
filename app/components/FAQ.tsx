"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Do you offer free quotes?",
    a: "Yes. All our quotes are completely free and come with no obligation. We\u2019ll visit your property, assess the work, and provide a clear written quote before anything starts.",
  },
  {
    q: "Can you help with emergency roof leaks?",
    a: "Absolutely. We offer a rapid emergency call-out service across Nottingham. We aim to respond as quickly as possible and can usually carry out a same-day temporary or permanent repair.",
  },
  {
    q: "Do you cover all of Nottingham?",
    a: "Yes. We cover Nottingham city centre and all surrounding areas including West Bridgford, Arnold, Beeston, Carlton, Mapperley, Hucknall, and more. We also serve the wider Nottinghamshire area.",
  },
  {
    q: "How quickly can you inspect a roof?",
    a: "For most enquiries, we can arrange a roof inspection within 1\u20132 working days. For emergencies, we\u2019ll get to you as soon as possible \u2014 usually the same day.",
  },
  {
    q: "Do you work on flat roofs?",
    a: "Yes, flat roofing is one of our specialities. We install and repair flat roofs using modern systems including EPDM rubber, fibreglass (GRP), and traditional felt.",
  },
  {
    q: "Are you fully insured?",
    a: "Yes. We carry full public liability insurance. We\u2019re happy to provide proof of cover on request for complete peace of mind.",
  },
  {
    q: "What types of roofing work do you carry out?",
    a: "We handle everything from minor tile repairs and gutter replacements to full re-roofs, flat roofing, chimney repairs, leadwork, fascias, soffits, and roof surveys.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-steel-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[3px] bg-teal-500 rounded-full" />
              <span className="text-teal-600 font-bold text-sm uppercase tracking-wider">FAQs</span>
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-navy-900 leading-tight mb-5">
              Common
              <br />Questions
            </h2>
            <p className="text-steel-600 text-[15px] leading-relaxed mb-7">
              Got a question we haven&apos;t answered here? Give us a call on{" "}
              <a href="tel:01159826754" className="text-teal-500 font-semibold hover:underline">0115 982 6754</a>{" "}
              or drop us a message.
            </p>
          </div>

          {/* Right - accordion */}
          <div className="lg:col-span-3 space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 ${
                  open === i
                    ? "bg-white border-teal-200 shadow-lg shadow-steel-100/50"
                    : "bg-white border-steel-100 hover:border-steel-200"
                }`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-7 py-5.5 text-left"
                >
                  <span className={`font-bold pr-4 transition-colors ${open === i ? "text-teal-600" : "text-navy-900"}`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                    open === i ? "bg-teal-500 text-white" : "bg-steel-100 text-steel-500"
                  }`}>
                    {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                {open === i && (
                  <div className="px-7 pb-6 text-steel-600 leading-relaxed text-[14px] animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
