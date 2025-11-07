'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { Globe, Users, MapPin, TrendingUp } from 'lucide-react';

export default function GlobalReachSectionPremium() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { 
    once: true, 
    margin: "0px" 
  });

  // Статические данные статистики
  const stats = [
    {
      icon: Globe,
      value: "100+",
      label: t.globalReach?.stats?.projects || "Global Projects",
      colorClass: "text-blue-400",
      bgClass: "bg-blue-400/20"
    },
    {
      icon: Users,
      value: "50+", 
      label: t.globalReach?.stats?.clients || "Happy Clients",
      colorClass: "text-purple-400",
      bgClass: "bg-purple-400/20"
    },
    {
      icon: MapPin,
      value: "25+",
      label: t.globalReach?.stats?.countries || "Countries", 
      colorClass: "text-green-400",
      bgClass: "bg-green-400/20"
    },
    {
      icon: TrendingUp,
      value: "99%",
      label: t.globalReach?.stats?.experience || "Experience",
      colorClass: "text-amber-400",
      bgClass: "bg-amber-400/20"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 sm:py-20 overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-700 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800"
    >
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59,130,246,0.35) 1px, transparent 0)',
            backgroundRepeat: 'repeat',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white dark:text-white" suppressHydrationWarning>
            {t.globalReach?.title || 'Global Reach from Kazakhstan'}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto text-slate-300 dark:text-slate-300" suppressHydrationWarning>
            {t.globalReach?.description || 'We create world-class solutions from the heart of Central Asia, reaching clients across the globe with innovative technology and exceptional quality.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm bg-slate-800/50 border border-slate-700/50 dark:bg-slate-800/50 dark:border-slate-700/50"
              suppressHydrationWarning
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="mb-4 flex justify-center"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${stat.bgClass}`}>
                  <stat.icon 
                    size={32} 
                    className={stat.colorClass}
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <div className={`text-3xl font-bold mb-2 ${stat.colorClass}`}>
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-slate-300 dark:text-slate-300" suppressHydrationWarning>
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
          className="relative rounded-3xl p-8 backdrop-blur-sm bg-linear-to-br from-slate-800/80 via-slate-900/80 to-slate-950/80 border border-slate-600/50"
        >
          <div className="text-center">
            <Globe 
              size={120} 
              className="mx-auto mb-6 text-blue-400"
            />
            
            <h3 className="text-2xl font-bold mb-4 text-white dark:text-white" suppressHydrationWarning>
              {t.globalReach?.subtitle || 'Worldwide Innovation Network'}
            </h3>
            
            <p className="text-lg mb-8 text-slate-300 dark:text-slate-300" suppressHydrationWarning>
              Connected with clients and partners across continents, delivering excellence from Kazakhstan to the world.
            </p>
          <a href="#contact">

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 25px 50px -12px rgba(59,130,246,0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl font-semibold transition-all duration-300 text-white bg-linear-to-r from-blue-500 via-indigo-500 to-purple-600 shadow-[0_4px_6px_-1px_rgba(15,23,42,0.4)]"
            >
              {t.workflow?.exploreGlobalNetwork}
            </motion.button>
          </a>
          </div>

          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-blue-400/80"
              style={{
                left: `${20 + i * 12}%`,
                top: `${30 + (i % 2) * 40}%`
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