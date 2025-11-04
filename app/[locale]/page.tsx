import { useTranslations } from 'next-intl';
import FadeIn from '@/components/animations/fade-in';
import { Button } from '@/components/ui/button';

export default function Home() {
  const t = useTranslations();
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <main className="flex flex-col items-center justify-center py-32 px-8 text-center">
        <FadeIn delay={0.1}>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-violet to-neon-blue bg-clip-text text-transparent mb-4">
            {t('hero.title')}
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <h2 className="text-2xl text-muted-foreground mb-6">
            {t('hero.subtitle')}
          </h2>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="text-lg text-muted-foreground max-w-md mb-8">
            {t('hero.description')}
          </p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <Button size="lg" className="bg-violet hover:bg-violet/90 text-violet-foreground">
            {t('hero.cta')}
          </Button>
        </FadeIn>
      </main>
    </div>
  );
}