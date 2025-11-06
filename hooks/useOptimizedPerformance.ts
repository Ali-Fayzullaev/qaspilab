import { useCallback, useMemo, useRef, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

/**
 * Хук для оптимизированного управления анимациями
 * Предотвращает излишние рендеры и оптимизирует производительность
 */
export function useOptimizedAnimation() {
  const rafRef = useRef<number | null>(null);
  
  const startAnimation = useCallback((callback: () => void) => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    
    rafRef.current = requestAnimationFrame(callback);
  }, []);

  const stopAnimation = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return { startAnimation, stopAnimation };
}

/**
 * Хук для мемоизированных стилей темы
 * Предотвращает пересоздание объектов стилей при каждом рендере
 */
export function useThemeStyles() {
  const { theme } = useTheme();

  const gradientStyles = useMemo(() => ({
    hero: {
      background: theme === 'dark' 
        ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
        : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)',
      color: theme === 'dark' ? '#ffffff' : '#1e293b'
    },
    orb1: theme === 'dark' ? 'rgba(99, 102, 241, 0.1)' : 'rgba(59, 130, 246, 0.08)',
    orb2: theme === 'dark' ? 'rgba(6, 182, 212, 0.1)' : 'rgba(34, 197, 94, 0.08)',
    lightBeam: {
      background: theme === 'dark'
        ? 'linear-gradient(to top, transparent, rgba(6, 182, 212, 0.8), transparent)'
        : 'linear-gradient(to top, transparent, rgba(59, 130, 246, 0.6), transparent)',
      boxShadow: theme === 'dark'
        ? '0 0 20px rgba(6, 182, 212, 0.5)'
        : '0 0 20px rgba(59, 130, 246, 0.3)'
    },
    button: {
      background: theme === 'dark'
        ? 'linear-gradient(135deg, #06B6D4, #8B5CF6)'
        : 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
      color: '#ffffff'
    }
  }), [theme]);

  const textStyles = useMemo(() => ({
    title: {
      color: theme === 'dark' ? '#FFFFFF' : '#1E293B',
      textShadow: theme === 'dark'
        ? '0 0 20px rgba(6, 182, 212, 0.3)'
        : '0 0 20px rgba(59, 130, 246, 0.2)'
    },
    subtitle: {
      color: theme === 'dark' 
        ? 'rgba(226, 232, 240, 0.8)' 
        : 'rgba(30, 41, 59, 0.7)'
    },
    description: {
      color: theme === 'dark' 
        ? 'rgba(148, 163, 184, 0.8)' 
        : 'rgba(71, 85, 105, 0.8)'
    }
  }), [theme]);

  return { gradientStyles, textStyles, theme };
}

/**
 * Хук для оптимизированной обработки событий
 * Использует debounce для предотвращения излишних вызовов
 */
export function useDebounce<T extends (...args: any[]) => void>(
  callback: T,
  delay: number
): T {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  return useCallback(((...args: Parameters<T>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }) as T, [callback, delay]);
}

/**
 * Хук для управления видимостью элементов (Intersection Observer)
 * Оптимизирован для анимаций при появлении в viewport
 */
export function useInView(options?: IntersectionObserverInit) {
  const elementRef = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  const isInView = useRef(false);
  const callbackRef = useRef<((inView: boolean) => void) | null>(null);

  const observe = useCallback((callback: (inView: boolean) => void) => {
    callbackRef.current = callback;
    
    if (!elementRef.current || !window.IntersectionObserver) {
      callback(true); // Fallback для старых браузеров
      return;
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        if (inView !== isInView.current) {
          isInView.current = inView;
          callback(inView);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px',
        ...options
      }
    );

    observerRef.current.observe(elementRef.current);
  }, [options]);

  const unobserve = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
  }, []);

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return { elementRef, observe, unobserve, isInView: isInView.current };
}

/**
 * Хук для оптимизированного управления состоянием модальных окон
 */
export function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  
  const openModal = useCallback(() => {
    setIsOpen(true);
    // Предотвращение скролла body при открытии модального окна
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    // Восстановление скролла body
    document.body.style.overflow = 'unset';
  }, []);

  useEffect(() => {
    // Очистка при размонтировании
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Обработка ESC для закрытия модального окна
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, closeModal]);

  return { isOpen, openModal, closeModal };
}

/**
 * Хук для предварительной загрузки критических ресурсов
 */
export function usePreloadImages(imagePaths: string[]) {
  useEffect(() => {
    const preloadImages = imagePaths.map(path => {
      const img = new Image();
      img.src = path;
      return img;
    });

    return () => {
      // Очистка при размонтировании
      preloadImages.forEach(img => {
        img.src = '';
      });
    };
  }, [imagePaths]);
}

