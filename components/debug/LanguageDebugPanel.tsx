'use client';

import { useLanguage } from '@/lib/language-context';

/**
 * Тестовый компонент для проверки переводов MissionSection
 */
export default function LanguageDebugPanel() {
  const { locale, t, setLocale } = useLanguage();

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 bg-black/90 text-white p-4 rounded-lg text-xs max-w-sm z-50">
      <h3 className="font-bold mb-2">🌍 Language Debug Panel</h3>
      
      <div className="mb-2">
        <strong>Current locale:</strong> {locale}
      </div>
      
      <div className="mb-2">
        <strong>Available locales:</strong> en, ru, kk
      </div>
      
      <div className="mb-2">
        <strong>Mission Section Title:</strong>
        <div className="text-xs bg-gray-800 p-1 mt-1 rounded">
          {t.missionSection?.title || 'NOT FOUND'}
        </div>
      </div>
      
      <div className="mb-3">
        <strong>Switch Language:</strong>
        <div className="flex gap-2 mt-1">
          <button 
            onClick={() => setLocale('en')} 
            className={`px-2 py-1 rounded text-xs ${locale === 'en' ? 'bg-blue-600' : 'bg-gray-600'}`}
          >
            EN
          </button>
          <button 
            onClick={() => setLocale('ru')} 
            className={`px-2 py-1 rounded text-xs ${locale === 'ru' ? 'bg-blue-600' : 'bg-gray-600'}`}
          >
            RU
          </button>
          <button 
            onClick={() => setLocale('kk')} 
            className={`px-2 py-1 rounded text-xs ${locale === 'kk' ? 'bg-blue-600' : 'bg-gray-600'}`}
          >
            KK
          </button>
        </div>
      </div>
      
      <div className="text-xs text-gray-400">
        localStorage: {typeof window !== 'undefined' ? localStorage.getItem('locale') : 'SSR'}
      </div>
    </div>
  );
}