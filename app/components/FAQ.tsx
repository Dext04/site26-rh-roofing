'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Do you offer free quotes?',
    answer: 'Yes, all our quotes are completely free and come with no obligation. We\'ll visit your property, assess the work required, and provide a clear, written quote before any work begins.',
  },
  {
    question: 'Can you help with emergency roofing issues?',
    answer: 'Absolutely. We offer emergency callouts for urgent problems such as storm damage, serious leaks, and dangerous loose tiles. Call us directly and we\'ll do our best to attend as quickly as possible.',
  },
  {
    question: 'Do you cover all of Nottingham?',
    answer: 'We cover Nottingham city centre and all surrounding areas including West Bridgford, Beeston, Arnold, Carlton, Mapperley, Hucknall, Long Eaton, Gedling, and further afield across Nottinghamshire.',
  },
  {
    question: 'How soon can you inspect my roof?',
    answer: 'In most cases, we can arrange an inspection within 1-2 working days. For emergencies, we aim to respond on the same day where possible.',
  },
  {
    question: 'Do you work on flat roofs?',
    answer: 'Yes, flat roofing is one of our specialities. We install and repair flat roofs using modern systems including EPDM rubber, fibreglass (GRP), and traditional felt, suitable for garages, extensions, porches, and more.',
  },
  {
    question: 'Are you fully insured?',
    answer: 'Yes. We carry full public liability insurance, so you can have complete peace of mind when we\'re working on your property.',
  },
  {
    question: 'What types of roofing work do you carry out?',
    answer: 'We handle everything from minor tile repairs and gutter replacements to full re-roofs, flat roofing, chimney repairs, leadwork, fascias, soffits, and roof surveys.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-lg">
            Quick answers to common questions about our roofing services.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-slate-400 shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
