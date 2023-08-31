
import { students } from "./data.js";

import { technologiesStack, themes, adminId } from "./data.js";
import { User } from "./database/index.js";
import { testsID, shuffle, getNamesOneStudentByIdGroup } from "./app.js";

let namesRight = [];
let namesError = [];

class Keyboards {
  editTest = (keyboard, answer, bot, chatId) => {
    for (let i = 0; i < keyboard.inline_keyboard.length; i++) {
      let idTest = answer.slice(answer.length - 8);
      console.log("testsID");
      console.log("testsID" + testsID);
      console.log("idTest" + idTest);

      if (answer == keyboard.inline_keyboard[i][0].callback_data) {
        if (answer.startsWith("testAnswer-right-")) {
          testsID.forEach((testID) => {
            if (testID.idQuiz == idTest) {
              if (testID.answers.error.includes(chatId)) {
                console.log("!!222!!");
              }

              testID.answers.right.push(chatId);
              namesRight = [];
              namesError = [];

              testID.answers.right.forEach((id) => {
                namesRight.push(getNamesOneStudentByIdGroup(id));
              });

              testID.answers.error.forEach((id) => {
                namesError.push(getNamesOneStudentByIdGroup(id));
              });

              let templateResult = `
<b>Питання:</b>
${testID.title}

<b>Варіанти відповіді:</b>
${testID.options.replace(/</g, "&lt;").replace(/>/g, "&gt;")}

<b>Правильна відповідь:</b>
${testID.rightAnswer}

<b>Відповіли правильно:</b>
${namesRight}

<b>Відповіли неправильно:</b>
${namesError}

<b>Немає відповіді:</b>
-
            `;

              bot.editMessageText(templateResult, {
                parse_mode: "HTML",
                message_id: testID.idMessage,
                chat_id: adminId,
              });
            }
          });

          keyboard.inline_keyboard[i][0] = {
            text: keyboard.inline_keyboard[i][0].text + " ✅",
            callback_data: `testAnswer-test`,
          };
        }

        if (answer.startsWith("testAnswer-error-")) {
          testsID.forEach((testID) => {
            if (testID.idQuiz == idTest) {
              testID.answers.error.push(chatId);
            }
          });

          testsID.forEach((testID) => {
            if (idTest == testID.idQuiz) {
              console.log(testID.idMessage);
              console.log("chatId: " + chatId);

              namesError.push(getNamesOneStudentByIdGroup(chatId));

              namesError = [];
              namesRight = [];

              testID.answers.right.forEach((id) => {
                namesRight.push(getNamesOneStudentByIdGroup(id));
              });

              testID.answers.error.forEach((id) => {
                namesError.push(getNamesOneStudentByIdGroup(id));
              });

              let templateResult = `
<b>Питання:</b>
${testID.title}

<b>Варіанти відповіді:</b>
${testID.options.replace(/</g, "&lt;").replace(/>/g, "&gt;")}

<b>Правильна відповідь:</b>
${testID.rightAnswer}

Відповіли правильно:
${namesRight}

Відповіли неправильно:
${namesError}

Немає відповіді:
-
            `;

              bot.editMessageText(templateResult, {
                parse_mode: "HTML",
                message_id: testID.idMessage,
                chat_id: adminId,
              });
            }
          });

          keyboard.inline_keyboard[i][0] = {
            text: keyboard.inline_keyboard[i][0].text + " ❌",
            callback_data: `testAnswer-test`,
          };
        }
      }
    }

    for (let i = 0; i < keyboard.inline_keyboard.length; i++) {
      // console.log(keyboard.inline_keyboard[i][0].callback_data);
      if (answer == keyboard.inline_keyboard[i][0].callback_data) {
        if (answer.startsWith("testAnswer-right-")) {
          keyboard.inline_keyboard[i][0] = {
            text: keyboard.inline_keyboard[i][0].text + " ✅",
            callback_data: `testAnswer-test`,
          };
        }
        if (answer.startsWith("testAnswer-error-")) {
          keyboard.inline_keyboard[i][0] = {
            text: keyboard.inline_keyboard[i][0].text + " ❌",
            callback_data: `testAnswer-test`,
          };
        }
      }
    }
    console.log(" - - ");
    let newKeyboard = keyboard;

    return newKeyboard;
  };

  editTest50 = (keyboard, answer, bot, chatId) => {
    console.log("444: ", keyboard.inline_keyboard);
    let newKb = [];
    let counterDeleteItems = 0;
    keyboard.inline_keyboard.forEach((item) => {
      if (item[0].callback_data.includes("error") && counterDeleteItems < 2) {
        counterDeleteItems++;
      } else {
        newKb.push(item);
      }
    });

    return {
      inline_keyboard: newKb,
    };
  };

  createTest = (tasks, id) => {
    let btns = [];
    let rightAnswer = tasks[0];
    let idMessage;
    let newTasks_ = [...tasks];

    let newTasks = shuffle(newTasks_);

    for (let i = 0; i < tasks.length; i++) {
      if (rightAnswer == newTasks[i]) {
        btns.push([
          {
            text: newTasks[i],
            callback_data: `testAnswer-right-${newTasks[i]}-${id}`,
          },
        ]);
      } else {
        btns.push([
          {
            text: newTasks[i],
            callback_data: `testAnswer-error-${newTasks[i]}-${id}`,
          },
        ]);
      }
    }

    btns.push([
      {
        text: "💫 50/50",
        callback_data: `help-50/50-${id}`,
      },
      {
        text: "💫 Стаття",
        callback_data: `help-article-${id}`,
      },
      {
        text: "💫 Відео",
        callback_data: `help-video-${id}`,
      },
    ]);
    return {
      reply_markup: JSON.stringify({
        inline_keyboard: btns,
      }),
    };
  };

  themesKeyboard(list) {
    // console.log(Object.keys(list));

    let listBtns = [];
    listBtns.push([
      {
        text: "Повернутись",
        callback_data: "themes--" + Object.keys(themes)[0] + "_",
      },
    ]);
    for (let i = 0; i < Object.keys(list).length; i++) {
      listBtns.push([
        {
          text: Object.keys(list)[i],
          callback_data: "themes--" + Object.keys(list)[i] + "_",
        },
      ]);
    }
    // console.log(...listBtns);

    return {
      reply_markup: JSON.stringify({
        inline_keyboard: [...listBtns],
      }),
    };
  }

  gradeKeyboard = () => {
    return {
      reply_markup: JSON.stringify({
        inline_keyboard: [
          [
            { text: "-", callback_data: "grade--" },
            { text: "6", callback_data: "grade-6" },
            { text: "7", callback_data: "grade-7" },
            { text: "8", callback_data: "grade-8" },
          ],
          [
            { text: "9", callback_data: "grade-9" },
            { text: "10", callback_data: "grade-10" },
            { text: "11", callback_data: "grade-11" },
            { text: "12", callback_data: "grade-12" },
          ],
        ],
      }),
    };
  };

  confirmThemes = {
    reply_markup: {
      keyboard: [[{ text: "Підтвердити теми" }]],
      resize_keyboard: true,
    },
  };

  practiceKeyboard = (idStudent, idTask) => {
    let btns = [];

    btns.push([
      {
        text: "Виконати завдання",
        url: `https://platform-sj3z.onrender.com/get/practice/${idTask}/${idStudent}`,
        callback_data: `practice-${idTask}-${idStudent}`,
      },
    ]);

    return {
      reply_markup: JSON.stringify({
        inline_keyboard: btns,
      }),
    };
  };

  themesDelete = (themes) => {
    let btns = [];
    for (let i = 0; i < themes.length; i++) {
      btns.push([
        {
          text: themes[i],
          callback_data: `deleteThemes-${themes[i]}`,
        },
      ]);
    }
    return {
      reply_markup: JSON.stringify({
        inline_keyboard: btns,
      }),
    };
  };

  mainThemes = (themes) => {
    let btns = [];
    for (let i = 0; i < themes.length; i++) {
      btns.push([
        {
          text: themes[i].title,
          callback_data: `mainThemesIndex-${i}`,
        },
      ]);
    }
    return {
      reply_markup: JSON.stringify({
        inline_keyboard: btns,
      }),
    };
  };

  themesKeyboard2 = (currentThemes, themes) => {
    let btns = [];
    btns.push([
      {
        text: "back",
        callback_data: `themesBack`,
      },
      {
        text: "delete themes",
        callback_data: `themesDelete`,
      },
    ]);
    for (let i = 0; i < currentThemes.length; i++) {
      let sym = "";
      if (themes.includes(currentThemes[i].details.title)) {
        sym = "✅";
      }
      btns.push([
        {
          text: currentThemes[i].details.title + sym,
          callback_data: `themesIndex-${i}`,
        },
      ]);
    }
    return {
      reply_markup: JSON.stringify({
        inline_keyboard: btns,
      }),
    };
  };

  keyboardDaysWeek = {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          { text: "ПН", callback_data: "daysWeek-Понеділок" },
          { text: "ВТ", callback_data: "daysWeek-Вівторок" },
          { text: "СР", callback_data: "daysWeek-Середа" },
        ],
        [
          { text: "ЧТ", callback_data: "daysWeek-Четвер" },
          { text: "ПТ", callback_data: "daysWeek-П'ятниця" },
          { text: "СБ", callback_data: "daysWeek-Субота" },
          { text: "НД", callback_data: "daysWeek-Неділя" },
        ],
      ],
    }),
  };

  keyboardSymbols = {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          { text: "Tab", callback_data: JSON.stringify({ symbol: "tab" }) },
          { text: "/", callback_data: JSON.stringify({ symbol: "/" }) },
          { text: "'", callback_data: JSON.stringify({ symbol: "'" }) },
          { text: '"', callback_data: JSON.stringify({ symbol: '"' }) },
        ],
        [
          { text: "(", callback_data: JSON.stringify({ symbol: "(" }) },
          { text: ")", callback_data: JSON.stringify({ symbol: ")" }) },
          { text: "[", callback_data: JSON.stringify({ symbol: "[" }) },
          { text: "]", callback_data: JSON.stringify({ symbol: "]" }) },
        ],
        [
          { text: "{", callback_data: JSON.stringify({ symbol: "{" }) },
          { text: "}", callback_data: JSON.stringify({ symbol: "}" }) },
          { text: "<", callback_data: JSON.stringify({ symbol: "<" }) },
          { text: ">", callback_data: JSON.stringify({ symbol: ">" }) },
        ],
        [
          { text: "#", callback_data: JSON.stringify({ symbol: "#" }) },
          { text: "/", callback_data: JSON.stringify({ symbol: "/" }) },
          { text: "|", callback_data: JSON.stringify({ symbol: "|" }) },
          { text: "&", callback_data: JSON.stringify({ symbol: "&" }) },
          { text: "!", callback_data: JSON.stringify({ symbol: "!" }) },
        ],
        [
          { text: "^", callback_data: JSON.stringify({ symbol: "^" }) },
          { text: ":", callback_data: JSON.stringify({ symbol: ":" }) },
          { text: ";", callback_data: JSON.stringify({ symbol: ";" }) },
          { text: "=", callback_data: JSON.stringify({ symbol: "=" }) },
        ],
      ],
    }),
  };

  keyboardTimeWeek = {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          { text: "10:00", callback_data: "timeWeek-10:00" },
          { text: "11:00", callback_data: "timeWeek-10:00" },
          { text: "12:00", callback_data: "timeWeek-11:00" },
        ],
        [
          { text: "13:15", callback_data: "timeWeek-13:15" },
          { text: "14:00", callback_data: "timeWeek-14:00" },
          { text: "14:45", callback_data: "timeWeek-14:45" },
        ],
        [
          { text: "15:30", callback_data: "timeWeek-15:30" },
          { text: "16:15", callback_data: "timeWeek-16:15" },
          { text: "17:00", callback_data: "timeWeek-17:00" },
        ],
        [
          { text: "17:45", callback_data: "timeWeek-17:45" },
          { text: "18:30", callback_data: "timeWeek-18:30" },
          { text: "19:15", callback_data: "timeWeek-19:15" },
        ],
        [
          { text: "20:00", callback_data: "timeWeek-20-00" },
          { text: "20:45", callback_data: "timeWeek-20-45" },
          { text: "21:30", callback_data: "timeWeek-21-30" },
          { text: "22:15", callback_data: "timeWeek-22-15" },
        ],
      ],
    }),
  };

  keyboardAdmin = {
    reply_markup: JSON.stringify({
      keyboard: [
        [{ text: "Додати учня" }, { text: "Додати подію" }],
        [{ text: "my text3" }],
      ],
    }),
  };

  photoKeyboard = {
    reply_markup: JSON.stringify({
      keyboard: [[{ text: "Підтвердити фото" }]],
      resize_keyboard: true,
    }),
  };

  templateSuccess = (groupId, idMsg) => {
    let linkTemplate = `https://t.me/c/${groupId}/${idMsg}`;
    return {
      reply_markup: JSON.stringify({
        inline_keyboard: [
          [{ text: "Посилання на шаблон", url: linkTemplate }],
          [
            {
              text: "Видалити шаблон",
              callback_data: `deleteTemplate-${idMsg}`,
            },
          ],
        ],
      }),
    };
  };

  getMoney = (money) => {
    return {
      reply_markup: JSON.stringify({
        inline_keyboard: [
          [{ text: `🤑 Зняти ${money} грн 🤑`, callback_data: "getMoney" }],
        ],
      }),
    };
  };

  adminMain = {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: "Реєстрація уроку", callback_data: "registeredLesson" }],
        [{ text: "Створити групу", callback_data: "createGroup" }],
        [{ text: "Очистити групу", callback_data: "clearGroup" }],
        [{ text: "Відправити тести", callback_data: "sendTests" }],
        [{ text: "Відправити практичні", callback_data: "sendPractice" }],
        [
          { text: "Шаблони", callback_data: "templates" },
          { text: "Змагання", callback_data: "quiz" },
        ],
        [
          { text: "Учні", callback_data: "students" },
          { text: "Оплати", callback_data: "pays" },
        ],
        [
          { text: "Розклад", callback_data: "schedule" },
          { text: "Статистика", callback_data: "statistics" },
        ],
        [{ text: "Зареєструвати учня", callback_data: "regStudent" }],
        [{ text: "Очистити чат", callback_data: "clearChat" }],
      ],
    }),
  };

  // ✅❌🟢🔴⚪️

  keyboardTask = {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          { text: "10 💎", callback_data: "user-getCoins" },
          { text: "4 💎", callback_data: "user-getCoins" },
          { text: "1 💎", callback_data: "user-getCoins" },
          { text: "5 💎", callback_data: "user-getCoins" },
        ],
        [
          { text: "✅", callback_data: "user-getCoins" },
          { text: "5 💎", callback_data: "user-getCoins" },
          { text: "🔒 7", callback_data: "user-getCoins" },
          { text: "🔒 30", callback_data: "user-getCoins" },
        ],
        [
          { text: "🔒 1", callback_data: "user-getCoins" },
          { text: "✅", callback_data: "user-getCoins" },
          { text: "🔒 15", callback_data: "user-getCoins" },
          { text: "🔒 5", callback_data: "user-getCoins" },
        ],
        [
          { text: "🔒 10", callback_data: "user-getCoins" },
          { text: "✅", callback_data: "user-getCoins" },
          { text: "🔒 40", callback_data: "user-getCoins" },
          { text: "🔒 60", callback_data: "user-getCoins" },
        ],
      ],
    }),
  };

  keyboardStudentsSettings = {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "📸 Змінити фото профілю",
            callback_data: "user-settings-ava",
          },
        ],
      ],
    }),
  };

  keyboardStudents = {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: "💎 Заробити монети", callback_data: "user-getCoins" }],
        [
          { text: "🚘 Змінити авто", callback_data: "user-changeCar" },
          { text: "🏦 Мій баланс", callback_data: "user-balance" },
        ],
        [
          { text: "👑 Мої успіхи", callback_data: "user-successes" },
          { text: "🥇 Мої оцінки", callback_data: "user-myGrade" },
        ],
        [
          { text: "📈 Статистика", callback_data: "user-statistics" },
          { text: "⚙️ Налаштування", callback_data: "user-settings" },
        ],
        [{ text: "🎓 Вивчити нову тему", callback_data: "user-newTheme" }],
        [{ text: "📝 Отримати завдання", callback_data: "user-getTasks" }],
        [{ text: "🗂 Збережені роботи", callback_data: "user-savedWork" }],
        [{ text: "🔍 Спілкування з Chat GPT", callback_data: "user-gpt" }],
        [{ text: "📅 Переглянути розклад", callback_data: "user-schedule" }],
        [
          {
            text: "✏️ Змінити розклад занять",
            callback_data: "user-changeSchedule",
          },
        ],

        [
          {
            text: "💰 Змагання та виведення коштів",
            callback_data: "user-competitions",
          },
        ],
        [{ text: "💳 Оплата за навчання", callback_data: "user-pay" }],
        [{ text: "📕 Отримати план навчання", callback_data: "user-program" }],
      ],
    }),
  };

  templatesKeyboard = {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: "Усі шаблони", callback_data: "allTemplate" }],
        [{ text: "Створити шаблон", callback_data: "createTemplate" }],
      ],
    }),
  };

  code = (id, element, allAmount=0, index = 1, file = "index.html",) => {
    
    const files = ["index.html", "style.css", "script.js"];

    const buttons = files.map((f) => ({
      text: `${f === file ? "✅" : "⬜️"} ${f}`,
      callback_data: `code//${f
        .toUpperCase()
        .split(".")
        .shift()}//${element}//${id}`,
    }));

    return {
      reply_markup: JSON.stringify({
        inline_keyboard: [
          buttons,
          [
            {
              text: "📹 Відео",
              callback_data: "code//VIDEO//" + element + "//" + id,
            },
            {
              text: "🧪 Пісочниця",
              url: "https://google.com/" + element + "//" + id,
            },
          ],
          [
            {
              text: "⬅️ Попередній",
              callback_data: "code//PREV//" + element + "//" + id,
            },
            {
              text: `${index} / ${allAmount}`,
              callback_data: "code//INDEX//" + element + "//" + id,
            },
            {
              text: "➡️ Наступний",
              callback_data: "code//NEXT//" + element + "//" + id,
            },
          ],
        ],
      }),
    };
  };
  elementsCategory = {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "▶️ Кнопки",
            callback_data: "elements-button",
          },
          {
            text: "🖼 Фото",
            callback_data: "elements-photo",
          },
          {
            text: "📝 Тексти",
            callback_data: "elements-text",
          },
        ],
        [
          {
            text: "💬 Заголовоки",
            callback_data: "elements-headings",
          },
          {
            text: "🔣 Іконки",
            callback_data: "elements-icons",
          },
          {
            text: "🎨 Фон",
            callback_data: "elements-background",
          },
        ],
        [
          {
            text: "🖼️ Галереї",
            callback_data: "elements-gallery",
          },
          {
            text: "📜 Меню",
            callback_data: "elements-menu",
          },
          {
            text: "🚩 Банера",
            callback_data: "elements-banners",
          },
        ],
        [
          {
            text: "🃏 Картки",
            callback_data: "elements-cards",
          },
          {
            text: "💡 Тултіпи",
            callback_data: "elements-tooltips",
          },
          {
            text: "📊 Прогрес бари",
            callback_data: "elements-progressbars",
          },
        ],
        [
          {
            text: "📋 Форми",
            callback_data: "elements-forms",
          },
          {
            text: "🔗 Посилання",
            callback_data: "elements-links",
          },
          {
            text: "📊 Таблиці",
            callback_data: "elements-tables",
          },
        ],
        [
          {
            text: "📝 Списки",
            callback_data: "elements-lists",
          },
          {
            text: "🔖 Вкладки",
            callback_data: "elements-tabs",
          },
          {
            text: "🎵 Акордеони",
            callback_data: "elements-accordions",
          },
        ],
        [
          {
            text: "🎞️ Слайдери",
            callback_data: "elements-sliders",
          },
          {
            text: "🔢 Пагінація",
            callback_data: "elements-pagination",
          },
          {
            text: "🔍 Пошукові строки",
            callback_data: "elements-searchbars",
          },
        ],
        [
          {
            text: "🎵 Плеєри (фото, відео)",
            callback_data: "elements-players",
          },
          {
            text: "💬 Чати, форуми",
            callback_data: "elements-chats-forums",
          },
        ],
        [
          {
            text: "📊 Опитування",
            callback_data: "elements-polls",
          },
          {
            text: "🎭 Анімації",
            callback_data: "elements-animations",
          },
          {
            text: "🗯️ Поп апи",
            callback_data: "elements-popups",
          },
        ],
        [
          {
            text: "🗺 Карти",
            callback_data: "elements-maps",
          },
          {
            text: "🗨️ Цитати",
            callback_data: "elements-quotes",
          },
          {
            text: "🆔 Логотипи",
            callback_data: "elements-logos",
          },
        ],
        [
          {
            text: "👤 Аватари",
            callback_data: "elements-avatars",
          },
          {
            text: "🥖 Хлібні крихти",
            callback_data: "elements-breadcrumbs",
          },
          {
            text: "📆 Календар",
            callback_data: "elements-calendar",
          },
        ],
        [
          {
            text: "🔍 Фільтри",
            callback_data: "elements-filters",
          },
          {
            text: "🔄 Сортування",
            callback_data: "elements-sorting",
          },
          {
            text: "🎛️ Віджети",
            callback_data: "elements-widgets",
          },
        ],
        [
          {
            text: "🛒 Корзина",
            callback_data: "elements-cart",
          },
          {
            text: "🔍 Порівняння товарів",
            callback_data: "elements-compare",
          },
        ],
        [
          {
            text: "👍 Кнопки на соц мережі",
            callback_data: "elements-social-buttons",
          },
          {
            text: "❤️ Кнопки лайка",
            callback_data: "elements-like-buttons",
          },
          {
            text: "🍔 Гамбургер меню",
            callback_data: "elements-hamburger-menu",
          },
        ],
        [
          {
            text: "💀 Скелетони",
            callback_data: "elements-skeletons",
          },
          {
            text: "⏳ Прелоадери",
            callback_data: "elements-preloaders",
          },
          {
            text: "⬆️ Кнопка нагору",
            callback_data: "elements-scroll-up",
          },
        ],
      ],
    }),
  };

  elementsCaregory = {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "Зареєструвати учасників",
            callback_data: "registeredQuizStudents",
          },
        ],
      ],
    }),
  };

  registeredQuiz = {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "Зареєструвати учасників",
            callback_data: "registeredQuizStudents",
          },
        ],
      ],
    }),
  };
  keyboardIsNextDay = {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "Так",
            callback_data: "nextDayTrue",
          },
          {
            text: "Ні",
            callback_data: "nextDayFalse",
          },
        ],
      ],
    }),
  };

  confirmNewGroup = {
    reply_markup: {
      keyboard: [
        [
          {
            text: "Підтвердити нову групу",
          },
        ],
      ],
      resize_keyboard: true,
    },
  };

  confirmSave = {
    reply_markup: {
      keyboard: [
        [
          {
            text: "Підтвердити шаблон",
            web_app: { url: "https://dmytro-krasyliuk.github.io/bott/" },
          },
        ],
      ],
      resize_keyboard: true,
    },
  };

  confirmTechnology = {
    reply_markup: {
      keyboard: [["Підтвердити технології"]],
      resize_keyboard: true,
      one_time_keyboard: true,
      force_reply: true,
    },
  };

  confirmDate = (date) => {
    return {
      reply_markup: JSON.stringify({
        inline_keyboard: [
          [{ text: date, callback_data: "info-" + date }],
          [{ text: "Інша дата", callback_data: "otherDateLesson" }],
        ],
      }),
    };
  };

  openApp = () => {
    return {
      reply_markup: JSON.stringify({
        inline_keyboard: [
          [
            {
              text: "open",
              web_app: { url: "https://dmytro-krasyliuk.github.io/bott/" },
            },
          ],
        ],
      }),
    };
  };

  // Клавіатура для усіх учнів
  chooseStudents = async (type) => {
    let prefix = "infoStudent-/-";
    let dataStudentsBtns = [];
    let students1 = await User.find({});
    console.log(students1);
    if (type === "createGroup") {
      prefix = "newGroupStudent-/-";
    }

    if (type == "newLesson") {
      prefix = "newLesson-/-";

      try {
        let students = await User.find({});
        console.log(students);
        for (let i = 0; i < students.length; i++) {
          console.log("-- -- --");
          console.log(students[i]);
          dataStudentsBtns.push([
            {
              text: students[i].name + " " + students[i].lastName,
              callback_data:
                prefix +
                students[i].name +
                " " +
                students[i].lastName +
                "-/-" +
                students[i].idGroup,
            },
          ]);
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        for (let i = 0; i < students.length; i += 3) {
          let btns = [];
          for (let j = i; j < i + 3; j++) {
            if (students[j]) {
              btns.push({
                text: students[j].name + " " + students[j].lastName,
                callback_data: prefix + students[j].idGroup,
              });
            }
          }
          dataStudentsBtns.push(btns);
        }
      } catch (e) {}
    }
    return {
      reply_markup: JSON.stringify({
        inline_keyboard: dataStudentsBtns,
      }),
    };
  };

  showQuiz() {
    return {
      reply_markup: JSON.stringify({
        inline_keyboard: [
          [{ text: "Відповісти на питання", callback_data: "loadAnswer" }],
        ],
      }),
    };
  }

  technologiesKeyboard(newTechnologyList = []) {
    let technologiesBtnsList = [];

    for (let i = 0; i < technologiesStack.length; i++) {
      let sym = "";
      if (newTechnologyList.includes(technologiesStack[i])) {
        sym = " ✅";
      }
      technologiesBtnsList.push([
        {
          text: technologiesStack[i] + sym,
          callback_data: "selectTechnologies-" + technologiesStack[i],
        },
      ]);
    }

    return {
      reply_markup: JSON.stringify({
        inline_keyboard: technologiesBtnsList,
      }),
    };
  }
}

export { Keyboards };
