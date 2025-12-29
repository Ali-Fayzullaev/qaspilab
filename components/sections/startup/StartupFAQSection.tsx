'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from 'next-themes';
import { Plus, Minus, HelpCircle, Sparkles, Zap, MessageSquare, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function StartupFAQSection() {
  const { t } = useLanguage();
  const { theme, resolvedTheme } = useTheme();
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true,
    amount: 0.1,
    margin: "-50px"
  });

  const [mounted, setMounted] = useState(false);
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    const isDarkMode = theme === 'dark' || resolvedTheme === 'dark';
    return (
      <section 
        ref={sectionRef} 
        className="h-[600px]"
        style={{ 
          background: isDarkMode 
            ? 'linear-gradient(135deg, #112036 0%, #243753 100%)'
            : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
        }}
      />
    );
  }

  const isDarkMode = theme === 'dark' || resolvedTheme === 'dark';

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // Создаем квадратный паттерн для фона
  const squarePattern = isDarkMode 
    ? `linear-gradient(45deg, rgba(255, 255, 255, 0.03) 25%, transparent 25%),
       linear-gradient(-45deg, rgba(255, 255, 255, 0.03) 25%, transparent 25%),
       linear-gradient(45deg, transparent 75%, rgba(255, 255, 255, 0.03) 75%),
       linear-gradient(-45deg, transparent 75%, rgba(255, 255, 255, 0.03) 75%)`
    : `linear-gradient(45deg, rgba(0, 0, 0, 0.03) 25%, transparent 25%),
       linear-gradient(-45deg, rgba(0, 0, 0, 0.03) 25%, transparent 25%),
       linear-gradient(45deg, transparent 75%, rgba(0, 0, 0, 0.03) 75%),
       linear-gradient(-45deg, transparent 75%, rgba(0, 0, 0, 0.03) 75%)`;

  return (
    <section 
      ref={sectionRef}
      className="relative py-28 sm:py-36 overflow-hidden"
      style={{ 
        background: isDarkMode 
          ? 'linear-gradient(135deg, #112036 0%, #243753 100%)'
          : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
      }}
    >
      {/* Фоновые элементы */}
      <div className="absolute inset-0 -z-10">
        {/* Градиентный оверлей */}
        {isDarkMode && (
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)'
            }}
          />
        )}

        {/* Квадратный паттерн */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: squarePattern,
            backgroundSize: '80px 80px',
            backgroundPosition: '0 0, 0 40px, 40px -40px, -40px 0px',
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)'
          }}
        />

        {/* Плавающие элементы */}
        {isDarkMode && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  backgroundColor: i % 3 === 0 ? '#10b981' : 
                                  i % 3 === 1 ? '#3b82f6' : 
                                  '#a855f7',
                  opacity: 0.2
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.cos(i) * 15, 0],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4
                }}
              />
            ))}
          </div>
        )}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        {/* Заголовок */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{ 
              background: isDarkMode 
                ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1))'
                : 'linear-gradient(135deg, rgba(5, 150, 105, 0.1), rgba(37, 99, 235, 0.1))',
              border: isDarkMode 
                ? '1px solid rgba(16, 185, 129, 0.2)' 
                : '1px solid rgba(5, 150, 105, 0.2)'
            }}
          >
            <HelpCircle className="w-4 h-4" style={{ color: isDarkMode ? '#34d399' : '#059669' }} />
            <span className="text-sm font-medium bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
              FAQ
            </span>
            <Sparkles className="w-4 h-4" style={{ color: isDarkMode ? '#60a5fa' : '#2563eb' }} />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t.startupLaunch.faq.title}
            </span>
          </h2>
        </motion.div>

        {/* FAQ элементы */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ 
            duration: 0.8,
            staggerChildren: 0.1,
            delayChildren: 0.3
          }}
        >
          {t.startupLaunch.faq.items.map((item, index) => {
            const isOpen = openItems.includes(index);
            const accentColor = index % 3 === 0 ? (isDarkMode ? '#10b981' : '#059669') :
                              index % 3 === 1 ? (isDarkMode ? '#3b82f6' : '#2563eb') :
                              (isDarkMode ? '#a855f7' : '#9333ea');
            
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div 
                  className={cn(
                    "relative rounded-2xl overflow-hidden transition-all duration-500",
                    "border",
                    isDarkMode 
                      ? "border-white/10 hover:border-white/20" 
                      : "border-gray-200 hover:border-gray-300",
                    hoveredItem === index ? "scale-[1.02]" : ""
                  )}
                  style={{
                    background: isDarkMode 
                      ? 'rgba(30, 41, 59, 0.6)' 
                      : 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: hoveredItem === index 
                      ? `0 20px 60px ${accentColor}30`
                      : isDarkMode 
                        ? '0 4px 20px rgba(0, 0, 0, 0.2)'
                        : '0 4px 20px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  {/* Акцентная полоса */}
                  <div 
                    className="absolute top-0 left-0 w-1 h-full transition-all duration-500"
                    style={{ 
                      backgroundColor: accentColor,
                      height: isOpen ? '100%' : '0%'
                    }}
                  />

                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 md:p-8 text-left flex items-start justify-between group/button relative"
                  >
                    {/* Иконка номера */}
                    <div className="absolute -left-4 top-6 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm text-white shadow-lg"
                      style={{ backgroundColor: accentColor }}
                    >
                      {index + 1}
                    </div>

                    <div className="ml-8 flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg"
                          style={{ 
                            background: `linear-gradient(135deg, ${accentColor}20, ${accentColor}10)`
                          }}
                        >
                          <MessageSquare className="w-5 h-5" style={{ color: accentColor }} />
                        </div>
                        <h3 className={cn(
                          "text-xl md:text-2xl font-bold text-left leading-tight",
                          "transition-colors duration-300 group-hover/button:text-blue-400",
                          isDarkMode ? "text-white" : "text-gray-900"
                        )}>
                          {item.question}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Иконка переключения */}
                    <div 
                      className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover/button:scale-110 ml-4"
                      style={{
                        background: `linear-gradient(135deg, ${accentColor}20, ${accentColor}10)`,
                        border: `1px solid ${accentColor}30`
                      }}
                    >
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {isOpen ? (
                          <Minus className="w-5 h-5" style={{ color: accentColor }} />
                        ) : (
                          <Plus className="w-5 h-5" style={{ color: accentColor }} />
                        )}
                      </motion.div>
                    </div>
                  </button>
                  
                  {/* Контент ответа */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8 ml-8">
                      {/* Разделительная линия */}
                      <div className="w-full h-px mb-6"
                        style={{ 
                          background: isDarkMode 
                            ? 'linear-gradient(90deg, rgba(255, 255, 255, 0.1), transparent)'
                            : 'linear-gradient(90deg, rgba(0, 0, 0, 0.1), transparent)'
                        }}
                      />
                      
                      {/* Ответ */}
                      <motion.p 
                        className={cn(
                          "text-lg leading-relaxed",
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        )}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isOpen ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        {item.answer}
                      </motion.p>

                      {/* Индикатор */}
                      {isOpen && (
                        <motion.div 
                          className="flex items-center gap-2 mt-6 pt-4 border-t"
                          style={{ 
                            borderColor: isDarkMode 
                              ? 'rgba(255, 255, 255, 0.1)' 
                              : 'rgba(0, 0, 0, 0.1)'
                          }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <Zap className="w-4 h-4" style={{ color: accentColor }} />
                          <span className={cn(
                            "text-sm",
                            isDarkMode ? "text-gray-400" : "text-gray-500"
                          )}>
                            Полезная информация
                          </span>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Эффект свечения */}
                {isDarkMode && hoveredItem === index && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${accentColor}15 0%, transparent 70%)`,
                      filter: 'blur(20px)'
                    }}
                    animate={{
                      opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Дополнительная информация */}
        <motion.div
          className="text-center mt-16 pt-8 border-t"
          style={{ 
            borderColor: isDarkMode 
              ? 'rgba(255, 255, 255, 0.1)' 
              : 'rgba(0, 0, 0, 0.1)'
          }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className={cn(
            "text-lg mb-6",
            isDarkMode ? "text-gray-300" : "text-gray-600"
          )}>
            {t.startupLaunch.faq.cat}
          </p>
          
          <motion.a 
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl transition-all duration-500 group"
            style={{
              background: isDarkMode 
                ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1))'
                : 'linear-gradient(135deg, rgba(5, 150, 105, 0.1), rgba(37, 99, 235, 0.1))',
              border: isDarkMode 
                ? '1px solid rgba(16, 185, 129, 0.2)' 
                : '1px solid rgba(5, 150, 105, 0.2)'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={cn(
              "font-semibold",
              isDarkMode ? "text-white" : "text-gray-900"
            )}>
              {t.startupLaunch.faq.catFree}
            </span>
            <ArrowRight className="w-5 h-5 transition-all duration-500 group-hover:translate-x-1"
              style={{ 
                color: isDarkMode ? '#34d399' : '#059669' 
              }}
            />
          </motion.a>
        </motion.div>
      </div>

      {/* Декоративная линия */}
      {isDarkMode && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      )}
    </section>
  );
}