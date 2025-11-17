'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from 'next-themes';
import { Beaker, Sparkles, Cpu, Zap, Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * ОПТИМИЗИРОВАННАЯ секция "О Нас" с каруселью изображений
 */
export default function AboutSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  // Ref для отслеживания видимости секции
  const sectionRef = useRef(null);
  
  // Состояния для карусели
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [direction, setDirection] = useState(0); // -1 left, 1 right

 const teamImages = [
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
    description: t.about?.teamImages?.[3]?.description || "От идеи до реализации — каждый этап проходит с вниманием к деталям"
  },
  {
    src: "/team/img5.jpg",
    alt: t.about?.teamImages?.[4]?.alt || "Команда Qaspilab",
    title: t.about?.teamImages?.[4]?.title || "Единая цель",
    description: t.about?.teamImages?.[4]?.description || "Объединённые общей миссией создания выдающихся продуктов"
  },
  {
    src: "/team/img6.png",
    alt: t.about?.teamImages?.[5]?.alt || "Брейншторм в Qaspilab",
    title: t.about?.teamImages?.[5]?.title || "Генерация идей",
    description: t.about?.teamImages?.[5]?.description || "Открытая атмосфера для смелых решений и нестандартного мышления"
  },
  {
    src: "/team/img7.png",
    alt: t.about?.teamImages?.[6]?.alt || "Дизайнер за работой",
    title: t.about?.teamImages?.[6]?.title || "Эстетика и функциональность",
    description: t.about?.teamImages?.[6]?.description || "Каждый пиксель продуман с заботой о пользовательском опыте"
  },
  {
    src: "/team/img8.png",
    alt: t.about?.teamImages?.[7]?.alt || "Разработка в процессе",
    title: t.about?.teamImages?.[7]?.title || "Техническое мастерство",
    description: t.about?.teamImages?.[7]?.description || "Чистый код, масштабируемая архитектура и внимание к каждой детали"
  },
  {
    src: "/team/img9.png",
    alt: t.about?.teamImages?.[8]?.alt || "Командная встреча",
    title: t.about?.teamImages?.[8]?.title || "Коллаборация",
    description: t.about?.teamImages?.[8]?.description || "Регулярные обсуждения, чтобы каждый голос был услышан"
  },
  {
    src: "/team/img11.png",
    alt: t.about?.teamImages?.[10]?.alt || "Команда Qaspilab празднует успех",
    title: t.about?.teamImages?.[10]?.title || "Радость результата",
    description: t.about?.teamImages?.[10]?.description || "Каждый запуск — повод для гордости и вдохновения"
  }
];


  // Автоплей карусели
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % teamImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, teamImages.length]);

  // Мемоизированные данные команды с переводами
 
  // Навигация по карусели
  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % teamImages.length);
    setIsAutoPlaying(false);
  }, [teamImages.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + teamImages.length) % teamImages.length);
    setIsAutoPlaying(false);
  }, [teamImages.length]);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  }, [currentIndex]);

  // Обработчики свайпа для мобильных
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h2 className="text-4xl font-bold opacity-50">Загрузка...</h2>
        </div>
      </section>
    );
  }

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
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* ============= КАРУСЕЛЬ ИЗОБРАЖЕНИЙ ============= */}
          <div className="relative">
            <div 
              className="relative overflow-hidden rounded-3xl shadow-2xl"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  className="relative aspect-[4/3] bg-gray-200 dark:bg-gray-800"
                  custom={direction}
                  initial={{ 
                    opacity: 0,
                    x: direction > 0 ? 300 : -300 
                  }}
                  animate={{ 
                    opacity: 1,
                    x: 0 
                  }}
                  exit={{ 
                    opacity: 0,
                    x: direction > 0 ? -300 : 300 
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut"
                  }}
                >
                  <img
                    src={teamImages[currentIndex].src}
                    alt={teamImages[currentIndex].alt}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Оверлей с информацией - адаптивный текст */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6 text-white">
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                      {teamImages[currentIndex].title}
                    </h3>
                    <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                      {teamImages[currentIndex].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Кнопки навигации - только для десктопа */}
              {teamImages.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full items-center justify-center text-white transition-all duration-200 hover:scale-110"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  
                  <button
                    onClick={nextSlide}
                    className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full items-center justify-center text-white transition-all duration-200 hover:scale-110"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Индикаторы прогресса */}
            {teamImages.length > 1 && (
              <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
                {teamImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? theme === 'dark' 
                          ? 'bg-blue-400 scale-125' 
                          : 'bg-purple-600 scale-125'
                        : 'bg-gray-400 hover:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Счетчик изображений */}
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs sm:text-sm">
              {currentIndex + 1} / {teamImages.length}
            </div>

            {/* Индикатор автоплея */}
            <div className="absolute top-4 left-4">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs sm:text-sm hover:bg-black/70 transition-colors"
              >
                {isAutoPlaying ? '⏸️' : '▶️'}
              </button>
            </div>

            {/* Мобильные кнопки навигации - под картинкой */}
            {teamImages.length > 1 && (
              <div className="flex justify-center items-center mt-4 space-x-4 sm:hidden">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 bg-gray-600 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-all duration-200"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <span className="text-sm text-gray-600 dark:text-gray-400 min-w-[60px] text-center">
                  {currentIndex + 1} / {teamImages.length}
                </span>
                
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 bg-gray-600 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-all duration-200"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {/* ============= ТЕКСТОВЫЙ БЛОК ============= */}
          <div className="space-y-6 sm:space-y-8">
            {/* Заголовок */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                {t.about?.title || "Мы не агентство. Мы лаборатория."}
              </h2>
              <p className="text-lg sm:text-xl opacity-80 mb-6 sm:mb-8 leading-relaxed">
                {t.about?.subtitle || "Инновации в основе всего, что мы делаем"}
              </p>
            </div>

            {/* Описание */}
            <div>
              <p className="text-base sm:text-lg leading-relaxed opacity-90 mb-6 sm:mb-8">
                {t.about?.description || "Qaspilab — это место, где идеи обретают форму. Где предприниматели, дизайнеры и инженеры собираются, чтобы создать не просто код — а живой продукт."}
              </p>
            </div>

            {/* Экспертиза */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                {t.about?.expertise || "Наша экспертиза"}
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                {(t.about?.expertiseItems || [
                  "Полнокомплексная веб-разработка",
                  "Разработка мобильных приложений", 
                  "ИИ и машинное обучение",
                  "Облачная инфраструктура и DevOps",
                  "UI/UX дизайн и брендинг"
                ]).map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 sm:space-x-4"
                  >
                    <div 
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{
                        background: theme === 'dark' ? '#00d4ff' : '#8b5cf6'
                      }}
                    />
                    <span className="opacity-80 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Иконки технологий */}
            <div className="flex space-x-4 sm:space-x-6 pt-6 sm:pt-8">
              {[
                { Icon: Sparkles, color: theme === 'dark' ? '#00d4ff' : '#8b5cf6' },
                { Icon: Beaker, color: theme === 'dark' ? '#8b5cf6' : '#3b82f6' },
                { Icon: Cpu, color: theme === 'dark' ? '#a855f7' : '#9333ea' },
                { Icon: Zap, color: theme === 'dark' ? '#06b6d4' : '#7c3aed' }
              ].map(({ Icon, color }, index) => (
                <div
                  key={index}
                  className="p-2 sm:p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:rotate-12"
                  style={{
                    backgroundColor: `${color}20`,
                    border: `1px solid ${color}40`,
                  }}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}