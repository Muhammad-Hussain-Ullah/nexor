'use client';

import { useState } from 'react';
import { Phone, ArrowRight, Play, CheckCircle2, Shield, CalendarCheck, Zap } from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'hvac' | 'roofing' | 'plumbing'>('hvac');

  const demoScenarios = {
    hvac: {
      trade: 'HVAC Emergency',
      caller: 'Marcus R. (Homeowner)',
      problem: 'Compressor stopped, indoor temp 84°F',
      action: 'Priority Diagnostic scheduled for 4:30 PM today',
      status: 'Synced to Jobber + SMS dispatched to on-call tech',
    },
    roofing: {
      trade: 'Roof Storm Damage',
      caller: 'Elena V. (Property Mgr)',
      problem: 'Active water staining after hail storm',
      action: 'Free drone inspection booked for tomorrow 9:00 AM',
      status: 'Address & claim details logged in GoHighLevel',
    },
    plumbing: {
      trade: 'Plumbing Urgency',
      caller: 'David B. (Homeowner)',
      problem: 'Basement main line backup, needs shutoff guidance',
      action: 'Emergency shutoff instructions given + urgent dispatch',
      status: 'Emergency tech paged via SMS alert',
    },
  };

  return (
    <section id="home" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-teal-500/10 via-emerald-500/5 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* 1. Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-950/60 border border-teal-500/30 text-teal-300 text-xs font-semibold tracking-wide mb-6 backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span>24/7 AI Voice Dispatch for Local Trade & Field Services</span>
            </div>

            {/* 2. Large attention-grabbing headline */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#f8fafc] leading-[1.08] text-balance">
              Never miss the call of your next <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-200 to-teal-100">paying customer</span>.
            </h1>

            {/* 3. Short supporting statement */}
            <p className="mt-6 text-base sm:text-lg text-[#94a3b8] leading-relaxed max-w-xl font-normal">
              Nexor picks up every inbound call 24/7 in under two rings. It diagnoses the customer&apos;s request, books appointments directly onto your calendar, flags genuine emergencies, and updates your CRM in real time.
            </p>

            {/* 4. CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 bg-white text-[#0c1013] font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl hover:bg-slate-100 transition-all duration-200 shadow-lg shadow-white/5 hover:shadow-teal-500/10 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Book a 15-Minute Demo</span>
                <ArrowRight className="w-4 h-4 text-[#0c1013]" />
              </a>

              <a
                href="#demo-call"
                className="inline-flex items-center justify-center gap-2.5 bg-[#142226]/80 text-[#e2e8f0] border border-teal-900/60 hover:border-teal-500/40 font-semibold text-sm sm:text-base px-5 py-3.5 rounded-xl hover:bg-[#1a2d33] transition-all duration-200 shadow-sm hover:-translate-y-0.5"
              >
                <Play className="w-4 h-4 text-teal-400 fill-teal-400/20" />
                <span>Watch Demo Video</span>
              </a>
            </div>

            {/* 5. Supporting social proof / concrete credibility stats */}
            <div className="mt-9 pt-7 border-t border-white/[0.08] w-full grid grid-cols-3 gap-3 sm:gap-6">
              <div>
                <div className="font-display font-bold text-lg sm:text-xl text-white tracking-tight tabular-nums">&lt; 2.0s</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Average pick-up time</div>
              </div>
              <div>
                <div className="font-display font-bold text-lg sm:text-xl text-teal-300 tracking-tight tabular-nums">24 / 7 / 365</div>
                <div className="text-[11px] text-slate-400 mt-0.5">After-hours & weekends</div>
              </div>
              <div>
                <div className="font-display font-bold text-lg sm:text-xl text-white tracking-tight tabular-nums">100%</div>
                <div className="text-[11px] text-slate-400 mt-0.5">CRM call logging</div>
              </div>
            </div>

            {/* Target business notice */}
            <p className="text-xs text-slate-400 mt-4 flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>Engineered specifically for HVAC, roofing, plumbing, electrical, and dental practices.</span>
            </p>
          </div>

          {/* Right Column: Inbound Call 3-Stage Representation (Landscape Layout) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl bg-gradient-to-b from-[#132226] to-[#0d1618] border border-teal-800/40 p-5 sm:p-6 shadow-2xl shadow-black/60 hover-glow">
              {/* Card Header: Live Inbound Call Status & Audio Wave */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <div className="relative flex items-center justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="absolute w-4 h-4 rounded-full bg-emerald-400/40 animate-ping" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-200 block">Inbound Call Routing Architecture</span>
                    <span className="text-[11px] text-emerald-400 font-mono">Live Call Connected · 24/7 Active Dispatch</span>
                  </div>
                </div>

                {/* Wave indicator */}
                <div className="flex items-end gap-1 h-5 px-2.5 py-1 bg-black/40 rounded-md border border-white/[0.06]" aria-label="Audio waveform indicator">
                  <span className="w-1 bg-teal-400 rounded-full animate-wave-bar h-2.5" />
                  <span className="w-1 bg-teal-300 rounded-full animate-wave-bar h-4" style={{ animationDelay: '0.15s' }} />
                  <span className="w-1 bg-emerald-400 rounded-full animate-wave-bar h-3" style={{ animationDelay: '0.3s' }} />
                  <span className="w-1 bg-teal-400 rounded-full animate-wave-bar h-5" style={{ animationDelay: '0.45s' }} />
                  <span className="w-1 bg-teal-300 rounded-full animate-wave-bar h-3.5" style={{ animationDelay: '0.6s' }} />
                </div>
              </div>

              {/* 3 Stages Call Flow: Landscape Horizontal Flow (Caller -> Nexor -> Business) */}
              <div className="my-5 grid grid-cols-1 sm:grid-cols-3 gap-3 items-stretch relative">
                {/* Stage 1: Caller */}
                <div className="flex flex-col justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] transition-all hover:border-white/[0.12]">
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-[10px] font-mono text-teal-400 font-semibold uppercase tracking-wider bg-teal-950/60 px-1.5 py-0.5 rounded border border-teal-500/30">Stage 01</span>
                      <span className="text-[10px] text-slate-400 font-mono">Ring</span>
                    </div>
                    <div className="w-9 h-9 rounded-lg bg-[#0F3D3E] border border-teal-500/40 flex items-center justify-center text-teal-300 mb-2 shadow-sm">
                      <Phone className="w-4 h-4" />
                    </div>
                    <h3 className="font-display font-semibold text-xs sm:text-sm text-white">
                      Caller (Customer)
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                      Dials your existing business number with an emergency.
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-white/[0.04] text-[10px] font-mono text-teal-300/80">
                    &lt; 2s Pick-up →
                  </div>
                </div>

                {/* Stage 2: Nexor */}
                <div className="flex flex-col justify-between p-3.5 rounded-xl bg-teal-950/40 border border-teal-500/40 shadow-lg shadow-teal-950/30">
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-[10px] font-mono text-teal-300 font-semibold uppercase tracking-wider bg-teal-900/60 px-1.5 py-0.5 rounded border border-teal-400/40">Stage 02</span>
                      <span className="text-[10px] text-emerald-400 font-mono bg-emerald-950/80 px-1 py-0.5 rounded">Active</span>
                    </div>
                    <div className="w-9 h-9 rounded-lg bg-teal-500/20 border border-teal-400 flex items-center justify-center text-white mb-2 shadow-md shadow-teal-500/20">
                      <Zap className="w-4 h-4 text-teal-300" />
                    </div>
                    <h3 className="font-display font-semibold text-xs sm:text-sm text-white">
                      Nexor Voice Agent
                    </h3>
                    <p className="text-[11px] text-teal-100/90 mt-1 leading-relaxed">
                      Answers naturally, diagnoses the issue, and books slot.
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-teal-500/20 text-[10px] font-mono text-emerald-300/90">
                    Auto-Dispatches →
                  </div>
                </div>

                {/* Stage 3: Business */}
                <div className="flex flex-col justify-between p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 transition-all hover:border-emerald-500/50">
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-[10px] font-mono text-emerald-300 font-semibold uppercase tracking-wider bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-500/40">Stage 03</span>
                      <span className="text-[10px] text-slate-400 font-mono">Synced</span>
                    </div>
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-300 mb-2 shadow-sm">
                      <CalendarCheck className="w-4 h-4" />
                    </div>
                    <h3 className="font-display font-semibold text-xs sm:text-sm text-white">
                      Your Business
                    </h3>
                    <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                      Confirmed appointment, call audio, and CRM record updated.
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-white/[0.04] text-[10px] font-mono text-emerald-400">
                    ✓ Job Won
                  </div>
                </div>
              </div>

              {/* Landscape Telemetry Strip */}
              <div className="p-2.5 rounded-xl bg-black/40 border border-white/[0.04] flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-300">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Caller ID Verified</span>
                </span>
                <span className="font-mono text-teal-300">Latency: 380ms</span>
                <span className="text-slate-400">Jobber · ServiceTitan · GHL</span>
              </div>

              {/* Card Footer */}
              <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-teal-400" />
                  <span>Works with your existing carrier</span>
                </span>
                <span className="text-teal-400 font-mono font-medium">Automatic Sync</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
