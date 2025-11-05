'use client';

import { useLanguage } from '@/lib/language-context';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Languages } from 'lucide-react';
import type { Locale } from '@/lib/translations';

const locales = [
  { code: 'en' as Locale, name: 'English' },
  { code: 'ru' as Locale, name: 'Русский' },
  { code: 'kk' as Locale, name: 'Қазақша' },
];

export default function Header() {
  const { t, locale, setLocale } = useLanguage();

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold bg-linear-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
            Qaspilab
          </h1>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-foreground hover:text-violet-600 transition-colors">
              {t.common.home}
            </a>
            <a href="#" className="text-foreground hover:text-violet-600 transition-colors">
              {t.common.about}
            </a>
            <a href="#" className="text-foreground hover:text-violet-600 transition-colors">
              {t.common.services}
            </a>
            <a href="#" className="text-foreground hover:text-violet-600 transition-colors">
              {t.common.contact}
            </a>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Переключатель темы */}
          <ThemeToggle />

          {/* Переключатель языка */}
          <div className="relative group">
            <Button variant="outline" size="sm" className="flex items-center space-x-2">
              <Languages className="w-4 h-4" />
              <span>{locales.find(l => l.code === locale)?.name}</span>
            </Button>
            <div className="absolute right-0 top-full mt-2 w-32 bg-background border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              {locales.map((localeOption) => (
                <button
                  key={localeOption.code}
                  onClick={() => setLocale(localeOption.code)}
                  className={`w-full px-3 py-2 text-left hover:bg-muted transition-colors first:rounded-t-md last:rounded-b-md ${
                    locale === localeOption.code ? 'bg-muted' : ''
                  }`}
                >
                  {localeOption.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}