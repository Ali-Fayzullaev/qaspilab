'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function StartupHeroSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true,
    amount: 0.3 
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <section ref={sectionRef} className="h-screen bg-background" />;
  }

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  };

  const priceAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.23, 1, 0.32, 1],
        delay: 0.5
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: theme === 'dark' 
          ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
          : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)',
      }}
    >
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20"
          style={{
            background: `radial-gradient(circle, ${
              theme === 'dark' ? '#3b82f6' : '#1d4ed8'
            } 0%, transparent 70%)`
          }}
        />
        <div 
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-20"
          style={{
            background: `radial-gradient(circle, ${
              theme === 'dark' ? '#8b5cf6' : '#6d28d9'
            } 0%, transparent 70%)`
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          variants={containerAnimation}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Главный заголовок */}
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 leading-tight tracking-tight"
            variants={itemAnimation}
          >
            {t.hero.title}
          </motion.h1>
          
          {/* Подзаголовок */}
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-8"
            variants={itemAnimation}
          >
            {t.hero.subtitle}
          </motion.h2>
          
          {/* Описание */}
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto"
            variants={itemAnimation}
          >
            {t.hero.slogan}
          </motion.p>
          
          <motion.p 
            className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
            variants={itemAnimation}
          >
            {t.hero.description}
          </motion.p>
          
          {/* Блок с ценой */}
          <motion.div
            className="bg-card/50 backdrop-blur-sm border rounded-3xl p-8 mb-12 max-w-2xl mx-auto"
            variants={priceAnimation}
            style={{
              borderColor: theme === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(29, 78, 216, 0.3)',
              boxShadow: theme === 'dark' 
                ? '0 20px 40px rgba(59, 130, 246, 0.1)' 
                : '0 20px 40px rgba(29, 78, 216, 0.1)'
            }}
          >
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.hero.priceFrom}
            </div>
            <div className="text-sm md:text-base text-muted-foreground">
              {t.hero.paymentTerms}
            </div>
          </motion.div>
          
          {/* Кнопки действий */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemAnimation}
          >
            <Button 
              size="lg"
              className="px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              style={{
                background: theme === 'dark' 
                  ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' 
                  : 'linear-gradient(135deg, #1d4ed8, #6d28d9)',
                color: 'white'
              }}
            >
              {t.hero.cta}
            </Button>
            
            <Button 
              variant="outline"
              size="lg" 
              className="px-8 py-4 text-lg font-semibold rounded-xl border-2 transition-all duration-300 hover:scale-105"
              style={{
                borderColor: theme === 'dark' ? '#3b82f6' : '#1d4ed8',
                color: theme === 'dark' ? '#3b82f6' : '#1d4ed8'
              }}
            >
              {t.hero.learnMore}
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Анимированные частицы */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>
    </section>
  );
}