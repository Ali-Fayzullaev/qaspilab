// components/HollywoodLabEffects.tsx
'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface HollywoodLabEffectsProps {
  theme: string | undefined;
  isInView: boolean;
  scrollProgress: number;
}

export function HollywoodLabEffectss({ theme, isInView, scrollProgress }: HollywoodLabEffectsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Smooth mouse tracking with spring physics
  const mouseX = useSpring(useMotionValue(0), { stiffness: 100, damping: 20 });
  const mouseY = useSpring(useMotionValue(0), { stiffness: 100, damping: 20 });

  // Parallax effects based on mouse and scroll
  const parallaxX = useTransform(mouseX, [-1, 1], [-20, 20]);
  const parallaxY = useTransform(mouseY, [-1, 1], [-20, 20]);
  const scrollParallax = useTransform(mouseY, [0, 1], [0, -50]);

  // Dynamic glow effects
  const pulseGlow = useTransform(mouseY, [0, 1], [0.3, 0.8]);
  const colorIntensity = useTransform(mouseX, [-1, 1], [0.5, 1]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      setMousePosition({ x, y });
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const HOLLYWOOD_EFFECTS = {
    duration: {
      epic: 2.5,
      cinematic: 1.8,
      smooth: 1.2
    },
    ease: [0.25, 0.1, 0.25, 1.1]
  };

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Cinematic Light Beams */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: HOLLYWOOD_EFFECTS.duration.epic, delay: 0.8 }}
      >
        {/* Dynamic Light Beams */}
        {[0, 45, 90, 135].map((rotation, index) => (
          <motion.div
            key={`beam-${rotation}`}
            className="absolute top-1/2 left-1/2 w-1 h-80 origin-center"
            style={{
              background: theme === 'dark' 
                ? 'linear-gradient(to bottom, transparent, rgba(6, 182, 212, 0.6), transparent)'
                : 'linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.4), transparent)',
              rotate: rotation,
              x: '-50%',
              y: '-50%',
              scaleY: pulseGlow
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scaleY: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4 + index * 0.5,
              repeat: Infinity,
              delay: index * 0.7,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* Holographic Data Particles */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: HOLLYWOOD_EFFECTS.duration.cinematic, delay: 1.2 }}
      >
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: theme === 'dark' 
                ? `radial-gradient(circle, rgba(6, 182, 212, ${0.3 + i * 0.05}), transparent)` 
                : `radial-gradient(circle, rgba(59, 130, 246, ${0.2 + i * 0.03}), transparent)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              x: parallaxX,
              y: parallaxY,
              filter: `blur(${Math.random() * 3 + 1}px)`
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* Neural Network Connections */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.6 } : {}}
        transition={{ duration: HOLLYWOOD_EFFECTS.duration.epic, delay: 1.5 }}
      >
        <svg className="w-full h-full" style={{ opacity: 0.3 }}>
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={theme === 'dark' ? '#06B6D4' : '#3B82F6'} />
              <stop offset="100%" stopColor={theme === 'dark' ? '#8B5CF6' : '#EC4899'} />
            </linearGradient>
          </defs>
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.path
              key={`neural-${i}`}
              d={`M ${Math.random() * 100} ${Math.random() * 100} 
                   C ${Math.random() * 100} ${Math.random() * 100},
                     ${Math.random() * 100} ${Math.random() * 100},
                     ${Math.random() * 100} ${Math.random() * 100}`}
              stroke="url(#neuralGradient)"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{
                duration: 3,
                delay: i * 0.3,
                ease: "easeOut"
              }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Floating Tech Elements */}
      <motion.div
        className="absolute bottom-8 left-8"
        style={{ x: parallaxX, y: parallaxY }}
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className={`p-3 rounded-2xl backdrop-blur-sm border ${
          theme === 'dark' 
            ? 'bg-blue-500/10 border-blue-500/30' 
            : 'bg-blue-400/20 border-blue-400/40'
        }`}>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            <span className={theme === 'dark' ? 'text-blue-300' : 'text-blue-600'}>
              AI Processing
            </span>
          </div>
        </div>
      </motion.div>

      {/* Scan Lines Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            ${theme === 'dark' ? 'rgba(6, 182, 212, 0.05)' : 'rgba(59, 130, 246, 0.03)'} 2px,
            ${theme === 'dark' ? 'rgba(6, 182, 212, 0.05)' : 'rgba(59, 130, 246, 0.03)'} 4px
          )`,
          opacity: 0.3
        }}
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />

      {/* Dynamic Glow Pulse */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: theme === 'dark'
            ? 'radial-gradient(ellipse at center, rgba(6, 182, 212, 0.1) 0%, transparent 70%)'
            : 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
          opacity: pulseGlow
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}