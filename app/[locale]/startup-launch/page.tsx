'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from 'next-themes';
import StartupHeroSection from '@/components/sections/startup/StartupHeroSection';
import WhyImportantSection from '@/components/sections/startup/WhyImportantSection';
import HowWeWorkSection from '@/components/sections/startup/HowWeWorkSection';
import WhatClientGetsSection from '@/components/sections/startup/WhatClientGetsSection';
import WorkFormatSection from '@/components/sections/startup/WorkFormatSection';
import PricingSection from '@/components/sections/startup/PricingSection';
import WhyQaspilabSection from '@/components/sections/startup/WhyQaspilabSection';
import StartupFAQSection from '@/components/sections/startup/StartupFAQSection';
import CTASection from '@/components/sections/CTASection';

export default function StartupLaunchPage() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <StartupHeroSection />
      
      {/* Why Important Section */}
      <WhyImportantSection />
      
      {/* How We Work Section */}
      <HowWeWorkSection />
      
      {/* What Client Gets Section */}
      <WhatClientGetsSection />
      
      {/* Work Format Section */}
      <WorkFormatSection />
      
      {/* Pricing Section */}
      <PricingSection />
      
      {/* Why Qaspilab Section */}
      <WhyQaspilabSection />
      
      {/* FAQ Section */}
      <StartupFAQSection />
      
      {/* CTA Section */}
      <CTASection />
    </main>
  );
}