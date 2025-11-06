'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from 'next-themes';
import Image from 'next/image';

/**
 * Секция "Наша миссия" - ОПТИМИЗИРОВАННАЯ ВЕРСИЯ
 * Упрощенная карта Казахстана без проблемных SVG анимаций
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

  // Тексты с переводами
  const missionTexts = t.mission || {
    title: "Наша миссия",
    subtitle: "Связываем инновации с реальностью",
    description: "Расширять возможности бизнеса через передовые технологические решения, которые стимулируют рост, эффективность и цифровую трансформацию в постоянно развивающемся мире.",
    values: "Основные ценности",
    valuesItems: [
      {
        title: "Инновации прежде всего",
        description: "Постоянно расширяем границы с креативными решениями"
      },
      {
        title: "Превосходное качество",
        description: "Создаём надёжный, масштабируемый и поддерживаемый код"
      },
      {
        title: "Успех клиентов",
        description: "Ваш успех — наш главный показатель достижений"
      }
    ]
  };

  if (!mounted) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">Загрузка...</h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 py-20"
    >
      <div className="container mx-auto px-6">
        
        {/* Заголовок секции */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {missionTexts.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {missionTexts.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Левая колонка - Описание миссии */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Мы строим цифровое будущее Казахстана
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>Наши продукты помогают компаниям работать быстрее, предпринимателям — запускать новые идеи.</p>
                  <p>А людям — взаимодействовать с технологиями легко и с удовольствием.</p>
                  <p>Мы верим, что Казахстан способен создавать не просто IT-решения, а глобальные продукты, которыми будут пользоваться во всём мире.</p>
                </div>
              </div>

              {/* Ценности */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  {missionTexts.values}
                </h4>
                <div className="space-y-6">
                  {missionTexts.valuesItems.map((value, index) => (
                    <motion.div
                      key={`value-${index}`}
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {value.title}
                        </h5>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {value.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Правая колонка - Упрощенная визуализация Казахстана */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              
              {/* Фоновое изображение Казахстана */}
              <div className="relative h-96 mb-8">
                <Image
                  src="/kaz.jpg"
                  alt="Карта Казахстана"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain rounded-lg opacity-60"
                  priority={false}
                />
                
                {/* Оверлей с градиентом */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg"></div>
                
                {/* Основные города как статичные точки */}
                <div className="absolute inset-0">
                  {[
                    { name: 'Алматы', x: '70%', y: '65%' },
                    { name: 'Астана', x: '55%', y: '35%' },
                    { name: 'Шымкент', x: '45%', y: '75%' }
                  ].map((city, index) => (
                    <motion.div
                      key={`city-${city.name}`}
                      className="absolute w-4 h-4"
                      style={{ left: city.x, top: city.y, transform: 'translate(-50%, -50%)' }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { 
                        scale: [0, 1.2, 1], 
                        opacity: 1 
                      } : {}}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.5 + index * 0.2 
                      }}
                    >
                      <div className="w-4 h-4 bg-blue-500 rounded-full shadow-lg">
                        <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Статистика */}
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className="text-3xl font-bold text-blue-500 mb-2">100+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Проектов</div>
                </motion.div>
                
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <div className="text-3xl font-bold text-purple-500 mb-2">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Клиентов</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}