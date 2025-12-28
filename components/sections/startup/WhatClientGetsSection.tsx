'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from 'next-themes';
import { Package, CheckCircle, Users, BarChart, TrendingUp } from 'lucide-react';

export default function WhatClientGetsSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true,
    amount: 0.2 
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <section ref={sectionRef} className="h-96 bg-background" />;
  }

  const icons = [Package, CheckCircle, Users, BarChart, TrendingUp];

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1] as const
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 sm:py-32"
      style={{
        background: theme === 'dark' 
          ? 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)'
          : 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
      }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] as const }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6">
            {t.startupLaunch.whatClientGets.title}
          </h2>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerAnimation}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.startupLaunch.whatClientGets.deliverables.map((deliverable, index) => {
              const Icon = icons[index];
              
              return (
                <motion.div
                  key={index}
                  className="group"
                  variants={itemAnimation}
                >
                  <div 
                    className="bg-card/50 backdrop-blur-sm border rounded-2xl p-6 h-full transition-all duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden"
                    style={{
                      borderColor: theme === 'dark' 
                        ? 'rgba(59, 130, 246, 0.2)' 
                        : 'rgba(29, 78, 216, 0.2)',
                      boxShadow: theme === 'dark' 
                        ? '0 10px 30px rgba(59, 130, 246, 0.1)' 
                        : '0 10px 30px rgba(29, 78, 216, 0.1)'
                    }}
                  >
                    {/* Иконка */}
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                      style={{
                        background: theme === 'dark' 
                          ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' 
                          : 'linear-gradient(135deg, #1d4ed8, #6d28d9)',
                      }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    {/* Текст */}
                    <h3 className="text-lg font-bold text-foreground">
                      {deliverable}
                    </h3>
                    
                    {/* Декоративный градиент */}
                    <div 
                      className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle, ${
                          theme === 'dark' ? '#3b82f6' : '#1d4ed8'
                        } 0%, transparent 70%)`
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}