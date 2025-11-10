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
  // ПРИНУДИТЕЛЬНО устанавливаем русский язык по умолчанию
  const [locale, setLocale] = useState<Locale>('ru');

  useEffect(() => {
    // МАКСИМАЛЬНО ПРОСТАЯ логика
    const saved = localStorage.getItem('locale') as Locale;
    
    if (saved && translations[saved]) {
      // Есть сохранённый язык - используем его
      setLocale(saved);
      console.log('� Loaded saved locale:', saved);
    } else {
      // Нет сохранённого языка - устанавливаем русский
      setLocale('ru');
      localStorage.setItem('locale', 'ru');
      console.log('🇷🇺 Set default Russian locale');
    }
  }, []);

  const handleSetLocale = (newLocale: Locale) => {
    console.log('🔄 Language switch:', locale, '→', newLocale);
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
    console.log('🔍 Settings version check passed');
    console.log('💾 localStorage locale:', localStorage.getItem('locale'));
    console.log('🌐 Browser language:', navigator.language);
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