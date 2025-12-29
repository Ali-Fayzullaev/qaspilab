'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from 'next-themes';
import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import ContactModal from '@/components/modals/ContactModal';

// ============= PERFORMANCE OPTIMIZED ANIMATIONS =============
const ANIMATION_VARIANTS = {
  titlePulse: {
    scale: [1, 1.002],
    transition: { 
      duration: 4, 
      repeat: Infinity, 
      ease: [0.4, 0, 0.6, 1] as const,
      repeatType: "reverse" as const 
    }
  },
  fadeUpOptimized: (delay = 0) => ({
    initial: { 
      opacity: 0, 
      y: 20
    },
    animate: { 
      opacity: 1, 
      y: 0
    },
    transition: { 
      duration: 0.8, 
      delay, 
      ease: [0.25, 0.1, 0.25, 1] as const
    }
  }),
  orb1: {
    scale: [1, 1.1],
    rotate: [0, 10],
    transition: { duration: 15, repeat: Infinity, repeatType: "reverse" as const, ease: "linear" as const }
  },
  orb2: {
    scale: [1, 0.9],
    rotate: [0, -15],
    transition: { duration: 18, repeat: Infinity, repeatType: "reverse" as const, ease: "linear" as const, delay: 2 }
  },
  lightBeam: {
    initial: { scaleY: 0 },
    animate: { scaleY: 1 },
    transition: { duration: 1.5, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }
  },
  lightBeamGlow: {
    opacity: [0.2, 0.4, 0.2],
    transition: { duration: 3, repeat: Infinity, ease: [0.4, 0, 0.6, 1] as const }
  },
  particle: {
    x: [0, 100, -50, 0],
    y: [0, -100, 50, 0],
    opacity: [0, 0.5, 0],
    transition: { duration: 10, repeat: Infinity, ease: "linear" as const, delay: 3 }
  },
  scrollLine: {
    scaleY: [1, 0.5, 1],
    transition: { duration: 2, repeat: Infinity, ease: [0.4, 0, 0.6, 1] as const }
  },
  scrollDot: {
    y: [0, 15, 0],
    transition: { duration: 2, repeat: Infinity, ease: [0.4, 0, 0.6, 1] as const }
  }
};

export default function HeroSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [blinkingIndex, setBlinkingIndex] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Определение мобильного устройства
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const title = useMemo(() => "Qaspilab", []);
  
  const themeStyles = useMemo(() => ({
    background: theme === 'dark' 
      ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)',
    color: theme === 'dark' ? '#ffffff' : '#1e293b'
  }), [theme]);

  const lightBeamStyles = useMemo(() => ({
    background: theme === 'dark'
      ? 'linear-gradient(to top, transparent, rgba(6, 182, 212, 0.8), transparent)'
      : 'linear-gradient(to top, transparent, rgba(59, 130, 246, 0.6), transparent)',
    boxShadow: theme === 'dark'
      ? '0 0 20px rgba(6, 182, 212, 0.5)'
      : '0 0 20px rgba(59, 130, 246, 0.3)'
  }), [theme]);

  const titleStyles = useMemo(() => ({
    color: theme === 'dark' ? '#FFFFFF' : '#1E293B',
    textShadow: theme === 'dark'
      ? '0 0 20px rgba(6, 182, 212, 0.3)'
      : '0 0 20px rgba(59, 130, 246, 0.2)'
  }), [theme]);

  const buttonStyles = useMemo(() => ({
    background: theme === 'dark'
      ? 'linear-gradient(135deg, #06B6D4, #8B5CF6)'
      : 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
    color: '#ffffff'
  }), [theme]);

  const handleModalOpen = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const startNeuralEffect = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      if (Math.random() < 0.15) { 
        const randomIndex = Math.floor(Math.random() * title.length);
        setBlinkingIndex(randomIndex);
        
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setBlinkingIndex(-1), 100); 
      }
    }, 1000);
  }, [title.length]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      startNeuralEffect();
    }
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [mounted, startNeuralEffect]);

  // Адаптивный рендер символов заголовка
  const titleChars = useMemo(() => 
    title.split('').map((char, index) => {
      const isBlinking = index === blinkingIndex;
      const charStyle = {
        opacity: isBlinking ? 0.3 : 1,
        textShadow: isBlinking 
          ? '0 0 15px #facc15' 
          : theme === 'dark'
            ? '0 0 10px rgba(6, 182, 212, 0.2)'
            : '0 0 10px rgba(59, 130, 246, 0.1)'
      };

      return (
        <motion.span
          key={`title-char-${index}-${char}-${title}`}
          className="hero-title-char"
          style={charStyle}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isBlinking ? 0.3 : 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.2 + index * (isMobile ? 0.12 : 0.08), // Меньше задержка на мобилках
            ease: [0.25, 0.1, 0.25, 1] as const
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      );
    })
  , [title, blinkingIndex, theme, isMobile]);

  // Адаптивный рендер слов слогана
  const sloganWords = useMemo(() => {
    const sloganText = t.hero?.slogan || "Мы создаём технологии, которые превращают мечты в продукты.";
    const words = sloganText.split(' ');
    
    return (
      <div className="hero-slogan-container">
        {words.map((word, index) => (
          <motion.span
            key={`slogan-word-${index}-${word}-hero`}
            className="hero-slogan-word"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 1.5 + index * (isMobile ? 0.08 : 0.05), // Адаптивная задержка
            }}
          >
            {word}
            {index < words.length - 1 && ' '}
          </motion.span>
        ))}
      </div>
    );
  }, [t.hero?.slogan, isMobile]);

  if (!mounted) {
    return (
      <section className="hero-container performance-optimized">
        <div className="text-center gpu-accelerated">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold optimized-text">Qaspilab</h1>
        </div>
      </section>
    );
  }

  return (
    <>
      <section 
        className={`hero-container performance-optimized ${theme === 'dark' ? 'theme-dark' : 'theme-light'}`}
        style={themeStyles}
      >
        
        {/* ============= BACKGROUND EFFECTS ============= */}
        <div className="absolute inset-0 gpu-accelerated">
          {/* Градиентные орбы - скрываем на очень маленьких экранах */}
          <motion.div 
            className="gradient-orb gradient-orb-1"
            animate={ANIMATION_VARIANTS.orb1}
          />
          <motion.div 
            className="gradient-orb gradient-orb-2"
            animate={ANIMATION_VARIANTS.orb2}
          />

          {/* Луч света - упрощаем на мобилках */}
          <motion.div
            className="light-beam"
            style={lightBeamStyles}
            {...ANIMATION_VARIANTS.lightBeam}
          >
            <motion.div
              className="light-beam-inner"
              style={{
                background: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.3)'
              }}
              animate={ANIMATION_VARIANTS.lightBeamGlow}
            />
          </motion.div>
          
          {/* Частицы - меньше на мобилках */}
          {!isMobile && (
            <motion.div 
              className="floating-particle" 
              style={{
                background: theme === 'dark' ? 'rgba(6, 182, 212, 0.5)' : 'rgba(59, 130, 246, 0.4)',
                top: '20%',
                left: '15%'
              }}
              animate={ANIMATION_VARIANTS.particle}
            />
          )}
        </div>

        {/* ============= MAIN CONTENT ============= */}
        <div className="container relative mx-auto px-4 sm:px-6 h-screen flex items-center justify-center z-10 gpu-accelerated">
          <div className="text-center max-w-4xl lg:max-w-5xl w-full">
            
            {/* Адаптивный заголовок */}
            <motion.h1
              className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-3 sm:mb-4 md:mb-6 optimized-text leading-tight sm:leading-normal"
              style={titleStyles}
              animate={isMobile ? {} : ANIMATION_VARIANTS.titlePulse} // Отключаем пульсацию на мобилках
            >
              {titleChars}
            </motion.h1>

            {/* Адаптивный подзаголовок - ОБНОВЛЕН */}
            <motion.p
              className="hero-subtitle text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6 md:mb-8 font-semibold tracking-wide leading-relaxed"
              style={{
                color: theme === 'dark' ? 'rgba(226, 232, 240, 0.9)' : 'rgba(30, 41, 59, 0.8)'
              }}
              {...ANIMATION_VARIANTS.fadeUpOptimized(1.2)}
            >
              {t.hero?.subtitle || "Запуск бизнес-идей за 60 дней"}
            </motion.p>
            
            {/* Адаптивный слоган - ОБНОВЛЕН */}
            <motion.div
              className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl lg:max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed font-medium px-2 sm:px-0"
              style={{
                color: theme === 'dark' ? 'rgba(148, 163, 184, 0.9)' : 'rgba(71, 85, 105, 0.9)'
              }}
            >
              {sloganWords}
            </motion.div>

            {/* Блок с ценой - НОВЫЙ */}
            <motion.div
              className="bg-card/50 backdrop-blur-sm border rounded-2xl p-6 md:p-8 mb-8 md:mb-12 max-w-2xl mx-auto"
              {...ANIMATION_VARIANTS.fadeUpOptimized(2.0)}
              style={{
                borderColor: theme === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(29, 78, 216, 0.3)',
                boxShadow: theme === 'dark' 
                  ? '0 20px 40px rgba(59, 130, 246, 0.1)' 
                  : '0 20px 40px rgba(29, 78, 216, 0.1)'
              }}
            >
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
                {t.hero?.priceFrom || "От 3.9 млн ₸"}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                {t.hero?.paymentTerms || "50% — при старте разработки, 50% — после первого тестирования"}
              </div>
            </motion.div>

            {/* Адаптивные кнопки CTA - ОБНОВЛЕНЫ */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center px-2 sm:px-0"
              {...ANIMATION_VARIANTS.fadeUpOptimized(2.4)}
            >
              <motion.div
                whileHover={{ 
                  scale: isMobile ? 1.02 : 1.05,
                  boxShadow: theme === 'dark'
                    ? "0 0 25px rgba(59, 130, 246, 0.4)"
                    : "0 0 25px rgba(29, 78, 216, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <a href='#contact'>
                <Button
                  
                  className="w-full sm:w-auto px-6 md:px-8 py-4 md:py-5 text-base md:text-lg font-bold transition-all duration-300 shadow-xl group rounded-xl"
                  style={{
                    background: theme === 'dark' 
                      ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' 
                      : 'linear-gradient(135deg, #1d4ed8, #6d28d9)',
                    color: 'white'
                  }}
                >
                  {t.hero?.cta || "Записаться"}
                  <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>

                </a>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#contact">
                <Button 
                  variant="outline"
                  className="w-full sm:w-auto px-6 md:px-8 py-4 md:py-5 text-base md:text-lg font-bold border-2 transition-all duration-300 rounded-xl"
                  style={{
                    borderColor: theme === 'dark' ? '#3b82f6' : '#1d4ed8',
                    color: theme === 'dark' ? '#3b82f6' : '#1d4ed8'
                  }}
                >
                  {t.hero?.learnMore || "Узнать условия"}
                </Button>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Индикатор прокрутки - скрываем на мобилках */}
        {!isMobile && (
          <motion.div
            className="scroll-indicator"
            {...ANIMATION_VARIANTS.fadeUpOptimized(3)}
          >
            <motion.div
              className="scroll-line"
              style={{
                background: theme === 'dark'
                  ? 'linear-gradient(to bottom, rgba(6, 182, 212, 0.8), transparent)'
                  : 'linear-gradient(to bottom, rgba(59, 130, 246, 0.6), transparent)'
              }}
              animate={ANIMATION_VARIANTS.scrollLine}
            />
            <motion.div
              className="scroll-dot"
              style={{
                background: theme === 'dark' ? '#06B6D4' : '#3B82F6'
              }}
              animate={ANIMATION_VARIANTS.scrollDot}
            />
          </motion.div>
        )}
      </section>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={handleModalClose} 
      />
    </>
  );
}