'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { Zap, Handshake, Brain, Sparkles } from 'lucide-react';

/**
 * Секция "Почему мы" 
 * Лабораторная тематика с анимированными карточками преимуществ
 */
export default function WhyUsSection() {
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
    title: "Нас выбирают не за код. Нас выбирают за смысл.",
  };

  // Карточки преимуществ
  const advantages = [
    {
      id: 1,
      icon: Zap,
      title: "Скорость",
      description: "Мы делаем быстро — но не в ущерб качеству.",
      color: theme === 'dark' ? '#00d4ff' : '#3b82f6',
      gradient: theme === 'dark' 
        ? 'linear-gradient(135deg, #00d4ff, #0099cc)' 
        : 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
      delay: 0
    },
    {
      id: 2,
      icon: Handshake,
      title: "Партнёрство",
      description: "Мы в проекте так, будто это наш собственный.",
      color: theme === 'dark' ? '#8b5cf6' : '#9333ea',
      gradient: theme === 'dark' 
        ? 'linear-gradient(135deg, #8b5cf6, #7c3aed)' 
        : 'linear-gradient(135deg, #9333ea, #7c3aed)',
      delay: 0.2
    },
    {
      id: 3,
      icon: Brain,
      title: "Продуктовое мышление",
      description: "Мы не просто выполняем задачу — думаем как бизнес.",
      color: theme === 'dark' ? '#06b6d4' : '#0ea5e9',
      gradient: theme === 'dark' 
        ? 'linear-gradient(135deg, #06b6d4, #0891b2)' 
        : 'linear-gradient(135deg, #0ea5e9, #0284c7)',
      delay: 0.4
    },
    {
      id: 4,
      icon: Brain,
      title: "Инновации",
      description: "Мы тестируем, внедряем, улучшаем. Каждый день.",
      color: theme === 'dark' ? '#a855f7' : '#c084fc',
      gradient: theme === 'dark' 
        ? 'linear-gradient(135deg, #a855f7, #9333ea)' 
        : 'linear-gradient(135deg, #c084fc, #a855f7)',
      delay: 0.6
    }
  ];

  if (!mounted) {
    return <section ref={sectionRef} className="h-[50vh] bg-background" />;
  }

  return (
    <section 
      ref={sectionRef} 
      className="relative py-24 sm:py-32 bg-muted/30 transition-colors duration-500 overflow-hidden"
      style={{
          background: theme === 'dark' 
            ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
            : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)',
          color: theme === 'dark' ? '#ffffff' : '#1e293b'
        }}
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* --- 1. Текстовый блок с карточками (левая сторона) --- */}
          <motion.div
            className="z-10 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
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
            
            {/* Карточки преимуществ */}
            <div className="grid gap-6">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={advantage.id}
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.3 + advantage.delay,
                    ease: "easeOut"
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Фон карточки с градиентом */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                    style={{ background: advantage.gradient }}
                  />
                  
                  {/* Светящаяся граница */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-50"
                    style={{ borderColor: advantage.color }}
                    animate={isInView ? {
                      boxShadow: [
                        `0 0 0 ${advantage.color}00`,
                        `0 0 20px ${advantage.color}40`,
                        `0 0 0 ${advantage.color}00`
                      ]
                    } : {}}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: advantage.delay + 1
                    }}
                  />
                  
                  {/* Основное содержимое карточки */}
                  <div className="relative p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border shadow-lg">
                    <div className="flex items-start gap-4">
                      {/* Иконка */}
                      <motion.div 
                        className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center shadow-lg"
                        style={{ 
                          background: advantage.gradient,
                          color: 'white'
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: [0, -5, 5, 0]
                        }}
                        transition={{ duration: 0.3 }}
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
                    
                    {/* Декоративные элементы */}
                    <motion.div
                      className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-60"
                      style={{ backgroundColor: advantage.color }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: advantage.delay + 0.5
                      }}
                    />
                    
                    <motion.div
                      className="absolute bottom-4 right-6 w-1 h-1 rounded-full opacity-40"
                      style={{ backgroundColor: advantage.color }}
                      animate={{
                        scale: [0.5, 1, 0.5],
                        opacity: [0.4, 0.8, 0.4]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: advantage.delay + 1
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* --- 2. Визуальный блок с лабораторией (правая сторона) --- */}
          <div className="relative order-1 lg:order-2 h-96 lg:h-[600px]">
            
            {/* Фоновое изображение лаборатории */}
            <motion.div
              className="relative w-full h-full rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Image
                src="/lab.jpg"
                alt="Лаборатория Qaspilab"
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
                    ? 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,212,255,0.3) 30%, rgba(139,92,246,0.3) 70%, rgba(168,85,247,0.2) 100%)'
                    : 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(59,130,246,0.3) 30%, rgba(147,51,234,0.3) 70%, rgba(124,58,237,0.2) 100%)'
                }}
              />
            </motion.div>

            {/* Анимированные элементы лаборатории */}
            <div className="absolute inset-0 pointer-events-none">
              
              {/* Пузырьки данных */}
              {[...Array(8)].map((_, index) => (
                <motion.div
                  key={`bubble-${index}`}
                  className="absolute w-3 h-3 rounded-full opacity-70"
                  style={{
                    background: theme === 'dark' 
                      ? ['#00d4ff', '#8b5cf6', '#06b6d4', '#a855f7'][index % 4]
                      : ['#3b82f6', '#9333ea', '#0ea5e9', '#c084fc'][index % 4],
                    left: `${20 + (index * 12) % 60}%`,
                    top: `${30 + (index * 8) % 40}%`,
                    filter: `drop-shadow(0 0 6px ${theme === 'dark' 
                      ? ['#00d4ff', '#8b5cf6', '#06b6d4', '#a855f7'][index % 4]
                      : ['#3b82f6', '#9333ea', '#0ea5e9', '#c084fc'][index % 4]})`
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? {
                    scale: [0, 1, 0],
                    opacity: [0, 0.7, 0],
                    y: [-20, -40, -60]
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5 + 2,
                    ease: "easeOut"
                  }}
                />
              ))}

              {/* Линии данных */}
              {[...Array(4)].map((_, index) => (
                <motion.div
                  key={`data-line-${index}`}
                  className="absolute h-0.5 opacity-60"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${
                      theme === 'dark' 
                        ? ['#00d4ff', '#8b5cf6', '#06b6d4', '#a855f7'][index % 4]
                        : ['#3b82f6', '#9333ea', '#0ea5e9', '#c084fc'][index % 4]
                    }, transparent)`,
                    width: '60px',
                    left: `${15 + index * 20}%`,
                    top: `${25 + index * 15}%`,
                    transform: `rotate(${index * 30}deg)`
                  }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={isInView ? {
                    scaleX: [0, 1, 0],
                    opacity: [0, 0.6, 0]
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.4 + 1,
                    ease: "easeInOut"
                  }}
                />
              ))}

              {/* Световые частицы */}
              {[...Array(6)].map((_, index) => (
                <motion.div
                  key={`light-particle-${index}`}
                  className="absolute w-1 h-1 rounded-full"
                  style={{
                    background: theme === 'dark' ? '#ffffff' : '#f8fafc',
                    left: `${30 + (index * 15) % 50}%`,
                    top: `${40 + (index * 10) % 30}%`,
                    boxShadow: `0 0 8px ${theme === 'dark' ? '#ffffff' : '#f8fafc'}`
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? {
                    scale: [0, 1.5, 0],
                    opacity: [0, 1, 0],
                    x: [0, 20, 40],
                    y: [0, -10, -20]
                  } : {}}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.7 + 3,
                    ease: "easeOut"
                  }}
                />
              ))}

              {/* Центральный реактор идей */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1.5 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full border-2 opacity-40"
                  style={{
                    borderColor: theme === 'dark' ? '#00d4ff' : '#3b82f6',
                    background: theme === 'dark'
                      ? 'radial-gradient(circle, rgba(0,212,255,0.1) 0%, rgba(139,92,246,0.05) 50%, transparent 70%)'
                      : 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(147,51,234,0.1) 50%, transparent 70%)',
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360],
                    borderColor: theme === 'dark' 
                      ? ['#00d4ff', '#8b5cf6', '#a855f7', '#00d4ff']
                      : ['#3b82f6', '#9333ea', '#c084fc', '#3b82f6']
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Импульсы от реактора */}
                <motion.div
                  className="absolute inset-0 w-16 h-16 rounded-full border border-dashed opacity-30"
                  style={{ borderColor: theme === 'dark' ? '#8b5cf6' : '#9333ea' }}
                  animate={{
                    scale: [1, 2, 3],
                    opacity: [0.3, 0.1, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}