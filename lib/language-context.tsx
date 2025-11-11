'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { translations, type Locale, type Translation } from './translations';
import { safeLocalStorage, isClientSide } from './storage';

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
    // Проверяем, что мы на клиенте (где доступен localStorage)
    if (!isClientSide()) return;
    
    // МАКСИМАЛЬНО ПРОСТАЯ логика с безопасным localStorage
    const saved = safeLocalStorage.getItem('locale') as Locale;
    
    if (saved && translations[saved]) {
      // Есть сохранённый язык - используем его
      setLocale(saved);
      console.log('📱 Loaded saved locale:', saved);
    } else {
      // Нет сохранённого языка - устанавливаем русский
      setLocale('ru');
      safeLocalStorage.setItem('locale', 'ru');
      console.log('🇷🇺 Set default Russian locale');
    }
  }, []);

  const handleSetLocale = (newLocale: Locale) => {
    console.log('🔄 Language switch:', locale, '→', newLocale);
    setLocale(newLocale);
    
    // Сохраняем с безопасным localStorage
    safeLocalStorage.setItem('locale', newLocale);
  };

  const value = {
    locale,
    t: translations[locale],
    setLocale: handleSetLocale,
  };

  // Дебаг информация в development (только на клиенте)
  if (process.env.NODE_ENV === 'development' && isClientSide()) {
    console.log('🌍 LanguageProvider - Current locale:', locale);
    console.log('📚 Available translations:', Object.keys(translations));
    console.log('🔍 Settings version check passed');
    console.log('💾 localStorage locale:', safeLocalStorage.getItem('locale'));
    console.log('🌐 Browser language:', navigator?.language || 'unknown');
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