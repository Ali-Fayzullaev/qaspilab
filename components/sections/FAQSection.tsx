// components/sections/FAQSection.tsx
'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from 'next-themes';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const { t } = useLanguage();
  const faqs: FAQItem[] = t.faq?.items ?? [];
  const { theme, resolvedTheme } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Определяем текущую тему после монтирования
  const currentTheme = mounted ? (resolvedTheme || theme) : 'dark';
  const isDark = currentTheme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const backgroundStyles = useMemo(
    () => ({
      background:
        'radial-gradient(circle at top left, rgba(59, 130, 246, 0.12), transparent 40%), radial-gradient(circle at bottom right, rgba(139, 92, 246, 0.12), transparent 45%)',
    }),
    []
  );

  // Используем useMemo для стилей, чтобы избежать предупреждения
  const headingStyles = useMemo(() => ({
    backgroundImage: isDark
      ? 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #cbd5e1 100%)'
      : 'linear-gradient(135deg, #0f172a 0%, #475569 50%, #64748b 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    willChange: 'transform'
  }), [isDark]);

  if (!mounted) {
    return (
      <section 
        ref={sectionRef} 
        className="relative py-24 sm:py-32 transition-colors duration-700 overflow-hidden"
      />
    );
  }

  return (
    <section
      ref={sectionRef} 
      className="relative py-24 sm:py-32 transition-colors duration-700 overflow-hidden"
      style={{
        background: isDark
          ? 'radial-gradient(circle at 30% 30%, #0c1a2d 0%, #1a2d47 50%, #2a3d5a 100%)'
          : 'radial-gradient(circle at 70% 70%, #ffffff 0%, #f0f9ff 50%, #e0f2fe 100%)',
        color: isDark ? '#ffffff' : '#0f172a'
      }}
    >
      <div className="pointer-events-none absolute inset-0 -z-10" style={backgroundStyles} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            {t.faq?.badge}
          </span>
          <h2 
            className="text-5xl md:text-6xl font-black mb-4"
            style={headingStyles}
          >
            {t.faq?.title}
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            {t.faq?.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div
            className={`rounded-3xl shadow-xl backdrop-blur border transition-colors duration-300 ${
              isDark ? 'border-white/10 bg-slate-900/70' : 'border-slate-200/60 bg-white/80'
            }`}
          >
            <ul className={`divide-y ${isDark ? 'divide-white/10' : 'divide-slate-200/70'}`}>
              {faqs.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <li key={`${item.question}-${index}`}>
                    <button
                      type="button"
                      onClick={() => handleToggle(index)}
                      className="group flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-8 sm:py-6"
                    >
                      <div>
                        <h3
                          className={`text-base font-semibold transition-colors group-hover:text-primary sm:text-lg ${
                            isDark ? 'text-white' : 'text-slate-900'
                          }`}
                        >
                          {item.question}
                        </h3>
                        <p
                          className={`mt-3 text-sm transition-all duration-300 ease-in-out sm:text-base ${
                            isDark ? 'text-slate-300' : 'text-slate-600'
                          } ${
                            isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                          }`}
                          style={{ overflow: 'hidden' }}
                        >
                          {item.answer}
                        </p>
                      </div>
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ease-out group-hover:border-primary group-hover:text-primary ${
                          isDark
                            ? 'border border-white/10 bg-slate-800 text-slate-200'
                            : 'border border-slate-200 bg-white text-slate-500'
                        } ${isOpen ? 'rotate-180' : ''}`}
                      >
                        <ChevronDown className="h-5 w-5" />
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}