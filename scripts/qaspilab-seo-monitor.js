// Google Search Console Indexing and Monitoring Script
const { google } = require('googleapis');
const webmasters = google.webmasters('v3');

// Configuration
const QASPILAB_SITE_URL = 'https://qaspilab.com';
const SERVICE_ACCOUNT_KEY = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;

// Initialize Google Auth
const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(SERVICE_ACCOUNT_KEY || '{}'),
  scopes: ['https://www.googleapis.com/auth/webmasters']
});

// Priority URLs for Qaspilab brand recognition
const PRIORITY_URLS = [
  'https://qaspilab.com',
  'https://qaspilab.com/ru',
  'https://qaspilab.com/ru#services',
  'https://qaspilab.com/ru#about',
  'https://qaspilab.com/ru#faq',
  'https://qaspilab.com/ru#contact'
];

// Target keywords for monitoring
const TARGET_KEYWORDS = [
  'Qaspilab',
  'создание сайтов',
  'как сделать сайт',
  'разработка сайтов Казахстан',
  'заказать сайт Астана',
  'создать сайт Алматы',
  'веб-разработка Казахстан',
  'сайт под ключ',
  'лендинг пейдж',
  'интернет-магазин',
  'мобильные приложения Казахстан',
  'IT услуги Астана',
  'веб-дизайн Алматы',
  'профессиональная разработка сайтов'
];

class QaspilabSEOMonitor {
  constructor() {
    this.authClient = null;
  }

  async initialize() {
    this.authClient = await auth.getClient();
    console.log('🚀 Qaspilab SEO Monitor initialized');
  }

  // Submit URLs for indexing
  async submitForIndexing() {
    try {
      console.log('📤 Submitting Qaspilab URLs for indexing...');
      
      for (const url of PRIORITY_URLS) {
        await webmasters.urlInspection.index.inspect({
          auth: this.authClient,
          requestBody: {
            inspectionUrl: url,
            siteUrl: QASPILAB_SITE_URL
          }
        });
        
        console.log(`✅ Submitted: ${url}`);
        
        // Rate limiting
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      console.log('🎉 All Qaspilab URLs submitted successfully');
    } catch (error) {
      console.error('❌ Error submitting URLs:', error.message);
    }
  }

  // Check search performance
  async checkSearchPerformance(days = 7) {
    try {
      console.log(`📊 Checking Qaspilab search performance for last ${days} days...`);
      
      const endDate = new Date().toISOString().split('T')[0];
      const startDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
      
      const response = await webmasters.searchanalytics.query({
        auth: this.authClient,
        siteUrl: QASPILAB_SITE_URL,
        requestBody: {
          startDate,
          endDate,
          dimensions: ['query', 'page'],
          searchType: 'web',
          rowLimit: 25000
        }
      });
      
      const data = response.data.rows || [];
      
      // Filter for Qaspilab-related queries
      const qaspilabQueries = data.filter(row => 
        TARGET_KEYWORDS.some(keyword => 
          row.keys[0].toLowerCase().includes(keyword.toLowerCase())
        )
      );
      
      console.log('\n📈 Qaspilab Performance Summary:');
      console.log(`Total queries: ${data.length}`);
      console.log(`Qaspilab-related queries: ${qaspilabQueries.length}`);
      
      // Top performing queries
      const topQueries = qaspilabQueries
        .sort((a, b) => b.clicks - a.clicks)
        .slice(0, 10);
        
      console.log('\n🏆 Top 10 Qaspilab Queries:');
      topQueries.forEach((query, index) => {
        console.log(`${index + 1}. "${query.keys[0]}" - Clicks: ${query.clicks}, Impressions: ${query.impressions}, CTR: ${(query.ctr * 100).toFixed(2)}%`);
      });
      
      // Brand recognition check
      const brandQueries = data.filter(row => 
        row.keys[0].toLowerCase().includes('qaspilab') ||
        row.keys[0].toLowerCase().includes('касплиб') ||
        row.keys[0].toLowerCase().includes('каспилаб')
      );
      
      console.log(`\n🏷️ Brand Recognition: ${brandQueries.length} queries mention Qaspilab brand`);
      
      return {
        totalQueries: data.length,
        qaspilabQueries: qaspilabQueries.length,
        brandQueries: brandQueries.length,
        topQueries
      };
      
    } catch (error) {
      console.error('❌ Error checking performance:', error.message);
    }
  }

  // Monitor indexing status
  async checkIndexingStatus() {
    try {
      console.log('🔍 Checking Qaspilab indexing status...');
      
      for (const url of PRIORITY_URLS) {
        const response = await webmasters.urlInspection.index.inspect({
          auth: this.authClient,
          requestBody: {
            inspectionUrl: url,
            siteUrl: QASPILAB_SITE_URL
          }
        });
        
        const status = response.data.urlInspectionResult?.indexStatusResult;
        console.log(`📄 ${url}: ${status?.verdict || 'Unknown'}`);
        
        await new Promise(resolve => setTimeout(resolve, 500));
      }
      
    } catch (error) {
      console.error('❌ Error checking indexing status:', error.message);
    }
  }

  // Run daily monitoring
  async runDailyMonitoring() {
    await this.initialize();
    
    console.log('🎯 Starting Qaspilab Daily SEO Monitoring...\n');
    
    await this.submitForIndexing();
    console.log('\n');
    
    await this.checkIndexingStatus();
    console.log('\n');
    
    await this.checkSearchPerformance();
    
    console.log('\n✨ Qaspilab SEO monitoring completed!');
  }
}

// Export for use
module.exports = QaspilabSEOMonitor;

// Run if called directly
if (require.main === module) {
  const monitor = new QaspilabSEOMonitor();
  monitor.runDailyMonitoring().catch(console.error);
}