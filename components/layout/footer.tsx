'use client';

import { useLanguage } from '@/lib/language-context';

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="border-t bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold bg-linear-to-right from-violet-600 to-cyan-400 bg-clip-text text-transparent">
              Qaspilab
            </h3>
            <p className="text-muted-foreground mt-2">
              Innovation Laboratory
            </p>
          </div>
          
          <div className="text-sm text-muted-foreground">
            {t.footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
}