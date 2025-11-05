'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin, ExternalLink, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Анимации
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hello@qaspilab.com', label: 'Email' },
  ];

  const quickLinks = [
    { label: t.common.home, href: '#' },
    { label: t.common.about, href: '#about' },
    { label: t.common.services, href: '#services' },
    { label: t.common.contact, href: '#contact' },
  ];

  if (!mounted) {
    return (
      <footer className="border-t bg-background/95 backdrop-blur py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground">
            © 2024 Qaspilab. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="relative overflow-hidden">
      {/* Градиентный фон */}
      <div 
        className="absolute inset-0"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
            : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)'
        }}
      />
      
      {/* Анимированные частицы фона */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-30"
            style={{
              background: theme === 'dark' 
                ? 'linear-gradient(45deg, #00d4ff, #8b5cf6)' 
                : 'linear-gradient(45deg, #8b5cf6, #3b82f6)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      {/* Основной контент */}
      <div className="relative z-10">
        <motion.div
          className="container mx-auto px-6 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
            
            {/* Логотип и описание */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <Link href="/" className="inline-block">
                <motion.h3 
                  className="text-3xl font-bold mb-4"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Sparkles className="inline w-8 h-8 mr-2" style={{ color: theme === 'dark' ? '#00d4ff' : '#8b5cf6' }} />
                  Qaspilab
                </motion.h3>
              </Link>
              
              <p className="text-lg text-muted-foreground mb-2 font-medium">
                {t.footer.slogan}
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t.footer.description}
              </p>
              
              {/* Контактная информация */}
              <div className="space-y-3">
                <motion.div 
                  className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="w-5 h-5 mr-3" style={{ color: theme === 'dark' ? '#00d4ff' : '#8b5cf6' }} />
                  <span>{t.footer.location}</span>
                </motion.div>
                <motion.a 
                  href="mailto:hello@qaspilab.com"
                  className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-5 h-5 mr-3" style={{ color: theme === 'dark' ? '#8b5cf6' : '#3b82f6' }} />
                  <span>{t.footer.email}</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Быстрые ссылки */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-6 text-foreground">
                {t.footer.quickLinks}
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <motion.li key={index}>
                    <Link 
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors flex items-center group"
                    >
                      <motion.span
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.label}
                      </motion.span>
                      <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Социальные сети */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-6 text-foreground">
                {t.footer.connect}
              </h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="group relative"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:shadow-lg"
                        style={{
                          background: theme === 'dark'
                            ? 'rgba(139, 92, 246, 0.1)'
                            : 'rgba(139, 92, 246, 0.1)',
                          border: theme === 'dark'
                            ? '1px solid rgba(139, 92, 246, 0.2)'
                            : '1px solid rgba(139, 92, 246, 0.2)'
                        }}
                      >
                        <IconComponent 
                          className="w-5 h-5 transition-colors duration-300"
                          style={{
                            color: theme === 'dark' ? '#8b5cf6' : '#6366f1'
                          }}
                        />
                      </div>
                      
                      {/* Tooltip */}
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-foreground text-background text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        {social.label}
                      </div>
                    </motion.a>
                  );
                })}
              </div>
              
              {/* Дополнительный призыв к действию */}
              <motion.div 
                className="mt-8 p-4 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm"
                whileHover={{ 
                  borderColor: theme === 'dark' ? '#8b5cf6' : '#6366f1',
                  backgroundColor: theme === 'dark' ? 'rgba(139, 92, 246, 0.05)' : 'rgba(99, 102, 241, 0.05)'
                }}
              >
                <p className="text-sm text-muted-foreground mb-2">
                  Готовы к сотрудничеству?
                </p>
                <Link 
                  href="#contact"
                  className="text-sm font-medium"
                  style={{ color: theme === 'dark' ? '#00d4ff' : '#8b5cf6' }}
                >
                  Обсудить проект →
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Разделитель */}
          <motion.div 
            variants={itemVariants}
            className="w-full h-px bg-linear-to-r from-transparent via-border to-transparent mb-8"
          />

          {/* Нижняя часть */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <div className="text-sm text-muted-foreground text-center md:text-left">
              {t.footer.copyright}
            </div>
            
            <motion.div 
              className="text-sm font-medium"
              style={{ 
                color: theme === 'dark' ? '#8b5cf6' : '#6366f1'
              }}
              whileHover={{ 
                scale: 1.05,
                textShadow: theme === 'dark' ? '0 0 10px #8b5cf6' : '0 0 10px #6366f1'
              }}
            >
              {t.footer.madeWith}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}