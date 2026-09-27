'use client';

import { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

interface TradePreset {
  name: string;
  defaultTicket: number;
}

const TRADE_PRESETS: Record<string, TradePreset> = {
  hvac: { name: 'HVAC Services', defaultTicket: 650 },
  roofing: { name: 'Roofing & Repairs', defaultTicket: 1200 },
  plumbing: { name: 'Plumbing & Drains', defaultTicket: 520 },
  dental: { name: 'Dental Practice', defaultTicket: 350 },
  electrical: { name: 'Electrical Contracting', defaultTicket: 480 },
};

export default function RoiCalculator() {
  const [trade, setTrade] = useState<string>('hvac');
  const [avgTicket, setAvgTicket] = useState<number>(650);
  const [missedPerWeek, setMissedPerWeek] = useState<number>(5);
  const [closeRate, setCloseRate] = useState<number>(40); // 40% close rate on answered calls

  const handleTradeChange = (newTrade: string) => {
    setTrade(newTrade);
    setAvgTicket(TRADE_PRESETS[newTrade].defaultTicket);
  };

  // Monthly calculations
  const totalMissedMonthly = missedPerWeek * 4.2;
  const potentialRecoveredJobs = Math.round(totalMissedMonthly * (closeRate / 100));
  const estimatedRevenue = potentialRecoveredJobs * avgTicket;

  return (
    <section id="roi-calculator" className="py-20 md:py-28 border-t border-white/[0.08] bg-[#090e11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context & Explanations */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-950/60 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Calculator className="w-3.5 h-3.5" />
              <span>Realistic Revenue Impact Model</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight text-balance">
              Calculate the potential value of calls you are missing right now.
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed">
              We do not make inflated promises like &ldquo;10x growth guaranteed.&rdquo; Instead, run the simple arithmetic based on your actual average ticket and how many calls slip through after-hours or when your crew is in the field.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#0f171b] border border-white/[0.05]">
                <ShieldCheck className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-300">
                  <span className="font-semibold text-white">Conservative by design: </span>
                  We assume a standard 35%–45% quote conversion rate—not 100%. Even recovering just 4 additional jobs per month often pays for Nexor many times over.
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#0f171b] border border-white/[0.05]">
                <HelpCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-400">
                  <span className="font-semibold text-slate-300">Where do missed calls come from? </span>
                  Lunch hours, busy phone lines, Friday 5:15 PM furnace failures, and Sunday morning water leaks when no one is at the desk.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Calculator Box */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-[#0f181c] border border-teal-800/40 p-6 sm:p-8 shadow-2xl shadow-black/50">
              <h3 className="font-display font-semibold text-xl text-white mb-6">
                Your Service Parameters
              </h3>

              {/* Trade Selector */}
              <div className="mb-6">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                  Select Your Industry
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {Object.entries(TRADE_PRESETS).map(([key, data]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => handleTradeChange(key)}
                      className={`text-xs font-medium py-2 px-3 rounded-lg border transition-all truncate text-left ${
                        trade === key
                          ? 'bg-teal-500/20 text-teal-300 border-teal-500/40 shadow-sm'
                          : 'bg-black/30 text-slate-400 border-white/[0.05] hover:text-slate-200 hover:border-white/[0.1]'
                      }`}
                    >
                      {data.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider 1: Average Ticket Value */}
              <div className="mb-6">
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-slate-300 font-medium">Average Job / Invoice Value</span>
                  <span className="font-mono font-bold text-teal-300 text-sm tabular-nums">
                    ${avgTicket.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="3500"
                  step="50"
                  value={avgTicket}
                  onChange={(e) => setAvgTicket(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>$200</span>
                  <span>$1,800</span>
                  <span>$3,500</span>
                </div>
              </div>

              {/* Slider 2: Estimated Missed Calls Per Week */}
              <div className="mb-6">
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-slate-300 font-medium">Estimated Missed / Rollover Calls per Week</span>
                  <span className="font-mono font-bold text-teal-300 text-sm tabular-nums">
                    ~{missedPerWeek} calls / week
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="25"
                  step="1"
                  value={missedPerWeek}
                  onChange={(e) => setMissedPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>2 calls</span>
                  <span>12 calls</span>
                  <span>25 calls</span>
                </div>
              </div>

              {/* Slider 3: Close rate */}
              <div className="mb-6">
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-slate-300 font-medium">Booking / Quote Conversion Rate</span>
                  <span className="font-mono font-bold text-teal-300 text-sm tabular-nums">
                    {closeRate}% conversion
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="70"
                  step="5"
                  value={closeRate}
                  onChange={(e) => setCloseRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>20% (Conservative)</span>
                  <span>45% (Typical)</span>
                  <span>70% (High Urgency)</span>
                </div>
              </div>

              {/* Results Display */}
              <div className="p-5 rounded-xl bg-gradient-to-br from-teal-950/70 via-[#101b1e] to-black/80 border border-teal-500/30">
                <span className="text-[11px] font-semibold text-teal-400 uppercase tracking-wider block mb-1">
                  Illustrative Monthly Recovery
                </span>

                <div className="flex items-baseline justify-between mt-2 flex-wrap gap-2">
                  <div>
                    <div className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight tabular-nums">
                      +${estimatedRevenue.toLocaleString()}
                      <span className="text-sm font-normal text-slate-400 ml-1.5">/ month</span>
                    </div>
                    <div className="text-xs text-slate-300 mt-1">
                      Estimated from ~<span className="text-teal-300 font-semibold">{potentialRecoveredJobs} extra completed jobs</span> monthly.
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white text-[#0c1013] px-3.5 py-2 rounded-lg hover:bg-slate-100 transition-colors shadow-sm"
                  >
                    <span>Capture This</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 mt-3 text-center">
                * Illustrative estimation based on user-supplied variables. Actual results depend on call volume, technician dispatch availability, and market pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
