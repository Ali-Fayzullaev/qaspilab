'use client';

import { motion, useInView, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { useRef, useState, useEffect, useMemo, useCallback, memo } from 'react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from 'next-themes';
import Image from 'next/image';

// Константы для Smart Neural Network алгоритма
const PERFORMANCE_CONFIG = {
  MAX_CONNECTIONS_PER_CITY: 3,
  MAX_GLOBAL_CONNECTIONS: 4, 
  ANIMATION_BATCH_SIZE: 8,
  REDUCED_PARTICLES: true
};

// Мемоизированный компонент умной нейронной сети
const SmartNeuralNetwork = memo(({ 
  theme, 
  isInView, 
  kazakhstanCities, 
  globalNodes 
}: {
  theme: string | undefined;
  isInView: boolean;
  kazakhstanCities: any[];
  globalNodes: any[];
}) => {
  // Умный алгоритм соединений O(n) вместо O(n²)
  const smartConnections = useMemo(() => {
    const majorCities = kazakhstanCities.filter(city => city.importance === 'major');
    const minorCities = kazakhstanCities.filter(city => city.importance === 'minor');
    
    // Только стратегические соединения между главными городами
    const majorConnections = majorCities.flatMap((city, index) => 
      majorCities.slice(index + 1, index + 3).map(targetCity => ({
        from: city,
        to: targetCity,
        priority: 'high',
        id: `major-${city.name}-${targetCity.name}`
      }))
    );
    
    // Каждый минорный город соединяется только с 2 ближайшими
    const minorConnections = minorCities.map(city => {
      const distances = majorCities.map(major => ({
        city: major,
        distance: Math.sqrt((city.x - major.x) ** 2 + (city.y - major.y) ** 2)
      }));
      
      distances.sort((a, b) => a.distance - b.distance);
      
      return distances.slice(0, 2).map(({ city: targetCity }) => ({
        from: city,
        to: targetCity,
        priority: 'medium',
        id: `minor-${city.name}-${targetCity.name}`
      }));
    }).flat();
    
    return [...majorConnections, ...minorConnections];
  }, [kazakhstanCities]);

  // Умные глобальные соединения - только от главных городов
  const smartGlobalConnections = useMemo(() => {
    const majorCities = kazakhstanCities.filter(city => city.importance === 'major');
    const priorityGlobals = globalNodes.slice(0, PERFORMANCE_CONFIG.MAX_GLOBAL_CONNECTIONS);
    
    return majorCities.flatMap(city => 
      priorityGlobals.map(global => ({
        from: city,
        to: global,
        id: `global-${city.name}-${global.name}`
      }))
    );
  }, [kazakhstanCities, globalNodes]);

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      className="absolute inset-0 mission-gpu-accelerated"
      style={{
        willChange: 'opacity',
        transform: 'translateZ(0)',
      }}
    >
      <defs>
        {/* Оптимизированные градиенты */}
        <linearGradient id="neuralBeam" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={theme === 'dark' ? '#00d4ff' : '#3b82f6'} stopOpacity="0.8" />
          <stop offset="100%" stopColor={theme === 'dark' ? '#8b5cf6' : '#8b5cf6'} stopOpacity="0.3" />
        </linearGradient>
        <radialGradient id="smartNode" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={theme === 'dark' ? '#66ccff' : '#60a5fa'} stopOpacity="1" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Оптимизированные локальные соединения */}
      {smartConnections.map(({ from, to, priority, id }) => (
        <motion.line
          key={id}
          x1={from.x}
          y1={from.y}
          x2={to.x}
          y2={to.y}
          stroke="url(#neuralBeam)"
          strokeWidth={priority === 'high' ? '0.3' : '0.2'}
          opacity={priority === 'high' ? '0.6' : '0.4'}
          className="mission-gpu-accelerated"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { 
            pathLength: 1, 
            opacity: priority === 'high' ? 0.6 : 0.4 
          } : {}}
          transition={{
            duration: 2,
            delay: from.delay * 0.5,
            ease: "easeOut"
          }}
          style={{
            willChange: 'opacity, pathLength',
            transform: 'translateZ(0)',
          }}
        />
      ))}

      {/* Эффективные глобальные соединения */}
      {smartGlobalConnections.map(({ from, to, id }) => (
        <motion.line
          key={id}
          x1={from.x}
          y1={from.y}
          x2={to.x}
          y2={to.y}
          stroke={theme === 'dark' ? '#0099ff' : '#3b82f6'}
          strokeWidth="0.2"
          opacity="0.4"
          strokeDasharray="2,3"
          className="mission-gpu-accelerated"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{
            duration: 3,
            delay: to.delay,
            ease: "easeInOut"
          }}
          style={{
            willChange: 'pathLength',
            transform: 'translateZ(0)',
          }}
        />
      ))}
    </svg>
  );
});

// Мемоизированные узлы городов с оптимизированной анимацией
const OptimizedCityNodes = memo(({ 
  theme, 
  isInView, 
  kazakhstanCities 
}: {
  theme: string | undefined;
  isInView: boolean;
  kazakhstanCities: any[];
}) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      className="absolute inset-0 mission-gpu-accelerated"
      style={{
        willChange: 'opacity',
        transform: 'translateZ(0)',
      }}
    >
      {kazakhstanCities.map((city) => (
        <motion.g key={`city-${city.name}`} className="mission-gpu-accelerated">
          {/* Основной узел с упрощенной анимацией */}
          <motion.circle
            cx={city.x}
            cy={city.y}
            r={city.importance === 'major' ? "1.5" : "1"}
            fill="url(#smartNode)"
            className="mission-shadow-node"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{
              duration: 0.6,
              delay: city.delay * 0.3,
              ease: "easeOut"
            }}
            style={{
              willChange: 'transform, opacity',
              transform: 'translateZ(0)',
            }}
          />
          
          {/* Пульсирующие кольца только для главных городов */}
          {city.importance === 'major' && (
            <motion.circle
              cx={city.x}
              cy={city.y}
              r="5"
              fill="none"
              stroke={theme === 'dark' ? '#66ccff' : '#60a5fa'}
              strokeWidth="0.2"
              opacity="0.3"
              className="mission-gpu-accelerated"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { 
                scale: 3, 
                opacity: 0 
              } : {}}
              transition={{
                duration: 2.5,
                delay: city.delay + 1,
                ease: "easeOut",
                repeat: Infinity,
                repeatDelay: 4
              }}
              style={{
                willChange: 'transform, opacity',
                transform: 'translateZ(0)',
              }}
            />
          )}
        </motion.g>
      ))}
    </svg>
  );
});

// Эффективные глобальные узлы без избыточных анимаций
const EfficientGlobalNodes = memo(({ 
  theme, 
  isInView, 
  globalNodes 
}: {
  theme: string | undefined;
  isInView: boolean;
  globalNodes: any[];
}) => {
  // Показываем только приоритетные узлы
  const priorityNodes = useMemo(() => 
    globalNodes.slice(0, PERFORMANCE_CONFIG.MAX_GLOBAL_CONNECTIONS), 
    [globalNodes]
  );

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      className="absolute inset-0 mission-gpu-accelerated"
    >
      {priorityNodes.map((node, index) => (
        <motion.g key={`global-${node.name}`} className="mission-gpu-accelerated">
          <motion.circle
            cx={node.x}
            cy={node.y}
            r="1.2"
            fill={theme === 'dark' ? '#0099ff' : '#3b82f6'}
            className="mission-shadow-global"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 0.8 } : {}}
            transition={{
              duration: 0.8,
              delay: node.delay,
              ease: "easeOut"
            }}
            style={{
              willChange: 'transform, opacity',
              transform: 'translateZ(0)',
            }}
          />
        </motion.g>
      ))}
    </svg>
  );
});

// Минимальный компонент информационных потоков
const MinimalDataFlow = memo(({ 
  theme, 
  isInView, 
  kazakhstanCities 
}: {
  theme: string | undefined;
  isInView: boolean;
  kazakhstanCities: any[];
}) => {
  // Только от главных городов, уменьшенное количество частиц
  const majorCities = useMemo(() => 
    kazakhstanCities.filter(city => city.importance === 'major'), 
    [kazakhstanCities]
  );

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      className="absolute inset-0 mission-gpu-accelerated"
    >
      {majorCities.map((city, index) => (
        <motion.g key={`dataflow-${city.name}`}>
          {/* Единственная эффективная частица вместо множества */}
          <motion.circle
            cx={city.x}
            cy={city.y}
            r="0.8"
            fill={theme === 'dark' ? '#99ddff' : '#93c5fd'}
            className="mission-gpu-accelerated"
            animate={isInView ? { 
              cy: [city.y, city.y - 15, city.y - 25],
              opacity: [0.8, 0.4, 0]
            } : {}}
            transition={{
              duration: 2,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: 3,
              delay: index * 0.8
            }}
            style={{
              willChange: 'transform, opacity',
              transform: 'translateZ(0)',
            }}
          />
        </motion.g>
      ))}
    </svg>
  );
});

/**
 * MissionSection - Революционно оптимизированная нейронная сеть
 * O(n) сложность вместо O(n²), умные соединения, GPU acceleration
 */
const MissionSectionOptimized = memo(() => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  
  // Performance хуки
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Эффективный IntersectionObserver
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
  const missionData = useMemo(() => t.missionSection, [t.missionSection]);
  
  // Состояние для гидратации
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Оптимизированная конфигурация городов
  const kazakhstanCities = useMemo(() => [
    // Главные города - источники основных соединений
    { name: 'Алматы', x: 88, y: 60, delay: 0, importance: 'major' },
    { name: 'Астана', x: 68, y: 24, delay: 0.2, importance: 'major' },
    { name: 'Шымкент', x: 65, y: 38, delay: 0.4, importance: 'major' },
    
    // Второстепенные города - ограниченные соединения
    { name: 'Актобе', x: 52, y: 48, delay: 0.6, importance: 'minor' },
    { name: 'Павлодар', x: 82, y: 55, delay: 0.8, importance: 'minor' },
    { name: 'Караганда', x: 75, y: 48, delay: 1.0, importance: 'minor' },
    { name: 'Усть-Каменогорск', x: 88, y: 46, delay: 1.2, importance: 'minor' },
    { name: 'Семей', x: 85, y: 52, delay: 1.4, importance: 'minor' },
  ], []);

  // Приоритетные глобальные узлы
  const globalNodes = useMemo(() => [
    { name: 'Москва', x: 15, y: 28, delay: 2, region: 'europe' },
    { name: 'Пекин', x: 90, y: 32, delay: 2.2, region: 'asia' },
    { name: 'Лондон', x: 5, y: 22, delay: 2.4, region: 'europe' },
    { name: 'Токио', x: 98, y: 38, delay: 2.6, region: 'asia' },
  ], []);

  // Scroll-based эффекты
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

  // Мемоизированные стили
  const sectionStyles = useMemo(() => ({
    background: theme === 'dark' 
      ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)',
    color: theme === 'dark' ? '#ffffff' : '#1e293b'
  }), [theme]);

  if (!mounted) {
    return <section ref={sectionRef} className="h-[50vh] bg-background mission-gpu-accelerated" />;
  }

  return (
    <section 
      ref={sectionRef} 
      className="relative py-24 sm:py-32 bg-muted/30 transition-colors duration-500 overflow-hidden mission-gpu-accelerated"
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
          
          {/* Текстовый блок с переводами */}
          <motion.div
            className="z-10 order-2 lg:order-1 mission-gpu-accelerated"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{
              willChange: 'transform, opacity',
              transform: 'translateZ(0)',
            }}
          >
            {/* Заголовок */}
            <motion.h2 
              className="text-4xl md:text-5xl font-extrabold text-foreground mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{
                willChange: 'transform, opacity',
                transform: 'translateZ(0)',
              }}
            >
              {missionData.title}
            </motion.h2>
            
            {/* Описание абзацами */}
            <div className="space-y-4 text-lg text-muted-foreground">
              {[missionData.p1, missionData.p2, missionData.p3, missionData.p4, missionData.p5].map((text, index) => (
                <motion.p 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className={index === 3 ? "pt-4 font-medium text-foreground/90" : ""}
                  style={{
                    willChange: 'transform, opacity',
                    transform: 'translateZ(0)',
                  }}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Оптимизированный визуальный блок */}
          <div className="relative order-1 lg:order-2 h-96 lg:h-[500px]">
            
            {/* Фоновое изображение карты */}
            <motion.div
              className="relative w-full h-full rounded-2xl overflow-hidden mission-gpu-accelerated"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              style={{
                willChange: 'transform, opacity',
                transform: 'translateZ(0)',
              }}
            >
              <Image
                src="/kaz.jpg"
                alt="Smart Neural Network Kazakhstan"
                fill
                className="object-cover"
                style={{
                  filter: theme === 'dark' 
                    ? 'brightness(0.5) contrast(1.1)' 
                    : 'brightness(0.7) contrast(1.05)'
                }}
                priority={false}
                loading="lazy"
              />
              
              {/* Упрощённый градиент */}
              <div 
                className="absolute inset-0"
                style={{
                  background: theme === 'dark'
                    ? 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(59,130,246,0.2) 100%)'
                    : 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(59,130,246,0.2) 100%)'
                }}
              />
            </motion.div>

            {/* Революционная оптимизированная нейронная сеть */}
            <div className="absolute inset-0 pointer-events-none">
              <SmartNeuralNetwork 
                theme={theme} 
                isInView={isInView}
                kazakhstanCities={kazakhstanCities}
                globalNodes={globalNodes}
              />
              <OptimizedCityNodes 
                theme={theme} 
                isInView={isInView}
                kazakhstanCities={kazakhstanCities}
              />
              <EfficientGlobalNodes 
                theme={theme} 
                isInView={isInView}
                globalNodes={globalNodes}
              />
              
              {/* Минимальные информационные потоки только если не reduced motion */}
              {!prefersReducedMotion && (
                <MinimalDataFlow 
                  theme={theme} 
                  isInView={isInView}
                  kazakhstanCities={kazakhstanCities}
                />
              )}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
});

// Set display names для отладки
SmartNeuralNetwork.displayName = 'SmartNeuralNetwork';
OptimizedCityNodes.displayName = 'OptimizedCityNodes';
EfficientGlobalNodes.displayName = 'EfficientGlobalNodes';
MinimalDataFlow.displayName = 'MinimalDataFlow';
MissionSectionOptimized.displayName = 'MissionSectionOptimized';

export default MissionSectionOptimized;