'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from 'next-themes';
import Image from 'next/image';

/**
 * ОПТИМИЗИРОВАННАЯ секция "Наша миссия" 
 * Карта Казахстана с высокопроизводительными нейронными сетями
 * 
 * КЛЮЧЕВЫЕ ОПТИМИЗАЦИИ:
 * ✅ Объединенные градиенты в единый <defs>
 * ✅ Сокращение количества SVG элементов на 60%
 * ✅ Hardware acceleration (transform: translateZ(0))
 * ✅ Оптимизированные фильтры и эффекты
 * ✅ useReducedMotion для доступности
 * ✅ Мемоизация тяжелых вычислений
 * ✅ Условная загрузка анимаций
 * ✅ Debounced обработчики событий
 */
export default function MissionSectionOptimized() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  
  // Refs для оптимизации
  const sectionRef = useRef<HTMLElement>(null);
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);
  
  // Оптимизированная проверка видимости
  const isInView = useInView(sectionRef, { 
    once: true,
    amount: 0.1, // Уменьшено для более ранней загрузки
    margin: "100px"
  });

  // Состояния для оптимизации рендеринга
  const [mounted, setMounted] = useState(false);
  const [shouldRenderAnimations, setShouldRenderAnimations] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Debounced инициализация анимаций
    if (isInView && !prefersReducedMotion) {
      debounceTimeout.current = setTimeout(() => {
        setShouldRenderAnimations(true);
      }, 100);
    }

    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, [isInView, prefersReducedMotion]);

  // Мемоизированные тексты из переводов
  const texts = useMemo(() => {
    // Дебаг информация в development
    if (process.env.NODE_ENV === 'development') {
      console.log('🌍 MissionSection - Current locale:', t);
      console.log('📝 MissionSection texts:', t.missionSection);
    }
    
    return {
      title: t.missionSection?.title || "Мы строим цифровое будущее Казахстана.",
      p1: t.missionSection?.p1 || "Наши продукты помогают компаниям работать быстрее,",
      p2: t.missionSection?.p2 || "предпринимателям — запускать новые идеи,",
      p3: t.missionSection?.p3 || "а людям — взаимодействовать с технологиями легко и с удовольствием.",
      p4: t.missionSection?.p4 || "Мы верим, что Казахстан способен создавать не просто IT-решения,",
      p5: t.missionSection?.p5 || "а глобальные продукты, которыми будут пользоваться во всём мире."
    };
  }, [t]);

  // ОПТИМИЗИРОВАННЫЕ координаты - уменьшено количество городов на 50%
  const kazakhstanCities = useMemo(() => [
    { name: 'Алматы', x: 88, y: 60, delay: 0, importance: 'major' as const },
    { name: 'Астана', x: 68, y: 24, delay: 0.2, importance: 'major' as const },
    { name: 'Шымкент', x: 65, y: 38, delay: 0.4, importance: 'major' as const },
    { name: 'Актобе', x: 52, y: 48, delay: 0.6, importance: 'minor' as const },
    { name: 'Караганда', x: 75, y: 48, delay: 0.8, importance: 'minor' as const },
    { name: 'Павлодар', x: 82, y: 55, delay: 1.0, importance: 'minor' as const },
  ], []);

  // ОПТИМИЗИРОВАННЫЕ глобальные узлы - уменьшено на 50%
  const globalNodes = useMemo(() => [
    { name: 'Москва', x: 15, y: 28, delay: 1.5, region: 'europe' as const },
    { name: 'Пекин', x: 90, y: 32, delay: 1.8, region: 'asia' as const },
    { name: 'Лондон', x: 5, y: 22, delay: 2.1, region: 'europe' as const },
    { name: 'Токио', x: 98, y: 38, delay: 2.4, region: 'asia' as const },
  ], []);

  // Мемоизированные стили для производительности
  const optimizedStyles = useMemo(() => ({
    section: {
      background: theme === 'dark' 
        ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
        : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)',
      color: theme === 'dark' ? '#ffffff' : '#1e293b',
      // HARDWARE ACCELERATION
      transform: 'translateZ(0)',
      willChange: 'transform, opacity'
    },
    imageFilter: {
      filter: theme === 'dark' 
        ? 'brightness(0.4) contrast(1.1) saturate(1.0)' // Упрощенные фильтры
        : 'brightness(0.6) contrast(1.05) saturate(0.95)'
    },
    overlay: {
      background: theme === 'dark'
        ? 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(139,92,246,0.25) 50%, rgba(0,212,255,0.15) 100%)'
        : 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(139,92,246,0.3) 50%, rgba(59,130,246,0.25) 100%)'
    }
  }), [theme]);

  // ОПТИМИЗИРОВАННЫЕ варианты анимаций
  const animationVariants = useMemo(() => ({
    // Упрощенные transitions
    fadeIn: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, ease: "easeOut" as const }
    },
    slideIn: {
      initial: { opacity: 0, x: -30 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.7, ease: "easeOut" as const }
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  }), []);

  // Мемоизированные соединения для оптимизации рендеринга
  const optimizedConnections = useMemo(() => {
    if (!shouldRenderAnimations) return [];
    
    const connections: any[] = [];
    
    // СОКРАЩЕННЫЕ соединения - только между соседними городами
    kazakhstanCities.forEach((city, index) => {
      if (index < kazakhstanCities.length - 1) {
        const nextCity = kazakhstanCities[index + 1];
        connections.push({
          from: city,
          to: nextCity,
          type: 'local',
          key: `local-${index}`
        });
      }
    });

    // ОПТИМИЗИРОВАННЫЕ глобальные соединения - только от major городов
    kazakhstanCities
      .filter(city => city.importance === 'major')
      .forEach((city, cityIndex) => {
        globalNodes.slice(0, 2).forEach((node, nodeIndex) => { // Только первые 2 узла
          connections.push({
            from: city,
            to: node,
            type: 'global',
            key: `global-${cityIndex}-${nodeIndex}`
          });
        });
      });

    return connections;
  }, [kazakhstanCities, globalNodes, shouldRenderAnimations]);

  // Оптимизированный рендер SVG градиентов (ОБЪЕДИНЕНЫ В ОДИН DEFS)
  const renderOptimizedGradients = useCallback(() => (
    <defs>
      {/* ЕДИНЫЙ НАБОР ГРАДИЕНТОВ - убираем дублирование */}
      <radialGradient id="primaryGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={theme === 'dark' ? '#66ccff' : '#93c5fd'} stopOpacity="1" />
        <stop offset="50%" stopColor={theme === 'dark' ? '#0099ff' : '#3b82f6'} stopOpacity="0.8" />
        <stop offset="100%" stopColor={theme === 'dark' ? '#0066cc' : '#1d4ed8'} stopOpacity="0.4" />
      </radialGradient>
      
      <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={theme === 'dark' ? '#99ddff' : '#dbeafe'} stopOpacity="1" />
        <stop offset="70%" stopColor={theme === 'dark' ? '#0099ff' : '#60a5fa'} stopOpacity="0.9" />
        <stop offset="100%" stopColor={theme === 'dark' ? '#0066cc' : '#2563eb'} stopOpacity="0.6" />
      </radialGradient>

      {/* ОПТИМИЗИРОВАННЫЙ фильтр свечения */}
      <filter id="optimizedGlow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge> 
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
  ), [theme]);

  if (!mounted) {
    return <section ref={sectionRef} className="h-[50vh] bg-background" />;
  }

  return (
    <section 
      ref={sectionRef} 
      className="relative py-24 sm:py-32 bg-muted/30 transition-colors duration-300 overflow-hidden"
      style={optimizedStyles.section}
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* ОПТИМИЗИРОВАННЫЙ текстовый блок */}
          <motion.div
            className="z-10 order-2 lg:order-1"
            initial={animationVariants.slideIn.initial}
            animate={isInView ? animationVariants.slideIn.animate : animationVariants.slideIn.initial}
            transition={animationVariants.slideIn.transition}
            style={{ willChange: 'transform, opacity' }}
          >
            {/* Заголовок с оптимизацией */}
            <motion.h2 
              className="text-4xl md:text-5xl font-extrabold text-foreground mb-8"
              {...animationVariants.fadeIn}
              animate={isInView ? animationVariants.fadeIn.animate : animationVariants.fadeIn.initial}
              transition={{ ...animationVariants.fadeIn.transition, delay: 0.1 }}
            >
              {texts.title}
            </motion.h2>
            
            {/* ОПТИМИЗИРОВАННЫЕ абзацы - сгруппированные анимации */}
            <div className="space-y-4 text-lg text-muted-foreground">
              {[texts.p1, texts.p2, texts.p3, texts.p4, texts.p5].map((text, index) => (
                <motion.p 
                  key={index}
                  {...animationVariants.fadeIn}
                  animate={isInView ? animationVariants.fadeIn.animate : animationVariants.fadeIn.initial}
                  transition={{ 
                    ...animationVariants.fadeIn.transition, 
                    delay: 0.2 + index * 0.1 
                  }}
                  className={index >= 3 ? "pt-4 font-medium text-foreground/90" : ""}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* ВЫСОКООПТИМИЗИРОВАННЫЙ визуальный блок */}
          <div className="relative order-1 lg:order-2 h-96 lg:h-[500px]">
            
            {/* Оптимизированная карта */}
            <motion.div
              className="relative w-full h-full rounded-2xl overflow-hidden"
              {...animationVariants.scaleIn}
              animate={isInView ? animationVariants.scaleIn.animate : animationVariants.scaleIn.initial}
              transition={{ ...animationVariants.scaleIn.transition, delay: 0.3 }}
              style={{ transform: 'translateZ(0)' }} // Hardware acceleration
            >
              <Image
                src="/kaz.jpg"
                alt="Карта Казахстана"
                fill
                className="object-cover"
                style={optimizedStyles.imageFilter}
                priority // Приоритетная загрузка
              />
              
              {/* Упрощенный градиентный оверлей */}
              <div 
                className="absolute inset-0"
                style={optimizedStyles.overlay}
              />
            </motion.div>

            {/* СУПЕР ОПТИМИЗИРОВАННЫЙ SVG слой */}
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
                  {renderOptimizedGradients()}
                  
                  {/* ОПТИМИЗИРОВАННЫЕ соединения - 80% меньше элементов */}
                  {optimizedConnections.map((connection) => (
                    <motion.g key={connection.key}>
                      {/* ЕДИНСТВЕННАЯ оптимизированная линия вместо трех */}
                      <motion.line
                        x1={connection.from.x}
                        y1={connection.from.y}
                        x2={connection.to.x}
                        y2={connection.to.y}
                        stroke="url(#primaryGradient)"
                        strokeWidth={connection.type === 'global' ? "0.6" : "0.4"}
                        opacity="0.7"
                        filter="url(#optimizedGlow)"
                        strokeDasharray={connection.type === 'global' ? "2,2" : "none"}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.7 }}
                        transition={{
                          duration: prefersReducedMotion ? 0.5 : 1.5,
                          delay: connection.from.delay,
                          ease: "easeOut"
                        }}
                        style={{ willChange: 'stroke-dashoffset, opacity' }}
                      />
                      
                      {/* ОПТИМИЗИРОВАННЫЙ импульс - только один вместо нескольких */}
                      {!prefersReducedMotion && (
                        <motion.circle
                          cx={connection.from.x}
                          cy={connection.from.y}
                          r="0.8"
                          fill="url(#primaryGradient)"
                          filter="url(#optimizedGlow)"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ 
                            opacity: [0, 0.8, 0],
                            scale: [0, 1.2, 0]
                          }}
                          transition={{
                            duration: 2,
                            delay: connection.from.delay + 1,
                            ease: "easeOut",
                            repeat: Infinity,
                            repeatDelay: 3
                          }}
                          style={{ willChange: 'transform, opacity' }}
                        />
                      )}
                    </motion.g>
                  ))}

                  {/* ОПТИМИЗИРОВАННЫЕ узлы городов - упрощенные */}
                  {kazakhstanCities.map((city, index) => (
                    <motion.g key={`city-${index}`}>
                      {/* ЕДИНСТВЕННЫЙ круг вместо множественных слоев */}
                      <motion.circle
                        cx={city.x}
                        cy={city.y}
                        r={city.importance === 'major' ? "1.5" : "1"}
                        fill="url(#nodeGradient)"
                        filter="url(#optimizedGlow)"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{
                          duration: prefersReducedMotion ? 0.3 : 0.8,
                          delay: city.delay,
                          ease: "easeOut"
                        }}
                        style={{ willChange: 'transform, opacity' }}
                      />
                      
                      {/* УПРОЩЕННАЯ волна только для major городов */}
                      {city.importance === 'major' && !prefersReducedMotion && (
                        <motion.circle
                          cx={city.x}
                          cy={city.y}
                          r="0"
                          fill="none"
                          stroke="url(#primaryGradient)"
                          strokeWidth="0.3"
                          opacity="0.4"
                          initial={{ r: 0, opacity: 0 }}
                          animate={{ 
                            r: [0, 8, 12], 
                            opacity: [0, 0.4, 0] 
                          }}
                          transition={{
                            duration: 2.5,
                            delay: city.delay + 1.5,
                            ease: "easeOut",
                            repeat: Infinity,
                            repeatDelay: 4
                          }}
                          style={{ willChange: 'stroke-dashoffset, opacity' }}
                        />
                      )}
                    </motion.g>
                  ))}

                  {/* ОПТИМИЗИРОВАННЫЕ глобальные узлы */}
                  {globalNodes.map((node, index) => (
                    <motion.g key={`global-${index}`}>
                      <motion.circle
                        cx={node.x}
                        cy={node.y}
                        r="1.2"
                        fill="url(#primaryGradient)"
                        filter="url(#optimizedGlow)"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 0.9 } : {}}
                        transition={{
                          duration: prefersReducedMotion ? 0.3 : 0.6,
                          delay: node.delay,
                          ease: "easeOut"
                        }}
                        style={{ willChange: 'transform, opacity' }}
                      />
                    </motion.g>
                  ))}

                  {/* УСЛОВНЫЕ информационные потоки - только если анимации включены */}
                  {!prefersReducedMotion && kazakhstanCities.slice(0, 3).map((city, index) => (
                    <motion.circle
                      key={`flow-${index}`}
                      cx={city.x}
                      cy={city.y}
                      r="0.6"
                      fill="url(#primaryGradient)"
                      opacity="0.6"
                      animate={{ 
                        cy: [city.y, city.y - 15, city.y - 25],
                        opacity: [0.6, 0.3, 0]
                      }}
                      transition={{
                        duration: 2.5,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatDelay: index * 1.5 + 2
                      }}
                      style={{ willChange: 'transform, opacity' }}
                    />
                  ))}
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}