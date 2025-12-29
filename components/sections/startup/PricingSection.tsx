"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useLanguage } from "@/lib/language-context";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Check,
  Star,
  Zap,
  Sparkles,
  Award,
  Shield,
  Clock,
  Users,
  Target,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function PricingSection() {
  const { t } = useLanguage();
  const { theme, resolvedTheme } = useTheme();

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.1,
    margin: "-50px",
  });

  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    const isDarkMode = theme === "dark" || resolvedTheme === "dark";
    return (
      <section
        ref={sectionRef}
        className="h-[600px]"
        style={{
          background: isDarkMode
            ? "linear-gradient(135deg, #112036 0%, #243753 100%)"
            : "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
        }}
      />
    );
  }

  const isDarkMode = theme === "dark" || resolvedTheme === "dark";

  const geometricPattern = isDarkMode
    ? `linear-gradient(45deg, rgba(255, 255, 255, 0.03) 25%, transparent 25%),
       linear-gradient(-45deg, rgba(255, 255, 255, 0.03) 25%, transparent 25%),
       linear-gradient(45deg, transparent 75%, rgba(255, 255, 255, 0.03) 75%),
       linear-gradient(-45deg, transparent 75%, rgba(255, 255, 255, 0.03) 75%)`
    : `linear-gradient(45deg, rgba(0, 0, 0, 0.03) 25%, transparent 25%),
       linear-gradient(-45deg, rgba(0, 0, 0, 0.03) 25%, transparent 25%),
       linear-gradient(45deg, transparent 75%, rgba(0, 0, 0, 0.03) 75%),
       linear-gradient(-45deg, transparent 75%, rgba(0, 0, 0, 0.03) 75%)`;

  return (
    <section
      ref={sectionRef}
      className="relative py-28 sm:py-36 overflow-hidden"
      style={{
        backgroundColor: isDarkMode ? "#112036" : "#ffffff",
      }}
    >
      {/* Квадратный паттерн */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
      linear-gradient(${
        isDarkMode ? "#334155" : "#e2e8f0"
      } 1px, transparent 1px),
      linear-gradient(90deg, ${
        isDarkMode ? "#334155" : "#e2e8f0"
      } 1px, transparent 1px)
    `,
          backgroundSize: "40px 40px",
          backgroundPosition: "0 0, 0 20px, 20px -20px, -20px 0px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 70%)",
        }}
      />
      {/* Фоновые элементы */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background: isDarkMode
              ? "linear-gradient(135deg, #0A0F1C 0%, #1C2739 50%, #0F172A 100%)"
              : "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)",
          }}
        />

        {/* Радиальные градиенты */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div
              className="absolute top-1/4 left-10 w-96 h-96 rounded-full blur-3xl"
              style={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
            />
            <div
              className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full blur-3xl"
              style={{ backgroundColor: "rgba(168, 85, 247, 0.05)" }}
            />
          </div>
        </div>

        {/* Геометрический паттерн */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: geometricPattern,
            backgroundSize: "80px 80px",
            backgroundPosition: "0 0, 0 0, 40px 40px, 40px 40px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          }}
        />
      </div>

      {/* Плавающие частицы */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              backgroundColor: "rgba(59, 130, 246, 0.2)",
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.sin(i) * 20, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        {/* Заголовок */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              background: isDarkMode
                ? "linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(59, 130, 246, 0.1))"
                : "linear-gradient(135deg, rgba(217, 119, 6, 0.1), rgba(37, 99, 235, 0.1))",
              border: isDarkMode
                ? "1px solid rgba(245, 158, 11, 0.2)"
                : "1px solid rgba(217, 119, 6, 0.2)",
            }}
          >
            <Award
              className="w-4 h-4"
              style={{ color: isDarkMode ? "#fbbf24" : "#d97706" }}
            />
            <span className="text-sm font-medium bg-gradient-to-r from-amber-500 to-blue-500 bg-clip-text text-transparent">
              ЦЕНЫ
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-blue-400 bg-clip-text text-transparent">
              {t.startupLaunch.pricing.title}
            </span>
          </h2>
        </motion.div>

        {/* Карточка пакета */}
        <motion.div
          className="relative group"
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Бейдж */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
            <motion.div
              className="px-6 py-3 rounded-full font-bold text-sm flex items-center shadow-lg"
              style={{
                background: "linear-gradient(135deg, #f59e0b, #3b82f6)",
                color: "white",
              }}
              animate={isHovered ? { scale: 1.05 } : {}}
              transition={{ duration: 0.3 }}
            >
              <Star className="w-4 h-4 mr-2 fill-white" />
              <Sparkles className="w-4 h-4" />
            </motion.div>
          </div>

          {/* Основная карточка */}
          <div
            className={cn(
              "relative rounded-3xl p-8 md:p-12 transition-all duration-500",
              "border-2",
              isDarkMode
                ? "border-white/20 hover:border-amber-500/50"
                : "border-gray-200 hover:border-amber-400"
            )}
            style={{
              background: isDarkMode
                ? "rgba(30, 41, 59, 0.6)"
                : "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(20px)",
              boxShadow: isHovered
                ? "0 40px 80px rgba(245, 158, 11, 0.25)"
                : isDarkMode
                ? "0 20px 60px rgba(0, 0, 0, 0.3)"
                : "0 20px 60px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Акцентные углы */}
            <div
              className="absolute top-0 right-0 w-24 h-24 overflow-hidden"
              style={{
                borderTopRightRadius: "1.5rem",
                borderBottomLeftRadius: "100%",
              }}
            >
              <div
                className="absolute top-0 right-0 w-48 h-48 transform rotate-45 origin-top-right"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(245, 158, 11, 0.2), transparent 70%)",
                }}
              />
            </div>

            <div
              className="absolute bottom-0 left-0 w-24 h-24 overflow-hidden"
              style={{
                borderBottomLeftRadius: "1.5rem",
                borderTopRightRadius: "100%",
              }}
            >
              <div
                className="absolute bottom-0 left-0 w-48 h-48 transform -rotate-45 origin-bottom-left"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(59, 130, 246, 0.2), transparent 70%)",
                }}
              />
            </div>

            <div className="relative z-10">
              {/* Заголовок и цена */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div
                    className="p-3 rounded-xl"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(59, 130, 246, 0.2))",
                    }}
                  >
                    <Zap
                      className="w-8 h-8"
                      style={{ color: isDarkMode ? "#fbbf24" : "#d97706" }}
                    />
                  </div>
                  <h3
                    className="text-3xl md:text-4xl font-bold"
                    style={{ color: isDarkMode ? "#fff" : "#111827" }}
                  >
                    {t.startupLaunch.pricing.package.name}
                  </h3>
                </div>

                {/* Цена */}
                <div className="mb-4">
                  <div className="text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-amber-500 to-blue-500 bg-clip-text text-transparent">
                    {t.startupLaunch.pricing.package.price}
                  </div>
                  <p
                    className={cn(
                      "text-xl mt-2",
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    )}
                  >
                    {t.startupLaunch.pricing.package.duration}
                  </p>
                </div>
              </div>

              {/* Список включений */}
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {t.startupLaunch.pricing.package.includes.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center p-4 rounded-xl transition-all duration-300 hover:scale-105"
                    style={{
                      background: isDarkMode
                        ? "rgba(255, 255, 255, 0.05)"
                        : "rgba(0, 0, 0, 0.03)",
                      border: isDarkMode
                        ? "1px solid rgba(255, 255, 255, 0.1)"
                        : "1px solid rgba(0, 0, 0, 0.1)",
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center mr-4 shrink-0"
                      style={{
                        background: "linear-gradient(135deg, #10b981, #3b82f6)",
                      }}
                    >
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span
                      className={cn(
                        "font-semibold",
                        isDarkMode ? "text-white" : "text-gray-900"
                      )}
                    >
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Кнопка CTA */}
              <div className="text-center">
                <Button
                  size="lg"
                  className={cn(
                    "relative px-12 py-6 text-xl font-bold rounded-2xl",
                    "shadow-xl hover:shadow-2xl transition-all duration-300 transform",
                    "hover:scale-105 active:scale-95 group"
                  )}
                  style={{
                    background: "linear-gradient(135deg, #f59e0b, #3b82f6)",
                    color: "white",
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {t.startupLaunch.pricing.cta}
                    <motion.div
                      animate={isHovered ? { x: 5 } : { x: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Zap className="w-5 h-5" />
                    </motion.div>
                  </span>

                  {/* Эффект свечения */}
                  {isDarkMode && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500 to-blue-500 opacity-0 group-hover:opacity-30 blur-xl"
                      animate={
                        isHovered
                          ? {
                              opacity: [0, 0.3, 0],
                            }
                          : {}
                      }
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </Button>
              </div>
            </div>

            {/* Декоративные элементы */}
            <div className="absolute -top-6 -right-6 w-12 h-12">
              <motion.div
                className="w-full h-full rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(245, 158, 11, 0.3) 0%, transparent 70%)",
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            <div className="absolute -bottom-6 -left-6 w-12 h-12">
              <motion.div
                className="w-full h-full rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.4, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Декоративная линия (только для темной темы) */}
      {isDarkMode && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 via-50% to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      )}
    </section>
  );
}
