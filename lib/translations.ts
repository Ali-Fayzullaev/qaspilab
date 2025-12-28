// lib/translations.ts

export const translations = {
  en: {
    common: {
      home: "Home",
      about: "About",
      services: "Services",
      startupLaunch: "Startup Launch",
      cases: "Cases",
      team: "Team",
      contact: "Contact",
      language: "Language",
      viewGallery: "View Gallery",
    },
    hero: {
      title: "Business Idea Launch in 60 Days",
      subtitle: "From idea → to MVP and first commercial signals",
      slogan: "We validate ideas with market, create products, launch go-to-market and support at the start.",
      description: "Work format: 2 stages of 30 days each.",
      cta: "Book Idea Analysis",
      learnMore: "Learn Conditions",
      priceFrom: "From 3.9 million ₸",
      paymentTerms: "50% - at development start, 50% - after first market testing"
    },
    
    // Новая секция startup launch
    startupLaunch: {
      whyImportant: {
        title: "Why This Is Important",
        subtitle: "Problems we solve with our service",
        problems: [
          {
            title: "Self-launch mistakes",
            description: "Avoid costly errors when launching independently"
          },
          {
            title: "High team costs", 
            description: "No need to hire expensive full-time team"
          },
          {
            title: "Long timelines",
            description: "We deliver results in just 60 days"
          },
          {
            title: "Result uncertainty",
            description: "Clear process with market validation"
          }
        ]
      },
      
      howWeWork: {
        title: "How We Work",
        subtitle: "Step-by-step process",
        steps: [
          {
            step: "01",
            title: "Idea Analysis", 
            description: "CustDev, hypothesis validation, market and pain analysis"
          },
          {
            step: "02",
            title: "UVP Formation",
            description: "Left/right sides positioning"  
          },
          {
            step: "03", 
            title: "MVP Development",
            description: "UI/UX, prototype, technical implementation"
          },
          {
            step: "04",
            title: "Go-to-Market",
            description: "Marketing setup, ad campaign testing, lead generation"
          },
          {
            step: "05",
            title: "Mentorship & Handover", 
            description: "Strategic support, documentation, scaling recommendations"
          }
        ]
      },
      
      whatClientGets: {
        title: "What Client Gets",
        deliverables: [
          "MVP / working product",
          "Market validation",
          "First customer feedback", 
          "Marketing tests",
          "Development strategy"
        ]
      },
      
      workFormat: {
        title: "Work Format + Timelines",
        stages: [
          {
            stage: "Stage 1",
            tasks: "Development and packaging",
            timeline: "30 days"
          },
          {
            stage: "Stage 2", 
            tasks: "Validation and marketing testing",
            timeline: "30 days"
          }
        ],
        payment: {
          title: "Payment:",
          terms: ["50% prepayment", "50% after first month market entry"]
        }
      },
      
      pricing: {
        title: "Pricing",
        package: {
          name: "Venture Launch",
          price: "From 3,900,000 ₸", 
          duration: "60 days",
          includes: [
            "5 core deliverables",
            "Mentorship",
            "Market validation",
            "Go-to-market strategy"
          ]
        },
        cta: "Book Idea Analysis"
      },
      
      whyQaspilab: {
        title: "Why Qaspilab",
        reasons: [
          {
            title: "5+ years product development experience",
            description: "Proven track record in creating successful products"
          },
          {
            title: "Real case studies", 
            description: "Portfolio of launched startups and MVPs"
          },
          {
            title: "Expert team",
            description: "Experienced developers, designers, and strategists"
          },
          {
            title: "Work as temporary founders",
            description: "We treat your project as our own"
          },
          {
            title: "Transparency and clear stages",
            description: "Regular reporting and milestone tracking"
          }
        ]
      },
      
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            question: "What's included in MVP?",
            answer: "Core functionality, user interface, basic integrations, and market-ready product version for initial testing."
          },
          {
            question: "How is success measured?",
            answer: "Market validation metrics, user engagement, conversion rates, and feedback quality from real users."
          },
          {
            question: "What if project doesn't succeed?",
            answer: "We provide honest market validation. Success isn't guaranteed, but you get clear data and recommendations."
          },
          {
            question: "What guarantees do you provide?",
            answer: "We guarantee delivery of all agreed deliverables within timeline and quality standards."
          },
          {
            question: "Why 60 days?",
            answer: "Optimal timeframe for MVP development and initial market validation without losing momentum."
          }
        ]
      }
    },
    
    about: {
      title: "We're not an agency. We're a laboratory.",
      subtitle: "Innovation at the Heart of Everything We Do",
      description:
        "Qaspilab is where ideas take shape. Where entrepreneurs, designers and engineers come together to create not just code — but living products.",
      expertise: "Our Expertise",
      expertiseItems: [
        "Startup Launch & MVP Development",
        "Full-Stack Web Development", 
        "Mobile App Development",
        "AI & Machine Learning Solutions",
        "Cloud Infrastructure & DevOps",
        "UI/UX Design & Branding",
      ],
      teamImages: [
        {
          alt: "Qaspilab team at work",
          title: "Our Team",
          description:
            "Talented developers, designers and engineers creating the future of technology",
        },
        {
          alt: "Qaspilab team member",
          title: "Innovative Approach",
          description:
            "Every team member brings unique skills and creativity",
        },
        {
          alt: "Team workflow process",
          title: "Collaborative Work",
          description:
            "We believe in the power of collective creativity and mutual support",
        },
        {
          alt: "Creative process",
          title: "Creative Process",
          description:
            "From idea to implementation - every step is handled with attention to detail",
        },
        {
          alt: "Qaspilab team",
          title: "Unified Goal",
          description:
            "United by a common mission to create outstanding products",
        },
      ],
    },
    mission: {
      title: "Our Mission",
      startPremiumJourney: "Start the Premium Journey",
      subtitle: "Bridging Innovation and Reality",
      description:
        "To empower businesses through cutting-edge technology solutions that drive growth, efficiency, and digital transformation in an ever-evolving world.",
      values: "Core Values",
      valuesItems: [
        {
          title: "Innovation First",
          description: "Constantly pushing boundaries with creative solutions",
        },
        {
          title: "Quality Excellence",
          description: "Delivering robust, scalable, and maintainable code",
        },
        {
          title: "Client Success",
          description: "Your success is our ultimate measure of achievement",
        },
      ],
    },
    missionSection: {
      title: "We are building the digital future of Kazakhstan.",
      p1: "Our products help companies work faster,",
      p2: "entrepreneurs launch new ideas,",
      p3: "and people interact with technology easily and with pleasure.",
      p4: "We believe that Kazakhstan is capable of creating not just IT solutions,",
      p5: "but global products that will be used all over the world.",
    },
    workflow: {
      exploreGlobalNetwork: "Explore Our Global Network",
      title: "We create as we think. Simple. Transparent. Fast.",
      processTitle: "Our Process",
      subtitle: "From Concept to Reality",
      premiumWorkflowDescription:
        "Experience our enhanced premium workflow, designed to deliver exceptional results with added transparency, efficiency, and collaboration at every step.",
      steps: [
        {
          step: "01",
          title: "Discovery & Strategy",
          description:
            "Understanding your needs, goals, and market requirements",
        },
        {
          step: "02",
          title: "Design & Planning",
          description:
            "Creating user-centered designs and technical architecture",
        },
        {
          step: "03",
          title: "Development & Testing",
          description:
            "Building robust solutions with rigorous quality assurance",
        },
        {
          step: "04",
          title: "Launch & Support",
          description: "Deployment, monitoring, and ongoing maintenance",
        },
      ],
    },
    whyUs: {
      title: "Why Choose Qaspilab",
      subtitle: "Excellence in Every Detail",
      ideasGenerating: "Ideas: Generating",
      dataFlow: "Data Flow",
      liquidAnalysis: "Liquid Analysis: Active",
      premiumLabAlt: "Premium Qaspilab Laboratory",
      labStatus: "Lab Status: Active",
      reasons: [
        {
          title: "Proven Expertise",
          description:
            "Years of experience delivering successful projects across industries",
        },
        {
          title: "Cutting-Edge Technology",
          description:
            "Always using the latest tools and frameworks for optimal results",
        },
        {
          title: "Agile Methodology",
          description: "Flexible, iterative approach ensuring project success",
        },
        {
          title: "24/7 Support",
          description:
          "Round-the-clock support to keep your systems running smoothly",
        },
      ],
    },
    globalReach: {
      title: "Global Reach, Local Expertise",
      globalConnectionDescription: "Connect with experts worldwide to bring your idea to life.",
      subtitle: "Serving Clients Worldwide",
      description:
        "From our base in Almaty, Kazakhstan, we've successfully delivered projects for clients across continents, bringing world-class technology solutions to businesses of all sizes.",
      stats: {
        projects: "100+ Projects Delivered",
        clients: "50+ Happy Clients",
        countries: "15+ Countries Served",
        experience: "5+ Years Experience",
      },
    },
    faq: {
      badge: "Answers",
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about building with Qaspilab",
      items: [
        {
          question: "How quickly can you launch a new website?",
          answer:
            "Most landing pages go live within 3-4 days. Complex products with integrations can take 6-10 weeks depending on scope.",
        },
        {
          question: "Do you handle strategy and design as well?",
          answer:
            "Yes. We start with a discovery sprint, define positioning, craft UX/UI, and then move into development and QA.",
        },
        {
          question: "What industries do you work with most often?",
          answer:
            "We collaborate with tech startups, service companies, education, fintech, and manufacturing teams across Kazakhstan and beyond.",
        },
        {
          question: "Will you help with SEO and analytics setup?",
          answer:
            "Every project ships with on-page SEO, Google Search Console integration, analytics dashboards, and performance monitoring.",
        },
        {
          question: "Can you integrate with our existing systems?",
          answer:
            "Our engineers handle CRM, ERP, payment gateways, and custom APIs. We design reliable middleware when needed.",
        },
        {
          question: "How do we start working together?",
          answer:
            "Share your idea through the contact form or email. We'll schedule a workshop, align budgets, and sign a project roadmap.",
        },
      ],
    },
    cta: {
      title: "Ready to Transform Your Ideas?",
      subtitle: "Let's Build Something Amazing Together",
      description:
        "Get in touch with our team to discuss your project and discover how we can help you achieve your digital goals.",
      button: "Start Your Project",
      contactInfo: {
        email: "hello@qaspilab.com",
        phone: "+7 (727) 123-4567",
        address: "Almaty, Kazakhstan",
      },
    },
    // --- НОВЫЙ БЛОК ---
    ctaForm: {
      title: "Have an idea?",
      subtitle: "Come to the laboratory.",
      description: "We will turn it into a product people will use.",
      buttonText: "Send Idea",

      nameLabel: "💫 Your Name *",
      namePlaceholder: "Enter your name",
      contactLabel: "📞 Phone Number or Email *",
      contactPlaceholder: "+7 777 123 45 67 or email@example.com",
      descriptionLabel: "💡 Brief description of your idea *",
      descriptionPlaceholder:
        "Describe your idea in detail, what you want to create, what features it should have...",
      budgetLabel: "💰 Estimated Budget",

      budgetOptions: [
        { value: "", label: "Select budget" },
        { value: "0-50000", label: "Up to 50,000 ₸" },
        { value: "50000-200000", label: "50,000 - 200,000 ₸" },
        { value: "200000-500000", label: "200,000 - 500,000 ₸" },
        { value: "500000-1000000", label: "500,000 - 1,000,000 ₸" },
        { value: "1000000+", label: "Over 1,000,000 ₸" },
        { value: "discuss", label: "Discussed individually" },
      ],
      submitLoading: "🚀 Sending your idea...",
      submitError: "An error occurred while sending. Please try again.",
      successTitle: "🎉 Great!",
      successMessage: "Your idea has been successfully submitted! We will contact you soon to discuss the project.",
      successThankYou: "Thank you for trusting our laboratory! Your idea is already in the reliable hands of our experts."
    },
    // --- КОНЕЦ НОВОГО БЛОКА ---
    footer: {
      slogan: "Innovation Laboratory",
      description: "Transforming ideas into cutting-edge solutions",
      quickLinks: "Quick Links",
      connect: "Connect",
      location: "Almaty, Kazakhstan",
      email: "hello@qaspilab.com",
      copyright: "© 2025 Qaspilab. All rights reserved.",
      madeWith: "Made with ❤️ in Kazakhstan",
    },
  },
  
  ru: {
    common: {
      home: "Главная",
      about: "О нас", 
      services: "Услуги",
      startupLaunch: "Запуск стартапов",
      cases: "Кейсы",
      team: "Команда", 
      contact: "Контакты",
      language: "Язык",
      viewGallery: "Посмотреть галерею",
    },
    hero: {
      title: "Запуск бизнес-идей за 60 дней",
      subtitle: "От идеи → до MVP и первых коммерческих сигналов",
      slogan: "Проверяем идеи рынком, делаем продукт, запускаем go-to-market и сопровождаем на старте.",
      description: "Формат работы: 2 этапа по 30 дней.",
      cta: "Записаться на разбор идеи",
      learnMore: "Узнать условия",
      priceFrom: "От 3.9 млн ₸",
      paymentTerms: "50% — при старте разработки, 50% — после первого тестирования выхода на рынок"
    },
    
    // Новая секция запуска стартапов
    startupLaunch: {
      whyImportant: {
        title: "Почему это важно",
        subtitle: "Проблемы, которые решает наш сервис",
        problems: [
          {
            title: "Ошибки при самостоятельном запуске",
            description: "Избежание дорогостоящих ошибок при самостоятельном запуске"
          },
          {
            title: "Высокие затраты на команду",
            description: "Не нужно нанимать дорогую штатную команду"
          },
          {
            title: "Долгие сроки", 
            description: "Мы доставляем результат всего за 60 дней"
          },
          {
            title: "Неопределённость результата",
            description: "Четкий процесс с проверкой рынком"
          }
        ]
      },
      
      howWeWork: {
        title: "Как мы работаем",
        subtitle: "Пошаговый процесс",
        steps: [
          {
            step: "01",
            title: "Анализ идеи",
            description: "CustDev, валидация гипотезы, анализ рынка и боли"
          },
          {
            step: "02", 
            title: "Формирование УТП",
            description: "Левая/правая стороны, позиционирование"
          },
          {
            step: "03",
            title: "Разработка MVP", 
            description: "UI/UX, прототип, техническая реализация"
          },
          {
            step: "04",
            title: "Go-to-Market",
            description: "Настройка маркетинга, тест рекламных кампаний, сбор лидов"
          },
          {
            step: "05",
            title: "Менторство и передача",
            description: "Стратегическое сопровождение, документация, рекомендации по масштабированию"
          }
        ]
      },
      
      whatClientGets: {
        title: "Что получает клиент", 
        deliverables: [
          "MVP / работающий продукт",
          "Проверка рынка",
          "Первая обратная связь от клиентов",
          "Маркетинговые тесты", 
          "Стратегия развития"
        ]
      },
      
      workFormat: {
        title: "Формат работ + сроки",
        stages: [
          {
            stage: "Этап 1",
            tasks: "Разработка и упаковка", 
            timeline: "30 дней"
          },
          {
            stage: "Этап 2",
            tasks: "Валидация и тест маркетинга",
            timeline: "30 дней"
          }
        ],
        payment: {
          title: "Оплата:",
          terms: ["50% предоплата", "50% после первого месяца выхода на рынок"]
        }
      },
      
      pricing: {
        title: "Стоимость",
        package: {
          name: "Venture Launch",
          price: "От 3 900 000 ₸",
          duration: "60 дней",
          includes: [
            "5 базовых deliverables", 
            "Менторство",
            "Проверка рынка",
            "Go-to-market стратегия"
          ]
        },
        cta: "Записаться на разбор идеи"
      },
      
      whyQaspilab: {
        title: "Почему Qaspilab",
        reasons: [
          {
            title: "5+ лет опыта в разработке продуктов",
            description: "Доказанный послужной список создания успешных продуктов"
          },
          {
            title: "Реальные кейсы",
            description: "Портфолио запущенных стартапов и MVP"
          },
          {
            title: "Команда экспертов", 
            description: "Опытные разработчики, дизайнеры и стратеги"
          },
          {
            title: "Работаем как временные фаундеры",
            description: "Относимся к вашему проекту как к своему"
          },
          {
            title: "Отчётность и прозрачные этапы",
            description: "Регулярная отчетность и отслеживание этапов"
          }
        ]
      },
      
      faq: {
        title: "Частые вопросы",
        items: [
          {
            question: "Что входит в MVP?",
            answer: "Основной функционал, пользовательский интерфейс, базовые интеграции и готовая к рынку версия продукта для первичного тестирования."
          },
          {
            question: "Как оценивается успех?", 
            answer: "Метрики валидации рынка, вовлеченность пользователей, конверсии и качество обратной связи от реальных пользователей."
          },
          {
            question: "Что если проект не выстрелит?",
            answer: "Мы предоставляем честную валидацию рынка. Успех не гарантирован, но вы получите четкие данные и рекомендации."
          },
          {
            question: "Какие гарантии?",
            answer: "Гарантируем поставку всех согласованных deliverables в срок и с соблюдением стандартов качества."
          },
          {
            question: "Почему 60 дней?",
            answer: "Оптимальные сроки для разработки MVP и первичной валидации рынка без потери импульса."
          }
        ]
      }
    },
    
    about: {
      title: "Мы не агентство. Мы лаборатория.",
      subtitle: "Инновации в основе всего, что мы делаем",
      description:
        "Qaspilab — это IT-лаборатория, где идеи обретают форму. Здесь предприниматели, дизайнеры и инженеры объединяются для создания не просто кода — а живых продуктов.",
      expertise: "Наша экспертиза",
      expertiseItems: [
        "Запуск стартапов и разработка MVP",
        "Full-Stack веб-разработка",
        "Разработка мобильных приложений", 
        "AI и Machine Learning решения",
        "Облачная инфраструктура и DevOps",
        "UI/UX дизайн и брендинг",
      ],
      teamImages: [
        {
          alt: "Команда Qaspilab за работой",
          title: "Наша команда",
          description:
            "Талантливые разработчики, дизайнеры и инженеры, создающие будущее технологий",
        },
        {
          alt: "Член команды Qaspilab",
          title: "Инновационный подход",
          description:
            "Каждый участник команды привносит уникальные навыки и креативность",
        },
        {
          alt: "Рабочий процесс команды",
          title: "Совместная работа",
          description:
            "Мы верим в силу коллективного творчества и взаимной поддержки",
        },
        {
          alt: "Творческий процесс",
          title: "Творческий процесс",
          description:
            "От идеи до реализации - каждый этап проходит с вниманием к деталям",
        },
        {
          alt: "Команда Qaspilab",
          title: "Единая цель",
          description:
            "Объединенные общей миссией создания выдающихся продуктов",
        },
      ],
    },
    mission: {
      title: "Наша миссия",
      startPremiumJourney: "Начать премиальное путешествие",
      subtitle: "Связываем инновации с реальностью",
      description:
        "Расширять возможности бизнеса через передовые технологические решения, которые стимулируют рост, эффективность и цифровую трансформацию в постоянно развивающемся мире.",
      values: "Основные ценности",
      valuesItems: [
        {
          title: "Инновации прежде всего",
          description: "Постоянно расширяем границы с креативными решениями",
        },
        {
          title: "Превосходное качество",
          description: "Создаём надёжный, масштабируемый и поддерживаемый код",
        },
        {
          title: "Успех клиентов",
          description: "Ваш успех — наш главный показатель достижений",
        },
      ],
    },
    missionSection: {
      title: "Мы строим цифровое будущее Казахстана.",
      p1: "Наши продукты помогают компаниям работать быстрее,",
      p2: "предпринимателям — запускать новые идеи,",
      p3: "а людям — взаимодействовать с технологиями легко и с удовольствием.",
      p4: "Мы верим, что Казахстан способен создавать не просто IT-решения,",
      p5: "а глобальные продукты, которыми будут пользоваться во всём мире.",
    },
    workflow: {
      exploreGlobalNetwork: "Изучите нашу глобальную сеть",
      title: "Мы создаём, как думаем. Просто. Прозрачно. Быстро.",
      processTitle: "Наш процесс",
      premiumWorkflowDescription:
        "Ощутите наш улучшенный премиальный рабочий процесс, разработанный для достижения исключительных результатов с повышенной прозрачностью, эффективностью и сотрудничеством на каждом этапе.",
      subtitle: "От концепции к реальности",
      steps: [
        {
          step: "01",
          title: "Исследование и стратегия",
          description: "Понимание ваших потребностей, целей и требований рынка",
        },
        {
          step: "02",
          title: "Дизайн и планирование",
          description:
            "Создание пользовательского дизайна и технической архитектуры",
        },
        {
          step: "03",
          title: "Разработка и тестирование",
          description: "Создание надёжных решений с тщательным контролем качества",
        },
        {
          step: "04",
          title: "Запуск и поддержка",
          description: "Развёртывание, мониторинг и постоянное обслуживание",
        },
      ],
    },
    whyUs: {
      title: "Почему выбирают Qaspilab",
      subtitle: "Превосходство в каждой детали",
      ideasGenerating: "Идеи: Генерируются",
      dataFlow: "Поток данных: 12.5 Гбит/с",
      liquidAnalysis: "Анализ жидкости: Активен",
      premiumLabAlt: "Премиальная лаборатория Qaspilab",
      labStatus: "Статус лаборатории: Активен",
      reasons: [
        {
          title: "Проверенная экспертиза",
          description:
            "Годы опыта успешной реализации проектов в различных отраслях",
        },
        {
          title: "Передовые технологии",
          description:
            "Всегда используем новейшие инструменты и фреймворки для оптимальных результатов",
        },
        {
          title: "Agile методология",
          description: "Гибкий, итеративный подход, обеспечивающий успех проекта",
        },
        {
          title: "Поддержка 24/7",
          description:
            "Круглосуточная поддержка для бесперебойной работы ваших систем",
        },
      ],
    },
    globalReach: {
      title: "Глобальный охват, местная экспертиза",
      subtitle: "Обслуживаем клиентов по всему миру",
      globalConnectionDescription: "Связь с экспертами по всему миру для реализации вашей идеи.",
      description:
        "Из нашего головного офиса в Астане мы обслуживаем клиентов по всему Казахстану: Алматы, Караганде, Шымкенту, Актобе и другим городам. Успешно реализовали проекты для компаний любого размера, предоставляя технологические решения мирового класса.",
      stats: {
        projects: "100+ реализованных проектов",
        clients: "50+ довольных клиентов",
        countries: "15+ обслуживаемых стран",
        experience: "5+ лет опыта",
      },
    },
    faq: {
      badge: "Вопросы",
      title: "Ответы на популярные вопросы",
      subtitle: "Что важно знать перед запуском проекта с Qaspilab",
      items: [
        {
          question: "Сколько времени занимает создание сайта?",
          answer:
            "Лендинги мы запускаем за 3-4 дня. Для сложных платформ с интеграциями срок обычно 6-10 недель в зависимости от объема.",
        },
        {
          question: "Вы помогаете с аналитикой и стратегией?",
          answer:
            "Да. Стартуем с discovery-сессии, прорабатываем позиционирование, делаем UX/UI, подключаем аналитику и готовим план продвижения.",
        },
        {
          question: "С какими нишами вы чаще всего работаете?",
          answer:
            "Работаем с IT-стартапами, сервисными компаниями, образованием, финтехом и производственными командами по всему Казахстану.",
        },
        {
          question: "Настраиваете ли вы SEO и подключаете поисковые сервисы?",
          answer:
            "Каждый проект включает on-page SEO, подключение Google Search Console, настройку аналитики и мониторинг скорости.",
        },
        {
          question: "Можете ли вы интегрироваться с существующими системами?",
          answer:
            "Инженеры подключают CRM, ERP, платежные сервисы и кастомные API. При необходимости проектируем надежные интеграционные слои.",
        },
        {
          question: "Как начать сотрудничество?",
          answer:
            "Оставьте заявку через форму или напишите на почту. Назначим встречу, согласуем бюджет и подготовим дорожную карту проекта.",
        },
      ],
    },
    cta: {
      title: "Готовы воплотить свои идеи?",
      subtitle: "Давайте создадим что-то удивительное вместе",
      description:
        "Свяжитесь с нашей командой, чтобы обсудить ваш проект и узнать, как мы можем помочь достичь ваших цифровых целей.",
      button: "Начать проект",
      contactInfo: {
        email: "hello@qaspilab.com",
        phone: "+7 (727) 123-4567",
        address: "Астана, Казахстан",
      },
    },
    // --- НОВЫЙ БЛОК ---
    ctaForm: {
      title: "У вас есть идея?",
      subtitle: "Приходите в лабораторию.",
      description: "Мы превратим её в продукт, которым будут пользоваться люди.",
      buttonText: "Отправить идею",

      nameLabel: "💫 Ваше имя *",
      namePlaceholder: "Введите ваше имя",
      contactLabel: "📞 Номер телефона или Email *",
      contactPlaceholder: "+7 777 123 45 67 или email@example.com",
      descriptionLabel: "💡 Краткое описание вашей идеи *",
      descriptionPlaceholder:
        "Расскажите подробно о вашей идее, что вы хотите создать, какие функции должны быть...",
      budgetLabel: "💰 Предполагаемый бюджет",

      budgetOptions: [
        { value: "", label: "Выберите бюджет" },
        { value: "0-50000", label: "До 50,000 ₸" },
        { value: "50000-200000", label: "50,000 - 200,000 ₸" },
        { value: "200000-500000", label: "200,000 - 500,000 ₸" },
        { value: "500000-1000000", label: "500,000 - 1,000,000 ₸" },
        { value: "1000000+", label: "Свыше 1,000,000 ₸" },
        { value: "discuss", label: "Обсуждается индивидуально" },
      ],
      submitLoading: "🚀 Отправляем вашу идею...",
      submitError:
        "Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.",
      successTitle: "🎉 Отлично!",
      successMessage: "Ваша идея успешно отправлена! Мы свяжемся с вами в ближайшее время для обсуждения проекта.",
      successThankYou: "Спасибо за доверие к нашей лаборатории! Ваша идея уже в надежных руках наших экспертов."
    },
    // --- КОНЕЦ НОВОГО БЛОКА ---
    footer: {
      slogan: "Лаборатория инноваций",
      description: "Превращаем идеи в передовые решения",
      quickLinks: "Быстрые ссылки",
      connect: "Связаться",
      location: "Астана, Казахстан",
      email: "hello@qaspilab.com",
      copyright: "© 2025 Qaspilab. Все права защищены.",
      madeWith: "Сделано с ❤️ в Казахстане",
    },
  },
  
  kk: {
    common: {
      home: "Басты бет",
      about: "Біз туралы",
      services: "Қызметтер",
      startupLaunch: "Стартап іске қосу",
      cases: "Кейстер", 
      team: "Команда",
      contact: "Байланыс",
      language: "Тіл",
      viewGallery: "Галереяны көру",
    },
    hero: {
      title: "Бизнес-идеяларды 60 күнде іске қосу",
      subtitle: "Идеядан → MVP және алғашқы коммерциялық сигналдарға дейін",
      slogan: "Идеяларды нарықпен тексереміз, өнім жасаймыз, go-to-market іске қосамыз және бастапқыда қолдаймыз.",
      description: "Жұмыс форматы: 30 күнден 2 кезең.",
      cta: "Идеяны талдауға жазылу",
      learnMore: "Шарттарды білу", 
      priceFrom: "3.9 млн ₸ бастап",
      paymentTerms: "50% — әзірлеуді бастағанда, 50% — нарыққа шығудың алғашқы тестілеуінен кейін"
    },
    
    // Жаңа стартап іске қосу бөлімі
    startupLaunch: {
      whyImportant: {
        title: "Бұл неліктен маңызды",
        subtitle: "Біздің қызметіміз шешетін мәселелер",
        problems: [
          {
            title: "Өз бетінше іске қосу кезіндегі қателер",
            description: "Өз бетінше іске қосу кезіндегі қымбат қателерден аулақ болу"
          },
          {
            title: "Командаға жоғары шығындар",
            description: "Қымбат тұрақты команданы жалдау қажеттілігі жоқ"
          },
          {
            title: "Ұзақ мерзімдер",
            description: "Біз тек 60 күнде нәтиже жеткіземіз"
          },
          {
            title: "Нәтиже белгісіздігі", 
            description: "Нарықпен тексерумен айқын процесс"
          }
        ]
      },
      
      howWeWork: {
        title: "Біз қалай жұмыс істейміз",
        subtitle: "Қадамдық процесс", 
        steps: [
          {
            step: "01",
            title: "Идеяны талдау",
            description: "CustDev, гипотезаны растау, нарық пен ауырсынуды талдау"
          },
          {
            step: "02",
            title: "УТП қалыптастыру",
            description: "Сол/оң жақтар, позициялау"
          },
          {
            step: "03", 
            title: "MVP әзірлеу",
            description: "UI/UX, прототип, техникалық іске асыру"
          },
          {
            step: "04",
            title: "Go-to-Market", 
            description: "Маркетингті баптау, жарнама науқандарын тестілеу, лидтерді жинау"
          },
          {
            step: "05",
            title: "Менторство және беру",
            description: "Стратегиялық сүйемелдеу, құжаттама, масштабтау бойынша ұсыныстар"
          }
        ]
      },
      
      whatClientGets: {
        title: "Клиент не алады",
        deliverables: [
          "MVP / жұмыс істейтін өнім",
          "Нарықты тексеру", 
          "Клиенттерден алғашқы кері байланыс",
          "Маркетингтік тестілеулер",
          "Дамыту стратегиясы"
        ]
      },
      
      workFormat: {
        title: "Жұмыс форматы + мерзімдер",
        stages: [
          {
            stage: "1-кезең",
            tasks: "Әзірлеу және қаптау",
            timeline: "30 күн"
          },
          {
            stage: "2-кезең",
            tasks: "Растау және маркетинг тестілеуі", 
            timeline: "30 күн"
          }
        ],
        payment: {
          title: "Төлем:",
          terms: ["50% алдын ала төлем", "50% нарыққа шыққаннан кейінгі алғашқы айдан кейін"]
        }
      },
      
      pricing: {
        title: "Құны",
        package: {
          name: "Venture Launch",
          price: "3 900 000 ₸ бастап",
          duration: "60 күн",
          includes: [
            "5 негізгі deliverables",
            "Менторство", 
            "Нарықты тексеру",
            "Go-to-market стратегиясы"
          ]
        },
        cta: "Идеяны талдауға жазылу"
      },
      
      whyQaspilab: {
        title: "Неліктен Qaspilab",
        reasons: [
          {
            title: "Өнім әзірлеудегі 5+ жыл тәжірибе",
            description: "Сәтті өнімдер жасаудағы дәлелденген нәтижелер"
          },
          {
            title: "Нақты кейстер",
            description: "Іске қосылған стартаптар мен MVP портфолиосы"
          },
          {
            title: "Сарапшылар командасы",
            description: "Тәжірибелі әзірлеушілер, дизайнерлер және стратегтер"
          },
          {
            title: "Уақытша негізгі иелер ретінде жұмыс істейміз",
            description: "Сіздің жобаңызға өз жобамыздай қараймыз"
          },
          {
            title: "Есептілік және айқын кезеңдер", 
            description: "Тұрақты есептілік және кезеңдерді бақылау"
          }
        ]
      },
      
      faq: {
        title: "Жиі қойылатын сұрақтар",
        items: [
          {
            question: "MVP-ға не кіреді?",
            answer: "Негізгі функционал, пайдаланушы интерфейсі, базалық интеграциялар және алғашқы тестілеу үшін нарыққа дайын өнім нұсқасы."
          },
          {
            question: "Табыс қалай бағаланады?",
            answer: "Нарық растау метрикалары, пайдаланушы тартылуы, конверсиялар және нақты пайдаланушылардан кері байланыс сапасы."
          },
          {
            question: "Жоба сәтсіз болса не болады?", 
            answer: "Біз адал нарық растауын қамтамасыз етеміз. Табыс кепілдендірілмейді, бірақ сіз нақты деректер мен ұсыныстарды аласыз."
          },
          {
            question: "Қандай кепілдіктер?",
            answer: "Келісілген барлық deliverables мерзімінде және сапа стандарттарын сақтай отырып жеткізуге кепілдік береміз."
          },
          {
            question: "Неліктен 60 күн?",
            answer: "MVP әзірлеу және алғашқы нарық растау үшін импульсты жоғалтпай оңтайлы мерзім."
          }
        ]
      }
    },
    
    about: {
      title: "Біз агенттік емеспіз. Біз зертханамыз.",
      subtitle: "Біз істейтін барлық нәрсенің негізінде инновация",
      description:
        "Qaspilab — бұл идеялардың пішін алатын IT зертханасы. Мұнда кәсіпкерлер, дизайнерлер мен инженерлер жай ғана код емес — тірі өнімдер жасау үшін біріккен жер.",
      expertise: "Біздің сараптамамыз",
      expertiseItems: [
        "Стартаптарды іске қосу және MVP әзірлеу",
        "Full-Stack веб-әзірлеу",
        "Мобильді қолданбаларды әзірлеу",
        "AI және Machine Learning шешімдері",
        "Бұлт инфрақұрылымы және DevOps", 
        "UI/UX дизайн және брендинг",
      ],
      teamImages: [
        {
          alt: "Qaspilab командасы жұмыс істеп жатыр",
          title: "Біздің команда",
          description:
            "Технологияның болашағын жасайтын талантты әзірлеушілер, дизайнерлер мен инженерлер",
        },
        {
          alt: "Qaspilab команда мүшесі",
          title: "Инновациялық тәсіл",
          description:
            "Команданың әрбір мүшесі бірегей дағдылар мен шығармашылықты әкеледі",
        },
        {
          alt: "Команданың жұмыс процесі",
          title: "Ынтымақтастық жұмысы",
          description:
            "Біз ұжымдық шығармашылық пен өзара қолдау күшіне сенеміз",
        },
        {
          alt: "Шығармашылық процесс",
          title: "Шығармашылық процесс",
          description:
            "Идеядан іске асыруға дейін - әрбір кезең бөлшектерге назар аудара отырып өтеді",
        },
        {
          alt: "Qaspilab командасы",
          title: "Бірыңғай мақсат",
          description:
            "Керемет өнімдер жасаудың ортақ миссиясымен біріккен",
        },
      ],
    },
    mission: {
      title: "Біздің миссия",
      startPremiumJourney: "Премиум саяхатты бастау",
      subtitle: "Инновация мен шындықты байланыстыру",
      description:
        "Үнемі дамып келе жатқан әлемде өсу, тиімділік және цифрлық трансформацияны қамтамасыз ететін алдыңғы қатарлы технологиялық шешімдер арқылы бизнесті күшейту.",
      values: "Негізгі құндылықтар",
      valuesItems: [
        {
          title: "Инновация бірінші",
          description: "Креативті шешімдермен шектерді үнемі кеңейту",
        },
        {
          title: "Сапа керемет",
          description: "Сенімді, масштабталатын және қолдауға болатын код жасау",
        },
        {
          title: "Клиенттердің табысы",
          description:
            "Сіздің табысыңыз - біздің жетістігіміздің негізгі көрсеткіші",
        },
      ],
    },
    missionSection: {
      title: "Біз Қазақстанның цифрлық болашағын құрып жатырмыз.",
      p1: "Біздің өнімдер компанияларға жылдамырақ жұмыс істеуге көмектеседі,",
      p2: "кәсіпкерлерге — жаңа идеяларды іске қосуға,",
      p3: "ал адамдарға — технологиялармен оңай әрі қуана отырып өзара әрекеттесуге.",
      p4: "Біз Қазақстан жай ғана IT-шешімдер ғана емес,",
      p5: "бүкіл әлемде пайдаланылатын жаһандық өнімдер жасауға қабілетті деп сенеміз.",
    },
    workflow: {
      exploreGlobalNetwork: "Біздің жаһандық желіні зерттеңіз",
      title: "Біз ойлағанымыздай жасаймыз. Қарапайым. Ашық. Жылдам.",
      processTitle: "Біздің процесс",
      premiumWorkflowDescription:
        "Әрбір қадамда қосымша ашықтықты, тиімділікті және ынтымақтастықты қамтамасыз ететін ерекше нәтижелерге қол жеткізуге арналған біздің жетілдірілген премиум жұмыс процесін сезініңіз.",
      subtitle: "Концепциядан шындыққа дейін",
      steps: [
        {
          step: "01",
          title: "Зерттеу және стратегия",
          description:
            "Сіздің қажеттіліктеріңіз, мақсаттарыңыз және нарық талаптарын түсіну",
        },
        {
          step: "02",
          title: "Дизайн және жоспарлау",
          description:
            "Пайдаланушы-орталықты дизайн және техникалық архитектура жасау",
        },
        {
          step: "03",
          title: "Әзірлеу және тестілеу",
          description: "Қатаң сапа бақылауымен сенімді шешімдер құру",
        },
        {
          step: "04",
          title: "Іске қосу және қолдау",
          description: "Орналастыру, мониторинг және үнемі қызмет көрсету",
        },
      ],
    },
    whyUs: {
      title: "Неліктен Qaspilab таңдайды",
      subtitle: "Әрбір деталдағы керемет",
      ideasGenerating: "Идеялар: Генерациялануда",
      dataFlow: "Деректер ағыны: 12.5 Гбит/с",
      liquidAnalysis: "Сұйықтық талдауы: Активті",
      premiumLabAlt: "Премиум Qaspilab зертханасы",
      labStatus: "Зертхана күйі: Активті",
      reasons: [
        {
          title: "Дәлелденген сараптама",
          description:
            "Әртүрлі салаларда сәтті жобаларды жүзеге асыру тәжірибесі",
        },
        {
          title: "Озық технологиялар",
          description:
            "Оңтайлы нәтижелер үшін әрқашан ең соңғы құралдар мен фреймворктерді пайдалану",
        },
        {
          title: "Agile әдістемесі",
          description: "Жоба табысын қамтамасыз ететін икемді, қайталанатын тәсіл",
        },
        {
          title: "24/7 қолдау",
          description:
            "Сіздің жүйелеріңіздің үздіксіз жұмыс істеуі үшін тәулік бойы қолдау",
        },
      ],
    },
    globalReach: {
      globalConnectionDescription: "Идеяңызды жүзеге асыру үшін әлем бойынша сарапшылармен байланысыңыз.",
      title: "Жаһандық қол жетімділік, жергілікті сараптама",
      subtitle: "Бүкіл әлемдегі клиенттерге қызмет көрсету",
      description:
        "Алматы, Қазақстандағы біздің офисімізден біз әртүрлі континенттердегі клиенттер үшін жобаларды сәтті жүзеге асырдық, кез келген өлшемдегі бизнеске әлемдік деңгейдегі технологиялық шешімдер ұсына отырып.",
      stats: {
        projects: "100+ жүзеге асырылған жоба",
        clients: "50+ қанағаттанған клиент",
        countries: "15+ қызмет көрсетілетін ел",
        experience: "5+ жыл тәжірибе",
      },
    },
    faq: {
      badge: "Сұрақтар",
      title: "Жиі қойылатын сұрақтар",
      subtitle: "Qaspilab-пен жұмыс бастар алдындағы негізгі жауаптар",
      items: [
        {
          question: "Жаңа сайтты қанша уақытта іске қосасыз?",
          answer:
            "Көптеген лендингтерді 3-4 күнде жариялаймыз. Интеграциялары бар күрделі платформалар әдетте 6-10 аптада дайын болады.",
        },
        {
          question: "Стратегия мен дизайнды да бірге жасайсыз ба?",
          answer:
            "Иә. Біз discovery-сессиядан бастаймыз, позициялауын анықтаймыз, UX/UI дайындаймыз, содан кейін әзірлеу мен тестілеуге көшеміз.",
        },
        {
          question: "Қандай салалармен көбірек жұмыс істейсіздер?",
          answer:
            "Қазақстандағы IT-стартаптармен, сервис компанияларымен, білім, финтех және өндіріс бағыттарымен жиі серіктесеміз.",
        },
        {
          question: "SEO және аналитиканы баптайсыздар ма?",
          answer:
            "Әр жобаға on-page SEO, Google Search Console қосу, аналитика панельдері және өнімділік мониторингі кіреді.",
        },
        {
          question: "Біздің жүйелермен интеграция жасай аласыздар ма?",
          answer:
            "Инженерлеріміз CRM, ERP, төлем сервистері және кастом API-лерді қосады. Қажет болса, сенімді аралық шешімдер жасаймыз.",
        },
        {
          question: "Қалай бірге жұмыс бастауды ұсынасыз?",
          answer:
            "Идеяңызды форма арқылы немесе почтаға жіберіңіз. Біз кездесу ұйымдастырып, бюджет пен жол картасын бекітеміз.",
        },
      ],
    },
    cta: {
      title: "Өз идеяларыңызды іске асыруға дайынсыз ба?",
      subtitle: "Келіңіз, бірге керемет нәрсе жасайық",
      description:
        "Жобаңызды талқылау және сіздің цифрлық мақсаттарыңызға жетуге қалай көмектесе алатынымызды білу үшін командамызбен хабарласыңыз.",
      button: "Жобаны бастау",
      contactInfo: {
        email: "hello@qaspilab.com",
        phone: "+7 (727) 123-4567",
        address: "Алматы, Қазақстан",
      },
    },
    
    // --- НОВЫЙ БЛОК ---
    ctaForm: {
      title: "Идеяңыз бар ма?",
      subtitle: "Зертханаға келіңіз.",
      description: "Біз оны адамдар қолданатын өнімге айналдырамыз.",
      buttonText: "Идеяны жіберу",

      nameLabel: "💫 Сіздің есіміңіз *",
      namePlaceholder: "Есіміңізді енгізіңіз",
      contactLabel: "📞 Телефон нөмірі немесе Email *",
      contactPlaceholder: "+7 777 123 45 67 немесе email@example.com",
      descriptionLabel: "💡 Идеяңыздың қысқаша сипаттамасы *",
      descriptionPlaceholder:
        "Идеяңыз туралы, не жасағыңыз келетінін, қандай функциялары болуы керектігін егжей-тегжейлі айтып беріңіз...",
      budgetLabel: "💰 Болжамды бюджет",
      

      budgetOptions: [
        { value: "", label: "Бюджетті таңдаңыз" },
        { value: "0-50000", label: "50,000 ₸ дейін" },
        { value: "50000-200000", label: "50,000 - 200,000 ₸" },
        { value: "200000-500000", label: "200,000 - 500,000 ₸" },
        { value: "500000-1000000", label: "500,000 - 1,000,000 ₸" },
        { value: "1000000+", label: "1,000,000 ₸ астам" },
        { value: "discuss", label: "Жеке талқыланады" },
      ],
      submitLoading: "🚀 Идеяңыз жіберілуде...",
      submitError: "Жіберу кезінде қате пайда болды. Қайталап көріңіз.",
      successTitle: "🎉 Керемет!",
      successMessage: "Сіздің идеяңыз сәтті жіберілді! Жобаны талқылау үшін жақын арада сізбен хабарласамыз.",
      successThankYou: "Біздің зертханамызға сенім артқаныңыз үшін рахмет! Сіздің идеяңыз біздің сарапшылардың сенімді қолында."
    },
    // --- КОНЕЦ НОВОГО БЛОКА ---
    footer: {
      slogan: "Инновация зертханасы",
      description: "Идеяларды озық шешімдерге айналдырамыз",
      quickLinks: "Жылдам сілтемелер",
      connect: "Байланысу",
      location: "Алматы, Қазақстан",
      email: "hello@qaspilab.com",
      copyright: "© 2025 Qaspilab. Барлық құқықтар қорғалған.",
      madeWith: "❤️ арқылы Қазақстанда жасалған",
    },
  },
};

export type Locale = keyof typeof translations;
export type Translation = typeof translations.en;