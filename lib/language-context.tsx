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
    // ПРОСТАЯ и НАДЁЖНАЯ логика: русский по умолчанию
    const saved = localStorage.getItem('locale') as Locale;
    
    // Если пользователь УЖЕ выбрал язык сам - используем его выбор
    const userChoseLanguage = localStorage.getItem('user-language-changed') === 'true';
    
    if (saved && translations[saved] && userChoseLanguage) {
      // Пользователь сам выбрал язык - используем его
      console.log('👤 User manually chose language:', saved);
      setLocale(saved);
    } else {
      // Новый пользователь или сброс - ВСЕГДА русский
      console.log('🔧 Setting default Russian language');
      setLocale('ru');
      localStorage.setItem('locale', 'ru');
    }
  }, []);

  // Дополнительная проверка для принудительного установления русского по умолчанию
  useEffect(() => {
    const timer = setTimeout(() => {
      if (locale !== 'ru' && !localStorage.getItem('user-language-changed')) {
        console.log('🔧 Force setting Russian as default language');
        setLocale('ru');
        localStorage.setItem('locale', 'ru');
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [locale]);

  const handleSetLocale = (newLocale: Locale) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('🌍 Language changed from', locale, 'to', newLocale);
    }
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
    localStorage.setItem('user-language-changed', 'true'); // Отмечаем, что пользователь сам выбрал язык
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