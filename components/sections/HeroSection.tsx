'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen bg-white relative overflow-hidden">
      {/* Фон и декоративные элементы */}
      <div className="absolute inset-0">
        {/* Луч света - анимированный */}
        <motion.div
          className="absolute right-10 top-1/4 w-px h-64 bg-linear-to-b from-transparent via-neon/30 to-transparent"
          initial={{ opacity: 0, height: 0, y: 100 }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            height: [0, 256, 256, 0],
            y: [100, 0, -50, -100]
          }}
          transition={{ 
            duration: 4,
            delay: 1.5,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut"
          }}
        />
        
        {/* Дополнительные лучи света */}
        <motion.div
          className="absolute left-20 top-1/2 w-px h-32 bg-linear-to-b from-transparent via-purple/20 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.6, 0],
            scaleY: [0, 1, 0]
          }}
          transition={{ 
            duration: 3,
            delay: 3,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "easeInOut"
          }}
        />
        
        {/* Градиентные пятна */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple/5 rounded-full blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [0.8, 1.1, 0.8]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon/5 rounded-full blur-3xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            scale: [0.9, 1.2, 0.9]
          }}
          transition={{
            duration: 8,
            delay: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Основной контент */}
      <div className="container relative mx-auto px-6 h-screen flex items-center justify-center">
        <div className="text-center max-w-4xl">
          {/* Заголовок с анимацией пульсации */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-graphite mb-6 hero-glow"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              animation: "heroGlow 2s ease-in-out infinite alternate"
            }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Q
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              a
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              s
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              p
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              i
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              l
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              a
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              b
            </motion.span>
          </motion.h1>

          {/* Подзаголовок */}
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8 font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Слоган */}
          <motion.p
            className="text-lg text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
          >
            {t.hero.slogan}
          </motion.p>

          {/* Кнопка CTA с hover анимацией */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.9, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="bg-graphite hover:bg-graphite/90 text-white px-8 py-6 text-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              {t.hero.cta}
              <motion.div
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.div>
            </Button>
          </motion.div>

          {/* Дополнительный декоративный элемент - пульсирующая точка */}
          <motion.div
            className="absolute top-1/3 right-1/3 w-2 h-2 bg-neon rounded-full"
            animate={{
              opacity: [0, 1, 0],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3,
              delay: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-purple rounded-full"
            animate={{
              opacity: [0, 0.8, 0],
              scale: [1, 2, 1]
            }}
            transition={{
              duration: 4,
              delay: 3.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <motion.div
          className="w-px h-16 bg-linear-to-b from-gray-300 to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="w-2 h-2 bg-gray-400 rounded-full mx-auto mt-2"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </section>
  );
}