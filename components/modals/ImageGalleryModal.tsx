'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { X, ChevronLeft, ChevronRight, Download, Maximize2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: Array<{
    src: string;
    alt: string;
    title?: string;
    description?: string;
  }>;
  initialIndex?: number;
}

export default function ImageGalleryModal({ 
  isOpen, 
  onClose, 
  images, 
  initialIndex = 0 
}: ImageGalleryModalProps) {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [mounted, setMounted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  // Блокировка скролла при открытом модале
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Навигация клавишами
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const currentImage = images[currentIndex];

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-100 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Фоновый оверлей */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: theme === 'dark' 
                ? 'rgba(0, 0, 0, 0.95)' 
                : 'rgba(0, 0, 0, 0.90)',
              backdropFilter: 'blur(20px)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Контент модала */}
          <motion.div
            className="relative w-full h-full max-w-7xl mx-auto p-4 flex flex-col"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            
            {/* Хедер */}
            <div className="flex items-center justify-between mb-4 z-10">
              <div className="flex items-center space-x-4">
                <motion.h3 
                  className="text-2xl font-bold"
                  style={{
                    backgroundImage: theme === 'dark'
                      ? 'linear-gradient(135deg, #00d4ff 0%, #8b5cf6 50%, #a855f7 100%)'
                      : 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 50%, #9333ea 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: theme === 'dark' ? '#00d4ff' : '#8b5cf6'
                  }}
                >
                  Команда Qaspilab
                </motion.h3>
                <div className="text-sm text-white/70">
                  {currentIndex + 1} из {images.length}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                {/* Кнопка полноэкранного режима */}
                <motion.button
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Maximize2 className="w-5 h-5 text-white" />
                </motion.button>

                {/* Кнопка скачивания */}
                <motion.button
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = currentImage.src;
                    link.download = currentImage.alt || 'qaspilab-team';
                    link.click();
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Download className="w-5 h-5 text-white" />
                </motion.button>

                {/* Кнопка закрытия */}
                <motion.button
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                  onClick={onClose}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5 text-white" />
                </motion.button>
              </div>
            </div>

            {/* Основное изображение */}
            <div className="flex-1 flex items-center justify-center relative">
              
              {/* Навигационные кнопки */}
              {images.length > 1 && (
                <>
                  <motion.button
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    onClick={goToPrevious}
                    whileHover={{ scale: 1.1, x: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </motion.button>

                  <motion.button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    onClick={goToNext}
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </motion.button>
                </>
              )}

              {/* Изображение */}
              <motion.div
                key={currentIndex}
                className={`relative ${isFullscreen ? 'w-full h-full' : 'max-w-4xl max-h-[70vh]'} rounded-2xl overflow-hidden shadow-2xl`}
                initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: -90 }}
                transition={{ duration: 0.4 }}
                style={{
                  border: `2px solid ${theme === 'dark' ? 'rgba(0,212,255,0.3)' : 'rgba(139,92,246,0.3)'}`,
                  boxShadow: theme === 'dark'
                    ? '0 25px 50px rgba(0,212,255,0.2), 0 0 40px rgba(139,92,246,0.1)'
                    : '0 25px 50px rgba(139,92,246,0.2), 0 0 40px rgba(59,130,246,0.1)'
                }}
              >
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="w-full h-full object-cover"
                  style={{
                    maxHeight: isFullscreen ? '100vh' : '70vh',
                    objectFit: 'cover'
                  }}
                />

                {/* Градиентный оверлей для текста */}
                {currentImage.title && (
                  <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent p-6">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {currentImage.title}
                    </h4>
                    {currentImage.description && (
                      <p className="text-white/80 text-sm">
                        {currentImage.description}
                      </p>
                    )}
                  </div>
                )}
              </motion.div>
            </div>

            {/* Миниатюры */}
            {images.length > 1 && (
              <motion.div 
                className="flex justify-center space-x-2 mt-6 overflow-x-auto pb-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {images.map((image, index) => (
                  <motion.button
                    key={index}
                    className={`shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                      index === currentIndex 
                        ? 'ring-2 ring-white scale-110' 
                        : 'opacity-60 hover:opacity-100'
                    }`}
                    onClick={() => setCurrentIndex(index)}
                    whileHover={{ scale: index === currentIndex ? 1.1 : 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Декоративные элементы */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: theme === 'dark' 
                    ? 'linear-gradient(45deg, #00d4ff, #8b5cf6)' 
                    : 'linear-gradient(45deg, #8b5cf6, #3b82f6)',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.2, 0.8, 0.2],
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}