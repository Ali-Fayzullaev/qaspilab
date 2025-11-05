'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { Lightbulb, PuzzleIcon, Code, Rocket } from 'lucide-react';

/**
 * Секция "Как мы работаем" 
 * Линия времени с анимацией и диалогами
 */
export default function WorkflowSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  
  // Ref для отслеживания видимости секции
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true,
    amount: 0.2
  });

  // Состояние для предотвращения ошибок гидратации
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Тексты согласно требованию
  const texts = {
    title: "Мы создаём, как думаем. Просто. Прозрачно. Быстро.",
  };

  // Этапы работы с диалогами
  const workflowSteps = [
    {
      id: 1,
      icon: Lightbulb,
      title: "Идея",
      subtitle: "вы приходите с мечтой",
      clientDialog: "У меня есть идея...",
      qaspilabDialog: "Расскажите подробнее!",
      delay: 0
    },
    {
      id: 2,
      icon: PuzzleIcon,
      title: "Концепт",
      subtitle: "мы превращаем её в план",
      clientDialog: "Как это реализовать?",
      qaspilabDialog: "Вот наш план действий:",
      delay: 0.3
    },
    {
      id: 3,
      icon: Code,
      title: "Продукт",
      subtitle: "за 30 дней появляется MVP",
      clientDialog: "Когда будет готово?",
      qaspilabDialog: "MVP через 30 дней!",
      delay: 0.6
    },
    {
      id: 4,
      icon: Rocket,
      title: "Рост",
      subtitle: "продукт начинает жить, мы остаёмся рядом",
      clientDialog: "А что дальше?",
      qaspilabDialog: "Растём вместе с вами!",
      delay: 0.9
    }
  ];

  if (!mounted) {
    return <section ref={sectionRef} className="h-[50vh] bg-background" />;
  }

  return (
    <section 
      ref={sectionRef} 
      className="relative py-24 sm:py-32 bg-background transition-colors duration-500 overflow-hidden"
      style={{
          background: theme === 'dark' 
            ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
            : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)',
          color: theme === 'dark' ? '#ffffff' : '#1e293b'
        }}
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* --- 1. Визуальный блок (левая сторона) --- */}
          <div className="relative order-1 lg:order-1 h-96 lg:h-[500px]">
            
            {/* Фоновое изображение клиента */}
            <motion.div
              className="relative w-full h-full rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Image
                src="/client.jpg"
                alt="Клиент в работе"
                fill
                className="object-cover"
                style={{
                  filter: theme === 'dark' 
                    ? 'brightness(0.4) contrast(1.2) saturate(1.1)' 
                    : 'brightness(0.7) contrast(1.1) saturate(0.9)'
                }}
              />
              
              {/* Градиентный оверлей */}
              <div 
                className="absolute inset-0"
                style={{
                  background: theme === 'dark'
                    ? 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(59,130,246,0.3) 50%, rgba(139,92,246,0.2) 100%)'
                    : 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(59,130,246,0.3) 50%, rgba(139,92,246,0.2) 100%)'
                }}
              />
            </motion.div>

            {/* SVG слой для временной линии */}
            <div className="absolute inset-0 pointer-events-none">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                className="absolute inset-0"
              >
                {/* Градиенты для световых эффектов */}
                <defs>
                  <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={theme === 'dark' ? '#3b82f6' : '#6366f1'} stopOpacity="0.8" />
                    <stop offset="50%" stopColor={theme === 'dark' ? '#8b5cf6' : '#a855f7'} stopOpacity="0.9" />
                    <stop offset="100%" stopColor={theme === 'dark' ? '#06b6d4' : '#0ea5e9'} stopOpacity="0.8" />
                  </linearGradient>
                  <radialGradient id="stepGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor={theme === 'dark' ? '#60a5fa' : '#93c5fd'} stopOpacity="1" />
                    <stop offset="70%" stopColor={theme === 'dark' ? '#3b82f6' : '#6366f1'} stopOpacity="0.8" />
                    <stop offset="100%" stopColor={theme === 'dark' ? '#1d4ed8' : '#4f46e5'} stopOpacity="0.4" />
                  </radialGradient>
                </defs>

                {/* Основная линия времени */}
                <motion.line
                  x1="10"
                  y1="50"
                  x2="90"
                  y2="50"
                  stroke="url(#timelineGradient)"
                  strokeWidth="0.8"
                  opacity="0.7"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 0.7 } : {}}
                  transition={{
                    duration: 2,
                    delay: 1,
                    ease: "easeInOut"
                  }}
                  style={{
                    filter: `drop-shadow(0 0 6px ${theme === 'dark' ? '#3b82f6' : '#6366f1'})`
                  }}
                />

                {/* Световой поток по линии */}
                <motion.circle
                  r="1.5"
                  fill={theme === 'dark' ? '#60a5fa' : '#93c5fd'}
                  opacity="0.8"
                  initial={{ x: 10, opacity: 0 }}
                  animate={isInView ? { x: 90, opacity: [0, 1, 0] } : {}}
                  transition={{
                    duration: 3,
                    delay: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 4
                  }}
                  cy="50"
                  style={{
                    filter: `drop-shadow(0 0 8px ${theme === 'dark' ? '#60a5fa' : '#93c5fd'})`
                  }}
                />

                {/* Точки этапов */}
                {workflowSteps.map((step, index) => (
                  <motion.g key={`step-${step.id}`}>
                    {/* Внешний ореол */}
                    <motion.circle
                      cx={20 + index * 20}
                      cy="50"
                      r="4"
                      fill="none"
                      stroke={theme === 'dark' ? 'rgba(96, 165, 250, 0.4)' : 'rgba(147, 197, 253, 0.5)'}
                      strokeWidth="0.2"
                      opacity="0.5"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { 
                        scale: [0, 1.5, 1], 
                        opacity: [0, 0.5, 0.3] 
                      } : {}}
                      transition={{
                        duration: 1.5,
                        delay: step.delay + 1.5,
                        ease: "easeOut"
                      }}
                      style={{
                        filter: `blur(0.5px) drop-shadow(0 0 8px ${theme === 'dark' ? '#60a5fa' : '#93c5fd'})`
                      }}
                    />
                    
                    {/* Основная точка этапа */}
                    <motion.circle
                      cx={20 + index * 20}
                      cy="50"
                      r="2.5"
                      fill="url(#stepGradient)"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{
                        duration: 0.6,
                        delay: step.delay + 2,
                        ease: "easeOut"
                      }}
                      style={{
                        filter: `drop-shadow(0 0 6px ${theme === 'dark' ? '#3b82f6' : '#6366f1'})`
                      }}
                    >
                      <animate
                        attributeName="r"
                        values="2.5;3;2.5"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </motion.circle>

                    {/* Номер этапа */}
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
                        duration: 0.6,
                        delay: step.delay + 2.5,
                        ease: "easeOut"
                      }}
                    >
                      {step.id}
                    </motion.text>

                    {/* Пульсирующие волны от точек */}
                    <motion.circle
                      cx={20 + index * 20}
                      cy="50"
                      r="0"
                      fill="none"
                      stroke={theme === 'dark' ? '#60a5fa' : '#93c5fd'}
                      strokeWidth="0.2"
                      opacity="0.4"
                      initial={{ r: 0, opacity: 0 }}
                      animate={{ 
                        r: [0, 6, 10], 
                        opacity: [0, 0.4, 0] 
                      }}
                      transition={{
                        duration: 2.5,
                        delay: step.delay + 3,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatDelay: 4
                      }}
                    />
                  </motion.g>
                ))}
              </svg>
            </div>

            {/* Диалоговые окна */}
            {workflowSteps.map((step, index) => (
              <div key={`dialog-${step.id}`}>
                {/* Диалог клиента */}
                <motion.div
                  className="absolute bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-white/20 max-w-[120px]"
                  style={{
                    left: `${15 + index * 20}%`,
                    top: index % 2 === 0 ? '20%' : '70%',
                  }}
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={isInView ? { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1 
                  } : {}}
                  transition={{
                    duration: 0.6,
                    delay: step.delay + 3.5,
                    ease: "easeOut"
                  }}
                >
                  <p className="text-xs text-gray-700 dark:text-gray-300 font-medium">
                    {step.clientDialog}
                  </p>
                  <div 
                    className="absolute w-2 h-2 bg-white/90 dark:bg-gray-800/90 rotate-45 border-r border-b border-white/20"
                    style={{
                      bottom: index % 2 === 0 ? '-4px' : 'auto',
                      top: index % 2 === 0 ? 'auto' : '-4px',
                      left: '20px'
                    }}
                  />
                </motion.div>

                {/* Диалог Qaspilab */}
                <motion.div
                  className="absolute bg-blue-500/90 dark:bg-blue-600/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-blue-300/30 max-w-[130px]"
                  style={{
                    left: `${18 + index * 20}%`,
                    top: index % 2 === 0 ? '65%' : '25%',
                  }}
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={isInView ? { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1 
                  } : {}}
                  transition={{
                    duration: 0.6,
                    delay: step.delay + 4,
                    ease: "easeOut"
                  }}
                >
                  <p className="text-xs text-white font-medium">
                    {step.qaspilabDialog}
                  </p>
                  <div 
                    className="absolute w-2 h-2 bg-blue-500/90 dark:bg-blue-600/90 rotate-45 border-r border-b border-blue-300/30"
                    style={{
                      bottom: index % 2 === 0 ? 'auto' : '-4px',
                      top: index % 2 === 0 ? '-4px' : 'auto',
                      right: '20px'
                    }}
                  />
                </motion.div>
              </div>
            ))}
          </div>

          {/* --- 2. Текстовый блок (правая сторона) --- */}
          <motion.div
            className="z-10 order-2 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Заголовок */}
            <motion.h2 
              className="text-4xl md:text-5xl font-extrabold text-foreground mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {texts.title}
            </motion.h2>
            
            {/* Этапы работы */}
            <div className="space-y-8">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.3 + index * 0.1 
                  }}
                >
                  {/* Иконка этапа */}
                  <motion.div 
                    className="shrink-0 w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      filter: `drop-shadow(0 4px 8px ${theme === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)'})`
                    }}
                  >
                    <step.icon size={24} />
                  </motion.div>
                  
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
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}