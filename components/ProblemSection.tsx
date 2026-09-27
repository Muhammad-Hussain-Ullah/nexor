'use client';

import { PhoneMissed, Clock, Users, DollarSign, AlertCircle } from 'lucide-react';

export default function ProblemSection() {
  const painPoints = [
    {
      icon: PhoneMissed,
      title: 'Your technicians are busy on the job',
      description:
        'When your crew is on a hot roof, running diagnostics in an attic, or replacing a water heater, they cannot answer incoming calls. Calls roll to voicemail, and voicemail is rarely checked in real time.',
      consequence: 'Typical outcome: Missed first-touch caller.',
    },
    {
      icon: Users,
      title: 'Callers rarely leave voicemails in emergencies',
      description:
        'When an AC fails during a 100° Fahrenheit heatwave or a pipe leaks under a sink, customers do not wait for a callback. They immediately hang up and dial the next local contractor on Google.',
      consequence: 'Typical outcome: Lead lost to competitor down the street.',
    },
    {
      icon: Clock,
      title: 'After-hours and weekend inquiries go dark',
      description:
        'Home emergencies routinely occur after 5:00 PM and on Saturdays. Without dedicated 24/7 answering, lucrative high-ticket jobs go unnoticed until Monday morning when it is too late.',
      consequence: 'Typical outcome: Urgent job awarded to whoever answered first.',
    },
    {
      icon: DollarSign,
      title: 'Traditional answering services do not book jobs',
      description:
        'Human call centers take 15–20 minutes to answer, mispronounce technical terms, and only take a paper message. They cannot check technician calendars or dispatch urgent jobs.',
      consequence: 'Typical outcome: Paying $400–$1,200/mo just for notepad messages.',
    },
  ];

  return (
    <section className="py-20 md:py-28 border-t border-white/[0.08] bg-[#090d10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Header & Strategic Context */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-rose-400 uppercase tracking-wider mb-4">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>The Cost of Missed Inbound Calls</span>
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight text-balance">
                Missed calls are missed revenue for trade businesses.
              </h2>

              <p className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed">
                You invest real capital into Google Local Services Ads, SEO, vehicle wraps, and word-of-mouth. If nobody answers within the first three rings, that marketing investment goes straight to your competitor.
              </p>
            </div>

            {/* Believable Commercial Estimate Box */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-teal-950/40 via-[#0d1618] to-black/60 border border-teal-800/40">
              <span className="text-[11px] font-semibold text-teal-300 uppercase tracking-widest block mb-2">
                Illustrative Business Estimate
              </span>
              <p className="text-sm text-slate-300 leading-relaxed">
                &ldquo;For an HVAC, roofing, or plumbing service, missing just <span className="text-white font-semibold">2 or 3 calls a month</span> can mean losing <span className="text-teal-300 font-semibold">$800 to $1,800</span> in routine repairs or diagnostic visits. Nexor stops that leakage completely.&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
                <span>Conservative estimate</span>
                <span className="text-slate-300">Based on standard diagnostic ticket averages</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Friction Cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {painPoints.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-[#0f171b]/90 border border-white/[0.06] hover:border-teal-500/30 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/[0.08] flex items-center justify-center text-rose-400 mb-4 group-hover:text-teal-300 group-hover:border-teal-500/30 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-slate-100 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-white/[0.06] text-xs font-medium text-slate-300">
                    <span className="text-rose-400 font-semibold">Result: </span>
                    {item.consequence}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
