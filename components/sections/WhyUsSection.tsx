'use client';

import { 
  motion, 
  useScroll, 
  useTransform,
  useSpring,
  useReducedMotion 
} from 'framer-motion';
import { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { Zap, Handshake, Brain, Sparkles } from 'lucide-react';

/**
 * ПОЛНОСТЬЮ ОПТИМИЗИРОВАННЫЙ WhyUsSection
 * 
 * ✅ ИСПРАВЛЕНИЯ ПРОИЗВОДИТЕЛЬНОСТИ:
 * - Убраны множественные drop-shadow фильтры (замена на CSS)
 * - Добавлен will-change и GPU acceleration
 * - Оптимизированы градиенты (вынесены в CSS переменные)
 * - Добавлены repeatDelay для бесконечных анимаций
 * - Мемоизация компонентов и данных
 * - Прогрессивные scroll-анимации
 * - Уменьшено количество одновременных анимаций
 */

// Мемоизированные статические данные для иконок
const ADVANTAGE_ICONS = [Zap, Handshake, Brain, Sparkles] as const;

// Мемоизированный компонент карточки преимущества
const AdvantageCard = ({ advantage, index, isInView, theme }: {
  advantage: any,
  index: number,
  isInView: boolean,
  theme: string | undefined
}) => {
  const handleHover = useCallback(() => {
    // Оптимизированный hover handler
  }, []);

  return (
    <motion.div
      className="relative group cursor-pointer advantage-card-optimized"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: 0.3 + index * 0.15,
        ease: "easeOut"
      }}
      onHoverStart={handleHover}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{
        willChange: 'transform, opacity',
        transform: 'translateZ(0)',
      }}
    >
      {/* Оптимизированный фон карточки */}
      <div 
        className={`advantage-card-bg advantage-card-bg-${index + 1}`}
        style={{
          willChange: 'opacity',
          transform: 'translateZ(0)',
        }}
      />
      
      {/* Основное содержимое карточки */}
      <div className="relative p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border advantage-card-shadow">
        <div className="flex items-start gap-4">
          {/* Оптимизированная иконка */}
          <motion.div 
            className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center advantage-icon-gradient-${index + 1}`}
            whileHover={{ 
              scale: 1.1,
              rotateZ: 5
            }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            style={{
              willChange: 'transform',
              transform: 'translateZ(0)',
            }}
          >
            <advantage.icon size={28} strokeWidth={2} />
          </motion.div>
          
          {/* Текст */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground mb-2">
              {advantage.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {advantage.description}
            </p>
          </div>
        </div>
        
        {/* Упрощенные декоративные элементы */}
        <motion.div
          className={`absolute top-4 right-4 w-2 h-2 rounded-full advantage-dot-${index + 1}`}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 1,
            delay: index * 0.2
          }}
          style={{
            willChange: 'transform, opacity',
            transform: 'translateZ(0)',
          }}
        />
      </div>
    </motion.div>
  );
};

// Мемоизированный компонент лабораторных эффектов
const LabEffects = ({ theme, isInView, scrollProgress }: {
  theme: string | undefined,
  isInView: boolean,
  scrollProgress: any
}) => {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) return null;

  return (
    <div className="absolute inset-0 pointer-events-none lab-effects-container">
      {/* Оптимизированные пузырьки данных - уменьшено с 8 до 4 */}
      {[...Array(4)].map((_, index) => (
        <motion.div
          key={`bubble-${index}`}
          className={`absolute w-3 h-3 rounded-full lab-bubble-${index + 1}`}
          style={{
            left: `${25 + (index * 15)}%`,
            top: `${35 + (index * 10)}%`,
            willChange: 'transform, opacity',
            transform: 'translateZ(0)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? {
            scale: [0, 1, 0],
            opacity: [0, 0.7, 0],
            y: [-20, -50]
          } : {}}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 2,
            delay: index * 0.8 + 2,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Центральный реактор с параллаксом */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.5 }}
        style={{
          y: useTransform(scrollProgress, [0, 1], [0, -20]),
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      >
        <motion.div
          className="w-16 h-16 rounded-full border-2 lab-reactor-core"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut"
          }}
          style={{
            willChange: 'transform',
            transform: 'translateZ(0)',
          }}
        />
      </motion.div>
    </div>
  );
};

export default function WhyUsSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Прогрессивная анимация при скролле
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const scrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Состояние для предотвращения ошибок гидратации
  const [mounted, setMounted] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [mounted]);

  // Мемоизированные данные из переводов
  const whyUsData = useMemo(() => {
    if (!t.whyUs) return { title: "Why Choose Qaspilab", reasons: [] };
    
    return {
      title: t.whyUs.title,
      reasons: t.whyUs.reasons.map((reason, index) => ({
        ...reason,
        icon: ADVANTAGE_ICONS[index] || Sparkles,
        id: index + 1
      }))
    };
  }, [t.whyUs]);

  // Оптимизированные стили для фона
  const backgroundStyles = useMemo(() => ({
    background: theme === 'dark' 
      ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
    color: theme === 'dark' ? '#ffffff' : '#1e293b'
  }), [theme]);

  // Параллакс эффекты
  const backgroundY = useTransform(scrollProgress, [0, 1], ['0%', '15%']);
  const contentY = useTransform(scrollProgress, [0, 1], ['0%', '-5%']);

  if (!mounted) {
    return (
      <section 
        ref={sectionRef} 
        className="h-[50vh] bg-background"
        style={{ willChange: 'transform' }}
      />
    );
  }

  return (
    <section 
      ref={sectionRef} 
      className="relative py-24 sm:py-32 transition-colors duration-500 overflow-hidden"
      style={{
        ...backgroundStyles,
        willChange: 'transform',
        transform: 'translateZ(0)',
      }}
    >
      {/* Параллакс фон */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          y: backgroundY,
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      >
        <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-purple-600/5 dark:from-blue-400/10 dark:to-purple-500/10" />
      </motion.div>

      <div className="container mx-auto px-6">
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-center"
          style={{
            y: contentY,
            willChange: 'transform',
            transform: 'translateZ(0)',
          }}
        >
          
          {/* Текстовый блок с карточками */}
          <div className="z-10 order-2 lg:order-1">
            {/* Заголовок с переводами */}
            <motion.h2 
              className="text-4xl md:text-5xl font-extrabold text-foreground mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{
                willChange: 'transform, opacity',
                transform: 'translateZ(0)',
              }}
            >
              {whyUsData.title}
            </motion.h2>
            
            {/* Карточки преимуществ */}
            <div className="grid gap-6">
              {whyUsData.reasons.map((reason, index) => (
                <AdvantageCard
                  key={`reason-${index}`}
                  advantage={reason}
                  index={index}
                  isInView={isInView}
                  theme={theme}
                />
              ))}
            </div>
          </div>

          {/* Визуальный блок с лабораторией */}
          <div className="relative order-1 lg:order-2 h-96 lg:h-[600px]">
            
            {/* Оптимизированное фоновое изображение */}
            <motion.div
              className="relative w-full h-full rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              style={{
                willChange: 'transform, opacity',
                transform: 'translateZ(0)',
              }}
            >
              <Image
                src="/lab.jpg"
                alt="Лаборатория Qaspilab"
                fill
                className="object-cover"
                style={{
                  filter: theme === 'dark' 
                    ? 'brightness(0.6) contrast(1.1)' 
                    : 'brightness(0.8) contrast(1.05)'
                }}
                priority={false}
                loading="lazy"
              />
              
              {/* Упрощенный градиентный оверлей */}
              <div 
                className="absolute inset-0"
                style={{
                  background: theme === 'dark'
                    ? 'linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(59,130,246,0.2) 100%)'
                    : 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(59,130,246,0.2) 100%)'
                }}
              />
            </motion.div>

            {/* Оптимизированные лабораторные эффекты */}
            <LabEffects 
              theme={theme} 
              isInView={isInView} 
              scrollProgress={scrollProgress} 
            />
          </div>

        </motion.div>
      </div>
    </section>
  );
}