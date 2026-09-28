'use client';

import { PhoneCall, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#070b0d] text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <span className="font-display font-bold text-xl text-white tracking-tight">Nexor</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
                24/7 AI voice dispatch built specifically for HVAC, roofing, plumbing, and trade service businesses. Never lose another high-ticket job to voicemail.
              </p>
            </div>
          </div>

          {/* Product Links */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-slate-200 mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#demo-call" className="hover:text-white transition-colors">Demo Video</a></li>
              <li><a href="#roi-calculator" className="hover:text-white transition-colors">ROI Estimator</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Plans & Pricing</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-slate-200 mb-4">
              Trade Playbooks
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#industries" className="hover:text-white transition-colors">HVAC Contractors</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Roofing & Storm Restoration</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Emergency Plumbing</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Dental Emergency Care</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Electrical Dispatch</a></li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="col-span-2 md:col-span-3">
            <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-slate-200 mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-teal-400 shrink-0" />
<a href="mailto:nexortooolz@gmail.com" className="hover:text-white transition-colors">nexortooolz@gmail.com</a>              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <a href="tel:+18884926396" className="hover:text-white transition-colors">(888) 492-6396</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>Nationwide Service · US & Canada</span>
              </li>
            </ul>

            <div className="mt-6">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors py-1.5 px-3 rounded-lg bg-white/[0.04] border border-white/[0.06]"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © 2026 Nexor Technologies, Inc. All rights reserved. Built for trade and field service operators.
          </div>
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#home" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#home" className="hover:text-slate-400 transition-colors">Security & SLA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
