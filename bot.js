const TelegramBot = require('node-telegram-bot-api');
const token = '7386451435:AAFtkkcrryJ0xN76HvnU5iWV7qjgqg1tG9k';
const { add } = require('./controller/callRequest.controller');
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    'Добро пожаловать! Нажмите кнопку ниже, чтобы оставить запрос на перезвонок.',
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Перезвонить мне', callback_data: 'callback_request' }],
        ],
      },
    }
  );
});

bot.on('callback_query', (query) => {
  const chatId = query.message.chat.id;
  if (query.data === 'callback_request') {
    bot.sendMessage(chatId, 'Пожалуйста, отправьте ваше имя.');

    bot.once('message', (msg) => {
      const name = msg.text;
      if (msg.contact) {
        const phoneNumber = msg.contact.phone_number;
        console.log(`Received contact: ${phoneNumber} from ${name}`);
        processPhoneNumber(name, phoneNumber, chatId);
      } else {
        bot.sendMessage(chatId, 'Теперь отправьте ваш номер телефона.', {
          reply_markup: {
            keyboard: [
              [{ text: 'Отправить номер телефона', request_contact: true }],
            ],
            one_time_keyboard: true,
          },
        });

        bot.once('contact', (contactMsg) => {
          const phoneNumber = contactMsg.contact.phone_number;
          console.log(`Received contact: ${phoneNumber} from ${name}`);
          processPhoneNumber(name, phoneNumber, chatId);
        });
      }
    });
  }
});

async function processPhoneNumber(name, phoneNumber, chatId) {
  try {
    const req = {
      body: {
        name,
        phone: phoneNumber,
      },
    };
    const res = {
      send: (response) => console.log(response),
      status: (statusCode) => ({
        send: (response) => console.log(response),
      }),
    };
    await add(req, res);
    bot.sendMessage(
      chatId,
      `Спасибо, ${name}! Мы перезвоним вам по номеру ${phoneNumber}.`,
      {
        reply_markup: {
          remove_keyboard: true,
        },
      }
    );
  } catch (error) {
    bot.sendMessage(chatId, 'Произошла ошибка при обработке вашего запроса.');
    console.error(`Error: ${error}`);
  }
}
module.exports = bot;
