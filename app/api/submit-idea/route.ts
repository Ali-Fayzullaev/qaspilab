import { NextRequest, NextResponse } from "next/server";

// Ваши данные из Green API (замените на актуальные)
const API_URL = "https://7700.api.greenapi.com";
const ID_INSTANCE = "7700282474";
const API_TOKEN_INSTANCE = "6ac6e2edd6a94d9990bf32b96135d382d954bd87a719413c88";
const WHATSAPP_GROUP_ID = "120363421656122315@g.us";

// Функция для отправки в WhatsApp
async function sendToWhatsApp(message: string) {
  try {
    const response = await fetch(
      `${API_URL}/waInstance${ID_INSTANCE}/sendMessage/${API_TOKEN_INSTANCE}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chatId: WHATSAPP_GROUP_ID,
          message: message,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error sending to WhatsApp:", error);
    throw error;
  }
}

// Функция для форматирования номера телефона или email
function formatContact(contact: string): string {
  // Проверяем, является ли это email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(contact)) {
    return contact; // Возвращаем email как есть
  }

  // Если это телефон, форматируем его
  const cleaned = contact.replace(/\D/g, "");

  if (cleaned.length === 11 && cleaned.startsWith("8")) {
    return `+7 ${cleaned.slice(1, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(
      7,
      9
    )} ${cleaned.slice(9)}`;
  } else if (cleaned.length === 11 && cleaned.startsWith("7")) {
    return `+7 ${cleaned.slice(1, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(
      7,
      9
    )} ${cleaned.slice(9)}`;
  } else if (cleaned.length === 10) {
    return `+7 ${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(
      6,
      8
    )} ${cleaned.slice(8)}`;
  }

  return contact; // Возвращаем оригинал, если формат не распознан
}

// Функция для форматирования бюджета
function formatBudget(budget: string): string {
  const budgetRanges: { [key: string]: string } = {
    "0-50000": "До 50,000 ₸",
    "50000-200000": "50,000 - 200,000 ₸",
    "200000-500000": "200,000 - 500,000 ₸",
    "500000-1000000": "500,000 - 1,000,000 ₸",
    "1000000+": "Свыше 1,000,000 ₸",
    discuss: "Обсуждается индивидуально",
  };

  return budgetRanges[budget] || budget;
}

// Добавляем переводы напрямую (или получаем из другого источника)
const translations = {
  ctaForm: {
    successMessage: "Идея успешно отправлена!",
    successThankYou: "Спасибо за вашу идею! Мы свяжемся с вами в ближайшее время."
  }
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, contact, description, budget } = body;

    // Валидация обязательных полей
    if (!name || !contact || !description) {
      return NextResponse.json(
        {
          success: false,
          message: "Имя, контакт и описание идеи обязательны для заполнения",
        },
        { status: 400 }
      );
    }

    // Валидация контакта (телефон или email)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\+]?[7-8]?[0-9\s\-\(\)]{10,15}$/;

    if (
      !emailRegex.test(contact) &&
      !phoneRegex.test(contact.replace(/\s/g, ""))
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Введите корректный номер телефона или email",
        },
        { status: 400 }
      );
    }

    // Форматируем контакт
    const formattedContact = formatContact(contact);
    const formattedBudget = budget ? formatBudget(budget) : "Не указан";

    // Формируем сообщение для WhatsApp
    const message = `🚀 Новая идея от клиента!

👤 Имя: ${name}
📞 Контакт: ${formattedContact}

💡 Описание идеи:
${description}

📅 Дата: ${new Date().toLocaleDateString("ru-RU")}
⏰ Время: ${new Date().toLocaleTimeString("ru-RU")}`;

    // Отправляем в WhatsApp
    await sendToWhatsApp(message);

    // Логируем в консоль
    console.log("Idea submitted:", {
      name,
      contact: formattedContact,
      description,
      budget: formattedBudget,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: translations.ctaForm.successMessage,
      thankYou: translations.ctaForm.successThankYou,
    });
  } catch (error) {
    console.error("Error submitting idea:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "Произошла ошибка при отправке идеи. Пожалуйста, попробуйте еще раз.",
      },
      { status: 500 }
    );
  }
}