'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from 'next-themes';
import Image from 'next/image';

/**
 * Секция "Наша миссия" 
 * Карта Казахстана с нейронными сетями
 */
export default function MissionSection() {
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
    title: "Мы строим цифровое будущее Казахстана.",
    p1: "Наши продукты помогают компаниям работать быстрее,",
    p2: "предпринимателям — запускать новые идеи,",
    p3: "а людям — взаимодействовать с технологиями легко и с удовольствием.",
    p4: "Мы верим, что Казахстан способен создавать не просто IT-решения,",
    p5: "а глобальные продукты, которыми будут пользоваться во всём мире."
  };

  // Координаты городов Казахстана для нейронных узлов (расширенная сеть)
  const kazakhstanCities = [
    { name: 'Алматы', x: 78, y: 40, delay: 0, importance: 'major' },
    { name: 'Астана', x: 68, y: 54, delay: 0.15, importance: 'major' },
    { name: 'Шымкент', x: 65, y: 38, delay: 0.3, importance: 'major' },
    { name: 'Актобе', x: 52, y: 48, delay: 0.45, importance: 'minor' },
    { name: 'Тараз', x: 68, y: 38, delay: 0.6, importance: 'minor' },
    { name: 'Павлодар', x: 82, y: 55, delay: 0.75, importance: 'minor' },
    { name: 'Караганда', x: 75, y: 48, delay: 0.9, importance: 'minor' },
    { name: 'Усть-Каменогорск', x: 88, y: 46, delay: 1.05, importance: 'minor' },
    { name: 'Семей', x: 85, y: 52, delay: 1.2, importance: 'minor' },
    { name: 'Петропавловск', x: 70, y: 60, delay: 1.35, importance: 'minor' },
    { name: 'Костанай', x: 60, y: 55, delay: 1.5, importance: 'minor' },
    { name: 'Кызылорда', x: 62, y: 42, delay: 1.65, importance: 'minor' },
  ];

  // Глобальные узлы для соединения (расширенная сеть)
  const globalNodes = [
    { name: 'Москва', x: 15, y: 28, delay: 2, region: 'europe' },
    { name: 'Пекин', x: 90, y: 32, delay: 2.2, region: 'asia' },
    { name: 'Лондон', x: 5, y: 22, delay: 2.4, region: 'europe' },
    { name: 'Токио', x: 98, y: 38, delay: 2.6, region: 'asia' },
    { name: 'Дубай', x: 25, y: 18, delay: 2.8, region: 'middle_east' },
    { name: 'Сингапур', x: 92, y: 20, delay: 3, region: 'asia' },
    { name: 'Франкфурт', x: 8, y: 32, delay: 3.2, region: 'europe' },
    { name: 'Сеул', x: 95, y: 44, delay: 3.4, region: 'asia' },
  ];

  if (!mounted) {
    return <section ref={sectionRef} className="h-[50vh] bg-background" />;
  }

  return (
    <section 
      ref={sectionRef} 
      className="relative py-24 sm:py-32 bg-muted/30 transition-colors duration-500 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* --- 1. Текстовый блок --- */}
          <motion.div
            className="z-10 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Заголовок */}
            <motion.h2 
              className="text-4xl md:text-5xl font-extrabold text-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {texts.title}
            </motion.h2>
            
            {/* Абзацы */}
            <div className="space-y-4 text-lg text-muted-foreground">
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {texts.p1}
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {texts.p2}
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {texts.p3}
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="pt-4 font-medium text-foreground/90"
              >
                {texts.p4}
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                {texts.p5}
              </motion.p>
            </div>
          </motion.div>

          {/* --- 2. Визуальный блок с картой --- */}
          <div className="relative order-1 lg:order-2 h-96 lg:h-[500px]">
            
            {/* Фоновая карта Казахстана */}
            <motion.div
              className="relative w-full h-full rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Image
                src="/kaz.jpg"
                alt="Карта Казахстана"
                fill
                className="object-cover"
                style={{
                  filter: theme === 'dark' 
                    ? 'brightness(0.4) contrast(1.2) saturate(1.1)' 
                    : 'brightness(0.6) contrast(1.1) saturate(0.9)'
                }}
              />
              
              {/* Градиентный оверлей */}
              <div 
                className="absolute inset-0"
                style={{
                  background: theme === 'dark'
                    ? 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(139,92,246,0.3) 50%, rgba(0,212,255,0.2) 100%)'
                    : 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(139,92,246,0.4) 50%, rgba(59,130,246,0.3) 100%)'
                }}
              />
            </motion.div>

            {/* SVG слой для нейронных сетей */}
            <div className="absolute inset-0 pointer-events-none">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                className="absolute inset-0"
              >
                {/* Градиенты для синих эффектов */}
                <defs>
                  <radialGradient id="blueGradientDark" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#66ccff" stopOpacity="1" />
                    <stop offset="50%" stopColor="#0099ff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#0066cc" stopOpacity="0.3" />
                  </radialGradient>
                  <radialGradient id="blueGradientLight" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#93c5fd" stopOpacity="1" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.4" />
                  </radialGradient>
                  <radialGradient id="nodeGradientDark" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#99ddff" stopOpacity="1" />
                    <stop offset="70%" stopColor="#0099ff" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#0066cc" stopOpacity="0.6" />
                  </radialGradient>
                  <radialGradient id="nodeGradientLight" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#dbeafe" stopOpacity="1" />
                    <stop offset="70%" stopColor="#60a5fa" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0.7" />
                  </radialGradient>
                </defs>
                {/* Реалистичные нейронные соединения с многослойными эффектами */}
                {isInView && kazakhstanCities.map((city, index) => (
                  kazakhstanCities.slice(index + 1).map((targetCity, targetIndex) => (
                    <motion.g key={`neural-connection-${index}-${targetIndex}`}>
                      {/* Подложка для свечения */}
                      <motion.line
                        x1={city.x}
                        y1={city.y}
                        x2={targetCity.x}
                        y2={targetCity.y}
                        stroke={theme === 'dark' ? 'rgba(0, 212, 255, 0.2)' : 'rgba(59, 130, 246, 0.3)'}
                        strokeWidth="1.2"
                        opacity="0.4"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.4 }}
                        transition={{
                          duration: 2,
                          delay: city.delay + 0.3,
                          ease: "easeInOut"
                        }}
                        style={{
                          filter: `blur(1px) drop-shadow(0 0 8px ${theme === 'dark' ? '#0099cc' : '#3b82f6'})`
                        }}
                      />
                      
                      {/* Основная синяя линия */}
                      <motion.line
                        x1={city.x}
                        y1={city.y}
                        x2={targetCity.x}
                        y2={targetCity.y}
                        stroke={theme === 'dark' ? '#00aaff' : '#2563eb'}
                        strokeWidth="0.4"
                        opacity="0.8"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.8 }}
                        transition={{
                          duration: 1.8,
                          delay: city.delay + 0.6,
                          ease: "easeInOut"
                        }}
                        style={{
                          filter: `drop-shadow(0 0 4px ${theme === 'dark' ? '#00aaff' : '#2563eb'})`
                        }}
                      />
                      
                      {/* Яркая центральная линия */}
                      <motion.line
                        x1={city.x}
                        y1={city.y}
                        x2={targetCity.x}
                        y2={targetCity.y}
                        stroke={theme === 'dark' ? '#66ccff' : '#60a5fa'}
                        strokeWidth="0.2"
                        opacity="0.9"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.9 }}
                        transition={{
                          duration: 1.5,
                          delay: city.delay + 0.8,
                          ease: "easeInOut"
                        }}
                        style={{
                          filter: `drop-shadow(0 0 6px ${theme === 'dark' ? '#66ccff' : '#60a5fa'})`
                        }}
                      />
                      
                      {/* Энергетические импульсы с градиентом */}
                      <motion.circle
                        r="1.2"
                        fill={theme === 'dark' ? 'url(#blueGradientDark)' : 'url(#blueGradientLight)'}
                        opacity="0.9"
                        initial={{ 
                          x: city.x, 
                          y: city.y,
                          opacity: 0,
                          scale: 0 
                        }}
                        animate={{ 
                          x: targetCity.x, 
                          y: targetCity.y,
                          opacity: [0, 1, 0.7, 0],
                          scale: [0, 1.2, 1, 0.8]
                        }}
                        transition={{
                          duration: 2.5,
                          delay: city.delay + 1.8,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatDelay: 4
                        }}
                        style={{
                          filter: `drop-shadow(0 0 8px ${theme === 'dark' ? '#00aaff' : '#2563eb'})`
                        }}
                      />
                      
                      {/* Быстрые малые импульсы */}
                      <motion.circle
                        r="0.6"
                        fill={theme === 'dark' ? '#99ddff' : '#93c5fd'}
                        opacity="0.8"
                        initial={{ 
                          x: city.x, 
                          y: city.y,
                          opacity: 0 
                        }}
                        animate={{ 
                          x: targetCity.x, 
                          y: targetCity.y,
                          opacity: [0, 0.8, 0]
                        }}
                        transition={{
                          duration: 1.8,
                          delay: city.delay + 2.5,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatDelay: 2.2
                        }}
                        style={{
                          filter: `drop-shadow(0 0 4px ${theme === 'dark' ? '#99ddff' : '#93c5fd'})`
                        }}
                      />
                    </motion.g>
                  ))
                ))}

                {/* Шикарные глобальные соединения с многослойными синими эффектами */}
                {isInView && globalNodes.map((globalNode, index) => (
                  kazakhstanCities.slice(0, 4).map((city, cityIndex) => (
                    <motion.g key={`global-neural-${index}-${cityIndex}`}>
                      {/* Широкое синее свечение основы */}
                      <motion.line
                        x1={city.x}
                        y1={city.y}
                        x2={globalNode.x}
                        y2={globalNode.y}
                        stroke={theme === 'dark' ? 'rgba(0, 170, 255, 0.15)' : 'rgba(37, 99, 235, 0.2)'}
                        strokeWidth="2"
                        opacity="0.3"
                        strokeDasharray="2,3"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.3 }}
                        transition={{
                          duration: 3,
                          delay: globalNode.delay + cityIndex * 0.3,
                          ease: "easeInOut"
                        }}
                        style={{
                          filter: `blur(1.5px) drop-shadow(0 0 12px ${theme === 'dark' ? '#0099cc' : '#2563eb'})`
                        }}
                      />
                      
                      {/* Средний слой соединения */}
                      <motion.line
                        x1={city.x}
                        y1={city.y}
                        x2={globalNode.x}
                        y2={globalNode.y}
                        stroke={theme === 'dark' ? '#0099ff' : '#3b82f6'}
                        strokeWidth="0.4"
                        opacity="0.6"
                        strokeDasharray="1.5,2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.6 }}
                        transition={{
                          duration: 2.5,
                          delay: globalNode.delay + 0.5,
                          ease: "easeInOut"
                        }}
                        style={{
                          filter: `drop-shadow(0 0 6px ${theme === 'dark' ? '#0099ff' : '#3b82f6'})`
                        }}
                      />
                      
                      {/* Яркая центральная линия */}
                      <motion.line
                        x1={city.x}
                        y1={city.y}
                        x2={globalNode.x}
                        y2={globalNode.y}
                        stroke={theme === 'dark' ? '#66ccff' : '#60a5fa'}
                        strokeWidth="0.2"
                        opacity="0.8"
                        strokeDasharray="1,1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.8 }}
                        transition={{
                          duration: 2,
                          delay: globalNode.delay + 0.8,
                          ease: "easeInOut"
                        }}
                        style={{
                          filter: `drop-shadow(0 0 8px ${theme === 'dark' ? '#66ccff' : '#60a5fa'})`
                        }}
                      />
                      
                      {/* Крупные энергетические импульсы */}
                      <motion.circle
                        r="1"
                        fill={theme === 'dark' ? 'url(#blueGradientDark)' : 'url(#blueGradientLight)'}
                        opacity="0.9"
                        initial={{ 
                          x: city.x, 
                          y: city.y,
                          opacity: 0,
                          scale: 0
                        }}
                        animate={{ 
                          x: globalNode.x, 
                          y: globalNode.y,
                          opacity: [0, 0.9, 0.6, 0],
                          scale: [0, 1.4, 1.2, 0.8]
                        }}
                        transition={{
                          duration: 4,
                          delay: globalNode.delay + 2,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatDelay: 6
                        }}
                        style={{
                          filter: `drop-shadow(0 0 12px ${theme === 'dark' ? '#0099ff' : '#3b82f6'})`
                        }}
                      />
                      
                      {/* Множественные малые импульсы */}
                      <motion.circle
                        r="0.4"
                        fill={theme === 'dark' ? '#aaddff' : '#dbeafe'}
                        opacity="0.7"
                        initial={{ 
                          x: city.x, 
                          y: city.y,
                          opacity: 0 
                        }}
                        animate={{ 
                          x: globalNode.x, 
                          y: globalNode.y,
                          opacity: [0, 0.7, 0]
                        }}
                        transition={{
                          duration: 3.5,
                          delay: globalNode.delay + 3,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatDelay: 2.5
                        }}
                      />
                    </motion.g>
                  ))
                ))}

                {/* Шикарные узлы городов Казахстана с синими градиентами */}
                {kazakhstanCities.map((city, index) => (
                  <motion.g key={`city-node-${index}`}>
                    {/* Внешний синий ореол */}
                    <motion.circle
                      cx={city.x}
                      cy={city.y}
                      r="4"
                      fill="none"
                      stroke={theme === 'dark' ? 'rgba(102, 204, 255, 0.3)' : 'rgba(96, 165, 250, 0.4)'}
                      strokeWidth="0.2"
                      opacity="0.4"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { 
                        scale: [0, 2, 1.5], 
                        opacity: [0, 0.4, 0.3] 
                      } : {}}
                      transition={{
                        duration: 2,
                        delay: city.delay + 0.3,
                        ease: "easeOut"
                      }}
                      style={{
                        filter: `blur(0.5px) drop-shadow(0 0 12px ${theme === 'dark' ? '#66ccff' : '#60a5fa'})`
                      }}
                    />
                    
                    {/* Средний слой свечения */}
                    <motion.circle
                      cx={city.x}
                      cy={city.y}
                      r="2.5"
                      fill="none"
                      stroke={theme === 'dark' ? '#0099ff' : '#3b82f6'}
                      strokeWidth="0.15"
                      opacity="0.6"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { 
                        scale: [0, 1.3, 1], 
                        opacity: [0, 0.6, 0.5] 
                      } : {}}
                      transition={{
                        duration: 1.5,
                        delay: city.delay + 0.5,
                        ease: "easeOut"
                      }}
                      style={{
                        filter: `drop-shadow(0 0 8px ${theme === 'dark' ? '#0099ff' : '#3b82f6'})`
                      }}
                    />
                    
                    {/* Основной узел города с градиентом (уменьшенный) */}
                    <motion.circle
                      cx={city.x}
                      cy={city.y}
                      r={city.importance === 'major' ? "1.5" : "1"}
                      fill={theme === 'dark' ? 'url(#nodeGradientDark)' : 'url(#nodeGradientLight)'}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{
                        duration: 0.8,
                        delay: city.delay + 0.8,
                        ease: "easeOut"
                      }}
                      style={{
                        filter: `drop-shadow(0 0 ${city.importance === 'major' ? '8' : '4'}px ${theme === 'dark' ? '#66ccff' : '#60a5fa'})`
                      }}
                    >
                      <animate
                        attributeName="r"
                        values={city.importance === 'major' ? "1.5;1.8;1.5" : "1;1.3;1"}
                        dur="4s"
                        repeatCount="indefinite"
                      />
                    </motion.circle>
                    
                    {/* Информационные волны от крупных городов */}
                    {city.importance === 'major' && (
                      <>
                        <motion.circle
                          cx={city.x}
                          cy={city.y}
                          r="0"
                          fill="none"
                          stroke={theme === 'dark' ? '#66ccff' : '#60a5fa'}
                          strokeWidth="0.3"
                          opacity="0.5"
                          initial={{ r: 0, opacity: 0 }}
                          animate={{ 
                            r: [0, 12, 18], 
                            opacity: [0, 0.5, 0] 
                          }}
                          transition={{
                            duration: 3,
                            delay: city.delay + 2.5,
                            ease: "easeOut",
                            repeat: Infinity,
                            repeatDelay: 4
                          }}
                          style={{
                            filter: `drop-shadow(0 0 6px ${theme === 'dark' ? '#66ccff' : '#60a5fa'})`
                          }}
                        />
                        <motion.circle
                          cx={city.x}
                          cy={city.y}
                          r="0"
                          fill="none"
                          stroke={theme === 'dark' ? '#99ddff' : '#93c5fd'}
                          strokeWidth="0.2"
                          opacity="0.3"
                          initial={{ r: 0, opacity: 0 }}
                          animate={{ 
                            r: [0, 8, 14], 
                            opacity: [0, 0.3, 0] 
                          }}
                          transition={{
                            duration: 2.5,
                            delay: city.delay + 3,
                            ease: "easeOut",
                            repeat: Infinity,
                            repeatDelay: 3.5
                          }}
                        />
                      </>
                    )}
                  </motion.g>
                ))}

                {/* Синие глобальные узлы с региональными эффектами */}
                {globalNodes.map((node, index) => (
                  <motion.g key={`global-node-${index}`}>
                    {/* Внешний синий ореол */}
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r="3"
                      fill="none"
                      stroke={theme === 'dark' ? 'rgba(0, 153, 255, 0.2)' : 'rgba(59, 130, 246, 0.3)'}
                      strokeWidth="0.1"
                      opacity="0.3"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { 
                        scale: [0, 1.8, 1.2], 
                        opacity: [0, 0.3, 0.2] 
                      } : {}}
                      transition={{
                        duration: 1.8,
                        delay: node.delay + 0.2,
                        ease: "easeOut"
                      }}
                      style={{
                        filter: `blur(0.8px) drop-shadow(0 0 8px ${theme === 'dark' ? '#0099ff' : '#3b82f6'})`
                      }}
                    />
                    
                    {/* Основной глобальный узел (уменьшенный) */}
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r="1.1"
                      fill={theme === 'dark' ? 'url(#blueGradientDark)' : 'url(#blueGradientLight)'}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 0.9 } : {}}
                      transition={{
                        duration: 0.6,
                        delay: node.delay + 0.5,
                        ease: "easeOut"
                      }}
                      style={{
                        filter: `drop-shadow(0 0 6px ${theme === 'dark' ? '#0099ff' : '#3b82f6'})`
                      }}
                    >
                      <animate
                        attributeName="r"
                        values="1.1;1.4;1.1"
                        dur="3.5s"
                        repeatCount="indefinite"
                      />
                    </motion.circle>
                    
                    {/* Региональное влияние - двойные волны */}
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r="0"
                      fill="none"
                      stroke={theme === 'dark' ? '#0099ff' : '#3b82f6'}
                      strokeWidth="0.2"
                      opacity="0.25"
                      initial={{ r: 0, opacity: 0 }}
                      animate={{ 
                        r: [0, 8, 14], 
                        opacity: [0, 0.25, 0] 
                      }}
                      transition={{
                        duration: 4,
                        delay: node.delay + 2,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatDelay: 5
                      }}
                      style={{
                        filter: `drop-shadow(0 0 4px ${theme === 'dark' ? '#0099ff' : '#3b82f6'})`
                      }}
                    />
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r="0"
                      fill="none"
                      stroke={theme === 'dark' ? '#66ccff' : '#60a5fa'}
                      strokeWidth="0.15"
                      opacity="0.2"
                      initial={{ r: 0, opacity: 0 }}
                      animate={{ 
                        r: [0, 6, 12], 
                        opacity: [0, 0.2, 0] 
                      }}
                      transition={{
                        duration: 3.5,
                        delay: node.delay + 2.5,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatDelay: 4.5
                      }}
                    />
                  </motion.g>
                ))}
                {/* Улучшенные информационные потоки с синими эффектами */}
                <motion.g 
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 1.5, delay: 5 }}
                >
                  {kazakhstanCities.slice(0, 6).map((city, index) => (
                    <motion.g key={`enhanced-data-flow-${index}`}>
                      {/* Основной поток данных вверх с градиентом */}
                      <motion.circle
                        cx={city.x}
                        cy={city.y}
                        r="0.8"
                        fill={theme === 'dark' ? 'url(#blueGradientDark)' : 'url(#blueGradientLight)'}
                        opacity="0.8"
                        animate={{ 
                          cy: [city.y, city.y - 20, city.y - 35],
                          r: [0.8, 1.2, 0.6],
                          opacity: [0.8, 0.5, 0]
                        }}
                        transition={{
                          duration: 3,
                          ease: "easeOut",
                          repeat: Infinity,
                          repeatDelay: index * 1.2 + 3
                        }}
                        style={{
                          filter: `drop-shadow(0 0 6px ${theme === 'dark' ? '#66ccff' : '#60a5fa'})`
                        }}
                      />
                      
                      {/* Боковой поток данных */}
                      <motion.circle
                        cx={city.x}
                        cy={city.y}
                        r="0.5"
                        fill={theme === 'dark' ? '#99ddff' : '#93c5fd'}
                        opacity="0.7"
                        animate={{ 
                          cx: [city.x, city.x + 25, city.x + 45],
                          cy: [city.y, city.y - 8, city.y - 12],
                          opacity: [0.7, 0.4, 0]
                        }}
                        transition={{
                          duration: 2.5,
                          ease: "easeOut",
                          repeat: Infinity,
                          repeatDelay: index * 0.8 + 2
                        }}
                        style={{
                          filter: `drop-shadow(0 0 4px ${theme === 'dark' ? '#99ddff' : '#93c5fd'})`
                        }}
                      />
                      
                      {/* Малые информационные частицы */}
                      <motion.circle
                        cx={city.x}
                        cy={city.y}
                        r="0.3"
                        fill={theme === 'dark' ? '#cceeff' : '#dbeafe'}
                        opacity="0.6"
                        animate={{ 
                          cx: [city.x, city.x - 15, city.x - 30],
                          cy: [city.y, city.y + 10, city.y + 18],
                          opacity: [0.6, 0.3, 0]
                        }}
                        transition={{
                          duration: 2,
                          ease: "easeOut",
                          repeat: Infinity,
                          repeatDelay: index * 0.6 + 1.5
                        }}
                      />
                    </motion.g>
                  ))}
                </motion.g>

                {/* Дополнительные микроузлы для плотности сети */}
                <motion.g 
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 2, delay: 6 }}
                >
                  {[
                    { x: 72, y: 46, delay: 4 },
                    { x: 66, y: 52, delay: 4.2 },
                    { x: 80, y: 42, delay: 4.4 },
                    { x: 58, y: 45, delay: 4.6 },
                    { x: 74, y: 58, delay: 4.8 },
                    { x: 84, y: 50, delay: 5 },
                    { x: 64, y: 48, delay: 5.2 },
                    { x: 76, y: 45, delay: 5.4 },
                  ].map((microNode, index) => (
                    <motion.g key={`micro-node-${index}`}>
                      {/* Малый узел */}
                      <motion.circle
                        cx={microNode.x}
                        cy={microNode.y}
                        r="0.8"
                        fill={theme === 'dark' ? '#4da6ff' : '#7dd3fc'}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 0.7 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: microNode.delay,
                          ease: "easeOut"
                        }}
                        style={{
                          filter: `drop-shadow(0 0 3px ${theme === 'dark' ? '#4da6ff' : '#7dd3fc'})`
                        }}
                      >
                        <animate
                          attributeName="r"
                          values="0.8;1.1;0.8"
                          dur="2.5s"
                          repeatCount="indefinite"
                        />
                      </motion.circle>
                      
                      {/* Малые информационные волны */}
                      <motion.circle
                        cx={microNode.x}
                        cy={microNode.y}
                        r="0"
                        fill="none"
                        stroke={theme === 'dark' ? '#4da6ff' : '#7dd3fc'}
                        strokeWidth="0.1"
                        opacity="0.2"
                        initial={{ r: 0, opacity: 0 }}
                        animate={{ 
                          r: [0, 4, 6], 
                          opacity: [0, 0.2, 0] 
                        }}
                        transition={{
                          duration: 2,
                          delay: microNode.delay + 1,
                          ease: "easeOut",
                          repeat: Infinity,
                          repeatDelay: 3
                        }}
                      />
                    </motion.g>
                  ))}
                </motion.g>
              </svg>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}