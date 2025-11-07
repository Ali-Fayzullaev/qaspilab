'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
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

  // Состояние для предотвращения hydration mismatch
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Статические данные статистики для предотвращения hydration mismatch
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

  // Показать простую заглушку до монтирования
  if (!mounted) {
    return (
      <section className="relative py-20 overflow-hidden bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="w-8 h-8 mx-auto mb-4 animate-spin rounded-full border-blue-400" 
                 style={{ 
                   borderWidth: '2px',
                   borderTopColor: 'transparent'
                 }}
            ></div>
            <p className="text-slate-400">Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 overflow-hidden"
      style={{
        background: theme === 'dark' 
          ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
          : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)'
      }}
    >
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${theme === 'dark' ? '#00d4ff' : '#3b82f6'} 1px, transparent 0)`,
            backgroundRepeat: 'repeat',
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
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            {t.globalReach?.title || 'Global Reach from Kazakhstan'}
          </h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
          }`}>
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
              className={`text-center p-6 rounded-2xl backdrop-blur-sm ${
                theme === 'dark' 
                  ? 'bg-slate-800/50 border border-slate-700/50' 
                  : 'bg-white/50 border border-slate-200/50'
              }`}
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
                <div className={`text-sm font-medium ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                }`}>
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
          className="relative rounded-3xl p-8 backdrop-blur-sm"
          style={{
            background: theme === 'dark'
              ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.8) 100%)'
              : 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(248, 250, 252, 0.8) 100%)',
            border: `1px solid ${theme === 'dark' ? 'rgba(71, 85, 105, 0.5)' : 'rgba(226, 232, 240, 0.5)'}`
          }}
        >
          <div className="text-center">
            <Globe 
              size={120} 
              className={`mx-auto mb-6 ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`} 
            />
            
            <h3 className={`text-2xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              {t.globalReach?.subtitle || 'Worldwide Innovation Network'}
            </h3>
            
            <p className={`text-lg mb-8 ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Connected with clients and partners across continents, delivering excellence from Kazakhstan to the world.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl font-semibold transition-all duration-300 text-white"
              style={{
                background: theme === 'dark'
                  ? 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)'
                  : 'linear-gradient(90deg, #2563eb 0%, #7c3aed 100%)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = theme === 'dark'
                  ? '0 25px 50px -12px rgba(59, 130, 246, 0.25)'
                  : '0 25px 50px -12px rgba(37, 99, 235, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
              }}
            >
              Explore Our Global Network
            </motion.button>
          </div>

          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 rounded-full ${
                theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'
              }`}
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