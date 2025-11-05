'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import { Send, Loader2, X, CheckCircle, AlertCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Компактное модальное окно для обращения
 * Использует ту же логику отправки что и CTASection
 */
export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { theme } = useTheme();
  
  // Состояния формы
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    description: '',
    budget: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Опции бюджета
  const budgetOptions = [
    { value: '', label: 'Выберите бюджет' },
    { value: 'до-100к', label: 'До 100,000 тенге' },
    { value: '100к-500к', label: '100,000 - 500,000 тенге' },
    { value: '500к-1м', label: '500,000 - 1,000,000 тенге' },
    { value: '1м-5м', label: '1,000,000 - 5,000,000 тенге' },
    { value: '5м+', label: 'Свыше 5,000,000 тенге' },
    { value: 'обсудим', label: 'Обсудим индивидуально' }
  ];

  // Обработка изменений в полях
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Сброс статуса при изменении данных
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  // Отправка формы
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/submit-idea', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Ваше сообщение отправлено! Мы свяжемся с вами в ближайшее время.'
        });
        // Очищаем форму
        setFormData({
          name: '',
          contact: '',
          description: '',
          budget: ''
        });
        // Закрываем модал через 3 секунды
        setTimeout(() => {
          onClose();
          setSubmitStatus({ type: null, message: '' });
        }, 3000);
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-md mx-4 p-0 overflow-hidden border-0"
        style={{
          background: theme === 'dark' 
            ? 'rgba(15, 15, 35, 0.95)' 
            : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          boxShadow: theme === 'dark'
            ? '0 25px 50px rgba(0, 212, 255, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)'
            : '0 25px 50px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.1)'
        }}
      >

        {/* Заголовок */}
        <DialogHeader className="p-6 pb-2">
          <DialogTitle 
            className="text-2xl font-bold text-center"
            style={{
              color: theme === 'dark' ? '#ffffff' : '#1f2937'
            }}
          >
            💬 Обсудить проект
          </DialogTitle>
          <DialogDescription 
            className="text-center mt-2"
            style={{
              color: theme === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(30, 41, 59, 0.7)'
            }}
          >
            Расскажите о своей идее, и мы поможем её воплотить
          </DialogDescription>
        </DialogHeader>

        {/* Контент модала */}
        <div className="p-6 pt-2">
          {submitStatus.type === 'success' ? (
            /* Сообщение об успехе */
            <motion.div
              className="text-center py-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #22c55e, #16a34a)'
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 360]
                }}
                transition={{
                  scale: { duration: 2, repeat: Infinity },
                  rotate: { duration: 3, ease: "linear" }
                }}
              >
                <CheckCircle size={32} className="text-white" />
              </motion.div>
              <p 
                className="text-lg font-medium"
                style={{
                  color: theme === 'dark' ? '#22c55e' : '#16a34a'
                }}
              >
                {submitStatus.message}
              </p>
            </motion.div>
          ) : (
            /* Форма */
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Имя */}
              <div>
                <label 
                  htmlFor="modal-name" 
                  className="block text-sm font-semibold mb-2"
                  style={{
                    color: theme === 'dark' ? '#ffffff' : '#1f2937'
                  }}
                >
                  Ваше имя *
                </label>
                <input
                  type="text"
                  id="modal-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 font-medium transition-all duration-300 focus:outline-none"
                  style={{
                    background: theme === 'dark' 
                      ? 'rgba(255, 255, 255, 0.1)' 
                      : 'rgba(255, 255, 255, 0.8)',
                    borderColor: theme === 'dark' 
                      ? 'rgba(255, 255, 255, 0.2)' 
                      : 'rgba(59, 130, 246, 0.3)',
                    color: theme === 'dark' ? '#ffffff' : '#1f2937'
                  }}
                  placeholder="Введите ваше имя"
                  onFocus={(e) => {
                    e.target.style.borderColor = theme === 'dark' ? '#00d4ff' : '#3b82f6';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = theme === 'dark' 
                      ? 'rgba(255, 255, 255, 0.2)' 
                      : 'rgba(59, 130, 246, 0.3)';
                  }}
                />
              </div>

              {/* Контакт */}
              <div>
                <label 
                  htmlFor="modal-contact" 
                  className="block text-sm font-semibold mb-2"
                  style={{
                    color: theme === 'dark' ? '#ffffff' : '#1f2937'
                  }}
                >
                  Телефон или Email *
                </label>
                <input
                  type="text"
                  id="modal-contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 font-medium transition-all duration-300 focus:outline-none"
                  style={{
                    background: theme === 'dark' 
                      ? 'rgba(255, 255, 255, 0.1)' 
                      : 'rgba(255, 255, 255, 0.8)',
                    borderColor: theme === 'dark' 
                      ? 'rgba(255, 255, 255, 0.2)' 
                      : 'rgba(59, 130, 246, 0.3)',
                    color: theme === 'dark' ? '#ffffff' : '#1f2937'
                  }}
                  placeholder="+7 777 123 45 67"
                  onFocus={(e) => {
                    e.target.style.borderColor = theme === 'dark' ? '#00d4ff' : '#3b82f6';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = theme === 'dark' 
                      ? 'rgba(255, 255, 255, 0.2)' 
                      : 'rgba(59, 130, 246, 0.3)';
                  }}
                />
              </div>

              {/* Описание */}
              <div>
                <label 
                  htmlFor="modal-description" 
                  className="block text-sm font-semibold mb-2"
                  style={{
                    color: theme === 'dark' ? '#ffffff' : '#1f2937'
                  }}
                >
                  Опишите вашу идею *
                </label>
                <textarea
                  id="modal-description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border-2 font-medium transition-all duration-300 focus:outline-none resize-none"
                  style={{
                    background: theme === 'dark' 
                      ? 'rgba(255, 255, 255, 0.1)' 
                      : 'rgba(255, 255, 255, 0.8)',
                    borderColor: theme === 'dark' 
                      ? 'rgba(255, 255, 255, 0.2)' 
                      : 'rgba(59, 130, 246, 0.3)',
                    color: theme === 'dark' ? '#ffffff' : '#1f2937'
                  }}
                  placeholder="Кратко расскажите о проекте..."
                  onFocus={(e) => {
                    e.target.style.borderColor = theme === 'dark' ? '#00d4ff' : '#3b82f6';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = theme === 'dark' 
                      ? 'rgba(255, 255, 255, 0.2)' 
                      : 'rgba(59, 130, 246, 0.3)';
                  }}
                />
              </div>

              {/* Бюджет */}
              <div>
                <label 
                  htmlFor="modal-budget" 
                  className="block text-sm font-semibold mb-2"
                  style={{
                    color: theme === 'dark' ? '#ffffff' : '#1f2937'
                  }}
                >
                  Примерный бюджет
                </label>
                <select
                  id="modal-budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 font-medium transition-all duration-300 focus:outline-none cursor-pointer"
                  style={{
                    background: theme === 'dark' 
                      ? 'rgba(255, 255, 255, 0.1)' 
                      : 'rgba(255, 255, 255, 0.8)',
                    borderColor: theme === 'dark' 
                      ? 'rgba(255, 255, 255, 0.2)' 
                      : 'rgba(59, 130, 246, 0.3)',
                    color: theme === 'dark' ? '#ffffff' : '#1f2937'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = theme === 'dark' ? '#00d4ff' : '#3b82f6';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = theme === 'dark' 
                      ? 'rgba(255, 255, 255, 0.2)' 
                      : 'rgba(59, 130, 246, 0.3)';
                  }}
                >
                  {budgetOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Кнопка отправки */}
              <motion.div className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300"
                  style={{
                    background: theme === 'dark'
                      ? 'linear-gradient(135deg, #00d4ff, #8b5cf6)'
                      : 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    boxShadow: theme === 'dark'
                      ? '0 10px 25px rgba(0, 212, 255, 0.3)'
                      : '0 10px 25px rgba(59, 130, 246, 0.3)'
                  }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <Loader2 size={18} className="animate-spin" />
                      Отправляем...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <Send size={18} />
                      Отправить заявку
                    </div>
                  )}
                </Button>
              </motion.div>

              {/* Статус отправки (ошибки) */}
              {submitStatus.type === 'error' && (
                <motion.div
                  className="p-3 rounded-xl border flex items-center gap-2"
                  style={{
                    background: theme === 'dark' 
                      ? 'rgba(239, 68, 68, 0.1)' 
                      : 'rgba(239, 68, 68, 0.05)',
                    borderColor: theme === 'dark' 
                      ? 'rgba(239, 68, 68, 0.3)' 
                      : 'rgba(239, 68, 68, 0.2)',
                    color: theme === 'dark' ? '#fca5a5' : '#dc2626'
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AlertCircle size={16} />
                  <p className="text-sm">{submitStatus.message}</p>
                </motion.div>
              )}
            </motion.form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}