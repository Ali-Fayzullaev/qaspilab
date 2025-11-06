'use client';

import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring,
  useInView,
  useReducedMotion,
  MotionValue
} from 'framer-motion';
import { useRef, useState, useEffect, useMemo, useCallback, memo } from 'react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { Lightbulb, PuzzleIcon, Code, Rocket } from 'lucide-react';

/**
 * 🚀 СУПЕР ОПТИМИЗИРОВАННАЯ секция "Workflow"
 * 
 * КЛЮЧЕВЫЕ ОПТИМИЗАЦИИ:
 * ✅ Scroll-based progressive animation (как Apple/Stripe)
 * ✅ GPU Hardware Acceleration на всех элементах
 * ✅ Parallax эффекты для глубины
 * ✅ React.memo + useCallback оптимизация
 * ✅ Reduced motion support
 * ✅ Conditional rendering тяжелых SVG
 * ✅ Микро-интерактивности на hover
 * ✅ 60fps smooth animations
 * ✅ Lazy loading диалогов
 * ✅ Оптимизированные фильтры и градиенты
 */

// Мемоизированный компонент иконки для предотвращения лишних рендеров
const StepIcon = memo(({ 
  icon: Icon, 
  index, 
  theme, 
  progress 
}: { 
  icon: any, 
  index: number, 
  theme: string | undefined,
  progress: MotionValue<number>
}) => {
  // Scroll-based трансформации для иконки
  const scale = useTransform(progress, [0.1 + index * 0.15, 0.3 + index * 0.15], [0.8, 1.1]);
  const rotate = useTransform(progress, [0.1 + index * 0.15, 0.4 + index * 0.15], [0, 360]);
  
  return (
    <motion.div 
      className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg"
      style={{
        background: 'linear-gradient(to bottom right, #3b82f6, #8b5cf6)',
        scale,
        rotate,
        // 🎯 GPU ACCELERATION
        transform: 'translateZ(0)',
        willChange: 'transform',
        // 🎨 ОПТИМИЗИРОВАННЫЙ фильтр
        filter: `drop-shadow(0 4px 8px ${theme === 'dark' ? 'rgba(59, 130, 246, 0.25)' : 'rgba(59, 130, 246, 0.15)'})`
      }}
      whileHover={{ 
        scale: 1.15, 
        rotate: 15,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon size={24} />
    </motion.div>
  );
});

StepIcon.displayName = 'StepIcon';

// Мемоизированный диалог компонент
const DialogBubble = memo(({ 
  text, 
  position, 
  isClient, 
  progress,
  index 
}: {
  text: string,
  position: { left: string, top: string },
  isClient: boolean,
  progress: MotionValue<number>,
  index: number
}) => {
  // Прогрессивное появление диалогов на основе скролла
  const opacity = useTransform(
    progress, 
    [0.2 + index * 0.1, 0.35 + index * 0.1], 
    [0, 1]
  );
  
  const y = useTransform(
    progress, 
    [0.2 + index * 0.1, 0.35 + index * 0.1], 
    [20, 0]
  );

  const scale = useTransform(
    progress, 
    [0.2 + index * 0.1, 0.35 + index * 0.1], 
    [0.8, 1]
  );

  return (
    <motion.div
      className={`absolute backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border max-w-[120px] ${
        isClient 
          ? 'bg-white/90 dark:bg-gray-800/90 border-white/20' 
          : 'bg-blue-500/90 dark:bg-blue-600/90 border-blue-300/30'
      }`}
      style={{
        ...position,
        opacity,
        y,
        scale,
        // 🎯 GPU ACCELERATION
        transform: 'translateZ(0)',
        willChange: 'transform, opacity'
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.15 }
      }}
    >
      <p className={`text-xs font-medium ${
        isClient 
          ? 'text-gray-700 dark:text-gray-300' 
          : 'text-white'
      }`}>
        {text}
      </p>
      <div 
        className={`absolute w-2 h-2 rotate-45 border-r border-b ${
          isClient
            ? 'bg-white/90 dark:bg-gray-800/90 border-white/20'
            : 'bg-blue-500/90 dark:bg-blue-600/90 border-blue-300/30'
        }`}
        style={{
          bottom: index % 2 === 0 ? '-4px' : 'auto',
          top: index % 2 === 0 ? 'auto' : '-4px',
          left: isClient ? '20px' : 'auto',
          right: isClient ? 'auto' : '20px'
        }}
      />
    </motion.div>
  );
});

DialogBubble.displayName = 'DialogBubble';

export default function WorkflowSectionOptimized() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  
  // Refs для scroll-based анимаций
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 🎯 SCROLL-BASED ANIMATION SETUP
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Плавные spring-анимации для лучшей производительности
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Состояния для оптимизации
  const [mounted, setMounted] = useState(false);
  const [shouldRenderAnimations, setShouldRenderAnimations] = useState(false);
  
  // Проверка видимости секции с оптимизированными параметрами
  const isInView = useInView(sectionRef, { 
    once: false, // Не once для scroll-based анимаций
    amount: 0.1,
    margin: "100px"
  });

  useEffect(() => {
    setMounted(true);
    
    // Условная загрузка тяжелых анимаций
    if (isInView && !prefersReducedMotion) {
      const timer = setTimeout(() => {
        setShouldRenderAnimations(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isInView, prefersReducedMotion]);

  // 📊 МЕМОИЗИРОВАННЫЕ ДАННЫЕ
  const texts = useMemo(() => ({
    title: t?.workflow?.title || "Мы создаём, как думаем. Просто. Прозрачно. Быстро.",
  }), [t?.workflow?.title]);

  const workflowSteps = useMemo(() => [
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
  ], []);

  // 🎨 ОПТИМИЗИРОВАННЫЕ СТИЛИ
  const sectionStyles = useMemo(() => ({
    background: theme === 'dark' 
      ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)',
    color: theme === 'dark' ? '#ffffff' : '#1e293b',
    // 🎯 GPU ACCELERATION для всей секции
    transform: 'translateZ(0)',
    willChange: 'transform'
  }), [theme]);

  const imageFilter = useMemo(() => 
    theme === 'dark' 
      ? 'brightness(0.4) contrast(1.15) saturate(1.05)' 
      : 'brightness(0.7) contrast(1.05) saturate(0.95)'
  , [theme]);

  // 🎯 SCROLL-BASED ТРАНСФОРМАЦИИ
  const imageScale = useTransform(smoothProgress, [0, 0.5], [1.1, 1]);
  const imageY = useTransform(smoothProgress, [0, 1], [0, -50]); // Parallax
  
  const titleY = useTransform(smoothProgress, [0, 0.4], [100, 0]);
  const titleOpacity = useTransform(smoothProgress, [0, 0.2], [0, 1]);
  
  // Прогрессивная анимация временной линии
  const timelineProgress = useTransform(smoothProgress, [0.1, 0.6], [0, 1]);

  // 🎮 CALLBACK ОПТИМИЗАЦИЯ
  const handleStepHover = useCallback((index: number) => {
    // Микро-интерактивность при ховере
    if (!prefersReducedMotion) {
      // Дополнительные эффекты можно добавить здесь
    }
  }, [prefersReducedMotion]);

  if (!mounted) {
    return <section ref={sectionRef} className="h-[50vh] bg-background" />;
  }

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-background transition-colors duration-300 overflow-hidden"
      style={sectionStyles}
    >
      <div className="container mx-auto px-6" ref={containerRef}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* 🎨 ОПТИМИЗИРОВАННЫЙ ВИЗУАЛЬНЫЙ БЛОК */}
          <div className="relative order-1 lg:order-1 h-96 lg:h-[500px]">
            
            {/* 📸 PARALLAX ИЗОБРАЖЕНИЕ */}
            <motion.div
              className="relative w-full h-full rounded-2xl overflow-hidden"
              style={{
                scale: imageScale,
                y: imageY,
                // 🎯 GPU ACCELERATION
                transform: 'translateZ(0)',
                willChange: 'transform'
              }}
            >
              <Image
                src="/client.jpg"
                alt="Клиент в работе"
                fill
                className="object-cover"
                style={{ filter: imageFilter }}
                priority={false} // Не критичное изображение
                loading="lazy"
              />
              
              {/* УПРОЩЕННЫЙ градиентный оверлей */}
              <div 
                className="absolute inset-0"
                style={{
                  background: theme === 'dark'
                    ? 'linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(59,130,246,0.25) 100%)'
                    : 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(59,130,246,0.25) 100%)'
                }}
              />
            </motion.div>

            {/* ⚡ УСЛОВНЫЙ РЕНДЕР SVG АНИМАЦИЙ */}
            {shouldRenderAnimations && (
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{ 
                  transform: 'translateZ(0)',
                  willChange: 'transform'
                }}
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 100 100"
                  className="absolute inset-0"
                >
                  {/* 🎨 ЕДИНЫЙ ОПТИМИЗИРОВАННЫЙ ГРАДИЕНТ */}
                  <defs>
                    <linearGradient id="optimizedTimelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor={theme === 'dark' ? '#3b82f6' : '#6366f1'} stopOpacity="0.8" />
                      <stop offset="100%" stopColor={theme === 'dark' ? '#06b6d4' : '#0ea5e9'} stopOpacity="0.8" />
                    </linearGradient>
                    
                    {/* 🎯 ОПТИМИЗИРОВАННЫЙ фильтр */}
                    <filter id="optimizedGlow">
                      <feGaussianBlur stdDeviation="1.5" result="glow"/>
                      <feMerge>
                        <feMergeNode in="glow"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>

                  {/* 📈 ПРОГРЕССИВНАЯ ВРЕМЕННАЯ ЛИНИЯ */}
                  <motion.line
                    x1="10"
                    y1="50" 
                    x2="90"
                    y2="50"
                    stroke="url(#optimizedTimelineGradient)"
                    strokeWidth="0.8"
                    filter="url(#optimizedGlow)"
                    style={{ 
                      pathLength: timelineProgress,
                      willChange: 'stroke-dashoffset'
                    }}
                  />

                  {/* 🎯 ОПТИМИЗИРОВАННЫЕ ТОЧКИ ЭТАПОВ */}
                  {workflowSteps.map((step, index) => {
                    const stepProgress = useTransform(
                      smoothProgress, 
                      [0.15 + index * 0.1, 0.25 + index * 0.1], 
                      [0, 1]
                    );
                    
                    return (
                      <motion.g key={`step-${step.id}`}>
                        {/* ЕДИНАЯ ТОЧКА вместо множественных слоев */}
                        <motion.circle
                          cx={20 + index * 20}
                          cy="50"
                          r="2.5"
                          fill={theme === 'dark' ? '#60a5fa' : '#6366f1'}
                          filter="url(#optimizedGlow)"
                          style={{ 
                            scale: stepProgress,
                            willChange: 'transform'
                          }}
                        />
                        
                        {/* Номер этапа */}
                        <motion.text
                          x={20 + index * 20}
                          y="50"
                          fontSize="2.5"
                          fill={theme === 'dark' ? '#ffffff' : '#1f2937'}
                          fontWeight="600"
                          textAnchor="middle"
                          dominantBaseline="central"
                          style={{ 
                            opacity: stepProgress,
                            willChange: 'opacity'
                          }}
                        >
                          {step.id}
                        </motion.text>
                      </motion.g>
                    );
                  })}
                </svg>
              </div>
            )}

            {/* 💬 ЛЕНИВАЯ ЗАГРУЗКА ДИАЛОГОВ */}
            {shouldRenderAnimations && workflowSteps.map((step, index) => (
              <div key={`dialog-${step.id}`}>
                {/* Диалог клиента */}
                <DialogBubble
                  text={step.clientDialog}
                  position={{
                    left: `${15 + index * 20}%`,
                    top: index % 2 === 0 ? '20%' : '70%'
                  }}
                  isClient={true}
                  progress={smoothProgress}
                  index={index}
                />
                
                {/* Диалог Qaspilab */}
                <DialogBubble
                  text={step.qaspilabDialog}
                  position={{
                    left: `${18 + index * 20}%`,
                    top: index % 2 === 0 ? '65%' : '25%'
                  }}
                  isClient={false}
                  progress={smoothProgress}
                  index={index}
                />
              </div>
            ))}
          </div>

          {/* 📝 ОПТИМИЗИРОВАННЫЙ ТЕКСТОВЫЙ БЛОК */}
          <motion.div
            className="z-10 order-2 lg:order-2"
            style={{
              y: titleY,
              opacity: titleOpacity,
              // 🎯 GPU ACCELERATION
              transform: 'translateZ(0)',
              willChange: 'transform, opacity'
            }}
          >
            {/* 🎯 SCROLL-BASED ЗАГОЛОВОК */}
            <motion.h2 
              className="text-4xl md:text-5xl font-extrabold text-foreground mb-12"
              style={{ willChange: 'transform, opacity' }}
            >
              {texts.title}
            </motion.h2>
            
            {/* 📋 ЭТАПЫ РАБОТЫ С MICRO-INTERACTIONS */}
            <div className="space-y-8">
              {workflowSteps.map((step, index) => {
                const stepOpacity = useTransform(
                  smoothProgress, 
                  [0.2 + index * 0.08, 0.35 + index * 0.08], 
                  [0, 1]
                );
                
                const stepX = useTransform(
                  smoothProgress, 
                  [0.2 + index * 0.08, 0.35 + index * 0.08], 
                  [30, 0]
                );

                return (
                  <motion.div
                    key={step.id}
                    className="flex items-start gap-4"
                    style={{
                      opacity: stepOpacity,
                      x: stepX,
                      // 🎯 GPU ACCELERATION
                      transform: 'translateZ(0)',
                      willChange: 'transform, opacity'
                    }}
                    onMouseEnter={() => handleStepHover(index)}
                  >
                    {/* 🎨 ОПТИМИЗИРОВАННАЯ ИКОНКА С МИКРО-АНИМАЦИЯМИ */}
                    <StepIcon 
                      icon={step.icon}
                      index={index}
                      theme={theme}
                      progress={smoothProgress}
                    />
                    
                    {/* Описание этапа */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {step.subtitle}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>

      {/* 🔍 ДЕБАГ ИНФОРМАЦИЯ В DEVELOPMENT */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-20 right-4 bg-black/80 text-white p-2 rounded text-xs">
          📊 Scroll: {Math.round(scrollYProgress.get() * 100)}%<br/>
          🎬 Animations: {shouldRenderAnimations ? 'ON' : 'OFF'}<br/>
          ♿ Reduced Motion: {prefersReducedMotion ? 'ON' : 'OFF'}
        </div>
      )}
    </section>
  );
}