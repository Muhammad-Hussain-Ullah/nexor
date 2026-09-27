'use client';

import { Clock, Sliders, PhoneForwarded, Database, MapPin, CheckCircle, Shield } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: Clock,
      title: 'Always Available (24/7/365)',
      description:
        'Handles unlimited simultaneous calls during holiday weekends, post-storm surges, or late-night freeze alerts with zero hold time.',
    },
    {
      icon: Sliders,
      title: 'Built Around Your Real Dispatch Rules',
      description:
        'Configured around your exact service territory zip codes, diagnostic fees, warranty policies, and technician specialties.',
    },
    {
      icon: PhoneForwarded,
      title: 'Intelligent Warm Human Transfer',
      description:
        'When a caller has a life-safety hazard or specifically requests an owner, Nexor seamlessly bridges the live call directly to your on-call cell.',
    },
    {
      icon: Database,
      title: 'Bi-Directional CRM Synchronization',
      description:
        'Directly writes contacts, calendar bookings, call recordings, and diagnostic summaries to GoHighLevel, ServiceTitan, Jobber, and Housecall Pro.',
    },
    {
      icon: MapPin,
      title: 'Local Caller ID & Familiar Voice',
      description:
        'Answers using a local phone presence with natural conversational pacing, eliminating the &ldquo;robotic IVR&rdquo; stigma.',
    },
    {
      icon: Shield,
      title: 'Spam & Telemarketer Shield',
      description:
        'Politely screens and blocks persistent robocallers, merchant loan telemarketers, and SEO cold calls before they ever reach your phone.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-white/[0.08] bg-[#090d10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Asset & Interactive System Flow */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-2xl bg-[#0f171b] border border-white/[0.08] p-5 sm:p-7 shadow-2xl shadow-black/50">
              {/* Header Status */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-display font-semibold text-sm text-white">Automated Dispatch Architecture</span>
                </div>
                <span className="text-teal-300 font-mono text-[11px] bg-teal-950/80 px-2 py-0.5 rounded border border-teal-500/30">
                  Live Sync Active
                </span>
              </div>

              {/* Data Flow Pipeline */}
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between p-3 rounded-lg bg-black/30 border border-white/[0.04]">
                  <span className="text-slate-400">Inbound Call</span>
                  <span className="text-white font-medium">Homeowner Dials Trade Line</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-teal-950/40 border border-teal-500/30">
                  <span className="text-teal-300 font-medium">Nexor AI Agent</span>
                  <span className="text-teal-200">Answers &lt; 2s · Diagnoses · Schedules</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-black/30 border border-white/[0.04]">
                  <span className="text-slate-400">CRM Output</span>
                  <span className="text-emerald-400 font-medium">Jobber / ServiceTitan / GHL Updated</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-black/30 border border-white/[0.04]">
                  <span className="text-slate-400">Crew Notification</span>
                  <span className="text-slate-200 font-medium">Instant SMS with Address & Recording</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Feature List */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-950/60 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <span>Why Trade Companies Choose Nexor</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight text-balance">
              Engineered for the daily reality of field service companies.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
              We did not build another generic AI wrapper. Nexor understands how technicians work, how dispatch schedules fill, and how urgently homeowners need help when equipment breaks down.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {features.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div key={idx} className="p-4 rounded-xl bg-[#0f171b]/70 border border-white/[0.05] hover:border-teal-500/30 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-teal-950/80 border border-teal-500/30 flex items-center justify-center text-teal-300 mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-display font-semibold text-base text-slate-100 mb-1.5">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
