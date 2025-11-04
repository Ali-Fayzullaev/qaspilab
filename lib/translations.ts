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
      subtitle: "Innovation Laboratory",
      description: "Transforming ideas into cutting-edge solutions",
      cta: "Get Started"
    },
    footer: {
      copyright: "© 2024 Qaspilab. All rights reserved."
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
      subtitle: "Лаборатория инноваций", 
      description: "Превращаем идеи в передовые решения",
      cta: "Начать"
    },
    footer: {
      copyright: "© 2024 Qaspilab. Все права защищены."
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
      subtitle: "Инновация зертханасы",
      description: "Идеяларды озық шешімдерге айналдырамыз", 
      cta: "Бастау"
    },
    footer: {
      copyright: "© 2024 Qaspilab. Барлық құқықтар қорғалған."
    }
  }
};

export type Locale = keyof typeof translations;
export type Translation = typeof translations.en;