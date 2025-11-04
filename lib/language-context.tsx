'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { translations, type Locale, type Translation } from './translations';

interface LanguageContextType {
  locale: Locale;
  t: Translation;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    // Получаем язык из localStorage или браузера
    const saved = localStorage.getItem('locale') as Locale;
    if (saved && translations[saved]) {
      setLocale(saved);
    } else {
      // Определяем язык браузера
      const browserLang = navigator.language.split('-')[0] as Locale;
      if (translations[browserLang]) {
        setLocale(browserLang);
      }
    }
  }, []);

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  const value = {
    locale,
    t: translations[locale],
    setLocale: handleSetLocale,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}