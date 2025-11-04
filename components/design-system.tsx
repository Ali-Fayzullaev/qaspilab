'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function DesignSystem() {
  return (
    <div className="min-h-screen bg-background p-8 space-y-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="hero-glow text-h1">Qaspilab Design System</h1>
          <p className="text-muted-foreground text-body max-w-2xl mx-auto">
            Система дизайна для лаборатории инноваций с современными компонентами и анимациями
          </p>
        </div>

        {/* Color Palette */}
        <Card className="lab-card">
          <CardHeader>
            <CardTitle className="text-h2">Цветовая палитра</CardTitle>
            <CardDescription>Основные цвета бренда Qaspilab</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="space-y-2">
              <div className="w-full h-20 bg-brand-graphite rounded-md"></div>
              <p className="text-sm font-medium">Graphite</p>
              <p className="text-xs text-muted-foreground">#1A1A1A</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-20 bg-brand-white border rounded-md"></div>
              <p className="text-sm font-medium">White</p>
              <p className="text-xs text-muted-foreground">#FFFFFF</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-20 bg-brand-purple rounded-md"></div>
              <p className="text-sm font-medium">Purple</p>
              <p className="text-xs text-muted-foreground">#8B5CF6</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-20 bg-brand-blue rounded-md"></div>
              <p className="text-sm font-medium">Blue</p>
              <p className="text-xs text-muted-foreground">#06B6D4</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-20 bg-brand-neon rounded-md"></div>
              <p className="text-sm font-medium">Neon</p>
              <p className="text-xs text-muted-foreground">#00D4FF</p>
            </div>
          </CardContent>
        </Card>

        {/* Typography */}
        <Card className="lab-card">
          <CardHeader>
            <CardTitle className="text-h2">Типографика</CardTitle>
            <CardDescription>Иерархия шрифтов и размеры</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h1 className="text-h1">Заголовок H1 - 48px Bold</h1>
              <p className="text-xs text-muted-foreground mt-1">text-h1 | 48px | Bold</p>
            </div>
            <div>
              <h2 className="text-h2">Заголовок H2 - 36px Semibold</h2>
              <p className="text-xs text-muted-foreground mt-1">text-h2 | 36px | Semibold</p>
            </div>
            <div>
              <h3 className="text-h3">Заголовок H3 - 24px Medium</h3>
              <p className="text-xs text-muted-foreground mt-1">text-h3 | 24px | Medium</p>
            </div>
            <div>
              <p className="text-body">Основной текст - 16px Regular. Это пример текста для демонстрации размера и читаемости.</p>
              <p className="text-xs text-muted-foreground mt-1">text-body | 16px | Regular</p>
            </div>
          </CardContent>
        </Card>

        {/* Buttons */}
        <Card className="lab-card">
          <CardHeader>
            <CardTitle className="text-h2">Кнопки</CardTitle>
            <CardDescription>Варианты кнопок с эффектами</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-h3">Основные варианты</h4>
              <div className="flex flex-wrap gap-3">
                <Button variant="default">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="accent">Accent</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-h3">Ghost варианты</h4>
              <div className="flex flex-wrap gap-3">
                <Button variant="ghost">Ghost</Button>
                <Button variant="ghost-neon">Ghost Neon</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-h3">Outline варианты</h4>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline">Outline</Button>
                <Button variant="outline-purple">Purple</Button>
                <Button variant="outline-neon">Neon</Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-h3">Размеры</h4>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Badges */}
        <Card className="lab-card">
          <CardHeader>
            <CardTitle className="text-h2">Badges</CardTitle>
            <CardDescription>Значки для меток и статусов</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Form Elements */}
        <Card className="lab-card">
          <CardHeader>
            <CardTitle className="text-h2">Элементы формы</CardTitle>
            <CardDescription>Поля ввода и текстовые области</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input placeholder="your@email.com" type="email" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Имя</label>
                <Input placeholder="Ваше имя" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Сообщение</label>
              <Textarea placeholder="Напишите ваше сообщение..." rows={4} />
            </div>
          </CardContent>
        </Card>

        {/* Animations & Effects */}
        <Card className="lab-card">
          <CardHeader>
            <CardTitle className="text-h2">Анимации и эффекты</CardTitle>
            <CardDescription>Кастомные анимации и визуальные эффекты</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-h3">Hero Glow Effect</h4>
              <div className="p-6 bg-brand-graphite/5 rounded-lg">
                <h2 className="hero-glow text-h2 text-center">Qaspilab Innovation</h2>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-h3">Lab Gradient</h4>
              <div className="h-20 lab-gradient rounded-lg flex items-center justify-center">
                <p className="text-white font-semibold">Gradient Background</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-h3">Light Beam Effect</h4>
              <div className="relative p-6 bg-brand-graphite/10 rounded-lg light-beam">
                <p className="text-center font-semibold">Hover or wait for light beam</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-h3">Pulse Animation</h4>
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-brand-neon rounded-full pulse-subtle"></div>
              </div>
            </div>
          </CardContent>
        </Card>
        
      </div>
    </div>
  );
}