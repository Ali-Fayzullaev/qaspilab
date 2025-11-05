'use client';

import { useLanguage } from '@/lib/language-context';
import HeroSection from '@/components/sections/HeroSection-old';
import AboutSection from '@/components/sections/AboutSection';
import MissionSection from '@/components/sections/MissionSection';
import WorkflowSection from '@/components/sections/WorkflowSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import GlobalReachSection from '@/components/sections/GlobalReachSection';
import CTASection from '@/components/sections/CTASection';
export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="relative">
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <WorkflowSection />
      <WhyUsSection />
      <GlobalReachSection />
      <CTASection />
    </div>
  );
}