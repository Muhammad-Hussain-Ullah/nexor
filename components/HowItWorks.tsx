'use client';

import { PhoneIncoming, Bot, Cpu, CheckSquare, Send, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Customer Dials Your Number',
      tagline: 'Standard forwarding or dedicated line',
      description:
        'A homeowner or business calls your existing business phone number. Whether it is 9:00 AM on Monday or 11:30 PM on a Saturday holiday, the call connects seamlessly.',
      icon: PhoneIncoming,
    },
    {
      num: '02',
      title: 'Nexor Answers Within 2 Rings',
      tagline: 'No voicemail, no hold music, no robot tone',
      description:
        'Nexor picks up immediately with your custom branded greeting. It uses low-latency, conversational voice intelligence that sounds natural, polite, and attentive.',
      badge: '< 2.0s pick-up',
      icon: Bot,
    },
    {
      num: '03',
      title: 'Active Diagnostic Triage',
      tagline: 'Trained on your trade workflows',
      description:
        'The agent gathers the caller’s address, pinpoints the issue (e.g. system type, leak location, urgency, or insurance claim status), and answers basic pricing questions based on your custom knowledge base.',
      badge: 'Domain-specific intake',
      icon: Cpu,
    },
    {
      num: '04',
      title: 'Immediate Action & Scheduling',
      tagline: 'Calendar booking or live human transfer',
      description:
        'Depending on the call, Nexor books a live appointment slot directly into your calendar, filters out vendor spam, or instantly patches genuine life-safety emergencies directly to your on-call technician.',
      badge: 'Multi-action routing',
      icon: CheckSquare,
      actions: ['Book Appointment', 'Sync CRM Lead', 'Warm Human Transfer', 'Flag Emergency', 'SMS Dispatch'],
    },
    {
      num: '05',
      title: 'Your Business Gets the Qualified Result',
      tagline: 'Logged, recorded, and dispatched',
      description:
        'You and your field team receive an instant SMS notification with the caller’s name, phone number, address, full call summary, audio recording, and confirmed calendar booking.',
      badge: 'Direct CRM sync',
      icon: Send,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 border-t border-white/[0.08] bg-[#0c1013] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-950/60 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Seamless 5-Step Architecture</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight text-balance">
            What happens when a customer calls your business.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            The exact same dependable process every time—so no inquiry slips through the cracks when your dispatchers are swamped.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-teal-500/40 via-teal-500/20 to-transparent hidden sm:block" />

          <div className="space-y-8 sm:space-y-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative sm:pl-16 group">
                  {/* Timeline Node Badge */}
                  <div className="sm:absolute sm:left-0 sm:top-1 w-12 h-12 rounded-xl bg-[#111a1e] border border-teal-500/40 flex items-center justify-center font-display font-bold text-teal-300 text-base shadow-md group-hover:border-teal-400 group-hover:bg-teal-950/40 transition-colors mb-4 sm:mb-0">
                    {step.num}
                  </div>

                  {/* Card Content */}
                  <div className="p-6 rounded-2xl bg-[#0f171b] border border-white/[0.06] hover:border-teal-500/30 transition-all duration-200 group-hover:shadow-lg group-hover:shadow-black/40">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="font-display font-semibold text-lg sm:text-xl text-white">
                        {step.title}
                      </h3>
                      {step.badge && (
                        <span className="text-[11px] font-mono text-teal-300 bg-teal-950/70 border border-teal-500/30 px-2.5 py-0.5 rounded-full">
                          {step.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-teal-400/90 font-medium mb-3">
                      {step.tagline}
                    </p>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {step.description}
                    </p>

                    {step.actions && (
                      <div className="mt-4 pt-3.5 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                        {step.actions.map((act, i) => (
                          <span
                            key={i}
                            className="text-[11px] font-medium text-slate-300 bg-black/40 px-2.5 py-1 rounded-md border border-white/[0.05]"
                          >
                            {act}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Hook */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-300 hover:text-white transition-colors group"
          >
            <span>Want to see how this connects to your current phone setup?</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
