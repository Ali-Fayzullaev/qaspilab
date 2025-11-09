'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

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
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
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

  // Touch события для свайпа на мобильных
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };

    const handleSwipe = () => {
      if (touchEndX < touchStartX - 50) {
        goToNext(); // Свайп влево - следующая картинка
      }
      if (touchEndX > touchStartX + 50) {
        goToPrevious(); // Свайп вправо - предыдущая картинка
      }
    };

    if (isOpen) {
      document.addEventListener('touchstart', handleTouchStart);
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
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
          className="fixed inset-0 z-[9999] flex flex-col bg-black/95 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Хедер - фиксированный сверху */}
          <div className="flex items-center justify-between p-4 bg-black/30 backdrop-blur-sm">
            <div className="flex items-center space-x-3">
              <h3 className="text-lg font-semibold text-white truncate max-w-[200px]">
                Команда Qaspilab
              </h3>
              <div className="text-sm text-white/70 bg-white/10 px-2 py-1 rounded-full">
                {currentIndex + 1} / {images.length}
              </div>
            </div>

            <motion.button
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>
          </div>

          {/* Основной контент - изображение */}
          <div className="flex-1 relative flex items-center justify-center px-4 py-2">
            
            {/* Навигационные кнопки - только на экранах больше 640px */}
            {images.length > 1 && (
              <>
                <motion.button
                  className="hidden sm:flex absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors items-center justify-center"
                  onClick={goToPrevious}
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </motion.button>

                <motion.button
                  className="hidden sm:flex absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors items-center justify-center"
                  onClick={goToNext}
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </motion.button>
              </>
            )}

            {/* Мобильные кнопки навигации - только на экранах меньше 640px */}
            {images.length > 1 && (
              <>
                <motion.button
                  className="sm:hidden absolute left-2 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-black/60 active:bg-black/80 transition-colors"
                  onClick={goToPrevious}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </motion.button>

                <motion.button
                  className="sm:hidden absolute right-2 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-black/60 active:bg-black/80 transition-colors"
                  onClick={goToNext}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </motion.button>
              </>
            )}

            {/* Изображение с анимацией */}
            <motion.div
              key={currentIndex}
              className="relative w-full h-full flex items-center justify-center"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                style={{
                  maxHeight: 'calc(100vh - 200px)', // Учитываем хедер и футер
                  maxWidth: 'calc(100vw - 32px)' // Учитываем отступы
                }}
                draggable={false}
              />

              {/* Информация об изображении - только если есть */}
              {(currentImage.title || currentImage.description) && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 rounded-b-lg">
                  {currentImage.title && (
                    <h4 className="text-white font-semibold text-lg mb-1">
                      {currentImage.title}
                    </h4>
                  )}
                  {currentImage.description && (
                    <p className="text-white/80 text-sm line-clamp-2">
                      {currentImage.description}
                    </p>
                  )}
                </div>
              )}
            </motion.div>

            {/* Индикация свайпа для мобильных */}
            <div className="sm:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/50 text-xs bg-black/30 px-3 py-1 rounded-full">
              Свайпните для навигации
            </div>
          </div>

          {/* Миниатюры - адаптивные */}
          {images.length > 1 && (
            <div className="p-4 bg-black/20 backdrop-blur-sm">
              <div className="flex justify-center space-x-2 overflow-x-auto pb-2">
                {images.map((image, index) => (
                  <motion.button
                    key={index}
                    className={`shrink-0 rounded-lg overflow-hidden transition-all duration-300 ${
                      index === currentIndex 
                        ? 'ring-2 ring-white scale-110 opacity-100' 
                        : 'opacity-60 hover:opacity-100'
                    }`}
                    style={{
                      width: '48px',
                      height: '48px',
                    }}
                    onClick={() => setCurrentIndex(index)}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}