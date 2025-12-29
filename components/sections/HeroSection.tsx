'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  CheckCircle2,
  Star,
  TrendingUp,
  Target,
  MousePointerClick
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function StartupHeroSection() {
  const { t } = useLanguage();
  const { theme, resolvedTheme } = useTheme();
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true,
    amount: 0.1,
    margin: "-50px"
  });

  const [mounted, setMounted] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <section ref={sectionRef} className="h-screen bg-[#1C233A]" />;
  }

  const isDarkMode = theme === 'dark' || resolvedTheme === 'dark';

  // Частицы для анимации
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 5 + 3,
    delay: Math.random() * 2
  }));

  // Преимущества
  const benefits = [
    { icon: Zap, text: "Быстрый запуск", color: "text-yellow-400" },
    { icon: Target, text: "Точный результат", color: "text-green-400" },
    { icon: TrendingUp, text: "Рост бизнеса", color: "text-blue-400" },
    { icon: CheckCircle2, text: "Гарантия качества", color: "text-purple-400" }
  ];

  // Создаем строку для backgroundImage
  const geometricPattern = isDarkMode 
    ? `linear-gradient(30deg, #334155 12%, transparent 12.5%, transparent 87%, #334155 87.5%, #334155),
       linear-gradient(150deg, #334155 12%, transparent 12.5%, transparent 87%, #334155 87.5%, #334155),
       linear-gradient(30deg, #334155 12%, transparent 12.5%, transparent 87%, #334155 87.5%, #334155),
       linear-gradient(150deg, #334155 12%, transparent 12.5%, transparent 87%, #334155 87.5%, #334155),
       linear-gradient(60deg, #33415577 25%, transparent 25.5%, transparent 75%, #33415577 75%, #33415577),
       linear-gradient(60deg, #33415577 25%, transparent 25.5%, transparent 75%, #33415577 75%, #33415577)`
    : `linear-gradient(30deg, #cbd5e1 12%, transparent 12.5%, transparent 87%, #cbd5e1 87.5%, #cbd5e1),
       linear-gradient(150deg, #cbd5e1 12%, transparent 12.5%, transparent 87%, #cbd5e1 87.5%, #cbd5e1),
       linear-gradient(30deg, #cbd5e1 12%, transparent 12.5%, transparent 87%, #cbd5e1 87.5%, #cbd5e1),
       linear-gradient(150deg, #cbd5e1 12%, transparent 12.5%, transparent 87%, #cbd5e1 87.5%, #cbd5e1),
       linear-gradient(60deg, #cbd5e1 25%, transparent 25.5%, transparent 75%, #cbd5e1 75%, #cbd5e1),
       linear-gradient(60deg, #cbd5e1 25%, transparent 25.5%, transparent 75%, #cbd5e1 75%, #cbd5e1)`;

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: isDarkMode ? '#1C233A' : '#ffffff',
      }}
    >
      {/* Основной фоновый градиент */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-100"
          style={{
            background: isDarkMode
              ? 'linear-gradient(135deg, #1C233A 0%, #1C2739 50%, #0F172A 100%)'
              : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)'
          }}
        />
        
        {/* Геометрический паттерн - упрощенная версия */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: geometricPattern,
            backgroundSize: '80px 140px',
            backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)'
          }}
        />
      </div>

      {/* Радиальные градиенты для создания глубины */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{
            background: isDarkMode 
              ? `radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.15) 0%, transparent 50%),
                 radial-gradient(circle at 80% 20%, rgba(124, 58, 237, 0.15) 0%, transparent 50%),
                 radial-gradient(circle at 40% 80%, rgba(14, 165, 233, 0.15) 0%, transparent 50%)`
              : 'none'
          }}
        />
      </div>

      {/* Плавающие элементы */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(particle.id) * 50, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay
            }}
          />
        ))}

        {/* Крупные плавающие элементы */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, transparent 70%)'
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Бейдж */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              ПРЕМИУМ СТАРТАП РЕШЕНИЯ
            </span>
            <Zap className="w-4 h-4 text-purple-400" />
          </motion.div>

          {/* Главный заголовок */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight mb-6">
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {t.hero.title.split(' ').slice(0, -1).join(' ')}
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {t.hero.title.split(' ').slice(-1)}
              </span>
            </h1>
          </motion.div>

          {/* Подзаголовок */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground/80 mb-6">
              <span className="relative">
                {t.hero.subtitle}
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 1, delay: 1 }}
                />
              </span>
            </h2>
          </motion.div>

          {/* Описание */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-6">
              {t.hero.slogan}
            </p>
            <p className="text-base sm:text-lg text-muted-foreground/80">
              {t.hero.description}
            </p>
          </motion.div>

          {/* Ценовой блок */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ 
              duration: 0.8, 
              delay: 0.7,
              type: "spring",
              stiffness: 100
            }}
            className="relative mb-12"
          >
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl overflow-hidden">
              {/* Акцентные элементы */}
              <div className="absolute -top-1 -right-1 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30" />
              <div className="absolute -bottom-1 -left-1 w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-30" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  <span className="text-lg font-semibold text-foreground">
                    Специальное предложение
                  </span>
                </div>
                
                <div className="text-5xl sm:text-6xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {t.hero.priceFrom}
                  </span>
                </div>
                
                <p className="text-muted-foreground/80 mb-6">
                  {t.hero.paymentTerms}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Кнопки */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="#contact">
              <Button
              size="lg"
              className={cn(
                "relative px-10 py-6 text-lg font-bold rounded-xl cursor-pointer",
                "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
                "shadow-lg hover:shadow-xl hover:shadow-blue-500/25",
                "transition-all duration-300 transform hover:scale-105 active:scale-95",
                "group min-h-[56px]"
              )}
              onMouseEnter={() => setHoveredButton('primary')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <span className="relative z-10 flex items-center gap-2">
                {t.hero.cta}
                <motion.div
                  animate={hoveredButton === 'primary' ? { x: 5 } : { x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </span>
              
              {/* Эффект свечения */}
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 blur-xl"
                animate={{ opacity: hoveredButton === 'primary' ? [0, 0.3, 0] : 0 }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </Button>

            </a>
            <a href="#contact">
              <Button
              variant="outline"
              size="lg"
              className={cn(
                "px-10 py-6 text-lg font-bold rounded-xl border-2 cursor-pointer",
                "bg-transparent border-blue-500/30 hover:border-blue-500/50",
                "text-foreground hover:text-blue-400",
                "backdrop-blur-sm hover:bg-blue-500/10",
                "transition-all duration-300 transform hover:scale-105 active:scale-95",
                "group min-h-[56px]"
              )}
              onMouseEnter={() => setHoveredButton('secondary')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <span className="flex items-center gap-2">
                {t.hero.learnMore}
                <MousePointerClick className="w-4 h-4 group-hover:animate-pulse" />
              </span>
            </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Дополнительные эффекты при скролле */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 2, delay: 0.5 }}
      />
    </section>
  );
}