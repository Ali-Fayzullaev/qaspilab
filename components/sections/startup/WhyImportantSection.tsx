//  WhyImportantSection.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useLanguage } from "@/lib/language-context";
import { useTheme } from "next-themes";
import {
  AlertTriangle,
  DollarSign,
  Clock,
  Target,
  Shield,
  TrendingDown,
  ZapOff,
  Crosshair,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function WhyImportantSection() {
  const { t } = useLanguage();
  const { theme, resolvedTheme } = useTheme();

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.1,
    margin: "-50px",
  });

  const [mounted, setMounted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section
        ref={sectionRef}
        className="h-[600px]"
        style={{ backgroundColor: "#1C233A" }}
      />
    );
  }

  const isDarkMode = theme === "dark" || resolvedTheme === "dark";

  const problems = [
    {
      icon: AlertTriangle,
      color: "from-red-500 to-orange-500",
      accentColor: "#ef4444",
      title: t.startupLaunch.whyImportant.problems[0]?.title || "High risks",
      description: t.startupLaunch.whyImportant.problems[0]?.description || "",
    },
    {
      icon: DollarSign,
      color: "from-amber-500 to-yellow-500",
      accentColor: "#f59e0b",
      title:
        t.startupLaunch.whyImportant.problems[1]?.title || "High costs",
      description: t.startupLaunch.whyImportant.problems[1]?.description || "",
    },
    {
      icon: Clock,
      color: "from-blue-500 to-cyan-500",
      accentColor: "#3b82f6",
      title: t.startupLaunch.whyImportant.problems[2]?.title || "Long timelines",
      description: t.startupLaunch.whyImportant.problems[2]?.description || "",
    },
    {
      icon: Target,
      color: "from-purple-500 to-pink-500",
      accentColor: "#a855f7",
      title: t.startupLaunch.whyImportant.problems[3]?.title || "No focus",
      description: t.startupLaunch.whyImportant.problems[3]?.description || "",
    },
  ];

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
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              backgroundColor: "rgba(239, 68, 68, 0.1)",
              border: "1px solid rgba(239, 68, 68, 0.2)",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Shield className="w-4 h-4 text-red-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              {t.startupLaunch.whyImportant.importantInfo}
            </span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              {t.startupLaunch.whyImportant.title}
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.startupLaunch.whyImportant.subtitle}
          </p>
        </motion.div>

        {/* Карточки проблем */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{
            duration: 0.8,
            staggerChildren: 0.2,
            delayChildren: 0.3,
          }}
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Основная карточка */}
              <div
                className={cn(
                  "relative rounded-2xl p-8 h-full",
                  "transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl",
                  "border border-white/5 hover:border-white/10"
                )}
                style={{
                  background: "rgba(30, 41, 59, 0.4)",
                  backdropFilter: "blur(20px)",
                  boxShadow:
                    hoveredCard === index
                      ? `0 20px 60px ${problem.accentColor}30`
                      : "0 4px 24px rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* Акцентный угол */}
                <div
                  className="absolute top-0 right-0 w-16 h-16 overflow-hidden"
                  style={{
                    borderTopRightRadius: "1rem",
                    borderBottomLeftRadius: "100%",
                  }}
                >
                  <div
                    className="absolute top-0 right-0 w-32 h-32 transform rotate-45 origin-top-right"
                    style={{
                      background: `linear-gradient(135deg, ${problem.accentColor}30, transparent 70%)`,
                    }}
                  />
                </div>

                {/* Иконка */}
                <div className="relative mb-8">
                  <div
                    className={cn(
                      "w-20 h-20 rounded-2xl flex items-center justify-center mb-4",
                      "shadow-lg transition-transform duration-300 group-hover:scale-110"
                    )}
                    style={{
                      background: `linear-gradient(135deg, ${problem.accentColor}, ${problem.accentColor}cc)`,
                      boxShadow: `0 10px 30px ${problem.accentColor}30`,
                    }}
                  >
                    <problem.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Микро-иконки */}
                  <div
                    className="flex items-center gap-2"
                    style={{ color: problem.accentColor }}
                  >
                    <div className="w-2 h-2 rounded-full opacity-50" />
                    <div className="w-3 h-3 rounded-full opacity-75" />
                    <div className="w-2 h-2 rounded-full opacity-50" />
                  </div>
                </div>

                {/* Заголовок */}
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                  {problem.title}
                </h3>

                {/* Описание */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  {problem.description}
                </p>

                {/* Индикатор серьезности */}
                <div className="flex items-center gap-2 mt-6">
                  <div className="flex-1 h-1 rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        backgroundColor: problem.accentColor,
                        width: hoveredCard === index ? "100%" : "60%",
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  
                </div>
              </div>

              {/* Эффект свечения */}
              <motion.div
                className="absolute inset-0 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${problem.accentColor}15 0%, transparent 70%)`,
                  filter: "blur(20px)",
                }}
                animate={
                  hoveredCard === index
                    ? {
                        opacity: [0.1, 0.2, 0.1],
                      }
                    : {}
                }
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Декоративные элементы */}
              <div className="absolute -top-2 -right-2 w-4 h-4">
                <motion.div
                  className="w-full h-full rounded-full"
                  style={{ backgroundColor: problem.accentColor }}
                  animate={
                    hoveredCard === index
                      ? {
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }
                      : {
                          opacity: 0.3,
                        }
                  }
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Заключительный текст */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
            <motion.div
            className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl mb-8"
            style={{
              background: "rgba(30, 41, 59, 0.4)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
            }}
            whileHover={{
              scale: 1.02,
              borderColor: "rgba(239, 68, 68, 0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <TrendingDown className="w-6 h-6 text-red-400" />
            <span className="text-lg font-medium text-white">
              <span className="text-red-400">{t.startupLaunch.whyImportant.failureRate.percentage}</span> {t.startupLaunch.whyImportant.failureRate.text}
            </span>
            <ZapOff className="w-6 h-6 text-red-400" />
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <p className="text-xl text-gray-300 mb-4">
              {t.startupLaunch.whyImportant.hopefulMessage}
            </p>
            <div className="flex items-center justify-center gap-2 text-green-400">
              <Crosshair className="w-5 h-5" />
              <span className="font-medium">
                {t.startupLaunch.whyImportant.ourGoal}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Линия прогресса */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
    </section>
  );
}
