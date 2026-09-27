'use client';

import { useState } from 'react';
import { Flame, Home, Droplet, Smile, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

export default function IndustriesSection() {
  const [activeTrade, setActiveTrade] = useState<number>(0);

  const industries = [
    {
      name: 'HVAC Services',
      icon: Flame,
      tag: 'Heating & Cooling',
      headline: 'Capture high-ticket replacement & emergency repair calls.',
      description:
        'When extreme weather hits, phone lines surge. Nexor handles hundreds of simultaneous calls, collects equipment age and symptoms, communicates diagnostic fees, and schedules technicians based on service zones.',
      workflows: [
        'No-heat & AC breakdown emergency triage',
        'Transparent dispatch fee explanation',
        'Seasonal maintenance & tune-up scheduling',
        'Filter/compressor detail collection for technician',
      ],
      intakeSpecs: [
        { label: 'Diagnostic Intake', detail: 'Collects system age, brand, indoor temp & symptom' },
        { label: 'Urgency Tiering', detail: 'High emergency (infants/elderly) vs standard diagnostic' },
        { label: 'Calendar Action', detail: 'Matches nearest active service territory zone' },
      ],
    },
    {
      name: 'Roofing & Restoration',
      icon: Home,
      tag: 'Storm & Inspection',
      headline: 'Qualify post-storm roof leads before competitors do.',
      description:
        'Following hail or wind storms, homeowners call 3–4 roofers within minutes. Nexor answers immediately, verifies property ownership, captures storm damage dates, and schedules drone roof inspections.',
      workflows: [
        'Post-hail & high-wind storm damage intake',
        'Insurance claim status identification',
        'Drone inspection calendar booking',
        'Commercial vs residential roof segmentation',
      ],
      intakeSpecs: [
        { label: 'Damage Intake', detail: 'Logs storm date, leak location & ceiling discoloration' },
        { label: 'Lead Qualification', detail: 'Identifies homeownership & active insurance claim status' },
        { label: 'Calendar Action', detail: 'Schedules complimentary estimator drone inspection' },
      ],
    },
    {
      name: 'Plumbing & Drains',
      icon: Droplet,
      tag: 'Urgent & Emergency',
      headline: 'Give shutoff advice and dispatch on-call master plumbers.',
      description:
        'Burst pipes and sewer backups need immediate human attention. Nexor provides immediate reassurance and shutoff instructions, while alerting your on-call crew via priority SMS.',
      workflows: [
        'Immediate main water shutoff valve coaching',
        'Water heater rupture emergency dispatch',
        'Drain cleaning & camera inspection scheduling',
        'Direct warm phone patch to on-call plumber',
      ],
      intakeSpecs: [
        { label: 'Damage Mitigation', detail: 'Provides instant cold water / main shutoff guidance' },
        { label: 'Emergency Paging', detail: 'Alerts on-call technician van via priority SMS' },
        { label: 'Calendar Action', detail: 'Holds express 45-minute emergency arrival window' },
      ],
    },
    {
      name: 'Dental Practices',
      icon: Smile,
      tag: 'Patient Care',
      headline: 'Book appointments and triage dental emergencies 24/7.',
      description:
        'Patients frequently suffer acute dental pain at night or need to reschedule appointments after work hours. Nexor answers with empathy, books openings into your practice software, and flags true emergencies.',
      workflows: [
        'Severe toothache & trauma after-hours triage',
        'New patient registration & insurance intake',
        'Automated rescheduling without receptionist hold',
        'Warm transfer to doctor for critical emergencies',
      ],
      intakeSpecs: [
        { label: 'Patient Triage', detail: 'Screens pain severity, swelling, bleeding & duration' },
        { label: 'Software Sync', detail: 'Checks open practice calendar chairs in real time' },
        { label: 'Escalation', detail: 'Direct warm transfer to on-call dentist for trauma' },
      ],
    },
    {
      name: 'Electrical Contractors',
      icon: Zap,
      tag: 'Safety & Power',
      headline: 'Triage panel trips, generator installs, and EV chargers.',
      description:
        'From partial power outages to commercial rewiring quotes, Nexor collects electrical panel specs, verifies emergency safety risks, and routes high-margin commercial jobs directly to estimators.',
      workflows: [
        'Panel breaker tripping & burning smell triage',
        'EV charger installation quote booking',
        'Standby generator service scheduling',
        'Commercial tenant dispatch routing',
      ],
      intakeSpecs: [
        { label: 'Safety Screening', detail: 'Screens for burning odors, sparking, or water contact' },
        { label: 'Commercial Routing', detail: 'Tags high-margin projects for senior estimator review' },
        { label: 'Calendar Action', detail: 'Books on-site load evaluation & breaker inspection' },
      ],
    },
  ];

  const current = industries[activeTrade];
  const Icon = current.icon;

  return (
    <section id="industries" className="py-20 md:py-28 border-t border-white/[0.08] bg-[#0c1013] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-950/60 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Tailored Industry Playbooks</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight text-balance">
            Built for businesses that run on the phone.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Nexor is not a generic chatbot. Every voice configuration is customized with your industry’s terminology, diagnostic logic, and dispatch rules.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {industries.map((ind, idx) => {
            const TabIcon = ind.icon;
            const isSelected = activeTrade === idx;
            return (
              <button
                key={ind.name}
                type="button"
                onClick={() => setActiveTrade(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                  isSelected
                    ? 'bg-teal-500/20 text-teal-300 border-teal-400/50 shadow-md shadow-teal-950/30'
                    : 'bg-[#0f171b] text-slate-400 border-white/[0.06] hover:text-slate-200 hover:border-white/[0.12]'
                }`}
              >
                <TabIcon className="w-4 h-4" />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Showcase Card */}
        <div className="rounded-2xl bg-[#0f171b] border border-white/[0.08] p-6 sm:p-10 shadow-xl shadow-black/40">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Deep Dive */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-teal-400 bg-teal-950/60 px-3 py-1 rounded-md border border-teal-800/40 mb-3">
                <Icon className="w-3.5 h-3.5" />
                <span>{current.tag} Protocol</span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight mb-4">
                {current.headline}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {current.description}
              </p>

              <div className="space-y-2.5 mb-6">
                {current.workflows.map((wf, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>{wf}</span>
                  </div>
                ))}
              </div>

              <div className="pt-5 border-t border-white/[0.08] flex items-center justify-between">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-teal-300 hover:text-white transition-colors"
                >
                  <span>Customize for your {current.name} fleet</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Inbound Dispatch Specifications (Replaces fake reviews/context) */}
            <div className="lg:col-span-5 rounded-xl bg-gradient-to-b from-[#132226] to-[#0d1618] border border-teal-800/30 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-semibold text-teal-400 uppercase tracking-wider block">
                    Automated Dispatch Protocol
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                    24/7 Active
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  {current.intakeSpecs.map((spec, i) => (
                    <div key={i} className="p-3 rounded-lg bg-black/30 border border-white/[0.04]">
                      <span className="text-[10px] font-mono text-teal-300/80 uppercase block mb-1">
                        {spec.label}
                      </span>
                      <p className="text-xs text-slate-200 font-medium leading-relaxed">
                        {spec.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08] space-y-2.5 text-xs text-slate-300">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Carrier Setup</span>
                  <span className="font-medium text-white">Call Forwarding (15 mins)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Software Sync</span>
                  <span className="font-medium text-white">Jobber · ServiceTitan · GHL</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Human Escalation</span>
                  <span className="font-medium text-emerald-400">Instant Warm Transfer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
