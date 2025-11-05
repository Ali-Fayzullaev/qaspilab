"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useLanguage } from "@/lib/language-context";
import { useTheme } from "next-themes";
import { Beaker, Sparkles, Cpu, Zap, Camera } from "lucide-react";
import ImageGalleryModal from "@/components/modals/ImageGalleryModal";

/**
 * Секция "О Нас" (Философия)
 * Демонстрирует 2-колоночный макет с анимированным текстом
 * и симуляцией падения "капли света", превращающейся в иконки.
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

  // Состояние для управления "всплеском"
  const [hasLanded, setHasLanded] = useState(false);

  // Состояние для модала галереи
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Состояние для предотвращения ошибок гидратации
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Данные изображений команды
  const teamImages = [
    {
      src: "/team/img1.jpg",
      alt: "Команда Qaspilab за работой",
      title: "Наша команда",
      description: "Талантливые разработчики, дизайнеры и инженеры, создающие будущее технологий"
    },
    {
      src: "/team/img2.png",
      alt: "Член команды Qaspilab",
      title: "Инновационный подход",
      description: "Каждый участник команды привносит уникальные навыки и креативность"
    },
    {
      src: "/team/img3.png",
      alt: "Рабочий процесс команды",
      title: "Совместная работа",
      description: "Мы верим в силу коллективного творчества и взаимной поддержки"
    },
    {
      src: "/team/img4.jpg",
      alt: "Творческий процесс",
      title: "Творческий процесс",
      description: "От идеи до реализации - каждый этап проходит с вниманием к деталям"
    },
    {
      src: "/team/img5.jpg",
      alt: "Команда Qaspilab",
      title: "Единая цель",
      description: "Объединенные общей миссией создания выдающихся продуктов"
    }
  ];

  // Функция открытия галереи
  const openGallery = (index: number) => {
    setSelectedImageIndex(index);
    setIsGalleryOpen(true);
  };

  // Тексты согласно требованию
  const texts = {
    title: "Мы не агентство. Мы лаборатория.",
    p1: "Qaspilab — это место, где идеи обретают форму.",
    p2: "Где предприниматели, дизайнеры и инженеры собираются,",
    p3: "чтобы создать не просто код — а живой продукт.",
    p4: "Мы верим, что технологии должны быть простыми, умными и человечными.",
    p5: "Каждый проект для нас — это эксперимент.",
    p6: "Каждый результат — это шаг к мечте, которая становится реальностью.",
  };

  // Цвета иконок для тем (синхронизированы с роскошной каплей)
  const iconColors = {
    sparkles: theme === "dark" ? "#00d4ff" : "#8b5cf6", // Неоновый циан / Роскошный фиолетовый
    beaker: theme === "dark" ? "#8b5cf6" : "#3b82f6", // Фиолетовый / Королевский синий
    cpu: theme === "dark" ? "#a855f7" : "#9333ea", // Пурпурный / Глубокий пурпур
    zap: theme === "dark" ? "#06b6d4" : "#7c3aed", // Циан / Фиолетово-индиго
  };

  if (!mounted) {
    return <section ref={sectionRef} className="h-[50vh] bg-background" />;
  }

  return (
    <section
      ref={sectionRef}
      className="relative  py-24 sm:py-32 from-background via-secondary/10 to-primary/5 dark:from-background dark:via-secondary/20 dark:to-primary/10 transition-all duration-500 overflow-hidden"
      style={{
          background: theme === 'dark' 
            ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
            : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)',
          color: theme === 'dark' ? '#ffffff' : '#1e293b'
        }}
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* --- Визуальный блок (Галерея команды) --- */}
          <motion.div 
            className="relative flex items-center justify-center h-96 lg:h-full min-h-[400px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            
            {/* Основная композиция - команда в лаборатории */}
            <div className="relative w-full max-w-md">
              
              {/* Центральное изображение */}
              <motion.button
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl group cursor-pointer w-full"
                style={{
                  background: theme === 'dark'
                    ? 'linear-gradient(135deg, rgba(0,212,255,0.1) 0%, rgba(139,92,246,0.1) 100%)'
                    : 'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(59,130,246,0.1) 100%)',
                  border: `2px solid ${theme === 'dark' ? 'rgba(0,212,255,0.2)' : 'rgba(139,92,246,0.2)'}`,
                  boxShadow: theme === 'dark'
                    ? '0 25px 50px rgba(0,212,255,0.15), 0 0 40px rgba(139,92,246,0.1)'
                    : '0 25px 50px rgba(139,92,246,0.15), 0 0 40px rgba(59,130,246,0.1)'
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5
                }}
                transition={{ duration: 0.4 }}
                onClick={() => openGallery(0)}
              >
                <img
                  src="/team/img1.jpg"
                  alt="Команда Qaspilab"
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Оверлей при hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    className="flex flex-col items-center text-white"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Camera className="w-8 h-8 mb-2" />
                    <span className="text-sm font-medium">Посмотреть галерею</span>
                  </motion.div>
                </div>
                
                {/* Градиентный оверлей */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: theme === 'dark'
                      ? 'linear-gradient(135deg, rgba(0,212,255,0.1) 0%, rgba(139,92,246,0.05) 50%, transparent 100%)'
                      : 'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(59,130,246,0.05) 50%, transparent 100%)'
                  }}
                />
                
                {/* Блик света */}
                <motion.div
                  className="absolute top-4 right-4 w-16 h-16 rounded-full opacity-30"
                  style={{
                    background: theme === 'dark'
                      ? 'radial-gradient(circle, rgba(0,212,255,0.8) 0%, transparent 70%)'
                      : 'radial-gradient(circle, rgba(139,92,246,0.8) 0%, transparent 70%)',
                    filter: 'blur(8px)'
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

              {/* Дополнительные изображения команды - плавающие карточки */}
              <motion.button
                className="absolute -top-8 -right-8 w-24 h-24 rounded-2xl overflow-hidden shadow-lg z-20 group cursor-pointer"
                style={{
                  border: `1px solid ${theme === 'dark' ? 'rgba(139,92,246,0.3)' : 'rgba(139,92,246,0.2)'}`,
                  background: theme === 'dark' ? 'rgba(15,23,42,0.9)' : 'rgba(255,255,255,0.9)',
                  backdropFilter: 'blur(10px)'
                }}
                initial={{ y: -20, opacity: 0, rotate: -10 }}
                animate={isInView ? { y: 0, opacity: 1, rotate: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  zIndex: 30
                }}
                onClick={() => openGallery(1)}
              >
                <img
                  src="/team/img2.png"
                  alt="Член команды"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Мини оверлей */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Camera className="w-4 h-4 text-white" />
                </div>
              </motion.button>

              <motion.button
                className="absolute -bottom-6 -left-6 w-20 h-20 rounded-2xl overflow-hidden shadow-lg z-20 group cursor-pointer"
                style={{
                  border: `1px solid ${theme === 'dark' ? 'rgba(0,212,255,0.3)' : 'rgba(59,130,246,0.2)'}`,
                  background: theme === 'dark' ? 'rgba(15,23,42,0.9)' : 'rgba(255,255,255,0.9)',
                  backdropFilter: 'blur(10px)'
                }}
                initial={{ y: 20, opacity: 0, rotate: 10 }}
                animate={isInView ? { y: 0, opacity: 1, rotate: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: -5,
                  zIndex: 30
                }}
                onClick={() => openGallery(2)}
              >
                <img
                  src="/team/img3.png"
                  alt="Член команды"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Camera className="w-3 h-3 text-white" />
                </div>
              </motion.button>

              <motion.button
                className="absolute top-1/2 -right-12 w-16 h-16 rounded-xl overflow-hidden shadow-lg z-15 group cursor-pointer"
                style={{
                  border: `1px solid ${theme === 'dark' ? 'rgba(168,85,247,0.3)' : 'rgba(147,51,234,0.2)'}`,
                  background: theme === 'dark' ? 'rgba(15,23,42,0.8)' : 'rgba(255,255,255,0.8)',
                  backdropFilter: 'blur(8px)',
                  transform: 'translateY(-50%)'
                }}
                initial={{ x: 20, opacity: 0, rotate: -15 }}
                animate={isInView ? { x: 0, opacity: 1, rotate: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
                whileHover={{ 
                  scale: 1.15, 
                  rotate: 10,
                  zIndex: 30
                }}
                onClick={() => openGallery(3)}
              >
                <img
                  src="/team/img4.jpg"
                  alt="Член команды"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Camera className="w-3 h-3 text-white" />
                </div>
              </motion.button>

              {/* Декоративные элементы лаборатории */}
              <motion.div
                className="absolute -top-4 left-1/4 w-8 h-8 rounded-full"
                style={{
                  background: theme === 'dark'
                    ? 'radial-gradient(circle, #00d4ff 0%, #8b5cf6 100%)'
                    : 'radial-gradient(circle, #8b5cf6 0%, #3b82f6 100%)',
                  boxShadow: theme === 'dark'
                    ? '0 0 20px rgba(0,212,255,0.5)'
                    : '0 0 20px rgba(139,92,246,0.5)'
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
              >
                <div className="w-full h-full rounded-full flex items-center justify-center">
                  <Beaker className="w-4 h-4 text-white" />
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-1/4 -left-8 w-6 h-6 rounded-full"
                style={{
                  background: theme === 'dark'
                    ? 'radial-gradient(circle, #8b5cf6 0%, #a855f7 100%)'
                    : 'radial-gradient(circle, #3b82f6 0%, #9333ea 100%)',
                  boxShadow: theme === 'dark'
                    ? '0 0 15px rgba(139,92,246,0.5)'
                    : '0 0 15px rgba(59,130,246,0.5)'
                }}
                animate={{
                  x: [-3, 3, -3],
                  opacity: [0.7, 1, 0.7],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-full h-full rounded-full flex items-center justify-center">
                  <Cpu className="w-3 h-3 text-white" />
                </div>
              </motion.div>

              {/* Связующие линии между элементами */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none z-5" 
                style={{ overflow: 'visible' }}
              >
                <motion.path
                  d="M 100,50 Q 150,100 200,150"
                  stroke={theme === 'dark' ? '#8b5cf6' : '#6366f1'}
                  strokeWidth="1"
                  fill="none"
                  opacity="0.3"
                  strokeDasharray="4,4"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 2, delay: 1.2 }}
                />
                <motion.path
                  d="M 50,200 Q 100,150 150,100"
                  stroke={theme === 'dark' ? '#00d4ff' : '#8b5cf6'}
                  strokeWidth="1"
                  fill="none"
                  opacity="0.3"
                  strokeDasharray="4,4"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 2, delay: 1.4 }}
                />
              </svg>

              {/* Фоновое свечение */}
              <motion.div
                className="absolute inset-0 -z-10 rounded-3xl"
                style={{
                  background: theme === 'dark'
                    ? 'radial-gradient(ellipse at center, rgba(0,212,255,0.1) 0%, rgba(139,92,246,0.05) 50%, transparent 100%)'
                    : 'radial-gradient(ellipse at center, rgba(139,92,246,0.1) 0%, rgba(59,130,246,0.05) 50%, transparent 100%)',
                  filter: 'blur(20px)'
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
            </div>
          </motion.div>
          {/* --- 1. Текстовый блок (Философия) --- */}
          <motion.div
            className="z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
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
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {texts.p6}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Модал галереи */}
      <ImageGalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        images={teamImages}
        initialIndex={selectedImageIndex}
      />
    </section>
  );
}
