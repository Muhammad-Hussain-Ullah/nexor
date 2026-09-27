'use client';

import { useState } from 'react';
import { PhoneCall, Sparkles, Check, ArrowRight, ShieldCheck, PhoneForwarded } from 'lucide-react';

export default function LiveCallBanner() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [status, setStatus] = useState<'idle' | 'calling' | 'success'>('idle');

  const handleTestCallRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim()) return;

    setStatus('calling');
    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  return (
    <section id="hear-it" className="py-20 md:py-24 border-t border-white/[0.08] bg-[#0c1013] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#122227] via-[#0f1b1e] to-[#0c1316] border border-teal-500/40 p-8 sm:p-12 overflow-hidden shadow-2xl shadow-black/60">
          {/* Subtle Ambient Radial Highlight */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 items-center relative">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-500/30 text-teal-300 text-xs font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Live Interactive Voice Hotline</span>
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                Call our AI agent right now and test it for yourself.
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                Experience the latency, natural voice cadence, and intelligent trade diagnostics firsthand. Call from any mobile phone or request a simulated dispatch callback.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href="tel:+18884926396"
                  className="inline-flex items-center gap-2.5 bg-white text-[#0c1013] font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl hover:bg-slate-100 transition-all shadow-md hover:-translate-y-0.5 active:translate-y-0"
                >
                  <PhoneCall className="w-4 h-4 text-teal-600" />
                  <span>Dial (888) 492-6396</span>
                </a>

                <a
                  href="#demo-call"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-teal-300 hover:text-white px-4 py-3 rounded-xl border border-teal-800/60 hover:bg-teal-950/40 transition-colors"
                >
                  <span>Or Play Web Audio Recording</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Instant Test Call Dispatcher */}
            <div className="lg:col-span-5 rounded-2xl bg-black/40 border border-white/[0.08] p-6 backdrop-blur-sm">
              <h3 className="font-display font-semibold text-base text-white mb-2 flex items-center gap-2">
                <PhoneForwarded className="w-4 h-4 text-teal-400" />
                <span>Request a 60-Second Demo Call</span>
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Enter your cell phone number. Nexor will ring you immediately with a simulated HVAC or plumbing intake call.
              </p>

              {status === 'success' ? (
                <div className="p-4 rounded-xl bg-teal-950/80 border border-teal-500/40 text-teal-200 text-xs">
                  <div className="flex items-center gap-2 font-semibold text-teal-300 mb-1">
                    <Check className="w-4 h-4 text-teal-400" />
                    <span>Demo Dispatch Initiated!</span>
                  </div>
                  Please keep your phone line open. Nexor is dialing your test number right now.
                </div>
              ) : (
                <form onSubmit={handleTestCallRequest} className="space-y-3">
                  <div>
                    <label htmlFor="test-phone" className="sr-only">Phone Number</label>
                    <input
                      id="test-phone"
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="(555) 000-0000"
                      required
                      className="w-full bg-[#121a1e] border border-white/[0.08] focus:border-teal-400 text-white text-xs sm:text-sm rounded-xl px-3.5 py-2.5 placeholder-slate-500 outline-none transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'calling'}
                    className="w-full bg-teal-400 hover:bg-teal-300 text-[#0c1013] font-semibold text-xs sm:text-sm py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {status === 'calling' ? (
                      <span>Connecting demo line...</span>
                    ) : (
                      <>
                        <span>Call My Phone Now</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-slate-500 text-center">
                    Automated demo simulation. We never sell or spam your phone number.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
