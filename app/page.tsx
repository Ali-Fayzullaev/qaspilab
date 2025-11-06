'use client';

import { useLanguage } from '@/lib/language-context';
import { useMemo, Suspense } from 'react';
import dynamic from 'next/dynamic';

// Оптимизированный импорт HeroSection
import HeroSection from '@/components/sections/HeroSection';

// Ленивая загрузка тяжелых секций для улучшения производительности
const AboutSection = dynamic(() => import('@/components/sections/AboutSection'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-900" />
});

const MissionSection = dynamic(() => import('@/components/sections/MissionSectionFixed'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-900" />
});

const WorkflowSection = dynamic(() => import('@/components/sections/WorkflowSection'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-900" />
});

const WhyUsSection = dynamic(() => import('@/components/sections/WhyUsSection'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-900" />
});

const GlobalReachSection = dynamic(() => import('@/components/sections/GlobalReachSection'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-900" />
});

const CTASection = dynamic(() => import('@/components/sections/CTASection'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-900" />
});

export default function Home() {
  const { t } = useLanguage();

  // Мемоизируем разметку для предотвращения ненужных рендеров
  const pageContent = useMemo(() => (
    <div className="relative overflow-x-hidden">
      {/* HeroSection загружается сразу для критического контента */}
      <HeroSection />
      
      {/* Остальные секции с ленивой загрузкой и Suspense */}
      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-900" />}>
        <div id="about" className="scroll-mt-16">
          <AboutSection />
        </div>
      </Suspense>
      
      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-900" />}>
        <div id="mission" className="scroll-mt-16">
          <MissionSection />
        </div>
      </Suspense>
      
      <div id="services" className="scroll-mt-16">
        <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-900" />}>
          <WorkflowSection />
        </Suspense>
        
        <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-900" />}>
          <WhyUsSection />
        </Suspense>
        
        <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-900" />}>
          <GlobalReachSection />
        </Suspense>
      </div>
      
      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-900" />}>
        <div id="contact" className="scroll-mt-16">
          <CTASection />
        </div>
      </Suspense>
    </div>
  ), []);

  return pageContent;
}