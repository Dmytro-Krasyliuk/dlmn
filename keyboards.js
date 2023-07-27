import { students } from "./data.js";

import { technologiesStack, cThemes, adminId } from "./data.js";
import { User } from "./database/index.js";
import { testsID, shuffle, getNamesOneStudentByIdGroup } from "./app.js";
let namesRight = [];
let namesError = [];

const editTest = (keyboard, answer, bot, chatId) => {
  for (let i = 0; i < keyboard.inline_keyboard.length; i++) {
    let idTest = answer.slice(answer.length - 8);
    console.log("testsID");
    console.log('testsID' + testsID);
    console.log("idTest" + idTest);

    if (answer == keyboard.inline_keyboard[i][0].callback_data) {

      if (answer.startsWith("testAnswer-right-")) {
        testsID.forEach((testID) => {

          if (testID.idQuiz == idTest) {


            if (testID.answers.error.includes(chatId)) {
              console.log('!!222!!')
            }

           
            
            testID.answers.right.push(chatId);
            namesRight = [];
            namesError = [];

            testID.answers.right.forEach((id) => {
              namesRight.push(getNamesOneStudentByIdGroup(id));
            })

            testID.answers.error.forEach((id) => {
              namesError.push(getNamesOneStudentByIdGroup(id));
            });

            // testsID.push({
            //   idQuiz: idTest,
            //   idMessage: idMessage,
            //   answers: {
            //     right: [],
            //     error: [],
            //     notData: [],
            //   },
            //   title: title,
            //   options: optionsText,
            //   rightAnswer: rightAnswer,
            // });

            let templateResult = `
<b>Питання:</b>
${testID.title}

<b>Варіанти відповіді:</b>
${testID.options}

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
${testID.options}

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

const createTest = (tasks, id) => {
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

function themesKeyboard(list) {
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

const gradeKeyboard = () => {
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

const confirmThemes = {
  reply_markup: {
    keyboard: [[{ text: "Підтвердити теми" }]],
    resize_keyboard: true,
  },
};

const practiceKeyboard = (idStudent, idTask) => {
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

const themesDelete = (themes) => {
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

const mainThemes = (themes) => {
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

const themesKeyboard2 = (currentThemes, themes) => {
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

const keyboardOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        { text: "0", callback_data: "grade-0" },
        { text: "my text2", callback_data: "super2" },
      ],
      [{ text: "my text3", callback_data: "super5" }],
    ],
  }),
};

const keyboardDaysWeek = {
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


const keyboardSymbols = {
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

const keyboardTimeWeek = {
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

const keyboardAdmin = {
  reply_markup: JSON.stringify({
    keyboard: [
      [{ text: "Додати учня" }, { text: "Додати подію" }],
      [{ text: "my text3" }],
    ],
  }),
};

const photoKeyboard = {
  reply_markup: JSON.stringify({
    keyboard: [[{ text: "Підтвердити фото" }]],
    resize_keyboard: true,
  }),
};

const templateSuccess = (groupId, idMsg) => {
  let linkTemplate = `https://t.me/c/${groupId}/${idMsg}`;
  return {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: "Посилання на шаблон", url: linkTemplate }],
        [{ text: "Видалити шаблон", callback_data: `deleteTemplate-${idMsg}` }],
      ],
    }),
  };
};

const adminMain = {
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

const templatesKeyboard = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: "Усі шаблони", callback_data: "allTemplate" }],
      [{ text: "Створити шаблон", callback_data: "createTemplate" }],
    ],
  }),
};

const registeredQuiz = {
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
const keyboardIsNextDay = {
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

const confirmNewGroup = {
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

const confirmSave = {
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

const confirmTechnology = {
  reply_markup: {
    keyboard: [["Підтвердити технології"]],
    resize_keyboard: true,
    one_time_keyboard: true,
    force_reply: true,
  },
};

const confirmDate = (date) => {
  return {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: date, callback_data: "info-" + date }],
        [{ text: "Інша дата", callback_data: "otherDateLesson" }],
      ],
    }),
  };
};

const openApp = () => {
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
const chooseStudents = async function (type) {
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
      students = await User.find({});
      console.log(students);
      for (let i = 0; i < students.length; i ++) {
        console.log('-- -- --')
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
      console.log(e)
    }
  } else {
    try {
      for (let i = 0; i < students.length; i += 3) {
        let btns = [];
        for (let j = i; j < i+3; j++) {
          if ( students[j]){
           btns.push( {
            text: students[j].name + " " + students[j].lastName,
            callback_data: prefix + students[j].idGroup,
          })
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

function showQuiz() {
  return {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: "Відповісти на питання", callback_data: "loadAnswer" }],
      ],
    }),
  };
}

function technologiesKeyboard(newTechnologyList = []) {
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

export {
  keyboardOptions,
  adminMain,
  confirmSave,
  chooseStudents,
  templateSuccess,
  templatesKeyboard,
  showQuiz,
  registeredQuiz,
  confirmDate,
  technologiesKeyboard,
  confirmTechnology,
  themesKeyboard,
  gradeKeyboard,
  openApp,
  themesKeyboard2,
  keyboardAdmin,
  photoKeyboard,
  keyboardDaysWeek,
  keyboardTimeWeek,
  keyboardIsNextDay,
  confirmThemes,
  themesDelete,
  mainThemes,
  confirmNewGroup,
  createTest,
  editTest,
  practiceKeyboard,
  keyboardSymbols,
};
