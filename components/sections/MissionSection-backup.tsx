'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect, useMemo } from 'react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from 'next-themes';
import Image from 'next/image';

/**
 * Секция "Наша миссия" 
 * Профессионально оптимизированная версия с кинематографическими анимациями
 * Каждый элемент создан для максимального визуального воздействия без компромиссов в производительности
 */
export default function MissionSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true,
    amount: 0.15,
    margin: "-100px"
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const texts = {
    title: "Мы строим цифровое будущее Казахстана.",
    p1: "Наши продукты помогают компаниям работать быстрее,",
    p2: "предпринимателям — запускать новые идеи,",
    p3: "а людям — взаимодействовать с технологиями легко и с удовольствием.",
    p4: "Мы верим, что Казахстан способен создавать не просто IT-решения,",
    p5: "а глобальные продукты, которыми будут пользоваться во всём мире."
  };

  const kazakhstanCities = useMemo(() => [
    { name: 'Алматы', x: 88, y: 60, delay: 0, importance: 'major', color: '#00f0ff' },
    { name: 'Астана', x: 68, y: 24, delay: 0.1, importance: 'major', color: '#ff00ff' },
    { name: 'Шымкент', x: 65, y: 38, delay: 0.2, importance: 'major', color: '#00ff88' },
    { name: 'Актобе', x: 52, y: 48, delay: 0.3, importance: 'minor', color: '#ffaa00' },
    { name: 'Тараз', x: 68, y: 38, delay: 0.4, importance: 'minor', color: '#ff66aa' },
    { name: 'Павлодар', x: 82, y: 55, delay: 0.5, importance: 'minor', color: '#66aaff' },
    { name: 'Караганда', x: 75, y: 48, delay: 0.6, importance: 'minor', color: '#aaff66' },
    { name: 'Усть-Каменогорск', x: 88, y: 46, delay: 0.7, importance: 'minor', color: '#ff6666' },
  ], []);

  const globalNodes = useMemo(() => [
    { name: 'Москва', x: 15, y: 28, delay: 1.2, region: 'europe', color: '#ff0066' },
    { name: 'Пекин', x: 90, y: 32, delay: 1.3, region: 'asia', color: '#00ffcc' },
    { name: 'Лондон', x: 5, y: 22, delay: 1.4, region: 'europe', color: '#6600ff' },
    { name: 'Токио', x: 98, y: 38, delay: 1.5, region: 'asia', color: '#ffcc00' },
  ], []);

  if (!mounted) {
    return <section ref={sectionRef} className="h-[50vh] bg-background" />;
  }

  // Кинематографические параметры анимаций
  const textAnimation = {
    hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        delay: i * 0.08,
        ease: [0.23, 1, 0.32, 1] as const // Material Design easing
      }
    })
  };

  const titleAnimation = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.23, 1, 0.32, 1] as const,
        delay: 0.1
      }
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative py-24 sm:py-32 transition-colors duration-700 overflow-hidden"
      style={{
        background: theme === 'dark' 
          ? 'radial-gradient(circle at 30% 30%, #0c1a2d 0%, #1a2d47 50%, #2a3d5a 100%)'
          : 'radial-gradient(circle at 70% 70%, #ffffff 0%, #f0f9ff 50%, #e0f2fe 100%)',
        color: theme === 'dark' ? '#ffffff' : '#0f172a'
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[500px]">
          
          {/* --- 1. Текстовый блок с кинематографическими анимациями --- */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ 
              duration: 1,
              ease: [0.23, 1, 0.32, 1] as const,
              delay: 0.2
            }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-8 leading-tight tracking-tight"
              variants={titleAnimation}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {texts.title}
            </motion.h2>
            
            <motion.div 
              className="space-y-4 text-lg md:text-xl text-muted-foreground max-w-2xl"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.p variants={textAnimation} custom={1}>
                {texts.p1}
              </motion.p>
              <motion.p variants={textAnimation} custom={2}>
                {texts.p2}
              </motion.p>
              <motion.p variants={textAnimation} custom={3}>
                {texts.p3}
              </motion.p>
              <motion.p 
                variants={textAnimation} 
                custom={4}
                className="pt-6 font-semibold text-foreground/95 text-xl"
              >
                {texts.p4}
              </motion.p>
              <motion.p variants={textAnimation} custom={5}>
                {texts.p5}
              </motion.p>
            </motion.div>
          </motion.div>

          {/* --- 2. Визуальный блок с картой --- */}
          <div className="relative order-1 lg:order-2 h-96 lg:h-[600px]">
            
            {/* Фоновая карта с параллакс эффектом */}
            <motion.div
              className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 1.2,
                ease: [0.23, 1, 0.32, 1] as const,
                delay: 0.1
              }}
            >
              <Image
                src="/kaz.jpg"
                alt="Карта Казахстана"
                fill
                className="object-cover"
                style={{
                  filter: theme === 'dark' 
                    ? 'brightness(0.5) contrast(1.3) saturate(1.2) hue-rotate(-10deg)' 
                    : 'brightness(0.7) contrast(1.2) saturate(1.1)',
                  transform: 'scale(1.05)'
                }}
                quality={100}
                priority
              />
              
              {/* Многослойный градиентный оверлей */}
              <div className="absolute inset-0 bg-linear-to-br from-black/40 via-transparent to-transparent" />
              <div 
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${
                    theme === 'dark' ? 'rgba(102, 204, 255, 0.15)' : 'rgba(37, 99, 235, 0.1)'
                  } 0%, transparent 70%)`
                }}
              />
            </motion.div>

            {/* SVG слой для нейронных сетей - кинематографическая версия */}
            <div className="absolute inset-0 pointer-events-none">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                className="absolute inset-0"
              >
                <defs>
                  {/* Динамические градиенты для каждого города */}
                  {kazakhstanCities.map((city, index) => (
                    <radialGradient 
                      key={`city-gradient-${index}`}
                      id={`cityGradient-${index}`}
                      cx="50%" 
                      cy="50%" 
                      r="50%"
                    >
                      <stop offset="0%" stopColor={city.color} stopOpacity="1" />
                      <stop offset="50%" stopColor={city.color} stopOpacity="0.8" />
                      <stop offset="100%" stopColor={city.color} stopOpacity="0.3" />
                    </radialGradient>
                  ))}
                  
                  {globalNodes.map((node, index) => (
                    <radialGradient 
                      key={`global-gradient-${index}`}
                      id={`globalGradient-${index}`}
                      cx="50%" 
                      cy="50%" 
                      r="50%"
                    >
                      <stop offset="0%" stopColor={node.color} stopOpacity="1" />
                      <stop offset="60%" stopColor={node.color} stopOpacity="0.7" />
                      <stop offset="100%" stopColor={node.color} stopOpacity="0.2" />
                    </radialGradient>
                  ))}

                  {/* Нейронные градиенты */}
                  <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#66ccff" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#ff00ff" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#00ff88" stopOpacity="0.4" />
                  </linearGradient>
                </defs>

                <AnimatePresence>
                  {isInView && (
                    <>
                      {/* Сложные нейронные соединения с бликами */}
                      {kazakhstanCities.slice(0, 5).map((city, index) => (
                        kazakhstanCities.slice(index + 1, Math.min(index + 4, kazakhstanCities.length)).map((targetCity, targetIndex) => (
                          <g key={`complex-connection-${index}-${targetIndex}`}>
                            {/* Основная линия соединения */}
                            <motion.line
                              x1={city.x}
                              y1={city.y}
                              x2={targetCity.x}
                              y2={targetCity.y}
                              stroke="url(#neuralGradient)"
                              strokeWidth="0.6"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{ pathLength: 1, opacity: 0.7 }}
                              transition={{
                                duration: 1.8,
                                delay: city.delay + 0.3,
                                ease: "easeInOut"
                              }}
                              style={{
                                filter: `drop-shadow(0 0 8px ${city.color.replace('#', 'rgba(').replace(/([0-9A-F]{2})/g, '$1,') + '0.3)'})`
                              }}
                            />
                            
                            {/* Бегущие импульсы */}
                            <motion.circle
                              r="0.8"
                              fill={city.color}
                              initial={{ 
                                x: city.x, 
                                y: city.y,
                                opacity: 0
                              }}
                              animate={{ 
                                x: targetCity.x, 
                                y: targetCity.y,
                                opacity: [0, 0.9, 0.6, 0]
                              }}
                              transition={{
                                duration: 3,
                                delay: city.delay + 1.2,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: 2
                              }}
                              style={{
                                filter: `drop-shadow(0 0 12px ${city.color})`
                              }}
                            />
                          </g>
                        ))
                      ))}

                      {/* Глобальные соединения с космическим эффектом */}
                      {globalNodes.map((globalNode, globalIndex) => (
                        kazakhstanCities.slice(0, 2).map((city, cityIndex) => (
                          <g key={`cosmic-connection-${globalIndex}-${cityIndex}`}>
                            <motion.line
                              x1={city.x}
                              y1={city.y}
                              x2={globalNode.x}
                              y2={globalNode.y}
                              stroke={globalNode.color}
                              strokeWidth="0.4"
                              strokeDasharray="2,3"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{ pathLength: 1, opacity: 0.5 }}
                              transition={{
                                duration: 2.5,
                                delay: globalNode.delay + cityIndex * 0.1,
                                ease: "easeInOut"
                              }}
                              style={{
                                filter: `drop-shadow(0 0 10px ${globalNode.color})`
                              }}
                            />
                            
                            {/* Космические частицы */}
                            <motion.circle
                              r="0.5"
                              fill={globalNode.color}
                              initial={{ 
                                x: city.x, 
                                y: city.y,
                                opacity: 0
                              }}
                              animate={{ 
                                x: globalNode.x, 
                                y: globalNode.y,
                                opacity: [0, 0.8, 0]
                              }}
                              transition={{
                                duration: 2,
                                delay: globalNode.delay + 1.5,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: 1.8
                              }}
                            />
                          </g>
                        ))
                      ))}

                      {/* Города с 3D-эффектом */}
                      {kazakhstanCities.map((city, index) => (
                        <g key={`3d-city-${index}`}>
                          {/* Внешнее свечение */}
                          <motion.circle
                            cx={city.x}
                            cy={city.y}
                            r="3"
                            fill="none"
                            stroke={city.color}
                            strokeWidth="0.1"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: [0, 1.8, 1.2], opacity: [0, 0.4, 0.2] }}
                            transition={{
                              duration: 2,
                              delay: city.delay + 0.2,
                              ease: "easeOut"
                            }}
                            style={{
                              filter: `blur(2px) drop-shadow(0 0 15px ${city.color})`
                            }}
                          />
                          
                          {/* Основной узел */}
                          <motion.circle
                            cx={city.x}
                            cy={city.y}
                            r={city.importance === 'major' ? "2" : "1.2"}
                            fill={`url(#cityGradient-${index})`}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                              duration: 0.7,
                              delay: city.delay + 0.4,
                              ease: "easeOut"
                            }}
                            style={{
                              filter: `drop-shadow(0 0 12px ${city.color})`
                            }}
                          >
                            <animate
                              attributeName="r"
                              values={city.importance === 'major' ? "2;2.3;2" : "1.2;1.5;1.2"}
                              dur="3s"
                              repeatCount="indefinite"
                              calcMode="spline"
                              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                            />
                          </motion.circle>
                          
                          {/* Пульсирующие кольца для крупных городов */}
                          {city.importance === 'major' && (
                            <>
                              <motion.circle
                                cx={city.x}
                                cy={city.y}
                                r="0"
                                fill="none"
                                stroke={city.color}
                                strokeWidth="0.3"
                                initial={{ r: 0, opacity: 0 }}
                                animate={{ 
                                  r: [0, 15, 25], 
                                  opacity: [0, 0.6, 0] 
                                }}
                                transition={{
                                  duration: 4,
                                  delay: city.delay + 2,
                                  ease: "easeOut",
                                  repeat: Infinity,
                                  repeatDelay: 5
                                }}
                                style={{
                                  filter: `drop-shadow(0 0 10px ${city.color})`
                                }}
                              />
                            </>
                          )}
                        </g>
                      ))}

                      {/* Глобальные узлы */}
                      {globalNodes.map((node, index) => (
                        <g key={`cosmic-node-${index}`}>
                          <motion.circle
                            cx={node.x}
                            cy={node.y}
                            r="1.8"
                            fill={`url(#globalGradient-${index})`}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 0.9 }}
                            transition={{
                              duration: 0.6,
                              delay: node.delay + 0.2,
                              ease: "easeOut"
                            }}
                            style={{
                              filter: `drop-shadow(0 0 10px ${node.color})`
                            }}
                          >
                            <animate
                              attributeName="r"
                              values="1.8;2.2;1.8"
                              dur="2.8s"
                              repeatCount="indefinite"
                              calcMode="spline"
                              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                            />
                          </motion.circle>
                        </g>
                      ))}

                      {/* Атмосферные эффекты */}
                      <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 2.5 }}
                      >
                        {/* Медленные частицы */}
                        {[...Array(8)].map((_, i) => (
                          <motion.circle
                            key={`atmospheric-${i}`}
                            cx={20 + i * 10}
                            cy={15 + (i % 3) * 20}
                            r="0.4"
                            fill="#66ccff"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ 
                              opacity: [0, 0.3, 0.1, 0],
                              scale: [0, 1, 0.8, 0]
                            }}
                            transition={{
                              duration: 6,
                              delay: 2.5 + i * 0.5,
                              repeat: Infinity,
                              repeatDelay: 2
                            }}
                            style={{
                              filter: 'blur(1px)'
                            }}
                          />
                        ))}
                      </motion.g>
                    </>
                  )}
                </AnimatePresence>
              </svg>
            </div>

            {/* Дополнительные декоративные элементы */}
            <div className="absolute inset-0 pointer-events-none">
              <div 
                className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full opacity-30"
                style={{
                  background: theme === 'dark' ? '#66ccff' : '#3b82f6',
                  boxShadow: `0 0 20px 5px ${theme === 'dark' ? '#66ccff' : '#3b82f6'}`
                }}
              />
              <div 
                className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 rounded-full opacity-25"
                style={{
                  background: theme === 'dark' ? '#ff00ff' : '#7c3aed',
                  boxShadow: `0 0 15px 3px ${theme === 'dark' ? '#ff00ff' : '#7c3aed'}`
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Декоративный фоновый элемент */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          background: `radial-gradient(circle at 20% 20%, ${
            theme === 'dark' ? '#66ccff' : '#2563eb'
          } 0%, transparent 50%)`
        }}
      />
    </section>
  );
}
