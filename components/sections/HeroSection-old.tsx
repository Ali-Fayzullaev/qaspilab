'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { useState, useEffect } from 'react';

// --- Константы анимации (Framer Motion) ---

// Анимация пульсации всего заголовка
const pulseAnimation = {
  scale: [1, 1.005, 1], // Более тонкая пульсация масштаба
  opacity: [0.95, 1, 0.95],
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
};

// Анимация появления элементов
const fadeUp = (delay = 0) => ({
  initial: { y: 20, opacity: 0, scale: 0.98 },
  animate: { y: 0, opacity: 1, scale: 1 },
  transition: { duration: 1, delay: delay, ease: [0.17, 0.67, 0.83, 0.67] } // Пользовательская кривая
});

export default function HeroSection() {
  const { t } = useLanguage();
  const title = "Qaspilab";
  
  // Состояние для нейронного эффекта: хранит индекс моргающей буквы
  const [blinkingIndex, setBlinkingIndex] = useState(-1);

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

  return (
    // Вариант Б: Глубокий графитовый фон (slate-900)
    <section className="min-h-screen bg-slate-950 text-white relative overflow-hidden flex items-center justify-center">
      
      {/* 1. Фон и эффекты */}
      <div className="absolute inset-0">
        {/* Градиентное свечение (мягкий синий/фиолетовый) */}
        <motion.div 
          className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[150px]"
          animate={{ scale: [1, 0.9, 1], rotate: [0, -15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
        />

        {/* Луч Света (Key Visual) */}
        <motion.div
          className="absolute right-[25%] bottom-0 w-1 h-full bg-linear-to-t from-transparent via-cyan-400/80 to-transparent shadow-2xl shadow-cyan-400/50"
          initial={{ scaleY: 0, transformOrigin: "bottom" }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.25, 1, 0.5, 1] }}
        >
          {/* Мерцание луча */}
          <motion.div
            className="absolute inset-0 bg-white/5"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        
        {/* Частицы (едва заметные) - используем маленькие div'ы */}
        <motion.div 
            className="absolute w-1 h-1 bg-cyan-200/50 rounded-full" 
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
            className="text-6xl md:text-8xl font-extrabold mb-4 hero-gradient-text"
            animate={pulseAnimation}
          >
            {/* CSS для Градиентного текста и Неонового свечения */}
            <style jsx global>{`
              .hero-gradient-text {
                background: linear-gradient(90deg, #FFFFFF 30%, #38BDF8 70%); /* Белый к акцентному синему */
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
                /* Мягкое свечение */
                text-shadow: 0 0 10px rgba(56, 189, 248, 0.2); 
              }
              .blinking {
                opacity: 0.3 !important;
                transition: opacity 0.1s;
                text-shadow: 0 0 15px #facc15; /* Желтый акцент на моргание */
              }
            `}</style>

            {title.split('').map((char, index) => (
              <motion.span
                key={index}
                className={`inline-block ${index === blinkingIndex ? 'blinking' : ''}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.2 + index * 0.08, // Каждая буква появляется последовательно
                  ease: "easeOut"
                }}
              >
                {char === ' ' ? '\u00A0' : char} {/* Обработка пробелов */}
              </motion.span>
            ))}
          </motion.h1>

          {/* Подзаголовок: Born in Kazakhstan. Built for the world. */}
          <motion.p
            className="text-xl md:text-2xl text-slate-300 mb-4 font-light tracking-widest uppercase"
            {...fadeUp(1.2)}
          >
            {t.hero?.subtitle || "Born in Kazakhstan. Built for the world."}
          </motion.p>
          
          {/* Слоган: Мы создаём технологии... (Постепенное появление слов) */}
          <motion.div
            className="text-lg text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-normal"
          >
            {(t.hero?.slogan || "Мы создаём технологии, которые превращают мечты в продукты.")
              .split(' ') // Разбиваем на слова
              .map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-1" // Пробел между словами
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 1.5 + index * 0.05, // Задержка для каждого слова
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
                boxShadow: "0 0 25px rgba(56, 189, 248, 0.4), 0 0 5px rgba(56, 189, 248, 0.8)" // Синее свечение
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 px-8 py-6 text-xl font-bold transition-all duration-300 shadow-xl group"
            >
              {t.hero?.cta || "Обсудить проект"}
              <motion.div
                className="ml-3"
                animate={{ x: [0, 6, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5 // Начинается с небольшой задержкой
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
          className="w-px h-16 bg-linear-to-b from-cyan-400/80 to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="w-2 h-2 bg-cyan-400 rounded-full mx-auto mt-2" 
          animate={{ y: [0, 15, 0] }} 
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}