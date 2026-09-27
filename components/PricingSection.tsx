'use client';

import { ArrowRight, ShieldCheck, Check, Zap } from 'lucide-react';

export default function PricingSection() {
  const plans = [
    {
      name: 'Starter',
      badge: 'Single-Truck / Emerging Team',
      description: 'For businesses just getting started with automated inbound answering and missed-call recovery.',
      features: [
        'Core inbound 24/7 call answering',
        'Standard trade diagnostic playbook',
        'Appointment booking & calendar sync',
        'Instant SMS dispatch with audio recordings',
        'Direct CRM lead log',
        'Dedicated business routing line',
      ],
      popular: false,
    },
    {
      name: 'Growth',
      badge: 'Most Popular for Active Crews',
      description: 'For growing service businesses handling a steady, high volume of daily and after-hours calls.',
      features: [
        'Everything in Starter',
        'High-capacity voice minutes with multi-line rollover',
        'Urgent emergency triage & detection',
        'Instant warm human phone transfer',
        'Deep CRM sync (Jobber, ServiceTitan, GHL)',
        'Technician zone-based dispatch',
        'Automated post-call SMS confirmations to caller',
      ],
      popular: true,
    },
    {
      name: 'Scale',
      badge: 'Multi-Location & High Volume',
      description: 'For multi-location contractors, franchises, and larger teams needing custom automations.',
      features: [
        'Everything in Growth',
        'Custom workflow webhooks & API integration',
        'Multi-branch / territory routing',
        'Custom voice persona & prompt engineering',
        'Dedicated onboarding specialist',
        'Priority technical support & SLA guarantee',
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 border-t border-white/[0.08] bg-[#090d10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-950/60 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Tailored Service Plans</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight text-balance">
            Plans built around your call volume.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Every business runs differently. Get a plan and a quote based on how your phones actually run.
          </p>
        </div>

        {/* Pricing Cards: No hardcoded pricing offerings, focus on Contact Us for Pricing */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? 'bg-gradient-to-b from-[#132227] to-[#0e1619] border-2 border-teal-400/80 shadow-2xl shadow-teal-950/40 -translate-y-1'
                  : 'bg-[#0f171b] border border-white/[0.08] hover:border-white/[0.16]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-teal-400 text-[#0c1013] text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-bold text-xl text-white">{plan.name}</h3>
                  <span className="text-[11px] font-medium text-slate-400">{plan.badge}</span>
                </div>

                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {plan.description}
                </p>

                {/* Custom Pricing Callout */}
                <div className="mb-6 pb-6 border-b border-white/[0.08]">
                  <div className="font-display font-semibold text-lg text-teal-300 tracking-tight">
                    Custom pricing, one phone call away.
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Based on your actual monthly call volume & fleet size.
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Key Features:
                  </div>
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <a
                  href="#contact"
                  className={`w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                    plan.popular
                      ? 'bg-teal-400 text-[#0c1013] hover:bg-teal-300 shadow-md shadow-teal-500/20'
                      : 'bg-white/[0.06] text-white hover:bg-white/[0.12] border border-white/[0.08]'
                  }`}
                >
                  <span>Contact Us for Pricing</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <div className="mt-3 text-center text-[11px] text-slate-500">
                  Quick 10-minute quote tailored to your business.
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Clarification Box */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0f171b] border border-white/[0.06] max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-xs text-slate-400 text-center sm:text-left">
          <ShieldCheck className="w-8 h-8 text-teal-400 shrink-0" />
          <div>
            <span className="font-semibold text-slate-200 block mb-0.5">
              One-time setup fee plus a predictable monthly plan
            </span>
            We walk you through exact pricing on a quick call once we understand your call volume, integrations, and after-hours needs.
          </div>
        </div>
      </div>
    </section>
  );
}
