'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Does Nexor sound like an obvious robot or IVR phone tree?',
      a: 'No. Nexor is built on sub-400ms low-latency conversational voice technology. It speaks with natural conversational cadence, understands interruptions politely, and uses friendly, professional phrasing tailored to your local service trade.',
    },
    {
      q: 'What happens if a customer has a genuine life-safety emergency?',
      a: 'During setup, we define strict emergency thresholds with your team (e.g. active gas odors, rushing water leaks, or infant hypothermia risks). When detected, Nexor immediately provides emergency guidance (such as main water shutoff locations) and initiates a warm, simultaneous bridge transfer to your on-call technician’s mobile phone.',
    },
    {
      q: 'Do I need to replace my existing business phone number or carrier?',
      a: 'Not at all. You keep your existing carrier (AT&T, Verizon, RingCentral, Vonage, Dialpad, etc.) and phone number. Setup takes about 10 minutes: you simply enable conditional call forwarding for busy lines or after-hours overflow to your dedicated Nexor routing number.',
    },
    {
      q: 'Can Nexor see our actual technician availability before booking?',
      a: 'Yes. Nexor integrates directly with Google Calendar, Outlook, ServiceTitan, Housecall Pro, Jobber, and GoHighLevel. It only offers time slots that your technicians or estimators have actually marked as open, preventing double-bookings.',
    },
    {
      q: 'What if a caller refuses to talk to an automated agent?',
      a: 'If a caller says "let me speak with the owner" or "give me a human," Nexor politely acknowledges their request and immediately dials your designated office or manager phone. You also receive an instant text notification with their caller ID.',
    },
    {
      q: 'How long does onboarding take before we go live?',
      a: 'Standard onboarding takes 2 to 3 business days. Our team configures your service area zip codes, diagnostic fees, and common customer questions. We then run test calls with you so you can approve the voice persona before forwarding a single real call.',
    },
  ];

  return (
    <section className="py-20 md:py-28 border-t border-white/[0.08] bg-[#0c1013] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-950/60 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Straight answers to common contractor questions.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Everything you need to know about setting up, testing, and running Nexor for your dispatch lines.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#0f171b] border border-white/[0.06] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-teal-400"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-sm sm:text-base text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-teal-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/[0.04] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
