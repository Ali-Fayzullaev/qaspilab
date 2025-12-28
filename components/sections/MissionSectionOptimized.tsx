'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect, useMemo } from 'react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { 
  Users, 
  Target, 
  Rocket, 
  TrendingUp, 
  Code, 
  BarChart3, 
  BookOpen, 
  CheckCircle, 
  DollarSign, 
  MapPin, 
  ArrowRight 
} from 'lucide-react';

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
    title: t.missionSection.title,
    subtitle: t.missionSection.subtitle,
    teamQualities: t.missionSection.teamQualities,
    promise: t.missionSection.promise,
    services: t.missionSection.services,
    pricing: t.missionSection.pricing,
    location: t.missionSection.location,
    cta: t.missionSection.cta
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
        ease: [0.23, 1, 0.32, 1] as const
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
      className="relative py-24 sm:py-32 transition-all duration-500 overflow-hidden"
      style={{
        background: theme === 'dark' 
          ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
          : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)',
        color: theme === 'dark' ? '#ffffff' : '#1e293b'
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[500px]">
          
          {/* --- 1. Текстовый блок с новым контентом про капитал и команду --- */}
          <motion.div
            className="order-2 lg:order-1 max-w-full overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ 
              duration: 1,
              ease: [0.23, 1, 0.32, 1] as const,
              delay: 0.2
            }}
          >
            {/* Заголовок */}
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-8 leading-tight tracking-tight max-w-full"
              variants={titleAnimation}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              style={{
                wordWrap: 'break-word',
                hyphens: 'auto',
                overflowWrap: 'break-word'
              }}
            >
              {texts.title}
            </motion.h2>
            
            {/* Подзаголовок */}
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl font-semibold text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8,
                delay: 0.4
              }}
            >
              {texts.subtitle}
            </motion.p>

            {/* Качества команды с иконками */}
            <motion.div
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {texts.teamQualities.map((quality, index) => {
                const icons = [Users, Target, Rocket, CheckCircle];
                const Icon = icons[index] || Users;
                const colors = [
                  'text-blue-500 dark:text-blue-400',
                  'text-purple-500 dark:text-purple-400',
                  'text-green-500 dark:text-green-400',
                  'text-orange-500 dark:text-orange-400'
                ];
                
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 text-lg sm:text-xl font-medium"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.6,
                      delay: 0.8 + index * 0.1
                    }}
                  >
                    <Icon className={`w-6 h-6 ${colors[index]}`} />
                    <span className="text-foreground">{quality}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Обещание о запуске стартапов */}
            <motion.p
              className="text-xl sm:text-2xl font-bold text-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {texts.promise}
            </motion.p>

            {/* Услуги с иконками */}
            <motion.div
              className="grid grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              {texts.services.map((service, index) => {
                const serviceIcons = [Code, BarChart3, BookOpen, CheckCircle];
                const Icon = serviceIcons[index] || Code;
                const colors = [
                  'text-cyan-500 dark:text-cyan-400',
                  'text-pink-500 dark:text-pink-400',
                  'text-yellow-500 dark:text-yellow-400',
                  'text-emerald-500 dark:text-emerald-400'
                ];
                
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 text-lg font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.6,
                      delay: 1.6 + index * 0.1
                    }}
                  >
                    <Icon className={`w-5 h-5 ${colors[index]}`} />
                    <span className="text-foreground">{service}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Информация о цене и локации */}
            <motion.div
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 2.0 }}
            >
              <div className="flex items-center gap-3 text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400">
                <DollarSign className="w-8 h-8" />
                {texts.pricing}
              </div>
              
              <div className="flex items-center gap-3 text-lg sm:text-xl font-medium text-blue-600 dark:text-blue-400">
                <MapPin className="w-6 h-6" />
                {texts.location}
              </div>
            </motion.div>

            {/* CTA кнопка */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 2.2 }}
            >
              <motion.button
                className="group relative w-full sm:w-auto px-8 py-4 rounded-2xl text-white font-bold text-lg sm:text-xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #2563eb, #7c3aed, #ec4899)'
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    const headerHeight = 80;
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({
                      top: elementPosition - headerHeight,
                      behavior: 'smooth',
                    });
                  }
                }}
              >
                <span className="relative z-10 flex items-center justify-center sm:justify-start gap-2">
                  {texts.cta}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, #7c3aed, #ec4899, #f59e0b)'
                  }}
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
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