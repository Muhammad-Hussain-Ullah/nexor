'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, ArrowRight, Clock } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: 'HVAC',
    callVolume: '100-300 calls/mo',
    crm: 'Jobber / ServiceTitan',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-white/[0.08] bg-[#090e11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Direct Contact Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-950/60 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4">
                <Clock className="w-3.5 h-3.5" />
                <span>15-Minute Live Custom Demo</span>
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight text-balance">
                See how Nexor handles calls for your business.
              </h2>

              <p className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed">
                Tell us about your service lines and fleet size. We will build a customized prompt simulation and show you exactly how it sounds answering real customer questions.
              </p>

              {/* Direct channels */}
              <div className="mt-8 space-y-4 pt-6 border-t border-white/[0.08]">
                <div className="flex items-center gap-3.5 text-sm text-slate-300">
                  <div className="w-9 h-9 rounded-lg bg-teal-950/70 border border-teal-500/30 flex items-center justify-center text-teal-300 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Direct Inquiries</span>
                    <a href="mailto:dispatch@nexorvoice.com" className="font-medium text-white hover:text-teal-300 transition-colors">
                      dispatch@nexorvoice.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 text-sm text-slate-300">
                  <div className="w-9 h-9 rounded-lg bg-teal-950/70 border border-teal-500/30 flex items-center justify-center text-teal-300 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Toll-Free Test Line</span>
                    <a href="tel:+18884926396" className="font-medium text-white hover:text-teal-300 transition-colors">
                      (888) 492-6396
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 text-sm text-slate-300">
                  <div className="w-9 h-9 rounded-lg bg-teal-950/70 border border-teal-500/30 flex items-center justify-center text-teal-300 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Service Coverage</span>
                    <span className="font-medium text-white">
                      Nationwide · Built for Local Service Businesses
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Demo Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0f181c] border border-teal-800/40 p-6 sm:p-9 shadow-2xl shadow-black/50">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300 mx-auto">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white">
                    Demo Request Received!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. A voice specialist from our Austin team is preparing a live audio sample tailored for <span className="text-teal-300 font-semibold">{formData.company}</span>.
                  </p>
                  <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] text-xs text-slate-400 max-w-md mx-auto text-left">
                    <span className="font-semibold text-slate-200 block mb-1">What happens next:</span>
                    1. We configure your trade diagnostic rules (1–2 business hours).<br />
                    2. We email your private calendar link to hear the prototype.<br />
                    3. You test it risk-free before any live call forwarding.
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-teal-300 hover:text-white underline pt-4"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Mike Vance"
                        className="w-full bg-[#121c21] border border-white/[0.08] focus:border-teal-400 text-white text-sm rounded-xl px-3.5 py-2.5 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-company" className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Company Name *
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Vance Comfort HVAC"
                        className="w-full bg-[#121c21] border border-white/[0.08] focus:border-teal-400 text-white text-sm rounded-xl px-3.5 py-2.5 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Business Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="mike@vancecomfort.com"
                        className="w-full bg-[#121c21] border border-white/[0.08] focus:border-teal-400 text-white text-sm rounded-xl px-3.5 py-2.5 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(512) 800-4321"
                        className="w-full bg-[#121c21] border border-white/[0.08] focus:border-teal-400 text-white text-sm rounded-xl px-3.5 py-2.5 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-industry" className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Primary Industry
                      </label>
                      <select
                        id="contact-industry"
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full bg-[#121c21] border border-white/[0.08] focus:border-teal-400 text-white text-sm rounded-xl px-3.5 py-2.5 outline-none transition-colors"
                      >
                        <option value="HVAC">HVAC Services</option>
                        <option value="Roofing">Roofing & Restoration</option>
                        <option value="Plumbing">Plumbing & Drains</option>
                        <option value="Dental">Dental Practice</option>
                        <option value="Electrical">Electrical Contracting</option>
                        <option value="Other">Other Local Service Business</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-volume" className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Monthly Call Volume
                      </label>
                      <select
                        id="contact-volume"
                        value={formData.callVolume}
                        onChange={(e) => setFormData({ ...formData, callVolume: e.target.value })}
                        className="w-full bg-[#121c21] border border-white/[0.08] focus:border-teal-400 text-white text-sm rounded-xl px-3.5 py-2.5 outline-none transition-colors"
                      >
                        <option value="Under 100 calls/mo">Under 100 calls / mo</option>
                        <option value="100-300 calls/mo">100 – 300 calls / mo</option>
                        <option value="300-800 calls/mo">300 – 800 calls / mo</option>
                        <option value="800+ calls/mo">800+ calls / mo (High Volume)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-notes" className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Tell us about your biggest call challenge (Optional)
                    </label>
                    <textarea
                      id="contact-notes"
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g., We miss 10+ calls every weekend when technicians are on call..."
                      className="w-full bg-[#121c21] border border-white/[0.08] focus:border-teal-400 text-white text-sm rounded-xl p-3 outline-none transition-colors resize-none"
                    />
                  </div>

                  {error && (
                    <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-500/30 text-rose-300 text-xs">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl bg-teal-400 hover:bg-teal-300 text-[#0c1013] font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20 disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Reserving Demo Slot...</span>
                    ) : (
                      <>
                        <span>Request Custom 15-Minute Demo</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-500 text-center pt-2">
                    We will never share your email or phone number. Unsubscribe or cancel anytime.
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
