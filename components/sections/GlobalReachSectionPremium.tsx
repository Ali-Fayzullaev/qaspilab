'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from 'next-themes';
import { Globe, Users, MapPin, TrendingUp } from 'lucide-react';

export default function GlobalReachSectionPremium() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { 
    once: true, 
    margin: "-100px" 
  });

  const stats = [
    {
      icon: Globe,
      value: "100+",
      label: t.globalReach?.stats?.projects || "Global Projects",
      color: theme === 'dark' ? '#00d4ff' : '#3b82f6'
    },
    {
      icon: Users,
      value: "50+", 
      label: t.globalReach?.stats?.clients || "Happy Clients",
      color: theme === 'dark' ? '#8b5cf6' : '#8b5cf6'
    },
    {
      icon: MapPin,
      value: "25+",
      label: t.globalReach?.stats?.countries || "Countries", 
      color: theme === 'dark' ? '#10b981' : '#10b981'
    },
    {
      icon: TrendingUp,
      value: "99%",
      label: t.globalReach?.stats?.experience || "Experience",
      color: theme === 'dark' ? '#f59e0b' : '#f59e0b'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #00d4ff 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {t.globalReach?.title || 'Global Reach from Kazakhstan'}
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-300">
            {t.globalReach?.description || 'We create world-class solutions from the heart of Central Asia, reaching clients across the globe with innovative technology and exceptional quality.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="text-center p-6 rounded-2xl backdrop-blur-sm bg-slate-800/50 border border-slate-700/50"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="mb-4 flex justify-center"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: stat.color + '20' }}
                >
                  <stat.icon 
                    size={32} 
                    style={{ color: stat.color }} 
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <div 
                  className="text-3xl font-bold mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-slate-300">
                  {stat.label}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative rounded-3xl p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 backdrop-blur-sm"
        >
          <div className="text-center">
            <Globe 
              size={120} 
              className="mx-auto mb-6 text-blue-400" 
            />
            
            <h3 className="text-2xl font-bold mb-4 text-white">
              {t.globalReach?.subtitle || 'Worldwide Innovation Network'}
            </h3>
            
            <p className="text-lg mb-8 text-slate-300">
              Connected with clients and partners across continents, delivering excellence from Kazakhstan to the world.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl font-semibold transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25"
            >
              Explore Our Global Network
            </motion.button>
          </div>

          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: '#00d4ff',
                left: (20 + i * 12) + '%',
                top: (30 + (i % 2) * 40) + '%'
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}