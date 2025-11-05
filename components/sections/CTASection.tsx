"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useLanguage } from "@/lib/language-context";
import { useTheme } from "next-themes";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

/**
 * CTA-блок "Начни с идеи"
 * Форма отправки идеи с анимацией световых импульсов
 */
export default function CTASection() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  // Ref для отслеживания видимости секции
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  // Состояние для предотвращения ошибок гидратации
  const [mounted, setMounted] = useState(false);

  // Состояния формы
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    description: "",
    budget: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
    thankYou?: string;
  }>({ type: null, message: "" });

  // Показывать ли форму (скрыть после успешной отправки)
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Тексты согласно требованию
  const texts = {
    title: "У вас есть идея?",
    subtitle: "Приходите в лабораторию.",
    description: "Мы превратим её в продукт, которым будут пользоваться люди.",
    buttonText: "Отправить идею",
  };

  // Опции бюджета
  const budgetOptions = [
    { value: "", label: "Выберите бюджет" },
    { value: "0-50000", label: "До 50,000 ₸" },
    { value: "50000-200000", label: "50,000 - 200,000 ₸" },
    { value: "200000-500000", label: "200,000 - 500,000 ₸" },
    { value: "500000-1000000", label: "500,000 - 1,000,000 ₸" },
    { value: "1000000+", label: "Свыше 1,000,000 ₸" },
    { value: "discuss", label: "Обсуждается индивидуально" },
  ];

  // Обработка изменения полей формы
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Обработка отправки формы
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/submit-idea", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: result.message,
          thankYou: result.thankYou,
        });
        // Скрываем форму и очищаем данные
        setTimeout(() => {
          setShowForm(false);
        }, 800);
        setFormData({
          name: "",
          contact: "",
          description: "",
          budget: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message,
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!mounted) {
    return <section ref={sectionRef} className="h-[50vh] bg-background" />;
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom right, rgb(30 58 138), rgb(88 28 135), rgb(67 56 202))",
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url(/fon1.jpg)" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* --- Шикарный блок с текстом и формой --- */}
          <motion.div
            className="relative z-10 bg-white/10 dark:bg-black/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{
              boxShadow:
                "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)",
            }}
          >
            {/* Шикарные заголовки */}
            <div className="text-center mb-12">
              <motion.h2
                className="text-5xl md:text-7xl font-extrabold mb-6"
                style={{
                  color: theme === "dark" ? "#ffffff" : "#ffffff",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {texts.title}
              </motion.h2>

              <motion.h3
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{
                  color: theme === "dark" ? "#00d4ff" : "#1e40af",
                  textShadow:
                    theme === "dark"
                      ? "0 0 20px rgba(0, 212, 255, 0.5), 0 2px 4px rgba(0,0,0,0.8)"
                      : "0 4px 12px rgba(30, 64, 175, 0.6)",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {texts.subtitle}
              </motion.h3>

              <motion.p
                className="text-xl md:text-2xl mb-8"
                style={{
                  color: theme === "dark" ? "#ffffff" : "#1e293b",
                  textShadow:
                    theme === "dark"
                      ? "0 2px 4px rgba(0,0,0,0.8)"
                      : "0 2px 8px rgba(30, 41, 59, 0.4)",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {texts.description}
              </motion.p>

              {/* Декоративная линия */}
              <motion.div
                className="w-32 h-1 mx-auto rounded-full"
                style={{
                  background:
                    theme === "dark"
                      ? "linear-gradient(90deg, #00d4ff, #8b5cf6)"
                      : "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                }}
                initial={{ width: 0, opacity: 0 }}
                animate={isInView ? { width: 128, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </div>

            {/* Условная логика: форма или сообщение об успехе */}
            {submitStatus.type === "success" && !showForm ? (
              /* Красивое сообщение об успехе */
              <motion.div
                className="relative p-8 rounded-2xl border border-green-400/30 backdrop-blur-sm overflow-hidden"
                style={{
                  background:
                    "linear-gradient(to bottom right, rgba(34, 197, 94, 0.2), rgba(5, 150, 105, 0.2))",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Фоновые частицы успеха */}
                <div className="absolute inset-0">
                  {[...Array(15)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-green-400 rounded-full opacity-60"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 0.8, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>

                {/* Иконка успеха */}
                <motion.div
                  className="flex justify-center mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                >
                  <div className="relative">
                    <motion.div
                      className="w-20 h-20 rounded-full flex items-center justify-center shadow-2xl"
                      style={{
                        background:
                          "linear-gradient(to bottom right, rgb(34, 197, 94), rgb(5, 150, 105))",
                      }}
                      animate={{
                        rotate: [0, 360],
                        boxShadow: [
                          "0 0 20px rgba(34, 197, 94, 0.4)",
                          "0 0 40px rgba(34, 197, 94, 0.6)",
                          "0 0 20px rgba(34, 197, 94, 0.4)",
                        ],
                      }}
                      transition={{
                        rotate: {
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        },
                        boxShadow: { duration: 2, repeat: Infinity },
                      }}
                    >
                      <CheckCircle size={40} className="text-white" />
                    </motion.div>

                    {/* Блики */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-8 bg-white/60 rounded-full"
                        style={{
                          left: "50%",
                          top: "50%",
                          transformOrigin: "0 50%",
                          transform: `rotate(${i * 60}deg) translateX(35px)`,
                        }}
                        animate={{
                          opacity: [0, 1, 0],
                          scaleY: [0.5, 1.5, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Заголовок успеха */}
                <motion.h3
                  className="text-3xl font-bold text-green-600 dark:text-green-400 text-center mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  🎉 Отлично!
                </motion.h3>

                {/* Основное сообщение */}
                <motion.p
                  className="text-lg text-green-700 dark:text-green-300 text-center mb-4 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  {submitStatus.message}
                </motion.p>

                {/* Дополнительное сообщение благодарности */}
                {submitStatus.thankYou && (
                  <motion.p
                    className="text-base text-green-600 dark:text-green-400 text-center italic font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    {submitStatus.thankYou}
                  </motion.p>
                )}

                {/* Волновая анимация по краям */}
                <motion.div
                  className="absolute -inset-1 rounded-2xl opacity-20"
                  style={{
                    background:
                      "linear-gradient(to right, rgb(34, 197, 94), rgb(5, 150, 105))",
                  }}
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
            ) : (
              /* Форма отправки идеи */
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView && showForm
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {/* Имя */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.0 }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold mb-3"
                    style={{
                      color: theme === "dark" ? "#ffffff" : "#1f2937",
                      textShadow:
                        theme === "dark" ? "0 2px 4px rgba(0,0,0,0.5)" : "none",
                    }}
                  >
                    💫 Ваше имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl border-2 backdrop-blur-sm focus:outline-none transition-all duration-300 font-medium"
                    style={{
                      background:
                        theme === "dark"
                          ? "rgba(255, 255, 255, 0.1)"
                          : "rgba(255, 255, 255, 0.9)",
                      borderColor:
                        theme === "dark"
                          ? "rgba(255, 255, 255, 0.2)"
                          : "rgba(59, 130, 246, 0.3)",
                      color: theme === "dark" ? "#ffffff" : "#1f2937",
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                    }}
                    placeholder="Введите ваше имя"
                    onFocus={(e) => {
                      e.target.style.borderColor =
                        theme === "dark" ? "#00d4ff" : "#3b82f6";
                      e.target.style.boxShadow =
                        theme === "dark"
                          ? "0 0 20px rgba(0, 212, 255, 0.4)"
                          : "0 0 20px rgba(59, 130, 246, 0.4)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor =
                        theme === "dark"
                          ? "rgba(255, 255, 255, 0.2)"
                          : "rgba(59, 130, 246, 0.3)";
                      e.target.style.boxShadow =
                        "0 8px 32px rgba(0, 0, 0, 0.1)";
                    }}
                  />
                </motion.div>

                {/* Контакт (телефон или email) */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.2 }}
                >
                  <label
                    htmlFor="contact"
                    className="block text-sm font-bold mb-3"
                    style={{
                      color: theme === "dark" ? "#ffffff" : "#1f2937",
                      textShadow:
                        theme === "dark" ? "0 2px 4px rgba(0,0,0,0.5)" : "none",
                    }}
                  >
                    📞 Номер телефона или Email *
                  </label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl border-2 backdrop-blur-sm focus:outline-none transition-all duration-300 font-medium"
                    style={{
                      background:
                        theme === "dark"
                          ? "rgba(255, 255, 255, 0.1)"
                          : "rgba(255, 255, 255, 0.9)",
                      borderColor:
                        theme === "dark"
                          ? "rgba(255, 255, 255, 0.2)"
                          : "rgba(59, 130, 246, 0.3)",
                      color: theme === "dark" ? "#ffffff" : "#1f2937",
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                    }}
                    placeholder="+7 777 123 45 67 или email@example.com"
                    onFocus={(e) => {
                      e.target.style.borderColor =
                        theme === "dark" ? "#00d4ff" : "#3b82f6";
                      e.target.style.boxShadow =
                        theme === "dark"
                          ? "0 0 20px rgba(0, 212, 255, 0.4)"
                          : "0 0 20px rgba(59, 130, 246, 0.4)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor =
                        theme === "dark"
                          ? "rgba(255, 255, 255, 0.2)"
                          : "rgba(59, 130, 246, 0.3)";
                      e.target.style.boxShadow =
                        "0 8px 32px rgba(0, 0, 0, 0.1)";
                    }}
                  />
                </motion.div>

                {/* Описание идеи */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.4 }}
                >
                  <label
                    htmlFor="description"
                    className="block text-sm font-bold mb-3"
                    style={{
                      color: theme === "dark" ? "#ffffff" : "#1f2937",
                      textShadow:
                        theme === "dark" ? "0 2px 4px rgba(0,0,0,0.5)" : "none",
                    }}
                  >
                    💡 Краткое описание вашей идеи *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-6 py-4 rounded-2xl border-2 backdrop-blur-sm focus:outline-none transition-all duration-300 resize-none font-medium"
                    style={{
                      background:
                        theme === "dark"
                          ? "rgba(255, 255, 255, 0.1)"
                          : "rgba(255, 255, 255, 0.9)",
                      borderColor:
                        theme === "dark"
                          ? "rgba(255, 255, 255, 0.2)"
                          : "rgba(59, 130, 246, 0.3)",
                      color: theme === "dark" ? "#ffffff" : "#1f2937",
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                    }}
                    placeholder="Расскажите подробно о вашей идее, что вы хотите создать, какие функции должны быть..."
                    onFocus={(e) => {
                      e.target.style.borderColor =
                        theme === "dark" ? "#00d4ff" : "#3b82f6";
                      e.target.style.boxShadow =
                        theme === "dark"
                          ? "0 0 20px rgba(0, 212, 255, 0.4)"
                          : "0 0 20px rgba(59, 130, 246, 0.4)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor =
                        theme === "dark"
                          ? "rgba(255, 255, 255, 0.2)"
                          : "rgba(59, 130, 246, 0.3)";
                      e.target.style.boxShadow =
                        "0 8px 32px rgba(0, 0, 0, 0.1)";
                    }}
                  />
                </motion.div>

                {/* Бюджет */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.6 }}
                >
                  <label
                    htmlFor="budget"
                    className="block text-sm font-bold mb-3"
                    style={{
                      color: theme === "dark" ? "#ffffff" : "#1f2937",
                      textShadow:
                        theme === "dark" ? "0 2px 4px rgba(0,0,0,0.5)" : "none",
                    }}
                  >
                    💰 Предполагаемый бюджет
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-2xl border-2 backdrop-blur-sm focus:outline-none transition-all duration-300 font-medium cursor-pointer"
                    style={{
                      background:
                        theme === "dark"
                          ? "rgba(255, 255, 255, 0.1)"
                          : "rgba(255, 255, 255, 0.9)",
                      borderColor:
                        theme === "dark"
                          ? "rgba(255, 255, 255, 0.2)"
                          : "rgba(59, 130, 246, 0.3)",
                      color: theme === "dark" ? "#1f2937" : "#1f2937",
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor =
                        theme === "dark" ? "#00d4ff" : "#3b82f6";
                      e.target.style.boxShadow =
                        theme === "dark"
                          ? "0 0 20px rgba(0, 212, 255, 0.4)"
                          : "0 0 20px rgba(59, 130, 246, 0.4)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor =
                        theme === "dark"
                          ? "rgba(255, 255, 255, 0.2)"
                          : "rgba(59, 130, 246, 0.3)";
                      e.target.style.boxShadow =
                        "0 8px 32px rgba(0, 0, 0, 0.1)";
                    }}
                  >
                    {budgetOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </motion.div>

                {/* Шикарная кнопка отправки */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.8 }}
                  className="mt-8"
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative w-full py-6 px-8 rounded-2xl font-bold text-white text-lg overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      background:
                        theme === "dark"
                          ? "linear-gradient(135deg, #00d4ff, #8b5cf6, #a855f7)"
                          : "linear-gradient(135deg, #1e40af, #3b82f6, #8b5cf6)",
                      boxShadow:
                        theme === "dark"
                          ? "0 20px 40px rgba(0, 212, 255, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)"
                          : "0 20px 40px rgba(59, 130, 246, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    {/* Блик на кнопке */}
                    <motion.div
                      className="absolute inset-0 bg-white opacity-20"
                      style={{
                        background:
                          "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)",
                      }}
                      animate={{
                        x: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    />

                    {isSubmitting ? (
                      <div className="relative flex items-center justify-center gap-3">
                        <Loader2 size={24} className="animate-spin" />
                        <span>🚀 Отправляем вашу идею...</span>
                      </div>
                    ) : (
                      <div className="relative flex items-center justify-center gap-3">
                        <Send size={24} />
                        <span>✨ {texts.buttonText}</span>
                      </div>
                    )}
                  </motion.button>
                </motion.div>

                {/* Статус отправки */}
                {submitStatus.type && (
                  <motion.div
                    className={`p-4 rounded-xl border ${
                      submitStatus.type === "success"
                        ? "bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-300"
                        : "bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-300"
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-2">
                      {submitStatus.type === "success" ? (
                        <CheckCircle size={20} />
                      ) : (
                        <AlertCircle size={20} />
                      )}
                      <p className="text-sm font-medium">
                        {submitStatus.message}
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
