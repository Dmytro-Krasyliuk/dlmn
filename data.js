import { Practice, User } from "./database/index.js";

let adminId = 957139896;

let students = await User.find({})

// console.log(students)

// User.insertMany(
// [
//   {
//     name: "Учень",
//     lastName: "Учнівський",
//     days: [
//       {
//         day: "1",
//         time_h: "14",
//         time_m: "45",
//       },
//       {
//         day: "6",
//         time_h: "14",
//         time_m: "00",
//       },
//       {
//         day: "6",
//         time_h: "15",
//         time_m: "30",
//       },
//     ],
//     pay: {
//       day: "16",
//       month: "05",
//       sum: "2600",
//       isPay: true,
//     },
//     events: [
//       {
//         date: "",
//         title: "",
//         grade: "",
//         results: [
//           {
//             photo: "",
//             url: "",
//             description: "",
//           },
//         ],
//       },
//     ],

//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],

//     idGroup: "-1001737433387",
//   },
//   {
//     name: "Аня",
//     lastName: "Джур",
//     days: [
//       {
//         day: "1",
//         time_h: "14",
//         time_m: "45",
//       },
//       {
//         day: "6",
//         time_h: "14",
//         time_m: "00",
//       },
//       {
//         day: "6",
//         time_h: "15",
//         time_m: "30",
//       },
//     ],
//     pay: {
//       day: "16",
//       month: "05",
//       sum: "2600",
//       isPay: true,
//     },
//     events: [
//       {
//         date: "",
//         title: "",
//         grade: "",
//         results: [
//           {
//             photo: "",
//             url: "",
//             description: "",
//           },
//         ],
//       },
//     ],
//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],

//     idGroup: "-1001939567412",
//   },
//   {
//     name: "Лев",
//     lastName: "Моляренко",
//     days: [
//       {
//         day: "1",
//         time_h: "15",
//         time_m: "30",
//       },
//       {
//         day: "3",
//         time_h: "18",
//         time_m: "30",
//       },
//     ],
//     pay: {
//       day: "09",
//       month: "05",
//       sum: "1000",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     events: [
//       [
//         {
//           type: "solo", // quiz // group // homework
//           grade: "12",
//           teacher: "Дмитро",
//           technologiesStack: ["bootstrap", "html"],
//           id: "aabbc435345",
//           date: "25.05.2023",
//           presence: true,
//         },
//       ],
//       [
//         {
//           type: "group",
//           grade: "12",
//           teacher: "Дмитро",
//           technologiesStack: ["bootstrap", "html"],
//           id: "aabbc435345",
//           date: "25.05.2023",
//           presence: true,
//         },
//       ],
//     ],
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001563563406",
//   },
//   {
//     name: "Антон",
//     lastName: "Полісько",
//     days: [
//       {
//         day: "1",
//         time_h: "16",
//         time_m: "15",
//       },
//     ],
//     pay: {
//       day: "01",
//       month: "05",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 270,
//       currentMoney: 270,
//       lastResultMoney: 70,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001814252504",
//   },
//   {
//     name: "Матвій",
//     lastName: "Бурлака",
//     days: [
//       {
//         day: "1",
//         time_h: "17",
//         time_m: "00",
//       },
//       {
//         day: "7",
//         time_h: "22",
//         time_m: "00",
//       },
//     ],
//     pay: {
//       day: "26",
//       month: "05",
//       sum: "2200",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001794253439",
//   },
//   {
//     name: "Даніель",
//     lastName: "Шаповал",
//     days: [
//       {
//         day: "1",
//         time_h: "17",
//         time_m: "45",
//       },
//       {
//         day: "13",
//         time_h: "16",
//         time_m: "15",
//       },
//     ],
//     pay: {
//       day: "10",
//       month: "05",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 375,
//       currentMoney: 50,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001797848661",
//   },
//   {
//     name: "Назар",
//     lastName: "Гончаренко",
//     days: [
//       {
//         day: "1",
//         time_h: "19",
//         time_m: "15",
//       },
//       {
//         day: "5",
//         time_h: "21",
//         time_m: "00",
//       },
//     ],
//     pay: {
//       day: "11",
//       month: "05",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001985178316",
//   },
//   {
//     name: "Катя",
//     lastName: "Гриневич",
//     days: [
//       {
//         day: "1",
//         time_h: "18",
//         time_m: "30",
//       },
//       {
//         day: "5",
//         time_h: "20",
//         time_m: "00",
//       },
//       {
//         day: "6",
//         time_h: "12",
//         time_m: "00",
//       },
//     ],
//     pay: {
//       day: "14",
//       month: "05",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001910544350",
//   },
  
//   {
//     name: "Саша",
//     lastName: "Риндич",
//     days: [
//       {
//         day: "1",
//         time_h: "20",
//         time_m: "45",
//       },
//       {
//         day: "6",
//         time_h: "19",
//         time_m: "15",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 50,
//       currentMoney: 50,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001693626648",
//   },
//   {
//     name: "Роман",
//     lastName: "Березюк",
//     days: [
//       {
//         day: "1",
//         time_h: "21",
//         time_m: "30",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001806769354",
//   },

//   {
//     name: "Гліб",
//     lastName: "Мегець",
//     days: [
//       {
//         day: "2",
//         time_h: "14",
//         time_m: "00",
//       },
//       {
//         day: "4",
//         time_h: "14",
//         time_m: "00",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001927434425",
//   },

//   {
//     name: "Марк",
//     lastName: "Дрозд",
//     days: [
//       {
//         day: "2",
//         time_h: "14",
//         time_m: "45",
//       },
//       {
//         day: "4",
//         time_h: "15",
//         time_m: "30",
//       },
//     ],
//     pay: {
//       day: "01",
//       month: "05",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001844613258",
//   },

//   {
//     name: "Максим",
//     lastName: "Іваненко",
//     days: [
//       {
//         day: "2",
//         time_h: "15",
//         time_m: "30",
//       },
//     ],
//     pay: {
//       day: "11",
//       month: "05",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001754227604",
//   },

//   {
//     name: "Даниїл",
//     lastName: "Моляренко",
//     days: [
//       {
//         day: "2",
//         time_h: "16",
//         time_m: "15",
//       },
//       {
//         day: "6",
//         time_h: "13",
//         time_m: "00",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001839050123",
//   },

//   {
//     name: "Дмитро",
//     lastName: "Джур",
//     days: [
//       {
//         day: "2",
//         time_h: "17",
//         time_m: "45",
//       },
//       {
//         day: "4",
//         time_h: "16",
//         time_m: "15",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001912511447",
//   },

//   {
//     name: "Микита",
//     lastName: "Моляренко",
//     days: [
//       {
//         day: "2",
//         time_h: "18",
//         time_m: "30",
//       },
//       {
//         day: "3",
//         time_h: "15",
//         time_m: "30",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001593535519",
//   },


//   {
//     name: "Ксенія",
//     lastName: "Матвєєва",
//     days: [
//       {
//         day: "2",
//         time_h: "20",
//         time_m: "00",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 940,
//       currentMoney: 70,
//       lastResultMoney: 70,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001817767243",
//   },

//   {
//     name: "Леся",
//     lastName: "Перконос",
//     days: [
//       {
//         day: "2",
//         time_h: "20",
//         time_m: "45",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 220,
//       currentMoney: 220,
//       lastResultMoney: 70,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001811029264",
//   },

//   {
//     name: "Роман",
//     lastName: "Євчук",
//     days: [
//       {
//         day: "2",
//         time_h: "21",
//         time_m: "30",
//       },
//       {
//         day: "6",
//         time_h: "17",
//         time_m: "00",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001859515538",
//   },

//   {
//     name: "Павло",
//     lastName: "Кіячик",
//     days: [
//       {
//         day: "3",
//         time_h: "10",
//         time_m: "00",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 140,
//       currentMoney: 140,
//       lastResultMoney: 20,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001977412905",
//   },

//   {
//     name: "Гліб",
//     lastName: "Клименко",
//     days: [
//       {
//         day: "3",
//         time_h: "13",
//         time_m: "15",
//       },
//       {
//         day: "5",
//         time_h: "13",
//         time_m: "15",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 50,
//       currentMoney: 50,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001957372272",
//   },

//   {
//     name: "Лев",
//     lastName: "Шабалін",
//     days: [
//       {
//         day: "3",
//         time_h: "14",
//         time_m: "00",
//       },
//       {
//         day: "5",
//         time_h: "14",
//         time_m: "45",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 150,
//       currentMoney: 150,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001768830486",
//   },

//   {
//     name: "Даниїл",
//     lastName: "Білий",
//     days: [
//       {
//         day: "3",
//         time_h: "14",
//         time_m: "45",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001653766681",
//   },

//   {
//     name: "Олексій",
//     lastName: "Єрмусевич",
//     days: [
//       {
//         day: "3",
//         time_h: "17",
//         time_m: "0",
//       },
//       {
//         day: "7",
//         time_h: "21",
//         time_m: "15",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001905845420",
//   },

//   {
//     name: "Паша",
//     lastName: "Маренич",
//     days: [
//       {
//         day: "2",
//         time_h: "17",
//         time_m: "45",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 220,
//       currentMoney: 220,
//       lastResultMoney: 40,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001755202216",
//   },

//   {
//     name: "Арсеній",
//     lastName: "Середа",
//     days: [
//       {
//         day: "3",
//         time_h: "19",
//         time_m: "15",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 550,
//       currentMoney: 550,
//       lastResultMoney: 70,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001621006693",
//   },
//   {
//     name: "Ілля",
//     lastName: "Малов",
//     days: [
//       {
//         day: "3",
//         time_h: "20",
//         time_m: "00",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 400,
//       currentMoney: 400,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001538043990",
//   },
//   {
//     name: "Віталій",
//     lastName: "Красюк",
//     days: [
//       {
//         day: "3",
//         time_h: "20",
//         time_m: "45",
//       },
//       {
//         day: "6",
//         time_h: "21",
//         time_m: "15",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 100,
//       currentMoney: 100,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001766510522",
//   },
//   {
//     name: "Іван",
//     lastName: "Шмуліч",
//     days: [
//       {
//         day: "3",
//         time_h: "21",
//         time_m: "30",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001807372173",
//   },
//   {
//     name: "Роман",
//     lastName: "Березюк",
//     days: [
//       {
//         day: "3",
//         time_h: "22",
//         time_m: "15",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001806769354",
//   },
//   {
//     name: "Олексій",
//     lastName: "Калаба",
//     days: [
//       {
//         day: "4",
//         time_h: "17",
//         time_m: "45",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 200,
//       currentMoney: 200,
//       lastResultMoney: 40,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001823540443",
//   },
//   {
//     name: "Пилип",
//     lastName: "Кірчев",
//     days: [
//       {
//         day: "4",
//         time_h: "18",
//         time_m: "30",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 200,
//       currentMoney: 200,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001507302092",
//   },
//   {
//     name: "Георгій",
//     lastName: "Аль-Хамес",
//     days: [
//       {
//         day: "4",
//         time_h: "19",
//         time_m: "15",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 415,
//       currentMoney: 415,
//       lastResultMoney: 70,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001840763808",
//   },

//   {
//     name: "Андрій",
//     lastName: "Джур",
//     days: [
//       {
//         day: "2",
//         time_h: "17",
//         time_m: "00",
//       },
//       {
//         day: "4",
//         time_h: "21",
//         time_m: "30",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 50,
//       currentMoney: 50,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001920572313",
//   },

 
//   {
//     name: "Євгеній",
//     lastName: "Швидкий",
//     days: [
//       {
//         day: "5",
//         time_h: "18",
//         time_m: "30",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001708915522",
//   },
//   {
//     name: "Анна",
//     lastName: "Мотовильник",
//     days: [
//       {
//         day: "6",
//         time_h: "17",
//         time_m: "45",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001163199751",
//   },
//   {
//     name: "Кирил",
//     lastName: "Жила",
//     days: [
//       {
//         day: "7",
//         time_h: "19",
//         time_m: "15",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 50,
//       currentMoney: 50,
//       lastResultMoney: 50,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001737402348",
//   },
// ])


// let students = [
//   {
//     name: "Учень",
//     lastName: "Учнівський",
//     days: [
//       {
//         day: "1",
//         time_h: "14",
//         time_m: "45",
//       },
//       {
//         day: "6",
//         time_h: "14",
//         time_m: "00",
//       },
//       {
//         day: "6",
//         time_h: "15",
//         time_m: "30",
//       },
//     ],
//     pay: {
//       day: "16",
//       month: "05",
//       sum: "2600",
//       isPay: true,
//     },
//     events: [
//       {
//         date: "",
//         title: "",
//         grade: "",
//         results: [
//           {
//             photo: "",
//             url: "",
//             description: "",
//           },
//         ],
//       },
//     ],

//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],

//     idGroup: "-1001737433387",
//   },
//   {
//     name: "Аня",
//     lastName: "Джур",
//     days: [
//       {
//         day: "1",
//         time_h: "14",
//         time_m: "45",
//       },
//       {
//         day: "6",
//         time_h: "14",
//         time_m: "00",
//       },
//       {
//         day: "6",
//         time_h: "15",
//         time_m: "30",
//       },
//     ],
//     pay: {
//       day: "16",
//       month: "05",
//       sum: "2600",
//       isPay: true,
//     },
//     events: [
//       {
//         date: "",
//         title: "",
//         grade: "",
//         results: [
//           {
//             photo: "",
//             url: "",
//             description: "",
//           },
//         ],
//       },
//     ],
//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],

//     idGroup: "-1001939567412",
//   },
//   {
//     name: "Лев",
//     lastName: "Моляренко",
//     days: [
//       {
//         day: "1",
//         time_h: "15",
//         time_m: "30",
//       },
//       {
//         day: "3",
//         time_h: "18",
//         time_m: "30",
//       },
//     ],
//     pay: {
//       day: "09",
//       month: "05",
//       sum: "1000",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     events: [
//       [
//         {
//           type: "solo", // quiz // group // homework
//           grade: "12",
//           teacher: "Дмитро",
//           technologiesStack: ["bootstrap", "html"],
//           id: "aabbc435345",
//           date: "25.05.2023",
//           presence: true,
//         },
//       ],
//       [
//         {
//           type: "group",
//           grade: "12",
//           teacher: "Дмитро",
//           technologiesStack: ["bootstrap", "html"],
//           id: "aabbc435345",
//           date: "25.05.2023",
//           presence: true,
//         },
//       ],
//     ],
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001563563406",
//   },
//   {
//     name: "Антон",
//     lastName: "Полісько",
//     days: [
//       {
//         day: "1",
//         time_h: "16",
//         time_m: "15",
//       },
//     ],
//     pay: {
//       day: "01",
//       month: "05",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 270,
//       currentMoney: 270,
//       lastResultMoney: 70,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001814252504",
//   },
//   {
//     name: "Матвій",
//     lastName: "Бурлака",
//     days: [
//       {
//         day: "1",
//         time_h: "17",
//         time_m: "00",
//       },
//       {
//         day: "7",
//         time_h: "22",
//         time_m: "00",
//       },
//     ],
//     pay: {
//       day: "26",
//       month: "05",
//       sum: "2200",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001794253439",
//   },
//   {
//     name: "Даніель",
//     lastName: "Шаповал",
//     days: [
//       {
//         day: "1",
//         time_h: "17",
//         time_m: "45",
//       },
//       {
//         day: "13",
//         time_h: "16",
//         time_m: "15",
//       },
//     ],
//     pay: {
//       day: "10",
//       month: "05",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 375,
//       currentMoney: 50,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001797848661",
//   },
//   {
//     name: "Назар",
//     lastName: "Гончаренко",
//     days: [
//       {
//         day: "1",
//         time_h: "19",
//         time_m: "15",
//       },
//       {
//         day: "5",
//         time_h: "21",
//         time_m: "00",
//       },
//     ],
//     pay: {
//       day: "11",
//       month: "05",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001985178316",
//   },
//   {
//     name: "Катя",
//     lastName: "Гриневич",
//     days: [
//       {
//         day: "1",
//         time_h: "18",
//         time_m: "30",
//       },
//       {
//         day: "5",
//         time_h: "20",
//         time_m: "00",
//       },
//       {
//         day: "6",
//         time_h: "12",
//         time_m: "00",
//       },
//     ],
//     pay: {
//       day: "14",
//       month: "05",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001910544350",
//   },
  
//   {
//     name: "Саша",
//     lastName: "Риндич",
//     days: [
//       {
//         day: "1",
//         time_h: "20",
//         time_m: "45",
//       },
//       {
//         day: "6",
//         time_h: "19",
//         time_m: "15",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 50,
//       currentMoney: 50,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001693626648",
//   },
//   {
//     name: "Роман",
//     lastName: "Березюк",
//     days: [
//       {
//         day: "1",
//         time_h: "21",
//         time_m: "30",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001806769354",
//   },

//   {
//     name: "Гліб",
//     lastName: "Мегець",
//     days: [
//       {
//         day: "2",
//         time_h: "14",
//         time_m: "00",
//       },
//       {
//         day: "4",
//         time_h: "14",
//         time_m: "00",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001927434425",
//   },

//   {
//     name: "Марк",
//     lastName: "Дрозд",
//     days: [
//       {
//         day: "2",
//         time_h: "14",
//         time_m: "45",
//       },
//       {
//         day: "4",
//         time_h: "15",
//         time_m: "30",
//       },
//     ],
//     pay: {
//       day: "01",
//       month: "05",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001844613258",
//   },

//   {
//     name: "Максим",
//     lastName: "Іваненко",
//     days: [
//       {
//         day: "2",
//         time_h: "15",
//         time_m: "30",
//       },
//     ],
//     pay: {
//       day: "11",
//       month: "05",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001754227604",
//   },

//   {
//     name: "Даниїл",
//     lastName: "Моляренко",
//     days: [
//       {
//         day: "2",
//         time_h: "16",
//         time_m: "15",
//       },
//       {
//         day: "6",
//         time_h: "13",
//         time_m: "00",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001839050123",
//   },

//   {
//     name: "Дмитро",
//     lastName: "Джур",
//     days: [
//       {
//         day: "2",
//         time_h: "17",
//         time_m: "45",
//       },
//       {
//         day: "4",
//         time_h: "16",
//         time_m: "15",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001912511447",
//   },

//   {
//     name: "Микита",
//     lastName: "Моляренко",
//     days: [
//       {
//         day: "2",
//         time_h: "18",
//         time_m: "30",
//       },
//       {
//         day: "3",
//         time_h: "15",
//         time_m: "30",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001593535519",
//   },


//   {
//     name: "Ксенія",
//     lastName: "Матвєєва",
//     days: [
//       {
//         day: "2",
//         time_h: "20",
//         time_m: "00",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 940,
//       currentMoney: 70,
//       lastResultMoney: 70,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001817767243",
//   },

//   {
//     name: "Леся",
//     lastName: "Перконос",
//     days: [
//       {
//         day: "2",
//         time_h: "20",
//         time_m: "45",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 220,
//       currentMoney: 220,
//       lastResultMoney: 70,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001811029264",
//   },

//   {
//     name: "Роман",
//     lastName: "Євчук",
//     days: [
//       {
//         day: "2",
//         time_h: "21",
//         time_m: "30",
//       },
//       {
//         day: "6",
//         time_h: "17",
//         time_m: "00",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001859515538",
//   },

//   {
//     name: "Павло",
//     lastName: "Кіячик",
//     days: [
//       {
//         day: "3",
//         time_h: "10",
//         time_m: "00",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 140,
//       currentMoney: 140,
//       lastResultMoney: 20,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001977412905",
//   },

//   {
//     name: "Гліб",
//     lastName: "Клименко",
//     days: [
//       {
//         day: "3",
//         time_h: "13",
//         time_m: "15",
//       },
//       {
//         day: "5",
//         time_h: "13",
//         time_m: "15",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 50,
//       currentMoney: 50,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001957372272",
//   },

//   {
//     name: "Лев",
//     lastName: "Шабалін",
//     days: [
//       {
//         day: "3",
//         time_h: "14",
//         time_m: "00",
//       },
//       {
//         day: "5",
//         time_h: "14",
//         time_m: "45",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 150,
//       currentMoney: 150,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001768830486",
//   },

//   {
//     name: "Даниїл",
//     lastName: "Білий",
//     days: [
//       {
//         day: "3",
//         time_h: "14",
//         time_m: "45",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001653766681",
//   },

//   {
//     name: "Олексій",
//     lastName: "Єрмусевич",
//     days: [
//       {
//         day: "3",
//         time_h: "17",
//         time_m: "0",
//       },
//       {
//         day: "7",
//         time_h: "21",
//         time_m: "15",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001905845420",
//   },

//   {
//     name: "Паша",
//     lastName: "Маренич",
//     days: [
//       {
//         day: "2",
//         time_h: "17",
//         time_m: "45",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 220,
//       currentMoney: 220,
//       lastResultMoney: 40,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001755202216",
//   },

//   {
//     name: "Арсеній",
//     lastName: "Середа",
//     days: [
//       {
//         day: "3",
//         time_h: "19",
//         time_m: "15",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 550,
//       currentMoney: 550,
//       lastResultMoney: 70,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001621006693",
//   },
//   {
//     name: "Ілля",
//     lastName: "Малов",
//     days: [
//       {
//         day: "3",
//         time_h: "20",
//         time_m: "00",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 400,
//       currentMoney: 400,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001538043990",
//   },
//   {
//     name: "Віталій",
//     lastName: "Красюк",
//     days: [
//       {
//         day: "3",
//         time_h: "20",
//         time_m: "45",
//       },
//       {
//         day: "6",
//         time_h: "21",
//         time_m: "15",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 100,
//       currentMoney: 100,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001766510522",
//   },
//   {
//     name: "Іван",
//     lastName: "Шмуліч",
//     days: [
//       {
//         day: "3",
//         time_h: "21",
//         time_m: "30",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001807372173",
//   },
//   {
//     name: "Роман",
//     lastName: "Березюк",
//     days: [
//       {
//         day: "3",
//         time_h: "22",
//         time_m: "15",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001806769354",
//   },
//   {
//     name: "Олексій",
//     lastName: "Калаба",
//     days: [
//       {
//         day: "4",
//         time_h: "17",
//         time_m: "45",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 200,
//       currentMoney: 200,
//       lastResultMoney: 40,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001823540443",
//   },
//   {
//     name: "Пилип",
//     lastName: "Кірчев",
//     days: [
//       {
//         day: "4",
//         time_h: "18",
//         time_m: "30",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 200,
//       currentMoney: 200,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001507302092",
//   },
//   {
//     name: "Георгій",
//     lastName: "Аль-Хамес",
//     days: [
//       {
//         day: "4",
//         time_h: "19",
//         time_m: "15",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 415,
//       currentMoney: 415,
//       lastResultMoney: 70,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001840763808",
//   },

//   {
//     name: "Андрій",
//     lastName: "Джур",
//     days: [
//       {
//         day: "2",
//         time_h: "17",
//         time_m: "00",
//       },
//       {
//         day: "4",
//         time_h: "21",
//         time_m: "30",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 50,
//       currentMoney: 50,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001920572313",
//   },

 
//   {
//     name: "Євгеній",
//     lastName: "Швидкий",
//     days: [
//       {
//         day: "5",
//         time_h: "18",
//         time_m: "30",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001708915522",
//   },
//   {
//     name: "Анна",
//     lastName: "Мотовильник",
//     days: [
//       {
//         day: "6",
//         time_h: "17",
//         time_m: "45",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 0,
//       currentMoney: 0,
//       lastResultMoney: 0,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001163199751",
//   },
//   {
//     name: "Кирил",
//     lastName: "Жила",
//     days: [
//       {
//         day: "7",
//         time_h: "19",
//         time_m: "15",
//       },
//     ],
//     pay: {
//       day: "12",
//       month: "11",
//       sum: "1500",
//       isPay: true,
//     },
//     quiz: {
//       allMoney: 50,
//       currentMoney: 50,
//       lastResultMoney: 50,
//     },
//     contact: [
//       {
//         name: "Student",
//         number: "+3805045454",
//       },
//     ],
//     idGroup: "-1001737402348",
//   },
// ];

let templates = [
  {
    id: 0,
    idMsg: 2,
    categories: ["html", "css"],
  },
];

let technologiesStack = [
  "js",
  "python",
  "pug",
  "mongodb",
  "react",
  "express",
  "nodejs",
  "html",
  "css",
  "bootstrap",
  "jquery",
  "scss",
  "figma",
  "it english",
  "HTML Email",
  "postgres",
  "git",
  "php",
  "cmd",
  "npm",
  "django",
  "flask",
  "docker",
  "tailwind",
  "typescript",
  "nestJS",
  "Electron",
  "webpack",
  "graphql",
  "smm",
  "seo",
  "tests",
  "react native",
  "wordpress",
  "CI/CD",
  "other",
  "JAVA",333333
];





let cThemes = [
  {
    title: "html",
    data: [
      {
        details: {
          title: "a",
          speedCode: "a",
          description: `
<b>a</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Як зробити посилання на іншу сторінку?",
              options: ["a", "b", "c", "d"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "abbr",
          speedCode: "abbr",
          description: `
<b>abbr</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "В якому тегу написати СССР, США, HTML",
              options: ["abbr", "big", "sup", "sub"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "aside",
          speedCode: "aside",
          description: `
<b>aside</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Блок який знаходиться в стороні має тег:",
              options: ["aside", "side", "absolute", "top"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "audio",
          speedCode: "au",
          description: `
<b>audio</b> - завдяки цьому елементу можна показати аудіо файл.

Щоб побачити на сайті плеєр необхідно додати атрибут controls.
Плеєр в різних браузерах виглядає по різному

        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Який тег необхідно зробити щоб додати музику?",
              photo: "",
              code: "",
              options: ["audio", "music", "voice", "record"],
            },
            {
              title: "Яке скорочення може створити аудіо в html?",
              photo: "",
              code: "",
              options: ["au", "ao", "ado", "auu"],
            },
            {
              title: "Який атрибут необхідно додати щоб з'явився плеєр?",
              photo: "",
              code: "",
              options: ["controls", "play", "show-music", "pleer"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "b",
          speedCode: "b",
          description: `
<b>b</b> - Створює жиний текст

        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Як можна створити жирний текст",
              options: ["b", "i", "s", "u"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<b>Важливий текст</b>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "blockquote",
          speedCode: "bq",
          description: `
<b>blockquote</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Яке створити велику (блокову) цитату",
              options: ["bq", "bt", "bkt", "bote"],
            },
            {
              title: "Яке скорочення створює велику (блокову) цитату",
              options: ["bq", "bt", "bkt", "bote"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "body",
          speedCode: "body",
          description: `
<b>body</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "В якому елементі ми пишемо увесь сайт?",
              options: ["body", "head", "main", "div"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "br",
          speedCode: "br",
          description: `
<b>a</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Як зробити ентер в html?",
              options: ["br", "enter", "break", "end"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "button",
          speedCode: "btn",
          description: `
<b>button</b> - Кнопка. 
По замовчуванню виглядає сірою, маленькою та негарною, при клікі нічого не робить.
Щоб зробити її гарнішою в css необхідно написати близько 10 команд.
<b>Як мінімум:</b>
▪️ фон
▪️ колір тексту
▪️ ширина
▪️ висота

<i>Також можна додати:</i>
▪️ ефект при наведені мишкою
▪️ тінь
▪️ плавність
▪️ заокруглення кутів

Для того щоб запрограмувати її при клікі, необхідно підключити javascript або jquery.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/NT7ZGVV9tmL2X83tYET7Rz/Buttons?type=design&node-id=0-1&mode=design&t=N4TFrbv9V4LZqMt8-0",
                title: "FIGMA: Прості кнопки",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              photo: "",
              code: "",
              title: "Як створити кнопку?",
              options: ["button", "buton", "batton", "biton"],
            },
            {
              photo: "",
              code: "<button>Купити</button>",
              title: "Чи це парний тег?",
              options: ["так", "ні"],
            },
            {
              photo: "",
              code: "",
              title: "По замовчуванню, що відбувається при клікі на кнопку?",
              options: [
                "нічого",
                "повідомлення",
                "перезавантаження",
                "змінення фону",
              ],
            },
            {
              photo: "",
              code: "",
              title: "Яке скорочення створює кнопку?",
              options: ["btn", "but", "bttn", "bn"],
            },
            {
              photo: "",
              code: `
1| <div>Видалити</div>
2| <btn>Видалити</btn>
3| <button>Видалити</button>
4| <img src="button.jpg">
              `,
              title: "На якому рядку створюється кнопка?",
              options: ["3", "1", "2", "4"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/button/1.png",
                title: "Приклади готових кнопок",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/zYMEBaP",
                title: "Круті та цікаві приклади кнопок",
                description: "",
              },
            ],
            code: [
              {
                body: `
<button>Підписатись</button>
              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["a", "input"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "canvas",
          speedCode: "canvas",
          description: `
<b>canvas</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Чи можна використовувати canvas для створення ігор?",
              options: ["так", "ні"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "caption",
          speedCode: "cap",
          description: `
<b>caption</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "cite",
          speedCode: "cite",
          description: `
<b>cite</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "code",
          speedCode: "code",
          description: `
<b>code</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "dd",
          speedCode: "dd",
          description: `
<b>dd</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "del",
          speedCode: "del",
          description: `
<b>del</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Як можна зробити перекреслений текст?",
              options: ["del", "br", "ol", "old"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "details",
          speedCode: "det",
          description: `
<b>details</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "dialog",
          speedCode: "dig",
          description: `
<b>dialog</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "div",
          speedCode: "div",
          description: `
<b>div</b> є найпопулярнішим елементом в HTML. Виглядає як прямокутник, ширина якого 100% а висота залежить від вмісту (наприклад від тексту в цьому прямокутнику).
Поради:
1. Намагайтесь часто використовувати цей тег. Краще якщо 2-3 елементи будуть в прямокутнику так вам легше буде стилізувати та розмістити ці елементи.
2. Якщо є можливість використовуйте інші семантичні теги, такі як: main, article, footer, header, aside, address, blockquote, nav. Вони є такими ж блоками як і div, але мають перевагу в тому що мають зміст.
3. Div'ам завжди давайте класи
4. Тексти пишіть не в div, а в p або h1 і т.д. які можуть бути вже в div.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              photo: "",
              title: "Який тег є найпопулярнішим?",
              options: ["div", "h1", "img", "input"],
            },
            {
              photo: "",
              title: "Яку ширину має прямокутник?",
              options: ["100%", "100px", "1440px", "1000%"],
            },
            {
              photo: "",
              title: "Від чого залежить висота прямокутника",
              options: [
                "вмісту прямокутника",
                "висоти сторінки",
                "швидкості інтернету",
                "насиченості кольору",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<div class="shadowbox">
  <p>Цей текст зараз знаходиться в прямокутнику</p>
</div>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "dl",
          speedCode: "dl",
          description: `
<b>dl</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "dt",
          speedCode: "dt",
          description: `
<b>a</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "footer",
          speedCode: "ftr",
          description: `
<b>footer</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Блок який знаходиться внизу сайту називається",
              options: ["footer", "header", "aside", "main"],
            },
            {
              title: "Як написати footer скорочено?",
              options: ["ftr", "ff", "fff", "frt"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "form",
          speedCode: "form",
          description: `
<b>form</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "h1",
          speedCode: "h1",
          description: `
<b>h1</b> - Найбільший текст на сторінці.
Головне не його розмір тексту, а його важливість! 
На одній сторінці має бути лише 1 тег h1
h1 можна вважати як назву книги. У книги може бути лише 1 назва.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Як зробити найбільший текст?",
              code: "",
              photo: "",
              options: ["h1", "h6", "h0", "h10"],
            },
            {
              title: "Скільки найбільших текстів (h1) може бути на сторінці?",
              code: "",
              photo: "",
              options: ["1", "0", "2", "до 10"],
            },
            {
              title: "Якщо h1 є в книзі тоді це?",
              code: "",
              photo: "",
              options: ["Назва книги", "Розділ книги", "Текст книги"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "h2",
          speedCode: "h2",
          description: `
<b>h2</b> - Другий по величині (важливості) текст на сторінці.
На одній сторінці має бути декілька таких тегів
Якщо h1 можна вважати як назву книги, то h2 є розділами цієї книги
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Як створити другий по величині текст (майже найбільший)",
              options: ["h2", "h4", "h8", "h5"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "h3",
          speedCode: "h3",
          description: `
<b>a</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "h4",
          speedCode: "h4",
          description: `
<b>a</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "h5",
          speedCode: "h5",
          description: `
<b>h5</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "h6",
          speedCode: "h6",
          description: `
<b>h6</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "head",
          speedCode: "head",
          description: `
<b>head</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "В якому тегу ми підключаємо css",
              options: ["head", "header", "foot", "footer"],
            },
            {
              title: "В якому тегу ми пишемо службову інформацію",
              options: ["head", "header", "foot", "footer"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "header",
          speedCode: "hdr",
          description: `
<b>header</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Блок на сайті який знаходиться вгорі називається",
              options: [
                "header",
                "footer",
                "aside",
                "topes",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "hr",
          speedCode: "hr",
          description: `
<b>hr</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Як створити лінію на сайті?",
              options: [
                "hr",
                "h4",
                "b",
                "p",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "html",
          speedCode: "html",
          description: `
<b>html</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "За створення елементів відповідає",
              options: [
                "html",
                "css",
                "javascript",
                "python",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "i",
          speedCode: "i",
          description: `
<b>i</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "iframe",
          speedCode: "ifr",
          description: `
<b>iframe</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Щоб вставити один сайт в інший необхідно написати тег",
              options: [
                "iframe",
                "cite",
                "closest",
                "link",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "img",
          speedCode: "img",
          description: `
<b>img</b> - Створює зображення в HTML.

<b>Ми можемо покласти в img:</b>
◾️ звичайні зображення (jpg, jpeg, bmp)
◾️ прозорі зображення (png, webp)
◾️ анімовані зображення (gif)
◾️ векторні зображення (svg)
◾️ data:image (blob) зображення

<b>Основні Атрибути:</b>
◾️ src - Вказуємо посилання на зображення.
Посилання можуть бути:
1) З інтернету
2) З компютера (рекомендовано)

◾️ alt - Вказуємо опис зображення
Необхідно для пошукових систем, а також якщо зображення не завантажиться

◾️ title - Текст при наведені мишкою

        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              photo: "",
              code: "",
              title: "Як створити зображення?",
              options: ["img", "image", "photo", "icon"],
            },
            {
              photo: "",
              code: "",
              title: "В якому атрибуті ми вказуємо посилання на зображення?",
              options: ["src", "alt", "href", "link"],
            },
            {
              photo: "",
              code: "",
              title: "В якому атрибуті ми вказуємо опис зображення?",
              options: ["alt", "src", "href", "link"],
            },
            {
              photo: "",
              code: "",
              title: "Чи можна в img покласти анімоване зображення?",
              options: ["так", "ні"],
            },
            {
              photo: "",
              code: "",
              title: "Чи можна в img покласти відео?",
              options: ["ні", "так"],
            },
            {
              photo: "",
              code: "",
              title: "Чи це парний тег?",
              options: ["ні", "так"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<img src="penguin.jpg" alt="">

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/img",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "input",
          speedCode: "inp",
          description: `
<b>input</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Створити місце для вводу тексту можна за допомогою тега ...",
              options: [
                "input",
                "enter",
                "text",
                "textenter",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/img",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "label",
          speedCode: "lbl",
          description: `
<b>label</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "li",
          speedCode: "li",
          description: `
<b>li</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Як називається кожний пункт у спискі",
              options: [
                "li",
                "ul",
                "ol",
                "dl",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "link",
          speedCode: "link",
          description: `
<b>link</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Щоб підключити css ми використовуємо тег ...",
              options: [
                "link",
                "css",
                "script",
                "url",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "main",
          speedCode: "main",
          description: `
<b>main</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "В який тег ми маємо покласти головну інформацію на сторінці?",
              options: [
                "main",
                "footer",
                "aside",
                "nav",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "menu",
          speedCode: "menu",
          description: `
<b>menu</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "meta",
          speedCode: "meta",
          description: `
<b>meta</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "meter",
          speedCode: "mtr",
          description: `
<b>meter</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "nav",
          speedCode: "nav",
          description: `
<b>nav</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "ol",
          speedCode: "ol",
          description: `
<b>ol</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Як створити нумерований список?",
              options: [
                "ol",
                "ul",
                "el",
                "il",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "option",
          speedCode: "opt",
          description: `
<b>option</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "output",
          speedCode: "out",
          description: `
<b>output</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "p",
          speedCode: "p",
          description: `
<b>p</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Звичайний текст ми створюємо за допомогою тега ...",
              options: [
                "p",
                "h1",
                "txt",
                "input",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "pre",
          speedCode: "pre",
          description: `
<b>pre</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Щоб html розумів декілька пробілів та ентери ми використовуємо тег",
              options: [
                "pre",
                "code",
                "clear",
                "entry",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "progress",
          speedCode: "prog",
          description: `
<b>progress</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "q",
          speedCode: "q",
          description: `
<b>q</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Маленьку цитату ми створюємо за допомогою тега:",
              options: [
                "q",
                "blockquote",
                "textarea",
                "abbr",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "s",
          speedCode: "s",
          description: `
<b>s</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Щоб зробити перекреслений текст нам потрібен тег:",
              options: [
                "s",
                "p",
                "b",
                "u",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "script",
          speedCode: "script",
          description: `
<b>script</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Підключити javascript до html можна за допомогою тега",
              options: [
                "script",
                "java",
                "js",
                "link",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "select",
          speedCode: "select",
          description: `
<b>select</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Створити розкриваючий список можна за допомогою тега",
              options: [
                "select",
                "option",
                "link",
                "listener",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "source",
          speedCode: "src",
          description: `
<b>source</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "span",
          speedCode: "span",
          description: `
<b>span</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Маленький текст створюємо в тегу",
              options: [
                "span",
                "pre",
                "small",
                "b",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "strong",
          speedCode: "str",
          description: `
<b>strong</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "style",
          speedCode: "style",
          description: `
<b>style</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Щоб написати css в html потрібен тег",
              options: [
                "style",
                "link",
                "css",
                "stylesheet",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "sub",
          speedCode: "sub",
          description: `
<b>sub</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "sup",
          speedCode: "sup",
          description: `
<b>sup</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "summary",
          speedCode: "sum",
          description: `
<b>summary</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "table",
          speedCode: "table",
          description: `
<b>table</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "tbody",
          speedCode: "tbody",
          description: `
<b>tbody</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "td",
          speedCode: "td",
          description: `
<b>td</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "template",
          speedCode: "tem",
          description: `
<b>template</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "textarea",
          speedCode: "tarea",
          description: `
<b>textarea</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "tfoot",
          speedCode: "tfoot",
          description: `
<b>tfoot</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "th",
          speedCode: "th",
          description: `
<b>th</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "thead",
          speedCode: "thead",
          description: `
<b>thead</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "time",
          speedCode: "time",
          description: `
<b>time</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "title",
          speedCode: "title",
          description: `
<b>title</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "tr",
          speedCode: "tr",
          description: `
<b>tr</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "u",
          speedCode: "u",
          description: `
<b>u</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "ul",
          speedCode: "ul",
          description: `
<b>ul</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "video",
          speedCode: "video",
          description: `
<b>video</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Створити відео можна за допомогою тега",
              options: [
                "video",
                "youtube",
                "traffic",
                "img",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "wbr",
          speedCode: "wbr",
          description: `
<b>wbr</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "address",
          speedCode: "adr",
          description: `
<b>address</b> - В цей тег ми пишемо контактну інформацію, наприклад адресу, номер телефону, електронну адресу, соціальні мережі, наш сайт, ім'я, прізвище.
Тег address є семантичним, тобто має сенс.
Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/LnFMeZq25fQj00dDEmX7zG/address?type=design&node-id=0-1&mode=design&t=qzS4DyGBSNQtr3hn-0",
                title: "FIGMA: Контакти магазину",
                hardLevel: 2,
              },
            ],
          },
          tests: [
            {
              title: "Оберіть те що можна написати в тег address",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
            {
              title: "Оберіть те що можна написати в тег address 2",
              options: [
                "+38 050 014 15 2",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/address/1.png",
                title: "Приклади команди address",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/bGQqOdM",
                title: "Простий приклад команди address",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "article",
          speedCode: "art",
          description: `
<b>article</b> - даний елемент підходить, якщо необхідно додати статтю, пост, новину, коментар.
Також будь-яку незалежну інформацію можна помістити в цей тег або ту яка може бути на сайті декілька разів.

Цей елемент з'явився в останній, 5 версії HTML. До 2015 року його не було.
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
            ],
          },

          tests: [
            {
              title: "Оберіть те що можна написати в тег article",
              options: [
                "+38 050 014 15",
                "ноутбук Lenovo",
                "Замовити",
                "будь-яке зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
            ],
            code: [
              {
                body: `
<address>
  <a href="mailto:jim@rock.com">email@gmail.com</a><br>
  <a href="tel:+380500451254">+380500451254</a>
</address>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["article", "time"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
              details: "",
            },
            {
              title: "Про семантичні елементи",
              url: "https://w3schoolsua.github.io/html/html5_semantic_elements.html",
              details: "",
            },
          ],
        },

        childrens: [],
      },

    

      {
        details: {
          title: "color",
          speedCode: "c",
          description: `
<b>color</b> - команда яка дозволяє змінювати колір тексту елемента. 
Найчастіше використовується в кнопках та текстах. 
Є однією з найпопулярніших команд в CSS. 

<b>Колір тексту може бути:</b>
▪️ Одним кольором
▪️ Градієнтом (не в усіх браузерах це працює)
▪️ Зображенням (не в усіх браузерах це працює)
▪️ Напівпрозорим
▪️ В форматах rgb, hex, rgba, hsl, hsla, hwb або англійським словом наприклад - green

`,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          practice: [2],
          tests: [
            {
              title: "Як правильно написати колір тексту?",
              options: ["color", "calor", "collor", "colir"],
            },
            {
              title: "Як скорочено написати колір тексту?",
              options: ["c", "cl", "cc", "cr"],
            },
            {
              title: "color це?",
              options: ["колір тексту", "колір фону", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/NWERRjG",
                title: "Звичайний колір тексту одним кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/rNQMMwz",
                title: "Звичайний колір тексту одним кольором в форматі RGB",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/dyQppOq",
                title: "Додаємо колір лише певній частині речення",
                description:
                  "Для досягнення такого ефекту необхідно частину тексту помістити в span",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
            "background-color",
            "background-attachment",
            "background-image",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "h6",
          speedCode: "h6",
          description: `
<b>h6</b> - Вирівнює текст по центру, або по лівій стороні, або по правій стороні. 

По замовчуванню text-align: left;

<b>Варіанти скорочень:</b>
▪️ ta -> text-align: left;
▪️ tac -> text-align: center;
▪️ tar -> text-align: right;
▪️ taj -> text-align: justify;

По замовчуванню усі тексти мають вирівнювання по лівій стороні, лише <b>кнопка має текст по центру</b>.
Важливо!
Команда text-align не може вирівняти по вертикалі, лише по горизонталі!
`,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/2FpQBsqGIzt4bpCj0Zdlor/text-align?type=design&node-id=0%3A1&mode=design&t=Jaj4sK91NUYCVOC7-1",
                title: "FIGMA: 4 тексти які мають різні вирівнювання",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              photo: "1.png",
              title:
                "Найменший розмір тексту це",
              options: ["h6", "h1", "h0", "h10"],
            },
           
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/text-align/img/2.png",
                title: "Приклад команди text-align: center ",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/NWERRjG",
                title: "Звичайний колір тексту одним кольором",
                description: "",
              },
            ],
            code: [
              {
                body: `
p {
  text-align: center;
}
              `,
                title: "Зробить текст по центру",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "color",
            "text-shadow",
            "text-decoration",
            "text-transform",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-align",
              details: "",
            },
          ],
        },

        childrens: [],
      },
    ],
  },

  {
    title: "css",
    data: [
      {
        details: {
          title: "background",
          speedCode: "bg",
          description: `
<b>background</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              photo: "",
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              photo: "",
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              photo: "",
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "::after",
          speedCode: "::a",
          description: `
<b>::after</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "::before",
          speedCode: "::bf",
          description: `
<b>::before</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "::selection",
          speedCode: "::s",
          description: `
<b>::selection</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: ":focus",
          speedCode: ":focus",
          description: `
<b>:focus</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: ":hover",
          speedCode: ":hv",
          description: `
<b>:hover</b> - команда яка дозволяє змінювати елемент при наведені мишкою. 
Найчастіше використовується в кнопках, посиланнях та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Як правило при наведені мишкою </b>
▪️ Змінюється фон елементу
▪️ Додається тінь
▪️ Збільшується елемент

Обов'язково 
▪️ Додавайте плавність для ховер ефекту (як правило 0.2s - 0.7s)
▪️ Додавайте ефекти при наведені мишкою на кнопки

        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як зробити ефект при наведені мишкою?",
              options: [":hover", ":focus", ":within", ":after"],
            },
            {
              title: "Як скорочено написати :hover?",
              options: [":hv", ":hove", ":hh", ":h"],
            },
            {
              title: ":hover це?",
              options: [
                "Ефект при наведені",
                "Збільшення елементу",
                "Колір зображення",
              ],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
            {
              title: "6 крутих ефектів при наведені мишкою",
              url: "https://css-tricks.com/css-link-hover-effects/",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "@font-face",
          speedCode: "@ff",
          description: `
<b>@font-face</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "@keyframes",
          speedCode: "@kf",
          description: `
<b>@keyframes</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "@media",
          speedCode: "@media",
          description: `
<b>@media</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "align-content",
          speedCode: "ac",
          description: `
<b>align-content</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "align-items",
          speedCode: "ai",
          description: `
<b>align-items</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "align-self",
          speedCode: "as",
          description: `
<b>align-self</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "animation",
          speedCode: "anim",
          description: `
<b>animation</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "animation-delay",
          speedCode: "animdel",
          description: `
<b>animation-delay</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "animation-direction",
          speedCode: "animdir",
          description: `
<b>animation-direction</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "animation-duration",
          speedCode: "animdur",
          description: `
<b>animation-duration</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "animation-fill-mode",
          speedCode: "animfm",
          description: `
<b>animation-fill-mode</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "animation-iteration-count",
          speedCode: "animic",
          description: `
<b>animation-iteration-count</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "animation-name",
          speedCode: "animn",
          description: `
<b>animation-name</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "animation-play-state",
          speedCode: "animationps",
          description: `
<b>animation-play-state</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "animation-timing-function",
          speedCode: "animtf",
          description: `
<b>animation-timing-function</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "aspect-ratio",
          speedCode: "ar",
          description: `
<b>aspect-ratio</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "backdrop-filter",
          speedCode: "bkfr",
          description: `
<b>backdrop-filter</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "background-attachment",
          speedCode: "bga",
          description: `
<b>background-attachment</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "background-blend-mode",
          speedCode: "bgbm",
          description: `
<b>background-blend-mode</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "background-clip",
          speedCode: "bgcp",
          description: `
<b>background-clip</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "background-color",
          speedCode: "bgc",
          description: `
<b>background-color</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "background-image",
          speedCode: "bgi",
          description: `
<b>background-image</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "background-origin",
          speedCode: "bgo",
          description: `
<b>background-origin</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "background-position",
          speedCode: "bgp",
          description: `
<b>background-position</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "background-position-x",
          speedCode: "bgpx",
          description: `
<b>background-position-x</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "background-position-y",
          speedCode: "bgpy",
          description: `
<b>background-position-y</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "background-repeat",
          speedCode: "bgr",
          description: `
<b>background-repeat</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "background-size",
          speedCode: "bgs",
          description: `
<b>background-size</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "::before",
          speedCode: ":bf",
          description: `
<b>::before</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "border",
          speedCode: "bd",
          description: `
<b>border</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "border-bottom",
          speedCode: "bdb",
          description: `
<b>border-bottom</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "border-color",
          speedCode: "bdc",
          description: `
<b>border-color</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "border-left",
          speedCode: "bdl",
          description: `
<b>border-left</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "border-radius",
          speedCode: "brs",
          description: `
<b>border-radius</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "border-right",
          speedCode: "bdr",
          description: `
<b>border-right</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "border-style",
          speedCode: "bds",
          description: `
<b>border-style</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "border-top",
          speedCode: "bdt",
          description: `
<b>border-top</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "border-width",
          speedCode: "bdw",
          description: `
<b>border-width</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "bottom",
          speedCode: "b",
          description: `
<b>bottom</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "box-shadow",
          speedCode: "bxh",
          description: `
<b>box-shadow</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "box-sizing",
          speedCode: "bxz",
          description: `
<b>box-sizing</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "calc()",
          speedCode: "calc()",
          description: `
<b>calc()</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "caret-color",
          speedCode: "cc",
          description: `
<b>caret-color</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "clear",
          speedCode: "cl",
          description: `
<b>clear</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "clip-path",
          speedCode: "cpp",
          description: `
<b>clip-path</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "color",
          speedCode: "c",
          description: `
<b>color</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "content",
          speedCode: "cnt",
          description: `
<b>content</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "counter-increment",
          speedCode: "coi",
          description: `
<b>counter-increment</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "counter-reset",
          speedCode: "cor",
          description: `
<b>counter-reset</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "cursor",
          speedCode: "cur",
          description: `
<b>cursor</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "direction",
          speedCode: "dirn",
          description: `
<b>direction</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "display",
          speedCode: "d",
          description: `
<b>display</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "empty-cells",
          speedCode: "ec",
          description: `
<b>empty-cells</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "filter",
          speedCode: "fer",
          description: `
<b>filter</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "flex",
          speedCode: "fx",
          description: `
<b>flex</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "flex-basis",
          speedCode: "fxb",
          description: `
<b>flex-basis</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "flex-direction",
          speedCode: "fxd",
          description: `
<b>flex-direction</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "flex-flow",
          speedCode: "fxf",
          description: `
<b>flex-flow</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "flex-grow",
          speedCode: "fxg",
          description: `
<b>flex-grow</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "flex-shrink",
          speedCode: "fxs",
          description: `
<b>flex-shrink</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "flex-wrap",
          speedCode: "fxw",
          description: `
<b>flex-wrap</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "float",
          speedCode: "fl",
          description: `
<b>float</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: ":focus",
          speedCode: ":fos",
          description: `
<b>:focus</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "font",
          speedCode: "f",
          description: `
<b>font</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "@font-face",
          speedCode: "@ff",
          description: `
<b>@font-face</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "font-family",
          speedCode: "ff",
          description: `
<b>font-family</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "font-kerning",
          speedCode: "fk",
          description: `
<b>font-kerning</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "font-size",
          speedCode: "fz",
          description: `
<b>font-size</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "font-size",
          speedCode: "fs",
          description: `
<b>font-size</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "font-weight",
          speedCode: "fw",
          description: `
<b>font-weight</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "gap",
          speedCode: "gp",
          description: `
<b>gap</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "grid",
          speedCode: "gd",
          description: `
<b>grid</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "grid-area",
          speedCode: "gdaa",
          description: `
<b>grid-area</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "grid-auto-flow",
          speedCode: "gdaf",
          description: `
<b>grid-auto-flow</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "grid-column",
          speedCode: "gdc",
          description: `
<b>grid-column</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "grid-column-end",
          speedCode: "gdce",
          description: `
<b>grid-column-end</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "grid-column-start",
          speedCode: "gdcs",
          description: `
<b>grid-column-start</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "grid-row",
          speedCode: "gdw",
          description: `
<b>grid-row</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "grid-row-end",
          speedCode: "gdwe",
          description: `
<b>grid-row-end</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "grid-row-start",
          speedCode: "gdrs",
          description: `
<b>grid-row-start</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "grid-template-columns",
          speedCode: "gdtc",
          description: `
<b>grid-template-columns</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "grid-template-rows",
          speedCode: "gdtr",
          description: `
<b>grid-template-rows</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "height",
          speedCode: "h",
          description: `
<b>height</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: ":hover",
          speedCode: ":hv",
          description: `
<b>:hover</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "justify-content",
          speedCode: "jc",
          description: `
<b>justify-content</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "justify-items",
          speedCode: "ji",
          description: `
<b>justify-items</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "justify-self",
          speedCode: "js",
          description: `
<b>justify-self</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "@keyframes",
          speedCode: "@kf",
          description: `
<b>@keyframes</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "left",
          speedCode: "l",
          description: `
<b>left</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "letter-spacing",
          speedCode: "lts",
          description: `
<b>letter-spacing</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "line-break",
          speedCode: "lb",
          description: `
<b>line-break</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "line-height",
          speedCode: "lh",
          description: `
<b>line-height</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "list-style",
          speedCode: "lis",
          description: `
<b>list-style</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "margin",
          speedCode: "m",
          description: `
<b>margin</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "margin-bottom",
          speedCode: "mb",
          description: `
<b>margin-bottom</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "margin-left",
          speedCode: "ml",
          description: `
<b>margin-left</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "margin-right",
          speedCode: "mr",
          description: `
<b>margin-right</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "margin-top",
          speedCode: "mt",
          description: `
<b>margin-top</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "max()",
          speedCode: "max()",
          description: `
<b>max()</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "max-height",
          speedCode: "mah",
          description: `
<b>max-height</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "max-width",
          speedCode: "maw",
          description: `
<b>max-width</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "@media",
          speedCode: "@m",
          description: `
<b>@media</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "min()",
          speedCode: "min()",
          description: `
<b>min()</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "min-height",
          speedCode: "mih",
          description: `
<b>min-height</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "min-width",
          speedCode: "miw",
          description: `
<b>min-width</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "opacity",
          speedCode: "op",
          description: `
<b>opacity</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "order",
          speedCode: "ord",
          description: `
<b>order</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "outline",
          speedCode: "ol",
          description: `
<b>outline</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "outline-color",
          speedCode: "olc",
          description: `
<b>outline-color</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "outline-style",
          speedCode: "ols",
          description: `
<b>outline-style</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "outline-width",
          speedCode: "olw",
          description: `
<b>outline-width</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "overflow",
          speedCode: "ov",
          description: `
<b>overflow</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "overflow-x",
          speedCode: "ovx",
          description: `
<b>overflow-x</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "overflow-y",
          speedCode: "ovy",
          description: `
<b>overflow-y</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "padding",
          speedCode: "p",
          description: `
<b>padding</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "padding-bottom",
          speedCode: "pb",
          description: `
<b>padding-bottom</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "padding-left",
          speedCode: "pl",
          description: `
<b>padding-left</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "padding-right",
          speedCode: "pr",
          description: `
<b>padding-right</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "padding-top",
          speedCode: "pt",
          description: `
<b>padding-top</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "place-items",
          speedCode: "pci",
          description: `
<b>place-items</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "place-self",
          speedCode: "pls",
          description: `
<b>place-self</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "position",
          speedCode: "pos",
          description: `
<b>position</b> - команда яка дозволяє змінювати положення елементу. 

<b>position може бути:</b>
▪️ relative, 
▪️ absolute, 
▪️ fixed 
▪️ sticky
▪️ static (по замовчуванню)


Коли ми задаємо position для нас працюють такі команди:
▪️ top
▪️ left
▪️ right
▪️ bottom
▪️ z-index
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title:
                "Яку команду необхідно написати для того щоб мати можливість задати координати елемента?",
              options: ["position", "place-item", "relative", "xy"],
            },
            {
              title: "Як скорочено написати position?",
              options: ["pos", "ps", "pts", "p"],
            },
            {
              title: "Який position є найпопулярнішим?",
              options: ["absolute", "fixed", "sticky", "relative"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "quotes",
          speedCode: "q",
          description: `
<b>quotes</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "resize",
          speedCode: "rsz",
          description: `
<b>resize</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "right",
          speedCode: "r",
          description: `
<b>right</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "scale",
          speedCode: "sca",
          description: `
<b>scale</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "::selection",
          speedCode: ":se",
          description: `
<b>::selection</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "src",
          speedCode: "src",
          description: `
<b>src</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "tab-size",
          speedCode: "tbs",
          description: `
<b>tab-size</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "text-decoration",
          speedCode: "td",
          description: `
<b>text-decoration</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "text-shadow",
          speedCode: "tsh",
          description: `
<b>text-shadow</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "text-transform",
          speedCode: "tt",
          description: `
<b>text-transform</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "top",
          speedCode: "t",
          description: `
<b>top</b> - відстань зверху
Працює лише якщо є одна із команд:
▪️ position: absolute;
▪️ position: relative;
▪️ position: fixed;
▪️ position: sticky;

        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як зробити відстань зверху?",
              options: ["top", "up", "bottom", "high"],
            },
            {
              title: "Як скорочено написати top?",
              options: ["t", "u", "p", "o"],
            },
            {
              title: "Яка команда обов'язкова для того щоб спрацював top?",
              options: ["position", "display", "clear", "rel"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "transform",
          speedCode: "trf",
          description: `
<b>grid</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "translate",
          speedCode: "tslt",
          description: `
<b>translate</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "transition",
          speedCode: "trs",
          description: `
<b>transition</b> - плавність змінення css команд

Можна вказувати в мілісекундах та секундах, наприклад:
▪️ transition: 1s;
▪️ transition: 1000ms;

Можна вказувати команду яка саме буде змінюватись:
▪️ transition: width 1s;
▪️ transition: width 1s, background 2s;

Також можна вказувати:
▪️ затримку анімації 
transition-delay

▪️ стан анімації (запущено або пауза)
transition-play-state

Як правило використовується при наведені мишкою
transition ніколи не пишемо в :hover (інакше ефект не буде плавним)!
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "За що відповідає transition?",
              options: [
                "плавність переходів",
                "ширина",
                "висота",
                "заокруглення",
              ],
            },
            {
              title: "Як скорочено написати transition?",
              options: ["trs", "ts", "t", "trst"],
            },
            {
              title: "Чи можна вказувати плавність transition'a в секундах?",
              options: ["так", "ні"],
            },
            {
              title: "Чи можна вказувати плавність transition'a в хвилинах?",
              options: ["ні", "так"],
            },
            {
              title:
                "Чи можна вказувати плавність transition'a в мілісекундах?",
              options: ["так", "ні"],
            },
            {
              title: "Чи можемо ми писати transition в :hover?",
              options: ["ні", "так"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/OJajxKq",
                title: "Плавне змінення фону",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
            {
              title: "Стаття як краще користуватись transition",
              url: "https://blog.alexmaccaw.com/all-you-need-to-know-about-css-transitions/",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "url()",
          speedCode: "url()",
          description: `
<b>url()</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "user-select",
          speedCode: "us",
          description: `
<b>user-select</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "var()",
          speedCode: "var()",
          description: `
<b>var()</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "vertical-align",
          speedCode: "va",
          description: `
<b>vertical-align</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "visibility",
          speedCode: "v",
          description: `
<b>visibility</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "white-space",
          speedCode: "whs",
          description: `
<b>white-space</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "width",
          speedCode: "w",
          description: `
<b>width</b> - ширина елементу.

Ширину можна вказувати:
- в пікселях
- в відсотках

<b>Важча інформація:</b>
а також в em, rem, vw, 
По замовчуванню прямокутник, p, h1-h6 (та будь-який блоковий елемент) має ширину 100%
Строкові та Блоково-строкові елементи - мають ширину по замовчуванню 0px та збільшуються при заповненні контентом

Не використовуйте ширину більше ніж 300 пікселів, тому що на телефоні такі елементи не помістяться. Замість цього використовуйте такий код:

max-width: 300px;
width: 100%;

        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як зробити ширину?",
              options: ["width", "height", "length", "amount"],
            },
            {
              title: "Як правильно написати ширина?",
              options: ["width", "with", "witdh", "widht"],
            },
            {
              title: "Як скорочено написати ширина?",
              options: ["w", "h", "m", "i"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
            {
              title: "Ширина | CSS Tricks",
              url: "https://css-tricks.com/almanac/properties/w/width/",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "word-break",
          speedCode: "wob",
          description: `
<b>word-break</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "word-spacing",
          speedCode: "wos",
          description: `
<b>word-spacing</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "z-index",
          speedCode: "z",
          description: `
<b>z-index</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "zoom",
          speedCode: "zm",
          description: `
<b>zoom</b> - команда яка дозволяє змінювати фон елемента. 
Найчастіше використовується в кнопках та прямокутниках. 
Є однією з найпопулярніших команд в CSS. 

<b>Фон може бути:</b>
▪️ Кольором
▪️ Градієнтом
▪️ Зображенням

За бажанням фон можна зробити напівпрозорим
За бажанням можна зробити фон з декількох зображень або з декількох кольорів
        `,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["bg", "bcg", "b", "br"],
            },
            {
              title: "background це?",
              options: ["колір фону", "колір тексту", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/XWyjrjo",
                title: "Звичайний фон кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPRQ",
                title: "Фон лінійним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/eYQdOgP",
                title: "Фон конусним градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/BaGLBWR",
                title: "Фон колір + фото",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/xxQEKqo",
                title: "Фон декількома зображеннями",
                description: "",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "color",
          speedCode: "c",
          description: `
<b>color</b> - команда яка дозволяє змінювати колір тексту елемента. 
Найчастіше використовується в кнопках та текстах. 
Є однією з найпопулярніших команд в CSS. 

<b>Колір тексту може бути:</b>
▪️ Одним кольором
▪️ Градієнтом (не в усіх браузерах це працює)
▪️ Зображенням (не в усіх браузерах це працює)
▪️ Напівпрозорим
▪️ В форматах rgb, hex, rgba, hsl, hsla, hwb або англійським словом наприклад - green

`,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/xSZ0QJERoBWYg89hTdsFdS/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-1?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників з різними фонами",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              title: "Як правильно написати фон?",
              options: ["background", "backround", "bakgroun", "bakground"],
            },
            {
              title: "Як скорочено написати фон?",
              options: ["c", "cl", "cc", "cr"],
            },
            {
              title: "color це?",
              options: ["колір тексту", "колір фону", "колір зображення"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/background/img1.png",
                title: "Приклади команди background",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/NWERRjG",
                title: "Звичайний колір тексту одним кольором",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/rNQMMwz",
                title: "Звичайний колір тексту одним кольором в форматі RGB",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/JjeRPbQ",
                title: "Фон зображенням",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/mdQrbRE",
                title: "Фон круговим градієнтом",
                description: "",
              },
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/dyQppOq",
                title: "Додаємо колір лише певній частині речення",
                description:
                  "Для досягнення такого ефекту необхідно частину тексту помістити в span",
              },
            ],
            code: [
              {
                body: `
button {
  background: red;
}
              `,
                title: "Зробить фон кнопки червоним",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "background-size",
            "background-repeat",
            "background-position",
            "background-color",
            "background-attachment",
            "background-image",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/background",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "text-align",
          speedCode: "ta",
          description: `
<b>text-align</b> - Вирівнює текст по центру, або по лівій стороні, або по правій стороні. 

По замовчуванню text-align: left;

<b>Варіанти скорочень:</b>
▪️ ta -> text-align: left;
▪️ tac -> text-align: center;
▪️ tar -> text-align: right;
▪️ taj -> text-align: justify;

По замовчуванню усі тексти мають вирівнювання по лівій стороні, лише <b>кнопка має текст по центру</b>.
Важливо!
Команда text-align не може вирівняти по вертикалі, лише по горизонталі!
`,
          tasks: {
            speed: [
              {
                url: "https://www.figma.com/file/2FpQBsqGIzt4bpCj0Zdlor/text-align?type=design&node-id=0%3A1&mode=design&t=Jaj4sK91NUYCVOC7-1",
                title: "FIGMA: 4 тексти які мають різні вирівнювання",
                hardLevel: 2,
              },
              {
                url: "https://www.figma.com/file/r7RZgKdPGaHihLkfDF4zrM/%D0%A2%D1%80%D0%B5%D0%BD%D1%83%D1%94%D0%BC%D0%BE-%D1%84%D0%BE%D0%BD.-%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-3?type=design&node-id=0-1&t=qKEBTJu2Ls3lOS7U-0",
                title: "FIGMA: 7 прямокутників: фон зображенням та градієнтами",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              photo: "1.png",
              title:
                "Яке скорочення може вирівняти текст так, як зображено на фото?",
              options: ["ta", "taj", "tar", "tac"],
            },
            {
              photo: "2.png",
              title:
                "Яке скорочення може вирівняти текст так, як зображено на фото?",
              options: ["tac", "taj", "tar", "ta"],
            },
            {
              photo: "3.png",
              title:
                "Яке скорочення може вирівняти текст так, як зображено на фото?",
              options: ["tar", "taj", "tac", "ta"],
            },
            {
              photo: "4.png",
              title:
                "Яке скорочення може вирівняти текст так, як зображено на фото?",
              options: ["taj", "tac", "tar", "ta"],
            },
            {
              photo: "",
              title: "Яке скорочення не стосується text-align?",
              options: ["tal", "taj", "tar", "ta"],
            },
          ],
          default: {
            figma: [
              {
                url: "",
                title: "",
                description: "",
              },
            ],
            images: [
              {
                url: "./img/themes/css/text-align/img/2.png",
                title: "Приклад команди text-align: center ",
                description: "",
                links: {},
              },
            ],
            sandbox: [
              {
                url: "https://codepen.io/DmytroKrasyliuk/pen/NWERRjG",
                title: "Звичайний колір тексту одним кольором",
                description: "",
              },
            ],
            code: [
              {
                body: `
p {
  text-align: center;
}
              `,
                title: "Зробить текст по центру",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: [
            "color",
            "text-shadow",
            "text-decoration",
            "text-transform",
          ],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-align",
              details: "",
            },
          ],
        },

        childrens: [],
      },
    ],
  },
];
// cThemes.css.childrens.childrens

// let themes = {
//   html: {
//     Теги: {
//       a: {
//         description: "Створює посилання на інші сайти",
//         ready: 2,
//       },
//       b: {
//         description: "Створює жирний текст",
//         ready: 0,
//       },
//       p: {
//         description: "Створює звичайний текст",
//         ready: 3,
//       },
//     },
//     Атрибути: {
//       class: {
//         description: "Створює посилання на інші сайти",
//         ready: 1,
//         children: {
//           "Декілька класів": {
//             description: "Розділяємо пробілами",
//             ready: 10,
//           },
//         },
//       },
//       id: {
//         description: "Може виконувати таку ж роль як і класи",
//         ready: 50,
//       },
//     },
//   },
//   css: {
//     Властивості: {
//       description: "Може виконувати таку ж роль як і класи",
//       ready: 20,
//     },
//     Селектори: {},
//   },

//   js: {
//     Властивості: {
//       description: "JS 1",
//       ready: 20,
//     },
//     Селектори: {},
//   },
// };

export { cThemes, students, templates, technologiesStack, adminId };
