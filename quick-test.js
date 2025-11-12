// quick-test.js - Быстрый тест всех URL сайта
const https = require('https');
const http = require('http');

const urls = [
  'http://localhost:3000',
  'http://localhost:3000/ru', 
  'http://localhost:3000/en',
  'http://localhost:3000/kk',
  'http://localhost:3000/sitemap.xml',
  'http://localhost:3000/robots.txt'
];

async function testURL(url) {
  return new Promise((resolve) => {
    const client = url.startsWith('https:') ? https : http;
    
    client.get(url, (res) => {
      if (res.statusCode === 200) {
        console.log(`✅ ${url} - OK (${res.statusCode})`);
        resolve(true);
      } else {
        console.log(`⚠️  ${url} - Status: ${res.statusCode}`);
        resolve(false);
      }
    }).on('error', (err) => {
      console.log(`❌ ${url} - Error: ${err.code}`);
      resolve(false);
    });
  });
}

async function runTests() {
  console.log('🧪 Тестирование qaspilab.com URLs...');
  console.log('=' .repeat(40));
  
  const results = [];
  
  for (const url of urls) {
    const result = await testURL(url);
    results.push(result);
    await new Promise(resolve => setTimeout(resolve, 500)); // Пауза между запросами
  }
  
  const successCount = results.filter(r => r).length;
  
  console.log('\n📊 РЕЗУЛЬТАТЫ:');
  console.log(`✅ Успешных: ${successCount}/${urls.length}`);
  console.log(`❌ Ошибок: ${urls.length - successCount}/${urls.length}`);
  
  if (successCount === urls.length) {
    console.log('\n🎉 Все URL работают корректно!');
    console.log('✅ qaspilab.com готов к продакшену!');
  } else {
    console.log('\n⚠️  Некоторые URL недоступны');
    console.log('💡 Убедитесь, что dev сервер запущен: npm run dev');
  }
}

runTests().catch(console.error);