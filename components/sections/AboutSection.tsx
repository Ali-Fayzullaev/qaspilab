"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useLanguage } from "@/lib/language-context";
import { useTheme } from "next-themes";
import { Beaker, Sparkles, Cpu, Zap } from "lucide-react";

/**
 * Секция "О Нас" (Философия)
 * Демонстрирует 2-колоночный макет с анимированным текстом
 * и симуляцией падения "капли света", превращающейся в иконки.
 */
export default function AboutSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  // Ref для отслеживания видимости секции
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.3,
  });

  // Состояние для управления "всплеском"
  const [hasLanded, setHasLanded] = useState(false);

  // Состояние для предотвращения ошибок гидратации
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Тексты согласно требованию
  const texts = {
    title: "Мы не агентство. Мы лаборатория.",
    p1: "Qaspilab — это место, где идеи обретают форму.",
    p2: "Где предприниматели, дизайнеры и инженеры собираются,",
    p3: "чтобы создать не просто код — а живой продукт.",
    p4: "Мы верим, что технологии должны быть простыми, умными и человечными.",
    p5: "Каждый проект для нас — это эксперимент.",
    p6: "Каждый результат — это шаг к мечте, которая становится реальностью.",
  };

  // Цвета иконок для тем (синхронизированы с роскошной каплей)
  const iconColors = {
    sparkles: theme === "dark" ? "#00d4ff" : "#8b5cf6", // Неоновый циан / Роскошный фиолетовый
    beaker: theme === "dark" ? "#8b5cf6" : "#3b82f6", // Фиолетовый / Королевский синий
    cpu: theme === "dark" ? "#a855f7" : "#9333ea", // Пурпурный / Глубокий пурпур
    zap: theme === "dark" ? "#06b6d4" : "#7c3aed", // Циан / Фиолетово-индиго
  };

  if (!mounted) {
    return <section ref={sectionRef} className="h-[50vh] bg-background" />;
  }

  return (
    <section
      ref={sectionRef}
      className="relative  py-24 sm:py-32 from-background via-secondary/10 to-primary/5 dark:from-background dark:via-secondary/20 dark:to-primary/10 transition-all duration-500 overflow-hidden"
      style={{
          background: theme === 'dark' 
            ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
            : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)',
          color: theme === 'dark' ? '#ffffff' : '#1e293b'
        }}
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* --- 2. Визуальный блок (Симуляция 3D-сцены) --- */}
          <div className="relative flex items-center justify-center h-96 lg:h-full min-h-[400px]">
            {/* "Лабораторный стол" (Поверхность) */}
            <motion.div
              className="absolute w-full max-w-lg h-2/3 bottom-0 bg-card/50 rounded-t-3xl border-t border-border shadow-xl backdrop-blur-sm"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* Глянцевый блик на столе */}
              <div className="absolute top-0 left-0 w-full h-16 bg-linear-to-b from-white/30 dark:from-white/10 to-transparent rounded-t-3xl opacity-50" />
            </motion.div>

            {/* "Капля света" (Анимируется при isInView) */}
            <motion.div
              className="absolute z-20"
              initial={{ y: -200, opacity: 0, scale: 0.5, rotate: 0 }}
              animate={
                isInView ? { y: 30, opacity: 1, scale: 1, rotate: 360 } : {}
              }
              transition={{ duration: 1.5, delay: 1 }}
              onAnimationComplete={() => setHasLanded(true)}
            >
              {/* Внешнее многослойное свечение */}
              <div
                className="absolute inset-0 w-20 h-20 rounded-full animate-pulse"
                style={{
                  background:
                    theme === "dark"
                      ? "radial-gradient(circle, rgba(0,212,255,0.4) 0%, rgba(139,92,246,0.3) 30%, rgba(168,85,247,0.2) 60%, transparent 80%)"
                      : "radial-gradient(circle, rgba(139,92,246,0.6) 0%, rgba(59,130,246,0.5) 25%, rgba(147,51,234,0.4) 50%, rgba(99,102,241,0.3) 75%, transparent 90%)",
                  boxShadow:
                    theme === "dark"
                      ? "0 0 30px rgba(0,212,255,0.6), 0 0 60px rgba(139,92,246,0.4), 0 0 90px rgba(168,85,247,0.2)"
                      : "0 0 40px rgba(139,92,246,0.8), 0 0 70px rgba(59,130,246,0.6), 0 0 100px rgba(147,51,234,0.4), 0 0 130px rgba(99,102,241,0.2)",
                }}
              />

              {/* Промежуточное свечение с радужным эффектом */}
              <motion.div
                className="absolute inset-2 w-16 h-16 rounded-full"
                animate={{
                  rotate: [0, 360],
                  scale: [0.9, 1.1, 0.9],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  background:
                    theme === "dark"
                      ? "conic-gradient(from 0deg, rgba(0,212,255,0.3), rgba(139,92,246,0.3), rgba(168,85,247,0.3), rgba(0,212,255,0.3))"
                      : "conic-gradient(from 0deg, rgba(139,92,246,0.5), rgba(59,130,246,0.5), rgba(147,51,234,0.5), rgba(99,102,241,0.5), rgba(139,92,246,0.5))",
                  filter: "blur(8px)",
                }}
              />

              {/* Основная капля с реалистичными эффектами */}
              <motion.div
                className="relative w-12 h-12 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  background:
                    theme === "dark"
                      ? "linear-gradient(135deg, #00d4ff 0%, #8b5cf6 30%, #a855f7 60%, #06b6d4 100%)"
                      : "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 25%, #9333ea 50%, #6366f1 75%, #7c3aed 100%)",
                  boxShadow:
                    theme === "dark"
                      ? "0 0 25px rgba(0,212,255,0.9), inset 0 3px 6px rgba(255,255,255,0.4), inset 0 -2px 4px rgba(0,0,0,0.2)"
                      : "0 0 30px rgba(139,92,246,0.9), 0 0 50px rgba(59,130,246,0.7), inset 0 4px 8px rgba(255,255,255,0.8), inset 0 -3px 6px rgba(0,0,0,0.1)",
                  border:
                    theme === "dark"
                      ? "1px solid rgba(255,255,255,0.2)"
                      : "1px solid rgba(255,255,255,0.6)",
                }}
              >
                {/* Главный блик */}
                <div
                  className="absolute top-1 left-2 w-5 h-5 rounded-full"
                  style={{
                    background:
                      theme === "dark"
                        ? "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 40%, transparent 70%)"
                        : "radial-gradient(circle at 30% 30%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 30%, rgba(255,255,255,0.4) 60%, transparent 80%)",
                    filter: "blur(0.5px)",
                  }}
                />

                {/* Вторичный блик */}
                <div
                  className="absolute bottom-2 right-1 w-2 h-2 rounded-full opacity-50"
                  style={{
                    background:
                      theme === "dark"
                        ? "radial-gradient(circle, rgba(0,212,255,0.8) 0%, transparent 70%)"
                        : "radial-gradient(circle, rgba(255,255,255,0.9) 0%, transparent 70%)",
                  }}
                />

                {/* Внутренние отражения */}
                <motion.div
                  className="absolute inset-1 rounded-full opacity-30"
                  animate={{ rotate: [0, -360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  style={{
                    background:
                      theme === "dark"
                        ? "linear-gradient(45deg, transparent 40%, rgba(0,212,255,0.3) 50%, transparent 60%)"
                        : "linear-gradient(45deg, transparent 35%, rgba(255,255,255,0.6) 50%, transparent 65%)",
                  }}
                />

                {/* Мерцающие частицы вокруг */}
                <motion.div
                  className="absolute -top-3 -right-3 w-2.5 h-2.5 rounded-full"
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.2, 0.5],
                    y: [-8, 8, -8],
                    x: [-3, 3, -3],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                  style={{
                    background:
                      theme === "dark"
                        ? "radial-gradient(circle, #00d4ff, #8b5cf6)"
                        : "radial-gradient(circle, #8b5cf6, #3b82f6)",
                    boxShadow:
                      theme === "dark"
                        ? "0 0 10px rgba(0,212,255,0.8)"
                        : "0 0 12px rgba(139,92,246,0.9)",
                  }}
                />

                <motion.div
                  className="absolute -bottom-2 -left-3 w-2 h-2 rounded-full"
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.3, 1, 0.3],
                    x: [-5, 5, -5],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 1,
                  }}
                  style={{
                    background:
                      theme === "dark"
                        ? "radial-gradient(circle, #8b5cf6, #a855f7)"
                        : "radial-gradient(circle, #3b82f6, #9333ea)",
                    boxShadow:
                      theme === "dark"
                        ? "0 0 8px rgba(139,92,246,0.7)"
                        : "0 0 10px rgba(59,130,246,0.8)",
                  }}
                />

                <motion.div
                  className="absolute top-4 -left-4 w-1.5 h-1.5 rounded-full"
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.2, 1, 0.2],
                    rotate: [0, 360],
                    y: [-2, 2, -2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.2,
                  }}
                  style={{
                    background:
                      theme === "dark"
                        ? "radial-gradient(circle, #06b6d4, #00d4ff)"
                        : "radial-gradient(circle, #6366f1, #7c3aed)",
                    boxShadow:
                      theme === "dark"
                        ? "0 0 6px rgba(6,182,212,0.8)"
                        : "0 0 8px rgba(99,102,241,0.9)",
                  }}
                />

                {/* Дополнительные микро-частицы для светлой темы */}
                {theme !== "dark" && (
                  <>
                    <motion.div
                      className="absolute top-0 right-4 w-1 h-1 rounded-full"
                      animate={{
                        opacity: [0, 0.8, 0],
                        scale: [0.1, 1, 0.1],
                        y: [-3, 3, -3],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: 0.7,
                      }}
                      style={{
                        background: "radial-gradient(circle, #a855f7, #c084fc)",
                        boxShadow: "0 0 6px rgba(168,85,247,0.9)",
                      }}
                    />

                    <motion.div
                      className="absolute bottom-4 right-0 w-0.5 h-0.5 rounded-full"
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0.1, 1.5, 0.1],
                        x: [-2, 2, -2],
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        delay: 1.2,
                      }}
                      style={{
                        background: "radial-gradient(circle, #7c3aed, #8b5cf6)",
                        boxShadow: "0 0 4px rgba(124,58,237,0.8)",
                      }}
                    />
                  </>
                )}
              </motion.div>
            </motion.div>

            {/* "Цифровая форма" (Иконки, появляются при hasLanded) */}
            {hasLanded && (
              <div
                className="absolute z-30"
                style={{ transform: "translateY(30px)" }}
              >
                {/* Волна энергии при всплеске - роскошная версия */}
                <motion.div
                  className="absolute w-32 h-32 rounded-full border-2 opacity-40"
                  style={{
                    borderImage:
                      theme === "dark"
                        ? "linear-gradient(45deg, #00d4ff, #8b5cf6, #a855f7) 1"
                        : "linear-gradient(45deg, #8b5cf6, #3b82f6, #9333ea, #7c3aed) 1",
                    left: "-64px",
                    top: "-64px",
                    filter: "blur(1px)",
                  }}
                  initial={{ scale: 0, opacity: 0.8 }}
                  animate={{
                    scale: [0, 2.5, 4],
                    opacity: [0.8, 0.4, 0],
                  }}
                  transition={{ duration: 1.8, ease: "easeOut" }}
                />

                {/* Вторая волна - радужная */}
                <motion.div
                  className="absolute w-24 h-24 rounded-full border-2 border-dashed opacity-50"
                  style={{
                    borderColor: theme === "dark" ? "#8b5cf6" : "#9333ea",
                    left: "-48px",
                    top: "-48px",
                    background:
                      theme === "dark"
                        ? "conic-gradient(from 0deg, transparent, rgba(0,212,255,0.1), transparent, rgba(139,92,246,0.1), transparent)"
                        : "conic-gradient(from 0deg, transparent, rgba(139,92,246,0.2), transparent, rgba(147,51,234,0.2), transparent)",
                    filter: "blur(2px)",
                  }}
                  initial={{ scale: 0, opacity: 0.6 }}
                  animate={{
                    scale: [0, 3, 5],
                    opacity: [0.6, 0.3, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 2.2, ease: "easeOut", delay: 0.2 }}
                />

                {/* Третья волна - мерцающая */}
                <motion.div
                  className="absolute w-16 h-16 rounded-full opacity-60"
                  style={{
                    left: "-32px",
                    top: "-32px",
                    background:
                      theme === "dark"
                        ? "radial-gradient(circle, rgba(0,212,255,0.3) 0%, rgba(139,92,246,0.2) 50%, transparent 70%)"
                        : "radial-gradient(circle, rgba(139,92,246,0.4) 0%, rgba(59,130,246,0.3) 30%, rgba(147,51,234,0.2) 60%, transparent 80%)",
                    filter: "blur(3px)",
                  }}
                  initial={{ scale: 0, opacity: 0.8 }}
                  animate={{
                    scale: [0, 2, 3.5],
                    opacity: [0.8, 0.4, 0],
                  }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
                />

                {/* 1. Sparkles (Основной всплеск) */}
                <motion.div
                  className="absolute"
                  style={{ color: iconColors.sparkles }}
                  initial={{ scale: 0, opacity: 0, y: 0 }}
                  animate={{
                    scale: [1, 2.5, 1.5],
                    opacity: [0, 1, 0],
                    y: -100,
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                >
                  <Sparkles size={48} strokeWidth={1.5} />
                </motion.div>

                {/* 2. Beaker (Лаборатория) */}
                <motion.div
                  className="absolute"
                  style={{ color: iconColors.beaker }}
                  initial={{ scale: 0, opacity: 0, y: 0, x: 0, rotate: -20 }}
                  animate={{
                    scale: [0, 1.2, 1],
                    opacity: [0, 1, 1, 0],
                    y: [-5, -130, -120],
                    x: [-10, -90, -80],
                    rotate: [-20, 10, 0],
                  }}
                  transition={{ duration: 1.4, ease: "easeOut", delay: 0.1 }}
                >
                  <Beaker size={36} />
                  {/* Пузырьки из колбы */}
                  <motion.div
                    className="absolute -top-2 left-3 w-1 h-1 rounded-full opacity-70"
                    style={{ backgroundColor: iconColors.beaker }}
                    animate={{
                      y: [-5, -15, -10],
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: 2,
                      delay: 0.5,
                    }}
                  />
                </motion.div>

                {/* 3. Cpu (Технология) */}
                <motion.div
                  className="absolute"
                  style={{ color: iconColors.cpu }}
                  initial={{ scale: 0, opacity: 0, y: 0, x: 0, rotate: 20 }}
                  animate={{
                    scale: [0, 1.3, 1],
                    opacity: [0, 1, 1, 0],
                    y: [-5, -115, -110],
                    x: [10, 90, 80],
                    rotate: [20, -10, 0],
                  }}
                  transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
                >
                  <Cpu size={36} />
                  {/* Искры от процессора */}
                  <motion.div
                    className="absolute top-0 right-0 w-0.5 h-0.5 rounded-full"
                    style={{ backgroundColor: iconColors.cpu }}
                    animate={{
                      scale: [0, 2, 0],
                      opacity: [0, 1, 0],
                      x: [0, 5, 10],
                      y: [0, -3, -6],
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: 3,
                      delay: 0.3,
                    }}
                  />
                </motion.div>

                {/* 4. Zap (Идея/Энергия) */}
                <motion.div
                  className="absolute"
                  style={{ color: iconColors.zap }}
                  initial={{ scale: 0, opacity: 0, y: 0 }}
                  animate={{
                    scale: [0, 1.4, 1.2],
                    opacity: [0, 1, 1, 0],
                    y: [-5, -75, -70],
                    rotate: [0, 15, -15, 0],
                  }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.15 }}
                >
                  <Zap size={32} />
                  {/* Электрические разряды */}
                  <motion.div
                    className="absolute -top-1 -left-1 w-6 h-0.5 opacity-80"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${iconColors.zap}, transparent)`,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scaleX: [0, 1, 0],
                      rotate: [0, 45, 90],
                    }}
                    transition={{
                      duration: 0.4,
                      repeat: 4,
                      delay: 0.4,
                    }}
                  />
                </motion.div>
              </div>
            )}
          </div>
          {/* --- 1. Текстовый блок (Философия) --- */}
          <motion.div
            className="z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Заголовок */}
            <motion.h2
              className="text-4xl md:text-5xl font-extrabold text-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {texts.title}
            </motion.h2>

            {/* Абзацы */}
            <div className="space-y-4 text-lg text-muted-foreground">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {texts.p1}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {texts.p2}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {texts.p3}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="pt-4 font-medium text-foreground/90"
              >
                {texts.p4}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                {texts.p5}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {texts.p6}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
