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
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [mounted, setMounted] = useState(false);
    const sectionRef = useRef(null);
  // Правильное использование useEffect для отслеживания монтирования
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

  // Определяем текущую тему с учетом монтирования
  const currentTheme = mounted ? theme : 'light';

  // Используем useMemo для стилей, чтобы избежать предупреждения
  const headingStyles = useMemo(() => ({
    backgroundImage: currentTheme === 'dark'
      ? 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #cbd5e1 100%)'
      : 'linear-gradient(135deg, #0f172a 0%, #475569 50%, #64748b 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    willChange: 'transform'
  }), [currentTheme]);

  return (
    <section id="faq" 
 ref={sectionRef}
      className="relative py-24 sm:py-32 transition-all duration-500 overflow-hidden"
      style={{
        background: theme === 'dark' 
          ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
          : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)',
        color: theme === 'dark' ? '#ffffff' : '#1e293b'
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
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 sm:text-lg">
            {t.faq?.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="rounded-3xl border border-slate-200/60 bg-white/70 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-900/70">
            <ul className="divide-y divide-slate-200/70 dark:divide-white/10">
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
                        <h3 className="text-base font-semibold text-slate-900 transition-colors group-hover:text-primary dark:text-white sm:text-lg">
                          {item.question}
                        </h3>
                        <p
                          className={`mt-3 text-sm text-slate-600 transition-all duration-300 ease-in-out dark:text-slate-300 sm:text-base ${
                            isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                          }`}
                          style={{ overflow: 'hidden' }}
                        >
                          {item.answer}
                        </p>
                      </div>
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-transform duration-300 ease-out group-hover:border-primary group-hover:text-primary dark:border-white/10 dark:bg-slate-800 dark:text-slate-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
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