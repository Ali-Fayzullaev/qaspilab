'use client';

import { motion, useScroll, useTransform, useSpring, useReducedMotion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { Lightbulb, PuzzleIcon, Code, Rocket, Zap, Sparkles } from 'lucide-react';

/**
 * PREMIUM WorkflowSection - Mobile-optimized cinematic experience
 * 
 * 📱 FULL MOBILE OPTIMIZATION:
 * - Responsive typography scaling
 * - Adaptive visual layouts
 * - Touch-friendly interactions
 * - Performance-optimized animations
 * - Conditional rendering for different viewports
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

// Премиум компонент интерактивной карточки этапа - mobile optimized
const PremiumWorkflowCard = ({ step, index, isInView, theme }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Магнитный эффект - disabled on mobile for performance
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
  
  // Check if mobile device
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  const iconConfig = PREMIUM_WORKFLOW_ICONS[index] || PREMIUM_WORKFLOW_ICONS[0];
  const { Icon, gradient, shadow } = iconConfig;

  // Принудительно пересчитываем стили при изменении темы
  const cardStyles = useMemo(() => ({
    background: theme === 'dark' 
      ? 'rgba(17, 24, 39, 0.8)' 
      : 'rgba(255, 255, 255, 0.95)',
    border: theme === 'dark' 
      ? '1px solid rgba(255, 255, 255, 0.1)' 
      : '1px solid rgba(0, 0, 0, 0.1)'
  }), [theme]);

  return (
    <motion.div
      ref={cardRef}
      className="group cursor-pointer perspective-1000"
      initial={{ opacity: 0, y: 60, rotateX: isMobile ? 0 : 15 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        rotateX: 0
      } : {}}
      transition={{ 
        duration: isMobile ? CINEMATIC_CONFIG.duration.medium : CINEMATIC_CONFIG.duration.slow,
        delay: index * (isMobile ? 0.1 : CINEMATIC_CONFIG.stagger),
        ease: CINEMATIC_CONFIG.ease
      }}
      whileHover={!isMobile ? { 
        scale: 1.03,
        y: -8,
        transition: { duration: CINEMATIC_CONFIG.duration.fast }
      } : {}}
      onMouseMove={!isMobile ? handleMouseMove : undefined}
      onMouseEnter={!isMobile ? () => setIsHovered(true) : undefined}
      onMouseLeave={!isMobile ? () => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
      } : undefined}
      style={{
        rotateX: isMobile ? 0 : rotateX,
        rotateY: isMobile ? 0 : rotateY,
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div 
        className="relative p-4 sm:p-5 md:p-6 backdrop-blur-xl rounded-xl sm:rounded-2xl overflow-hidden"
        style={{
          transform: 'translateZ(0)',
          willChange: 'transform',
          backgroundColor: theme === 'dark' ? 'rgba(17, 24, 39, 0.8)' : 'rgba(255, 255, 255, 0.95)',
          border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
        }}
        animate={{
          boxShadow: !isMobile && isHovered 
            ? theme === 'dark' 
              ? `0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)`
              : `0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.1)`
            : theme === 'dark'
              ? `0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)`
              : `0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.05)`
        }}
      >
        {/* Premium background glow */}
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700"
          style={{
            background: `linear-gradient(135deg, ${theme === 'dark' ? '#3b82f6' : '#93c5fd'} 0%, ${theme === 'dark' ? '#8b5cf6' : '#d8b4fe'} 100%)`
          }}
        />
        
        <div className="flex items-start gap-3 sm:gap-4 relative z-10">
          {/* 3D Animated Icon */}
          <motion.div 
            className={`shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center text-white ${shadow} transition-all duration-500`}
            style={{
              background: `linear-gradient(135deg, ${
                iconConfig.gradient.includes('amber') 
                  ? theme === 'dark' ? '#f59e0b, #ea580c' : '#fbbf24, #f59e0b'
                  : iconConfig.gradient.includes('purple') 
                  ? theme === 'dark' ? '#a855f7, #ec4899' : '#c084fc, #e879f9'
                  : iconConfig.gradient.includes('blue') 
                  ? theme === 'dark' ? '#3b82f6, #06b6d4' : '#60a5fa, #22d3ee'
                  : theme === 'dark' ? '#10b981, #14b8a6' : '#34d399, #2dd4bf'
              })`,
              transform: 'translateZ(20px)',
            }}
            animate={{
              rotateY: !isMobile && isHovered ? [0, 360] : 0,
              scale: !isMobile && isHovered ? 1.1 : 1,
            }}
            transition={{
              rotateY: { duration: 1, ease: 'easeInOut' },
              scale: { duration: CINEMATIC_CONFIG.duration.fast }
            }}
          >
            <Icon size={20} strokeWidth={1.5} />
          </motion.div>
          
          {/* Content */}
          <div className="flex-1" style={{ transform: 'translateZ(10px)' }}>
            <motion.div className="flex items-center gap-2 mb-2">
              <motion.h3 
                className="text-base sm:text-lg md:text-xl font-bold leading-tight"
                style={{
                  backgroundImage: theme === 'dark' 
                    ? 'linear-gradient(to right, #ffffff, #d1d5db)' 
                    : 'linear-gradient(to right, #1f2937, #374151)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent'
                }}
                animate={{
                  x: !isMobile && isHovered ? 8 : 0
                }}
                transition={{ duration: CINEMATIC_CONFIG.duration.fast }}
              >
                {step.title}
              </motion.h3>
            </motion.div>
            
            <motion.p 
              className={`text-sm sm:text-base leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
              animate={{
                x: !isMobile && isHovered ? 4 : 0
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
              className="absolute -top-2 -right-2 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-sm"
              style={{
                background: `linear-gradient(135deg, ${theme === 'dark' ? '#3b82f6, #8b5cf6' : '#60a5fa, #a78bfa'})`,
                transform: 'translateZ(30px)'
              }}
              animate={{
                scale: !isMobile && isHovered ? 1.2 : 1,
                rotate: !isMobile && isHovered ? 360 : 0
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
          className="absolute bottom-0 left-0 h-0.5 rounded-full"
          style={{
            background: `linear-gradient(to right, ${theme === 'dark' ? '#3b82f6, #8b5cf6' : '#60a5fa, #a78bfa'})`
          }}
          initial={{ width: '0%' }}
          animate={{ width: !isMobile && isHovered ? '100%' : '0%' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  );
};

// Премиум компонент кинематографического визуала - mobile optimized
// Премиум компонент кинематографического визуала - mobile optimized
const CinematicWorkflowVisual = ({ theme, isInView, workflowData }: any) => {
  const visualRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Check if mobile device
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  // Scroll parallax эффекты - simplified for mobile
  const { scrollYProgress } = useScroll({
    target: visualRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -50 : -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 50 : 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 180 : 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [isMobile ? 0.9 : 0.8, 1, isMobile ? 0.9 : 0.8]);
  
  // Mouse tracking для параллакса - disabled on mobile
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!visualRef.current || isMobile) return;
    const rect = visualRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 100;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 100;
    setMousePosition({ x, y });
  }, [isMobile]);
  
  return (
    <motion.div
      ref={visualRef}
      className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden"
      style={{ scale }}
      onMouseMove={!isMobile ? handleMouseMove : undefined}
      onMouseLeave={!isMobile ? () => setMousePosition({ x: 0, y: 0 }) : undefined}
    >
      {/* Main background image - ИСПРАВЛЕННЫЕ ФИЛЬТРЫ */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: y1,
          x: isMobile ? 0 : mousePosition.x * 0.1,
        }}
      >
        <Image
          src="/client.jpg"
          alt="Premium Workflow Visualization"
          fill
          className="object-cover"
          style={{
            filter: theme === 'dark' 
              ? 'brightness(1) contrast(1.3) saturate(1.2)' 
              : 'brightness(1) contrast(1.1) saturate(1.1)' // УВЕЛИЧИЛ brightness для светлой темы
          }}
          priority={false}
          loading="lazy"
        />
        
        {/* Cinematic overlay - ИСПРАВЛЕННЫЙ ОВЕРЛЕЙ */}
        <motion.div 
          className="absolute inset-0"
          style={{
            background: theme === 'dark'
              ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.6) 50%, rgba(51, 65, 85, 0.8) 100%)'
              : 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(248, 250, 252, 0.3) 50%, rgba(226, 232, 240, 0.4) 100%)' // УМЕНЬШИЛ opacity
          }}
        />
        
        {/* Дополнительный градиент для лучшей читаемости текста */}
        <motion.div 
          className="absolute inset-0"
          style={{
            background: theme === 'dark'
              ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.3) 0%, transparent 50%, rgba(51, 65, 85, 0.3) 100%)'
              : 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 50%, rgba(248, 250, 252, 0.2) 100%)'
          }}
        />
      </motion.div>
      
      {/* Floating geometric shapes - reduced count on mobile */}
      {[...Array(isMobile ? 4 : 6)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute w-3 h-3 rounded-full opacity-50"
          style={{
            background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
            left: `${20 + i * (isMobile ? 20 : 15)}%`,
            top: `${30 + (i % 2) * (isMobile ? 35 : 40)}%`,
            y: i % 2 === 0 ? y1 : y2,
            x: isMobile ? 0 : mousePosition.x * (0.05 + i * 0.01),
            rotate: rotate,
          }}
          animate={{
            scale: [1, 1.3],
            opacity: [0.5, 0.8],
          }}
          transition={{
            duration: isMobile ? 2 : 3 + i * 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.2,
            ease: "easeInOut",
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
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Main timeline with glow - simplified on mobile */}
        <motion.path
          d={isMobile ? "M 20 50 Q 40 35 50 50 T 80 50" : "M 15 50 Q 35 30 50 50 T 85 50"}
          stroke="url(#premiumTimeline)"
          strokeWidth={isMobile ? "0.3" : "0.5"}
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{
            duration: isMobile ? 1.5 : 2,
            delay: 0.5,
            ease: "easeInOut"
          }}
        />
        
        {/* Animated nodes */}
        {workflowData.steps?.map((step: any, index: number) => (
          <motion.g key={`timeline-node-${index}`}>
            <motion.circle
              cx={isMobile ? 20 + index * 20 : 15 + index * 23.3}
              cy="50"
              r={isMobile ? "1" : "1.5"}
              fill="url(#premiumTimeline)"
              filter="url(#glow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { 
                scale: 1, 
                opacity: 1 
              } : {}}
              transition={{
                delay: 1 + index * 0.2,
                duration: 0.8,
                ease: "backOut",
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
            />
          </motion.g>
        ))}
      </svg>
      
      {/* Premium Dialog Messages - mobile optimized */}
      {workflowData.steps?.map((step: any, index: number) => {
        const dialogDelay = 2 + index * 0.3;
        // Shorter dialog texts for better fit
        const clientDialogs = [
          "Need idea?", 
          "Want design?", 
          "Ready to build?", 
          "Time to launch?"
        ];
        const qaspilabDialogs = [
          "Let's research!", 
          "Creating UI!", 
          "Building now!", 
          "Going live!"
        ];
        const clientDialog = clientDialogs[index] || `Step ${step.step}`;
        const qaspilabDialog = qaspilabDialogs[index] || 'Done!';
        
        // Improved positioning to stay within bounds
        const maxLeft = isMobile ? 70 : 75; // Prevent overflow
        const clientTop = isMobile ? (index % 2 === 0 ? '15%' : '70%') : (index % 2 === 0 ? '20%' : '75%');
        const qaspilabTop = isMobile ? (index % 2 === 0 ? '60%' : '30%') : (index % 2 === 0 ? '65%' : '25%');
        const clientLeft = `${Math.min(10 + index * (isMobile ? 18 : 15), maxLeft)}%`;
        const qaspilabLeft = `${Math.min(15 + index * (isMobile ? 18 : 15), maxLeft)}%`;
        
        // Compact sizes to fit better
        const clientMaxWidth = isMobile ? 'max-w-16' : 'max-w-20';
        const qaspilabMaxWidth = isMobile ? 'max-w-16' : 'max-w-20';
        const fontSize = 'text-xs';
        const padding = isMobile ? 'px-1.5 py-1' : 'px-2 py-1.5';
        
        return (
          <div key={`premium-dialog-${index}`}>
            {/* Premium Client Dialog - ИСПРАВЛЕННЫЙ ФОН для светлой темы */}
            <motion.div
              className={`absolute backdrop-blur-lg rounded-lg ${padding} shadow-xl ${clientMaxWidth} z-20`}
              style={{
                background: theme === 'dark' 
                  ? 'rgba(30, 41, 59, 0.95)' 
                  : 'rgba(255, 255, 255, 0.98)', // УВЕЛИЧИЛ opacity для лучшей читаемости
                border: `1px solid ${theme === 'dark' 
                  ? 'rgba(71, 85, 105, 0.3)' 
                  : 'rgba(203, 213, 225, 0.8)'}`, // УСИЛИЛ границу для светлой темы
                left: clientLeft,
                top: clientTop,
                boxShadow: theme === 'dark'
                  ? '0 15px 30px -10px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                  : '0 15px 30px -10px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(203, 213, 225, 0.5)' // УСИЛИЛ тень для светлой темы
              }}
              initial={{ opacity: 0, y: 20, scale: 0.8, rotateX: 15 }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0, 
                scale: 1, 
                rotateX: 0 
              } : {}}
              transition={{
                duration: 0.6,
                delay: dialogDelay,
                ease: "easeOut"
              }}
            >
              <p className={`font-medium ${fontSize} ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'} leading-tight wrap-break-word overflow-hidden`}>
                {clientDialog}
              </p>
              {/* Premium dialog tail - mobile optimized */}
              {!isMobile && (
                <div 
                  className="absolute w-2 h-2 sm:w-3 sm:h-3 rotate-45"
                  style={{
                    background: theme === 'dark' 
                      ? 'rgba(30, 41, 59, 0.95)' 
                      : 'rgba(255, 255, 255, 0.98)',
                    borderTop: 'none',
                    borderLeft: 'none',
                    borderRight: `1px solid ${theme === 'dark' 
                      ? 'rgba(71, 85, 105, 0.3)' 
                      : 'rgba(203, 213, 225, 0.8)'}`,
                    borderBottom: `1px solid ${theme === 'dark' 
                      ? 'rgba(71, 85, 105, 0.3)' 
                      : 'rgba(203, 213, 225, 0.8)'}`,
                    bottom: index % 2 === 0 ? '-4px' : 'auto',
                    top: index % 2 === 0 ? 'auto' : '-4px',
                    left: '16px'
                  }}
                />
              )}
            </motion.div>

            {/* Premium Qaspilab Dialog */}
            <motion.div
              className={`absolute backdrop-blur-lg rounded-lg ${padding} shadow-xl ${qaspilabMaxWidth} z-20`}
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.95), rgba(139, 92, 246, 0.95))',
                border: '1px solid rgba(255, 255, 255, 0.3)', // УСИЛИЛ границу
                left: qaspilabLeft,
                top: qaspilabTop,
                boxShadow: '0 15px 30px -10px rgba(59, 130, 246, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2)' // УСИЛИЛ тень
              }}
              initial={{ opacity: 0, y: 20, scale: 0.8, rotateX: -15 }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0, 
                scale: 1, 
                rotateX: 0 
              } : {}}
              transition={{
                duration: 0.6,
                delay: dialogDelay + 0.2,
                ease: "easeOut"
              }}
            >
              <p className={`${fontSize} text-white font-semibold leading-tight wrap-break-word overflow-hidden`}>
                {qaspilabDialog}
              </p>
              {/* Premium dialog tail - mobile optimized */}
              {!isMobile && (
                <div 
                  className="absolute w-2 h-2 sm:w-3 sm:h-3 rotate-45"
                  style={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.95), rgba(139, 92, 246, 0.95))',
                    borderTop: 'none',
                    borderLeft: 'none',
                    borderRight: '1px solid rgba(255, 255, 255, 0.3)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                    bottom: index % 2 === 0 ? 'auto' : '-4px',
                    top: index % 2 === 0 ? '-4px' : 'auto',
                    right: '16px'
                  }}
                />
              )}
            </motion.div>
          </div>
        );
      })}
      
      {/* Interactive sparkles - mobile optimized */}
      <motion.div
        className="absolute top-3 right-3 sm:top-4 sm:right-4"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1],
        }}
        transition={{
          duration: isMobile ? 3 : 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: 'easeInOut'
        }}
      >
        <Sparkles className={`w-4 h-4 sm:w-6 sm:h-6 ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-500'}`} />
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Detect mobile on mount
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
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
      steps: t.workflow?.steps || [
        {
          step: "1",
          title: "Idea & Research",
          description: "We dive deep into your business needs and market opportunities."
        },
        {
          step: "2", 
          title: "Design & Prototype",
          description: "Creating intuitive interfaces with user-centered design approach."
        },
        {
          step: "3",
          title: "Build & Test",
          description: "Developing robust solutions with quality assurance at every step."
        },
        {
          step: "4",
          title: "Launch & Support",
          description: "Deploying your product and providing ongoing maintenance."
        }
      ]
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
      className="relative py-24 sm:py-32 transition-colors duration-700 overflow-hidden"
      style={{
        background: theme === 'dark' 
          ? 'radial-gradient(circle at 30% 30%, #0c1a2d 0%, #1a2d47 50%, #2a3d5a 100%)'
          : 'radial-gradient(circle at 70% 70%, #ffffff 0%, #f0f9ff 50%, #e0f2fe 100%)',
        color: theme === 'dark' ? '#ffffff' : '#0f172a'
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
          className="absolute inset-0"
          animate={{
            x: [-20, 20],
            y: [-20, 20],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${theme === 'dark' ? '3b82f6' : '6b7280'}' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-20 items-center"
          style={{ y: contentY }}
        >
          
          {/* Premium Content Block */}
          <div className="z-10 order-1 lg:order-2">
            {/* Cinematic title - mobile optimized */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: CINEMATIC_CONFIG.duration.medium,
                delay: 0.2,
                ease: "easeInOut"
              }}
            >
              <motion.h2 
                className={`font-black mb-3 sm:mb-4 ${isMobile ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl'} leading-tight`}
                style={{
                  backgroundImage: theme === 'dark'
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
              
              {/* Premium subtitle - mobile optimized */}
              <motion.p
                className={`text-muted-foreground mb-6 sm:mb-8 ${isMobile ? 'text-sm sm:text-base' : 'text-lg sm:text-xl'} max-w-lg`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: CINEMATIC_CONFIG.duration.medium,
                  delay: 0.3,
                  ease: "easeInOut"
                }}
              >
                {t.workflow.premiumWorkflowDescription || "Experience a premium workflow designed for excellence, combining innovation, efficiency, and collaboration to bring your vision to life."}
              </motion.p>
            </motion.div>
            
            {/* Premium Workflow Cards */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
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

            {/* Call-to-action - mobile optimized */}
            <motion.div
              className="mt-6 sm:mt-8 md:mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: CINEMATIC_CONFIG.duration.medium,
                delay: 0.7,
                ease: "easeInOut"
              }}
            >
              <motion.button
                className="group relative w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl text-white font-semibold overflow-hidden"
                style={{
                  background: 'linear-gradient(to right, #2563eb, #7c3aed)'
                }}
                whileHover={!isMobile ? { 
                  scale: 1.03,
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
                } : {}}
                whileTap={{ scale: 0.98 }}
              >
                <a href="#contact">
                  <span className="relative z-10 flex items-center justify-center sm:justify-start gap-2">
                    {t.mission?.startPremiumJourney || "Start Premium Journey"}
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Zap size={isMobile ? 16 : 20} />
                    </motion.div>
                  </span>
                </a>
                
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to right, #7c3aed, #ec4899)'
                  }}
                  initial={{ x: '-100%' }}
                  whileHover={!isMobile ? { x: '0%' } : { x: '-100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </div>

          {/* Premium Visual Block - mobile order adjustment */}
          <div className="relative order-2 lg:order-1 mb-8 lg:mb-0">
            <CinematicWorkflowVisual 
              theme={theme} 
              isInView={isInView}
              workflowData={workflowData}
            />
          </div>

        </motion.div>
      </div>
    </section>
  );
}
