import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import { LanguageProvider } from '@/lib/language-context';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ClientLayout from '@/app/client-layout';

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Создание сайтов и веб-приложений | Qaspilab - IT Лаборатория Казахстан",
  description: "Разработка сайтов, мобильных приложений и IT-решений в Алматы. Полный цикл создания цифровых продуктов от идеи до запуска. Заказать сайт недорого.",
  keywords: "создание сайтов, разработка сайтов, веб-разработка, мобильные приложения, IT услуги, Алматы, Казахстан, заказать сайт, разработка под ключ, веб-дизайн",
  authors: [{ name: "Qaspilab Team" }],
  creator: "Qaspilab Innovation Laboratory",
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
    siteName: 'Qaspilab',
    title: 'Создание сайтов и веб-приложений | Qaspilab',
    description: 'Разработка сайтов, мобильных приложений и IT-решений в Алматы. Полный цикл создания цифровых продуктов от идеи до запуска.',
    images: [
      {
        url: 'https://qaspilab.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Qaspilab - Создание сайтов и IT-решений',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Создание сайтов и веб-приложений | Qaspilab',
    description: 'Разработка сайтов, мобильных приложений и IT-решений в Алматы',
    images: ['https://qaspilab.com/og-image.jpg'],
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
        <meta name="geo.placename" content="Алматы" />
        <meta name="geo.position" content="43.238949;76.889709" />
        <meta name="ICBM" content="43.238949, 76.889709" />
        
        {/* Структурированные данные JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Qaspilab",
              "alternateName": "Qaspilab Innovation Laboratory",
              "description": "Разработка сайтов, мобильных приложений и IT-решений в Алматы. Полный цикл создания цифровых продуктов от идеи до запуска.",
              "url": "https://qaspilab.com",
              "logo": "https://qaspilab.com/logo.png",
              "image": "https://qaspilab.com/og-image.jpg",
              "telephone": "+7 (727) 123-4567",
              "email": "hello@qaspilab.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "ул. Примерная, 123",
                "addressLocality": "Алматы",
                "addressRegion": "Алматинская область",
                "postalCode": "050000",
                "addressCountry": "KZ"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 43.238949,
                "longitude": 76.889709
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
                  "@type": "Country", 
                  "name": "Russia"
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Central Asia"
                }
              ],
              "serviceType": [
                "Разработка веб-сайтов",
                "Создание мобильных приложений",
                "IT консалтинг",
                "UI/UX дизайн",
                "Веб-дизайн",
                "Техническое SEO"
              ],
              "knowsAbout": [
                "веб-разработка",
                "мобильная разработка", 
                "создание сайтов",
                "JavaScript",
                "React",
                "Next.js",
                "Node.js",
                "дизайн интерфейсов"
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
              "logo": "https://qaspilab.com/logo.png",
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
                  "url": "https://qaspilab.com/logo.png"
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
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">
                <ClientLayout>
                  {children}
                </ClientLayout>
              </main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
