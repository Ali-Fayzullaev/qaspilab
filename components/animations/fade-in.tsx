'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  viewport?: { once?: boolean; margin?: string };
  duration?: number;
}

export default function FadeIn({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '',
  viewport = { once: true, margin: '-50px' },
  duration = 0.6
}: FadeInProps) {
  
  // Мемоизируем варианты для предотвращения пересчета
  const variants = useMemo(() => ({
    hidden: (() => {
      const directionMap = {
        up: { y: 20, opacity: 0 },
        down: { y: -20, opacity: 0 },
        left: { x: 20, opacity: 0 },
        right: { x: -20, opacity: 0 },
      };
      return directionMap[direction];
    })(),
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.25, 0, 1] as const,
      }
    }
  }), [direction, delay, duration]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
      className={`${className} performance-layer`}
      style={{
        // GPU acceleration
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden',
        transform: 'translateZ(0)'
      }}
    >
      {children}
    </motion.div>
  );
}