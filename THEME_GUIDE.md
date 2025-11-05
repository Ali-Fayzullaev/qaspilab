# Qaspilab Theme System

## Описание
Qaspilab использует систему тем на основе `next-themes` для поддержки светлого и темного режимов.

## Установленные пакеты
- `next-themes` - для управления темами

## Файлы системы тем

### 1. `components/theme-provider.tsx`
Wrapper для `next-themes` провайдера.

### 2. `components/ui/theme-toggle.tsx`
Кнопка переключения тем с иконками солнца и луны.

### 3. `app/layout.tsx`
Корневой layout с настроенным ThemeProvider:
- `attribute="class"` - использует CSS классы для тем
- `defaultTheme="system"` - системная тема по умолчанию
- `enableSystem` - поддержка системной темы
- `suppressHydrationWarning` - предотвращает warning'и hydration

### 4. `app/globals.css`
CSS переменные для обеих тем:
- Светлая тема: `:root`
- Темная тема: `.dark`

## Использование в компонентах

### Базовые цвета
```tsx
// Автоматически адаптируются к теме
className="bg-background text-foreground"
className="bg-card text-card-foreground"
className="bg-primary text-primary-foreground"
```

### Qaspilab брендовые цвета
```tsx
// Статичные цвета бренда
className="bg-brand-graphite text-brand-white"
className="bg-brand-purple text-white" 
className="bg-brand-blue text-white"
className="bg-brand-neon text-brand-graphite"
```

### Специальные классы
```tsx
// Карточка с эффектом лаборатории
className="lab-card"

// Градиенты
className="lab-gradient"
className="lab-gradient-subtle"

// Свечения
className="glow-purple"
className="glow-neon"
```

## Переключение тем

### В header.tsx
```tsx
import { ThemeToggle } from '@/components/ui/theme-toggle';

// Использование
<ThemeToggle />
```

### Программно
```tsx
import { useTheme } from 'next-themes';

const { theme, setTheme, systemTheme } = useTheme();

// Переключить тему
setTheme(theme === 'light' ? 'dark' : 'light');

// Установить конкретную тему
setTheme('light');
setTheme('dark');
setTheme('system');
```

## CSS переменные

### Основные переменные
- `--background` - фон страницы
- `--foreground` - основной текст
- `--card` - фон карточек
- `--card-foreground` - текст карточек
- `--primary` - основной цвет
- `--secondary` - вторичный цвет
- `--muted` - приглушенный цвет
- `--border` - границы
- `--input` - поля ввода

### Брендовые переменные
- `--brand-graphite: 26 26 26`
- `--brand-white: 255 255 255`
- `--brand-purple: 139 92 246`
- `--brand-blue: 6 182 212`
- `--brand-neon: 0 212 255`

## Темная тема

### Особенности
- Более темный фон (`--background: 10 10% 5%`)
- Усиленные эффекты свечения
- Адаптированные градиенты
- Улучшенная видимость карточек

### Специальные стили для темной темы
```css
.dark .hero-glow {
  /* Усиленный градиент для темной темы */
}

.dark .lab-card {
  /* Увеличенная прозрачность и свечение */
}
```

## Проверка работы

1. Откройте приложение
2. Найдите кнопку переключения тем в header (иконка солнца/луны)
3. Нажмите для переключения между светлой и темной темой
4. Убедитесь, что все элементы корректно адаптируются

## Troubleshooting

### Hydration mismatch
- В layout.tsx добавлен `suppressHydrationWarning`
- В theme-toggle.tsx используется `mounted` состояние

### Не работает переключение
- Проверьте что ThemeProvider обернут вокруг всего приложения
- Убедитесь что `attribute="class"` установлен в ThemeProvider

### Цвета не меняются
- Проверьте что используете CSS переменные: `hsl(var(--background))`
- Убедитесь что в Tailwind config установлен `darkMode: "class"`