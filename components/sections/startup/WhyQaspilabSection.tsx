// qaspilab/components/sections/startup/WhatClientGetsSection.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from 'next-themes';
import { 
  Award, Briefcase, Users, UserCheck, BarChart3,
  Shield, Star, Target, Zap, TrendingUp,
  CheckCircle, Clock, Users as TeamIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function WhyQaspilabSection() {
  const { t } = useLanguage();
  const { theme, resolvedTheme } = useTheme();
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true,
    amount: 0.1,
    margin: "-50px"
  });

  const [mounted, setMounted] = useState(false);
  const [hoveredReason, setHoveredReason] = useState<number | null>(null);
  
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

  const reasons = [
    {
      icon: Award,
      title: t.startupLaunch.whyQaspilab.reasons[0]?.title || "Professionalism",
      description: t.startupLaunch.whyQaspilab.reasons[0]?.description || "",
      color: isDarkMode ? "from-blue-500 to-cyan-500" : "from-blue-600 to-cyan-600",
      accentColor: isDarkMode ? "#3b82f6" : "#2563eb",
      features: t.startupLaunch.whyQaspilab.features.professionalism
    },
    {
      icon: Shield,
      title: t.startupLaunch.whyQaspilab.reasons[1]?.title || "Reliability",
      description: t.startupLaunch.whyQaspilab.reasons[1]?.description || "",
      color: isDarkMode ? "from-purple-500 to-pink-500" : "from-purple-600 to-pink-600",
      accentColor: isDarkMode ? "#a855f7" : "#9333ea",
      features: t.startupLaunch.whyQaspilab.features.reliability
    },
    {
      icon: Target,
      title: t.startupLaunch.whyQaspilab.reasons[2]?.title || "Results",
      description: t.startupLaunch.whyQaspilab.reasons[2]?.description || "",
      color: isDarkMode ? "from-emerald-500 to-teal-500" : "from-emerald-600 to-teal-600",
      accentColor: isDarkMode ? "#10b981" : "#059669",
      features: t.startupLaunch.whyQaspilab.features.results
    },
    {
      icon: Zap,
      title: t.startupLaunch.whyQaspilab.reasons[3]?.title || "Speed",
      description: t.startupLaunch.whyQaspilab.reasons[3]?.description || "",
      color: isDarkMode ? "from-amber-500 to-orange-500" : "from-amber-600 to-orange-600",
      accentColor: isDarkMode ? "#f59e0b" : "#d97706",
      features: t.startupLaunch.whyQaspilab.features.speed
    },
    {
      icon: TeamIcon,
      title: t.startupLaunch.whyQaspilab.reasons[4]?.title || "Team",
      description: t.startupLaunch.whyQaspilab.reasons[4]?.description || "",
      color: isDarkMode ? "from-rose-500 to-red-500" : "from-rose-600 to-red-600",
      accentColor: isDarkMode ? "#ef4444" : "#dc2626",
      features: t.startupLaunch.whyQaspilab.features.team
    },
    {
      icon: TrendingUp,
      title: t.startupLaunch.whyQaspilab.reasons[5]?.title || "Approach",
      description: t.startupLaunch.whyQaspilab.reasons[5]?.description || "",
      color: isDarkMode ? "from-indigo-500 to-blue-500" : "from-indigo-600 to-blue-600",
      accentColor: isDarkMode ? "#4f46e5" : "#4338ca",
      features: t.startupLaunch.whyQaspilab.features.approach
    }
  ];

  const metrics = [
    { number: "50+", label: t.startupLaunch.whyQaspilab.metrics.projects, icon: Briefcase, color: isDarkMode ? "#3b82f6" : "#2563eb" },
    { number: "5+", label: t.startupLaunch.whyQaspilab.metrics.years, icon: Clock, color: isDarkMode ? "#a855f7" : "#9333ea" },
    { number: "98%", label: t.startupLaunch.whyQaspilab.metrics.clients, icon: UserCheck, color: isDarkMode ? "#10b981" : "#059669" },
    { number: "60", label: t.startupLaunch.whyQaspilab.metrics.days, icon: CheckCircle, color: isDarkMode ? "#f59e0b" : "#d97706" }
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
        backgroundColor: isDarkMode ? "#112036" : "#ffffff",
      }}
    >
      {/* Квадратный паттерн */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
      linear-gradient(${
        isDarkMode ? "#334155" : "#e2e8f0"
      } 1px, transparent 1px),
      linear-gradient(90deg, ${
        isDarkMode ? "#334155" : "#e2e8f0"
      } 1px, transparent 1px)
    `,
          backgroundSize: "40px 40px",
          backgroundPosition: "0 0, 0 20px, 20px -20px, -20px 0px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 70%)",
        }}
      />
      {/* Фоновые элементы */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background: isDarkMode
              ? "linear-gradient(135deg, #0A0F1C 0%, #1C2739 50%, #0F172A 100%)"
              : "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)",
          }}
        />

        {/* Радиальные градиенты */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div
              className="absolute top-1/4 left-10 w-96 h-96 rounded-full blur-3xl"
              style={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
            />
            <div
              className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full blur-3xl"
              style={{ backgroundColor: "rgba(168, 85, 247, 0.05)" }}
            />
          </div>
        </div>

        {/* Геометрический паттерн */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: geometricPattern,
            backgroundSize: "80px 80px",
            backgroundPosition: "0 0, 0 0, 40px 40px, 40px 40px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 70%)",
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
              backgroundColor: "rgba(59, 130, 246, 0.2)",
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
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{ 
              backgroundColor: isDarkMode 
                ? 'rgba(59, 130, 246, 0.1)' 
                : 'rgba(37, 99, 235, 0.1)',
              border: isDarkMode 
                ? '1px solid rgba(59, 130, 246, 0.2)' 
                : '1px solid rgba(37, 99, 235, 0.2)'
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Star className="w-4 h-4" style={{ color: isDarkMode ? '#60a5fa' : '#2563eb' }} />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              {t.startupLaunch.whyQaspilab.badgeLabel}
            </span>
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              {t.startupLaunch.whyQaspilab.title}
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ 
            duration: 0.8,
            staggerChildren: 0.1,
            delayChildren: 0.3
          }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              onMouseEnter={() => setHoveredReason(index)}
              onMouseLeave={() => setHoveredReason(null)}
            >
              <div 
                className={cn(
                  "relative rounded-2xl p-8 h-full",
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
                  boxShadow: hoveredReason === index 
                    ? `0 20px 60px ${reason.accentColor}30`
                    : isDarkMode 
                      ? '0 4px 24px rgba(0, 0, 0, 0.2)'
                      : '0 4px 24px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div 
                  className="absolute top-0 right-0 w-16 h-16 overflow-hidden"
                  style={{ 
                    borderTopRightRadius: '1rem',
                    borderBottomLeftRadius: '100%'
                  }}
                >
                  <div 
                    className="absolute top-0 right-0 w-32 h-32 transform rotate-45 origin-top-right"
                    style={{
                      background: `linear-gradient(135deg, ${reason.accentColor}20, transparent 70%)`
                    }}
                  />
                </div>

                <div className="relative mb-6">
                  <div 
                    className={cn(
                      "w-16 h-16 rounded-xl flex items-center justify-center mb-4",
                      "shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                    )}
                    style={{
                      background: `linear-gradient(135deg, ${reason.accentColor}, ${reason.accentColor}cc)`,
                      boxShadow: `0 10px 30px ${reason.accentColor}40`
                    }}
                  >
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className={cn(
                  "text-xl font-bold mb-4",
                  isDarkMode ? "text-white" : "text-gray-900"
                )}>
                  {reason.title}
                </h3>

                <ul className="space-y-2 mb-6">
                  {reason.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div 
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: reason.accentColor }}
                      />
                      <span className={cn(
                        "text-sm",
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      )}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 mt-4 pt-4 border-t" style={{ 
                  borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' 
                }}>
                  <CheckCircle className="w-4 h-4" style={{ color: isDarkMode ? '#10b981' : '#059669' }} />
                  <span className={cn(
                    "text-sm",
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  )}>
                    {t.startupLaunch.whyQaspilab.ourStandard}
                  </span>
                </div>
              </div>

              {isDarkMode && (
                <motion.div
                  className="absolute inset-0 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${reason.accentColor}15 0%, transparent 70%)`,
                    filter: 'blur(20px)'
                  }}
                  animate={hoveredReason === index ? {
                    opacity: [0.1, 0.2, 0.1]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}

              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs text-white shadow-lg"
                style={{
                  background: isDarkMode 
                    ? 'linear-gradient(135deg, #1e293b, #0f172a)' 
                    : 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
                  border: isDarkMode 
                    ? '1px solid rgba(255, 255, 255, 0.1)' 
                    : '1px solid rgba(0, 0, 0, 0.1)',
                  color: isDarkMode ? '#fff' : '#111827'
                }}
              >
                {index + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.8, 
            delay: 0.8,
            staggerChildren: 0.1
          }}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
            >
              <div 
                className="rounded-2xl p-6 text-center transition-all duration-500 hover:scale-105"
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
                    : '0 4px 20px rgba(0, 0, 0, 0.05)'
                }}
              >
                <div className="flex justify-center mb-4">
                  <div 
                    className="p-3 rounded-xl"
                    style={{
                      background: `linear-gradient(135deg, ${metric.color}20, ${metric.color}10)`
                    }}
                  >
                    <metric.icon className="w-6 h-6" style={{ color: metric.color }} />
                  </div>
                </div>
                
                <div 
                  className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                >
                  {metric.number}
                </div>
                
                <p className={cn(
                  "text-sm font-medium",
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                )}>
                  {metric.label}
                </p>
              </div>

              {isDarkMode && (
                <div className="absolute inset-0 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div 
                    className="absolute inset-0 rounded-2xl blur-xl"
                    style={{ backgroundColor: `${metric.color}20` }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20 pt-8 border-t text-center"
          style={{ borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{ 
              background: isDarkMode 
                ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))'
                : 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(147, 51, 234, 0.1))',
              border: isDarkMode 
                ? '1px solid rgba(59, 130, 246, 0.2)' 
                : '1px solid rgba(37, 99, 235, 0.2)'
            }}
          >
            <Shield className="w-5 h-5" style={{ color: isDarkMode ? '#60a5fa' : '#2563eb' }} />
            <span className={cn(
              "text-lg font-medium",
              isDarkMode ? "text-white" : "text-gray-900"
            )}>
              {t.startupLaunch.whyQaspilab.trustUs}
            </span>
          </div>
        </motion.div>
      </div>

      {isDarkMode && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      )}
    </section>
  );
}