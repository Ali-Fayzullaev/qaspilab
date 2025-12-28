'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Check, Star, Zap } from 'lucide-react';

export default function PricingSection() {
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
    return <section ref={sectionRef} className="h-96 bg-background" />;
  }

  const packageAnimation = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1] as const,
        delay: 0.2
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 sm:py-32"
      style={{
        background: theme === 'dark' 
          ? 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)'
          : 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
      }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6">
            {t.startupLaunch.pricing.title}
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative group"
            variants={packageAnimation}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Premium Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
              <div 
                className="px-6 py-2 rounded-full text-white font-bold text-sm flex items-center shadow-lg"
                style={{
                  background: theme === 'dark' 
                    ? 'linear-gradient(135deg, #f59e0b, #f97316)' 
                    : 'linear-gradient(135deg, #d97706, #ea580c)',
                }}
              >
                <Star className="w-4 h-4 mr-2" />
                ПРЕМИУМ ПАКЕТ
              </div>
            </div>

            <div 
              className="bg-card/50 backdrop-blur-sm border-2 rounded-3xl p-8 md:p-12 transition-all duration-500 hover:scale-105 relative overflow-hidden"
              style={{
                borderColor: theme === 'dark' 
                  ? 'rgba(59, 130, 246, 0.3)' 
                  : 'rgba(29, 78, 216, 0.3)',
                boxShadow: theme === 'dark' 
                  ? '0 25px 50px rgba(59, 130, 246, 0.15)' 
                  : '0 25px 50px rgba(29, 78, 216, 0.15)'
              }}
            >
              {/* Декоративный градиент */}
              <div 
                className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${
                    theme === 'dark' ? '#3b82f6' : '#1d4ed8'
                  } 0%, transparent 70%)`
                }}
              />

              <div className="relative z-10">
                {/* Заголовок пакета */}
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-black text-foreground mb-4 flex items-center justify-center">
                    <Zap className="w-8 h-8 mr-3" style={{ color: theme === 'dark' ? '#3b82f6' : '#1d4ed8' }} />
                    {t.startupLaunch.pricing.package.name}
                  </h3>
                  
                  {/* Цена */}
                  <div className="mb-4">
                    <span className="text-5xl md:text-6xl font-black text-foreground">
                      {t.startupLaunch.pricing.package.price}
                    </span>
                  </div>
                  
                  <p className="text-xl text-muted-foreground">
                    {t.startupLaunch.pricing.package.duration}
                  </p>
                </div>

                {/* Что включено */}
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  {t.startupLaunch.pricing.package.includes.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div 
                        className="w-6 h-6 rounded-full flex items-center justify-center mr-4 shrink-0"
                        style={{
                          background: theme === 'dark' ? '#22c55e' : '#15803d',
                        }}
                      >
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-foreground font-semibold">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA кнопка */}
                <div className="text-center">
                  <Button 
                    size="lg"
                    className="px-12 py-6 text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    style={{
                      background: theme === 'dark' 
                        ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' 
                        : 'linear-gradient(135deg, #1d4ed8, #6d28d9)',
                      color: 'white'
                    }}
                  >
                    {t.startupLaunch.pricing.cta}
                  </Button>
                </div>

                {/* Дополнительная информация */}
                <div className="mt-8 text-center">
                  <p className="text-muted-foreground text-sm">
                    * Консультация и оценка проекта - бесплатно
                  </p>
                  <p className="text-muted-foreground text-sm mt-2">
                    * Возможна рассрочка платежа
                  </p>
                </div>
              </div>

              {/* Анимированные элементы */}
              <div className="absolute top-10 right-10 w-20 h-20 opacity-10 pointer-events-none">
                <motion.div
                  className="w-full h-full rounded-full"
                  style={{
                    background: `radial-gradient(circle, ${
                      theme === 'dark' ? '#3b82f6' : '#1d4ed8'
                    } 0%, transparent 70%)`
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}