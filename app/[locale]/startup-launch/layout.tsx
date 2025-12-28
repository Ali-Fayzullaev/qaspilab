import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Запуск стартапов за 60 дней | Venture Launch | Qaspilab",
  description: "Превращаем бизнес-идеи в готовые продукты за 60 дней. MVP разработка, валидация рынка, go-to-market стратегия. От 3.9 млн ₸. Экспертная команда Qaspilab.",
  keywords: "venture launch, запуск MVP, стартап за 60 дней, бизнес идеи, валидация продукта, go-to-market, техническое сопровождение стартапов, MVP разработка Казахстан, продуктовая разработка, стартап инкубатор",
  openGraph: {
    title: "Venture Launch - Запуск стартапов за 60 дней | Qaspilab",
    description: "Полный цикл от идеи до выхода на рынок за 60 дней. MVP, валидация, маркетинг-тесты и менторство от экспертов Qaspilab.",
    url: "https://qaspilab.com/startup-launch",
    images: [
      {
        url: "https://qaspilab.com/startup-launch-og.jpg",
        width: 1200,
        height: 630,
        alt: "Qaspilab Venture Launch - Запуск стартапов"
      }
    ]
  },
  twitter: {
    title: "Venture Launch - Запуск стартапов за 60 дней",
    description: "🚀 От идеи до MVP за 60 дней. Валидация рынка + go-to-market стратегия. Экспертное сопровождение от команды Qaspilab.",
    images: ["https://qaspilab.com/startup-launch-og.jpg"]
  },
  alternates: {
    canonical: "https://qaspilab.com/startup-launch",
    languages: {
      'ru': 'https://qaspilab.com/ru/startup-launch',
      'en': 'https://qaspilab.com/en/startup-launch',
      'kk': 'https://qaspilab.com/kk/startup-launch',
    }
  }
};

export default function StartupLaunchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* JSON-LD для страницы услуг */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Venture Launch - Запуск стартапов",
            "description": "Полный цикл запуска стартапов за 60 дней: от идеи до MVP и выхода на рынок",
            "provider": {
              "@type": "Organization",
              "name": "Qaspilab",
              "url": "https://qaspilab.com"
            },
            "serviceType": "Startup Development",
            "areaServed": "Kazakhstan",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Venture Launch Package",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "MVP Development"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Market Validation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Go-to-Market Strategy"
                  }
                }
              ]
            },
            "offers": {
              "@type": "Offer",
              "price": "3900000",
              "priceCurrency": "KZT",
              "description": "Venture Launch - полный пакет запуска стартапа за 60 дней"
            }
          })
        }}
      />
      {children}
    </>
  );
}