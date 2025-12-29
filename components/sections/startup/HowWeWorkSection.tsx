'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from 'next-themes';
import { 
  Search, Target, Code, Rocket, Users, 
  Sparkles, ArrowRight, CheckCircle2,
  Zap, Star
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function HowWeWorkSection() {
  const { t } = useLanguage();
  const { theme, resolvedTheme } = useTheme();
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true,
    amount: 0.1,
    margin: "-50px"
  });

  const [mounted, setMounted] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section 
        ref={sectionRef} 
        className="h-[600px]"
        style={{ backgroundColor: '#0A0F1C' }}
      />
    );
  }

  const isDarkMode = theme === 'dark' || resolvedTheme === 'dark';

  const icons = [
    { Icon: Search, color: "from-blue-500 to-cyan-500", glow: "blue" },
    { Icon: Target, color: "from-purple-500 to-pink-500", glow: "purple" },
    { Icon: Code, color: "from-emerald-500 to-teal-500", glow: "green" },
    { Icon: Rocket, color: "from-orange-500 to-amber-500", glow: "orange" },
    { Icon: Users, color: "from-rose-500 to-fuchsia-500", glow: "pink" }
  ];

  const glowColors = {
    blue: { light: "rgba(59, 130, 246, 0.15)", dark: "rgba(59, 130, 246, 0.25)" },
    purple: { light: "rgba(168, 85, 247, 0.15)", dark: "rgba(168, 85, 247, 0.25)" },
    green: { light: "rgba(34, 197, 94, 0.15)", dark: "rgba(34, 197, 94, 0.25)" },
    orange: { light: "rgba(249, 115, 22, 0.15)", dark: "rgba(249, 115, 22, 0.25)" },
    pink: { light: "rgba(236, 72, 153, 0.15)", dark: "rgba(236, 72, 153, 0.25)" }
  };

  // Создаем геометрический паттерн
  const geometricPattern = isDarkMode 
    ? `linear-gradient(30deg, #334155 12%, transparent 12.5%, transparent 87%, #334155 87.5%, #334155),
       linear-gradient(150deg, #334155 12%, transparent 12.5%, transparent 87%, #334155 87.5%, #334155),
       linear-gradient(30deg, #334155 12%, transparent 12.5%, transparent 87%, #334155 87.5%, #334155),
       linear-gradient(150deg, #334155 12%, transparent 12.5%, transparent 87%, #334155 87.5%, #334155)`
    : `linear-gradient(30deg, #e2e8f0 12%, transparent 12.5%, transparent 87%, #e2e8f0 87.5%, #e2e8f0),
       linear-gradient(150deg, #e2e8f0 12%, transparent 12.5%, transparent 87%, #e2e8f0 87.5%, #e2e8f0),
       linear-gradient(30deg, #e2e8f0 12%, transparent 12.5%, transparent 87%, #e2e8f0 87.5%, #e2e8f0),
       linear-gradient(150deg, #e2e8f0 12%, transparent 12.5%, transparent 87%, #e2e8f0 87.5%, #e2e8f0)`;

  return (
    <section 
      ref={sectionRef}
      className="relative py-28 sm:py-36 overflow-hidden"
      style={{
        backgroundColor: isDarkMode ? '#0A0F1C' : '#ffffff'
      }}
    >
      {/* Квадратный паттерн */}
<div 
  className="absolute inset-0 opacity-10"
  style={{
    backgroundImage: `
      linear-gradient(${isDarkMode ? '#334155' : '#e2e8f0'} 1px, transparent 1px),
      linear-gradient(90deg, ${isDarkMode ? '#334155' : '#e2e8f0'} 1px, transparent 1px)
    `,
    backgroundSize: '40px 40px',
    backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px',
    maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)'
  }}
/>
      {/* Фоновые элементы */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0"
          style={{
            background: isDarkMode
              ? 'linear-gradient(135deg, #0A0F1C 0%, #1C2739 50%, #0F172A 100%)'
              : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)'
          }}
        />

        {/* Радиальные градиенты */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div 
              className="absolute top-1/4 left-10 w-96 h-96 rounded-full blur-3xl"
              style={{ backgroundColor: 'rgba(59, 130, 246, 0.05)' }}
            />
            <div 
              className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full blur-3xl"
              style={{ backgroundColor: 'rgba(168, 85, 247, 0.05)' }}
            />
          </div>
        </div>

        {/* Геометрический паттерн */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: geometricPattern,
            backgroundSize: '80px 80px',
            backgroundPosition: '0 0, 0 0, 40px 40px, 40px 40px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)'
          }}
        />
      </div>

      {/* Плавающие частицы */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              backgroundColor: 'rgba(59, 130, 246, 0.2)'
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.sin(i) * 20, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Заголовок */}
        <motion.div
          className="text-center mb-20 relative"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ 
              backgroundColor: isDarkMode 
                ? 'rgba(59, 130, 246, 0.1)' 
                : 'rgba(29, 78, 216, 0.1)',
              border: isDarkMode 
                ? '1px solid rgba(59, 130, 246, 0.2)' 
                : '1px solid rgba(29, 78, 216, 0.2)'
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              ПРОЦЕСС РАБОТЫ
            </span>
            <Zap className="w-4 h-4 text-purple-400" />
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {t.startupLaunch.howWeWork.title}
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.startupLaunch.howWeWork.subtitle}
          </p>
        </motion.div>

        {/* Шаги */}
        <div className="relative">
          {/* Центральная линия */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <motion.div 
              className="w-full h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: "circOut" }}
            />
          </div>

          {t.startupLaunch.howWeWork.steps.map((step, index) => {
            const { Icon, color, glow } = icons[index];
            const isEven = index % 2 === 0;
            const currentTheme = isDarkMode ? 'dark' : 'light';
            
            return (
              <motion.div
                key={index}
                className={cn(
                  "relative flex flex-col lg:flex-row items-center mb-24 last:mb-0",
                  "group cursor-pointer"
                )}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Контентная карточка */}
                <div className={cn(
                  "flex-1 w-full lg:w-5/12",
                  isEven ? "lg:pr-16 lg:text-right" : "lg:pl-16 lg:order-2"
                )}>
                  <motion.div 
                    className={cn(
                      "relative rounded-2xl p-8",
                      "transition-all duration-500 hover:scale-[1.02]",
                      activeStep === index && "scale-[1.02]"
                    )}
                    style={{
                      background: isDarkMode
                        ? 'rgba(30, 41, 59, 0.7)'
                        : 'rgba(255, 255, 255, 0.7)',
                      backdropFilter: 'blur(20px)',
                      border: isDarkMode
                        ? '1px solid rgba(255, 255, 255, 0.1)'
                        : '1px solid rgba(0, 0, 0, 0.1)',
                      boxShadow: activeStep === index 
                        ? `0 20px 60px ${glowColors[glow as keyof typeof glowColors][currentTheme]}`
                        : '0 4px 24px rgba(0, 0, 0, 0.05)'
                    }}
                    whileHover={{ 
                      borderColor: glow === 'blue' ? 'rgba(59, 130, 246, 0.5)' :
                                  glow === 'purple' ? 'rgba(168, 85, 247, 0.5)' :
                                  glow === 'green' ? 'rgba(34, 197, 94, 0.5)' :
                                  glow === 'orange' ? 'rgba(249, 115, 22, 0.5)' :
                                  'rgba(236, 72, 153, 0.5)'
                    }}
                  >
                    {/* Акцентная полоса */}
                    <div 
                      className={cn(
                        "absolute top-0 w-1 h-full rounded-full",
                        isEven ? "left-0" : "right-0"
                      )}
                      style={{
                        background: glow === 'blue' ? 'linear-gradient(180deg, #3b82f6, transparent)' :
                                    glow === 'purple' ? 'linear-gradient(180deg, #a855f7, transparent)' :
                                    glow === 'green' ? 'linear-gradient(180deg, #22c55e, transparent)' :
                                    glow === 'orange' ? 'linear-gradient(180deg, #f97316, transparent)' :
                                    'linear-gradient(180deg, #ec4899, transparent)'
                      }}
                    />

                    {/* Номер шага */}
                    <motion.div 
                      className={cn(
                        "absolute -top-4 inline-flex items-center justify-center",
                        "w-10 h-10 rounded-full font-bold text-white",
                        "shadow-lg",
                        isEven ? "lg:-right-4 -right-2" : "lg:-left-4 -left-2"
                      )}
                      style={{
                        background: glow === 'blue' ? 'linear-gradient(135deg, #3b82f6, #1d4ed8)' :
                                    glow === 'purple' ? 'linear-gradient(135deg, #a855f7, #7c3aed)' :
                                    glow === 'green' ? 'linear-gradient(135deg, #22c55e, #16a34a)' :
                                    glow === 'orange' ? 'linear-gradient(135deg, #f97316, #ea580c)' :
                                    'linear-gradient(135deg, #ec4899, #db2777)'
                      }}
                      whileHover={{ scale: 1.1, rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      {index + 1}
                    </motion.div>

                    <div className={cn(
                      "flex items-center mb-6",
                      isEven ? "justify-end" : "justify-start"
                    )}>
                      <div className="flex items-center gap-4">
                        {!isEven && (
                          <Icon className={cn(
                            "w-8 h-8",
                            glow === 'blue' ? "text-blue-500" :
                            glow === 'purple' ? "text-purple-500" :
                            glow === 'green' ? "text-green-500" :
                            glow === 'orange' ? "text-orange-500" :
                            "text-pink-500"
                          )} />
                        )}
                        <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                          {step.title}
                        </h3>
                        {isEven && (
                          <Icon className={cn(
                            "w-8 h-8",
                            glow === 'blue' ? "text-blue-500" :
                            glow === 'purple' ? "text-purple-500" :
                            glow === 'green' ? "text-green-500" :
                            glow === 'orange' ? "text-orange-500" :
                            "text-pink-500"
                          )} />
                        )}
                      </div>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      {step.description}
                    </p>

                    <motion.div 
                      className={cn(
                        "flex items-center font-medium",
                        isEven ? "justify-end" : "justify-start"
                      )}
                      style={{
                        color: glow === 'blue' ? '#3b82f6' :
                               glow === 'purple' ? '#a855f7' :
                               glow === 'green' ? '#22c55e' :
                               glow === 'orange' ? '#f97316' :
                               '#ec4899'
                      }}
                      initial={false}
                      animate={{ opacity: activeStep === index ? 1 : 0.7 }}
                    >
                      <span className="mr-2">Подробнее</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Центральная иконка */}
                <div className="relative my-8 lg:my-0 lg:absolute left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    className={cn(
                      "relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl",
                      "flex items-center justify-center",
                      "shadow-2xl"
                    )}
                    style={{
                      background: glow === 'blue' ? 'linear-gradient(135deg, #3b82f6, #1d4ed8)' :
                                  glow === 'purple' ? 'linear-gradient(135deg, #a855f7, #7c3aed)' :
                                  glow === 'green' ? 'linear-gradient(135deg, #22c55e, #16a34a)' :
                                  glow === 'orange' ? 'linear-gradient(135deg, #f97316, #ea580c)' :
                                  'linear-gradient(135deg, #ec4899, #db2777)'
                    }}
                    whileHover={{ scale: 1.1 }}
                    animate={activeStep === index ? {
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                    
                    {/* Внутреннее свечение */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                      style={{
                        background: glow === 'blue' ? 'radial-gradient(circle at center, #60a5fa 0%, transparent 70%)' :
                                    glow === 'purple' ? 'radial-gradient(circle at center, #c084fc 0%, transparent 70%)' :
                                    glow === 'green' ? 'radial-gradient(circle at center, #4ade80 0%, transparent 70%)' :
                                    glow === 'orange' ? 'radial-gradient(circle at center, #fb923c 0%, transparent 70%)' :
                                    'radial-gradient(circle at center, #f472b6 0%, transparent 70%)'
                      }}
                      animate={activeStep === index ? {
                        opacity: [0, 0.3, 0]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>

                  {/* Внешнее свечение */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl -z-10"
                    style={{
                      background: glow === 'blue' ? 'radial-gradient(circle at center, #60a5fa 0%, transparent 70%)' :
                                  glow === 'purple' ? 'radial-gradient(circle at center, #c084fc 0%, transparent 70%)' :
                                  glow === 'green' ? 'radial-gradient(circle at center, #4ade80 0%, transparent 70%)' :
                                  glow === 'orange' ? 'radial-gradient(circle at center, #fb923c 0%, transparent 70%)' :
                                  'radial-gradient(circle at center, #f472b6 0%, transparent 70%)'
                    }}
                    animate={activeStep === index ? {
                      scale: [1, 1.5, 1],
                      opacity: [0.1, 0.3, 0.1]
                    } : {
                      opacity: 0.1
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Соединительные линии для мобильных */}
                  {index < t.startupLaunch.howWeWork.steps.length - 1 && (
                    <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 lg:hidden">
                      <motion.div
                        className="w-px h-16"
                        style={{
                          background: glow === 'blue' ? 'linear-gradient(180deg, #3b82f6, transparent)' :
                                      glow === 'purple' ? 'linear-gradient(180deg, #a855f7, transparent)' :
                                      glow === 'green' ? 'linear-gradient(180deg, #22c55e, transparent)' :
                                      glow === 'orange' ? 'linear-gradient(180deg, #f97316, transparent)' :
                                      'linear-gradient(180deg, #ec4899, transparent)'
                        }}
                        initial={{ scaleY: 0 }}
                        animate={isInView ? { scaleY: 1 } : {}}
                        transition={{ delay: index * 0.2 + 0.3 }}
                      />
                    </div>
                  )}
                </div>

                {/* Пустое пространство для выравнивания */}
                <div className={cn(
                  "flex-1 w-full lg:w-5/12",
                  isEven ? "lg:order-2" : "lg:order-1"
                )} />
              </motion.div>
            );
          })}
        </div>

        {/* Футер секции */}
        <motion.div
          className="text-center mt-20 pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <p className="text-lg text-muted-foreground mb-4">
            Готовы начать работу?
          </p>
          <motion.button
            className="mt-4 px-8 py-4 rounded-full text-white font-semibold text-lg hover:shadow-xl transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)'
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 15px 40px rgba(59, 130, 246, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Начать проект 
            <ArrowRight className="inline ml-2 w-5 h-5" />
          </motion.button>
          
          {/* Дополнительные преимущества */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>Без скрытых платежей</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>Гарантия качества</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Zap className="w-4 h-4 text-blue-400" />
              <span>Быстрый старт</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}