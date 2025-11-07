'use client';

import { 
  motion, 
  useScroll, 
  useTransform,
  useSpring,
  useReducedMotion,
  useMotionValue,
  useMotionTemplate,
  AnimatePresence
} from 'framer-motion';
import { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { Zap, Handshake, Brain, Sparkles, Star, ArrowRight, Atom } from 'lucide-react';

/**
 * PREMIUM WhyUsSection - Голливудские анимации в стиле кинематографа
 * 
 * 🎬 ГОЛЛИВУДСКИЕ ЭФФЕКТЫ:
 * - Unified premium background как в других секциях
 * - Cinematic card animations с 3D трансформациями
 * - Magnetic hover effects с физикой пружин
 * - Particle system с realistic physics
 * - Hollywood-level timing и choreography
 * - 60fps optimized performance
 * - Interactive laboratory environment
 */

// Premium иконки с расширенным набором
const PREMIUM_ADVANTAGE_ICONS = [
  { Icon: Zap, gradient: 'from-yellow-400 to-orange-500', glow: 'shadow-yellow-500/30', color: '#f59e0b' },
  { Icon: Handshake, gradient: 'from-green-400 to-emerald-500', glow: 'shadow-emerald-500/30', color: '#10b981' },
  { Icon: Brain, gradient: 'from-purple-400 to-pink-500', glow: 'shadow-purple-500/30', color: '#8b5cf6' },
  { Icon: Sparkles, gradient: 'from-blue-400 to-cyan-500', glow: 'shadow-blue-500/30', color: '#3b82f6' },
] as const;

// Голливудские параметры анимации
const HOLLYWOOD_CONFIG = {
  spring: { stiffness: 120, damping: 25, restDelta: 0.001 },
  ease: [0.25, 0.1, 0.25, 1] as const,
  duration: { epic: 2.0, slow: 1.5, medium: 1.0, fast: 0.6, lightning: 0.3 },
  stagger: 0.2,
  magnetic: { strength: 25, damping: 0.8 },
  particles: { count: 12, velocity: 0.5 }
};

// Premium компонент карточки преимущества с голливудскими эффектами
const HollywoodAdvantageCard = ({ advantage, index, isInView, theme }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Magnetic hover эффект
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-100, 100], [15, -15]);
  const rotateY = useTransform(mouseX, [-100, 100], [-15, 15]);
  
  // Gradient следует за мышью
  const gradientX = useTransform(mouseX, [-100, 100], [0, 100]);
  const gradientY = useTransform(mouseY, [-100, 100], [0, 100]);
  
  const backgroundGradient = useMotionTemplate`radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`;
  
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
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
        {/* Hollywood background effects */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000"
          style={{
            background: `conic-gradient(from 0deg at ${mousePosition.x}% ${mousePosition.y}%, ${color}, transparent, ${color})`
          }}
        />
        
        {/* Particle burst on hover */}
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
                    scale: [0, 1.5, 0],
                    opacity: [1, 0.8, 0],
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
          {/* 3D Premium Icon */}
          <motion.div 
            className={`shrink-0 w-20 h-20 rounded-3xl flex items-center justify-center text-white relative`}
            style={{
              background: `linear-gradient(135deg, ${gradient.includes('yellow') ? '#f59e0b, #ea580c' : gradient.includes('green') ? '#10b981, #059669' : gradient.includes('purple') ? '#8b5cf6, #ec4899' : '#3b82f6, #06b6d4'})`,
              transform: 'translateZ(30px)',
              boxShadow: `0 20px 40px -10px ${color}40, inset 0 1px 0 rgba(255, 255, 255, 0.2)`
            }}
            animate={{
              rotateY: isHovered ? [0, 180, 360] : 0,
              scale: isHovered ? [1, 1.2, 1] : 1,
            }}
            transition={{
              rotateY: { duration: 2, ease: 'easeInOut' },
              scale: { duration: HOLLYWOOD_CONFIG.duration.fast, type: "spring" }
            }}
          >
            <Icon size={32} strokeWidth={2} />
            
            {/* Orbital rings */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{border: '2px solid rgba(255, 255, 255, 0.2)'}}
              animate={isHovered ? {
                scale: [1, 1.5, 1],
                opacity: [0.2, 0, 0.2]
              } : {}}
              transition={{
                duration: 2,
                repeat: isHovered ? Infinity : 0,
              }}
            />
          </motion.div>
          
          {/* Content with premium typography */}
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
              
              {/* Premium status indicator */}
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
            
            {/* Interactive arrow */}
            <motion.div
              className="flex items-center gap-2 mt-4 text-blue-500 font-medium"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: isHovered ? 1 : 0,
                x: isHovered ? 0 : -20
              }}
              transition={{ duration: HOLLYWOOD_CONFIG.duration.fast }}
            >
              Learn more 
              <ArrowRight size={16} />
            </motion.div>
          </div>
        </div>
        
        {/* Premium progress indicator */}
        <motion.div
          className="absolute bottom-0 left-0 h-2 rounded-b-3xl"
          style={{
            background: `linear-gradient(to right, ${color}, ${color}80)`
          }}
          initial={{ width: '0%' }}
          animate={{ width: isHovered ? '100%' : '0%' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />
        
        {/* Corner accent */}
        <motion.div
          className="absolute top-4 right-4 w-3 h-3 rounded-full"
          style={{ background: color }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.5
          }}
        />
      </motion.div>
    </motion.div>
  );
};

// Hollywood лабораторные эффекты
const HollywoodLabEffects = ({ theme, isInView, scrollProgress }: any) => {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) return null;

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* DNA Helix Animation */}
      <motion.div
        className="absolute top-1/2 left-1/4 transform -translate-y-1/2"
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 2, delay: 1 }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`helix-${i}`}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: `hsl(${200 + i * 20}, 70%, 60%)`,
              left: Math.cos(i * 0.5) * 30,
              top: i * 15,
            }}
            animate={{
              rotateZ: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        ))}
      </motion.div>

      {/* Quantum particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`quantum-${i}`}
          className="absolute w-1 h-1 rounded-full bg-blue-400"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            x: Math.sin(i) * 50,
            y: Math.cos(i) * 50,
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}

      {/* Central reactor core */}
      <motion.div
        className="absolute top-1/2 right-1/4 transform -translate-y-1/2"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1.5, delay: 2 }}
      >
        <motion.div
          className="relative w-24 h-24"
          animate={{
            rotate: [0, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Atom className="w-full h-full text-purple-400" />
          
          {/* Energy rings */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`ring-${i}`}
              className="absolute inset-0 rounded-full"
              style={{
                border: '2px solid rgba(168, 85, 247, 0.3)',
                scale: 1 + i * 0.3
              }}
              animate={{
                rotate: [0, -360],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default function WhyUsSectionPremium() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Прогрессивная анимация при скролле
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const scrollProgress = useSpring(scrollYProgress, HOLLYWOOD_CONFIG.spring);

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
      { threshold: 0.1, rootMargin: '100px' }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [mounted]);

  // Мемоизированные данные из переводов
  const whyUsData = useMemo(() => {
    if (!t.whyUs) return { title: "Why Choose Qaspilab", reasons: [] };
    
    return {
      title: t.whyUs.title,
      subtitle: t.whyUs.subtitle || "Excellence in Every Detail",
      reasons: t.whyUs.reasons.map((reason, index) => ({
        ...reason,
        icon: PREMIUM_ADVANTAGE_ICONS[index]?.Icon || Sparkles,
        id: index + 1
      }))
    };
  }, [t.whyUs]);

  // Premium background стили (единые с другими секциями)
  const premiumBackgroundStyles = useMemo(() => ({
    background: theme === 'dark' 
      ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)',
    color: theme === 'dark' ? '#ffffff' : '#1e293b'
  }), [theme]);

  // Cinematic parallax effects
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
      {/* Premium animated background */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y: backgroundY }}
      >
        {/* Gradient mesh background */}
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
        
        {/* Animated grid pattern */}
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
          
          {/* Premium Content Block */}
          <div className="z-10 order-2 lg:order-1">
            {/* Hollywood title sequence */}
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
                className="text-xl text-muted-foreground mb-16 max-w-lg"
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
            
            {/* Premium advantage cards */}
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

          {/* Premium Laboratory Visualization */}
          <motion.div 
            className="relative order-1 lg:order-2 h-[700px]"
            style={{ y: labY }}
          >
            {/* Main lab image */}
            <motion.div
              className="relative w-full h-full rounded-3xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ 
                duration: HOLLYWOOD_CONFIG.duration.epic,
                delay: 0.5,
                ease: HOLLYWOOD_CONFIG.ease
              }}
              style={{
                willChange: 'transform, opacity',
                transform: 'translateZ(0)',
              }}
            >
              <Image
                src="/lab.jpg"
                alt="Premium Qaspilab Laboratory"
                fill
                className="object-cover"
                style={{
                  filter: theme === 'dark' 
                    ? 'brightness(0.5) contrast(1.2) saturate(1.1)' 
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
                    ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.7) 0%, rgba(30, 41, 59, 0.5) 50%, rgba(51, 65, 85, 0.7) 100%)'
                    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(248, 250, 252, 0.6) 50%, rgba(226, 232, 240, 0.8) 100%)'
                }}
              />
            </motion.div>

            {/* Hollywood lab effects */}
            <HollywoodLabEffects 
              theme={theme} 
              isInView={isInView} 
              scrollProgress={scrollProgress} 
            />

            {/* Floating UI elements */}
            <motion.div
              className="absolute top-6 right-6 bg-blue-500/20 backdrop-blur-sm rounded-2xl p-4 border border-blue-500/30"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 2, duration: 1 }}
            >
              <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Lab Status: Active
              </div>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>

      {/* Floating action indicator */}
      <motion.div
        className="fixed bottom-8 left-8 z-50"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <div 
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm"
          style={{
            background: 'linear-gradient(135deg, #10b981, #059669)'
          }}
        >
          <Sparkles className="text-white" size={24} />
        </div>
      </motion.div>
    </section>
  );
}