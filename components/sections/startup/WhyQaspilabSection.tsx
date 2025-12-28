'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from 'next-themes';
import { Award, Briefcase, Users, UserCheck, BarChart3 } from 'lucide-react';

export default function WhyQaspilabSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true,
    amount: 0.2 
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <section ref={sectionRef} className="h-96 bg-background" />;
  }

  const icons = [Award, Briefcase, Users, UserCheck, BarChart3];

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardAnimation = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1] as const
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 sm:py-32"
      style={{
        background: theme === 'dark' 
          ? 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)'
          : 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
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
            {t.startupLaunch.whyQaspilab.title}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Блок доверия и экспертности
          </p>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerAnimation}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.startupLaunch.whyQaspilab.reasons.map((reason, index) => {
              const Icon = icons[index];
              
              return (
                <motion.div
                  key={index}
                  className="group"
                  variants={cardAnimation}
                >
                  <div 
                    className="bg-card/50 backdrop-blur-sm border rounded-2xl p-8 h-full transition-all duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden"
                    style={{
                      borderColor: theme === 'dark' 
                        ? 'rgba(59, 130, 246, 0.2)' 
                        : 'rgba(29, 78, 216, 0.2)',
                      boxShadow: theme === 'dark' 
                        ? '0 15px 35px rgba(59, 130, 246, 0.1)' 
                        : '0 15px 35px rgba(29, 78, 216, 0.1)'
                    }}
                  >
                    {/* Иконка */}
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                      style={{
                        background: theme === 'dark' 
                          ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' 
                          : 'linear-gradient(135deg, #1d4ed8, #6d28d9)',
                      }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Заголовок */}
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {reason.title}
                    </h3>
                    
                    {/* Описание */}
                    <p className="text-muted-foreground">
                      {reason.description}
                    </p>
                    
                    {/* Декоративные элементы */}
                    <div 
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{
                        background: theme === 'dark' ? '#3b82f6' : '#1d4ed8',
                        boxShadow: `0 0 20px ${theme === 'dark' ? '#3b82f6' : '#1d4ed8'}`
                      }}
                    />
                    
                    <div 
                      className="absolute bottom-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: theme === 'dark' 
                          ? 'linear-gradient(90deg, #3b82f6, #8b5cf6)' 
                          : 'linear-gradient(90deg, #1d4ed8, #6d28d9)',
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Дополнительные метрики доверия */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.23, 1, 0.32, 1] as const }}
        >
          {[
            { number: "50+", label: "Запущенных проектов" },
            { number: "5+", label: "Лет опыта" },
            { number: "98%", label: "Довольных клиентов" },
            { number: "60", label: "Дней до запуска" }
          ].map((metric, index) => (
            <div key={index} className="text-center">
              <div 
                className="text-4xl md:text-5xl font-black mb-2"
                style={{
                  background: theme === 'dark' 
                    ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' 
                    : 'linear-gradient(135deg, #1d4ed8, #6d28d9)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {metric.number}
              </div>
              <p className="text-muted-foreground font-semibold">
                {metric.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}