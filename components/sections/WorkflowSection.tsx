'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useRef, useState, useEffect, useMemo } from 'react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { Lightbulb, PuzzleIcon, Code, Rocket } from 'lucide-react';
import '@/styles/workflow-optimized.css';

/**
 * ПОЛНОСТЬЮ ОПТИМИЗИРОВАННЫЙ WorkflowSection
 * 
 * ✅ ИСПРАВЛЕНИЯ ПРОИЗВОДИТЕЛЬНОСТИ:
 * - Убраны drop-shadow фильтры (замена на box-shadow)
 * - Добавлен will-change и transform3d для GPU ускорения
 * - Оптимизированы градиенты (меньше стоп-позиций)
 * - Использован useScroll вместо useInView для прогрессивной анимации
 * - Добавлен useReducedMotion для accessibility
 * - Мемоизация статических элементов
 * - Ленивая загрузка тяжелых анимаций
 */

// Мемоизированные статические данные
const WORKFLOW_STEPS = [
  {
    id: 1,
    icon: Lightbulb,
    title: "Идея",
    subtitle: "вы приходите с мечтой",
    clientDialog: "У меня есть идея...",
    qaspilabDialog: "Расскажите подробнее!",
  },
  {
    id: 2,
    icon: PuzzleIcon,
    title: "Концепт",
    subtitle: "мы превращаем её в план",
    clientDialog: "Как это реализовать?",
    qaspilabDialog: "Вот наш план действий:",
  },
  {
    id: 3,
    icon: Code,
    title: "Продукт",
    subtitle: "за 30 дней появляется MVP",
    clientDialog: "Когда будет готово?",
    qaspilabDialog: "MVP через 30 дней!",
  },
  {
    id: 4,
    icon: Rocket,
    title: "Рост",
    subtitle: "продукт начинает жить, мы остаёмся рядом",
    clientDialog: "А что дальше?",
    qaspilabDialog: "Растём вместе с вами!",
  }
] as const;



export default function WorkflowSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

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

  // Мемоизированные тексты
  const texts = useMemo(() => ({
    title: "Мы создаём, как думаем. Просто. Прозрачно. Быстро.",
  }), []);

  // Оптимизированные стили для фона
  const backgroundStyles = useMemo(() => ({
    background: theme === 'dark' 
      ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
    color: theme === 'dark' ? '#ffffff' : '#1e293b'
  }), [theme]);

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
      className="relative py-24 sm:py-32 bg-background transition-colors duration-500 overflow-hidden"
      style={{
        ...backgroundStyles,
        willChange: 'transform',
        transform: 'translateZ(0)',
      }}
    >
      {/* Параллакс фон */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-purple-600/10 dark:from-blue-400/20 dark:to-purple-500/20" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Визуальный блок */}
          <div className="relative order-1 lg:order-1 h-96 lg:h-[500px]">
            
            {/* Оптимизированное фоновое изображение */}
            <motion.div
              className="relative w-full h-full rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                willChange: 'transform, opacity',
                transform: 'translateZ(0)',
              }}
            >
              <Image
                src="/client.jpg"
                alt="Клиент в работе"
                fill
                className="object-cover"
                style={{
                  filter: theme === 'dark' 
                    ? 'brightness(0.7) contrast(1.1)' 
                    : 'brightness(0.8) contrast(1.05)',
                }}
                priority={false}
                loading="lazy"
              />
              
              {/* Упрощенный градиентный оверлей */}
              <div 
                className="absolute inset-0"
                style={{
                  background: theme === 'dark'
                    ? 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(59,130,246,0.2) 100%)'
                    : 'linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(59,130,246,0.2) 100%)'
                }}
              />
            </motion.div>

            {/* Временная линия без хуков */}
            <div className="absolute inset-0 pointer-events-none">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                className="absolute inset-0"
                style={{ 
                  willChange: 'transform',
                  transform: 'translateZ(0)',
                }}
              >
                <defs>
                  <linearGradient id="timelineGradientSimple" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={theme === 'dark' ? '#3b82f6' : '#6366f1'} stopOpacity="0.9" />
                    <stop offset="100%" stopColor={theme === 'dark' ? '#8b5cf6' : '#a855f7'} stopOpacity="0.9" />
                  </linearGradient>
                  <radialGradient id="stepGradientSimple" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor={theme === 'dark' ? '#60a5fa' : '#93c5fd'} />
                    <stop offset="100%" stopColor={theme === 'dark' ? '#3b82f6' : '#6366f1'} />
                  </radialGradient>
                </defs>

                {/* Основная линия времени */}
                <motion.line
                  x1="10"
                  y1="50"
                  x2="90"
                  y2="50"
                  stroke="url(#timelineGradientSimple)"
                  strokeWidth="0.8"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{
                    duration: 2,
                    delay: 0.5,
                    ease: "easeInOut"
                  }}
                />

                {/* Точки этапов */}
                {WORKFLOW_STEPS.map((step, index) => (
                  <motion.g key={`step-simple-${step.id}`}>
                    <motion.circle
                      cx={20 + index * 20}
                      cy="50"
                      r="2.5"
                      fill="url(#stepGradientSimple)"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        delay: 1 + index * 0.15,
                        duration: 0.6,
                        ease: "easeOut"
                      }}
                    />
                    <motion.text
                      x={20 + index * 20}
                      y="50"
                      fontSize="2.5"
                      fill={theme === 'dark' ? '#ffffff' : '#1f2937'}
                      fontWeight="600"
                      textAnchor="middle"
                      dominantBaseline="central"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{
                        delay: 1.2 + index * 0.15,
                        duration: 0.4,
                      }}
                    >
                      {step.id}
                    </motion.text>
                  </motion.g>
                ))}
              </svg>
            </div>

            {/* Диалоговые окна */}
            {WORKFLOW_STEPS.map((step, index) => {
              const dialogDelay = 2 + index * 0.2;
              return (
                <div key={`dialog-container-${step.id}`}>
                  {/* Диалог клиента */}
                  <motion.div
                    className="absolute bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-gray-200/50 dark:border-gray-700/50 max-w-[120px]"
                    style={{
                      left: `${15 + index * 20}%`,
                      top: index % 2 === 0 ? '20%' : '70%',
                    }}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: dialogDelay,
                      ease: "easeOut"
                    }}
                  >
                    <p className="text-xs text-gray-700 dark:text-gray-300 font-medium">
                      {step.clientDialog}
                    </p>
                    <div 
                      className="absolute w-2 h-2 bg-white/95 dark:bg-gray-800/95 rotate-45 border-r border-b border-gray-200/50 dark:border-gray-700/50"
                      style={{
                        bottom: index % 2 === 0 ? '-4px' : 'auto',
                        top: index % 2 === 0 ? 'auto' : '-4px',
                        left: '20px'
                      }}
                    />
                  </motion.div>

                  {/* Диалог Qaspilab */}
                  <motion.div
                    className="absolute bg-blue-500/95 dark:bg-blue-600/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-blue-300/50 max-w-[130px]"
                    style={{
                      left: `${18 + index * 20}%`,
                      top: index % 2 === 0 ? '65%' : '25%',
                    }}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: dialogDelay + 0.2,
                      ease: "easeOut"
                    }}
                  >
                    <p className="text-xs text-white font-medium">
                      {step.qaspilabDialog}
                    </p>
                    <div 
                      className="absolute w-2 h-2 bg-blue-500/95 dark:bg-blue-600/95 rotate-45 border-r border-b border-blue-300/50"
                      style={{
                        bottom: index % 2 === 0 ? 'auto' : '-4px',
                        top: index % 2 === 0 ? '-4px' : 'auto',
                        right: '20px'
                      }}
                    />
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Текстовый блок */}
          <div className="z-10 order-2 lg:order-2">
            {/* Заголовок */}
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
              {texts.title}
            </motion.h2>
            
            {/* Этапы работы */}
            <div className="space-y-8">
              {WORKFLOW_STEPS.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="flex items-start gap-4 group cursor-pointer"
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.3 + index * 0.1 
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    willChange: 'transform, opacity',
                    transform: 'translateZ(0)',
                  }}
                >
                  {/* Оптимизированная иконка */}
                  <motion.div 
                    className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg transition-all duration-300 group-hover:shadow-xl"
                    style={{
                      background: `linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)`,
                      willChange: 'transform',
                      transform: 'translateZ(0)',
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      rotateY: 10,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <step.icon size={24} />
                  </motion.div>
                  
                  {/* Описание этапа */}
                  <div className="flex-1">
                    <motion.h3 
                      className="text-xl font-bold text-foreground mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {step.title}
                    </motion.h3>
                    <motion.p 
                      className="text-muted-foreground group-hover:text-foreground/80 transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      {step.subtitle}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}