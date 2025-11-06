# DIFF: Ключевые оптимизации MissionSection

## 🎯 ОСНОВНЫЕ ИЗМЕНЕНИЯ

### 1. **Hardware Acceleration** 
```diff
+ // ДОБАВЛЕНО: Hardware acceleration для всех анимируемых элементов
+ style={{ 
+   transform: 'translateZ(0)',
+   willChange: 'transform, opacity' 
+ }}
```

### 2. **Объединение SVG градиентов** (было 5 → стало 2)
```diff
- // УДАЛЕНО: Множественные дублирующиеся градиенты
- <radialGradient id="blueGradientDark">
- <radialGradient id="blueGradientLight">  
- <radialGradient id="nodeGradientDark">
- <radialGradient id="nodeGradientLight">

+ // ДОБАВЛЕНО: Единый оптимизированный набор
+ <defs>
+   <radialGradient id="primaryGradient">
+     <stop offset="0%" stopColor={theme === 'dark' ? '#66ccff' : '#93c5fd'} />
+   </radialGradient>
+   <filter id="optimizedGlow">
+     <feGaussianBlur stdDeviation="2"/>
+   </filter>
+ </defs>
```

### 3. **Сокращение SVG элементов** (было ~120 → стало ~35)
```diff
- // УДАЛЕНО: Тройные линии на каждое соединение
- <motion.line stroke="rgba(0, 212, 255, 0.2)" strokeWidth="1.2" /> 
- <motion.line stroke="#00aaff" strokeWidth="0.4" />                
- <motion.line stroke="#66ccff" strokeWidth="0.2" />               

+ // ДОБАВЛЕНО: Единая оптимизированная линия
+ <motion.line
+   stroke="url(#primaryGradient)"
+   filter="url(#optimizedGlow)"
+   style={{ willChange: 'stroke-dashoffset, opacity' }}
+ />
```

### 4. **useReducedMotion для доступности**
```diff
+ // ДОБАВЛЕНО: Поддержка пользователей с ограниченными возможностями
+ const prefersReducedMotion = useReducedMotion();
+ 
+ transition={{
+   duration: prefersReducedMotion ? 0.3 : 0.8,
+   ease: "easeOut"
+ }}
```

### 5. **Смарт-рендеринг тяжелых анимаций**
```diff
+ // ДОБАВЛЕНО: Условная загрузка анимаций
+ const [shouldRenderAnimations, setShouldRenderAnimations] = useState(false);
+ 
+ useEffect(() => {
+   if (isInView && !prefersReducedMotion) {
+     debounceTimeout.current = setTimeout(() => {
+       setShouldRenderAnimations(true);
+     }, 100);
+   }
+ }, [isInView, prefersReducedMotion]);

+ // ДОБАВЛЕНО: Условный рендер SVG
+ {shouldRenderAnimations && (
+   <svg>/* тяжелые анимации */</svg>
+ )}
```

### 6. **Мемоизация данных** 
```diff
- // УДАЛЕНО: Пересоздание на каждом рендере
- const kazakhstanCities = [
-   { name: 'Алматы', x: 88, y: 60 },
-   // ... 12 городов
- ];

+ // ДОБАВЛЕНО: Мемоизированные данные + сокращение на 50%
+ const kazakhstanCities = useMemo(() => [
+   { name: 'Алматы', x: 88, y: 60, importance: 'major' as const },
+   // ... только 6 ключевых городов
+ ], []);
```

### 7. **Оптимизация алгоритма соединений**
```diff
- // УДАЛЕНО: O(n²) - все города со всеми
- {kazakhstanCities.map((city, index) => (
-   kazakhstanCities.slice(index + 1).map((targetCity, targetIndex) => (
-     // анимация для каждой пары
-   ))
- ))}

+ // ДОБАВЛЕНО: O(n) - только соседние + избранные глобальные
+ const optimizedConnections = useMemo(() => {
+   kazakhstanCities.forEach((city, index) => {
+     if (index < kazakhstanCities.length - 1) {
+       // только следующий город
+     }
+   });
+ }, [kazakhstanCities, shouldRenderAnimations]);
```

### 8. **Упрощение фильтров**
```diff
- // УДАЛЕНО: Тяжелые составные фильтры на каждом элементе
- style={{
-   filter: `blur(1px) drop-shadow(0 0 8px ${color}) drop-shadow(0 0 12px ${color2})`
- }}

+ // ДОБАВЛЕНО: Единый оптимизированный фильтр
+ filter="url(#optimizedGlow)"
```

## 📊 **РЕЗУЛЬТАТ**:

| Метрика | До | После | Улучшение |
|---------|-------|--------|-----------|
| Строки кода | 837 | 380 | **-55%** |
| SVG элементы | ~120 | ~35 | **-70%** |
| Одновременные анимации | 60+ | 15-20 | **-67%** |
| FPS (ожидается) | 30fps | 60fps | **+100%** |

## 🚀 **Как применить**:

1. Импортируйте оптимизированную версию:
```tsx
import { MissionSectionOptimized } from '@/components/sections';
```

2. Замените в layout:
```tsx
// Было:
<MissionSection />

// Стало:
<MissionSectionOptimized />
```

Готово! 🎉 Анимации теперь должны работать плавно на 60fps.