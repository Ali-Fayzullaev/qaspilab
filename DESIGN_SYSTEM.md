# Qaspilab Design System

Полная дизайн-система для лаборатории инноваций Qaspilab.

## 🎨 Цветовая палитра

### Основные цвета бренда
```css
--brand-graphite: #1A1A1A  /* Основной темный */
--brand-white: #FFFFFF     /* Чистый белый */
--brand-purple: #8B5CF6    /* Фирменный фиолетовый */
--brand-blue: #06B6D4      /* Технологический синий */
--brand-neon: #00D4FF      /* Неоновый акцент */
```

### Использование в Tailwind
```html
<!-- Цвета доступны как Tailwind классы -->
<div class="bg-brand-graphite text-brand-white">
<div class="bg-brand-purple hover:bg-brand-purple/90">
<div class="border-brand-neon text-brand-neon">
```

## 📝 Типографика

### Шрифт
- **Основной**: Inter (через next/font)
- **Fallback**: system-ui, sans-serif

### Размеры и веса
```css
/* H1 - Главные заголовки */
.text-h1 { font-size: 48px; font-weight: 700; line-height: 56px; }

/* H2 - Заголовки секций */
.text-h2 { font-size: 36px; font-weight: 600; line-height: 44px; }

/* H3 - Подзаголовки */
.text-h3 { font-size: 24px; font-weight: 500; line-height: 32px; }

/* Body - Основной текст */
.text-body { font-size: 16px; font-weight: 400; line-height: 24px; }
```

## 🔘 Компоненты Button

### Варианты кнопок
```tsx
// Основные варианты
<Button variant="default">Primary</Button>     // Графитовый
<Button variant="secondary">Secondary</Button> // Фиолетовый  
<Button variant="accent">Accent</Button>       // Неоновый

// Ghost варианты
<Button variant="ghost">Ghost</Button>
<Button variant="ghost-neon">Ghost Neon</Button>

// Outline варианты
<Button variant="outline">Outline</Button>
<Button variant="outline-purple">Purple</Button>
<Button variant="outline-neon">Neon</Button>

// Размеры
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
```

## ✨ Анимации и эффекты

### Временные интервалы
- **Микро-анимации**: 150ms ease-out
- **Плавные переходы**: 300ms ease-in-out  
- **Hero анимации**: 2000ms ease-in-out

### Кастомные классы

#### Hero Glow Effect
```html
<h1 class="hero-glow">Qaspilab</h1>
```
Создает анимированный градиентный текст с эффектом свечения.

#### Light Beam Effect
```html
<div class="light-beam">
  <p>Content with light beam</p>
</div>
```
Добавляет анимированный луч света, проходящий через элемент.

#### Pulse Subtle
```html
<div class="pulse-subtle">Pulsing element</div>
```
Мягкая пульсация элемента.

#### Lab Gradient
```html
<div class="lab-gradient">Gradient background</div>
<div class="lab-gradient-subtle">Subtle gradient</div>
```
Градиентный фон в цветах бренда.

#### Lab Card
```html
<div class="lab-card">
  <p>Card with lab styling</p>
</div>
```
Карточка с эффектами стекла и hover анимациями.

## 💫 Эффекты свечения

### Box Shadow классы
```css
.glow-purple  /* Фиолетовое свечение */
.glow-neon    /* Неоновое свечение */
```

### Background эффекты
```css
.hero-bg      /* Радиальный градиент для hero секции */
```

## 🎯 Использование в проектах

### Импорт компонентов
```tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog } from "@/components/ui/dialog";
```

### Пример Hero секции
```tsx
<div className="hero-bg min-h-screen flex items-center justify-center">
  <div className="text-center space-y-6">
    <h1 className="hero-glow text-h1">Qaspilab</h1>
    <p className="text-body text-muted-foreground max-w-md">
      Инновационная лаборатория
    </p>
    <div className="flex gap-4">
      <Button variant="secondary" size="lg">Начать</Button>
      <Button variant="outline-neon" size="lg">Узнать больше</Button>
    </div>
  </div>
</div>
```

### Пример карточки
```tsx
<Card className="lab-card">
  <CardHeader>
    <CardTitle className="text-h3">Заголовок</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-body">Содержимое карточки</p>
    <Button variant="ghost" className="mt-4">Действие</Button>
  </CardContent>
</Card>
```

## 🔧 Настройка

### Tailwind Config
Все настройки находятся в `tailwind.config.js`:
- Цвета бренда
- Типографика
- Анимации
- Тени и эффекты

### Global Styles
Кастомные классы и анимации в `app/globals.css`:
- CSS переменные для тем
- Keyframe анимации
- Компонентные классы
- Эффекты

## 🎨 Темная тема

Дизайн-система поддерживает темную тему через CSS переменные:
```css
:root { /* светлая тема */ }
.dark { /* темная тема */ }
```

Переключение через `next-themes`:
```tsx
import { ThemeProvider } from "@/components/theme-provider";
```

## 📱 Адаптивность

Все компоненты адаптивные:
- Mobile-first подход
- Breakpoints: sm, md, lg, xl, 2xl
- Flexbox и Grid layouts
- Responsive typography