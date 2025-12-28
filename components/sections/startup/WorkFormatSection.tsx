'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from 'next-themes';
import { Calendar, Clock, CreditCard } from 'lucide-react';

export default function WorkFormatSection() {
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

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1]
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
            {t.startupLaunch.workFormat.title}
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Этапы работы */}
            <motion.div
              variants={containerAnimation}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
                <Calendar className="w-8 h-8 mr-3" style={{ color: theme === 'dark' ? '#3b82f6' : '#1d4ed8' }} />
                Этапы работы
              </h3>
              
              <div className="space-y-6">
                {t.startupLaunch.workFormat.stages.map((stage, index) => (
                  <motion.div
                    key={index}
                    className="group"
                    variants={itemAnimation}
                  >
                    <div 
                      className="bg-card/50 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-500 hover:scale-105"
                      style={{
                        borderColor: theme === 'dark' 
                          ? 'rgba(59, 130, 246, 0.2)' 
                          : 'rgba(29, 78, 216, 0.2)',
                        boxShadow: theme === 'dark' 
                          ? '0 10px 30px rgba(59, 130, 246, 0.1)' 
                          : '0 10px 30px rgba(29, 78, 216, 0.1)'
                      }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-bold text-foreground">
                          {stage.stage}
                        </h4>
                        <div 
                          className="px-4 py-2 rounded-xl text-sm font-semibold text-white"
                          style={{
                            background: theme === 'dark' 
                              ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' 
                              : 'linear-gradient(135deg, #1d4ed8, #6d28d9)',
                          }}
                        >
                          {stage.timeline}
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        {stage.tasks}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Условия оплаты */}
            <motion.div
              variants={containerAnimation}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
                <CreditCard className="w-8 h-8 mr-3" style={{ color: theme === 'dark' ? '#3b82f6' : '#1d4ed8' }} />
                {t.startupLaunch.workFormat.payment.title}
              </h3>
              
              <motion.div
                className="space-y-4"
                variants={itemAnimation}
              >
                {t.startupLaunch.workFormat.payment.terms.map((term, index) => (
                  <div 
                    key={index}
                    className="bg-card/50 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-500 hover:scale-105"
                    style={{
                      borderColor: theme === 'dark' 
                        ? 'rgba(34, 197, 94, 0.2)' 
                        : 'rgba(21, 128, 61, 0.2)',
                      boxShadow: theme === 'dark' 
                        ? '0 10px 30px rgba(34, 197, 94, 0.1)' 
                        : '0 10px 30px rgba(21, 128, 61, 0.1)'
                    }}
                  >
                    <div className="flex items-center">
                      <div 
                        className="w-6 h-6 rounded-full flex items-center justify-center mr-4"
                        style={{
                          background: theme === 'dark' ? '#22c55e' : '#15803d',
                        }}
                      >
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      <p className="text-foreground font-semibold">
                        {term}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Временная шкала */}
              <motion.div
                className="mt-12"
                variants={itemAnimation}
              >
                <h4 className="text-xl font-bold text-foreground mb-6 flex items-center">
                  <Clock className="w-6 h-6 mr-3" style={{ color: theme === 'dark' ? '#3b82f6' : '#1d4ed8' }} />
                  Общие сроки: 60 дней
                </h4>
                
                <div className="relative">
                  {/* Линия прогресса */}
                  <div 
                    className="absolute top-1/2 left-0 right-0 h-1 transform -translate-y-1/2 rounded-full"
                    style={{
                      background: theme === 'dark' 
                        ? 'linear-gradient(90deg, #3b82f6, #8b5cf6)' 
                        : 'linear-gradient(90deg, #1d4ed8, #6d28d9)',
                    }}
                  />
                  
                  {/* Точки этапов */}
                  <div className="flex justify-between items-center">
                    <div className="text-center">
                      <div 
                        className="w-4 h-4 rounded-full border-4 border-white mx-auto mb-2"
                        style={{
                          background: theme === 'dark' ? '#3b82f6' : '#1d4ed8',
                        }}
                      />
                      <p className="text-sm font-semibold text-muted-foreground">
                        Старт
                      </p>
                    </div>
                    <div className="text-center">
                      <div 
                        className="w-4 h-4 rounded-full border-4 border-white mx-auto mb-2"
                        style={{
                          background: theme === 'dark' ? '#8b5cf6' : '#6d28d9',
                        }}
                      />
                      <p className="text-sm font-semibold text-muted-foreground">
                        30 дней
                      </p>
                    </div>
                    <div className="text-center">
                      <div 
                        className="w-4 h-4 rounded-full border-4 border-white mx-auto mb-2"
                        style={{
                          background: theme === 'dark' ? '#22c55e' : '#15803d',
                        }}
                      />
                      <p className="text-sm font-semibold text-muted-foreground">
                        60 дней
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}