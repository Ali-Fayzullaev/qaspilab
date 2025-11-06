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
  // По умолчанию русский для Казахстана
  const [locale, setLocale] = useState<Locale>('ru');

  useEffect(() => {
    // Получаем язык из localStorage или определяем автоматически
    const saved = localStorage.getItem('locale') as Locale;
    if (saved && translations[saved]) {
      setLocale(saved);
    } else {
      // Улучшенное определение языка браузера
      const browserLang = navigator.language.toLowerCase();
      let detectedLocale: Locale = 'ru'; // По умолчанию русский для Казахстана
      
      // Проверяем полный код языка и его варианты
      if (browserLang.startsWith('kk') || browserLang.includes('kz')) {
        detectedLocale = 'kk'; // Казахский
      } else if (browserLang.startsWith('en')) {
        detectedLocale = 'en'; // Английский
      } else if (browserLang.startsWith('ru')) {
        detectedLocale = 'ru'; // Русский
      }
      
      // Дополнительная проверка для стран
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (timezone.includes('Almaty') || timezone.includes('Astana')) {
        detectedLocale = 'kk'; // Казахское время = казахский язык
      }
      
      setLocale(detectedLocale);
      // Сохраняем автоматически определенный язык
      localStorage.setItem('locale', detectedLocale);
    }
  }, []);

  const handleSetLocale = (newLocale: Locale) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('🌍 Language changed from', locale, 'to', newLocale);
    }
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  const value = {
    locale,
    t: translations[locale],
    setLocale: handleSetLocale,
  };

  // Дебаг информация в development
  if (process.env.NODE_ENV === 'development') {
    console.log('🌍 LanguageProvider - Current locale:', locale);
    console.log('📚 Available translations:', Object.keys(translations));
    console.log('🔍 Current translation object:', translations[locale]);
  }

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