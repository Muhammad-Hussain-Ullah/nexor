import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import DemoVideoSection from '@/components/DemoVideoSection';
import RoiCalculator from '@/components/RoiCalculator';
import HowItWorks from '@/components/HowItWorks';
import BeforeAfter from '@/components/BeforeAfter';
import IndustriesSection from '@/components/IndustriesSection';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import LiveCallBanner from '@/components/LiveCallBanner';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0c1013] text-[#f1f5f9] flex flex-col overflow-x-hidden">
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <ProblemSection />
        <DemoVideoSection />
        <RoiCalculator />
        <HowItWorks />
        <BeforeAfter />
        <IndustriesSection />
        <FeaturesSection />
        <PricingSection />
        <LiveCallBanner />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
