'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from 'next-themes';
import { Beaker, Sparkles, Cpu, Zap, Camera } from 'lucide-react';
import ImageGalleryModal from '@/components/modals/ImageGalleryModal';

/**
 * ОПТИМИЗИРОВАННАЯ секция "О Нас" (Философия)
 * - GPU-ускоренные анимации
 * - Мемоизация для производительности
 * - Поддержка трех языков
 * - Плавные переходы 60 FPS
 */
export default function AboutSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  // Ref для отслеживания видимости секции
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.3,
  });

  // Состояния с оптимизацией
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Мемоизированные стили темы для предотвращения перерендеров
  const themeStyles = useMemo(() => ({
    background: theme === 'dark' 
      ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)',
    color: theme === 'dark' ? '#ffffff' : '#1e293b'
  }), [theme]);

  // Мемоизированные данные команды с переводами
  const teamImages = useMemo(() => [
    {
      src: "/team/img1.jpg",
      alt: t.about?.teamImages?.[0]?.alt || "Команда Qaspilab за работой",
      title: t.about?.teamImages?.[0]?.title || "Наша команда",
      description: t.about?.teamImages?.[0]?.description || "Талантливые разработчики, дизайнеры и инженеры, создающие будущее технологий"
    },
    {
      src: "/team/img2.png", 
      alt: t.about?.teamImages?.[1]?.alt || "Член команды Qaspilab",
      title: t.about?.teamImages?.[1]?.title || "Инновационный подход",
      description: t.about?.teamImages?.[1]?.description || "Каждый участник команды привносит уникальные навыки и креативность"
    },
    {
      src: "/team/img3.png",
      alt: t.about?.teamImages?.[2]?.alt || "Рабочий процесс команды", 
      title: t.about?.teamImages?.[2]?.title || "Совместная работа",
      description: t.about?.teamImages?.[2]?.description || "Мы верим в силу коллективного творчества и взаимной поддержки"
    },
    {
      src: "/team/img4.jpg",
      alt: t.about?.teamImages?.[3]?.alt || "Творческий процесс",
      title: t.about?.teamImages?.[3]?.title || "Творческий процесс", 
      description: t.about?.teamImages?.[3]?.description || "От идеи до реализации - каждый этап проходит с вниманием к деталям"
    },
    {
      src: "/team/img5.jpg",
      alt: t.about?.teamImages?.[4]?.alt || "Команда Qaspilab",
      title: t.about?.teamImages?.[4]?.title || "Единая цель",
      description: t.about?.teamImages?.[4]?.description || "Объединенные общей миссией создания выдающихся продуктов"
    }
  ], [t.about?.teamImages]);

  // Мемоизированные тексты с поддержкой переводов
  const aboutTexts = useMemo(() => ({
    title: t.about?.title || "Мы не агентство. Мы лаборатория.",
    subtitle: t.about?.subtitle || "Инновации в основе всего, что мы делаем",
    description: t.about?.description || "Qaspilab — это место, где идеи обретают форму. Где предприниматели, дизайнеры и инженеры собираются, чтобы создать не просто код — а живой продукт.",
    expertise: t.about?.expertise || "Наша экспертиза",
    expertiseItems: t.about?.expertiseItems || [
      "Полнокомплексная веб-разработка",
      "Разработка мобильных приложений", 
      "ИИ и машинное обучение",
      "Облачная инфраструктура и DevOps",
      "UI/UX дизайн и брендинг"
    ]
  }), [t.about]);

  // Мемоизированные цвета иконок
  const iconColors = useMemo(() => ({
    sparkles: theme === "dark" ? "#00d4ff" : "#8b5cf6",
    beaker: theme === "dark" ? "#8b5cf6" : "#3b82f6", 
    cpu: theme === "dark" ? "#a855f7" : "#9333ea",
    zap: theme === "dark" ? "#06b6d4" : "#7c3aed",
  }), [theme]);

  // Оптимизированные колбэки
  const openGallery = useCallback((index: number) => {
    setSelectedImageIndex(index);
    setIsGalleryOpen(true);
  }, []);

  const closeGallery = useCallback(() => {
    setIsGalleryOpen(false);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  // GPU-оптимизированные варианты анимаций
  const fadeUpVariants = useMemo(() => ({
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  }), []);

  const staggerContainer = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }), []);

  if (!mounted) {
    return (
      <section 
        ref={sectionRef} 
        className="min-h-screen flex items-center justify-center bg-background"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold opacity-50">Загрузка...</h2>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 transition-all duration-500 overflow-hidden performance-layer"
      style={themeStyles}
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* ============= ВИЗУАЛЬНЫЙ БЛОК (ОПТИМИЗИРОВАННАЯ ГАЛЕРЕЯ) ============= */}
          <motion.div 
            className="relative flex items-center justify-center h-96 lg:h-full min-h-[400px] gpu-accelerated"
            variants={fadeUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            
            {/* Центральное изображение команды */}
            <div className="relative w-full max-w-md">
              
              <motion.button
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl group cursor-pointer w-full gpu-accelerated"
                style={{
                  background: theme === 'dark'
                    ? 'linear-gradient(135deg, rgba(0,212,255,0.1) 0%, rgba(139,92,246,0.1) 100%)'
                    : 'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(59,130,246,0.1) 100%)',
                  border: `2px solid ${theme === 'dark' ? 'rgba(0,212,255,0.2)' : 'rgba(139,92,246,0.2)'}`,
                  willChange: 'transform',
                  transform: 'translateZ(0)'
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openGallery(0)}
              >
                <img
                  src="/team/img1.jpg"
                  alt={teamImages[0].alt}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110 gpu-accelerated"
                  style={{ willChange: 'transform' }}
                />

                {/* Оверлей при hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gpu-accelerated">
                  <motion.div
                    className="flex flex-col items-center text-white"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Camera className="w-8 h-8 mb-2" />
                    <span className="text-sm font-medium">
                      {t.common?.viewGallery || "Посмотреть галерею"}
                    </span>
                  </motion.div>
                </div>
                
                {/* Анимированный блик */}
                <motion.div
                  className="absolute top-4 right-4 w-16 h-16 rounded-full opacity-30 gpu-accelerated"
                  style={{
                    background: theme === 'dark'
                      ? 'radial-gradient(circle, rgba(0,212,255,0.8) 0%, transparent 70%)'
                      : 'radial-gradient(circle, rgba(139,92,246,0.8) 0%, transparent 70%)',
                    filter: 'blur(8px)',
                    willChange: 'transform, opacity'
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.button>

              {/* Плавающие мини-изображения (Оптимизированные) */}
              {teamImages.slice(1, 4).map((image, index) => {
                const positions = [
                  { className: "absolute -top-8 -right-8 w-24 h-24", delay: 0.6 + index * 0.2 },
                  { className: "absolute -bottom-6 -left-6 w-20 h-20", delay: 0.8 + index * 0.2 },
                  { className: "absolute top-1/2 -right-12 w-16 h-16", delay: 1.0 + index * 0.2 }
                ];
                
                const pos = positions[index];
                
                return (
                  <motion.button
                    key={`mini-image-${index}`}
                    className={`${pos.className} rounded-2xl overflow-hidden shadow-lg z-20 group cursor-pointer gpu-accelerated`}
                    style={{
                      border: `1px solid ${theme === 'dark' ? 'rgba(139,92,246,0.3)' : 'rgba(139,92,246,0.2)'}`,
                      background: theme === 'dark' ? 'rgba(15,23,42,0.9)' : 'rgba(255,255,255,0.9)',
                      backdropFilter: 'blur(10px)',
                      willChange: 'transform',
                      transform: index === 2 ? 'translateY(-50%) translateZ(0)' : 'translateZ(0)'
                    }}
                    initial={{ 
                      opacity: 0, 
                      scale: 0.8,
                      y: index === 0 ? -20 : index === 1 ? 20 : 0,
                      x: index === 2 ? 20 : 0
                    }}
                    animate={isInView ? { 
                      opacity: 1, 
                      scale: 1,
                      y: index === 2 ? -8 : 0,
                      x: 0
                    } : {}}
                    transition={{ 
                      duration: 0.8, 
                      delay: pos.delay,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                    onClick={() => openGallery(index + 1)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      style={{ willChange: 'transform' }}
                    />
                    
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Camera className="w-4 h-4 text-white" />
                    </div>
                  </motion.button>
                );
              })}

              {/* Декоративные анимированные точки */}
              <motion.div
                className="absolute -top-4 left-1/4 w-8 h-8 rounded-full gpu-accelerated"
                style={{
                  background: theme === 'dark'
                    ? 'radial-gradient(circle, #00d4ff 0%, #8b5cf6 100%)'
                    : 'radial-gradient(circle, #8b5cf6 0%, #3b82f6 100%)',
                  willChange: 'transform, opacity'
                }}
                animate={{
                  y: [-5, 5, -5],
                  opacity: [0.6, 1, 0.6],
                  scale: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          {/* ============= ТЕКСТОВЫЙ БЛОК (ОПТИМИЗИРОВАННЫЙ) ============= */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            
            {/* Заголовок */}
            <motion.div variants={fadeUpVariants}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 optimized-text">
                {aboutTexts.title}
              </h2>
              <p className="text-xl text-opacity-80 mb-8 leading-relaxed">
                {aboutTexts.subtitle}
              </p>
            </motion.div>

            {/* Описание */}
            <motion.div variants={fadeUpVariants}>
              <p className="text-lg leading-relaxed text-opacity-90 mb-8">
                {aboutTexts.description}
              </p>
            </motion.div>

            {/* Экспертиза */}
            <motion.div variants={fadeUpVariants}>
              <h3 className="text-2xl font-semibold mb-6 optimized-text">
                {aboutTexts.expertise}
              </h3>
              
              <div className="space-y-4">
                {aboutTexts.expertiseItems.map((item, index) => (
                  <motion.div
                    key={`expertise-${index}`}
                    className="flex items-center space-x-4"
                    variants={fadeUpVariants}
                    custom={index}
                  >
                    <div 
                      className="w-2 h-2 rounded-full gpu-accelerated"
                      style={{
                        background: theme === 'dark' ? '#00d4ff' : '#8b5cf6',
                        willChange: 'transform'
                      }}
                    />
                    <span className="text-opacity-80">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Иконки технологий (Оптимизированные) */}
            <motion.div 
              className="flex space-x-6 pt-8"
              variants={fadeUpVariants}
            >
              {[
                { Icon: Sparkles, color: iconColors.sparkles, delay: 0 },
                { Icon: Beaker, color: iconColors.beaker, delay: 0.1 },
                { Icon: Cpu, color: iconColors.cpu, delay: 0.2 },
                { Icon: Zap, color: iconColors.zap, delay: 0.3 }
              ].map(({ Icon, color, delay }, index) => (
                <motion.div
                  key={`icon-${index}`}
                  className="p-3 rounded-xl gpu-accelerated"
                  style={{
                    backgroundColor: `${color}20`,
                    border: `1px solid ${color}40`,
                    willChange: 'transform'
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: `${color}30`,
                    transition: { duration: 0.2 }
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { 
                    opacity: 1, 
                    scale: 1,
                    transition: { delay: 1.5 + delay, duration: 0.4 }
                  } : {}}
                >
                  <Icon 
                    className="w-6 h-6" 
                    style={{ color }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Модальное окно галереи */}
      <ImageGalleryModal 
        isOpen={isGalleryOpen}
        onClose={closeGallery}
        images={teamImages}
        initialIndex={selectedImageIndex}
      />
    </section>
  );
}