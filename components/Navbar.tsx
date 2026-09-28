'use client';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isHoveredTop, setIsHoveredTop] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (currentScrollY <= 60) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY <= 75) {
        setIsHoveredTop(true);
      } else if (e.clientY > 90 && !mobileMenuOpen) {
        setIsHoveredTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mobileMenuOpen]);

  const isHeaderShown = visible || isHoveredTop || mobileMenuOpen;

  const navLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Demo Video', href: '#demo-call' },
    { name: 'Industries', href: '#industries' },
    { name: 'ROI Estimator', href: '#roi-calculator' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <div
        onMouseEnter={() => setIsHoveredTop(true)}
        className="fixed top-0 left-0 right-0 h-4 z-40 pointer-events-auto"
        aria-hidden="true"
      />

      <header
        onMouseEnter={() => setIsHoveredTop(true)}
        onMouseLeave={(e) => {
          if (e.clientY > 80 && !mobileMenuOpen) {
            setIsHoveredTop(false);
          }
        }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 transform ${
          isHeaderShown ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        } ${
          scrolled
            ? 'bg-[#0c1013]/95 backdrop-blur-md border-b border-white/[0.08] shadow-xl shadow-black/40'
            : 'bg-[#0c1013]/85 backdrop-blur-sm border-b border-white/[0.04]'
        }`}
      >
        {/* CHANGED: Replaced px-4 sm:px-6 lg:px-8 with pl-0 pr-4 sm:pr-6 lg:pr-8 to clear left outer spacing */}
        <div className="max-w-7xl mx-auto pl-0 pr-4 sm:pr-6 lg:pr-8">
          <div className="flex items-center justify-between h-20">
            {/* BRAND: Removed ml-4 sm:ml-8, removed inner padding, and increased height */}
            <a 
              href="#home" 
              className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-lg p-0 m-0"
            >
              <Image
                src="/images/images.png"
                alt="Nexor"
                width={300}
                height={120}
                priority
                className="h-12 sm:h-16 md:h-20 w-auto object-contain block"
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#94a3b8]" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-teal-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="#demo-call"
                className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 px-2.5 py-2 rounded-lg hover:bg-white/[0.04] transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Demo Video
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#f1f5f9] text-[#0c1013] text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-white transition-all duration-200 shadow-sm hover:shadow-teal-500/10 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="#contact"
                className="sm:hidden text-xs font-semibold bg-[#f1f5f9] text-[#0c1013] px-3 py-1.5 rounded-md"
              >
                Demo
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.05] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/[0.08] bg-[#0c1013]/98 px-5 py-6 space-y-4 shadow-xl">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-300 hover:text-teal-300 py-2 border-b border-white/[0.04] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-2 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-400 px-1 py-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Answers 24/7 · Direct CRM & Calendar sync</span>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-teal-400 text-[#0c1013] text-sm font-semibold py-3 rounded-lg hover:bg-teal-300 transition-colors shadow-sm"
              >
                Book a 15-Min Live Demo
              </a>
            </div>
          </div>
        )}
      </header>
      <div className="h-20" aria-hidden="true" />
    </>
  );
}