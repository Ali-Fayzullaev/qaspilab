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
        ],
        importantInfo: "IMPORTANT INFORMATION",
        seriousness: "Serious",
        failureRate: {
          percentage: "90%",
          text: "of startups fail"
        },
        hopefulMessage: "But this can be changed with the right approach",
        ourGoal: "Our goal is to make you part of the successful 10%"
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
        cat: "Have questions? Contact us for a free consultation",
        catFree: "Free Consultation",
        badge: "Questions",
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
      title: "If you have capital and an idea — you don't need a course and presentation.",
      subtitle: "You need a team that:",
      teamQualities: [
        "— thinks like a founder",
        "— builds the product",
        "— brings it to market",
        "— and takes responsibility for results"
      ],
      promise: "We launch startups in 60 days from idea to first sales.",
      services: [
        "Development",
        "Marketing",
        "Mentorship",
        "Handover of finished project"
      ],
      pricing: "Starting from 3.9 million ₸",
      location: "Working in Astana",
      cta: "Click and discuss your project",
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
      title: "90% стартапов умирают не потому что идея плохая, а потому что её не проверили.",
      subtitle: "Мы не обещаем «успех». Мы делаем честный запуск:",
      honestLaunch: "Мы делаем честный запуск:",
      steps: [
        "✔ Анализ идеи",
        "✔ MVP", 
        "✔ Тест рынка",
        "✔ Первые клиенты или честный стоп"
      ],
      result: "Через 60 дней вы точно знаете:",
      outcomes: [
        "👉 масштабировать",
        "👉 менять модель", 
        "👉 или не тратить деньги дальше"
      ],
      pricing: "💰 От 3.9 млн ₸",
      location: "📍 Астана",
      format: "🤝 Формат: запуск под ключ + менторство",
      cta: "👉 Получить разбор идеи",
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
      title: "Do you have an idea but don't want to waste time, money and nerves?",
      subtitle: "We act as a temporary founder team and in 60 days:",
      globalConnectionDescription: "Connect with experts worldwide to bring your idea to life.",
      description: "No illusions. No 'we'll finish later'. Only facts and figures.",
      steps: [
        "— validate the idea with the market",
        "— create MVP",
        "— launch marketing",
        "— get first sales signals"
      ],
      format: "Format for entrepreneurs and investors",
      pricing: "Cost from 3.9 million ₸",
      location: "Working in Astana",
      cta: "Learn more",
      stats: {
        experience: "5+ Years Experience",
      },
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
        ],
        importantInfo: "ВАЖНАЯ ИНФОРМАЦИЯ",
        seriousness: "Серьезно",
        failureRate: {
          percentage: "90%",
          text: "стартапов терпят неудачу"
        },
        hopefulMessage: "Но это можно изменить с правильным подходом",
        ourGoal: "Наша цель — сделать вас частью успешных 10%"
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
        cta: "Записаться"
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
        cat: "Остались вопросы? Свяжитесь с нами для бесплатной консультации",
      catFree: "Бесплатная консультация",
        badge: "Вопросы",
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
      title: "Если у вас есть капитал и идея — вам не нужен курс и презентация.",
      subtitle: "Вам нужна команда, которая:",
      teamQualities: [
        "— думает как фаундер",
        "— делает продукт", 
        "— выводит на рынок",
        "— и отвечает за результат"
      ],
      promise: "Мы запускаем стартапы за 60 дней от идеи до первых продаж.",
      services: [
        "Разработка",
        "Маркетинг",
        "Менторство", 
        "Передача готового проекта"
      ],
      pricing: "Чек от 3.9 млн ₸",
      location: "Работаем в Астане",
      cta: "Нажмите и обсудите свой проект",
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
      title: "90% стартапов умирают не потому что идея плохая, а потому что её не проверили.",
      subtitle: "Мы не обещаем «успех». Мы делаем честный запуск:",
      honestLaunch: "Мы делаем честный запуск:",
      steps: [
        "✔ Анализ идеи",
        "✔ MVP", 
        "✔ Тест рынка",
        "✔ Первые клиенты или честный стоп"
      ],
      result: "Через 60 дней вы точно знаете:",
      outcomes: [
        "👉 масштабировать",
        "👉 менять модель", 
        "👉 или не тратить деньги дальше"
      ],
      pricing: "💰 От 3.9 млн ₸",
      location: "📍 Астана",
      format: "🤝 Формат: запуск под ключ + менторство",
      cta: "👉 Получить разбор идеи",
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
      title: "У вас есть идея, но вы не хотите терять время, деньги и нервы?",
      subtitle: "Мы заходим как временная фаундер-команда и за 60 дней:",
      globalConnectionDescription: "Идеяңызды жүзеге асыру үшін әлем бойынша сарапшылармен байланысыңыз.",
      description: "Без иллюзий. Без «потом доделаем». Только факты и цифры.",
      steps: [
        "— проверяем идею с рынком",
        "— создаём MVP",
        "— запускаем маркетинг", 
        "— получаем первые сигналы продаж"
      ],
      format: "Формат для предпринимателей и инвесторов",
      pricing: "От 3.9 млн ₸",
      location: "Работаем по Астане",
      cta: "Узнать больше",
      stats: {
        experience: "5+ лет опыта",
      },
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
      cta: "Жазылу идеяны талдау",
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
        ],
        importantInfo: "МАҢЫЗДЫ АҚПАРАТ",
        seriousness: "Ауыр",
        failureRate: {
          percentage: "90%",
          text: "стартаптардың сәтсіздікке ұшырайды"
        },
        hopefulMessage: "Бірақ мұны дұрыс тәсілмен өзгертуге болады",
        ourGoal: "Біздің мақсат — сізді табысты 10% құрамына кіргізу"
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
        cta: "Жазылу"
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
        cat: "Сұрақтар қалды ма? Тегін кеңес алу үшін бізге хабарласыңыз",
        catFree: "Тегін кеңес беру",
        badge: "Сұрақтар",
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
      title: "Если у вас есть капитал и идея — вам не нужен курс и презентация.",
      subtitle: "Вам нужна команда, которая:",
      teamQualities: [
        "— думает как фаундер",
        "— делает продукт", 
        "— выводит на рынок",
        "— и отвечает за результат"
      ],
      promise: "Мы запускаем стартапы за 60 дней от идеи до первых продаж.",
      services: [
        "Разработка",
        "Маркетинг",
        "Менторство", 
        "Передача готового проекта"
      ],
      pricing: "Чек от 3.9 млн ₸",
      location: "Работаем в Астане",
      cta: "Нажмите и обсудите свой проект",
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
      title: "90% стартаптар идея жаман болғаны үшін емес, оны тексермегені үшін өледі.",
      subtitle: "Біз «табыстыны» уәде бермейміз. Біз адал запуск жасаймыз:",
      honestLaunch: "Біз адал запуск жасаймыз:",
      steps: [
        "✔ Идеяны талдау",
        "✔ MVP", 
        "✔ Нарықты тест",
        "✔ Алғашқы клиенттер немесе адал тоқтау"
      ],
      result: "60 күннен кейін сіз нақты білесіз:",
      outcomes: [
        "👉 масштабтау",
        "👉 модельді өзгерту", 
        "👉 немесе ақшаны одан әрі жұмсамау"
      ],
      pricing: "💰 3.9 млн ₸ бастап",
      location: "📍 Астана",
      format: "🤝 Формат: кілт астында запуск + менторство",
      cta: "👉 Идеяны талдауды алу",
      ideasGenerating: "Идеялар: Генерацияланады",
      dataFlow: "Деректер ағымы: 12.5 Гбит/с",
      liquidAnalysis: "Сұйықтық талдауы: Белсенді",
      premiumLabAlt: "Премиум Qaspilab зертханасы",
      labStatus: "Зертхана мәртебесі: Белсенді",
      reasons: [
        {
          title: "Дәлелденген сараптама",
          description:
            "Әртүрлі салаларда жобаларды сәтті іске асыру жылдарындағы тәжірибе",
        },
        {
          title: "Озық технологиялар",
          description:
            "Оңтайлы нәтижелер үшін әрқашан ең жаңа құралдар мен фреймворктерді қолданамыз",
        },
        {
          title: "Agile әдіснамасы",
          description: "Жоба табысын қамтамасыз ететін икемді, итеративті тәсіл",
        },
        {
          title: "24/7 қолдау",
          description:
            "Сіздің жүйелеріңіздің үздіксіз жұмысы үшін тәулік бойы қолдау",
        },
      ],
    },
    globalReach: {
      title: "У вас есть идея, но вы не хотите терять время, деньги и нервы?",
      subtitle: "Мы заходим как временная фаундер-команда и за 60 дней:",
      globalConnectionDescription: "Идеяңызды жүзеге асыру үшін әлем бойынша сарапшылармен байланысыңыз.",
      description: "Без иллюзий. Без «потом доделаем». Только факты и цифры.",
      steps: [
        "— идеяны нарықпен тексереміз",
        "— MVP жасаймыз",
        "— маркетинг іске қосамыз", 
        "— алғашқы сату сигналдарын аламыз"
      ],
      format: "Кәсіпкерлер мен инвесторлар үшін формат",
      pricing: "Құны 3.9 млн ₸ бастап",
      location: "Астана бойынша жұмыс істейміз",
      cta: "Толығырақ білу",
      stats: {
        experience: "5+ жыл тәжірибе",
      },
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