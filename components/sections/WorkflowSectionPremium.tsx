'use client';

import { motion, useScroll, useTransform, useSpring, useReducedMotion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { Lightbulb, PuzzleIcon, Code, Rocket, ArrowRight, Zap, Sparkles } from 'lucide-react';

/**
 * PREMIUM WorkflowSection - Кинематографичные анимации в стиле Apple, Stripe, Linear
 * 
 * 🎬 КИНЕМАТОГРАФИЧЕСКИЕ ЭФФЕКТЫ:
 * - Unified premium background как в других секциях
 * - Scroll-triggered parallax с плавными трансформациями
 * - Magnetic interactive elements с hover эффектами
 * - 3D depth и layered animations
 * - Morphing transitions между состояниями
 * - Cinematic timing и easing curves
 * - 60fps optimized performance
 */

// Premium иконки для workflow этапов
const PREMIUM_WORKFLOW_ICONS = [
  { Icon: Lightbulb, gradient: 'from-amber-400 to-orange-500', shadow: 'shadow-amber-500/25' },
  { Icon: PuzzleIcon, gradient: 'from-purple-400 to-pink-500', shadow: 'shadow-purple-500/25' },
  { Icon: Code, gradient: 'from-blue-400 to-cyan-500', shadow: 'shadow-blue-500/25' },
  { Icon: Rocket, gradient: 'from-emerald-400 to-teal-500', shadow: 'shadow-emerald-500/25' },
] as const;

// Кинематографические параметры анимации
const CINEMATIC_CONFIG = {
  spring: { stiffness: 100, damping: 30, restDelta: 0.001 },
  ease: [0.25, 0.1, 0.25, 1] as const,
  duration: { slow: 1.2, medium: 0.8, fast: 0.4 },
  stagger: 0.15,
  parallax: { strength: 50, smoothness: 0.1 }
};

// Премиум компонент интерактивной карточки этапа
const PremiumWorkflowCard = ({ step, index, isInView, theme }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Магнитный эффект
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-100, 100], [10, -10]);
  const rotateY = useTransform(mouseX, [-100, 100], [-10, 10]);
  
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) * 0.3);
    mouseY.set((e.clientY - centerY) * 0.3);
  }, [mouseX, mouseY]);
  
  const iconConfig = PREMIUM_WORKFLOW_ICONS[index] || PREMIUM_WORKFLOW_ICONS[0];
  const { Icon, gradient, shadow } = iconConfig;
  
  return (
    <motion.div
      ref={cardRef}
      className="group cursor-pointer perspective-1000"
      initial={{ opacity: 0, y: 80, rotateX: 15 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        rotateX: 0
      } : {}}
      transition={{ 
        duration: CINEMATIC_CONFIG.duration.slow,
        delay: index * CINEMATIC_CONFIG.stagger,
        ease: CINEMATIC_CONFIG.ease
      }}
      whileHover={{ 
        scale: 1.03,
        y: -8,
        transition: { duration: CINEMATIC_CONFIG.duration.fast }
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div 
        className="relative p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-800/30 overflow-hidden"
        style={{
          transform: 'translateZ(0)',
          willChange: 'transform',
        }}
        animate={{
          boxShadow: isHovered 
            ? `0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)`
            : `0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)`
        }}
      >
        {/* Premium background glow */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700"
          style={{
            background: `linear-gradient(135deg, ${theme === 'dark' ? '#3b82f6' : '#6366f1'} 0%, ${theme === 'dark' ? '#8b5cf6' : '#a855f7'} 100%)`
          }}
        />
        
        {/* Floating particles on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={false}
          animate={isHovered ? {
            background: [
              'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
            ]
          } : {}}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
        
        <div className="flex items-start gap-6 relative z-10">
          {/* 3D Animated Icon */}
          <motion.div 
            className={`shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-white ${shadow} transition-all duration-500`}
            style={{
              background: `linear-gradient(135deg, ${iconConfig.gradient.includes('amber') ? '#f59e0b, #ea580c' : iconConfig.gradient.includes('purple') ? '#a855f7, #ec4899' : iconConfig.gradient.includes('blue') ? '#3b82f6, #06b6d4' : '#10b981, #14b8a6'})`,
              transform: 'translateZ(20px)',
            }}
            animate={{
              rotateY: isHovered ? [0, 360] : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{
              rotateY: { duration: 1, ease: 'easeInOut' },
              scale: { duration: CINEMATIC_CONFIG.duration.fast }
            }}
          >
            <Icon size={28} strokeWidth={1.5} />
          </motion.div>
          
          {/* Content */}
          <div className="flex-1" style={{ transform: 'translateZ(10px)' }}>
            <motion.div className="flex items-center gap-3 mb-3">
              <motion.h3 
                className="text-2xl font-bold"
                style={{
                  background: theme === 'dark' 
                    ? 'linear-gradient(to right, #ffffff, #d1d5db)' 
                    : 'linear-gradient(to right, #111827, #4b5563)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent'
                }}
                animate={{
                  x: isHovered ? 8 : 0
                }}
                transition={{ duration: CINEMATIC_CONFIG.duration.fast }}
              >
                {step.title}
              </motion.h3>
              
              {/* Animated arrow */}
              <motion.div
                animate={{
                  x: isHovered ? 5 : 0,
                  opacity: isHovered ? 1 : 0.6
                }}
                transition={{ duration: CINEMATIC_CONFIG.duration.fast }}
              >
                <ArrowRight size={20} className="text-blue-500" />
              </motion.div>
            </motion.div>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-400 leading-relaxed"
              animate={{
                x: isHovered ? 4 : 0
              }}
              transition={{ 
                duration: CINEMATIC_CONFIG.duration.fast,
                delay: 0.05 
              }}
            >
              {step.description}
            </motion.p>
            
            {/* Step number indicator */}
            <motion.div
              className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                transform: 'translateZ(30px)'
              }}
              animate={{
                scale: isHovered ? 1.2 : 1,
                rotate: isHovered ? 360 : 0
              }}
              transition={{
                scale: { duration: CINEMATIC_CONFIG.duration.fast },
                rotate: { duration: 0.8, ease: 'easeInOut' }
              }}
            >
              {step.step}
            </motion.div>
          </div>
        </div>
        
        {/* Progress indicator */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 rounded-full"
          style={{
            background: 'linear-gradient(to right, #3b82f6, #8b5cf6)'
          }}
          initial={{ width: '0%' }}
          animate={{ width: isHovered ? '100%' : '0%' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  );
};

// Премиум компонент кинематографического визуала
const CinematicWorkflowVisual = ({ theme, isInView, workflowData }: any) => {
  const visualRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Scroll parallax эффекты
  const { scrollYProgress } = useScroll({
    target: visualRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  
  // Mouse tracking для параллакса
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!visualRef.current) return;
    const rect = visualRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 100;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 100;
    setMousePosition({ x, y });
  }, []);
  
  return (
    <motion.div
      ref={visualRef}
      className="relative h-[600px] rounded-3xl overflow-hidden"
      style={{ scale }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
    >
      {/* Main background image */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: y1,
          x: mousePosition.x * 0.1,
        }}
      >
        <Image
          src="/client.jpg"
          alt="Premium Workflow Visualization"
          fill
          className="object-cover"
          style={{
            filter: theme === 'dark' 
              ? 'brightness(0.4) contrast(1.3) saturate(1.2)' 
              : 'brightness(0.7) contrast(1.1) saturate(0.9)'
          }}
          priority={false}
          loading="lazy"
        />
        
        {/* Cinematic overlay */}
        <motion.div 
          className="absolute inset-0"
          style={{
            background: theme === 'dark'
              ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.6) 50%, rgba(51, 65, 85, 0.8) 100%)'
              : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.7) 50%, rgba(226, 232, 240, 0.9) 100%)'
          }}
        />
      </motion.div>
      
      {/* Floating geometric shapes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute w-4 h-4 rounded-full opacity-60"
          style={{
            background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 2) * 40}%`,
            y: i % 2 === 0 ? y1 : y2,
            x: mousePosition.x * (0.05 + i * 0.01),
            rotate: rotate,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
      
      {/* Premium timeline visualization */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        style={{
          filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1))',
        }}
      >
        <defs>
          <linearGradient id="premiumTimeline" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={theme === 'dark' ? '#60a5fa' : '#3b82f6'} stopOpacity="0.9" />
            <stop offset="50%" stopColor={theme === 'dark' ? '#a78bfa' : '#8b5cf6'} stopOpacity="0.9" />
            <stop offset="100%" stopColor={theme === 'dark' ? '#f472b6' : '#ec4899'} stopOpacity="0.9" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Main timeline with glow */}
        <motion.path
          d="M 15 50 Q 35 30 50 50 T 85 50"
          stroke="url(#premiumTimeline)"
          strokeWidth="0.5"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{
            duration: 2,
            delay: 0.5,
            ease: "easeInOut"
          }}
        />
        
        {/* Animated nodes */}
        {workflowData.steps?.map((step: any, index: number) => (
          <motion.g key={`timeline-node-${index}`}>
            <motion.circle
              cx={15 + index * 23.3}
              cy="50"
              r="1.5"
              fill="url(#premiumTimeline)"
              filter="url(#glow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { 
                scale: [0, 1.5, 1], 
                opacity: 1 
              } : {}}
              transition={{
                delay: 1 + index * 0.2,
                duration: 0.8,
                ease: "easeInOut"
              }}
            />
            
            {/* Pulsing rings */}
            <motion.circle
              cx={15 + index * 23.3}
              cy="50"
              r="3"
              fill="none"
              stroke="url(#premiumTimeline)"
              strokeWidth="0.2"
              opacity="0.5"
              animate={isInView ? {
                r: [3, 6, 3],
                opacity: [0.5, 0, 0.5]
              } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 1.5 + index * 0.3,
              }}
            />
          </motion.g>
        ))}
      </svg>
      
      {/* Premium Dialog Messages */}
      {workflowData.steps?.map((step: any, index: number) => {
        const dialogDelay = 2 + index * 0.3;
        const clientDialog = step.description?.split('.')[0] + '?' || `Этап ${step.step}`;
        const qaspilabDialog = step.title || 'Готово!';
        
        return (
          <div key={`premium-dialog-${index}`}>
            {/* Premium Client Dialog */}
            <motion.div
              className="absolute backdrop-blur-xl rounded-2xl px-4 py-3 shadow-2xl border max-w-[140px] z-20"
              style={{
                background: theme === 'dark' 
                  ? 'rgba(30, 41, 59, 0.95)' 
                  : 'rgba(255, 255, 255, 0.95)',
                borderColor: theme === 'dark' 
                  ? 'rgba(71, 85, 105, 0.3)' 
                  : 'rgba(226, 232, 240, 0.5)',
                left: `${15 + index * 20}%`,
                top: index % 2 === 0 ? '15%' : '70%',
                boxShadow: theme === 'dark'
                  ? '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                  : '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)'
              }}
              initial={{ opacity: 0, y: 30, scale: 0.8, rotateX: 15 }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0, 
                scale: 1, 
                rotateX: 0 
              } : {}}
              transition={{
                duration: 0.8,
                delay: dialogDelay,
                ease: "easeOut"
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
                rotateX: -5,
                transition: { duration: 0.2 }
              }}
            >
              <p className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-100' : 'text-gray-700'}`}>
                {clientDialog}
              </p>
              {/* Premium dialog tail */}
              <div 
                className="absolute w-3 h-3 rotate-45 border"
                style={{
                  background: theme === 'dark' 
                    ? 'rgba(30, 41, 59, 0.95)' 
                    : 'rgba(255, 255, 255, 0.95)',
                  borderColor: theme === 'dark' 
                    ? 'rgba(71, 85, 105, 0.3)' 
                    : 'rgba(226, 232, 240, 0.5)',
                  borderTop: 'none',
                  borderLeft: 'none',
                  bottom: index % 2 === 0 ? '-6px' : 'auto',
                  top: index % 2 === 0 ? 'auto' : '-6px',
                  left: '24px'
                }}
              />
            </motion.div>

            {/* Premium Qaspilab Dialog */}
            <motion.div
              className="absolute backdrop-blur-xl rounded-2xl px-4 py-3 shadow-2xl border max-w-[150px] z-20"
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.95), rgba(139, 92, 246, 0.95))',
                borderColor: 'rgba(255, 255, 255, 0.2)',
                left: `${20 + index * 20}%`,
                top: index % 2 === 0 ? '60%' : '20%',
                boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)'
              }}
              initial={{ opacity: 0, y: 30, scale: 0.8, rotateX: -15 }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0, 
                scale: 1, 
                rotateX: 0 
              } : {}}
              transition={{
                duration: 0.8,
                delay: dialogDelay + 0.3,
                ease: "easeOut"
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
                rotateX: 5,
                transition: { duration: 0.2 }
              }}
            >
              <p className="text-sm text-white font-semibold">
                {qaspilabDialog}
              </p>
              {/* Premium dialog tail */}
              <div 
                className="absolute w-3 h-3 rotate-45 border border-white/20"
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.95), rgba(139, 92, 246, 0.95))',
                  borderTop: 'none',
                  borderLeft: 'none',
                  bottom: index % 2 === 0 ? 'auto' : '-6px',
                  top: index % 2 === 0 ? '-6px' : 'auto',
                  right: '24px'
                }}
              />
            </motion.div>
          </div>
        );
      })}
      
      {/* Interactive sparkles */}
      <motion.div
        className="absolute top-4 right-4"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <Sparkles className="w-6 h-6 text-yellow-400 opacity-80" />
      </motion.div>
    </motion.div>
  );
};

export default function WorkflowSectionPremium() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Состояние для предотвращения ошибок гидратации
  const [mounted, setMounted] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [mounted]);

  // Scroll-based параллакс для секции
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);

  // Мемоизированные тексты из переводов
  const workflowData = useMemo(() => {
    return {
      title: t.workflow?.title || "We create as we think. Simple. Transparent. Fast.",
      steps: t.workflow?.steps || []
    };
  }, [t.workflow]);

  // Premium background стили
  const premiumBackgroundStyles = useMemo(() => ({
    background: theme === 'dark' 
      ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)',
    color: theme === 'dark' ? '#ffffff' : '#1e293b'
  }), [theme]);

  if (!mounted) {
    return (
      <section 
        ref={sectionRef} 
        className="h-screen bg-background"
        style={{ willChange: 'transform' }}
      />
    );
  }

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen py-32 overflow-hidden"
      style={{
        ...premiumBackgroundStyles,
        willChange: 'transform',
        transform: 'translateZ(0)',
      }}
    >
      {/* Premium animated background */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ y: backgroundY }}
      >
        {/* Gradient mesh background */}
        <div className="absolute inset-0 opacity-40">
          <div 
            className="absolute inset-0"
            style={{
              background: theme === 'dark'
                ? `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                   radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
                   radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.05) 0%, transparent 50%)`
                : `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
                   radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)`
            }}
          />
        </div>
        
        {/* Animated noise texture */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${theme === 'dark' ? '3b82f6' : '6b7280'}' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="grid lg:grid-cols-2 gap-20 items-center"
          style={{ y: contentY }}
        >
          
          {/* Premium Visual Block */}
          <div className="relative order-1 lg:order-1">
            <CinematicWorkflowVisual 
              theme={theme} 
              isInView={isInView}
              workflowData={workflowData}
            />
          </div>

          {/* Premium Content Block */}
          <div className="z-10 order-2 lg:order-2">
            {/* Cinematic title */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: CINEMATIC_CONFIG.duration.slow,
                delay: 0.2,
                ease: "easeInOut"
              }}
            >
              <motion.h2 
                className="text-5xl md:text-6xl font-black mb-6"
                style={{
                  background: theme === 'dark'
                    ? 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #cbd5e1 100%)'
                    : 'linear-gradient(135deg, #1e293b 0%, #475569 50%, #64748b 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  willChange: 'transform',
                }}
              >
                {workflowData.title}
              </motion.h2>
              
              {/* Premium subtitle */}
              <motion.p
                className="text-xl text-muted-foreground mb-16 max-w-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: CINEMATIC_CONFIG.duration.medium,
                  delay: 0.4,
                  ease: "easeInOut"
                }}
              >
                Experience our premium workflow that transforms ideas into exceptional products with cinematic precision.
              </motion.p>
            </motion.div>
            
            {/* Premium Workflow Cards */}
            <div className="space-y-8">
              {workflowData.steps?.map((step: any, index: number) => (
                <PremiumWorkflowCard
                  key={`premium-step-${index}`}
                  step={step}
                  index={index}
                  isInView={isInView}
                  theme={theme}
                />
              ))}
            </div>

            {/* Call-to-action */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: CINEMATIC_CONFIG.duration.medium,
                delay: 0.8,
                ease: "easeInOut"
              }}
            >
              <motion.button
                className="group relative px-8 py-4 rounded-2xl text-white font-semibold overflow-hidden"
                style={{
                  background: 'linear-gradient(to right, #2563eb, #7c3aed)'
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Premium Journey
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Zap size={20} />
                  </motion.div>
                </span>
                
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to right, #7c3aed, #ec4899)'
                  }}
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </div>

        </motion.div>
      </div>

      {/* Floating action indicators */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm"
          style={{
            background: 'linear-gradient(to right, #3b82f6, #8b5cf6)'
          }}
        >
          <ArrowRight className="text-white" size={20} />
        </div>
      </motion.div>
    </section>
  );
}