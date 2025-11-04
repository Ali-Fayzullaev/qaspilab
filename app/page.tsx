'use client';

import { useLanguage } from '@/lib/language-context';
import FadeIn from '@/components/animations/fade-in';
import { Button } from '@/components/ui/button';
import DesignSystem from '@/components/design-system';

export default function Home() {
  const { t } = useLanguage();
  
  return (
    <>
      {/* Hero Section */}
      <div className="flex min-h-screen items-center justify-center bg-background hero-bg">
        <main className="flex flex-col items-center justify-center py-32 px-8 text-center">
          <FadeIn delay={0.1}>
            <h1 className="hero-glow text-h1 mb-6">
              {t.hero.title}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-h2 text-muted-foreground mb-6">
              {t.hero.subtitle}
            </h2>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-body text-muted-foreground max-w-md mb-8">
              {t.hero.description}
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg">
                {t.hero.cta}
              </Button>
              <Button variant="outline-neon" size="lg">
                Узнать больше
              </Button>
            </div>
          </FadeIn>
        </main>
      </div>
      
      {/* Design System Demo */}
      <DesignSystem />
    </>
  );
}