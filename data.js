import { Practice, User } from "./database/index.js";

let adminId = 957139896;

let students = await User.find({});

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
  "JAVA",
  "С#",
  "other",
];

let themes = [
  {
    title: "html",
    data: [
      {
        details: {
          title: "a",
          speedCode: "a",
          description: `
Тег <b>a</b> в HTML використовується для створення гіперпосилань, які дозволяють користувачам переходити від однієї веб-сторінки до іншої, або до певної частини тієї ж сторінки.

Приклад використання тега <a>:

<a href="https://example.com">Відвідати Example.com</a>
У цьому прикладі href - це атрибут, який вказує на URL адресу, на яку повинне вести посилання. Текст між <a> та </a> (в цьому випадку "Відвідати Example.com") - це те, що буде видно користувачам на веб-сторінці.

Якщо ти клікнеш на цей текст у веб-браузері, ти перейдеш на веб-сайт "example.com".

Також можна створювати посилання, які ведуть до певної частини сторінки. Це робиться за допомогою тега <a> з атрибутом href, який починається з символу "#". Наприклад:

<a href="#section1">Перейти до секції 1</a>


<div id="section1">
  Це секція 1.
</div>

У цьому прикладі, якщо ти клікнеш на посилання "Перейти до секції 1", ти перемістишся до елементу з id "section1" на тій ж сторінці.
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
            {
              title: "Тег a створює на сайті",
              options: [
                "посилання",
                "жирний текст",
                "нахилений текст",
                "цитату",
              ],
            },
            {
              title:
                "Щоб посилання відкрилось у новій вкладці необхідно написати ",
              options: [
                'target="_blank"',
                'target="_new"',
                'target="_end"',
                'target="_tab"',
              ],
            },
            {
              title: "Що означає атрибут href у тега a?",
              options: [
                "Адреса посилання",
                "Текст посилання",
                "Формат посилання",
                "Стиль посилання",
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
          title: "abbr",
          speedCode: "abbr",
          description: `
<b>abbr</b> -  в HTML використовується для вказування абревіатури або скорочення. Коли ми говоримо про абревіатуру, ми маємо на увазі скорочену форму слова або фрази. Наприклад, "ООН" - це абревіатура від "Організація Об'єднаних Націй".

Тег <abbr> використовується так:


<p>Сайт <abbr title="OpenAI">ОАІ</abbr> розробляє нові методи штучного інтелекту.</p>
В цьому прикладі, "ОАІ" - це абревіатура, а атрибут title вказує, що ця абревіатура означає "OpenAI". Коли ти наводиш курсор на слово "ОАІ" на веб-сторінці, ти побачиш, що вспливає текст "OpenAI".

Це дуже корисно, коли ти хочеш зробити свій текст коротшим або коли ти використовуєш скорочення, які деякі люди можуть не знати. Завдяки тегу <abbr>, вони можуть просто навести курсор на скорочення, щоб побачити, що воно означає.
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
              title: "В якому тегу можна написати СССР, США, HTML",
              options: ["abbr", "big", "sup", "sub"],
            },
            {
              title: "Що робить тег abbr в HTML?",
              options: [
                "Створює абревіатуру",
                "Створює гіперпосилання",
                "Створює абзац",
                "Створює заголовок",
              ],
            },
            {
              title: "Для чого використовується атрибут title в тега abbr?",
              options: [
                "Для повного виразу абревіатури",
                "Для стилю тексту",
                "Для посилання",
                "Для кольору тексту",
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
          title: "aside",
          speedCode: "aside",
          description: `Тег aside використовується в HTML для визначення контенту, що є відокремленим від основного інформаційного контенту сторінки. Він може бути використаний для бокових панелей, рекламних блоків, навігаційних блоків тощо. 
<b>aside</b> - уяви, що ти робиш проект для школи на великому аркуші паперу. 
Основна твоя розповідь йде посередині, а додаткові цікавинки ти розміщуєш по боках. 
Вони пов'язані з твоєю темою, але не є головною частиною твоєї розповіді. 
В HTML <aside> це як ці додаткові коробочки з інформацією, а CSS це ті кольорові олівці та маркери, 
якими ти розмічаєш де що буде.
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
            {
              title:
                "Яке значення має тег aside для SEO (оптимізації сайту для пошукових систем)?",
              options: [
                "Він позначає контент, що не є головним",
                "Він позначає головний контент",
                "Він позначає навігаційний контент",
                "Він не має значення для SEO",
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
          title: "audio",
          speedCode: "au",
          description: `
Тег <audio> в HTML використовується для вбудовування аудіо контенту на веб-сторінку.

Ось як ти можеш використати цей тег, щоб додати музику або інші звуки до своєї веб-сторінки:


<audio controls>
  <source src="моя_пісня.mp3" type="audio/mpeg">
  Твій браузер не підтримує аудіо елемент.
</audio>

В цьому прикладі, controls - це атрибут, який додає елементи керування для аудіо плеєра, такі як кнопки "відтворити/пауза" та "гучність".

<source src="моя_пісня.mp3" type="audio/mpeg"> - це та частина, де ти вказуєш, який аудіо файл ти хочеш використати. src - це місце, де зберігається твій аудіо файл, а type - це формат цього файлу.

Текст "Твій браузер не підтримує аудіо елемент" буде показаний тоді, коли браузер, який використовує твій відвідувач, не може відтворити аудіо файл.

Це досить просто, правда? З тегом <audio> ти можеш зробити свою веб-сторінку більш інтерактивною і цікавою для відвідувачів.

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
Тег <b> в HTML використовується для візуального виділення тексту, зазвичай змінюючи його на жирний.

Ось приклад його використання:

html
Copy code
<p>Мені <b>дуже</b> подобається ця книга.</p>
У цьому реченні слово "дуже" буде відображено жирним шрифтом.

Проте важливо зазначити, що тег <b> не надає тексту ніякого додаткового смислового навантаження. 
Він лише змінює візуальне відображення тексту. Якщо ти хочеш виділити частину тексту, яка має особливе значення, краще використати теги <strong> або <em>.
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
            {
              title: "Яке семантичне значення має тег b в HTML?",
              options: [
                "Текст немає додаткового смислу",
                "Текст важливий",
                "Текст має особливий смисл",
                "Текст є цитатою",
              ],
            },
            {
              title: "Як правильно використовувати тег b для слова 'HTML'?",
              options: [
                "<b>HTML</b>",
                '<b src="HTML">',
                '<b href="HTML">',
                '<b alt="HTML">',
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
Тег <blockquote> в HTML використовується для виділення довгих цитат в тексті. Коли ти використовуєш цей тег, браузер автоматично додає відступи до цитати, щоб виділити її від іншого тексту.
Текст, який обгортається цим тегом, зазвичай відображається з відступами з обох сторін. 

Ось як ти можеш використати цей тег:

<p>Ось що сказав Альберт Ейнштейн:</p>

<blockquote>
  <p>Фантазія важливіша за знання. Знання обмежене, фантазія охоплює весь світ.</p>
</blockquote>

В цьому прикладі цитата Ейнштейна буде відокремлена від іншого тексту з використанням відступів.
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
          similarTags: ["q", "time"],

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
Тег <body> в HTML - це як коробка, де ти зберігаєш все, що ти хочеш показати людям, коли вони відкривають твій веб-сайт. Всі тексти, картинки, відео, посилання - все це лежить в цій коробці.

Уяви, що ти будуєш будиночок з конструктора. Тег <html> - це сам будиночок, а тег <body> - це всередині цього будиночка. Все, що ти хочеш показати всередині свого будиночка - меблі, іграшки, картини - це і є вмістом тегу <body>.

Отже, ось приклад коду з тегом <body>:

<!DOCTYPE html>
<html>
<head>
  <title>Мій чудовий веб-сайт</title>
</head>
<body>
  <h1>Привіт, світ!</h1>
  <p>Це мій перший веб-сайт.</p>
  <img src="моя_картинка.jpg" alt="Моя чудова картинка">
</body>
</html>
У цьому коді всередині тега <body> є заголовок <h1>, абзац тексту <p> і картинка <img>. Коли люди відкривають твій веб-сайт, ось це вони і бачать.
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
Тег <br> в HTML використовується для створення перерви в тексті, або, іншими словами, вставки нового рядка.

Ось як можна використати цей тег:

<p>Я люблю грати в футбол.<br>Я також люблю грати в баскетбол.</p>
У цьому прикладі, тег <br> зробить так, що речення "Я також люблю грати в баскетбол." почнеться з нового рядка.

Якщо дуже просто: тег <br> - це як коли ти пишеш у своєму зошиті і доходиш до кінця рядка. Ти робиш перенос і починаєш писати на наступному рядку. Тег <br> допомагає зробити те саме у веб-сторінці.

Але важливо не зловживати цим тегом для відступів між абзацами чи великими блоками тексту. Для цього краще використовувати CSS стилі.
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
Тег <canvas> в HTML - це місце на веб-сторінці, де ти можеш створювати графіку за допомогою JavaScript. Це можуть бути графіки, діаграми, анімації, ігри або будь-які інші візуальні елементи.

Ось як виглядає пустий тег <canvas>:

<canvas id="myCanvas"></canvas>

У цьому прикладі id="myCanvas" - це ідентифікатор, який ти можеш використати в JavaScript, щоб малювати на цьому полотні.

Однак, важливо знати, що сам по собі тег <canvas> не має власної графіки. Щоб щось зобразити на ньому, тобі потрібно використати JavaScript.

Якщо дуже просто: тег <canvas> - це як чисте полотно для живопису. Ти можеш використати JavaScript як твої фарби і кисть, щоб намалювати що-небудь на цьому полотні прямо на своїй веб-сторінці. Це може бути все, що тобі подобається - від простого кольорового квадрата до складної анімації.
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
            {
              title:
                "Що буде відображатися, якщо браузер не підтримує тег canvas?",
              options: [
                "Буде відображено повідомлення про помилку",
                "Буде відображено текст всередині canvas",
                "Екран стане пустим",
                "Браузер зависне або зламається",
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
          title: "caption",
          speedCode: "cap",
          description: `
Тег <caption> в HTML використовується для додавання заголовку до таблиці. Це допомагає пояснити, що представлено в таблиці, і робить її більш доступною.

Ось як ти можеш використати цей тег:

<table>
  <caption>Розклад уроків</caption>
  <tr>
    <th>День</th>
    <th>Предмет</th>
  </tr>
  <tr>
    <td>Понеділок</td>
    <td>Математика</td>
  </tr>
  <!-- і так далі -->
</table>

У цьому прикладі, <caption>Розклад уроків</caption> встановлює заголовок таблиці, що допомагає зрозуміти, що представлено в таблиці.

Якщо дуже просто: тег <caption> - це як назва книги. Коли ти бачиш книгу на полиці, ти перш за все дивишся на її назву, щоб зрозуміти, про що вона. Те саме стосується і таблиці на веб-сторінці: тег <caption> допомагає людям зрозуміти, що вони бачать у таблиці.
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
              title: "Що створює тег caption в HTML?",
              options: [
                "Заголовок таблиці",
                "Абзац тексту",
                "Заголовок сторінки",
                "Візуальну графіку",
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
Тег <cite> в HTML використовується для вказівки на назву твору - такого як книга, вірш, пісня, фільм, телепередача, живописна робота, скульптура, музичний трек, оперна композиція, та ін. Цей тег зазвичай відображає текст із курсивом.

Ось як можна використати цей тег:


<p>Моя улюблена книга - <cite>Гаррі Поттер і філософський камінь</cite> від Дж.К. Ролінг.</p>

У цьому прикладі, <cite>Гаррі Поттер і філософський камінь</cite> позначає назву книги.
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
Тег <code> в HTML використовується для відображення тексту, що представляє фрагмент програмного коду. Це може бути рядок коду з мови програмування, ім'я змінної, функції, чи щось подібне.

Текст, що знаходиться в тегу <code>, зазвичай відображається моноширинним шрифтом - це означає, що всі букви мають однакову ширину. Це допомагає зробити код більш читабельним.

Ось приклад використання цього тегу:

html
Copy code
<p>В JavaScript, щоб створити змінну, ви можете використати тег <code>let</code>, наприклад: <code>let myVariable = 5;</code></p>
У цьому прикладі, <code>let</code> і <code>let myVariable = 5;</code> - це шматочки коду, які відображаються моноширинним шрифтом.
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
Тег <dd> в HTML використовується в середині описового списку (<dl>), і він відповідає за представлення визначення для терміну, вказаного в <dt>.

Ось як можна використати цей тег:


<dl>
  <dt>Комп'ютер</dt>
  <dd>Електронний пристрій, який може зберігати, обробляти та виводити інформацію.</dd>
</dl>
У цьому прикладі, <dt>Комп'ютер</dt> - це термін, а <dd>Електронний пристрій, який може зберігати, обробляти та виводити інформацію.</dd> - це визначення цього терміну.

Якщо дуже просто: уяви, що ти робиш словник, де для кожного слова є його визначення. Тег <dt> - це слово, а тег <dd> - це визначення цього слова. Якщо ти хочеш сказати, що "комп'ютер" - це "електронний пристрій, який може зберігати, обробляти та виводити інформацію", то ти використовуєш тег <dd>, щоб дати це визначення.
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
Тег <del> в HTML використовується для позначення тексту, який був видалений з документа. Текст всередині цього тегу зазвичай відображається як перекреслений.

Ось приклад використання цього тегу:

<p>Мій улюблений фрукт - <del>яблуко</del> банан.</p>
У цьому прикладі, <del>яблуко</del> показує, що слово "яблуко" було видалено, і замість нього тепер "банан".

Якщо дуже просто: уяви, що ти пишеш речення і потім змінюєш свою думку про щось. Ти хочеш показати, що раніше ти сказав одну річ, але тепер це змінилося. Тег <del> - це як магічна гумка, яка показує, що ти видалив певну частину свого тексту. Цей текст стає перекресленим, щоб всім було зрозуміло, що ти змінив свою думку.
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
Тег <details> в HTML використовується для створення вмісту, який користувач може відкрити або закрити за бажанням. Він часто використовується для створення розгорнутих списків або розділів з частими питаннями (FAQ).

Ось приклад використання цього тегу:

html
Copy code
<details>
  <summary>Що таке HTML?</summary>
  HTML - це мова розмітки гіпертексту, яка використовується для створення веб-сторінок.
</details>
У цьому прикладі, <summary>Що таке HTML?</summary> створює кнопку, яку можна натиснути, щоб показати або сховати відповідь на питання "Що таке HTML?".

Якщо дуже просто: уяви, що ти маєш коробку, і в тебе є можливість відкрити і закрити її. Коли коробка відкрита, ти бачиш що всередині, а коли закрита - не бачиш. Тег <details> в HTML - це як така коробка для тексту на веб-сторінці. Він допомагає приховати частину тексту і показати його лише тоді, коли користувач хоче його побачити.
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
Тег <dialog> в HTML використовується для відображення модального вікна, такого як спливаюче вікно або діалогове вікно. Модальне вікно - це вікно, яке з'являється поверх основного вмісту сторінки і вимагає взаємодії від користувача.

Ось приклад використання цього тегу:


<dialog open>
  Це діалогове вікно!
</dialog>
У цьому прикладі, <dialog open> створює діалогове вікно, яке з'являється поверх основного вмісту сторінки із текстом "Це діалогове вікно!".

Атрибут open робить вікно видимим. Без нього вікно за замовчуванням буде приховано.

Якщо дуже просто: уяви, що ти граєш у гру і раптом з'являється спеціальне вікно з повідомленням або питанням, яке ти повинен прочитати або на яке ти повинен відповісти, перш ніж продовжити гру. Тег <dialog> в HTML - це як це спеціальне вікно в грі. Він допомагає створити подібне вікно на веб-сторінці.
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
Тег <footer> в HTML використовується для позначення "нижньої частини" веб-сторінки або окремого розділу на сторінці. Це частина дизайну веб-сайту, де ви зазвичай знайдете таку інформацію, як авторські права, посилання на політику конфіденційності, контактну інформацію, посилання на соціальні мережі, посилання для навігації по сайту та іншу додаткову інформацію.

Він використовується не тільки для головної сторінки сайту, але і може бути використаний в кожному блоку на сторінці. Наприклад, ви можете мати <footer> в кожній статті на блозі, який містить інформацію про автора або дату публікації.

Ось дещо складніший приклад:

<footer>
  <p>© 2023 Мій веб-сайт. Всі права захищені.</p>
  <nav>
    <a href="/about.html">Про нас</a> |
    <a href="/privacy.html">Політика конфіденційності</a> |
    <a href="/contact.html">Контакти</a>
  </nav>
</footer>
У цьому прикладі, крім повідомлення про авторські права, ми також маємо навігаційне меню з посиланнями на сторінки "Про нас", "Політика конфіденційності" і "Контакти". Це все обгорнуто в тег <footer>, який показує, що ця інформація знаходиться в нижній частині веб-сторінки або блоку.
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
Тег <form> в HTML використовується для створення форми на веб-сторінці. Форма - це місце, де користувачі можуть вводити і надсилати інформацію, наприклад, ім'я, електронну пошту, пароль тощо. Форми зазвичай використовуються для реєстрації на веб-сайті, вводу інформації для замовлення товару або послуги, або надсилання повідомлень.

Ось приклад використання цього тегу:


<form action="/submit_form" method="post">
  Ім'я: <input type="text" name="name"><br>
  Електронна пошта: <input type="email" name="email"><br>
  <input type="submit" value="Відправити">
</form>

У цьому прикладі, <form action="/submit_form" method="post"> створює форму, яка надсилає введені дані на адресу "/submit_form" за допомогою методу "post". Всередині форми є два поля для вводу ім'я та електронної пошти, а також кнопка для відправлення форми.

Якщо дуже просто: уяви, що ти хочеш зареєструватись в онлайн-грі. Тобі потрібно ввести своє ім'я користувача, електронну пошту та придумати пароль. Всі ці речі ти вводиш в спеціальні поля на сторінці реєстрації. Таку набір полів називають "формою". Тег <form> в HTML допомагає створити таку форму на веб-сторінці.
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
              title: "Форма реєстрації/авторизації",
              url: "https://codepen.io/DmytroKrasyliuk/pen/LYXXeGJ",
              details: "",
            },
            {
              title: "Форма з індикаторами кроків",
              url: "https://codepen.io/DmytroKrasyliuk/pen/wvQQpMa",
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
На одній сторінці має бути лише один тег h1
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
                body: `<h2>Відгуки про нас</h2>`,
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

Тег <head> у HTML - це спеціальний тег, який містить інформацію, яка не відображається безпосередньо на веб-сторінці, коли ви її відкриваєте в браузері.

Давайте уявимо, що HTML-документ - це людина. Тоді тег <body> - це тіло людини, все те, що видно іншим: очі, волосся, одяг. А тег <head> - це головний мозок, який контролює все, але не відображається безпосередньо.

У тегу <head> може бути інформація про сторінку, така як:
◾ Заголовок сторінки (<title>): це назва, яку ви бачите в верхній частині вкладки браузера.
◾ Метадані (<meta>): це додаткова інформація про сторінку, наприклад, опис сторінки, ключові слова для пошукових систем, символи або мова, що використовуються на сторінці.
◾ Посилання на CSS-стилі (<link>): це правила, які вказують, як виглядатиме ваша сторінка: який колір тексту, фону, як впорядковані елементи на сторінці та інше.
◾ Скрипти JavaScript (<script>): це програми, які можуть додавати різні інтерактивні елементи на сторінку, наприклад, кнопки, які щось роблять, коли на них натискають.

Пам'ятайте, що все, що ви ставите у <head>, не буде відображатись на самій веб-сторінці. Воно лише допомагає браузеру та пошуковим системам краще розуміти та показувати вашу сторінку.
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
              title: "В якому тегу ми пишемо тег link, який підключає css?",
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
              options: ["header", "footer", "aside", "topes"],
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
              options: ["hr", "h4", "b", "p"],
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
Тег <html> в HTML є кореневим тегом для всього документа HTML. Він містить всю інформацію, яка відображається на веб-сторінці. Кожен HTML-документ починається і закінчується тегом <html>.

Всередині тега <html> ми знаходимо дві основні частини: тег <head> та тег <body>. Тег <head> містить інформацію, яка не відображається на сторінці, але яка необхідна для браузера, наприклад, заголовок сторінки, посилання на CSS-стилі, метатеги тощо. Тег <body> містить весь контент, який відображається на сторінці, такий як текст, зображення, посилання, форми тощо.

Ось простий приклад:

<!DOCTYPE html>
<html>
  <head>
    <title>Моя сторінка</title>
  </head>
  <body>
    <h1>Вітаю на моїй сторінці!</h1>
    <p>Це мій перший веб-сайт.</p>
  </body>
</html>

У цьому прикладі, <html> є кореневим тегом, який містить усю іншу HTML-структуру всередині себе. Він має два дочірніх елементи: <head> з заголовком сторінки та <body> з основним вмістом.
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
              options: ["html", "css", "javascript", "python"],
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
<b>iframe</b> - Сайт в сайті
iframe, або "inline frame", це елемент HTML, який дозволяє вбудовувати інший документ HTML всередину поточного HTML документа. Це можна уявити як вікно всередині веб-сторінки, в якому можна показувати іншу веб-сторінку.

Наприклад, ти можеш мати свій веб-сайт і за допомогою iframe показувати YouTube відео прямо на своєму сайті, не відправляючи відвідувачів на сам YouTube.
Подумай про iframe як про сучасний телевізор на твоєму веб-сайті. Цей телевізор може показувати контент з інших веб-сайтів прямо на твоєму сайті, без потреби відвідувачам йти на ті сайти. Тобто, якщо ти хочеш показати відео з YouTube на своєму веб-сайті, ти можеш використати iframe, і відео з'явиться прямо там, і люди зможуть його дивитися, не виходячи з твого сайту.
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
              options: ["iframe", "cite", "closest", "link"],
            },
            {
              title: "За допомогою якого тега ми додаємо відео з YouTube?",
              options: ["iframe", "cite", "closest", "link"],
            },
            {
              title: "За допомогою якого тега ми додаємо Google карту?",
              options: ["iframe", "cite", "closest", "link"],
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
<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" width="560" height="315"></iframe>

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
              title:
                "Створити місце для вводу тексту можна за допомогою тега ...",
              options: ["input", "enter", "text", "textenter"],
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
              options: ["li", "ul", "ol", "dl"],
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
              options: ["link", "css", "script", "url"],
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
              title:
                "В який тег ми маємо покласти головну інформацію на сторінці?",
              options: ["main", "footer", "aside", "nav"],
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
              options: ["ol", "ul", "el", "il"],
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
Тег <b>p</b> - це HTML-тег, який використовується для створення абзаців тексту на веб-сторінці. HTML - це мова, за допомогою якої створюються веб-сторінки.

Якщо ти напишеш щось між відкриваючим (<p>) і закриваючим (</p>) тегами <p>, то цей текст з'явиться на твоєму веб-сайті як абзац.

Ось приклад:

<p>Це мій перший абзац тексту.</p>
<p>А це вже другий абзац!</p>

Коли ти переглянеш цю HTML-сторінку в браузері, ти побачиш два абзаці тексту, кожен з яких починається з нового рядка.

Це простий, але дуже важливий тег, який використовується для структурування тексту на веб-сайтах.
Браузери автоматично додають певний відступ до і після кожного <p>, що допомагає візуально відрізнити абзаци один від одного.

Інлайнові та блокові елементи: <p> є блоковим елементом. 
Це означає, що він автоматично займає всю доступну ширину на сторінці, 
і нові елементи будуть вставлені після нього, а не поряд. 
В той же час, він може містити в собі інлайнові елементи, такі як a, strong або em.

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
              options: ["p", "h1", "txt", "input"],
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
Тег <b>pre</b> в HTML використовується для відображення предварительно відформатованого тексту. "Pre" в <pre> - це скорочення від "preformatted", що означає "предварительно відформатований".

Коли ти використовуєш тег <pre>, браузер збереже всі пропуски і переноси рядків, які ти додав у цей блок. Зазвичай, HTML ігнорує більшість пробілів та переносів рядків, які ти додаєш до свого коду. Але всередині тега <pre>, вони всі будуть збережені та відображені.

Ось приклад використання тега <pre>:

<pre>
  Привіт!
      Я використовую тег pre.
</pre>

Коли ти відкриєш цей код в браузері, ти побачиш, що весь текст відображається з тими самими пропусками і переносами рядків, які були в коді.

Тег <pre> часто використовують для відображення коду або іншого тексту, в якому важливо зберегти оригінальне форматування.
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
              title:
                "Щоб html розумів декілька пробілів та ентери ми використовуємо тег",
              options: ["pre", "code", "clear", "entry"],
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
Тег <b>progress</b> в HTML використовується для відображення статусу завдання, яке триває певний час або вимагає декількох кроків для завершення, наприклад завантаження файлу, або статусу виконання завдання в іграх.
Ось як це може виглядати:
<progress value="70" max="100"></progress>

В цьому прикладі, value="70" означає, що завдання вже виконано на 70% від загального обсягу, а max="100" вказує, що 100 - це повний обсяг завдання. Таким чином, цей код створить індикатор прогресу, який показує, що завдання виконано на 70%.
Тег <progress> використовується для візуалізації прогресу операції, допомагаючи користувачеві розуміти, скільки вже зроблено, і скільки ще залишилося.
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
              options: ["q", "blockquote", "textarea", "abbr"],
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
Тег <s> в HTML використовується для відображення тексту, який більше не актуальний або вже не вірний. Коли ти обгортаєш текст тегом <s>, він буде перекреслений.

Ось як це виглядає:

<p>Регулярна ціна: <s>$20</s></p>
<p>Ціна зі знижкою: $10</p>

У цьому прикладі, ціна $20 більше не актуальна, тому ми обгортаємо її тегом <s>, щоб показати, що вона змінилася. Текст в тегу <s> буде відображений з горизонтальною лінією посередині.

Однак важливо зазначити, що для семантичних цілей рекомендується використовувати тег <del> для тексту, що був видалений, та <ins> для тексту, що був вставлений, у випадку редагування документів. Тег <s> слід використовувати тоді, коли текст втратив свою актуальність, але не був обов'язково видалений.
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
              options: ["s", "p", "b", "u"],
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
Тег <script> в HTML використовується для вбудовування або посилання на JavaScript код, який може змінювати HTML-документ, додавати інтерактивності або отримувати дані з сервера.
JavaScript - це мова програмування, яку браузери використовують для створення інтерактивних веб-сторінок. Це може бути щось просте, як вспливаюче вікно, або щось складніше, як обробка форм або створення динамічного контенту.
Ось приклад того, як використовується тег <script> для вбудовування JavaScript коду безпосередньо в HTML:

<script>
  alert('Привіт, світ!');
</script>

Коли браузер доходить до тега <script>, він виконує JavaScript код, який знаходиться всередині. В цьому випадку, він відображає вспливаюче вікно з повідомленням "Привіт, світ!".

Тег <script> може бути також використаний для посилання на зовнішній JavaScript файл за допомогою атрибута src:

<script src="script.js"></script>

В цьому прикладі, браузер завантажить та виконає JavaScript код, який знаходиться в файлі "script.js".
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
              options: ["script", "java", "js", "link"],
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
Тег <select> в HTML використовується для створення випадаючого списку. Він часто використовується в формах, де користувачу потрібно вибрати один варіант з кількох можливих.

Ось як виглядає приклад:

<select>
  <option value="1">Опція 1</option>
  <option value="2">Опція 2</option>
  <option value="3">Опція 3</option>
</select>

В цьому прикладі, використовуються теги <option> всередині тега <select> для створення кожного елементу випадаючого списку. Атрибут value в тегах <option> використовується для вказівки значення, яке буде відправлено на сервер, коли користувач вибере цю опцію.

Коли користувач відкриває випадаючий список, він побачить текст, що належить кожному <option>, та може вибрати один з них. Значення обраного варіанту потім можна використовувати у JavaScript або відправити на сервер через форму.
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
              options: ["select", "option", "link", "listener"],
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
Тег <source> в HTML, дуже схожий на помічника, який допомагає вам вибрати правильний медіа-файл для різних ситуацій.
Уявіть, що у вас є ящик з фруктами, в якому є яблука, груші та апельсини. Ви дуже любите яблука, тому спочатку шукаєте їх. Якщо в ящику немає яблук, ви вибираєте груші, а якщо немає груш, ви берете апельсин.

Тег <source> в HTML працює за подібним принципом, але замість фруктів він допомагає браузеру вибрати найкращий медіа-файл (відео, аудіо або зображення) для відтворення або відображення, в залежності від поточних умов, таких як розмір екрану або тип браузера.

<picture>
  <source media="(min-width: 650px)" srcset="big_image.jpg">
  <source media="(min-width: 465px)" srcset="medium_image.jpg">
  <img src="small_image.jpg" alt="Some image">
</picture>

У цьому прикладі, ми використовуємо тег <source> в середині тега <picture> для вибору одного з трьох зображень. Браузер вибере зображення "big_image.jpg", якщо ширина екрану є 650 пікселів або більше. Якщо ширина екрану від 465 до 649 пікселів, буде вибране зображення "medium_image.jpg". Якщо жодна з цих умов не виконується (наприклад, якщо ширина екрану менше 465 пікселів), браузер вибере "small_image.jpg". Таким чином, він завжди отримує зображення, що підходить для його поточних умов.
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
<b>span</b> - Маленький текст. Як правило в span ми кладемо 1-3 слова. Потрібен для декоративного виділення (або щоб користувач звернув увагу на такий текст)
Елемент є строковим.
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
              options: ["span", "pre", "small", "b"],
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
<h2> <span>ТОП 10</span> цікавих книг про життя </h2>

              `,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["i", "b", "u", "s", "mark"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/span",
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
Тег <strong> в HTML використовується для підкреслення важливості частини тексту.
Уяві, що ти читаєш книгу і бачиш, що деякі слова виділені жирним шрифтом. Це означає, що автор хоче, щоб ти звернув на ці слова особливу увагу, тому він зробив їх жирними.
Тег <strong> в HTML робить те саме для тексту на веб-сторінках. Він вказує браузерам (та іншим програмам, що читають веб-сторінки) відобразити текст всередині тега жирним шрифтом, щоб виділити його.
Ось як це виглядає:

<p>Це нормальний текст, а <strong>цей текст жирний</strong>.</p>

У цьому прикладі, слова "цей текст жирний" будуть відображені жирним шрифтом на веб-сторінці.
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
Тег <b>style</b> в HTML використовується для включення інформації про стилі CSS (Cascading Style Sheets) в документ HTML. Цей тег допомагає визначити, як будуть виглядати різні елементи на веб-сторінці, такі як заголовки, абзаци, посилання та інше.
Уявіть, що ваш документ HTML - це будинок, тоді CSS буде як інструкція, яка каже, який колір мають стіни, де має бути меблі і як вони мають виглядати.
Ось приклад використання тега <style>:

html
Copy code
<head>
  <style>
    body {
      background-color: lightblue;
    }

    h1 {
      color: white;
      text-align: center;
    }

    p {
      font-family: verdana;
      font-size: 20px;
    }
  </style>
</head>

У цьому прикладі, ми використовуємо тег <style> в середині тега <head> для встановлення стилів для різних елементів на сторінці. Ми задаємо колір фону для всього документа (body) як світло-синій (lightblue), колір тексту для заголовка першого рівня (h1) як білий і вирівнюємо його по центру, а також встановлюємо шрифт та розмір шрифту для абзаців (p).
Важливо пам'ятати, що тег <style> повинен бути розміщений або в head або в body документа. Проте, зазвичай його розміщують у head, щоб стилі були визначені до того, як браузер почне відображати сторінку.
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
              options: ["style", "link", "css", "stylesheet"],
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
              options: ["video", "youtube", "traffic", "img"],
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
<b>h6</b> - в HTML - це один із тегів заголовка. 
В HTML є шість рівнів заголовків, від "H1" до "H6". 
"H1" - це найбільший та найважливіший заголовок, а "H6" - це найменший і найменш важливий.

Подумай про них як про різні розміри чашок або ковбасок. "H1" - це найбільша чашка або найбільша ковбаска, і "H6" - це найменша чашка або найменша ковбаска.
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
              title: "Найменший розмір тексту це",
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
<b>::after</b>  в CSS це ніби магічний трюк, що дозволяє додати якусь річ після вмісту елемента на веб-сторінці, навіть якщо цієї речі там насправді немає.

Скажімо, ти маєш якийсь текст, і ти хочеш, щоб після кожного абзацу в твоєму тексті була зірочка. Замість того, щоб йти та додавати цю зірочку після кожного абзацу в HTML коді, ти можеш використати "::after" в CSS, щоб автоматично додати зірочку після кожного абзацу.

Ось приклад того, як це можна зробити:
p::after {
  content: "*";
}
В цьому прикладі, p - це селектор, що вказує на всі абзаци тексту на сторінці, а ::after каже, що ми хочемо додати щось після вмісту цих абзаців. 
content вказує на те, що саме ми хочемо додати - в цьому випадку, зірочку.

Пам'ятай, що ти маєш вказати щось в content, навіть якщо це пустий рядок (content: "";), бо інакше "::after" не працюватиме.
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
<b>::selection</b> - в CSS це спеціальна властивість, яка дозволяє змінити колір тексту та фон, коли ти виділяєш текст на веб-сторінці.

Ти знаєш, як коли ти натискаєш мишкою на текст і тягнеш, і весь текст стає виділеним, зазвичай синім кольором? "::selection" дозволяє змінити ці кольори.

Наприклад, можна зробити так, щоб виділений текст був зеленого кольору на рожевому фоні. Ось як це можна зробити:


::selection {
  background-color: pink;
  color: green;
}

У цьому прикладі, ::selection це спеціальний селектор, який вказує на весь виділений текст на сторінці. background-color: pink; змінює колір фону виділеного тексту на рожевий, а color: green; змінює колір виділеного тексту на зелений.

Таким чином, ти можеш зробити процес виділення тексту більш веселим та креативним!
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
<b>:focus</b> - в CSS - це так званий "псевдоклас", який дозволяє нам змінити стиль елемента, коли він "в фокусі". "В фокусі" означає, що елемент активний або вибраний, як-то при введенні тексту в текстове поле або при виборі кнопки клавіатурою.

Якщо ти коли-небудь бачив, як колір кнопки або рамки текстового поля змінюється, коли ти на нього натискаєш або вибираєш його з клавіатури, це відбувається через властивість :focus.

Ось приклад того, як використовувати :focus:


input:focus {
  border: 2px solid blue;
}

У цьому прикладі, input - це селектор, який вибирає всі елементи input на веб-сторінці. :focus вказує, що ми хочемо змінити стиль тільки тоді, коли input елемент "в фокусі". border: 2px solid blue; змінює рамку елемента на синій колір, коли він "в фокусі".

Ця властивість дуже корисна для покращення доступності сайту, оскільки допомагає людям з різними способами навігації (наприклад, використовуючи клавіатуру замість миші) зрозуміти, на якому елементі вони знаходяться.
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
<b>@keyframes</b> - в CSS це як-би скріпт для мультика. Ти кажеш, що ти хочеш, щоб твій малюнок рухався або змінювався поступово протягом певного часу, і це робить твою веб-сторінку більш живою та цікавою.

Наприклад, давай припустимо, що у тебе є кружечок на сторінці, і ти хочеш, щоб він змінював колір з червоного в блакитний, а потім знову в червоний. Ти можеш використати @keyframes для створення цього ефекту.

Ось приклад того, як можна це зробити:
@keyframes change-color {
  0% {
    background-color: red;
  }

  50% {
    background-color: blue;
  }

  100% {
    background-color: red;
  }
}

.circle {
  animation: change-color 2s infinite;
}
У цьому прикладі, @keyframes change-color створює нову анімацію з назвою "change-color". Проценти (0%, 50%, 100%) вказують, що відбувається в певний момент часу. Так, на початку анімації (0%) кружечок буде червоним, в середині анімації (50%) - блакитним, і на кінці анімації (100%) - знову червоним.

.circle - це селектор CSS, який вказує на елемент з класом "circle". animation: change-color 2s infinite; застосовує анімацію "change-color" до цього елемента. 2s означає, що анімація триває дві секунди, і infinite означає, що анімація повторюється нескінченно.

Таким чином, з допомогою @keyframes ти можеш зробити свої веб-сторінки більш динамічними та цікавими!
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
<b>@media</b> - в CSS використовується для створення так званих "медіа запитів", які дозволяють вам змінювати стиль веб-сторінки в залежності від характеристик пристрою, на якому вона відображається. Наприклад, ви можете використовувати медіа запити для зміни вигляду сторінки, коли вона переглядається на мобільному пристрої порівняно з десктопним комп'ютером.

Ось простий приклад медіа запиту:

@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
У цьому прикладі @media (max-width: 600px) це медіа запит, який перевіряє ширину екрану. Якщо ширина екрану не більше 600 пікселів (що зазвичай відповідає мобільним пристроям), то фоновий колір тіла веб-сторінки (body) змінюється на світло-синій.

Це може бути дуже корисно, якщо ви хочете, щоб ваш сайт виглядав добре на різних пристроях з різними розмірами екранів. Ти можеш змінювати розмір тексту, ширину колонок, розташування елементів, і багато інших властивостей, використовуючи медіа запити.
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
<b>border-radius</b> це властивість в CSS, яка використовується для закруглення кутів блоку. Це допомагає зробити краї об'єктів більш м'якими, ніж просто прямокутними.

Ця властивість може приймати від одного до чотирьох значень, які вказують радіус закруглення для кожного кута блоку. Значення можуть бути вказані в різних одиницях вимірювання, таких як пікселі (px), відсотки (%), em та ін.

Ось кілька прикладів:


/* Закруглення всіх кутів на 10px */
div {
  border-radius: 10px;
}

/* Закруглення верхніх кутів на 10px, а нижніх - на 20px */
div {
  border-radius: 10px 10px 20px 20px;
}

/* Закруглення верхнього лівого кута на 10px, верхнього правого - на 20px,
   нижнього правого - на 30px, і нижнього лівого - на 40px */
div {
  border-radius: 10px 20px 30px 40px;
}
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
Властивість <b>cursor</b> в CSS контролює те, як виглядає курсор миші, коли він наведений на певний елемент на веб-сторінці.

Наприклад, якщо ти бачив курсор у вигляді руки з вказівним пальцем, коли наводиш мишу на посилання, це тому, що використовується властивість cursor: pointer;.

Ось кілька інших значень, які може приймати cursor:

cursor: default; - використовує стандартний курсор.
cursor: text; - використовує курсор у вигляді тексту, який використовується при введенні тексту.
cursor: crosshair; - використовує курсор у вигляді перехрестя ліній.
cursor: wait; - використовує курсор у вигляді годинника або кола завантаження, що вказує на те, що щось завантажується.

Якщо дуже просто, властивість cursor в CSS - це ніби чарівна паличка, яка змінює вигляд курсора миші, коли ти наводиш його на різні частини веб-сторінки. Ти можеш зробити його схожим на руку, текст, перехрестя або годинник.
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
<b>font-family</b> - це властивість CSS, яка визначає шрифт, який буде використовуватися для відображення тексту в HTML-елементах.

Зазвичай, в значенні font-family вказується список назв шрифтів, розділених комами. Цей список перебирається зліва направо, поки браузер не знайде шрифт, який він може відобразити.


p {
  font-family: "Times New Roman", Times, serif;
}

У цьому прикладі, браузер спочатку спробує відобразити текст всередині <p> елементів за допомогою шрифту "Times New Roman". Якщо він не може знайти цей шрифт (наприклад, якщо шрифт не встановлено на комп'ютері користувача), він спробує використати шрифт "Times". Якщо він не може знайти ні "Times New Roman", ні "Times", він використає будь-який шрифт з групи "serif", який доступний на комп'ютері користувача.

Зауважте, що назви шрифтів, які складаються з більше ніж одного слова, повинні бути узяті в лапки. Крім того, рекомендується завжди включати хоча б одну загальну назву сімейства шрифтів (таких як "serif", "sans-serif", "monospace" тощо) в кінці списку для надійного відображення тексту.
Google Fonts - це бібліотека безкоштовних шрифтів, яку ви можете використовувати на своїх веб-сайтах. Ці шрифти ліцензовані так, що вони безпечні для використання на будь-якому веб-сайті, без обмежень.
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
              title: "Google Fonts - понад 1500 безкоштовних шрифтів",
              url: "https://fonts.google.com/",
              details: "",
            },
            {
              title: "Стаття про засічки, види шрифтів та інше",
              url: "https://www.canva.com/ru_ru/obuchenie/vidy-shriftov/",
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
<b>font-kerning</b> в CSS контролює використання кернінгу (регулювання відстані між певними парами символів) для тексту.

Кернінг - це процес регулювання відстані між символами в тексті, щоб досягти більш приємного візуального враження. Він часто використовується в типографії для "підгонки" певних пар символів, які зазвичай мають занадто великі прогалини або, навпаки, перекриваються.

font-kerning приймає три значення:

auto: Браузер визначає, коли використовувати кернінг.
normal: Браузер використовує кернінг, якщо він доступний в шрифті.
none: Кернінг вимкнено.
Ось приклад використання font-kerning в CSS:


p {
  font-kerning: normal;
}

У цьому прикладі всі абзаци (<p>) на веб-сторінці будуть використовувати кернінг, якщо він доступний в шрифті. Це може допомогти зробити текст більш приємним для читання.
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
<b>font-size</b> - це властивість CSS, яка визначає розмір шрифту тексту. Ця властивість приймає різні одиниці вимірювання, такі як пікселі (px), відсотки (%), em, rem, та інші.

Ось приклад використання font-size в CSS:


p {
  font-size: 16px;
}

У цьому прикладі, весь текст всередині тегів <p> (абзаців) буде відображатися з розміром шрифту 16 пікселів.
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
            ],
            code: [
              {
                body: `
button {
  font-size: 20px;
}
              `,
                title: "Зробить розмір тексту для кнопки 20 пікселів",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["font-size", "font-weight", "font-family"],

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
<b>gap</b> - це властивість CSS, яка дозволяє створити відстань між елементами сітки (тобто елементами, які використовують CSS Grid Layout) або між рядками в блоках, які використовують flexbox.

Давайте уявимо, що ти будуєш будинок з Lego. Ти маєш купу блоків Lego (які можна вважати елементами сітки або flexbox на твоєму веб-сайті), і ти хочеш розмістити їх на платформі Lego таким чином, щоб між ними було деяке відстань. "Gap" в CSS - це та відстань, яку ти залишаєш між блоками Lego.
Ти можеш використовувати "gap" для контролю того, наскільки великим має бути цей проміжок між елементами. Наприклад, можеш вказати "gap: 10px" щоб між кожним елементом була відстань в 10 пікселів. Це працює як для горизонтальних (між колонками), так і для вертикальних відстаней (між рядками).
⚠️ Працює тільки якщо є команда diplay: flex;
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
              title: "Як зробити відстань між flex або grid елементами?",
              options: ["gap", "rotate", "hide", "solid"],
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
                url: "https://codepen.io/DmytroKrasyliuk/pen/zYMezRG",
                title: "Приклад використання команди gap",
                description: "",
              },
            ],
            code: [
              {
                body: `
div {
  gap: 20px;
}
              `,
                title:
                  "Робить відстань між елементами які знаходяться всередині прямокутника 20 пікселів",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["margin", "padding", "top", "left", "right", "bottom"],

          links: [
            {
              title: "Гарна стаття на MDN",
              url: "https://developer.mozilla.org/ru/docs/Web/CSS/gap",
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
<b>grid</b> у CSS, або Сітка CSS, - це двовимірна система макету, яка дає можливість змінювати розташування елементів на веб-сторінці. Вона дозволяє створювати складні макети з використанням рядів і стовпців.

Тут основні концепції, які ти повинен знати про CSS Grid:
◾️ Container (контейнер): Щоб використовувати CSS Grid, потрібно спочатку визначити контейнер, встановивши його властивість display як grid або inline-grid. Усі дочірні елементи цього контейнера стають частиною сітки.
◾️ Items (елементи): Всі дочірні елементи контейнера Grid автоматично стають елементами Grid. Можна керувати розміром, положенням і вирівнюванням цих елементів за допомогою спеціальних властивостей Grid.
◾️ Columns and Rows (стовпці та рядки): Можна використовувати властивості grid-template-columns і grid-template-rows для визначення структури сітки.
◾️ Gaps (проміжки): Це відстані між рядками і стовпцями. Вони задаються за допомогою властивості gap або окремо column-gap та row-gap.

Приклад коду CSS, що створює сітку з трьох стовпців і двох рядків:

.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto auto;
  gap: 10px;
}

У цьому прикладі "1fr 2fr 1fr" задає розмір трьох стовпців: перший та третій стовпці займають 1 "вільну частину" простору, а другий стовпець - 2 "вільні частини". Ключове слово auto для рядків означає, що висота рядків автоматично встановлюється відповідно до вмісту. Gap: 10px; створює проміжки 10 пікселів між рядками та стовпцями.
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
<b>grid-area</b> - grid-area - це властивість CSS, яка дозволяє вам вказати, де конкретний елемент сітки має розташовуватися в сітці. Ви можете визначити це місце, вказавши одну з чотирьох значень: початок рядка, початок стовпця, кінець рядка і кінець стовпця.

Наприклад, якщо ви маєте наступний CSS код:

.item1 {
  grid-area: 1 / 2 / 3 / 4;
}
Це означає, що елемент .item1 розташований так, що починається з 1-го рядка, починається з 2-го стовпця, закінчується на 3-му рядку і закінчується на 4-му стовпці.

Ви також можете використовувати grid-area для задання імен зон сітки. Це може бути корисним, якщо у вас є декілька елементів, які ви хочете групувати разом у певному області сітки. Наприклад:

.container {
  display: grid;
  grid-template-areas: 
    "header header header"
    "sidebar content content"
    "footer footer footer";
}

.header {
  grid-area: header;
}

.sidebar {
  grid-area: sidebar;
}

.content {
  grid-area: content;
}

.footer {
  grid-area: footer;
}

У цьому прикладі, ми визначили сітку з областями, що називаються "header", "sidebar", "content" та "footer". Кожен з цих елементів потім вказує своє розташування, використовуючи ці назви зон.
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
<b>grid-auto-flow</b> в CSS визначає, як елементи сітки розташовуються в сітці, коли вони не розміщені явно. Вона є частиною CSS Grid Layout і допомагає управляти поведінкою автоматичного розміщення.

Властивість grid-auto-flow має три основні значення:
◾️ row: За замовчуванням, елементи сітки розміщуються по рядках. Це означає, що якщо у вас є більше елементів, ніж стовпців у вашій сітці, нові елементи будуть розміщені в новому рядку.
◾️ column: Це означає, що елементи сітки розміщуються в стовпцях. Тобто, якщо у вас більше елементів, ніж рядків, нові елементи будуть розміщені в новому стовпці.
◾️ dense: Це значення вказує браузеру заповнювати дірки в сітці, якщо елементи можуть бути розміщені в дірках, не зважаючи на порядок.

Використання grid-auto-flow може допомогти вам створити більш гнучкі та реагуючі макети, оскільки воно дозволяє сітці автоматично налаштовувати розміщення елементів відповідно до доступного простору.
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
<b>grid-column</b> - Властивість grid-column в CSS використовується для визначення положення елемента сітки по горизонталі, тобто, в яких стовпцях елемент повинен починатися та закінчуватися. Це є частиною CSS Grid Layout, і це дуже корисно для створення складних макетів сітки.

Синтаксис grid-column виглядає так: grid-column: <start-line> / <end-line>;

<start-line> це лінія, на якій елемент починається. Це може бути номер лінії або ім'я лінії, яке ви визначили.
<end-line> це лінія, на якій елемент закінчується. Це також може бути номер лінії або ім'я лінії.
Наприклад, grid-column: 2 / 4; означає, що елемент сітки починається від 2-го стовпця і закінчується перед 4-м стовпцем, тобто займає 2-й та 3-й стовпці.

Якщо ви хочете, щоб елемент сітки розтягувався до кінця сітки, ви можете використовувати значення -1 для <end-line>. Наприклад, grid-column: 1 / -1; означає, що елемент починається від першого стовпця і розтягується до кінця сітки.

Ця властивість є дуже потужною у комбінації з іншими властивостями CSS Grid, оскільки вона дозволяє вам легко маніпулювати положенням елементів сітки.
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
          title: "left",
          speedCode: "l",
          description: `
Властивість <b>left</b> у CSS це як коли ти рухаєш свою фігурку на грі вліво. Ти можеш вирішити, наскільки далеко ти хочеш її перемістити вліво, вказавши відстань у пікселях або відсотках. Але ця властивість працює лише тоді, коли ти вказав позицію елементу як absolute, relative, fixed або sticky.
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
Властивість <b>letter-spacing</b> в CSS використовується для зміни відстані між буквами у тексті.

Це може бути корисним, наприклад, коли ти хочеш зробити текст більш просторим або, навпаки, більш щільним. Ви можете встановити значення у пікселях (px), відсотках (%) або відносних одиницях (em, rem).

Ось приклад:


p {
  letter-spacing: 2px;
}

Це розтягне відстань між буквами у всіх параграфах на 2 пікселі.

Якщо дуже просто: властивість letter-spacing в CSS допомагає нам віддалити або наблизити букви в словах, щоб зробити текст більш читабельним або надати йому особливий стиль. Це як коли ти пишеш слово маркером і вирішуєш, наскільки широко розставити букви.
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
Властивість <b>line-break</b> в CSS використовується для вказівки того, як повинні обриватися рядки в тексті, особливо коли вони написані ізза-восточними мовами, такими як китайська, японська або корейська.

Ця властивість може приймати наступні значення:

◾️ auto: Це стандартне значення, яке дозволяє браузеру вирішувати, як обривати рядки.
◾️ loose: Це значення дозволяє переносити рядки більш вільно, щоб текст був більш читабельним.
◾️ strict: Це значення забороняє розривати слова і рядки там, де цього не передбачено мовою.
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
Властивість <b>line-height</b> в CSS використовується для контролю відстані між рядками тексту. Це визначає висоту рядка, яка часто використовується для забезпечення читабельності тексту.
Вона може приймати різні значення, такі як фіксоване значення (наприклад, 20px), відсоткове значення (наприклад, 150%), або відносне значення (наприклад, 1.5).

Наприклад:

p {
  line-height: 1.5;
}

У цьому випадку, висота рядка для всіх параграфів становить 1.5 рази від розміру шрифту. Тобто, якщо розмір шрифту - 16px, висота рядка буде 24px (16px * 1.5).
Якщо дуже просто: властивість line-height в CSS допомагає нам вирішити, наскільки широкими повинні бути рядки у тексті. Це як коли ти пишеш в зошиті з великими рядками або маленькими рядками. Ти можеш вибрати, наскільки широкими або вузькими хочеш зробити свої рядки.
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
<b>list-style</b> в CSS використовується для зміни вигляду маркерів списку в HTML. Ця властивість насправді є скороченням для трьох властивостей list-style-type, list-style-position та list-style-image.

▪️ list-style-type визначає вигляд маркера списку. Можливі значення включають none, circle, disc, square, decimal, lower-roman, upper-roman, lower-alpha, upper-alpha та інші.

▪️ list-style-position визначає, чи відображати маркери списку всередині або зовні відносно блоку тексту. Можливі значення - це inside (що робить текст обгорнутим навколо маркера) та outside (що відокремлює маркер від тексту).

▪️ list-style-image використовується для заміни стандартних маркерів списку на зображення. Ви вказуєте URL зображення, яке ви хочете використати.

Приклад використання list-style в коді:

ul {
  list-style: square inside none;
}

У цьому прикладі, ми встановлюємо list-style-type як square, тому маркери будуть квадратними. list-style-position встановлено як inside, тому маркери будуть всередині текстового блоку. list-style-image встановлено як none, тому зображення для маркерів не використовуватиметься.
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
<b>margin</b> використовується для створення простору навколо елементів. "Margin" - це простір або відстань між елементом та іншими елементами біля нього зовні від його меж.

Ви можете задати значення margin для одного боку (верхнього, правого, нижнього або лівого) або для всіх чотирьох боків одночасно.

Ось декілька прикладів того, як використовується margin:

▪️ margin: 10px; - це задасть поля в 10 пікселів для всіх чотирьох боків елемента.
▪️ margin: 5px 10px; - це задасть верхні та нижні поля в 5 пікселів, а праве та ліве - в 10 пікселів.
▪️ margin: 5px 10px 15px; - це задасть верхнє поле в 5 пікселів, праве та ліве - в 10 пікселів, а нижнє - в 15 пікселів.
▪️ margin: 5px 10px 15px 20px; - це задасть верхнє поле в 5 пікселів, праве - в 10 пікселів, нижнє - в 15 пікселів, а ліве - в 20 пікселів.

Також можна використовувати окремі властивості margin для кожного боку, наприклад: 
▪️ margin-top, 
▪️ margin-right, 
▪️ margin-bottom
▪️ margin-left.

Важливо зазначити, що margin може приймати не лише позитивні, але й негативні значення, що дозволяє "зсунути" елементи ближче один до одного, ніж це було б з можливими значеннями лише padding або border.
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
<b>margin-bottom</b>
Властивість margin-bottom в CSS використовується для створення простору під елементом, тобто, встановлює нижнє поле (маржин) елемента.

Ця властивість приймає різні типи значень:

Довільні від'ємні та позитивні значення, використовуючи одиниці вимірювання, такі як пікселі (px), проценти (%), em, rem, vh, vw тощо. Наприклад, margin-bottom: 20px; встановить нижнє поле в 20 пікселів.
Значення auto, яке використовується для центрування блокового елемента горизонтально, якщо йому також присвоєно значення margin-top: auto; та width.
Наприклад, такий CSS код:

css
Copy code
p {
  margin-bottom: 20px;
}
встановить нижнє поле для всіх абзаців (<p>) в 20 пікселів.
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
- Функція <b>max()</b> в CSS є математичною функцією, яка дозволяє встановити максимальне значення серед набору значень. Це може бути особливо корисним для адаптивного дизайну, коли вам потрібно, щоб значення властивості (наприклад, ширина, висота або відступ) було не менше певного значення.

Ось приклад використання функції max() в CSS:


.container {
  width: max(300px, 50%);
}

У цьому прикладі ширина елемента .container буде 50% ширини його батьківського блоку, але не менше 300 пікселів. Таким чином, навіть якщо 50% ширини батьківського блоку становить менше 300 пікселів, ширина .container все одно буде 300 пікселів.

Примітка: Функція max() підтримується не всіма браузерами, тому до її використання варто перевірити сумісність.
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
          description: `outline-style це властивість CSS, яка визначає стиль контуру елемента. Контур - це лінія, що навколо елемента і яка не впливає на розмір чи положення елемента, тому вона не змінює вигляд сторінки, а лише виділяє елемент.

outline-style приймає такі значення:

◾️ none: контура немає.
◾️ dotted: контур у вигляді крапок.
◾️ dashed: контур у вигляді пунктирної лінії.
◾️ solid: контур у вигляді неперервної лінії.
◾️ double: контур у вигляді подвійної лінії.
◾️ groove: контур у вигляді гравіювання.
◾️ ridge: контур у вигляді ребер.
◾️ inset: контур у вигляді вдавлення.
◾️ outset: контур у вигляді випуклості.

Отже, якщо ти хочеш створити контур для елемента, який виглядає як пунктир, ти можеш написати такий CSS код:

element {
  outline-style: dashed;
}
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

  {
    title: "other",
    data: [
      {
        details: {
          title: "Піксель",
          speedCode: "",
          description: `Піксель - це найменший елемент на екрані твого комп'ютера, смартфона або телевізора, який може відображати колір. Всі зображення та текст, які ти бачиш на екрані, складаються з великої кількості пікселів.
Подумай про піксель, як про маленький квадратик, що може змінювати свій колір. Коли ти дивишся на екран, ти бачиш тисячі або мільйони цих маленьких квадратиків, кожен з яких відображає свій власний колір. Разом вони формують зображення або текст, який ти бачиш.
На екрані твого смартфона або ноутбука пікселі важко побачити оком, тому що вони дуже маленькі. Але якщо ти дивишся на великий телевізор з близької відстані, ти можеш побачити окремі пікселі як маленькі квадратики.
У мові програмування CSS, яка використовується для стилізації веб-сайтів, піксель використовується як одиниця вимірювання. Наприклад, ти можеш встановити висоту або ширину елемента, або розмір шрифту у пікселях.
Також важливо пам'ятати, що "віртуальні" пікселі, які ти використовуєш у CSS, не завжди відповідають "реальним" пікселям на екрані. 
Це особливо стосується високоякісних екранів, таких як Retina-дисплеї на пристроях Apple, де один "віртуальний" піксель може складатися з декількох "реальних" пікселів, що дозволяє зображенням та тексту виглядати більш чіткими та деталізованими.`,
          tasks: {
            speed: [
              {
                url: "",
                title: "",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              photo: "",
              title: "Що таке піксель?",
              options: [
                "Мова програмування",
                "Одиниця ваги в CSS",
                "Найменший елемент на екрані, що може відображати колір",
                "Назва дизайнерського інструменту",
              ],
            },
            {
              photo: "",
              title: "Як позначається піксель в програмуванні?",
              options: ["px", "xp", "pix", "pl"],
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
button {
  font-size: 24px;
}
              `,
                title: "Зробить фон кнопки максимально яскраво-зеленим",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["hex", "rgba", "cmyk"],

          links: [
            {
              title: "Переглянути розміри пікселів",
              url: "https://codepen.io/DmytroKrasyliuk/full/RwqqvOZ",
              details: "",
            },
            {
              title: "Переглянути кількість пікселів екрану",
              url: "https://codepen.io/DmytroKrasyliuk/full/XWyyQyY",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "rgb",
          speedCode: "",
          description: `RGB відноситься до системи кольорів, яка використовується в комп'ютерах і телевізорах. Вона називається так, тому що вона використовує три основні кольори: 
▪️ червоний (Red)
▪️ зелений (Green) 
▪️ синій (Blue).

Уяви, що у тебе є три ліхтарики: один червоний, один зелений і один синій. Коли ти світиш всіма трьома ліхтариками в одне місце, ти отримуєш білий світло. Якщо ти використовуєш тільки червоний і зелений, ти отримуєш жовтий кольор. Це принцип, на якому базується RGB.
Коли ти використовуєш RGB на комп'ютері, кожен з трьох кольорів може мати значення від 0 до 255. 0 означає, що колір вимкнено, а 255 означає, що колір світиться максимально яскраво. Так, RGB(0, 0, 0) буде чорним (всі кольори вимкнено), а RGB(255, 255, 255) буде білим (всі кольори включено).
Отже, використовуючи RGB, ти можеш створити мільйони різних відтінків, комбінуючи різні значення червоного, зеленого та синього.
        `,
          tasks: {
            speed: [
              {
                url: "",
                title: "",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              photo: "",
              title: "З яких кольорів складається RGB?",
              options: [
                "червоний, зелений, синій",
                "жовтий, синій, зелений",
                "чорний, білий, сірий",
                "жовтий, оранжевий, червоний",
              ],
            },
            {
              photo: "",
              title: "Якого кольору найбільше в: rgb(120, 200, 170)?",
              options: ["зеленого", "синього", "червоного", "фіолетового"],
            },
            {
              photo: "",
              title: "Якого кольору найменше в: rgb(80, 175, 10)?",
              options: ["синього", "червоного", "зеленого", "жовтого"],
            },
            {
              photo: "",
              title:
                "Червоного кольору в системі RGB ми можемо дати максимально...",
              options: ["255", "125", "300", "365"],
            },
            {
              photo: "",
              title: "Скільки відтінків дає система RGB?",
              options: [
                "декілька мільйонів",
                "декілька сотень",
                "декілька тисяч",
              ],
            },
            {
              photo: "",
              title:
                "Зелений колір зараз є світлим чи темним? rgb(50, 210, 10)?",
              options: ["світлим", "темним"],
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
button {
  background: rgb(0, 255, 0); 
}
              `,
                title: "Зробить фон кнопки максимально яскраво-зеленим",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["hex", "rgba", "cmyk"],

          links: [
            {
              title: "Презентація по кольорам",
              url: "https://www.figma.com/file/Fzv3AtlPaMs5NnXLdzckm3/IT-presentations?type=design&mode=design&t=OLppLPv85mhAAXO0-0",
              details: "",
            },
          ],
        },

        childrens: [],
      },

      {
        details: {
          title: "html, css, javascript",
          speedCode: "",
          description: `Веб-сторінки, які ми бачимо в інтернеті, створюються за допомогою трьох основних мов: HTML, CSS та JavaScript. Кожна з цих мов відповідає за різні частини веб-сайту. Щоб зрозуміти, як вони працюють разом, можна уявити веб-сторінку як будинок.
▪️ HTML (HyperText Markup Language) - це мова, яка використовується для створення структури веб-сторінки. Ви можете вважати HTML за "каркас" будинку. Він вказує, де будуть двері, вікна, стіни тощо. У веб-сторінці HTML визначає, де будуть розташовані заголовки, абзаци тексту, зображення, посилання тощо.
▪️ CSS (Cascading Style Sheets) - це мова, яка використовується для опису вигляду веб-сторінки. Це можна уявити як "інтер'єр" та "екстер'єр" будинку: колір стін, тип штор, стиль меблів тощо. У веб-сторінці CSS вказує, яким кольором буде текст, якого розміру будуть зображення, де вони будуть розташовані, і так далі.
▪️ JavaScript - це мова, яка додає інтерактивність до веб-сторінки. Це можна уявити як "електрику" будинку: включення і виключення світла, регулювання температури, відкривання і закривання дверей тощо. У веб-сторінці JavaScript може змінювати елементи HTML та CSS в залежності від дій користувача, таких як натискання кнопки, заповнення форми, наведення миші на елемент тощо.
Таким чином, HTML, CSS та JavaScript разом створюють повноцінну веб-сторінку, яку ми бачимо і з якою можемо взаємодіяти. `,
          tasks: {
            speed: [
              {
                url: "",
                title: "",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              photo: "",
              title: "Що таке HTML?",
              options: [
                "Мова структури веб-сторінки",
                "Мова стилю веб-сторінки",
                "Мова інтерактивності вебу",
                "Мова програмування",
              ],
            },
            {
              photo: "",
              title: "Що таке CSS?",
              options: [
                "Мова інтерактивності вебу",
                "Мова стилю веб-сторінки",
                "Мова структури веб-сторінки",
                "Мова програмування",
              ],
            },
            {
              photo: "",
              title: "Що таке JavaScript?",
              options: [
                "Мова інтерактивності вебу",
                "Мова структури веб-сторінки",
                "Мова стилю веб-сторінки",
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
button {
  background: rgb(0, 255, 0); 
}
              `,
                title: "Зробить фон кнопки максимально яскраво-зеленим",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["hex", "rgba", "cmyk"],

          links: [
            {
              title: "Презентація по кольорам",
              url: "https://www.figma.com/file/Fzv3AtlPaMs5NnXLdzckm3/IT-presentations?type=design&mode=design&t=OLppLPv85mhAAXO0-0",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "теги",
          speedCode: "",
          description: `
Теги в HTML - це основний елемент мови розмітки, який використовується для створення веб-сторінок. Вони вказують браузеру, як відображати вміст веб-сторінки, та визначають структуру та семантику вмісту.
Уяві, що HTML-документ - це коробка з іграшками, а теги - це різні види іграшок, які ви може складати разом, щоб створити різноманітні ігри. Так само як різні іграшки мають різні форми та функції, так і HTML-теги мають різні "форми" та "функції" для створення веб-сторінок.
Ось приклад того, як використовуються теги в HTML:

<p>Це мій перший абзац тексту.</p>

У цьому прикладі ми бачимо тег p:
цей тег використовується для абзаців тексту.
Кожен тег HTML починається з < і закінчується на >. Більшість тегів мають відкриваючий тег, наприклад <p>, і закриваючий тег, наприклад </p>, що охоплює вміст.
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
            {
              title: "Тег a створює на сайті",
              options: [
                "посилання",
                "жирний текст",
                "нахилений текст",
                "цитату",
              ],
            },
            {
              title:
                "Щоб посилання відкрилось у новій вкладці необхідно написати ",
              options: [
                'target="_blank"',
                'target="_new"',
                'target="_end"',
                'target="_tab"',
              ],
            },
            {
              title: "Що означає атрибут href у тега a?",
              options: [
                "Адреса посилання",
                "Текст посилання",
                "Формат посилання",
                "Стиль посилання",
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
          title: "html, css, javascript",
          speedCode: "",
          description: `Веб-сторінки, які ми бачимо в інтернеті, створюються за допомогою трьох основних мов: HTML, CSS та JavaScript. Кожна з цих мов відповідає за різні частини веб-сайту. Щоб зрозуміти, як вони працюють разом, можна уявити веб-сторінку як будинок.
▪️ HTML (HyperText Markup Language) - це мова, яка використовується для створення структури веб-сторінки. Ви можете вважати HTML за "каркас" будинку. Він вказує, де будуть двері, вікна, стіни тощо. У веб-сторінці HTML визначає, де будуть розташовані заголовки, абзаци тексту, зображення, посилання тощо.
▪️ CSS (Cascading Style Sheets) - це мова, яка використовується для опису вигляду веб-сторінки. Це можна уявити як "інтер'єр" та "екстер'єр" будинку: колір стін, тип штор, стиль меблів тощо. У веб-сторінці CSS вказує, яким кольором буде текст, якого розміру будуть зображення, де вони будуть розташовані, і так далі.
▪️ JavaScript - це мова, яка додає інтерактивність до веб-сторінки. Це можна уявити як "електрику" будинку: включення і виключення світла, регулювання температури, відкривання і закривання дверей тощо. У веб-сторінці JavaScript може змінювати елементи HTML та CSS в залежності від дій користувача, таких як натискання кнопки, заповнення форми, наведення миші на елемент тощо.
Таким чином, HTML, CSS та JavaScript разом створюють повноцінну веб-сторінку, яку ми бачимо і з якою можемо взаємодіяти. `,
          tasks: {
            speed: [
              {
                url: "",
                title: "",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              photo: "",
              title: "Що таке HTML?",
              options: [
                "Мова структури веб-сторінки",
                "Мова стилю веб-сторінки",
                "Мова інтерактивності вебу",
                "Мова програмування",
              ],
            },
            {
              photo: "",
              title: "Що таке CSS?",
              options: [
                "Мова інтерактивності вебу",
                "Мова стилю веб-сторінки",
                "Мова структури веб-сторінки",
                "Мова програмування",
              ],
            },
            {
              photo: "",
              title: "Що таке JavaScript?",
              options: [
                "Мова інтерактивності вебу",
                "Мова структури веб-сторінки",
                "Мова стилю веб-сторінки",
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
button {
  background: rgb(0, 255, 0); 
}
              `,
                title: "Зробить фон кнопки максимально яскраво-зеленим",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["hex", "rgba", "cmyk"],

          links: [
            {
              title: "Презентація по кольорам",
              url: "https://www.figma.com/file/Fzv3AtlPaMs5NnXLdzckm3/IT-presentations?type=design&mode=design&t=OLppLPv85mhAAXO0-0",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "Панель розробника",
          speedCode: "",
          description: `Веб-сторінки, які ми бачимо в інтернеті, створюються за допомогою трьох основних мов: HTML, CSS та JavaScript. Кожна з цих мов відповідає за різні частини веб-сайту. Щоб зрозуміти, як вони працюють разом, можна уявити веб-сторінку як будинок.
▪️ HTML (HyperText Markup Language) - це мова, яка використовується для створення структури веб-сторінки. Ви можете вважати HTML за "каркас" будинку. Він вказує, де будуть двері, вікна, стіни тощо. У веб-сторінці HTML визначає, де будуть розташовані заголовки, абзаци тексту, зображення, посилання тощо.
▪️ CSS (Cascading Style Sheets) - це мова, яка використовується для опису вигляду веб-сторінки. Це можна уявити як "інтер'єр" та "екстер'єр" будинку: колір стін, тип штор, стиль меблів тощо. У веб-сторінці CSS вказує, яким кольором буде текст, якого розміру будуть зображення, де вони будуть розташовані, і так далі.
▪️ JavaScript - це мова, яка додає інтерактивність до веб-сторінки. Це можна уявити як "електрику" будинку: включення і виключення світла, регулювання температури, відкривання і закривання дверей тощо. У веб-сторінці JavaScript може змінювати елементи HTML та CSS в залежності від дій користувача, таких як натискання кнопки, заповнення форми, наведення миші на елемент тощо.
Таким чином, HTML, CSS та JavaScript разом створюють повноцінну веб-сторінку, яку ми бачимо і з якою можемо взаємодіяти. `,
          tasks: {
            speed: [
              {
                url: "",
                title: "",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              photo: "img/themes/other/panel/panel1.png",
              title: "Як це називається?",
              options: [
                "Панель розробника",
                "Макет сайту",
                "Pixel Perfect",
                "Бутстрап",
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
                body: ``,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["hex", "rgba", "cmyk"],

          links: [
            {
              title: "Презентація по кольорам",
              url: "https://www.figma.com/file/Fzv3AtlPaMs5NnXLdzckm3/IT-presentations?type=design&mode=design&t=OLppLPv85mhAAXO0-0",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "Селектор в CSS",
          speedCode: "",
          description: `
якщо у тебе в HTML є елементи <p> (абзаци тексту), ти можеш використати селектор p в CSS, щоб вказати на усі ці елементи і задати їм певний стиль.

Отже, якщо ти напишеш у своєму CSS файлі:

p {
    color: red;
}

То всі абзаци на твоїй веб-сторінці стануть червоними. Тут p - це селектор, який вказує на усі елементи <p>, а color: red; - це декларація, яка вказує, що колір тексту цих елементів має бути червоним.

Але селектори можуть бути і більш складними. Вони можуть вказувати на елементи за їх класами, ідентифікаторами, атрибутами, ієрархією на сторінці та іншими особливостями.

`,
          tasks: {
            speed: [
              {
                url: "",
                title: "",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              photo: "img/themes/other/panel/panel1.png",
              title: "Як це називається?",
              options: [
                "Панель розробника",
                "Макет сайту",
                "Pixel Perfect",
                "Бутстрап",
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
                body: ``,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["hex", "rgba", "cmyk"],

          links: [
            {
              title: "Презентація по кольорам",
              url: "https://www.figma.com/file/Fzv3AtlPaMs5NnXLdzckm3/IT-presentations?type=design&mode=design&t=OLppLPv85mhAAXO0-0",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "Pixel Perfect",
          speedCode: "",
          description: `"Pixel Perfect" - це термін, який пов'язаний з комп'ютерною графікою і веб-дизайном. Давай розберемося, що він означає.
Пікселі (Pixels): Пікселі - це маленькі квадратні точки, які утворюють зображення на екрані. Кожен піксель має свій власний колір, і коли вони збираються разом, вони утворюють зображення.
Pixel Perfect (Точність пікселів): Кажуть, що щось є "Pixel Perfect", коли його розмір, положення та деталі на екрані виконані настільки точно, що не можна бачити жодних розмиттів, або зміщень пікселів. Це означає, що зображення чи дизайн виглядають чіткими і якісними.
Застосування: Pixel Perfect є особливо важливим, коли ми створюємо веб-сайти, мобільні додатки або графічні зображення, оскільки хочемо, щоб вони виглядали добре на різних пристроях і роздільних здатностях екранів. Це допомагає забезпечити зручне користування і приємний вигляд контенту для користувачів.
Отже, "Pixel Perfect" - це мета, яка означає добитися високої якості та точності зображень чи дизайнів, щоб вони виглядали гарно та професійно на різних екранах та пристроях.`,
          tasks: {
            speed: [
              {
                url: "",
                title: "",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              photo: "img/themes/other/panel/panel1.png",
              title: "Як це називається?",
              options: [
                "Панель розробника",
                "Макет сайту",
                "Pixel Perfect",
                "Бутстрап",
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
                body: ``,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["hex", "rgba", "cmyk"],

          links: [
            {
              title: "Презентація по кольорам",
              url: "https://www.figma.com/file/Fzv3AtlPaMs5NnXLdzckm3/IT-presentations?type=design&mode=design&t=OLppLPv85mhAAXO0-0",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "Markdown",
          speedCode: "",
          description: `"Звичайний текст може виглядати нудно, але з допомогою Markdown його можна зробити красивішим. Ось кілька простих прикладів, як застосовувати Markdown:
Заголовки: Використовуйте # перед текстом, щоб зробити заголовок рівня 1, ## - рівня 2, і так далі:

# Заголовок 1
## Заголовок 2
### Заголовок 3

Жирний та курсив: Використовуйте * або _ перед і після тексту для жирного та курсивного форматування:

*Жирний* текст
_Курсивний_ текст
**Жирний** _курсивний_ текст
Посилання: Використовуйте текст, щоб створити посилання:

[Натисніть сюди](https://www.example.com)
Списки: Використовуйте - для невпорядкованого списку або цифру з крапкою для впорядкованого списку:

Невпорядкований список:
- Пункт 1
- Пункт 2
- Пункт 3

Впорядкований список:
1. Пункт 1
2. Пункт 2
3. Пункт 3
`,
          tasks: {
            speed: [
              {
                url: "",
                title: "",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              photo: "img/themes/other/panel/panel1.png",
              title: "Як це називається?",
              options: [
                "Панель розробника",
                "Макет сайту",
                "Pixel Perfect",
                "Бутстрап",
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
                body: ``,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["hex", "rgba", "cmyk"],

          links: [
            {
              title: "Презентація по кольорам",
              url: "https://www.figma.com/file/Fzv3AtlPaMs5NnXLdzckm3/IT-presentations?type=design&mode=design&t=OLppLPv85mhAAXO0-0",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "Алгоритм",
          speedCode: "",
          description: `Алгоритм - це набір інструкцій або кроків, які допомагають вирішити певну задачу або проблему.
Можна порівняти алгоритм з рецептом приготування страви. Коли ви готуєте страву за рецептом, ви слідуєте певному набору кроків: спочатку ви збираєте всі інгредієнти, потім розігріваєте плиту, потім готуєте їжу, використовуючи вказівки в рецепті. Все це разом - це ваш алгоритм приготування страви.
У світі програмування алгоритми - це такі ж інструкції для комп'ютера, які вказують йому, що робити. Наприклад, алгоритм може вказувати комп'ютеру, як сортувати числа в порядку зростання або як знайти найкоротший шлях від однієї точки до іншої на мапі.
Таким чином, коли ми говоримо про алгоритми в програмуванні, ми маємо на увазі встановлений порядок дій, який допомагає комп'ютеру вирішити певну задачу.
`,
          tasks: {
            speed: [
              {
                url: "",
                title: "",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              photo: "img/themes/other/panel/panel1.png",
              title:
                "Набір інструкцій або кроків, які допомагають вирішити певну задачу?",
              options: ["Алгоритм", "Макет", "Піксель", "Бутстрап"],
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
                body: ``,
                title: "",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["hex", "rgba", "cmyk"],

          links: [
            {
              title: "Презентація по кольорам",
              url: "https://www.figma.com/file/Fzv3AtlPaMs5NnXLdzckm3/IT-presentations?type=design&mode=design&t=OLppLPv85mhAAXO0-0",
              details: "",
            },
          ],
        },

        childrens: [],
      },
    ],
  },
  {
    title: "js",
    data: [
      {
        details: {
          title: "змінна",
          speedCode: "",
          description: `Змінна в JavaScript - це так сказати, "коробочка" для зберігання інформації. Наприклад, ти можеш зберегти число, текстове повідомлення, список чисел, або навіть цілу програму в змінній. Згодом ти можеш використати цю змінну в коді, щоб взяти збережену там інформацію або змінити її.
Наприклад, уявимо, що ти маєш коробочку, на яку ти наклеїв етикетку з іменем "вік". Ти можеш вкласти в цю коробочку число "12", що представляє твій вік. В JavaScript це виглядало б так:

let вік = 12;

Тут "вік" - це назва змінної, а "12" - це значення, яке ми в неї записали. Ми використовуємо слово "let" для створення нової змінної.

Потім, якщо ти хочеш використати це значення в іншому місці своєї програми, ти можеш просто написати ім'я цієї змінної:

console.log(вік);
це виведе "12" в консоль

Або ти можеш змінити значення цієї змінної:


вік = 13;
тепер "вік" дорівнює 13


let, const і var - це три способи оголошення змінних в JavaScript. Вони трохи відрізняються за своїми властивостями.
▪️ var: Це старий спосіб оголошення змінних в JavaScript. Змінні, оголошені за допомогою var, мають функціональну область видимості. Це означає, що якщо змінна оголошена всередині функції, то вона доступна тільки всередині цієї функції. Змінна var може бути оновлена і переоголошена.
▪️ let: Це більш сучасний спосіб оголошення змінних. Змінні, оголошені за допомогою let, мають блочну область видимості. Це означає, що змінна доступна тільки всередині блоку коду, в якому вона була оголошена. Змінна let може бути оновлена, але не може бути переоголошена в тому ж області видимості.
▪️ const: Це також сучасний спосіб оголошення змінних, але він використовується для оголошення констант, тобто значень, які не мають змінюватися після того, як вони були присвоєні. Змінні, оголошені за допомогою const, також мають блочну область видимості, як і let. Змінна const не може бути оновлена або переоголошена.
Тому коли ти оголошуєш змінну, важливо розуміти, який спосіб оголошення використовувати, в залежності від того, як ти плануєш використовувати цю змінну.


Ще декілька додаткових важливих моментів про змінні в JavaScript:
▪️ Типи даних: В JavaScript змінні можуть зберігати різні типи даних. Наприклад, вони можуть зберігати числа, рядки (текст), об'єкти (які можуть включати в себе інші змінні), масиви (списки даних), булеві значення (правда або неправда) та інші типи даних.
▪️ Скоуп (область видимості): Область видимості змінної визначає, де в коді ця змінна доступна для використання. Змінні, оголошені за допомогою var, мають функціональну область видимості, тоді як змінні, оголошені за допомогою let і const, мають блочну область видимості.
▪️ Ініціалізація змінних: Коли ти оголошуєш змінну, ти також можеш відразу присвоїти їй значення. Це називається ініціалізацією змінної. Наприклад: let number = 10;.
▪️ Неймінг (іменування) змінних: В JavaScript існують певні правила для іменування змінних. Ім'я змінної повинне починатися з літери, символа долара ($) або нижнього підкреслення (_). Після цього можуть йти будь-які літери, цифри або символи долара. Крім того, існують "зарезервовані" слова, які не можна використовувати як імена змінних, такі як let, const, var, function тощо.
▪️ Hoisting (підняття): В JavaScript змінні "піднімаються" на верх своєї області видимості. Це означає, що ти можеш використовувати змінну перед тим, як вона була оголошена. Однак, це може призвести до неочікуваного поведінки, тому використання змінних до їх оголошення часто вважається поганою практикою.
▪️ null і undefined: В JavaScript є два особливі значення, null і undefined, які можна присвоїти змінним. undefined означає, що змінна була оголошена, але їй не було присвоєно значення. null означає, що значення змінної відсутнє або воно "порожнє".
▪️ Незмінність примітивних типів: Примітивні типи (числа, рядки, булеві значення, null, undefined, символи) в JavaScript є незмінними. Це означає, що коли ти присвоюєш нове значення змінній, яка вже має значення, JavaScript фактично створює нову змінну з новим значенням.
`,
          tasks: {
            speed: [
              {
                url: "",
                title: "",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              photo: "",
              title: 'Як називається "коробочка" для збергінання інформації?',
              options: ["Змінна", "Функція", "Умова", "Цикл"],
            },
            {
              photo: "",
              title: "Якого кольору найбільше в: rgb(120, 200, 170)?",
              options: ["зеленого", "синього", "червоного", "фіолетового"],
            },
            {
              photo: "",
              title: "Якого кольору найменше в: rgb(80, 175, 10)?",
              options: ["синього", "червоного", "зеленого", "жовтого"],
            },
            {
              photo: "",
              title:
                "Червоного кольору в системі RGB ми можемо дати максимально...",
              options: ["255", "125", "300", "365"],
            },
            {
              photo: "",
              title: "Скільки відтінків дає система RGB?",
              options: [
                "декілька мільйонів",
                "декілька сотень",
                "декілька тисяч",
              ],
            },
            {
              photo: "",
              title:
                "Зелений колір зараз є світлим чи темним? rgb(50, 210, 10)?",
              options: ["світлим", "темним"],
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
button {
  background: rgb(0, 255, 0); 
}
              `,
                title: "Зробить фон кнопки максимально яскраво-зеленим",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["hex", "rgba", "cmyk"],

          links: [
            {
              title: "Презентація по кольорам",
              url: "https://www.figma.com/file/Fzv3AtlPaMs5NnXLdzckm3/IT-presentations?type=design&mode=design&t=OLppLPv85mhAAXO0-0",
              details: "",
            },
          ],
        },

        childrens: [],
      },
      {
        details: {
          title: "Типи данних",
          speedCode: "",
          description: `В JavaScript, як і в багатьох інших мовах програмування, є різні "типи даних". Можна уявити, що типи даних - це різні "категорії" або "ящики", в які ми можемо помістити нашу інформацію, і кожен ящик має свої особливості. Ось основні типи даних в JavaScript:

<b>Числа (Number):</b> 
Це використовується для представлення чисел. Наприклад, ви можете використовувати цей тип даних, коли хочете зберігати скільки сторінок у вашій улюбленій книзі, або скільки цукерок у вашому мішечку.
<b>Рядки (String): </b> 
Рядки використовуються для зберігання тексту. Це може бути будь-який текст, наприклад, ваше ім'я, адреса або улюблений цитат.
Булеві значення (Boolean): 
Булеві значення можуть бути тільки одним з двох значень: "правда" (true) або "неправда" (false). Цей тип даних часто використовується, коли вам потрібно відповісти на питання "так" або "ні". Наприклад, ви можете мати змінну, яка показує, чи дзвонить будильник (true - дзвонить, false - не дзвонить).
<b>Масиви (Array): </b> 
Масив - це спеціальний тип даних, який використовується для зберігання списку елементів. Це може бути список ваших улюблених ігор, список оцінок або будь-який інший список.
<b>Об'єкти (Object): </b> 
Об'єкти в JavaScript - це колекції пар "ключ-значення". Це як би книга рецептів, де кожен рецепт має назву (ключ) та список інгредієнтів та інструкцій (значення).
<b>Null та Undefined: </b> 
Ці два типи даних використовуються для представлення "відсутності значення". Якщо ви ще не визначили, що зберігати в певній змінній, вона може мати значення "undefined". Якщо ви хочете явно вказати, що змінна не має значення, ви можете встановити її значення як "null".

Кожен тип даних використовується для різних цілей, і в залежності від того, що вам потрібно зробити в вашій програмі, ви вибираєте відповідний тип даних.`,
          tasks: {
            speed: [
              {
                url: "",
                title: "",
                hardLevel: 4,
              },
            ],
          },
          tests: [
            {
              photo: "",
              title: 'Як називається "коробочка" для збергінання інформації?',
              options: ["Змінна", "Функція", "Умова", "Цикл"],
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
button {
  background: rgb(0, 255, 0); 
}
              `,
                title: "Зробить фон кнопки максимально яскраво-зеленим",
                description: "",
              },
            ],
          },
          amount: 0,
          similarTags: ["hex", "rgba", "cmyk"],

          links: [
            {
              title: "Презентація по кольорам",
              url: "https://www.figma.com/file/Fzv3AtlPaMs5NnXLdzckm3/IT-presentations?type=design&mode=design&t=OLppLPv85mhAAXO0-0",
              details: "",
            },
          ],
        },

        childrens: [],
      },
    ],
  },
];

export { themes, students, templates, technologiesStack, adminId };
