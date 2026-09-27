'use client';

import { Play, Volume2, ShieldCheck } from 'lucide-react';

export default function DemoVideoSection() {
  return (
    <section id="demo-call" className="py-20 md:py-28 border-t border-white/[0.08] bg-[#0c1013] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-950/60 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Volume2 className="w-3.5 h-3.5" />
            <span>Unscripted Call Recording</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight text-balance">
            Watch Nexor handle a real inbound call.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            See how the AI voice agent answers on the second ring, qualifies the caller’s needs, checks schedule availability, and logs the appointment into the dispatch system.
          </p>
        </div>

        {/* Video Placeholder Container covering full width */}
        <div className="w-full max-w-5xl mx-auto">
          <div className="relative aspect-video w-full rounded-2xl md:rounded-3xl bg-gradient-to-b from-[#111c21] via-[#0d161a] to-[#080d0f] border border-teal-800/40 overflow-hidden shadow-2xl shadow-black/80 flex flex-col items-center justify-center p-6 sm:p-10 group hover-glow">
            {/* Ambient Background Waveform Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent pointer-events-none" />

            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 text-xs font-mono text-slate-400 bg-black/50 px-3 py-1.5 rounded-lg border border-white/[0.08] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>LIVE CALL RECORDING DEMO</span>
            </div>

            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-xs font-mono text-teal-400 bg-teal-950/60 px-3 py-1.5 rounded-lg border border-teal-500/30 backdrop-blur-md">
              <span>UNSCRIPTED · INBOUND</span>
            </div>

            {/* Play Button Trigger */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <button
                type="button"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#f1f5f9] text-[#0c1013] flex items-center justify-center hover:bg-white hover:scale-105 transition-all duration-300 shadow-2xl shadow-teal-400/20 active:scale-95 group/btn"
                aria-label="Play demo video"
              >
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1 text-[#0c1013] group-hover/btn:text-teal-600 transition-colors" />
              </button>
              <span className="mt-5 font-display font-semibold text-lg sm:text-xl text-white tracking-tight">
                [DEMO VIDEO WILL BE ADDED HERE]
              </span>
              <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-md">
                Full unedited recording: Saturday after-hours HVAC failure call handled from pickup to technician calendar dispatch.
              </p>
            </div>

            {/* Video Player Meta Footer Bar */}
            <div className="absolute bottom-4 inset-x-4 sm:bottom-6 sm:inset-x-6 flex items-center justify-between text-xs text-slate-400 bg-black/60 px-4 py-2.5 rounded-xl border border-white/[0.06] backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="font-mono text-teal-300 font-medium">01:42</span>
                <span className="hidden sm:inline text-slate-500">·</span>
                <span className="hidden sm:inline">Apex Air Solutions Intake</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                <span>Audio + CRM Sync Demo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
