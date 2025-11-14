'use client';

import { 
  motion, 
  useScroll, 
  useTransform,
  useSpring,
  useReducedMotion,
  useInView,
  AnimatePresence
} from 'framer-motion';
import { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { 
  Zap, Handshake, Brain, Sparkles, Star, Atom, 
  Droplets, Wifi, Lightbulb, Flame, Waves, 
  ZapIcon, Cpu, Beaker, FlaskConical
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

// Define types
interface Advantage {
  title: string;
  description: string;
  icon?: any;
  id?: number;
}

interface IconConfig {
  Icon: any;
  gradient: string;
  glow: string;
  color: string;
}

/**
 * PREMIUM WhyUsSection - Голливудские анимации в стиле кинематографа
 * с акцентом на параллель между лабораторией и процессом творчества
 */
const PREMIUM_ADVANTAGE_ICONS: IconConfig[] = [
  { Icon: Zap, gradient: 'from-yellow-400 to-orange-500', glow: 'shadow-yellow-500/30', color: '#f59e0b' },
  { Icon: Handshake, gradient: 'from-green-400 to-emerald-500', glow: 'shadow-emerald-500/30', color: '#10b981' },
  { Icon: Brain, gradient: 'from-purple-400 to-pink-500', glow: 'shadow-purple-500/30', color: '#8b5cf6' },
  { Icon: Sparkles, gradient: 'from-blue-400 to-cyan-500', glow: 'shadow-blue-500/30', color: '#3b82f6' },
] as const;

const HOLLYWOOD_CONFIG = {
  spring: { stiffness: 120, damping: 25, restDelta: 0.001 },
  ease: "easeOut" as const,
  duration: { epic: 2.0, slow: 1.5, medium: 1.0, fast: 0.6, lightning: 0.3 },
  stagger: 0.2,
  magnetic: { strength: 25, damping: 0.8 },
  particles: { count: 12, velocity: 0.5 }
};

const HollywoodAdvantageCard = ({ 
  advantage, 
  index, 
  isInView, 
  theme 
}: { 
  advantage: Advantage; 
  index: number; 
  isInView: boolean; 
  theme: string | undefined;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const mouseX = useSpring(0, HOLLYWOOD_CONFIG.spring);
  const mouseY = useSpring(0, HOLLYWOOD_CONFIG.spring);
  
  const rotateX = useTransform(mouseY, [-100, 100], [15, -15]);
  const rotateY = useTransform(mouseX, [-100, 100], [-15, 15]);
  
  const gradientX = useTransform(mouseX, [-100, 100], [0, 100]);
  const gradientY = useTransform(mouseY, [-100, 100], [0, 100]);
  
  const backgroundGradient = useTransform(
    [gradientX, gradientY], 
    ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
  );
  
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.4;
    const deltaY = (e.clientY - centerY) * 0.4;
    
    mouseX.set(deltaX);
    mouseY.set(deltaY);
    setMousePosition({ 
      x: (e.clientX - rect.left) / rect.width * 100, 
      y: (e.clientY - rect.top) / rect.height * 100 
    });
  }, [mouseX, mouseY]);
  
  const iconConfig = PREMIUM_ADVANTAGE_ICONS[index] || PREMIUM_ADVANTAGE_ICONS[0];
  const { Icon, gradient, glow, color } = iconConfig;
  
  return (
    <motion.div
      ref={cardRef}
      className="group cursor-pointer perspective-1000"
      initial={{ opacity: 0, y: 100, rotateX: 25, z: -100 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
        z: 0
      } : {}}
      transition={{ 
        duration: HOLLYWOOD_CONFIG.duration.slow,
        delay: index * HOLLYWOOD_CONFIG.stagger,
        ease: HOLLYWOOD_CONFIG.ease,
        type: "spring",
        ...HOLLYWOOD_CONFIG.spring
      }}
      whileHover={{ 
        scale: 1.05,
        y: -15,
        z: 50,
        transition: { 
          duration: HOLLYWOOD_CONFIG.duration.fast,
          type: "spring",
          stiffness: 200
        }
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
        className="relative p-8 backdrop-blur-xl rounded-3xl border border-white/30 dark:border-gray-800/40 overflow-hidden"
        style={{
          background: backgroundGradient,
          transform: 'translateZ(0)',
          willChange: 'transform',
          boxShadow: isHovered 
            ? `0 35px 80px -15px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1), 0 0 50px ${color}30`
            : `0 15px 35px -5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)`
        }}
      >
        <AnimatePresence>
          {isHovered && (
            <motion.div className="absolute inset-0 pointer-events-none">
              {[...Array(HOLLYWOOD_CONFIG.particles.count)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-1 h-1 rounded-full"
                  style={{
                    background: color,
                    left: '50%',
                    top: '50%',
                  }}
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{
                    scale: [0, 1.5],
                    opacity: [1, 0],
                    x: Math.cos((i / HOLLYWOOD_CONFIG.particles.count) * Math.PI * 2) * 100,
                    y: Math.sin((i / HOLLYWOOD_CONFIG.particles.count) * Math.PI * 2) * 100,
                  }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut"
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="flex items-start gap-6 relative z-10">
          <motion.div 
            className={`shrink-0 w-20 h-20 rounded-3xl flex items-center justify-center text-white relative`}
            style={{
              background: `linear-gradient(135deg, ${gradient.includes('yellow') ? '#f59e0b, #ea580c' : gradient.includes('green') ? '#10b981, #059669' : gradient.includes('purple') ? '#8b5cf6, #ec4899' : '#3b82f6, #06b6d4'})`,
              transform: 'translateZ(30px)',
              boxShadow: `0 20px 40px -10px ${color}40, inset 0 1px 0 rgba(255, 255, 255, 0.2)`
            }}
            animate={{
              rotateY: isHovered ? [0, 180, 360] : 0,
              scale: isHovered ? 1.2 : 1,
            }}
            transition={{
              rotateY: { duration: 2, ease: 'easeInOut' },
              scale: { duration: HOLLYWOOD_CONFIG.duration.fast, type: "spring" }
            }}
          >
            <Icon size={32} strokeWidth={2} />
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{border: '2px solid rgba(255, 255, 255, 0.2)'}}
              animate={isHovered ? {
                scale: [1, 1.5],
                opacity: [0.2, 0]
              } : {}}
              transition={{
                duration: 2,
                repeat: isHovered ? Infinity : 0,
                repeatType: "reverse",
              }}
            />
          </motion.div>
          
          <div className="flex-1" style={{ transform: 'translateZ(20px)' }}>
            <motion.div className="flex items-center gap-3 mb-4">
              <motion.h3 
                className="text-2xl font-bold"
                style={{
                  backgroundImage: theme === 'dark' 
                    ? 'linear-gradient(to right, #ffffff, #e2e8f0)' 
                    : 'linear-gradient(to right, #0f172a, #334155)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent'
                }}
                animate={{
                  x: isHovered ? 12 : 0
                }}
                transition={{ 
                  duration: HOLLYWOOD_CONFIG.duration.fast,
                  type: "spring" 
                }}
              >
                {advantage.title}
              </motion.h3>
              
              <motion.div
                animate={{
                  scale: isHovered ? 1.3 : 1,
                  rotate: isHovered ? 180 : 0
                }}
                transition={{ duration: HOLLYWOOD_CONFIG.duration.fast }}
              >
                <Star size={16} className="text-yellow-500 fill-yellow-500" />
              </motion.div>
            </motion.div>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg"
              animate={{
                x: isHovered ? 8 : 0
              }}
              transition={{ 
                duration: HOLLYWOOD_CONFIG.duration.fast,
                delay: 0.1 
              }}
            >
              {advantage.description}
            </motion.p>
          </div>
        </div>
        
        <motion.div
          className="absolute bottom-0 left-0 h-2 rounded-b-3xl"
          style={{
            background: `linear-gradient(to right, ${color}, ${color}80)`
          }}
          initial={{ width: '0%' }}
          animate={{ width: isHovered ? '100%' : '0%' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />
        
        <motion.div
          className="absolute top-4 right-4 w-3 h-3 rounded-full"
          style={{ background: color }}
          animate={{
            scale: [1, 1.5],
            opacity: [0.6, 1]
          }}
          transition={{
            duration: 3,
            repeatType: "reverse",
            repeat: Infinity,
            delay: index * 0.5
          }}
        />
      </motion.div>
    </motion.div>
  );
};

// Creative lab effects with living elements
const CreativeLabEffects = ({ 
  theme, 
  isInView 
}: { 
  theme: string | undefined; 
  isInView: boolean; 
}) => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Living Light Elements - Floating orbs */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`light-${i}`}
          className="absolute w-1.5 h-1.5 rounded-full opacity-70"
          style={{
            background: theme === 'dark' ? 'rgba(96, 165, 250, 0.9)' : 'rgba(59, 130, 246, 0.7)',
            left: `${15 + Math.random() * 70}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.3, 0.9, 0.3],
            scale: [0.8, 1.3, 0.8]
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}

      {/* Creative Data Streams - Flowing lines */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`data-${i}`}
          className="absolute h-0.5 rounded-full"
          style={{
            background: `linear-gradient(90deg, transparent, ${theme === 'dark' ? '#60a5fa' : '#2563eb'}, transparent)`,
            width: `${80 + Math.random() * 40}px`,
            top: `${25 + i * 12}%`,
            left: '-120px'
          }}
          animate={{
            x: [0, '120vw'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 5 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 1.2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Idea Sparks - Pulsing stars */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`spark-${i}`}
          className="absolute"
          style={{
            left: `${30 + Math.random() * 50}%`,
            top: `${55 + Math.random() * 35}%`,
            color: theme === 'dark' ? '#fbbf24' : '#ca8a04'
          }}
          animate={{
            scale: [0, 1.2, 0],
            rotate: [0, 180, 360],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: Math.random() * 4
          }}
        >
          <Star size={10} fill="currentColor" />
        </motion.div>
      ))}

      {/* Liquid Motion - Flowing droplets */}
      {[...Array(7)].map((_, i) => (
        <motion.div
          key={`droplet-${i}`}
          className="absolute"
          style={{
            left: `${5 + Math.random() * 25}%`,
            top: '-30px',
            color: theme === 'dark' ? '#06b6d4' : '#0891b2'
          }}
          animate={{
            y: ['0vh', '130vh'],
            x: [0, Math.sin(i * 0.5) * 40],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 7 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut"
          }}
        >
          <Droplets size={16} />
        </motion.div>
      ))}

      {/* Energy Waves - Concentric circles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute rounded-full"
          style={{
            width: '80px',
            height: '80px',
            border: `1px solid ${theme === 'dark' ? 'rgba(139, 92, 246, 0.4)' : 'rgba(99, 102, 241, 0.3)'}`,
            left: '70%',
            top: '40%',
          }}
          animate={{
            scale: [0.8, 2.5],
            opacity: [0.6, 0]
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
};

export default function WhyUsSectionPremium() {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const scrollProgress = useSpring(scrollYProgress, HOLLYWOOD_CONFIG.spring);

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
      { threshold: 0.1, rootMargin: '100px' }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [mounted]);

  // Mock data - replace with actual translation data
  const whyUsData = {
  title: t.whyUs.title,
  subtitle: t.whyUs.subtitle,
  reasons: [
    t.whyUs.reasons[0],
    t.whyUs.reasons[1],
    t.whyUs.reasons[2],
    t.whyUs.reasons[3]
  ]
};


  const premiumBackgroundStyles = useMemo(() => ({
    background: theme === 'dark' 
      ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)',
    color: theme === 'dark' ? '#ffffff' : '#1e293b'
  }), [theme]);

  const backgroundY = useTransform(scrollProgress, [0, 1], ['0%', '25%']);
  const contentY = useTransform(scrollProgress, [0, 1], ['0%', '-8%']);
  const labY = useTransform(scrollProgress, [0, 1], ['0%', '-15%']);

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
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute inset-0"
            style={{
              background: theme === 'dark'
                ? `radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                   radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
                   radial-gradient(circle at 40% 90%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)`
                : `radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
                   radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)`
            }}
          />
        </div>
        
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            x: ['0%', '100%'],
            y: ['0%', '100%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${theme === 'dark' ? '#60a5fa' : '#94a3b8'} 1px, transparent 0)`,
            backgroundRepeat: 'repeat',
            backgroundSize: '50px 50px'
          }}
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="grid lg:grid-cols-2 gap-20 items-center"
          style={{ y: contentY }}
        >
          <div className="z-10 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: HOLLYWOOD_CONFIG.duration.slow,
                delay: 0.2,
                ease: HOLLYWOOD_CONFIG.ease
              }}
            >
              <motion.h2 
                className="text-5xl md:text-6xl font-black mb-4"
                style={{
                  backgroundImage: theme === 'dark'
                    ? 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #cbd5e1 100%)'
                    : 'linear-gradient(135deg, #0f172a 0%, #475569 50%, #64748b 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  willChange: 'transform',
                }}
              >
                {whyUsData.title}
              </motion.h2>
              
              <motion.p
                className="text-xl text-gray-600 dark:text-gray-400 mb-16 max-w-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: HOLLYWOOD_CONFIG.duration.medium,
                  delay: 0.4
                }}
              >
                {whyUsData.subtitle}
              </motion.p>
            </motion.div>
            
            <div className="space-y-8">
              {whyUsData.reasons.map((reason, index) => (
                <HollywoodAdvantageCard
                  key={`premium-advantage-${index}`}
                  advantage={reason}
                  index={index}
                  isInView={isInView}
                  theme={theme}
                />
              ))}
            </div>
          </div>

          {/* Premium Laboratory Visualization with actual image */}
          <motion.div 
            className="relative order-1 lg:order-2 h-[700px]"
            style={{ y: labY }}
          >
            {/* Main lab image container with parallax */}
            <motion.div
              className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.85, rotateY: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ 
                duration: HOLLYWOOD_CONFIG.duration.epic,
                delay: 0.3,
                ease: HOLLYWOOD_CONFIG.ease
              }}
              style={{
                willChange: 'transform, opacity',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Actual lab image with proper loading */}
              <div className="absolute inset-0">
                <Image
                  src="/lab.jpg"
                  alt="Premium Qaspilab Laboratory"
                  fill
                  className="object-cover"
                  style={{
                    filter: theme === 'dark' 
                      ? 'brightness(0.6) contrast(1.3) saturate(1.2)' 
                      : 'brightness(0.8) contrast(1.1) saturate(0.9)'
                  }}
                  priority={false}
                  loading="lazy"
                />
              </div>
              
              {/* Clean laboratory overlay - representing purity */}
              <div className="absolute inset-0 bg-white/8 backdrop-blur-sm" />
              
              {/* Cinematic color overlay */}
              <motion.div 
                className="absolute inset-0"
                style={{
                  background: theme === 'dark'
                    ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.6) 0%, rgba(30, 41, 59, 0.4) 50%, rgba(51, 65, 85, 0.6) 100%)'
                    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(248, 250, 252, 0.5) 50%, rgba(226, 232, 240, 0.7) 100%)'
                }}
              />
            </motion.div>

            {/* Creative living elements overlay */}
            <CreativeLabEffects 
              theme={theme} 
              isInView={isInView}
            />

            {/* Clean floating UI elements representing lab systems */}
            <motion.div
              className="absolute top-6 right-6 bg-blue-500/25 backdrop-blur-md rounded-2xl p-4 border border-blue-500/40"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 2, duration: 1 }}
            >
              <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                {t.whyUs.labStatus}
              </div>
            </motion.div>

            <motion.div
              className="absolute top-24 left-6 bg-purple-500/25 backdrop-blur-md rounded-2xl p-4 border border-purple-500/40"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 2.2, duration: 1 }}
            >
              <div className="flex items-center gap-2 text-purple-400 text-sm font-semibold">
                <Lightbulb size={16} className="text-yellow-400" />
                {t.whyUs.ideasGenerating}
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-24 right-6 bg-cyan-500/25 backdrop-blur-md rounded-2xl p-4 border border-cyan-500/40"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 2.4, duration: 0.8 }}
            >
              <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold">
                <Wifi size={16} />
                {t.whyUs.dataFlow}
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-6 left-6 bg-teal-500/25 backdrop-blur-md rounded-2xl p-4 border border-teal-500/40"
              initial={{ opacity: 0, rotate: -15 }}
              animate={isInView ? { opacity: 1, rotate: 0 } : {}}
              transition={{ delay: 2.6, duration: 0.8 }}
            >
              <div className="flex items-center gap-2 text-teal-400 text-sm font-semibold">
                <Droplets size={16} className="text-cyan-400" />
                {t.whyUs.liquidAnalysis}
              </div>
            </motion.div>

            {/* Central creative spark */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: HOLLYWOOD_CONFIG.duration.slow,
                delay: 2.8,
                ease: HOLLYWOOD_CONFIG.ease 
              }}
            >
              <div className="bg-black/30 backdrop-blur-xl rounded-full p-5 border-2 border-yellow-400/50">
                <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating creative indicator */}
      <motion.div
        className="fixed bottom-8 left-8 z-50"
        animate={{
          y: [0, -12, 0],
          rotate: [0, 8, -8, 0]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm"
          style={{
            background: 'linear-gradient(135deg, #8b5cf6, #ec4899)'
          }}
        >
          <FlaskConical className="text-white" size={28} />
        </div>
      </motion.div>
    </section>
  );
}
