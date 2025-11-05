// HeroSection-old.tsx
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import ContactModal from '@/components/modals/ContactModal';

// --- Константы анимации (Framer Motion) ---

// Анимация пульсации всего заголовка
const pulseAnimation = {
  scale: [1, 1.005, 1], // Более тонкая пульсация масштаба
  opacity: [0.95, 1, 0.95],
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const }
};

// Анимация появления элементов
const fadeUp = (delay = 0) => ({
  initial: { y: 20, opacity: 0, scale: 0.98 },
  animate: { y: 0, opacity: 1, scale: 1 },
  transition: { duration: 1, delay: delay, ease: "easeOut" as const }
});

export default function HeroSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const title = "Qaspilab";
  
  // Состояние для нейронного эффекта: хранит индекс моргающей буквы
  const [blinkingIndex, setBlinkingIndex] = useState(-1);
  // Состояние модального окна
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Состояние монтирования для предотвращения гидратации
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Логика для случайного моргания (Нейронный эффект)
  useEffect(() => {
    const interval = setInterval(() => {
      // Случайное моргание происходит примерно раз в 3-5 секунд
      if (Math.random() < 0.3) { 
        const randomIndex = Math.floor(Math.random() * title.length);
        setBlinkingIndex(randomIndex);
        
        // Сброс через короткое время (чтобы буква "моргнула")
        setTimeout(() => setBlinkingIndex(-1), 100); 
      }
    }, 500); // Проверка каждые 0.5s

    return () => clearInterval(interval);
  }, [title.length]);

  if (!mounted) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-8xl font-bold">Qaspilab</h1>
        </div>
      </section>
    );
  }

  return (
    <>
      <section 
        className="min-h-screen relative overflow-hidden flex items-center justify-center"
        style={{
          background: theme === 'dark' 
            ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
            : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)',
          color: theme === 'dark' ? '#ffffff' : '#1e293b'
        }}
      >
      
        {/* 1. Фон и эффекты */}
        <div className="absolute inset-0">
          {/* Градиентное свечение (мягкий синий/фиолетовый) */}
          <motion.div 
            className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full blur-[150px]"
            style={{
              background: theme === 'dark' 
                ? 'rgba(99, 102, 241, 0.1)' 
                : 'rgba(59, 130, 246, 0.08)'
            }}
            animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full blur-[150px]"
            style={{
              background: theme === 'dark' 
                ? 'rgba(6, 182, 212, 0.1)' 
                : 'rgba(34, 197, 94, 0.08)'
            }}
            animate={{ scale: [1, 0.9, 1], rotate: [0, -15, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
          />

          {/* Луч Света (Key Visual) */}
          <motion.div
            className="absolute right-[25%] bottom-0 w-1 h-full shadow-2xl"
            style={{
              background: theme === 'dark'
                ? 'linear-gradient(to top, transparent, rgba(6, 182, 212, 0.8), transparent)'
                : 'linear-gradient(to top, transparent, rgba(59, 130, 246, 0.6), transparent)',
              boxShadow: theme === 'dark'
                ? '0 0 20px rgba(6, 182, 212, 0.5)'
                : '0 0 20px rgba(59, 130, 246, 0.3)'
            }}
            initial={{ scaleY: 0, transformOrigin: "bottom" }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
          >
            {/* Мерцание луча */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.3)'
              }}
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          
          {/* Частицы (едва заметные) - используем маленькие div'ы */}
          <motion.div 
            className="absolute w-1 h-1 rounded-full" 
            style={{
              background: theme === 'dark' ? 'rgba(6, 182, 212, 0.5)' : 'rgba(59, 130, 246, 0.4)'
            }}
            animate={{ 
              x: [0, 100, -50, 0], 
              y: [0, -100, 50, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 3 }}
          />
        </div>

      {/* 2. Основной контент */}
      <div className="container relative mx-auto px-6 h-screen flex items-center justify-center z-10">
        <div className="text-center max-w-5xl">
          
          {/* Заголовок с пульсацией и нейронным эффектом */}
          <motion.h1
            className="text-6xl md:text-8xl font-extrabold mb-4"
            style={{
              
              WebkitBackgroundClip: 'text',
              color: theme === 'dark' ? '#FFFFFF' : '#1E293B', // Fallback цвет
              textShadow: theme === 'dark'
                ? '0 0 20px rgba(6, 182, 212, 0.3)'
                : '0 0 20px rgba(59, 130, 246, 0.2)'
            }}
            animate={pulseAnimation}
          >
            {title.split('').map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                style={{
                  opacity: index === blinkingIndex ? 0.3 : 1,
                  textShadow: index === blinkingIndex 
                    ? '0 0 15px #facc15' 
                    : theme === 'dark'
                      ? '0 0 10px rgba(6, 182, 212, 0.2)'
                      : '0 0 10px rgba(59, 130, 246, 0.1)',
                  transition: 'opacity 0.1s, text-shadow 0.1s'
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: index === blinkingIndex ? 0.3 : 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.2 + index * 0.08,
                  ease: "easeOut"
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Подзаголовок: Born in Kazakhstan. Built for the world. */}
          <motion.p
            className="text-xl md:text-2xl mb-4 font-light tracking-widest uppercase"
            style={{
              color: theme === 'dark' ? 'rgba(226, 232, 240, 0.8)' : 'rgba(30, 41, 59, 0.7)'
            }}
            {...fadeUp(1.2)}
          >
            {t.hero?.subtitle || "Born in Kazakhstan. Built for the world."}
          </motion.p>
          
          {/* Слоган: Мы создаём технологии... (Постепенное появление слов) */}
          <motion.div
            className="text-lg max-w-3xl mx-auto mb-12 leading-relaxed font-normal"
            style={{
              color: theme === 'dark' ? 'rgba(148, 163, 184, 0.8)' : 'rgba(71, 85, 105, 0.8)'
            }}
          >
            {(t.hero?.slogan || "Мы создаём технологии, которые превращают мечты в продукты.")
              .split(' ')
              .map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 1.5 + index * 0.05,
                  }}
                >
                  {word}
                </motion.span>
              ))}
          </motion.div>

          {/* Кнопка CTA: [Обсудить проект] */}
          <motion.div
            {...fadeUp(2.2)}
            whileHover={{ 
              scale: 1.05,
              boxShadow: theme === 'dark'
                ? "0 0 25px rgba(6, 182, 212, 0.4), 0 0 5px rgba(6, 182, 212, 0.8)"
                : "0 0 25px rgba(59, 130, 246, 0.4), 0 0 5px rgba(59, 130, 246, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-6 text-xl font-bold transition-all duration-300 shadow-xl group"
              style={{
                background: theme === 'dark'
                  ? 'linear-gradient(135deg, #06B6D4, #8B5CF6)'
                  : 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
                color: '#ffffff'
              }}
            >
              {t.hero?.cta || "Обсудить проект"}
              <motion.div
                className="ml-3"
                animate={{ x: [0, 6, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </div>

        {/* 3. Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          {...fadeUp(3)}
        >
          <motion.div
            className="w-px h-16 mx-auto"
            style={{
              background: theme === 'dark'
                ? 'linear-gradient(to bottom, rgba(6, 182, 212, 0.8), transparent)'
                : 'linear-gradient(to bottom, rgba(59, 130, 246, 0.6), transparent)'
            }}
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="w-2 h-2 rounded-full mx-auto mt-2"
            style={{
              background: theme === 'dark' ? '#06B6D4' : '#3B82F6'
            }}
            animate={{ y: [0, 15, 0] }} 
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* Модальное окно контакта */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}