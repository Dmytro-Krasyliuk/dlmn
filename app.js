import express from "express";
import cors from "cors";
import http from "http";
import { Server as socketIO } from "socket.io";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import fetch from "node-fetch";
import { json } from "express";
import TelegramApi from "node-telegram-bot-api";
import * as htmlToImage from "html-to-image";
import nodeHtmlToImage from "node-html-to-image";
import mongoose, { Schema } from "mongoose";
import { JSDOM } from "jsdom";
import ffmpeg from "fluent-ffmpeg";
import request from "request";
import { themes, students, templates } from "./data.js";
import { result } from "./rss/quiz.js";
import time from "./time.js";
import { drawResult } from "./draw/quiz.js";
import { drawPracticeTask } from "./draw/practice.js";
import { v4 as uuid } from "uuid";
import { drawSolo } from "./draw/solo-lesson.js";
import { technologiesKeyboard } from "./keyboards.js";
import { testsImage } from "./tests-image.js";
import { generatePracticeTaskHTML } from "./practiceTasksHTML.js";
import getCodeColor from "./getCodeColor.js";
import generatePracticeTask from "./generatePracticeTask.js";
import { Practice, User, studentListPractice } from "./database/index.js";
// import { Practice, User, students, studentListPractice } from "./data.js";

const app = express();
const server = http.createServer(app); // Use http.createServer with Express app
const io = new socketIO(server); // Initialize socket.io with the existing server

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const port = process.env.PORT || 3009;












app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(json());

function getNamesOneStudentByIdGroup(id) {
  let names = "";
  students.forEach((student) => {
    if (student.idGroup == id) {
      names = student.name + " " + student.lastName;
    }
  });
  return names;
}

app.use(cors());
app.use(express.json());

app.get("/tests", async (req, res) => {
  const token = "6183220599:AAGzgg3MrVrxu2lu92WoBRRpLWanGa2UmWU";
  const myId = 957139896;

  let result = {
    idTask: 1,
    idStudent: 957139896,
    link: "https://cdpn.io/cpe/boomboom/index.html?key=index.html-926c7914-f3e8-a91b-5f31-f26f474c5703",
    successTask: [1, 0, 0, 0],
    code: {
      html: "%0A%20%20%20%20%0A%3Cdiv%20class%3D%22block%22%3E%20%3Cdiv%3E%0A%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%0A%20%20%0A%3Cscript%20src%3D%22https%3A%2F%2Fcpwebassets.codepen.io%2Fassets%2Fcommon%2FstopExecutionOnTimeout-2c7831bb44f98c1391d6a4ffda0e1fd302503391ca806e7fcc7b9b87197aec26.js%22%3E%3C%2Fscript%3E%0A%20%20%3Cscript%20src%3D%22https%3A%2F%2Fcdpn.io%2Fcpe%2Fboomboom%2Fpen.js%3Fkey%3Dpen.js-926c7914-f3e8-a91b-5f31-f26f474c5703%22%20crossorigin%3D%22%22%3E%3C%2Fscript%3E%0A%0A%0A%3C%2Fdiv%3E",
      css:
        "\n" +
        "    .block {\n" +
        "  width: 100px;\n" +
        "  height: 300px;\n" +
        "  background: red;\n" +
        "}\n" +
        "        \n" +
        "  ",
      js: "",
    },
  };

  let task = await Practice.findOne({ id: result.idTask });
  let successTask = "";
  let wrongTask = "";

  result.successTask.forEach((status, i) => {
    if (status == 1) {
      successTask += `✅ ${task.tasks[i].title}
`;
    } else {
      wrongTask += `❌ ${task.tasks[i].title}
`;
    }
  });

  let templateText =
    `
*Учень завершив практичне завдання!*

Учень: ${getNamesOneStudentByIdGroup(result.idStudent)}

Завдання №${result.idTask}: 
*${task.name}*

Виконав завдання:
${successTask}
Не виконав завдання:
${wrongTask}

[Переглянути роботу:](${result.link})

Код:
*HTML*:
` +
    "`" +
    decodeURIComponent(result.code.html) +
    "`" +
    `

*CSS*:

` +
    "`" +
    decodeURIComponent(result.code.css) +
    "`" +
    `

*JS*
` +
    "`" +
    decodeURIComponent(result.code.js) +
    "`" +
    `
  
  `;

  templateText = templateText.replace(/\n/g, "%0A");

  let sendURL = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${myId}&text=${templateText}&parse_mode=Markdown`;
  fetch(sendURL);

  console.log(templateText);

  res.send("ok");
});
app.get("/sandbox/select/:data", function (req, res) {
  let data = req.params.data;
  console.log();
});



function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}


// app.post("/process-image", async (req, res) => {
//   try {
//     const { imageUrl } = req.body;

//     const response = await fetch(imageUrl);
//     const buffer = await response.buffer();

//     const decodedImage = tf.node.decodeImage(buffer);
//     const model = await load();
//     const predictions = await model.detect(decodedImage);
//     decodedImage.dispose();

//     res.json(predictions);
//   } catch (error) {
//     console.error("Ошибка при обработке изображения:", error);
//     res.status(500).json({ error: "Ошибка при обработке изображения" });
//   }
// });

app.post("/set/practice", async (req, res) => {
  const data = req.body;
  const token = "6183220599:AAGzgg3MrVrxu2lu92WoBRRpLWanGa2UmWU";
  const myId = 957139896;
  let isFinish = false;

  let result = req.body;

  let task = await Practice.findOne({ id: result.idTask });
  let studentPractice = await studentListPractice.findOne({
    idPractice: result.idTask,
  });

  studentPractice.students.forEach(async (student, index) => {
    if (student.idStudent == result.idStudent) {
      console.log("student.finish: ", student.finish);

      isFinish = student.finish;
      if (isFinish == false) {
        const nestedArrayPath = `students.${index}.historyCode`;
        const studentPath = `students.${index}.finish`;

        const newElement = {
          html: result.code.html,
          css: result.code.css,
          js: result.code.js,
        };
        let a = await studentListPractice.updateOne(
          { idPractice: result.idTask },
          { $push: { [nestedArrayPath]: newElement } }
        );

        if (result.type == "sendInfo") {
          let aa = await studentListPractice.updateOne(
            { idPractice: result.idTask },
            { [studentPath]: true }
          );
          console.log(aa);
        }

        console.log(a);
      }
    }
  });

  if (isFinish == false) {
    let successTask = "";
    let wrongTask = "";

    result.successTask.forEach((status, i) => {
      if (status == 1) {
        successTask += `✅ ${task.tasks[i].title} ${task.tasks[i].label}
`;
      } else {
        wrongTask += `❌ ${task.tasks[i].title} ${task.tasks[i].label}
`;
      }
    });

    let templateText;

    if (result.type == "updateInfo") {
      templateText =
        `
*ОНОВЛЕННЯ ДАННИХ*

Учень: ${getNamesOneStudentByIdGroup(result.idStudent)}

Завдання №${result.idTask}: 
*${task.name}*

Виконав завдання:
${successTask}
Не виконав завдання:
${wrongTask}

[Переглянути роботу:](${result.link})

Код:
*HTML*:
` +
        "`" +
        decodeURIComponent(result.code.html) +
        "`" +
        `

*CSS*:

` +
        "`" +
        decodeURIComponent(result.code.css) +
        "`" +
        `

*JS*
` +
        "`" +
        decodeURIComponent(result.code.js) +
        "`" +
        `
  
  `;

      templateText = templateText.replace(/\n/g, "%0A");
    }

    if (result.type == "sendInfo") {
      templateText =
        `
*Учень завершив практичне завдання!*

Учень: ${getNamesOneStudentByIdGroup(result.idStudent)}

Завдання №${result.idTask}: 
*${task.name}*

Виконав завдання:
${successTask} 
Не виконав завдання:
${wrongTask}

[Переглянути роботу:](${result.link})

Код:
*HTML*:
` +
        "`" +
        decodeURIComponent(result.code.html) +
        "`" +
        `

*CSS*:

` +
        "`" +
        decodeURIComponent(result.code.css) +
        "`" +
        `

*JS*
` +
        "`" +
        decodeURIComponent(result.code.js) +
        "`" +
        `
  
  `;

      templateText = templateText.replace(/\n/g, "%0A");
    }

    let sendURL = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${myId}&text=${templateText}&parse_mode=Markdown`;
    fetch(sendURL);

    // console.log(templateText);

    res.send("ok");
  } else {
    res.send("error");
  }
  // res.send(`Hello, POST request received! Data: ${JSON.stringify(data)}`);
});

app.get("/getTasks/:idStudent/:idTask", async (req, res) => {
  let idStudent = req.params.idStudent;
  let idTask = Number(req.params.idTask);
  let task = "not defined";
  task = await Practice.findOne({ id: idTask });
  console.log("hello");
  return res.send({ data: task });
});

app.get("/get/practice/:idTask/:idStudent", async (req, res) => {
  let idTask = Number(req.params.idTask);
  let idStudent = req.params.idStudent;
  let nameStudent = getNamesOneStudentByIdGroup(idStudent);
  let task = await Practice.findOne({ id: idTask });

  let studentPractice = await studentListPractice.findOne({
    idPractice: idTask,
  });

    if (studentPractice) {
    

  let allStudentsData = [];
  console.log(studentPractice);

  if (studentPractice) {
  studentPractice.students.forEach((student) => {
    let myProfile = "";
    if (student.idStudent == idStudent) {
      myProfile = "your-car";
    }
    allStudentsData.push({
      studentName: getNamesOneStudentByIdGroup(student.idStudent),
      studentCar: "/img/car-1.png",
      studentId: student.idStudent,
      myProfile: myProfile,
      studentCurrentPosition: 3,
    });
  });
  }



  
  console.log("check");
  console.log(task.tasks[0].check);

  let HTML = task.codeResult.html;
  let CSS = task.codeResult.css;
  let JS = task.codeResult.js;
  let taskName = task.name;

  let data = {
    nameStudent: nameStudent,
    idStudent: idStudent,
    idTask: idTask,
    taskName: taskName,
    allStudentsData: allStudentsData,
    task: task,
    tasks: task.tasks,
    code: {
      HTML: HTML,
      CSS: CSS,
      JS: JS,
    },
  };
  console.log(data.code);
  console.log("task", task);
  res.render("practice", data);
    }
  res.render("practice", {});

});

app.get("/css/style.css", function (req, res) {
  res.sendFile(__dirname + "/public/css/style.css");
});

app.get("/js/practice/:idTask/:idStudent", async (req, res) => {
  let idTask = req.params.idTask;
  let idStudent = req.params.idStudent;
  let studentPractice = await studentListPractice.findOne({
    idPractice: idTask,
  });
  let imageResult = studentPractice.photo;
  let template = `
  
let idStudent = ${idStudent};
let idTask = ${idTask};
let imageResult = '${imageResult}'

initProject(idStudent, idTask, imageResult);
  `;
  res.setHeader("Content-Type", "application/javascript");
  res.send(template);
});

io.on("connection", (socket) => {
  console.log("New client connected");

  // socket.on("codeChange", (data) => {
  //   console.log("Code change event received from client");
  //   socket.broadcast.emit("codeChange", data);
  // });

  // socket.on("clear-hightlight", (data) => {
  //   console.log("clear-hightlight");
  //   socket.broadcast.emit("clear-hightlight", data);
  // });

  // socket.on("change-mouse", (data) => {
  //   socket.broadcast.emit("change-mouse", data);
  // });

  // socket.on("click", (data) => {
  //   console.log("click");
  //   socket.broadcast.emit("click", data);
  // });

  // socket.on("highlightText", (data) => {
  //   console.log("Highlight text event received from client");
  //   socket.broadcast.emit("highlightText", data);
  // });

  // socket.on("block-code", () => {
  //   console.log("block-code");
  //   socket.broadcast.emit("block-code");
  // });

  // socket.on("unblock-code", () => {
  //   console.log("unblock-code");
  //   socket.broadcast.emit("unblock-code");
  // });

  socket.on("car-position", (data) => {
    console.log("car-position");
    socket.broadcast.emit("car-position", data);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

let newGroupStudent = [];
// let tests = false;
// let practice = false;
let typeThemes = 'practice'
let testsID = [];
let practiceList = [];

// await studentListPractice.deleteMany({});

let idMsgThemes = 0;
let currentThemes = themes[0].data;
let formSoloImg = {
  idGroup: "",
  name: "",
  date: "",
  teacher: "Красилюк Дмитро",
  themes: [],
  technologies: [],
  grade: "",
  photos: [],
};
let newUserStatus;

import {
  keyboardOptions,
  adminMain,
  confirmSave,
  chooseStudents,
  templateSuccess,
  templatesKeyboard,
  showQuiz,
  registeredQuiz,
  confirmDate,
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
} from "./keyboards.js";

let oldMessage = "";
let lastMsgId = 0;
let idCalendar = 0;
let idMsgTechnologies;
let activeGroupStudent = "";
const myId = 957139896;
const templateGroupId = -1001908490825;
const groupId = String(templateGroupId).slice(4);
let cc = "";

const token = "6183220599:AAGzgg3MrVrxu2lu92WoBRRpLWanGa2UmWU";
let rssDay = 0;

const bot = new TelegramApi(token, { polling: true });

let botId = "6183220599";

await Practice.deleteMany({});
await studentListPractice.deleteMany({});

await Practice.insertMany([
  generatePracticeTask({
    id: 1,
    name: "Картка товару ",
    description: "(мікрофон)",
    type: "classElement",
    level: 1,
    codeResult: {
      html: `<div class="app">
  <img class="app__img" src="https://w7.pngwing.com/pngs/487/704/png-transparent-football-field-football-field-green-background-football.png" alt="">
  <img class="bal" src="https://www.pngplay.com/wp-content/uploads/6/Sports-Football-Transparent-PNG.png" alt="">
  <div class="form">
    <h2 class="form-title">Приєднуйся до нашого клубу футболістів</h2>
    <input type="text" class="form-name">
    <input type="text" class="form-phone">
    <button class="form-btn">Відправити заявку</button>
  </div>
</div>
    `,
      css: `.app__img {
  width: 700px;
  position: absolute;
  top: 0;
  left: 0;
  
}
.bal {
  position: absolute;
  top: 215px;
  left: 330px;
  width: 40px;
}
.form {
  position: absolute;
  top: 10px;
  left: 750px;
  background: skyblue;
  padding: 20px;
  border-radius: 10px;
  width: 250px;
  color: white;
  
}

.form-name {
  padding: 10px;
  border-radius: 2px;
  color: lime;
  font-size: 22px;
  width: 220px;
  margin-bottom: 20px;
}
.form-phone {
  padding: 10px;
  border-radius: 2px;
  color: lime;
  font-size: 22px;
  width: 220px;
  margin-bottom: 20px;
}
.form-btn {
  background: lime;
  border-radius: 5px;
  padding: 20px;
  width: 240px;
  border: 0;
  cursor: pointer;
}`,
      js: `
    `,
    },
    data: {
      html: ``,
      css: ``,
      js: ``,
    },
  }),
  generatePracticeTask({
    id: 12,
    name: "Картка товару ",
    description: "(мікрофон)",
    type: "classElement",
    level: 1,
    codeResult: {
      html: `<div class="product">
  <img class="image" src="https://content1.rozetka.com.ua/goods/images/big/325921621.jpg" alt="">
  <h1 class="title">Мікрофон DKWAY PSY-950</h1>
  <p class="text">Професійний мікрофон зі студійним звукозаписом</p>
  <button class="btn">Купити</button>
</div>
    `,
      css: `
.product {
  width: 400px;
}
.image {
  width: 200px;
}
.title {
  color: blue;
}
.text {
  color: darkblue;
}
.btn {
  background: skyblue;
  border: 0;
  width: 80px;
  height: 30px;
  border-radius: 5px;
}
    `,
      js: `
    `,
    },
    data: {
      html: ``,
      css: ``,
      js: ``,
    },
  }),

  generatePracticeTask({
    id: 2,
    name: "Картка товару ",
    description: "(мікрофон)",
    type: "classElement",
    level: 1,
    codeResult: {
      html: `<div class="block">
  <button class="btn1">Показати детальніше</button>
  <button class="btn2">Купити</button>
</div>
    `,
      css: `.block {
  background: skyblue;
  width: 330px;
  height: 200px;
  border: 3px solid pink;
}

.btn1 {
  margin-top: 30px;
  margin-left: 20px;
  width: 170px;
  background: orange;
  border: 0;
  color: white;
  height: 30px;
  border-radius: 4px;
}
.btn2 {
  margin-top: 30px;
  margin-left: 10px;
  width: 100px;
  background: black;
  border: 0;
  color: white;
  height: 30px;
  border-radius: 4px;
}
    `,
      js: `
    `,
    },
    data: {
      html: ``,
      css: ``,
      js: ``,
    },
  }),

  generatePracticeTask({
    id: 3,
    name: "Картка товару ",
    description: "(мікрофон)",
    type: "classElement",
    level: 1,
    codeResult: {
      html: `<div class="card">
  <img src="https://assetmanagerpim-res.cloudinary.com/images/w_600/q_75/e0b0c6f10e9b437db09eac7c00ebe619_9366/GK9977_05_laydown.WebP" alt="" class="card__img">
  <h1 class="title">СПОРТИВНИЙ КОСТЮМ AEROREADY ESSENTIALS 3-STRIPES</h1>
    <s>1510</s>
  <u class="u"><b>1420</b></u>
  <i>грн</i>
  <p>Цей спортивний костюм виконаний в архівному стилі adidas. Ти можеш носити олімпійку і штани як окремо, так і разом, щоб створити невимушений повсякденний образ. Вологовбираючий матеріал AEROREADY збереже відчуття сухості. Модель робить свій внесок в екологічне вирощування бавовни і виконана з перероблених матеріалів. Це частина нашої програми по скороченню пластикових відходів.</p>

  <br>
  <input class="card__input" type="text" placeholder="Ваше імя">
  <textarea class="card__textarea" placeholder="Ваш коментар" name="" id="" cols="30" rows="10"></textarea> <br>
  <button class="buy">Купити</button>
  <button class="favorites">Додати в обране</button>
  
</div>
    `,
      css: `.card {
  background: black;
  padding: 20px;
  width: 400px;
  color: white;
}
.card__img {
  width: 380px;
}
.u {
  font-size: 28px;
  color: orangered;
}
.card__input {
  margin-bottom: 20px;
  margin-top: 20px;
  padding: 10px;
  border: 0;
  width: 320px;
}
.card__textarea {
  padding: 10px;
  margin-bottom: 20px;
  width: 320px;
  
}
.buy {
  background: orange;
  color: black;
  padding: 10px;
  width: 130px;
  border-radius: 4px;
  border: 0;
  margin-right: 20px;
}
.favorites {
  background: skyblue;
  border: 0;
  padding: 10px;
  border-radius: 4px;
  width: 160px;
}
    `,
      js: `
    `,
    },
    data: {
      html: ``,
      css: ``,
      js: ``,
    },
  }),

  generatePracticeTask({
    id: 4,
    name: "Картка товару ",
    description: "(мікрофон)",
    type: "classElement",
    level: 1,
    codeResult: {
      html: `<div class="product">
  <img class="image" src="https://content1.rozetka.com.ua/goods/images/big/325921621.jpg" alt="">
  <h1 class="title">Мікрофон DKWAY PSY-950</h1>
  <p class="text">Професійний мікрофон зі студійним звукозаписом</p>
  <button class="btn">Купити</button>
</div>
    `,
      css: `
.product {
  width: 400px;
}
.image {
  width: 200px;
}
.title {
  color: blue;
}
.text {
  color: darkblue;
}
.btn {
  background: skyblue;
  border: 0;
  width: 80px;
  height: 30px;
  border-radius: 5px;
}
    `,
      js: `
    `,
    },
    data: {
      html: ``,
      css: ``,
      js: ``,
    },
  }),

  generatePracticeTask({
    id: 5,
    name: "Картка товару ",
    description: "(мікрофон)",
    type: "classElement",
    level: 1,
    codeResult: {
      html: `<div class="product">
  <img class="image" src="https://content1.rozetka.com.ua/goods/images/big/325921621.jpg" alt="">
  <h1 class="title">Мікрофон DKWAY PSY-950</h1>
  <p class="text">Професійний мікрофон зі студійним звукозаписом</p>
  <button class="btn">Купити</button>
</div>
    `,
      css: `
.product {
  width: 400px;
}
.image {
  width: 200px;
}
.title {
  color: blue;
}
.text {
  color: darkblue;
}
.btn {
  background: skyblue;
  border: 0;
  width: 80px;
  height: 30px;
  border-radius: 5px;
}
    `,
      js: `
    `,
    },
    data: {
      html: ``,
      css: ``,
      js: ``,
    },
  }),

  generatePracticeTask({
    id: 6,
    name: "Картка товару ",
    description: "(мікрофон)",
    type: "classElement",
    level: 1,
    codeResult: {
      html: `<div class="product">
  <img class="image" src="https://content1.rozetka.com.ua/goods/images/big/325921621.jpg" alt="">
  <h1 class="title">Мікрофон DKWAY PSY-950</h1>
  <p class="text">Професійний мікрофон зі студійним звукозаписом</p>
  <button class="btn">Купити</button>
</div>
    `,
      css: `
.product {
  width: 400px;
}
.image {
  width: 200px;
}
.title {
  color: blue;
}
.text {
  color: darkblue;
}
.btn {
  background: skyblue;
  border: 0;
  width: 80px;
  height: 30px;
  border-radius: 5px;
}
    `,
      js: `
    `,
    },
    data: {
      html: ``,
      css: ``,
      js: ``,
    },
  }),
]);

function testBot(dataBot) {
  if (dataBot.video) {
    bot.sendVideo(myId, "video/lessons/2.mp4");
  }
}

function loadTasks() {}

let dataBot = {
  text: "my sms",
  video: "lessons/block-strock-p-2.mp4",
  buttons: [
    {
      text: "btn1",
      handler: loadTasks,
    },
  ],
};

let newUser = {
  name: "",
  family: "",
  age: "",
  group: "",
  price: "",
  date: {
    day: "",
    month: "",
    year: "",
  },
  contact: "",
  days: [],
};

function addNewUser(newUser) {
  return {
    name: newUser.name,
    lastName: newUser.family,
    days: newUser.days,
    pay: {
      day: newUser.day,
      month: newUser.month,
      year: newUser.year,
      sum: newUser.price,
      isPay: false,
    },
    events: [],
    quiz: {
      allMoney: 0,
      currentMoney: 0,
      lastResultMoney: 0,
    },
    contact: [],

    idGroup: newUser.group,
  };
}

async function sendFirstInfo(chatId, name, schedule) {
  let messageToPin = await bot.sendPhoto(chatId, "./img/other/start-it.jpg", {
    caption: `
<i>Привіт, ${name}!</i>

<b>🥳 Ми починаємо наші заняття по програмуванню!</b>

Ось уся необхідна інформація, яка стосується нашого навчання:

<b>🔐 Постійні доступи до занять:</b>

🔎 https://us04web.zoom.us/j/3533531158?pwd=nTl2kiicwvOgLNOHbaDaGMi8JQ1Ttj.1

🔑 <b>ID:</b> 353 353 1158
🔑 <b>Код доступу:</b> start
  `,
    parse_mode: "HTML",
  });
  await bot.pinChatMessage(chatId, messageToPin.message_id);

  let scheduleText = ``;

  schedule.forEach((item) => {
    scheduleText += `
📌 ${item.day}: ${item.time}
`;
  });
  await bot.sendMessage(
    chatId,
    `
<b>Розклад індивідуальних занять:</b>
<b>${scheduleText}</b>
⚠️ Час вказаний за Києвом.
⚠️ Для першого заняття нічого встановлювати не потрібно. Достатньо лише програми Zoom для того щоб приєднатись на заняття.


  `,
    {
      parse_mode: "HTML",
    }
  );

  await bot.sendMessage(
    chatId,
    `
<b>📆 Розклад інших заходів:</b>

<b>📌 Понеділок: </b>
Отримуєте авторський відео-матеріал.

<b>📌 Вівторок:</b>
Отримуєте теоретичні та практичні завдання для засвоєння відео-матеріалу.

<b>📌 Четвер: </b>
<u>20:00</u> - Змагання по програмуванню.

<b>📌 Субота: </b>
<u>20:00</u> - Заняття у групі. <i>Легкий рівень.</i>

<b>📌 Неділя: </b>
<u>20:00</u> - Заняття у групі. <i>Важкий рівень.</i>

  `,
    {
      parse_mode: "HTML",
    }
  );
}

bot.setMyCommands([
  { command: "/admin", description: "admin" },
  { command: "/results", description: "показати результати" },
  { command: "/start", description: "start" },
  { command: "/help", description: "ok" },
]);

bot.on("message", async (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;
  lastMsgId = msg.message_id;

  // let ddata = [
  //   {
  //     id: uuid(),
  //     title: "Оберіть те що можна написати в тег address",
  //     description: "description 1",
  //     options: [
  //       "+38 050 014 15",
  //       "ноутбук Lenovo",
  //       "Замовити",
  //       "будь-яке зображення",
  //     ],
  //   },
  //   {
  //     id: uuid(),
  //     title: "Оберіть те що можна написати в тег address 2",
  //     description: "description 2",
  //     options: [
  //       "+38 050 014 15 2",
  //       "ноутбук Lenovo 2",
  //       "Замовити 2",
  //       "будь-яке зображення 2",
  //     ],
  //   },
  // ];

  // bot.sendMessage(
  //   chatId,
  //   "click me 2",
  //   openApp("https://codepen.io/DimaNice/full/OJBodYj")
  // );

  if (newUserStatus) {
    if (newUserStatus == "name") {
      newUser.name = text;
      bot.sendMessage(chatId, "Вкажіть прізвище учня");
      newUserStatus = "family";
    } else if (newUserStatus == "family") {
      newUser.family = text;
      bot.sendMessage(chatId, "Вкажіть вік учня");
      newUserStatus = "age";
    } else if (newUserStatus == "age") {
      newUser.age = text;
      bot.sendMessage(chatId, "Оберіть день занятя", keyboardDaysWeek);
      newUserStatus = "schedule";
    } else if (newUserStatus == "price") {
      // if () { 112

      // }
      newUser.group = text;
      bot.sendMessage(chatId, "Вкажіть вартість навчання за місяць");
      newUserStatus = "idGroup";
    } else if (newUserStatus == "idGroup") {
      newUser.price = text;
      bot.sendMessage(chatId, "Вкажіть ID групи");
      newUserStatus = "date";
    } else if (newUserStatus == "date") {
      try {
        let c = await bot.getChatMember(text, botId);

        newUser.group = text;
        bot.sendMessage(chatId, "Вкажіть дату початку занять та оплати");
        newUserStatus = "contact";
      } catch (e) {
        bot.sendMessage(
          chatId,
          "Вкажіть вірний ID групи. Можливо Бот не є адміністратором цієї групи"
        );
        newUserStatus = "date";
      }
    } else if (newUserStatus == "contact") {
      newUser.contact = text;
      bot.sendMessage(chatId, "Вкажіть контактну особу");
      newUserStatus = "success";
    } else if (newUserStatus == "success") {
      // console.log(newUser);
      await bot.setChatPhoto(newUser.group, "./img/other/ava-group.png");

      let link = await bot.getChat(Number(newUser.group));
      // console.log(link);
      // console.log(link.invite_link);
      // bot.sendMessage(chatId, link.invite_link);

      bot.sendPhoto(chatId, "./img/other/invite-group.png", {
        caption: `<b>🥳Вітаю! Ваше навчання вже розпочинається!</b>

<b>1 крок:</b>
Приєднайтесь до групи: 
${link.invite_link}

<b>Це ваша особиста, основна група, де буде інформація лише про Ваше навчання, Ваші домашки, Ваші оцінки і т.д.</b> 

<i>Також це запрошення, за бажанням, ви можете відправити усім хто має бути в курсі всіх подій стосовно навчання (батько, мати, син, донька і т.д.)</i>`,
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [{ text: "Приєднатись до групи", url: link.invite_link }],
          ],
        },
      });

      User.insertMany(addNewUser(newUser))
        .then(function () {
          // console.log("Успешно сохраненные элементы в БД");
        })

        .catch(function (err) {});

      bot.sendMessage(chatId, "Учень успішно зареєстрований!");
      newUserStatus = undefined;
      // console.log(newUser.group);

      sendFirstInfo(newUser.group, newUser.name, newUser.days);
    }
  }

  // commands
  if (text === "/start") {
    bot.sendMessage(chatId, "Hello");
    bot.sendSticker(
      chatId,
      "https://th.bing.com/th/id/R.dcc695cb7dfebe439d96a1b2783620b5?rik=miYGC2ZgeKLgmg&pid=ImgRaw&r=0",
      keyboardOptions
    );
  }

  if (text === "1") {
    bot.sendMessage(chatId, "symbols", keyboardSymbols);
  }

  // commands
  if (text === "/results") {
    let results = [];
    // console.log("newGroupStudent", newGroupStudent);
    newGroupStudent.forEach((studentId) => {
      let answerSum = {
        right: 0,
        error: 0,
        notData: 0,
      };
      testsID.forEach((testId) => {
        // console.log("testId", testId.answers);

        if (testId.answers.right.includes(Number(studentId))) {
          console.log("++");
          answerSum.right = answerSum.right + 1;
        }
        if (testId.answers.error.includes(Number(studentId))) {
          console.log("--");
          answerSum.error = answerSum.error + 1;
        }
        if (testId.answers.notData.includes(Number(studentId))) {
          console.log("00");
          answerSum.notData = answerSum.notData + 1;
        }
      });

      results.push({
        id: studentId,
        answerSum: answerSum,
      });
    });

    let sortListResults = results.sort((a, b) =>
      a.answerSum.right < b.answerSum.right ? 1 : -1
    );
    let text = `
Результати тестів:

`;
    sortListResults.forEach((student, i) => {
      let percent =
        student.answerSum.right /
        (student.answerSum.error +
          student.answerSum.notData +
          student.answerSum.right);
      let grade =
        percent < 0.2
          ? 6
          : percent < 0.3
          ? 7
          : percent < 0.5
          ? 8
          : percent < 0.7
          ? 9
          : percent < 0.8
          ? 10
          : percent < 0.9
          ? 11
          : percent >= 0.9
          ? 12
          : undefined;
      text += `
<b>${i + 1}. ${getNamesOneStudentByIdGroup(student.id)}</b>
✅ Правильних: ${student.answerSum.right}
❌ Неправильних: ${student.answerSum.error}
🔘 Немає відповіді: ${student.answerSum.notData}
% Правильних: ${percent.toFixed(2) * 100}%
<b>Оцінка: ${grade} балів</b>
 
`;
    });

    console.log("results", results);

    bot.sendMessage(chatId, text, { parse_mode: "HTML" });
  }

  if (text === "/admin") {
    if (chatId == myId) {
      bot.sendMessage(chatId, "Оберіть потрібну дію", adminMain);
    }
  }

  if (text == "Підтвердити нову групу") {
    let newGroupNames = getNamesStudentByIdGroup(newGroupStudent);

    console.log(newGroupNames);
    bot.sendMessage(
      chatId,
      "Група успішно створена. Усі учні в групі: " + newGroupNames,
      adminMain
    );
  }

  if (text == "Підтвердити теми") {
    bot.sendMessage(
      chatId,
      "Відправте фото звіт заняття (код, результат, скріншоти)",
      photoKeyboard
    );
  }

  if (text === "tts") {
    for (let i = 0; i < students.length; i++) {
      await drawResult(
        students[i].name + " " + students[i].lastName,
        students[i].quiz.lastResultMoney
      );
      await bot.sendPhoto(chatId, "./image20.png");
    }
  }
  if (text == "фф") {
    cc = await bot.sendPoll(
      chatId,
      "Title quiz",
      JSON.stringify(["variant1", "variant2", "variant3"]),
      {
        is_anonymous: false,
        type: "quiz",
        correct_option_id: 0,
        explanation: "Дивись хвилину 38-40",
      }
    );
  }
  if (text == "a") {
    idMsgThemes = lastMsgId + 1;
    bot.sendMessage(
      chatId,
      "themes",
      themesKeyboard2(currentThemes, formSoloImg.themes)
    );
  }
  if (text == "cc") {
    bot.sendMessage(chatId, "hello", showQuiz());
  }
  if (text == "Підтвердити дату") {
    bot.sendMessage(chatId, oldMessage);

    // bot.sendMessage(chatId, "d", showQuiz());
  }

  if (text === "Підтвердити технології") {
    bot.sendMessage(
      chatId,
      "Оберіть пройдені теми та натисніть на кнопку підтвердження",
      confirmThemes
    );
    bot.sendMessage(
      chatId,
      "Список усіх тем",
      mainThemes(themes)
      // themesKeyboard2(themes[0].data, formSoloImg.themes)
    );
  }
  if (text == "Підтвердити фото") {
    // let res = data.slice(8).split('_')
    // res.pop()
    // console.log(res)
    // let r = themes[res];
    // for (let i = 0; i < res.length; i++) {
    //   r = r[res[i]]

    // }
    // console.log('- - - - ');
    // console.log(r);
    // themesKeyboard(r)
    // bot.sendMessage(chatId, 'ss', themesKeyboard(r))
    bot.sendMessage(chatId, "Поставте оцінку", gradeKeyboard());
  }

  if (text === "Підтвердити шаблон") {
    if (chatId == myId) {
      let msgForward = await bot.copyMessage(
        templateGroupId,
        chatId,
        msg.message_id - 1
      );

      bot.sendMessage(
        chatId,
        `Шаблон створено!`,
        templateSuccess(groupId, msgForward.message_id)
      );
    }
  }

  oldMessage = text;
});

let userDay = {
  day: "",
  time: "",
};

bot.on("callback_query", async (msg) => {
  const data = msg.data;
  const chatId = msg.message.chat.id;

  // bot.answerCallbackQuery(msg.id, "Хорошо");

  if (data == "regStudent") {
    newUserStatus = "name";
    bot.sendMessage(chatId, "Вкажіть ім'я учня");
  }
  if (data.startsWith("testAnswer-")) {
    console.log(msg);
    console.log(msg.message.message_id);
    console.log(msg.message.reply_markup);
    try {
      bot.editMessageReplyMarkup(
        editTest(msg.message.reply_markup, msg.data, bot, chatId),
        {
          message_id: msg.message.message_id,
          chat_id: chatId,
        }
      );
    } catch (e) {
      console.log(e);
    }
  }

  if (newUserStatus) {
    if (newUserStatus == "schedule") {
      userDay = {
        day: "",
        time: "",
      };
      userDay.day = data.slice(9);
      bot.sendMessage(chatId, "Вкажіть час занять", keyboardTimeWeek);
      newUserStatus = "time";
    } else if (newUserStatus == "time") {
      userDay.time = data.slice(9);
      newUserStatus = "nextDay";
      newUser.days.push(userDay);
      userDay = [];
      bot.sendMessage(
        chatId,
        "Бажаєте додати ще один день занять?",
        keyboardIsNextDay
      );
      newUserStatus = "nextDay!";
    } else if (newUserStatus == "nextDay!") {
      if (data == "nextDayTrue") {
        newUserStatus = "group";
        bot.sendMessage(
          chatId,
          "Вкажіть дні та години в які будуть проходити заняття",
          keyboardDaysWeek
        );
        newUserStatus = "schedule";
      }
      if (data == "nextDayFalse") {
        newUserStatus = "idGroup";
        bot.sendMessage(chatId, "Вкажіть вартість навчання за місяць");
      }
    }
  }

  if (data.startsWith("deleteThemes-")) {
    try {
      let theme = data.slice(13);
      formSoloImg.themes.splice(theme, 1);
      bot.sendMessage(chatId, "Тема: <b>" + theme + "</b> успішно видалена!", {
        parse_mode: "HTML",
      });
    } catch (e) {}
  }

  if (data.startsWith("infoStudent-")) {
    try {
      let getId = data.slice(12);
      let link = await bot.getChat(Number(getId));
      bot.sendMessage(chatId, link.invite_link);
    } catch (e) {}
  }
  if (data.startsWith("mainThemesIndex-")) {
    let themeIndex = data.slice(16);
    currentThemes = themes[themeIndex].data;

    formSoloImg.themes.push("++" + themes[themeIndex].title);

    bot.sendMessage(
      chatId,
      "Тема: " + themes[themeIndex].title + " обрана!",
      themesKeyboard2(currentThemes, formSoloImg.themes)
    );
  }

  if (data == "sendTests") {
    bot.sendMessage(
      chatId,
      "Оберіть по яким темам мають бути питання:",
      themesKeyboard2(currentThemes, formSoloImg.themes)
    );
    typeThemes = 'tests';
  }
  if (data == "sendPractice") {
    
    bot.sendMessage(
      chatId,
      "Оберіть по яким темам мають бути питання:",
      themesKeyboard2(currentThemes, formSoloImg.themes)
    );
    typeThemes = 'practice'
  }

  if (data.startsWith("deleteTemplate-")) {
    bot.deleteMessage(templateGroupId, data.slice(15));
  }

  if (data.startsWith("newLesson-/-")) {
    let dataList = data.split("-/-");
    let name = dataList[1];
    formSoloImg.idGroup = dataList[2];
    formSoloImg.name = name;

    let currentDate = time.day + "." + time.month + "." + time.year;

    bot.sendMessage(
      chatId,
      "Учень: <b>" +
        name +
        "</b> обраний. \nПідтвердіть дату, або напишіть свою: ",
      { parse_mode: "HTML" }
    );
    bot.sendMessage(chatId, currentDate, confirmDate(currentDate));
  }
  if (data.startsWith("themesIndex")) {
    try {
      if (typeThemes == 'tests') {
        let currentThemesNew = currentThemes[+data.slice(12)];
        console.log("444");
        let ddata = currentThemesNew.details.tests;

        for (let i = 0; i < ddata.length; i++) {
          let idTest = uuid().slice(0, 8);
          let options = currentThemesNew.details.tests[i].options;
          let rightAnswer = options[0];
          let optionsText = [];
          let newOptions_ = [...options];
          let newOptions = shuffle(newOptions_);
          newOptions.forEach((option) => {
            optionsText.push(`\n▪️ ${option}`);
          });
          let studentsCurrent = getNamesStudentByIdGroup(newGroupStudent);
          let prettyStudents = "";
          studentsCurrent.forEach((student) => {
            prettyStudents += `\n<b>${student}</b>`;
          });
          let title = currentThemesNew.details.tests[i].title;
          let infoMessage = `
<b>${title}</b>
${optionsText}

Відповіді учнів:
${prettyStudents}

Правильна відповідь:
<span class="tg-spoiler"><b>${rightAnswer}</b></span>
id: ${idTest}
        `;

          let message = await bot.sendMessage(chatId, infoMessage, {
            parse_mode: "HTML",
          });

          let idMessage = message.message_id;
          testsID.push({
            idQuiz: idTest,
            idMessage: idMessage,
            answers: {
              right: [],
              error: [],
              notData: [],
            },
            title: title,
            options: optionsText,
            rightAnswer: rightAnswer,
          });
          await testsImage(title);

          newGroupStudent.forEach(async (id) => {
            bot.sendPhoto(id, "tests-create.png", {
              caption: "<b>" + ddata[i].title + "</b>",
              ...createTest(ddata[i].options, idTest),
              parse_mode: "HTML",
            });
          });
        }
      }

      if (typeThemes == 'practice') {
        let idPracticeTask = [2, 3];
        let currentThemesNew = currentThemes[+data.slice(12)];
        console.log("currentThemesNew", currentThemesNew);
        for (let i = 0; i < idPracticeTask.length; i++) {
          let practiceTasks = await Practice.findOne({ id: idPracticeTask[i] });

          let templateObjectData = {
            output: "./practice-old.png",
            html: `<html>
  <body>
   ${practiceTasks.data.html}
   
  <style>
        ${practiceTasks.data.css}
  </style>

  </body>
  </html>
  
  `,
          };

          await nodeHtmlToImage(templateObjectData);

          let resultCSS = "";

          console.log("practiceTasks.data.html", practiceTasks);

          await nodeHtmlToImage({
            output: "./practice-result.png",
            html: `<html>
  <body>
   ${practiceTasks.data.html}
   ${practiceTasks.codeResult.html}
  <style>
      
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          padding: 20px;
          zoom: 150%;
        }
        ${practiceTasks.data.css}
        ${practiceTasks.codeResult.css}

  </style>
  </body>
  </html>
  
  `,
          }).then(() => console.log("The image was created successfully!"));

          await nodeHtmlToImage({
            output: "./practice-result-tobase64.png",
            html: `<html>
  <body>
  ${practiceTasks.data.html}
   ${practiceTasks.codeResult.html}
        <h1 class="template">ШАБЛОН</h1>
  <style>

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: sans-serif;
        }
        body {
          padding: 10px;
          width: 800px;
        }
        .template {
          font-size: 70px;
          font-weight: 100;
          position: absolute;
          top: 180px;
          left: 150px;
          letter-spacing: 30px;
          color: grey;
          transform: rotate(-45deg);
        }

         ${practiceTasks.data.css}
        ${practiceTasks.codeResult.css}
  </style>
  </body>
  </html>
  
  `,
          }).then(() => console.log("The image was created successfully!"));

          practiceList.push({
            idPractice: idPracticeTask[i],
            photo:
              "data:image/jpeg;base64," +
              (await imageToBase64("./practice-result-tobase64.png")),
            students: [],
          });

          let title = practiceTasks.name;
          let themes = practiceTasks.themes;
          let descriptionText = practiceTasks.description;
          let tasks = practiceTasks.tasks.title;
          let id = practiceTasks.id;
          await drawPracticeTask(title, descriptionText, themes, tasks);
          let tasksItems = "";
          practiceTasks.tasks.forEach((task) => {
            tasksItems += `▪️ ${task.title} ${task.label}
`;
          });

          let templateCaption = `
<b>${title}</b>
Опис:
<i>${descriptionText}</i>

<b>Завдання:</b>
${tasksItems}

Статус: <b>В роботі</b>
<pre>${id}</pre>

    `.slice(0, 1023);
          await drawPracticeTask(title, descriptionText, themes, tasks);

          newGroupStudent.forEach(async (id) => {
            practiceList[i].students.push({
              idStudent: Number(id),
              result: {
                successTask: [],
                wrongTask: [],
              },
              historyCode: [
                {
                  html: "",
                  css: "",
                  js: "",
                },
              ],
              finish: false,
              grade: 6,
              time: 0,
              finishCode: {
                html: "",
                css: "",
                js: "",
              },
            });

            bot.sendPhoto(id, "practice-result-canvas.png", {
              caption: templateCaption,
              ...practiceKeyboard(id, idPracticeTask[i]),
              parse_mode: "HTML",
            });
          });
        }

        await studentListPractice.insertMany(practiceList);
        practiceList = [];

        // console.log(practiceList);
      } else {
        let currentThemesOld = currentThemes[+data.slice(12)];
        currentThemes = currentThemes[+data.slice(12)].childrens;
        if (currentThemes.length == 0) {
          currentThemes = themes[0].data;

          formSoloImg.themes.push(currentThemesOld.details.title);

          let readyThemes = [];
          formSoloImg.themes.forEach((item) => {
            readyThemes.push(`\n▪️ ${item}`);
          });
          console.log(msg.message.message_id);
          bot.deleteMessage(chatId, msg.message.message_id);
          bot.deleteMessage(chatId, msg.message.message_id - 1);
          bot.sendMessage(
            chatId,
            `Тема <b>${currentThemesOld.details.title}</b> обрана! 
  
Список обраних тем на зараз:
${readyThemes}

Оберіть наступну тему, або натисніть на кнопку для підтвердження:`,
            {
              parse_mode: "HTML",
              ...themesKeyboard2(currentThemes, formSoloImg.themes),
            }
          );
        } else {
          bot.sendMessage(
            chatId,
            "Оберіть підтему:",
            themesKeyboard2(currentThemes, formSoloImg.themes)
          );
        }
      }
    } catch (e) {
      console.log(e);
    }
    bot.answerCallbackQuery(msg.id);
  }
  if (data.startsWith("themesBack")) {
    bot.sendMessage(
      chatId,
      "Оберіть пройдені теми та натисніть на кнопку підтвердження",
      confirmThemes
    );
    bot.sendMessage(
      chatId,
      "Список усіх тем",
      mainThemes(themes)
      // themesKeyboard2(themes[0].data, formSoloImg.themes)
    );
  }

  if (data == "students") {
    let kb = await chooseStudents();
    bot.sendMessage(chatId, "choose students100", kb);
  }
  if (data == "registeredLesson") {
    bot.sendMessage(
      chatId,
      "choose students200",
      await chooseStudents("newLesson")
    );
  }
  if (data == "createTemplate") {
    bot.sendMessage(
      chatId,
      "Відправте повідомлення, яке буде шаблоном для розсилки. Після цього натисніть: Готово",
      confirmSave
    );
  }

  if (data == "quiz") {
    bot.sendMessage(chatId, "Оберіть: ", registeredQuiz); // result(chatId)
  }

  if (data == "templates") {
    bot.sendMessage(chatId, "Оберіть необхідну дію", templatesKeyboard);
  }
  if (data == "registeredQuizStudents") {
    bot.sendMessage(chatId, "Оберіть студентів", confirmSave);
  }
  if (data == "themesDelete") {
    bot.sendMessage(
      chatId,
      "Оберіть теми для видалення",
      themesDelete(formSoloImg.themes)
    );
  }
  if (data == "createGroup") {
    bot.sendMessage(
      chatId,
      "Оберіть учнів:",
      await chooseStudents("createGroup")
    );
    bot.sendMessage(chatId, "Оберіть учнів:", confirmNewGroup);
  }

    if (data == "clearGroup") {
      await studentListPractice.deleteMany({});
      newGroupStudent = [];
      bot.sendMessage(chatId, "В групі немає людей");
    }

  if (data.startsWith("newGroupStudent-/-")) {
    let index = "newGroupStudent-/-".length;
    let studentGroupID = data.slice(index);

    newGroupStudent.push(studentGroupID);
    bot.sendMessage(
      chatId,
      "Учень з ID: " + studentGroupID + " обраний!",
      confirmNewGroup
    );
  }

  if (data.startsWith("selectTechnologies-")) {
    bot.answerCallbackQuery(msg.id);
    let newTechnology = data.slice(19);
    if (formSoloImg.technologies.includes(newTechnology)) {
      let index = formSoloImg.technologies.indexOf(newTechnology);
      formSoloImg.technologies.splice(index, 1);
    } else {
      formSoloImg.technologies.push(newTechnology);
    }
    let aa = technologiesKeyboard(formSoloImg.technologies).reply_markup;
    console.log(aa);
    bot.editMessageReplyMarkup(aa, {
      message_id: idMsgTechnologies - 1,
      chat_id: chatId,
    });
    bot.editMessageText(JSON.stringify(formSoloImg.technologies), {
      message_id: idMsgTechnologies,
      chat_id: chatId,
    });
  }

  if (data == "allTemplate") {
    for (let i = 0; i < templates.length; i++) {
      bot.forwardMessage(myId, groupId, templates[i].idMsg);
    }
  }
  if (data == "clearChat") {
    for (let i = lastMsgId; i > 0; i--) {
      try {
        bot.deleteMessage(chatId, i);
      } catch (e) {}
    }
  }

  if (data == "otherDateLesson") {
    viewCal(new Date().getFullYear(), new Date().getMonth(), chatId);
  }
  if (data.startsWith("cal")) {
    // получим id чата
    let chat_id = chatId;

    // получим callBackQuery_id
    let cbq_id = msg.callback_query_id;
    // получим переданное значение в кнопке
    let c_data = msg.data;
    // спарсим значения
    let params = c_data.split("_");
    // если это переключение между месяцами
    if (params[0] === "cal") {
      // выведем календарь на экран по переданным параметрам
      viewCal(params[1], params[2], chat_id, cbq_id, msg.message.message_id);
    }
    // если это нажатие по кнопке для информации
    else if (params[0] === "info") {
      // выведем информацию
      notice(cbq_id, params[1]);
    } else {
      // заглушим просто запрос
      notice(cbq_id, "This is notice for bot");
    }
  }

  if (data.startsWith("grade-")) {
    formSoloImg.grade = data.slice(6);
    console.log(formSoloImg);

    let idLesson = await drawSolo(
      formSoloImg.name,
      formSoloImg.grade,
      formSoloImg.technologies,
      formSoloImg.date,
      formSoloImg.teacher,
      formSoloImg.themes
    );

    let user = await User.updateOne(
      { idGroup: formSoloImg.idGroup },
      {
        $push: {
          events: {
            id: idLesson,
            date: formSoloImg.date,
            title: "Індивідуальний урок",
            grade: formSoloImg.grade,
            technologies: formSoloImg.technologies,
            themes: formSoloImg.themes,
            results: [
              {
                photo: "",
                url: "",
                description: "",
              },
            ],
          },
        },
      }
    );
    let user2 = await User.findOne({ idGroup: "-1001737433387" });

    // console.log(user);
    // console.log(user2);
    let ready = "";

    for (let i = 0; i < formSoloImg.themes.length; i++) {
      if (formSoloImg.themes[i].startsWith("++")) {
        ready += `\n<b><u>${formSoloImg.themes[i]
          .toUpperCase()
          .slice(2)}:</u></b>\n`;
      } else {
        ready += `🚀 ${formSoloImg.themes[i]}\n`;
      }
    }

    let template = `
🎉 ВІТАЮ! УРОК ПРОЙДЕНО!

Теми, які пройшли на занятті:

${ready}

📚  Код з урока
📚  Додаткові матетіали
📚  Домашнє завдання


ОЦІНКА:
За заняття: ${formSoloImg.grade}  БАЛІВ 
За домашнє завдання: 10  БАЛІВ 

ID заняття: 
<code>${idLesson}</code>

<i>Дізнатись детальніше про теми які вивчили на уроці, та отримати завдання по ним ви можете, обравши кнопку нижче 👇</i>

`;

    let formatPhoto = [];

    formSoloImg.photos.forEach((photo) => {
      formatPhoto.push({
        type: "photo",
        media: photo,
        caption: `☝️ Декілька фотографій, на яких зображені результати нашої роботи та код який ми вивчаємо👨‍🎓`,
      });
    });

    await bot.sendMediaGroup(formSoloImg.idGroup, formatPhoto);
    console.log("----");
    console.log(formSoloImg.themes);
    console.log("----");
    let resThemesBtns = [];
    formSoloImg.themes.forEach((theme) => {
      if (!theme.startsWith("++")) {
        resThemesBtns.push([
          { text: theme, callback_data: "learn-new-" + theme },
        ]);
      }
    });
    let currentThemesKeyboard = {
      reply_markup: {
        inline_keyboard: resThemesBtns,
      },
    };

    await bot.sendPhoto(
      formSoloImg.idGroup,
      "./template-grade-individual-lesson20.png",
      { caption: template, parse_mode: "HTML", ...currentThemesKeyboard }
    );

    bot.sendMessage(
      chatId,
      "Запис про заняття збережений та відправлений учню"
    );
  }

  if (data.startsWith("learn-new-")) {
    let themeText = data.slice(10);
    let theme;
    for (let i = 0; i < themes[0].data.length; i++) {
      if (themes[0].data[i].details.title === themeText) {
        theme = themes[0].data[i].details;
      }
    }
    let sandbox = "";
    theme.default.sandbox.forEach((item) => {
      sandbox += `<a href="${item.url}">👉 ${item.title}</a>\n`;
    });
    let links = "";
    theme.links.forEach((item) => {
      links += `<a href="${item.url}">📑 ${item.title}</a>\n`;
    });
    let template1 = `
<b>Детальна інформація про команду: ${theme.title}</b>
⚡️ Скорочення: ${theme.speedCode} 

${theme.description}


<b>🧑‍💻 Приклад коду:</b>
<code>${theme.default.code[0].body}</code>

<b>🧑‍💻 Можеш переглянути приклади коду:</b>
${sandbox}

<b>🧑‍💻 Корисні посилання для закріплення теми:</b>
${links}

<b>Схожі команди, які скоро маємо вивчити:</b>
${theme.similarTags}

📆 День, коли ти вивчив цю команду: 26.05.2023

`;
    let keyboardThemeTasks = {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: `Теоретичні питання (${theme.tests.length} шт.)`,
              callback_data: "task-teori-" + theme.title,
            },
          ],
          [
            {
              text: `Практичні завдання (${theme.tests.length} шт.)`,
              callback_data: "task-practice-" + theme.title,
            },
          ],
          [
            {
              text: `Домашнє завдання (${theme.tests.length} шт.)`,
              callback_data: "task-homework-" + theme.title,
            },
          ],
        ],
      },
    };

    let template2 = `
<b>Оцінки по темі ${theme.title}</b>
▪ За урок: 11б.
▪ Домашнє завдання: <b>--</b>
▪ Практичні завдання: <b>--</b>
▪ Теорія: <b>--</b>

▪ 1 Екзамен: <b>--</b>
<i>Заплановано на 26.07.2023</i>

▪ 2 Екзамен: <b>--</b>
<i>Заплановано на 26.09.2023</i>


    `;
    await bot.sendPhoto(chatId, theme.default.images[0].url, {
      caption: template1,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    });
    await bot.sendMessage(chatId, template2, {
      ...keyboardThemeTasks,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    });
  }
  if (data.startsWith("info")) {
    formSoloImg.date = data.slice(5);
    formSoloImg.technologies = [];
    bot.sendMessage(
      chatId,
      `Дата: ` + data.slice(5) + ` обрана.`,
      confirmTechnology
    );
    bot.sendMessage(
      chatId,
      `Оберіть технології з якими працювали на уроці`,
      technologiesKeyboard()
    );

    let msg = await bot.sendMessage(
      chatId,
      JSON.stringify(formSoloImg.technologies)
    );

    idMsgTechnologies = msg.message_id;
  }
});

bot.on("poll_answer", async (msg) => {
  console.log(msg.poll_id);
});

bot.on("web_app_data", async (msg) => {
  let chatId = msg.chat.id;
  console.log(msg);
  bot.sendMessage(chatId, msg.web_app_data.button_text);
  bot.sendMessage(chatId, msg.web_app_data.data);
});

bot.on("photo", async (msg) => {
  let photo = msg.photo[msg.photo.length - 1].file_id;
  let pathToImg = await bot.downloadFile(photo, "./img/students/solo");
  formSoloImg.photos.push("./" + pathToImg);
});

// @bot.message_handler(content_types="web_app_data") #получаем отправленные данные
// def answer(webAppMes):
//    print(webAppMes) #вся информация о сообщении
//    print(webAppMes.web_app_data.data) #конкретно то что мы передали в бота
//    bot.send_message(webAppMes.chat.id, f"получили инофрмацию из веб-приложения: {webAppMes.web_app_data.data}")
//    #отправляем сообщение в ответ на отправку данных из веб-приложения

function viewCal(year, month, chat_id, cbq_id = null, message_id = null) {
  // получаем массив дней месяца
  let dayLines = getDays(year, month);
  // определим переданную дату
  let currentMonthDate = new Date(+year, +month);
  // дата предыдущего месяца
  let prevMonthDate = new Date(
    new Date(currentMonthDate).setMonth(currentMonthDate.getMonth() - 1)
  );
  // дата следующего месяца
  let nextMonthDate = new Date(
    new Date(currentMonthDate).setMonth(currentMonthDate.getMonth() + 1)
  );
  // определим параметры переданного месяца
  let current_info =
    setBeforeZero(currentMonthDate.getMonth() + 1) +
    "." +
    currentMonthDate.getFullYear();
  // определим кнопки
  let buttons = [];
  // первый ряд кнопок это навигация календаря
  buttons.push([
    {
      text: "<<<",
      callback_data:
        "cal_" + prevMonthDate.getFullYear() + "_" + prevMonthDate.getMonth(),
    },
    {
      text: current_info,
      callback_data: "info_" + current_info,
    },
    {
      text: ">>>",
      callback_data:
        "cal_" + nextMonthDate.getFullYear() + "_" + nextMonthDate.getMonth(),
    },
  ]);

  buttons.push([
    {
      text: "ПН",
      callback_data:
        "cal_" + prevMonthDate.getFullYear() + "_" + prevMonthDate.getMonth(),
    },
    {
      text: "ВТ",
      callback_data:
        "cal_" + prevMonthDate.getFullYear() + "_" + prevMonthDate.getMonth(),
    },
    {
      text: "СР",
      callback_data:
        "cal_" + prevMonthDate.getFullYear() + "_" + prevMonthDate.getMonth(),
    },
    {
      text: "ЧТ",
      callback_data:
        "cal_" + prevMonthDate.getFullYear() + "_" + prevMonthDate.getMonth(),
    },
    {
      text: "ПТ",
      callback_data:
        "cal_" + prevMonthDate.getFullYear() + "_" + prevMonthDate.getMonth(),
    },
    {
      text: "СБ",
      callback_data:
        "cal_" + prevMonthDate.getFullYear() + "_" + prevMonthDate.getMonth(),
    },
    {
      text: "НД",
      callback_data:
        "cal_" + prevMonthDate.getFullYear() + "_" + prevMonthDate.getMonth(),
    },
  ]);

  // переберем дни
  dayLines.forEach(function (line) {
    // добавим ряд кнопок
    buttons[buttons.length] = [];
    // переберем линию дней
    line.forEach(function (day) {
      // добавим кнопку
      buttons[buttons.length - 1].push({
        text:
          month == new Date().getMonth() && day == new Date().getDate()
            ? "🟢"
            : day,
        callback_data:
          day > 0
            ? "info_" + setBeforeZero(day) + "." + current_info
            : "inline",
      });
    });
  });

  // готовим данные
  let data = {
    chat_id: chat_id,
    text:
      `<b>Календар:</b> ` +
      currentMonthDate.toLocaleString("uk-UA", {
        month: "long",
        year: "numeric",
      }) +
      `\n
Умовні позначення:
🟢 - Сьогодні  \n
      
      `,
    parse_mode: "html",
    reply_markup: { inline_keyboard: buttons },
  };
  // проверим как отправлять: как новое или замена содержимого
  if (message_id !== null) {
    // гасим запрос
    notice(cbq_id);
    // добавим message_id
    data.message_id = message_id;
    // направим в Телеграм на изменение сообщения
    query("editMessageText", data);
  } else {
    // направим сообщение в чат
    query("sendMessage", data);
  }
}
async function query(method, fields) {
  let ca = request({
    url: "https://api.telegram.org/bot" + token + "/" + method,
    method: "post",
    headers: { "content-type": "application/json" },
    json: fields,
  });
}

function getDays(year, month) {
  // получаем дату
  let d = new Date(year, month);
  // объявляем массив
  let days = [];
  // добавляем первую строку
  days[days.length] = [];
  // добавляем в первую строку пустые значения
  for (let i = 0; i < getNumDayOfWeek(d); i++) {
    days[days.length - 1].push("-");
  }
  // выходим пока месяц не перешел на другой
  while (d.getMonth() === +month) {
    // добавляем в строку дни
    days[days.length - 1].push(d.getDate());
    // вс, последний день - перевод строки
    if (getNumDayOfWeek(d) % 7 === 6) {
      // добавляем новую строку
      days[days.length] = [];
    }
    // переходим на следующий день
    d.setDate(d.getDate() + 1);
  }
  // дозаполняем последнюю строку пустыми значениями
  if (getNumDayOfWeek(d) !== 0) {
    for (let i = getNumDayOfWeek(d); i < 7; i++) {
      days[days.length - 1].push("-");
    }
  }
  // вернем массив
  return days;
}

function getNumDayOfWeek(date) {
  // получим день недели
  let day = date.getDay();
  // вернем на 1 меньше [0 - вск]
  return day === 0 ? 6 : day - 1;
}

function notice(cbq_id, text = null) {
  // определим данные
  let data = {
    callback_query_id: cbq_id,
    alert: false,
  };
  // если есть текст то добавим
  if (text !== null) {
    data.text = text;
  }
  // отправим в Телеграм
  query("answerCallbackQuery", data);
}

function setBeforeZero(num) {
  return ("0" + num).slice(-2);
}

function getNamesStudentByIdGroup(id) {
  let newGroupNames = [];
  newGroupStudent.forEach((id) => {
    students.forEach((student) => {
      if (student.idGroup == id) {
        newGroupNames.push(student.name + " " + student.lastName);
      }
    });
  });
  return newGroupNames;
}

async function imageToBase64(imagePath) {
  try {
    const imageBuffer = fs.readFileSync(imagePath);

    const base64String = imageBuffer.toString("base64");

    return base64String;
  } catch (error) {
    console.error("Error converting image to base64:", error);
    return null;
  }
}

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export {
  testsID,
  shuffle,
  getNamesStudentByIdGroup,
  getNamesOneStudentByIdGroup,
};
