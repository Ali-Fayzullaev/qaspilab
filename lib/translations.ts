export const translations = {
  en: {
    common: {
      home: "Home",
      about: "About",
      services: "Services", 
      contact: "Contact",
      language: "Language"
    },
    hero: {
      title: "Qaspilab",
      subtitle: "Born in Kazakhstan. Built for the world.",
      slogan: "We create technologies that shape the future of digital innovation",
      description: "Transforming ideas into cutting-edge solutions",
      cta: "Discuss Project"
    },
    footer: {
      slogan: "Innovation Laboratory",
      description: "Transforming ideas into cutting-edge solutions",
      quickLinks: "Quick Links",
      connect: "Connect",
      location: "Almaty, Kazakhstan",
      email: "hello@qaspilab.com",
      copyright: "© 2024 Qaspilab. All rights reserved.",
      madeWith: "Made with ❤️ in Kazakhstan"
    }
  },
  ru: {
    common: {
      home: "Главная",
      about: "О нас", 
      services: "Услуги",
      contact: "Контакты",
      language: "Язык"
    },
    hero: {
      title: "Qaspilab",
      subtitle: "Рождён в Казахстане. Создан для мира.",
      slogan: "Мы создаём технологии, которые формируют будущее цифровых инноваций",
      description: "Превращаем идеи в передовые решения",
      cta: "Обсудить проект"
    },
    footer: {
      slogan: "Лаборатория инноваций",
      description: "Превращаем идеи в передовые решения",
      quickLinks: "Быстрые ссылки",
      connect: "Связаться",
      location: "Алматы, Казахстан",
      email: "hello@qaspilab.com",
      copyright: "© 2024 Qaspilab. Все права защищены.",
      madeWith: "Сделано с ❤️ в Казахстане"
    }
  },
  kk: {
    common: {
      home: "Басты бет",
      about: "Біз туралы",
      services: "Қызметтер",
      contact: "Байланыс", 
      language: "Тіл"
    },
    hero: {
      title: "Qaspilab",
      subtitle: "Қазақстанда туған. Әлем үшін жасалған.",
      slogan: "Біз цифрлық инновацияның болашағын қалыптастыратын технологиялар жасаймыз",
      description: "Идеяларды озық шешімдерге айналдырамыз", 
      cta: "Жобаны талқылау"
    },
    footer: {
      slogan: "Инновация зертханасы",
      description: "Идеяларды озық шешімдерге айналдырамыз",
      quickLinks: "Жылдам сілтемелер",
      connect: "Байланысу",
      location: "Алматы, Қазақстан",
      email: "hello@qaspilab.com",
      copyright: "© 2024 Qaspilab. Барлық құқықтар қорғалған.",
      madeWith: "❤️ арқылы Қазақстанда жасалған"
    }
  }
};

export type Locale = keyof typeof translations;
export type Translation = typeof translations.en;