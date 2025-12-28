'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from 'next-themes';
import { Search, Target, Code, Rocket, Users } from 'lucide-react';

export default function HowWeWorkSection() {
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

  const icons = [Search, Target, Code, Rocket, Users];

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const stepAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
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
            {t.startupLaunch.howWeWork.title}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            {t.startupLaunch.howWeWork.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerAnimation}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {t.startupLaunch.howWeWork.steps.map((step, index) => {
            const Icon = icons[index];
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                className={`flex items-center mb-16 last:mb-0 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                variants={stepAnimation}
              >
                {/* Контент */}
                <div className={`flex-1 ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div 
                    className="bg-card/50 backdrop-blur-sm border rounded-3xl p-8 hover:scale-105 transition-all duration-500"
                    style={{
                      borderColor: theme === 'dark' 
                        ? 'rgba(59, 130, 246, 0.2)' 
                        : 'rgba(29, 78, 216, 0.2)',
                      boxShadow: theme === 'dark' 
                        ? '0 20px 40px rgba(59, 130, 246, 0.1)' 
                        : '0 20px 40px rgba(29, 78, 216, 0.1)'
                    }}
                  >
                    <div className="flex items-center mb-6">
                      <div 
                        className="text-2xl font-black px-4 py-2 rounded-xl mr-4"
                        style={{
                          background: theme === 'dark' 
                            ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' 
                            : 'linear-gradient(135deg, #1d4ed8, #6d28d9)',
                          color: 'white'
                        }}
                      >
                        {step.step}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-lg text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Визуальный элемент */}
                <div className="shrink-0 mb-8 lg:mb-0">
                  <div className="relative">
                    {/* Основной круг с иконкой */}
                    <div 
                      className="w-32 h-32 rounded-full flex items-center justify-center relative z-10"
                      style={{
                        background: theme === 'dark' 
                          ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' 
                          : 'linear-gradient(135deg, #1d4ed8, #6d28d9)',
                      }}
                    >
                      <Icon className="w-16 h-16 text-white" />
                    </div>
                    
                    {/* Пульсирующий эффект */}
                    <motion.div
                      className="absolute inset-0 rounded-full opacity-30"
                      style={{
                        background: theme === 'dark' ? '#3b82f6' : '#1d4ed8',
                      }}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.1, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                    />
                    
                    {/* Соединительная линия */}
                    {index < t.startupLaunch.howWeWork.steps.length - 1 && (
                      <div 
                        className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-16 lg:hidden"
                        style={{
                          background: `linear-gradient(180deg, ${
                            theme === 'dark' ? '#3b82f6' : '#1d4ed8'
                          } 0%, transparent 100%)`
                        }}
                      />
                    )}
                  </div>
                </div>

                {/* Соединительная линия для десктопа */}
                {index < t.startupLaunch.howWeWork.steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 mt-32">
                    <motion.div 
                      className="w-1 h-16"
                      style={{
                        background: `linear-gradient(180deg, ${
                          theme === 'dark' ? '#3b82f6' : '#1d4ed8'
                        } 0%, transparent 100%)`
                      }}
                      initial={{ scaleY: 0 }}
                      animate={isInView ? { scaleY: 1 } : {}}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}