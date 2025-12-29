'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from 'next-themes';
import { 
  Calendar, Clock, CreditCard, CheckCircle2,
  FileText, Target, ArrowRight, TrendingUp, Shield, Zap,
  Code, Rocket
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function WorkFormatSection() {
  const { t } = useLanguage();
  const { theme, resolvedTheme } = useTheme();
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true,
    amount: 0.1,
    margin: "-50px"
  });

  const [mounted, setMounted] = useState(false);
  const [activeStage, setActiveStage] = useState<number | null>(null);
  
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

  const stages = [
    { 
      icon: FileText, 
      title: t.startupLaunch.workFormat.stages[0]?.stage || "Анализ и планирование",
      timeline: t.startupLaunch.workFormat.stages[0]?.timeline || "5-7 дней",
      tasks: t.startupLaunch.workFormat.stages[0]?.tasks || "",
      color: isDarkMode ? "from-blue-500 to-cyan-500" : "from-blue-600 to-cyan-600",
      accentColor: isDarkMode ? "#3b82f6" : "#2563eb"
    },
    { 
      icon: Target, 
      title: t.startupLaunch.workFormat.stages[1]?.stage || "Дизайн и прототипирование",
      timeline: t.startupLaunch.workFormat.stages[1]?.timeline || "10-14 дней",
      tasks: t.startupLaunch.workFormat.stages[1]?.tasks || "",
      color: isDarkMode ? "from-purple-500 to-pink-500" : "from-purple-600 to-pink-600",
      accentColor: isDarkMode ? "#a855f7" : "#9333ea"
    },
  ];

  const paymentTerms = [
    { 
      text: t.startupLaunch.workFormat.payment.terms[0] || "50% предоплата",
      color: isDarkMode ? "#3b82f6" : "#2563eb"
    },
    { 
      text: t.startupLaunch.workFormat.payment.terms[1] || "30% после дизайна",
      color: isDarkMode ? "#a855f7" : "#9333ea"
    },
  ];

  // Квадратный паттерн для фона
  const geometricPattern = isDarkMode 
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
        backgroundColor: isDarkMode ? '#112036' : '#ffffff'
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
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{ 
              background: isDarkMode 
                ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))'
                : 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(147, 51, 234, 0.1))',
              border: isDarkMode 
                ? '1px solid rgba(59, 130, 246, 0.2)' 
                : '1px solid rgba(37, 99, 235, 0.2)'
            }}
          >
            <Calendar className="w-4 h-4" style={{ color: isDarkMode ? '#60a5fa' : '#2563eb' }} />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              ПРОЦЕСС РАБОТЫ
            </span>
            <Clock className="w-4 h-4" style={{ color: isDarkMode ? '#c084fc' : '#9333ea' }} />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent">
              {t.startupLaunch.workFormat.title}
            </span>
          </h2>
          
          <p className={cn(
            "text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed",
            isDarkMode ? "text-gray-300" : "text-gray-600"
          )}>
            Прозрачный процесс от идеи до запуска продукта
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Этапы работы */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl"
                  style={{ 
                    background: isDarkMode 
                      ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))'
                      : 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(8, 145, 178, 0.1))'
                  }}
                >
                  <Calendar className="w-6 h-6" style={{ color: isDarkMode ? '#60a5fa' : '#2563eb' }} />
                </div>
                <h3 className={cn(
                  "text-2xl font-bold",
                  isDarkMode ? "text-white" : "text-gray-900"
                )}>
                  Этапы работы
                </h3>
              </div>
              
              <div className="space-y-6 relative">
                {/* Соединительная линия */}
                <div className="absolute left-8 top-0 bottom-0 w-px"
                  style={{
                    background: isDarkMode
                      ? 'linear-gradient(to bottom, rgba(59, 130, 246, 0.3), rgba(168, 85, 247, 0.3), rgba(16, 185, 129, 0.3))'
                      : 'linear-gradient(to bottom, rgba(37, 99, 235, 0.3), rgba(147, 51, 234, 0.3), rgba(5, 150, 105, 0.3))'
                  }}
                />
                
                {stages.map((stage, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    onMouseEnter={() => setActiveStage(index)}
                    onMouseLeave={() => setActiveStage(null)}
                  >
                    {/* Точка на линии */}
                    <div 
                      className="absolute left-8 top-6 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 z-10 transition-all duration-300"
                      style={{ 
                        backgroundColor: activeStage === index 
                          ? stage.accentColor 
                          : (isDarkMode ? '#1D283A' : '#ffffff'),
                        borderColor: stage.accentColor
                      }}
                    />

                    {/* Карточка этапа */}
                    <div 
                      className={cn(
                        "relative ml-12 rounded-2xl p-6",
                        "transition-all duration-500 hover:scale-[1.02]",
                        isDarkMode 
                          ? "border border-white/10 hover:border-white/20" 
                          : "border border-gray-200 hover:border-blue-300"
                      )}
                      style={{
                        background: isDarkMode 
                          ? 'rgba(30, 41, 59, 0.6)' 
                          : 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(20px)',
                        boxShadow: activeStage === index 
                          ? `0 20px 40px ${stage.accentColor}30`
                          : isDarkMode 
                            ? '0 4px 20px rgba(0, 0, 0, 0.2)'
                            : '0 4px 20px rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      {/* Заголовок и таймлайн */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div 
                            className="p-2 rounded-lg"
                            style={{ 
                              background: `linear-gradient(135deg, ${stage.accentColor}20, ${stage.accentColor}10)`
                            }}
                          >
                            <stage.icon className="w-5 h-5" style={{ color: stage.accentColor }} />
                          </div>
                          <h4 className={cn(
                            "text-xl font-bold",
                            isDarkMode ? "text-white" : "text-gray-900"
                          )}>
                            {stage.title}
                          </h4>
                        </div>
                        <div 
                          className="px-3 py-1.5 rounded-lg font-semibold text-sm text-white"
                          style={{
                            background: `linear-gradient(135deg, ${stage.accentColor}, ${stage.accentColor}cc)`
                          }}
                        >
                          {stage.timeline}
                        </div>
                      </div>

                      {/* Описание */}
                      <p className={cn(
                        "mb-4",
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      )}>
                        {stage.tasks}
                      </p>

                      {/* Прогресс */}
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1 rounded-full"
                          style={{ 
                            backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
                          }}
                        >
                          <motion.div 
                            className="h-full rounded-full"
                            style={{ 
                              backgroundColor: stage.accentColor,
                              width: activeStage === index ? '100%' : `${(index + 1) * 25}%`
                            }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>
                        <ArrowRight className="w-4 h-4" style={{ color: stage.accentColor }} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Условия оплаты и таймлайн */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* Условия оплаты */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-xl"
                    style={{ 
                      background: isDarkMode 
                        ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1))'
                        : 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(219, 39, 119, 0.1))'
                    }}
                  >
                    <CreditCard className="w-6 h-6" style={{ color: isDarkMode ? '#c084fc' : '#9333ea' }} />
                  </div>
                  <h3 className={cn(
                    "text-2xl font-bold",
                    isDarkMode ? "text-white" : "text-gray-900"
                  )}>
                    {t.startupLaunch.workFormat.payment.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {paymentTerms.map((term, index) => (
                    <motion.div
                      key={index}
                      className="relative"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    >
                      <div 
                        className={cn(
                          "rounded-2xl p-6",
                          isDarkMode 
                            ? "border border-white/10" 
                            : "border border-gray-200",
                          "transition-all duration-300 hover:scale-[1.02]"
                        )}
                        style={{
                          background: isDarkMode 
                            ? 'rgba(30, 41, 59, 0.6)' 
                            : 'rgba(255, 255, 255, 0.8)',
                          backdropFilter: 'blur(20px)'
                        }}
                      >
                        <div className="flex items-center gap-4">
                          <div 
                            className="w-10 h-10 rounded-xl flex items-center justify-center"
                            style={{
                              background: `linear-gradient(135deg, ${term.color}20, ${term.color}10)`
                            }}
                          >
                            <CheckCircle2 className="w-5 h-5" style={{ color: term.color }} />
                          </div>
                          <p className={cn(
                            "text-lg font-medium",
                            isDarkMode ? "text-white" : "text-gray-900"
                          )}>
                            {term.text}
                          </p>
                          <div className="ml-auto">
                            <div 
                              className="px-3 py-1 rounded-lg text-sm font-semibold text-white"
                              style={{ 
                                background: `linear-gradient(135deg, ${term.color}20, ${term.color}10)`,
                                color: term.color
                              }}
                            >
                              Этап {index + 1}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Таймлайн */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-xl"
                    style={{ 
                      background: isDarkMode 
                        ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1))'
                        : 'linear-gradient(135deg, rgba(5, 150, 105, 0.1), rgba(13, 148, 136, 0.1))'
                    }}
                  >
                    <Clock className="w-6 h-6" style={{ color: isDarkMode ? '#34d399' : '#059669' }} />
                  </div>
                  <h3 className={cn(
                    "text-2xl font-bold",
                    isDarkMode ? "text-white" : "text-gray-900"
                  )}>
                    Общие сроки: 60 дней
                  </h3>
                </div>

                <div 
                  className="rounded-2xl p-6"
                  style={{
                    background: isDarkMode 
                      ? 'rgba(30, 41, 59, 0.6)' 
                      : 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(20px)',
                    border: isDarkMode 
                      ? '1px solid rgba(255, 255, 255, 0.1)' 
                      : '1px solid rgba(0, 0, 0, 0.1)',
                    boxShadow: isDarkMode 
                      ? '0 4px 20px rgba(0, 0, 0, 0.2)'
                      : '0 4px 20px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  {/* Полоса прогресса */}
                  <div className="relative mb-8">
                    <div className="h-2 rounded-full overflow-hidden"
                      style={{ 
                        backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      <motion.div 
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "100%" } : {}}
                        transition={{ duration: 2, delay: 1 }}
                      />
                    </div>
                    
                    {/* Точки этапов */}
                    <div className="flex justify-between mt-6">
                      {['Старт', '30 дней', '60 дней'].map((label, index) => {
                        const pointColor = index === 0 ? (isDarkMode ? '#3b82f6' : '#2563eb') : 
                                          index === 1 ? (isDarkMode ? '#a855f7' : '#9333ea') : 
                                          (isDarkMode ? '#10b981' : '#059669');
                        
                        return (
                          <div key={index} className="text-center">
                            <div 
                              className="w-8 h-8 rounded-full border-4 mx-auto mb-2 transition-all duration-300 hover:scale-125"
                              style={{
                                backgroundColor: pointColor,
                                borderColor: isDarkMode ? '#1D283A' : '#ffffff'
                              }}
                            />
                            <p className={cn(
                              "text-sm font-semibold",
                              isDarkMode ? "text-white" : "text-gray-900"
                            )}>
                              {label}
                            </p>
                            <p className={cn(
                              "text-xs",
                              isDarkMode ? "text-gray-400" : "text-gray-600"
                            )}>
                              {index === 0 ? 'Анализ' : index === 1 ? 'Разработка' : 'Запуск'}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Дополнительная информация */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5" style={{ color: isDarkMode ? '#60a5fa' : '#2563eb' }} />
                      <div>
                        <p className={cn(
                          "text-sm font-medium",
                          isDarkMode ? "text-white" : "text-gray-900"
                        )}>
                          Гарантия сроков
                        </p>
                        <p className={cn(
                          "text-xs",
                          isDarkMode ? "text-gray-400" : "text-gray-500"
                        )}>
                          Фиксированный график
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5" style={{ color: isDarkMode ? '#c084fc' : '#9333ea' }} />
                      <div>
                        <p className={cn(
                          "text-sm font-medium",
                          isDarkMode ? "text-white" : "text-gray-900"
                        )}>
                          Еженедельные отчеты
                        </p>
                        <p className={cn(
                          "text-xs",
                          isDarkMode ? "text-gray-400" : "text-gray-500"
                        )}>
                          Прозрачность процесса
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Дополнительная информация */}
        <motion.div
          className="mt-20 pt-8 border-t text-center"
          style={{ borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full"
            style={{ 
              background: isDarkMode 
                ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))'
                : 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(147, 51, 234, 0.1))',
              border: isDarkMode 
                ? '1px solid rgba(59, 130, 246, 0.2)' 
                : '1px solid rgba(37, 99, 235, 0.2)'
            }}
          >
            <a href="#contact">
            <span className={cn(
              "text-lg font-medium",
              isDarkMode ? "text-white" : "text-gray-900"
            )}>
              Готовы начать? Свяжитесь с нами для консультации
            </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}