# PowerShell скрипт для диагностики сборки qaspilab.com

Write-Host "🔧 Диагностика проблем сборки qaspilab.com" -ForegroundColor Cyan
Write-Host "=" * 50

# 1. Проверка версий
Write-Host "`n📋 Версии зависимостей:" -ForegroundColor Yellow
Write-Host "Node.js: $(node --version)"
Write-Host "npm: $(npm --version)"

# 2. Очистка кеша
Write-Host "`n🧹 Очистка кеша..." -ForegroundColor Yellow
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue
Write-Host "✅ Кеш очищен" -ForegroundColor Green

# 3. Установка зависимостей
Write-Host "`n📦 Установка зависимостей..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Зависимости установлены" -ForegroundColor Green
} else {
    Write-Host "❌ Ошибка установки зависимостей" -ForegroundColor Red
    exit 1
}

# 4. Проверка файлов конфигурации
Write-Host "`n🔍 Проверка конфигурации..." -ForegroundColor Yellow

if (Test-Path "next.config.ts") {
    Write-Host "✅ next.config.ts найден" -ForegroundColor Green
} else {
    Write-Host "❌ next.config.ts не найден" -ForegroundColor Red
}

if (Test-Path "tsconfig.json") {
    Write-Host "✅ tsconfig.json найден" -ForegroundColor Green
} else {
    Write-Host "❌ tsconfig.json не найден" -ForegroundColor Red
}

# 5. Проверка основных файлов
Write-Host "`n🔍 Проверка структуры..." -ForegroundColor Yellow
$files = @("app/layout.tsx", "app/page.tsx", "app/[locale]/layout.tsx", "app/[locale]/page.tsx")

foreach ($file in $files) {
    if (Test-Path $file) {
        Write-Host "✅ $file найден" -ForegroundColor Green
    } else {
        Write-Host "❌ $file не найден" -ForegroundColor Red
    }
}

# 6. Попытка сборки с таймаутом
Write-Host "`n🏗️ Запуск сборки..." -ForegroundColor Yellow
Write-Host "Если сборка зависнет, нажмите Ctrl+C через 2-3 минуты" -ForegroundColor Yellow

$job = Start-Job -ScriptBlock { 
    Set-Location $using:PWD
    npm run build 
}

# Ждем 180 секунд (3 минуты)
$result = Wait-Job $job -Timeout 180

if ($result) {
    $output = Receive-Job $job
    Write-Host $output
    
    if ($job.State -eq "Completed") {
        Write-Host "✅ Сборка завершена успешно!" -ForegroundColor Green
    } else {
        Write-Host "❌ Сборка завершилась с ошибкой" -ForegroundColor Red
    }
} else {
    Write-Host "⏰ Сборка не завершилась за 3 минуты - останавливаем" -ForegroundColor Yellow
    Stop-Job $job
    Remove-Job $job
    
    # Альтернативные решения
    Write-Host "`n💡 Альтернативные решения:" -ForegroundColor Cyan
    Write-Host "1. Увеличить память Node.js:"
    Write-Host '   $env:NODE_OPTIONS="--max-old-space-size=4096"'
    Write-Host "2. Сборка без оптимизаций:"
    Write-Host "   npm run build -- --no-optimization"
    Write-Host "3. Проверить ресурсы сервера:"
    Write-Host "   Get-Process node"
    Write-Host "4. Использовать упрощенный next.config.ts"
}

Remove-Job $job -Force -ErrorAction SilentlyContinue

Write-Host "`n🎯 Диагностика завершена" -ForegroundColor Cyan