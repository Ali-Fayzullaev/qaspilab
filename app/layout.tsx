import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Запуск стартапов и бизнес-идей | MVP за 60 дней | Qaspilab",
  description: "Qaspilab — запускаем бизнес-идеи до выхода на рынок за 60 дней. MVP, тест маркетинга, проверка рынка, менторство. Формат с оплатой 50/50. От 3.9 млн ₸.",
  keywords: "запуск стартапов, MVP разработка, бизнес идеи, Venture Launch, стартап за 60 дней, MVP за 2 месяца, go-to-market стратегия, валидация рынка, Qaspilab лаборатория, IT экспертиза, запуск продуктов, бизнес инкубатор Казахстан, стартап менторство, техническое сопровождение, product development, стартап консалтинг, цифровая трансформация, инновационные решения",
  authors: [{ name: "Qaspilab Innovation Laboratory" }],
  creator: "Qaspilab - IT Лаборатория",
  publisher: "Qaspilab",
  metadataBase: new URL('https://qaspilab.com'),
  alternates: {
    canonical: 'https://qaspilab.com',
    languages: {
      'ru': 'https://qaspilab.com/ru',
      'en': 'https://qaspilab.com/en', 
      'kk': 'https://qaspilab.com/kk',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://qaspilab.com',
    siteName: 'Qaspilab - IT Лаборатория',
    title: 'Запуск стартапов и бизнес-идей за 60 дней | Qaspilab',
    description: 'Превращаем идеи в готовые продукты за 60 дней. MVP, валидация рынка, go-to-market стратегия. Экспертное сопровождение от команды Qaspilab.',
    images: [
      {
        url: 'https://qaspilab.com/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Qaspilab - Запуск стартапов и MVP',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qaspilab - Запуск стартапов за 60 дней | MVP разработка',
    description: '🚀 Qaspilab запускает бизнес-идеи за 60 дней. От концепции до MVP и выхода на рынок. Экспертная команда, проверенные процессы.',
    images: ['https://qaspilab.com/logo.jpg'],
    site: '@qaspilab',
    creator: '@qaspilab',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'GXcy-fPu9QDGdvjz7TreRFt2PgmTASsHFQQX3cUxcIs',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="GXcy-fPu9QDGdvjz7TreRFt2PgmTASsHFQQX3cUxcIs" />
        <link rel="canonical" href="https://qaspilab.com" />
        <meta name="geo.region" content="KZ" />
        <meta name="geo.placename" content="Астана" />
        <meta name="geo.position" content="51.1694;71.4491" />
        <meta name="ICBM" content="51.1694, 71.4491" />
        
        {/* Дополнительные мета-теги для SEO */}
        <meta name="application-name" content="Qaspilab" />
        <meta name="apple-mobile-web-app-title" content="Qaspilab" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Мета-теги для поисковых систем */}
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="referrer" content="origin-when-cross-origin" />
        
        {/* Структурированные данные JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Qaspilab",
              "alternateName": ["Qaspilab Innovation Laboratory", "Каспилаб", "IT Лаборатория Qaspilab"],
              "description": "Qaspilab - №1 веб-студия в Казахстане по созданию сайтов! Лучшие цены, быстрые сроки, высокое качество. Создать сайт дешево от 50 000 ₸ в Астане и Алматы. Топ-рейтинг среди IT-компаний Казахстана. Сделаем сайт лучше конкурентов!",
              "url": "https://qaspilab.com",
              "logo": "https://qaspilab.com/logo.jpg",
              "image": "https://qaspilab.com/logo.jpg",
              "telephone": "+7 775 941 9359",
              "email": "hello@qaspilab.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "ул. Кабанбай батыра, 53",
                "addressLocality": "Астана",
                "addressRegion": "Акмолинская область",
                "postalCode": "010000",
                "addressCountry": "KZ"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 51.1694,
                "longitude": 71.4491
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday", 
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "priceRange": "$$",
              "currenciesAccepted": "KZT, USD",
              "paymentAccepted": "Cash, Credit Card, Bank Transfer",
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "Kazakhstan"
                },
                {
                  "@type": "City",
                  "name": "Астана"
                },
                {
                  "@type": "City",
                  "name": "Алматы"
                },
                {
                  "@type": "City",
                  "name": "Шымкент"
                },
                {
                  "@type": "City",
                  "name": "Актобе"
                },
                {
                  "@type": "City",
                  "name": "Караганда"
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Central Asia"
                }
              ],
              "serviceType": [
                "Создание сайтов дешево",
                "Лучшая разработка сайтов в Казахстане",
                "Топ веб-студия номер 1",
                "Сделать сайт недорого и быстро",
                "Лендинг от 50000 тенге",
                "Интернет-магазин дешево",
                "Премиум качество по низким ценам",
                "Лидер веб-разработки Казахстан",
                "Создание сайтов срочно",
                "Профессиональная разработка недорого",
                "Лучшие цены на сайты",
                "Топ-рейтинг IT-услуг",
                "Создать сайт лучше конкурентов"
              ],
              "knowsAbout": [
                "как сделать сайт",
                "создание сайтов Казахстан",
                "веб-разработка Астана",
                "разработка сайтов Алматы",
                "заказать сайт недорого",
                "профессиональная разработка",
                "JavaScript",
                "React",
                "Next.js",
                "Node.js",
                "WordPress",
                "дизайн интерфейсов",
                "мобильная разработка",
                "интернет-маркетинг"
              ],
              "sameAs": [
                "https://www.linkedin.com/company/qaspilab",
                "https://github.com/qaspilab",
                "https://t.me/qaspilab"
              ]
            })
          }}
        />
        
        {/* Данные об организации */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Qaspilab",
              "url": "https://qaspilab.com",
              "logo": "https://qaspilab.com/logo.jpg",
              "foundingDate": "2019",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Qaspilab Team"
                }
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+7 (727) 123-4567",
                "contactType": "customer service",
                "email": "hello@qaspilab.com",
                "availableLanguage": ["Russian", "English", "Kazakh"]
              },
              "address": {
                "@type": "PostalAddress", 
                "addressLocality": "Алматы",
                "addressCountry": "KZ"
              }
            })
          }}
        />
        
        {/* Данные о веб-сайте */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Qaspilab",
              "alternateName": "Qaspilab Innovation Laboratory",
              "url": "https://qaspilab.com",
              "description": "Разработка сайтов, мобильных приложений и IT-решений в Алматы",
              "inLanguage": ["ru", "en", "kk"],
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://qaspilab.com/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Qaspilab",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://qaspilab.com/logo.jpg"
                }
              }
            })
          }}
        />
        
        {/* Breadcrumb разметка */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Главная",
                  "item": "https://qaspilab.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "О нас",
                  "item": "https://qaspilab.com#about"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Услуги",
                  "item": "https://qaspilab.com#services"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Контакты",
                  "item": "https://qaspilab.com#contact"
                }
              ]
            })
          }}
        />
        
        {/* FAQ Структурированные данные */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Как сделать сайт в Qaspilab?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Создание сайта в Qaspilab начинается с бесплатной консультации. Мы анализируем ваши потребности, создаем дизайн, разрабатываем функционал и запускаем сайт. Полный цикл от идеи до результата."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Сколько стоит создание сайта в Qaspilab?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Стоимость создания сайта в Qaspilab начинается от 50 000 ₸ для лендинга. Цена зависит от сложности проекта, функционала и дизайна. Предоставляем бесплатную оценку стоимости."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Почему Qaspilab лучше конкурентов?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Qaspilab - №1 веб-студия в Казахстане! Мы предлагаем лучшие цены от 50000₸, создаем сайты за 7 дней, гарантируем премиум качество. 100+ довольных клиентов, топ-рейтинг среди IT-компаний. Работаем лучше и дешевле конкурентов!"
                  }
                },
                {
                  "@type": "Question",
                  "name": "В каких городах Казахстана работает Qaspilab?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Qaspilab работает по всему Казахстану: Астана, Алматы, Шымкент, Караганда, Актобе и другие города. Мы предоставляем услуги создания сайтов удаленно и офлайн."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Где создать сайт дешевле всего в Казахстане?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "В Qaspilab! Мы предлагаем самые низкие цены на создание сайтов в Казахстане - от 50000₸. При этом качество остается премиум-уровня. Никто не сделает дешевле нас!"
                  }
                },
                {
                  "@type": "Question",
                  "name": "Кто быстрее всех создает сайты в Казахстане?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Qaspilab - рекордсмены по скорости! Создаем качественные сайты за 7 дней. Наша команда работает быстрее любых конкурентов, не жертвуя качеством."
                  }
                }
              ]
            })
          }}
        />
        
        {/* Brand и вариации названия */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Brand",
              "name": "Qaspilab",
              "alternateName": ["Касплиб", "Qaspi Lab", "Qaspi-lab", "QaspiLab", "лучшая веб-студия", "топ разработчики", "номер 1 в Казахстане"],
              "url": "https://qaspilab.com",
              "logo": "https://qaspilab.com/logo.jpg",
              "description": "Qaspilab - №1 бренд в создании сайтов в Казахстане! Лучше, быстрее и дешевле конкурентов. Топ-рейтинг, премиум качество, лучшие цены!"
            })
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
