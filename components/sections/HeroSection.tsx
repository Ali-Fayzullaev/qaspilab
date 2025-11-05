'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const { t } = useLanguage();
  const title = "Qaspilab";
  
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-4 hero-glow">
            {title}
          </h1>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-bg"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEzOSwgOTIsIDI0NiwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+CjwvcGF0dGVybj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPgo8L3N2Zz4K')] opacity-30"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl px-4">
        
        {/* Main Title */}
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold mb-4 hero-glow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {title.split('').map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {t.hero?.subtitle || "Innovation Laboratory - Transforming ideas into cutting-edge solutions"}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            size="lg"
            className="bg-brand-purple hover:bg-brand-purple/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-glow-purple"
          >
            {t.hero?.cta || "Explore Innovation"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-brand-neon rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-brand-purple rounded-full"
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </section>
  );
}