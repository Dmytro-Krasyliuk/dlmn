
// bot.sendChatAction(chatId, '')

// testBot(dataBot);

// function alarmDay() {
//   if (rssDay != time.day) {
//     for (let i = 0; i < students.length; i++) {
//       for (let j = 0; j < students[i].days.length; j++) {
//         if (students[i].days[j].day == time.day) {
//           try {
//             console.log(students[i].name);
//
//             tmp = `
// ✅ Заняття сьоодні о ${students[i].days[j].time_h}:${students[i].days[j].time_m}
//
// 🔐 Постійні доступи:
//
// 🌐 https://us04web.zoom.us/j/3533531158?pwd=nTl2kiicwvOgLNOHbaDaGMi8JQ1Ttj.1
//
// ID: 353 353 1158
// Код доступу: start
//
// 🛡  Оцінка за заняття: —
//
//             `;
//             bot.sendPhoto(students[i].idGroup, "img/indiv.jpg", {
//               caption: tmp,
//             });
//           } catch (e) {}
//         }
//       }
//     }
//   }
// }
// alarmDay();
//
// function check() {
// for (let i = 0; i < students.length; i++) {
//           tmp = `
// ⚡️ Влад Степаненко (💰70 грн)
// ⚡️ Ксенія Матвєєва (💰 70 грн)
// ⚡️ Арсеній Середа (💰550 грн)
// ⚡️ Даніель Шаповал (💰295 грн)
// ⚡️ Ілля Малов (💰400 грн)

// ⚡️ Георгій Аль-Хамес (💰485 грн)
// ⚡️ Леся (💰220 грн)
// ⚡️ Ксенія Ярошенко (💰180 грн)
// ⚡️ Лев Шабалін(💰150 грн)
// ⚡️ Назар Гаманюк (💰345 грн)
// ⚡️ Пилип Кірчев (💰200 грн)
// ⚡️ Олексій Калаба (💰200 грн)

// ⚡️ Віталій Красюк (💰100 грн)
// ⚡️ Антон Полісько (💰270 грн)
// ⚡️ Сава (💰70 грн)
// ⚡️ Паша Маренич (💰220 грн)
// ⚡️ Саша Риндич (💰50 грн)
// ⚡️ Кирил Жила(💰50 грн)
// ⚡️ Паша Кіячик(💰140 грн)

//             `;
//           bot.sendMessage(students[i].idGroup, tmp);

// }
// }

// check()

// function check() {
//   // Циклом перебрать всех пользователей. Если - то отправить смс
//   if (rssDay != currentDay && currentHour == "12") {
//     console.log(1);
//     for (let i = 0; i < students.length; i++) {
//       console.log(2);

//       for (let j = 0; j < students[i].days.length; j++) {
//         console.log(3);
//         if (students[i].days[j].day == currentDay) {
//           tmp = `
// ✅ Заняття сьогодні о ${students[i].days[j].time_h}:${students[i].days[j].time_m}

// 🔐 Постійні доступи:

// 🌐 https://us04web.zoom.us/j/3533531158?pwd=nTl2kiicwvOgLNOHbaDaGMi8JQ1Ttj.1

// ID: 353 353 1158
// Код доступу: start

// 🛡  Оцінка за заняття: —

//             `;
//           bot.sendPhoto(students[i].idGroup, "img/indiv.jpg", { caption: tmp });

//         }
//       }
//     }
//     rssDay = currentDay;
//   }
// }

// setInterval(check, 3);
// schedule {day: '',
// time: ''}


// let formSoloImg1 = {
//   idGroup: "-1001737433387",
//   name: "Учень Учнівський",
//   date: "13.06.2023",
//   teacher: "Красилюк Дмитро",
//   themes: [
//     "Прозорість елементів",
//     "Фон градієнтом",
//     "Кольори в програмуванні",
//     "Скорочення в CSS",
//     "Прозорість елементів",
//     "Фон градієнтом",
//     "Кольори в програмуванні",
//     "Скорочення в CSS",
//     "Прозорість елементів",
//     "Фон градієнтом",
//     "Кольори в програмуванні",
//     "Скорочення в CSS",
//   ],
//   technologies: ["bootstrap", "express"],
//   grade: "8",
//   photos: ["./img/students/solo/file_20.jpg"],
// };

// let idLesson = await drawSolo(
//   formSoloImg1.name,
//   formSoloImg1.grade,
//   formSoloImg1.technologies,
//   formSoloImg1.date,
//   formSoloImg1.teacher,
//   formSoloImg1.themes
// );


// drawSolo(
//   " dsfg sdfg ",
//   formSoloImg.grade,
//   [
//     "figma",
//     "jquery",
//     "scss",
//     "express",
//     "bootstrap",
//     "css",
//     "html",
//     "nodejs",
//     "mongodb",
//     "react",
//     "python",
//   ],
//   formSoloImg.date,
//   formSoloImg.teacher,
//   formSoloImg.themes
// );



// practiceList = [
//   {
//     idPractice: 1,
//     students: [
//       {
//         idStudent: 1,
//         result: {
//           successTask: [],
//           wrongTask: [],
//         },
//         historyCode: [
//           {
//             html: "",
//             css: "",
//             js: "",
//           },
//         ],
//         finish: false,
//         grade: 0,
//         time: 235432345,
//         code: {
//           html: "",
//           css: "",
//           js: "",
//         },
//       },
//     ],
//   },
// ];

// let practiceTasks = [
//   {
//     id: 1,
//     name: "Фон прямокутника",
//     description: "Прямокутнику дати червоний фон (red)",
//     type: "",
//     level: 1,
//     themes: ["css"],
//     tasks: [
//       {
//         title: "Додай прямокутнику червоний фон",
//         description: "Червоний на англійській мові - red",
//         check: [
//           {
//             type: "cssValue",
//             selector: "div",
//             selectorNumber: 0,
//             commandCSS: "background-color",
//             command: "backgroundColor",
//             value: "rgb(255, 0, 0)",
//             valueCSS: "red",
//           },
//         ],
//       },
//     ],
//     data: {
//       html: `
// <div> <div>

//         `,

//       css: `
// div {
//     width: 300px;
//     height: 300px;
//     background: blue;
// }
//         `,
//       js: `
// let resultInput = document.querySelector('.result-input')

//         `,
//     },
//   },
// ];

// ffmpeg("./video/lessons/themes/one.mp4")
//   .input("./video/lessons/themes/two.mp4")
//   .on("error", function (err) {
//     console.log("An error occurred: " + err.message);
//   })
//   .on("end", function () {
//     console.log("Merging finished !");
//   })
//   .mergeToFile("./video/lessons/themes/third.mp4", "./video/lessons/themes");


// function test() {
//   try {
//     for (let i = 0; i < students.length; i++) {
//       bot.sendMessage(
//         students[i].idGroup,
//         result(students[i].idGroup),
//       );
//     }
//   } catch (e) {}
// }
// test();

// function deleteMessage() {

//   for (let i = 0; i < students.length; i++) {
//     let copyMsg = bot.deleteMessage(students[i].idGroup, )
//     setTimeout(()=>{
//         console.log(copyMsg)
//     }, 2000)
//   }
// }

// deleteMsg();