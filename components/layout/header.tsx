"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Languages, Menu, X, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/translations";

const locales = [
  { code: "en" as Locale, name: "English", flag: "🇺🇸" },
  { code: "ru" as Locale, name: "Русский", flag: "🇷🇺" },
  { code: "kk" as Locale, name: "Қазақша", flag: "🇰🇿" },
];

export default function Header() {
  const { t, locale, setLocale } = useLanguage();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const { scrollY } = useScroll();

  // Эффект размытия при скролле
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 0.85]);
  const headerBlur = useTransform(scrollY, [0, 100], [8, 16]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Закрытие выпадающего списка при клике вне его
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (languageDropdownOpen && !target.closest('.language-dropdown')) {
        setLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [languageDropdownOpen]);

  // Навигационные ссылки
  const navLinks = [
    { href: "#", label: t.common.home, icon: null },
    { href: "#about", label: t.common.about, icon: null },
    { href: "#services", label: t.common.services, icon: null },
    { href: "#contact", label: t.common.contact, icon: null },
  ];
  
  // Добавьте этот эффект
useEffect(() => {
  if (mobileMenuOpen) {
    // Прокручиваем наверх при открытии меню
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }
  
  return () => {
    document.body.style.overflow = 'unset';
  };
}, [mobileMenuOpen]);

  // Плавная прокрутка к секции
  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const headerHeight = 80; // Высота хедера
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - headerHeight,
          behavior: "smooth",
        });
      }
    }
    setMobileMenuOpen(false);
  };

  if (!mounted) {
    return (
      <header className="border-b bg-background/95 backdrop-blur sticky top-0 z-50 h-20">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="text-2xl font-bold">Qaspilab</div>
        </div>
      </header>
    );
  }

  return (
    <>
      <motion.header
        className="border-b sticky top-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: `rgba(${
            theme === "dark" ? "15, 23, 42" : "255, 255, 255"
          }, ${headerOpacity.get()})`,
          backdropFilter: `blur(${headerBlur.get()}px)`,
          borderBottom: `1px solid rgba(${
            theme === "dark" ? "71, 85, 105" : "226, 232, 240"
          }, 0.2)`,
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          {/* Логотип */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#");
              }}
              className="flex items-center group"
            >
              <motion.div
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Sparkles
                  className="w-8 h-8 mr-3"
                  style={{
                    color: theme === "dark" ? "#00d4ff" : "#8b5cf6",
                    filter: `drop-shadow(0 0 8px ${
                      theme === "dark" ? "#00d4ff40" : "#8b5cf640"
                    })`,
                  }}
                />
              </motion.div>
              <motion.h1
                className="text-3xl font-bold"
                style={{
                  backgroundImage:
                    theme === "dark"
                      ? "linear-gradient(135deg, #00d4ff 0%, #8b5cf6 50%, #a855f7 100%)"
                      : "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 50%, #9333ea 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: theme === "dark" ? "#00d4ff" : "#8b5cf6",
                }}
                whileHover={{
                  scale: 1.05,
                  textShadow:
                    theme === "dark" ? "0 0 20px #00d4ff" : "0 0 20px #8b5cf6",
                }}
              >
                Qaspilab
              </motion.h1>
            </Link>
          </motion.div>

          {/* Десктопная навигация */}
          <motion.nav
            className="hidden lg:flex items-center space-x-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {navLinks.map((link, index) => (
              <motion.button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="relative text-foreground/80 hover:text-foreground transition-colors duration-300 font-medium group"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}

                {/* Анимированное подчеркивание */}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 rounded-full"
                  style={{
                    backgroundColor: theme === "dark" ? "#00d4ff" : "#8b5cf6",
                  }}
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />

                {/* Свечение при hover */}
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      theme === "dark"
                        ? "radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)"
                        : "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
                    filter: "blur(8px)",
                  }}
                />
              </motion.button>
            ))}
          </motion.nav>

          {/* Правая часть */}
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* Переключатель темы с анимацией */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ThemeToggle />
            </motion.div>

            {/* Шикарный языковой выпадающий список */}
            <div className="relative language-dropdown">
              <motion.button
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-background/50 border border-border/50 backdrop-blur-sm hover:bg-background/70 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">{locales.find(l => l.code === locale)?.flag}</span>
                <span className="hidden sm:block text-sm font-medium">{locales.find(l => l.code === locale)?.name}</span>
                <motion.svg
                  className="w-4 h-4 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: languageDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.button>

              {/* Выпадающий список */}
              <AnimatePresence>
                {languageDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-48 bg-background/95 backdrop-blur-xl rounded-xl border border-border/50 shadow-xl overflow-hidden z-50 ring-1 ring-black/5 dark:ring-white/10"
                  >
                    {locales.map((localeOption, index) => (
                      <motion.button
                        key={localeOption.code}
                        onClick={() => {
                          setLocale(localeOption.code);
                          setLanguageDropdownOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-accent/50 transition-colors duration-200 ${
                          locale === localeOption.code ? 'bg-accent/30 text-accent-foreground' : ''
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ x: 4 }}
                      >
                        <span className="text-xl">{localeOption.flag}</span>
                        <div className="flex-1">
                          <div className="text-sm font-medium">{localeOption.name}</div>
                          <div className="text-xs text-muted-foreground">{localeOption.code.toUpperCase()}</div>
                        </div>
                        {locale === localeOption.code && (
                          <motion.div
                            className="w-2 h-2 rounded-full bg-primary"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          />
                        )}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Мобильное меню - кнопка */}
            <motion.button
              className="lg:hidden p-2 rounded-xl bg-background/50 border border-border/50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </motion.header>

      {/* Overlay для мобильного меню */}
      <motion.div
        className="lg:hidden fixed inset-0 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          pointerEvents: mobileMenuOpen ? "auto" : "none",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(4px)",
        }}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Offcanvas мобильное меню - ИЗМЕНЕНО НА fixed */}
      <motion.div
        className="lg:hidden fixed top-0 left-0 h-screen w-80 z-50 overflow-hidden" // fixed вместо sticky
        initial={{ x: -320 }}
        animate={{ x: mobileMenuOpen ? 0 : -320 }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        style={{
          background:
            theme === "dark"
              ? "linear-gradient(135deg, rgba(15,23,42,0.98) 0%, rgba(30,41,59,0.95) 50%, rgba(51,65,85,0.98) 100%)"
              : "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.95) 50%, rgba(241,245,249,0.98) 100%)",
          backdropFilter: "blur(20px)",
          borderRight: `1px solid ${
            theme === "dark" ? "rgba(139,92,246,0.2)" : "rgba(139,92,246,0.1)"
          }`,
          boxShadow:
            theme === "dark"
              ? "4px 0 40px rgba(0,0,0,0.3), 0 0 40px rgba(139,92,246,0.1)"
              : "4px 0 40px rgba(0,0,0,0.15), 0 0 40px rgba(139,92,246,0.05)",
        }}
      >
        {/* Заголовок offcanvas */}
        <div className="flex items-center justify-between p-6 border-b border-border/20">
          <div className="flex items-center">
            <motion.div
              initial={{ rotate: 0, scale: 1 }}
              animate={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles
                className="w-8 h-8 mr-3"
                style={{
                  color: theme === "dark" ? "#00d4ff" : "#8b5cf6",
                  filter: `drop-shadow(0 0 12px ${
                    theme === "dark" ? "#00d4ff60" : "#8b5cf660"
                  })`,
                }}
              />
            </motion.div>
            <motion.h2
              className="text-2xl font-bold"
              style={{
                backgroundImage:
                  theme === "dark"
                    ? "linear-gradient(135deg, #00d4ff 0%, #8b5cf6 50%, #a855f7 100%)"
                    : "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 50%, #9333ea 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: theme === "dark" ? "#00d4ff" : "#8b5cf6",
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Qaspilab
            </motion.h2>
          </div>

          <motion.button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-xl bg-background/20 hover:bg-background/40 border border-border/30 transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <X className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Навигация в offcanvas */}
        <nav className="p-6 space-y-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-6"
          >
            <p className="text-sm text-muted-foreground mb-4 font-medium uppercase tracking-wide">
              Навигация
            </p>
          </motion.div>

          {navLinks.map((link, index) => (
            <motion.button
              key={index}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="group w-full text-left p-4 rounded-2xl transition-all duration-300 relative overflow-hidden"
              style={{
                background:
                  theme === "dark"
                    ? "rgba(139,92,246,0.05)"
                    : "rgba(139,92,246,0.03)",
                border: `1px solid ${
                  theme === "dark"
                    ? "rgba(139,92,246,0.1)"
                    : "rgba(139,92,246,0.08)"
                }`,
              }}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              whileHover={{
                scale: 1.02,
                backgroundColor:
                  theme === "dark"
                    ? "rgba(139,92,246,0.1)"
                    : "rgba(139,92,246,0.06)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Фоновый эффект при hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    theme === "dark"
                      ? "linear-gradient(135deg, rgba(0,212,255,0.1) 0%, rgba(139,92,246,0.1) 100%)"
                      : "linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(59,130,246,0.1) 100%)",
                }}
              />

              {/* Текст ссылки */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                  {link.label}
                </span>
                <motion.div
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{
                    background:
                      theme === "dark"
                        ? "linear-gradient(135deg, #00d4ff20 0%, #8b5cf620 100%)"
                        : "linear-gradient(135deg, #8b5cf620 0%, #3b82f620 100%)",
                  }}
                  whileHover={{ scale: 1.2, rotate: 45 }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: theme === "dark" ? "#00d4ff" : "#8b5cf6",
                    }}
                  />
                </motion.div>
              </div>

              {/* Декоративная полоса */}
              <motion.div
                className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    theme === "dark"
                      ? "linear-gradient(90deg, #00d4ff, #8b5cf6)"
                      : "linear-gradient(90deg, #8b5cf6, #3b82f6)",
                }}
              />
            </motion.button>
          ))}
        </nav>

        {/* Переключатели в offcanvas */}
        <div className="absolute bottom-6 left-6 right-6 space-y-4">
          <motion.div
            className="flex items-center justify-between p-4 rounded-2xl"
            style={{
              background:
                theme === "dark"
                  ? "rgba(139,92,246,0.08)"
                  : "rgba(139,92,246,0.05)",
              border: `1px solid ${
                theme === "dark"
                  ? "rgba(139,92,246,0.15)"
                  : "rgba(139,92,246,0.1)"
              }`,
            }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div>
              <p className="font-medium text-foreground">Тема</p>
              <p className="text-sm text-muted-foreground">
                {theme === "dark" ? "Темная" : "Светлая"}
              </p>
            </div>
            <ThemeToggle />
          </motion.div>

        

          {/* Декоративный элемент */}
          <motion.div
            className="flex items-center justify-center pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div
              className="text-xs text-muted-foreground font-medium"
              style={{ color: theme === "dark" ? "#8b5cf6" : "#6366f1" }}
            >
              Made with ❤️ in Kazakhstan
            </div>
          </motion.div>
        </div>

        {/* Декоративные частицы */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background:
                  theme === "dark"
                    ? "linear-gradient(45deg, #00d4ff, #8b5cf6)"
                    : "linear-gradient(45deg, #8b5cf6, #3b82f6)",
                left: `${20 + i * 25}%`,
                top: `${20 + i * 20}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
}
