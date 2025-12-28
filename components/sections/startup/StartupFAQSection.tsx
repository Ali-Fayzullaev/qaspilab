'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from 'next-themes';
import { Plus, Minus } from 'lucide-react';

export default function StartupFAQSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true,
    amount: 0.2 
  });

  const [mounted, setMounted] = useState(false);
  const [openItems, setOpenItems] = useState<number[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <section ref={sectionRef} className="h-96 bg-background" />;
  }

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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
          ? 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)'
          : 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
      }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] as const }}
        >
          <div 
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{
              background: theme === 'dark' 
                ? 'rgba(59, 130, 246, 0.1)' 
                : 'rgba(29, 78, 216, 0.1)',
              color: theme === 'dark' ? '#3b82f6' : '#1d4ed8'
            }}
          >
            {t.faq?.badge || "Вопросы"}
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6">
            {t.startupLaunch.faq.title}
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Что важно знать о запуске стартапов с Qaspilab
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerAnimation}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {t.startupLaunch.faq.items.map((item, index) => {
            const isOpen = openItems.includes(index);
            
            return (
              <motion.div
                key={index}
                className="mb-4"
                variants={itemAnimation}
              >
                <div 
                  className="bg-card/50 backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
                  style={{
                    borderColor: theme === 'dark' 
                      ? 'rgba(59, 130, 246, 0.2)' 
                      : 'rgba(29, 78, 216, 0.2)',
                    boxShadow: theme === 'dark' 
                      ? '0 4px 20px rgba(59, 130, 246, 0.1)' 
                      : '0 4px 20px rgba(29, 78, 216, 0.1)'
                  }}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 md:p-8 text-left flex items-center justify-between group"
                  >
                    <h3 className="text-lg md:text-xl font-bold text-foreground pr-4 group-hover:text-primary transition-colors duration-300">
                      {item.question}
                    </h3>
                    
                    <div 
                      className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        background: isOpen 
                          ? (theme === 'dark' ? '#3b82f6' : '#1d4ed8')
                          : (theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(29, 78, 216, 0.1)'),
                      }}
                    >
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {isOpen ? (
                          <Minus className="w-4 h-4 text-white" />
                        ) : (
                          <Plus 
                            className="w-4 h-4" 
                            style={{ color: theme === 'dark' ? '#3b82f6' : '#1d4ed8' }}
                          />
                        )}
                      </motion.div>
                    </div>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.23, 1, 0.32, 1]
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8">
                      <div 
                        className="w-full h-px mb-6"
                        style={{
                          background: theme === 'dark' 
                            ? 'rgba(59, 130, 246, 0.2)' 
                            : 'rgba(29, 78, 216, 0.2)'
                        }}
                      />
                      <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Дополнительная информация */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-muted-foreground mb-4">
            Остались вопросы? Свяжитесь с нами для бесплатной консультации
          </p>
          <div 
            className="inline-flex items-center px-6 py-3 rounded-xl border-2 transition-all duration-300 hover:scale-105"
            style={{
              borderColor: theme === 'dark' ? '#3b82f6' : '#1d4ed8',
              color: theme === 'dark' ? '#3b82f6' : '#1d4ed8'
            }}
          >
            📞 Бесплатная консультация
          </div>
        </motion.div>
      </div>
    </section>
  );
}