'use client';

import { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from 'next-themes';
import { Beaker, Sparkles, Cpu, Zap } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

// Оптимизированный компонент для изображений
const OptimizedImage = ({ src, alt, className }: { src: string; alt: string; className: string }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-lg" />
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        onLoad={() => setLoaded(true)}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

export default function AboutSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Мемоизированные данные изображений
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
  ], [t]);

  // Мемоизированные данные для экспертизы
  const expertiseItems = useMemo(() => 
    t.about?.expertiseItems || [
      "Полнокомплексная веб-разработка",
      "Разработка мобильных приложений", 
      "ИИ и машинное обучение",
      "Облачная инфраструктура и DevOps",
      "UI/UX дизайн и брендинг"
    ], [t]);

  // Иконки
  const icons = useMemo(() => [
    { Icon: Sparkles, color: theme === 'dark' ? '#00d4ff' : '#8b5cf6' },
    { Icon: Beaker, color: theme === 'dark' ? '#8b5cf6' : '#3b82f6' },
    { Icon: Cpu, color: theme === 'dark' ? '#a855f7' : '#9333ea' },
    { Icon: Zap, color: theme === 'dark' ? '#06b6d4' : '#7c3aed' }
  ], [theme]);

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
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 transition-colors duration-700 overflow-hidden"
      style={{
        background: theme === 'dark' 
          ? 'radial-gradient(circle at 30% 30%, #0c1a2d 0%, #1a2d47 50%, #2a3d5a 100%)'
          : 'radial-gradient(circle at 70% 70%, #ffffff 0%, #f0f9ff 50%, #e0f2fe 100%)',
        color: theme === 'dark' ? '#ffffff' : '#0f172a'
      }}
      id='team'
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          
          {/* ОПТИМИЗИРОВАННАЯ КАРУСЕЛЬ С SHADCN/UI */}
          <div className="relative order-2 lg:order-1 flex justify-center">
            <Carousel
              opts={{
                align: "center", // ИЗМЕНИЛ НА "center" для центрирования
                loop: true,
              }}
              className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-none"
            >
              <CarouselContent className="ml-0"> {/* УБРАЛ ОТСТУП */}
                {teamImages.map((image, index) => (
                  <CarouselItem key={index} className="flex justify-center"> {/* ДОБАВИЛ ЦЕНТРИРОВАНИЕ */}
                    <div className="relative aspect-[4/3] w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden">
                      <OptimizedImage
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full"
                      />
                      
                      {/* Оверлей с информацией */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 sm:p-4 md:p-6 text-white">
                        <h3 className="text-sm sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 line-clamp-1">
                          {image.title}
                        </h3>
                        <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed line-clamp-2 sm:line-clamp-3">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Навигационные кнопки для десктопа */}
              <div className="hidden md:block">
                <CarouselPrevious 
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full items-center justify-center text-white transition-all duration-200 hover:scale-110 border-0"
                />
                <CarouselNext 
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full items-center justify-center text-white transition-all duration-200 hover:scale-110 border-0"
                />
              </div>

              {/* Мобильные кнопки навигации */}
              <div className="flex justify-center items-center mt-3 sm:mt-4 space-x-3 sm:space-x-4 md:hidden">
                <CarouselPrevious 
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-600/80 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-all duration-200 static translate-y-0 backdrop-blur-sm"
                />
                <div className="flex space-x-1">
                  {Array.from({ length: Math.min(teamImages.length, 5) }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  ))}
                </div>
                <CarouselNext 
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-600/80 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-all duration-200 static translate-y-0 backdrop-blur-sm"
                />
              </div>
            </Carousel>
          </div>

          {/* ТЕКСТОВЫЙ БЛОК */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 order-1 lg:order-2 lg:text-left">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                {t.about?.title || "Мы не агентство. Мы лаборатория."}
              </h2>
              <p className="text-base sm:text-lg md:text-xl opacity-80 mb-4 sm:mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {t.about?.subtitle || "Инновации в основе всего, что мы делаем"}
              </p>
            </div>

            <div>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed opacity-90 mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0">
                {t.about?.description || "Qaspilab — это место, где идеи обретают форму. Где предприниматели, дизайнеры и инженеры собираются, чтобы создать не просто код — а живой продукт."}
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 md:mb-6">
                {t.about?.expertise || "Наша экспертиза"}
              </h3>
              
              <div className="space-y-2 sm:space-y-3 md:space-y-4 max-w-lg mx-auto lg:mx-0">
                {expertiseItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-2 sm:space-x-3 md:space-x-4 text-left"
                  >
                    <div 
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full shrink-0 mt-2 sm:mt-2.5"
                      style={{
                        background: theme === 'dark' ? '#00d4ff' : '#8b5cf6'
                      }}
                    />
                    <span className="opacity-80 text-xs sm:text-sm md:text-base leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Иконки технологий */}
            <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4 md:space-x-6 pt-4 sm:pt-6 md:pt-8">
              {icons.map(({ Icon, color }, index) => (
                <div
                  key={index}
                  className="p-1.5 sm:p-2 md:p-3 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-110 hover:rotate-12 touch-manipulation"
                  style={{
                    backgroundColor: `${color}20`,
                    border: `1px solid ${color}40`,
                  }}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" style={{ color }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}