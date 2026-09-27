'use client';

import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export default function BeforeAfter() {
  const withoutSteps = [
    { title: 'Inbound Call Rings', desc: 'Homeowner calls at 6:45 PM or during a busy service day.' },
    { title: 'Rings 5+ Times or Hits Voicemail', desc: 'Technician is under a sink or driving; no one picks up.' },
    { title: 'Caller Hangs Up Immediately', desc: 'Over 65% of emergency trade callers refuse to leave a voice message.' },
    { title: 'Caller Dials Next Local Competitor', desc: 'They book with the first competitor who actually answers the phone.' },
    { title: 'Opportunity & Ad Spend Lost', desc: 'You paid for the lead through Google Ads, but earned $0 from it.' },
  ];

  const withSteps = [
    { title: 'Inbound Call Rings', desc: 'Homeowner calls at any time of day, night, or weekend.' },
    { title: 'Nexor Answers in < 2 Rings', desc: 'Warm, professional greeting trained specifically on your company procedures.' },
    { title: 'Diagnoses Issue & Collects Details', desc: 'Asks right questions, captures street address, and determines urgency tier.' },
    { title: 'Books Live Appointment on Calendar', desc: 'Directly reserves slot in ServiceTitan, Jobber, Housecall Pro, or GHL.' },
    { title: 'Job Won & Tech Instantly Dispatched', desc: 'Customer receives SMS confirmation; your tech receives call audio & address.' },
  ];

  return (
    <section className="py-10 md:py-14 border-t border-white/[0.08] bg-[#090d10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/60 border border-teal-500/30 text-teal-300 text-[11px] font-semibold uppercase tracking-wider mb-2">
            <span>Direct Operational Contrast</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight text-balance">
            From missed call to booked dispatch.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400">
            Compare what happens when a call hits traditional voicemail versus what happens when Nexor answers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 items-stretch">
          {/* Without Nexor */}
          <div className="rounded-2xl bg-[#0f1418] border border-rose-950/50 p-4 sm:p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-rose-950/60 mb-3">
                <div className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-rose-500" />
                  <span className="font-display font-bold text-base text-slate-200">Without Nexor</span>
                </div>
                <span className="text-[11px] font-medium text-rose-400 bg-rose-950/50 px-2 py-0.5 rounded border border-rose-900/30">
                  Voicemail / Legacy
                </span>
              </div>

              <div className="space-y-2">
                {withoutSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2 rounded-lg bg-black/30 border border-white/[0.03]">
                    <div className="w-5 h-5 rounded-full bg-rose-950/80 border border-rose-800/40 flex items-center justify-center shrink-0 text-rose-400 text-[10px] font-mono font-bold mt-0.5">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-300">{step.title}</div>
                      <div className="text-[11px] text-slate-400 leading-snug">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-rose-950/60 text-[11px] text-rose-400/90 font-medium">
              Typical Bottom Line: High lead abandonment, frustrated callers, zero visibility.
            </div>
          </div>

          {/* With Nexor */}
          <div className="rounded-2xl bg-gradient-to-b from-[#122227] to-[#0d1618] border border-teal-500/40 p-4 sm:p-5 flex flex-col justify-between shadow-xl shadow-teal-950/20">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-teal-800/40 mb-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span className="font-display font-bold text-base text-white">With Nexor</span>
                </div>
                <span className="text-[11px] font-semibold text-teal-300 bg-teal-950/80 px-2 py-0.5 rounded border border-teal-500/40 shadow-sm">
                  24/7 AI Voice Dispatch
                </span>
              </div>

              <div className="space-y-2">
                {withSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2 rounded-lg bg-teal-950/30 border border-teal-500/20">
                    <div className="w-5 h-5 rounded-full bg-teal-500/20 border border-teal-400/50 flex items-center justify-center shrink-0 text-teal-300 text-[10px] font-mono font-bold mt-0.5">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">{step.title}</div>
                      <div className="text-[11px] text-teal-100/80 leading-snug">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-teal-800/40 text-[11px] text-teal-300 font-medium flex items-center justify-between">
              <span>Typical Bottom Line: Every qualified call captured and booked.</span>
              <a href="#contact" className="underline hover:text-white transition-colors">See Setup</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
