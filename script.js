const BOT_TOKEN = "ВСТАВЬ_СЮДА_ТОКЕН_БОТА";

export default {
  async fetch(request) {
    try {
      const update = await request.json();

      // Проверяем, что сообщение действительно пришло
      if (!update.message) {
        return new Response("OK");
      }

      const chatId = update.message.chat.id;
      const text = update.message.text || "";

      // =========================
      // ПРОБНЫЙ УРОК
      // =========================
      if (text === "/start trial") {
        await sendMessage(
          chatId,
          "Привет! 👋\n\nТы хочешь записаться на бесплатный пробный урок.\n\nНажми на кнопку ниже, чтобы написать Айгуль.",
          {
            inline_keyboard: [
              [
                {
                  text: "Записаться на пробный урок",
                  url: "https://t.me/iwpme"
                }
              ]
            ]
          }
        );

        return new Response("OK");
      }

      // =========================
      // БЕСПЛАТНЫЕ МАТЕРИАЛЫ
      // =========================
      if (text === "/start materials") {
        await sendMessage(
          chatId,
          "Привет! 👋\n\nВот твои бесплатные видеоуроки по заданиям 1–5.",
          {
            inline_keyboard: [
              [
                {
                  text: "Получить бесплатные видеоуроки",
                  url: "https://t.me/+At8aSMsiBCFkNDhi"
                }
              ]
            ]
          }
        );

        return new Response("OK");
      }

      // =========================
      // ОБЫЧНЫЙ /start
      // =========================
      if (text === "/start") {
        await sendMessage(
          chatId,
          "Привет! Выбирай:",
          {
            inline_keyboard: [
              [
                {
                  text: "Бесплатный пробный урок",
                  url: "https://t.me/iwpme"
                }
              ],
              [
                {
                  text: "Бесплатные видеоуроки 1–5 задание",
                  url: "https://t.me/+At8aSMsiBCFkNDhi"
                }
              ]
            ]
          }
        );

        return new Response("OK");
      }

      return new Response("OK");

    } catch (error) {
      return new Response("Ошибка: " + error.message, {
        status: 500
      });
    }
  }
};


// =========================
// ФУНКЦИЯ ОТПРАВКИ СООБЩЕНИЯ
// =========================

async function sendMessage(chatId, text, keyboard = null) {
  const body = {
    chat_id: chatId,
    text: text
  };

  if (keyboard) {
    body.reply_markup = keyboard;
  }

  await fetch(
    `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }
  );
}
