'use client';

import { motion, useInView, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { useRef, useState, useEffect, useMemo, useCallback, memo } from 'react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from 'next-themes';
import Image from 'next/image';

// Мемоизированный компонент светового луча для лучшей производительности
const LightBeamEffect = memo(({ theme, isInView }: { 
  theme: string | undefined; 
  isInView: boolean; 
}) => (
  <div className="absolute inset-0 pointer-events-none globalreach-gpu-accelerated">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      className="absolute inset-0"
      style={{
        willChange: 'opacity',
        transform: 'translateZ(0)',
      }}
    >
      <defs>
        <linearGradient id="optimizedLightBeam" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={theme === 'dark' ? '#00d4ff' : '#3b82f6'} stopOpacity="0.8" />
          <stop offset="50%" stopColor={theme === 'dark' ? '#8b5cf6' : '#8b5cf6'} stopOpacity="0.4" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="optimizedCore" cx="50%" cy="70%" r="15%">
          <stop offset="0%" stopColor={theme === 'dark' ? '#00d4ff' : '#3b82f6'} stopOpacity="1" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Оптимизированный центр с простой анимацией */}
      <motion.circle
        cx="50"
        cy="70"
        r="3"
        fill="url(#optimizedCore)"
        className="globalreach-gpu-accelerated"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{
          willChange: 'transform, opacity',
          transform: 'translateZ(0)',
        }}
      />

      {/* Главный луч без дорогих фильтров */}
      <motion.rect
        x="48"
        y="15"
        width="4"
        height="55"
        fill="url(#optimizedLightBeam)"
        className="globalreach-gpu-accelerated"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={isInView ? { scaleY: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
        style={{
          transformOrigin: "50% 100%",
          willChange: 'transform, opacity',
          transform: 'translateZ(0)',
        }}
      />

      {/* Упрощенные дополнительные лучи */}
      {[46, 52].map((x, index) => (
        <motion.rect
          key={`beam-${x}`}
          x={x}
          y="20"
          width="1.5"
          height="50"
          fill="url(#optimizedLightBeam)"
          opacity="0.6"
          className="globalreach-gpu-accelerated"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={isInView ? { scaleY: 1, opacity: 0.6 } : {}}
          transition={{ duration: 1, delay: 1 + index * 0.1, ease: "easeOut" }}
          style={{
            transformOrigin: "50% 100%",
            willChange: 'transform, opacity',
            transform: 'translateZ(0)',
          }}
        />
      ))}

      {/* Простые расширяющиеся кольца */}
      {[...Array(2)].map((_, index) => (
        <motion.circle
          key={`ring-${index}`}
          cx="50"
          cy="70"
          r="5"
          fill="none"
          stroke={theme === 'dark' ? '#00d4ff' : '#3b82f6'}
          strokeWidth="0.5"
          opacity="0.3"
          className="globalreach-gpu-accelerated"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { 
            scale: 5, 
            opacity: 0 
          } : {}}
          transition={{
            duration: 2,
            delay: 1.2 + index * 0.4,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 3
          }}
          style={{
            willChange: 'transform, opacity',
            transform: 'translateZ(0)',
          }}
        />
      ))}
    </svg>
  </div>
));

// Мемоизированный компонент цифровых эффектов
const DigitalEffects = memo(({ theme, isInView }: { 
  theme: string | undefined; 
  isInView: boolean; 
}) => {
  const colors = useMemo(() => 
    theme === 'dark' 
      ? ['#00d4ff', '#8b5cf6', '#a855f7', '#06b6d4']
      : ['#3b82f6', '#8b5cf6', '#c084fc', '#60a5fa'],
    [theme]
  );

  return (
    <div className="absolute inset-0 pointer-events-none globalreach-gpu-accelerated">
      {/* Оптимизированные пиксели без drop-shadow */}
      {[...Array(16)].map((_, index) => (
        <motion.div
          key={`pixel-${index}`}
          className="absolute w-1 h-1 rounded-sm globalreach-shadow-glow"
          style={{
            background: colors[index % colors.length],
            left: `${35 + (index % 4) * 8}%`,
            top: `${8 + Math.floor(index / 4) * 6}%`,
            willChange: 'transform, opacity',
            transform: 'translateZ(0)',
          }}
          initial={{ 
            scale: 0, 
            opacity: 0,
            y: 30
          }}
          animate={isInView ? {
            scale: 1,
            opacity: 0.8,
            y: -5,
          } : {}}
          transition={{
            duration: 1.5,
            delay: 1.5 + index * 0.05,
            type: "spring",
            stiffness: 100,
            damping: 15,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Упрощенные частицы данных */}
      {[...Array(8)].map((_, index) => (
        <motion.div
          key={`data-particle-${index}`}
          className="absolute w-2 h-2 rounded-full globalreach-shadow-glow"
          style={{
            background: colors[index % colors.length],
            left: `${25 + (index * 8) % 50}%`,
            top: `${30 + (index * 6) % 40}%`,
            willChange: 'transform, opacity',
            transform: 'translateZ(0)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? {
            scale: [0, 1, 0],
            opacity: [0, 0.7, 0],
            y: [-20, -40, -60]
          } : {}}
          transition={{
            duration: 3,
            delay: 2 + index * 0.2,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 4
          }}
        />
      ))}
    </div>
  );
});

/**
 * Секция "Global Reach" - оптимизированная для максимальной производительности
 * GPU-accelerated анимации, мемоизация, переводы
 */
const GlobalReachSectionOptimized = memo(() => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  
  // Performance хуки
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Оптимизированный IntersectionObserver
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { 
        threshold: 0.2, 
        rootMargin: '-50px'
      }
    );
    
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Мемоизированные данные переводов
  const globalData = useMemo(() => t.globalReach, [t.globalReach]);
  
  // Состояние для предотвращения гидратации
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll-based эффекты для параллакса
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const springConfig = useMemo(() => ({ 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  }), []);
  
  const scrollProgress = useSpring(scrollYProgress, springConfig);

  // Мемоизированные стили для избежания пересчётов
  const sectionStyles = useMemo(() => ({
    background: theme === 'dark' 
      ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)',
    color: theme === 'dark' ? '#ffffff' : '#1e293b'
  }), [theme]);

  if (!mounted) {
    return <section ref={sectionRef} className="h-[50vh] bg-background globalreach-gpu-accelerated" />;
  }

  return (
    <section 
      ref={sectionRef} 
      className="relative py-24 sm:py-32 bg-background transition-colors duration-500 overflow-hidden globalreach-gpu-accelerated"
      style={sectionStyles}
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-center"
          style={{
            willChange: 'transform, opacity',
            transform: 'translateZ(0)',
          }}
        >
          
          {/* Оптимизированный визуальный блок */}
          <div className="relative order-1 lg:order-1 h-96 lg:h-[600px]">
            
            {/* Главное изображение с оптимизацией */}
            <motion.div
              className="relative w-full h-full rounded-2xl overflow-hidden globalreach-gpu-accelerated"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              style={{
                willChange: 'transform, opacity',
                transform: 'translateZ(0)',
              }}
            >
              <Image
                src="/ai.jpg"
                alt={globalData.title}
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
              
              {/* Упрощённый градиент без сложных эффектов */}
              <div 
                className="absolute inset-0"
                style={{
                  background: theme === 'dark'
                    ? 'radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, rgba(59,130,246,0.2) 100%)'
                    : 'radial-gradient(circle at center, rgba(255,255,255,0.5) 0%, rgba(59,130,246,0.2) 100%)'
                }}
              />
            </motion.div>

            {/* Оптимизированные световые эффекты */}
            <LightBeamEffect theme={theme} isInView={isInView} />
            <DigitalEffects theme={theme} isInView={isInView} />
          </div>

          {/* Текстовый блок с переводами */}
          <motion.div
            className="z-10 order-2 lg:order-2 globalreach-gpu-accelerated"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              willChange: 'transform, opacity',
              transform: 'translateZ(0)',
            }}
          >
            {/* Заголовок с переводами */}
            <motion.h2 
              className="text-4xl md:text-5xl font-extrabold text-foreground mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                willChange: 'transform, opacity',
                transform: 'translateZ(0)',
              }}
            >
              {globalData.title}
            </motion.h2>
            
            {/* Описание */}
            <motion.div 
              className="text-xl text-muted-foreground leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                willChange: 'transform, opacity',
                transform: 'translateZ(0)',
              }}
            >
              {globalData.description}
            </motion.div>

            {/* Оптимизированная статистика */}
            <motion.div
              className="grid grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                willChange: 'transform, opacity',
                transform: 'translateZ(0)',
              }}
            >
              <div className="text-center globalreach-gpu-accelerated">
                <motion.div
                  className="text-3xl font-bold mb-2"
                  style={{ color: theme === 'dark' ? '#00d4ff' : '#3b82f6' }}
                  animate={isInView && !prefersReducedMotion ? {
                    textShadow: [
                      '0 0 0px transparent',
                      `0 0 10px ${theme === 'dark' ? '#00d4ff40' : '#3b82f640'}`,
                      '0 0 0px transparent'
                    ]
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 1.5
                  }}
                >
                  {globalData.stats?.projects || "100+"}
                </motion.div>
                <p className="text-sm text-muted-foreground">
                  Projects Delivered
                </p>
              </div>
              
              <div className="text-center globalreach-gpu-accelerated">
                <motion.div
                  className="text-3xl font-bold mb-2"
                  style={{ color: theme === 'dark' ? '#8b5cf6' : '#8b5cf6' }}
                  animate={isInView && !prefersReducedMotion ? {
                    textShadow: [
                      '0 0 0px transparent',
                      `0 0 10px ${theme === 'dark' ? '#8b5cf640' : '#8b5cf640'}`,
                      '0 0 0px transparent'
                    ]
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 2
                  }}
                >
                  🇰🇿
                </motion.div>
                <p className="text-sm text-muted-foreground">
                  Kazakhstan
                </p>
              </div>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
});

// Set display names for debugging
LightBeamEffect.displayName = 'LightBeamEffect';
DigitalEffects.displayName = 'DigitalEffects';  
GlobalReachSectionOptimized.displayName = 'GlobalReachSectionOptimized';

export default GlobalReachSectionOptimized;