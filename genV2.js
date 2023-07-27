import { LogarithmicScale } from "chart.js";
import { JSDOM } from "jsdom";
const translations = {
  width: "ширину",
  height: "висоту",
  background: "фон",
  color: "колір",
  margin: "відступ",
  padding: "внутрішні відступи",
  h1: "заголовок першого рівня",
  h2: "заголовок другого рівня",
  h3: "заголовок третього рівня",
  h4: "заголовок четвертого рівня",
  h5: "заголовок пятого рівня",
  h6: "заголовок шостого рівня",
  "padding-left": "внутрішній відступ зліва",
  "padding-right": "внутрішній відступ справа",
  "padding-top": "внутрішню відступ зверху",
  "padding-bottom": "внутрішню відступ знизу",
  "margin-left": "зовнішній відступ зліва",
  "margin-right": "зовнішній відступ справа",
  "margin-top": "зовнішню відступ зверху",
  "margin-bottom": "зовнішню відступ знизу",
  "border-radius": "закруглення рамки",
  display: "відображення",
  font: "шрифт",
  "font-weight": "жирність шрифта",
  "font-style": "стиль шрифта",
  "text-decoration": "оформлення тексту",
  "text-align": "вирівнювання тексту",
  float: "обтікання",
  clear: "очищення",
  position: "позиціонування",
  top: "верх",
  right: "право",
  bottom: "низ",
  left: "ліво",
  "z-index": "індекс шару",
  div: "прямокутник",
  img: "зображення",
  b: "жирний текст",
};
function generatePracticeTask(task) {
    
  return {
    id: task.id,
    name: task.name,
    description: task.description,
    type: task.type,
    level: task.level,
    themes: ["html"],
    codeResult: {
      html: task.codeResult.html,
      css: task.codeResult.css,
      js: task.codeResult.js,
    },
    tasks: [
      ...convertArray(parseHTML(task.codeResult.html)),
      ...generateTasks(task.codeResult.css, task.codeResult.html),
    ],
    data: task.data,
  };
}

let r = generatePracticeTask({
  id: 26,
  name: "Текст по центру та з наведенням миші",
  description: "Текст по центру та з наведенням миші",
  type: "",
  level: 1,
  codeResult: {
    html: `
<div class="block">
  <img src="https://upload.wikimedia.org/wikipedia/commons/8/80/140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg" alt="">
  <h2 class="title">Природа</h2>
  <h3 class="title2">Природа 2</h3>
  <h3 class="title">Природа 2</h3>
  <b>my text 2</b>
</div>
    
    `,
    css: `
.block {
  width: 300px;
}
img {
  width: 200px;
  border-radius: 20px;
}
.title {
  color: blue;
  margin-left: 20px;
}
.title:hover {
  color: green;
}

    
    `,
    js: `
    
let a = 0;
    
    `,
  },
});

logObject(r);

function parseHTML(html) {
  const dom = new JSDOM(html);
  const { document } = dom.window;
  const { Node } = dom.window;

  function parseNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const textContent = node.textContent.trim();
      if (textContent === "") {
        return null;
      }
      return {
        type: "text",
        text: textContent,
      };
    }

    return {
      tagName: node.tagName.toLowerCase(),
      attributes: Array.from(node.attributes).map((attr) => ({
        attribute: attr.name,
        value: attr.value,
      })),
      children: Array.from(node.childNodes)
        .map(parseNode)
        .filter((child) => child !== null),
    };
  }

  return [parseNode(document.body.firstChild)];
}

function convertArray(inputArray, parentSelector = "") {
  const resultArray = [];
  let selectorCounter = 0;

  function processElement(element, parentSelector = "") {
    if (element.tagName) {
      const translatedTag = translations[element.tagName] || element.tagName;
      const selector = parentSelector
        ? `${parentSelector}>${element.tagName}`
        : element.tagName;
      const check = [
        {
          type: "htmlElement",
          selector,
          selectorNumber: selectorCounter,
          amount: 1,
        },
      ];

      const parentElement = resultArray.find(
        (item) => item.check[0].selector === parentSelector
      );
      const parentLabel = parentElement ? ` в ${parentElement.title}` : "";

      resultArray.push({
        title: `Створи ${translatedTag}${parentLabel}`,
        label: "",
        description: "",
        check,
      });

      if (
        element.tagName === "div" &&
        element.attributes &&
        element.attributes.length > 0 &&
        element.attributes[0].attribute === "class"
      ) {
        const classNames = element.attributes[0].value.split(" ");
        classNames.forEach((className) => {
          const classSelector = parentSelector
            ? `${parentSelector}>div.${className}`
            : `div.${className}`;
          const classCheck = [
            {
              type: "classElement",
              selector: classSelector,
              selectorNumber: selectorCounter,
              className,
            },
          ];
          resultArray.push({
            title: `Додай клас для ${translatedTag}${parentLabel}`,
            label: "",
            description: "",
            check: classCheck,
          });
        });
      }

      if (element.attributes && element.attributes.length > 0) {
        element.attributes.forEach((attribute) => {
          if (attribute.attribute !== "class") {
            const attrCheck = {
              type: "attrHTMLElement",
              selector,
              selectorNumber: selectorCounter,
              attr: attribute.attribute,
              attrValue: attribute.value,
            };
            resultArray.push({
              title: `Додай ${attribute.attribute}${parentLabel}`,
              label: attribute.value,
              description: "",
              check: [attrCheck],
            });
          }
        });
      }

      if (element.children && element.children.length > 0) {
        selectorCounter++;
        element.children.forEach((childElement) => {
          processElement(
            childElement,
            `${selector}:nth-child(${selectorCounter})`
          );
        });
      }
    } else if (element.type === "text") {
      const parentElement = resultArray.find(
        (item) => item.check[0].selector === parentSelector
      );
      const parentLabel = parentElement ? ` у ${parentElement.title}` : "";
      const textCheck = {
        type: "textHTMLElement",
        selector: parentSelector,
        selectorNumber: parentElement
          ? parentElement.check[0].selectorNumber
          : 0,
        text: element.text,
      };
      resultArray.push({
        title: `Додай текст "${element.text}"${parentLabel}`,
        label: element.text,
        description: "",
        check: [textCheck],
      });
    }
  }

  if (inputArray && inputArray.length > 0) {
    inputArray.forEach((element) => {
      processElement(element);
    });
  }

  return resultArray;
}

function logObject(obj, indent = "") {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (typeof value === "object") {
        logObject(value, `${indent}\t`);
      } else {
        console.log(`${indent}${key}: ${value}`);
      }
    }
  }
}



function generateTasks(cssCode, htmlCode) {
  const tasks = [];

  const lines = cssCode.split("\n");
  let currentSelector = "";
  let isHover = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line.startsWith("//")) {
      continue;
    } else if (line.endsWith("{")) {
      currentSelector = line.substring(0, line.length - 1).trim();
      isHover = currentSelector.endsWith(":hover");
      if (isHover) {
        currentSelector = currentSelector
          .substring(0, currentSelector.length - 6)
          .trim();
      }
    } else if (line.endsWith("}")) {
      currentSelector = "";
      isHover = false;
    } else if (line.includes(":")) {
      const [property, value] = line.split(":").map((item) => item.trim());

      const translatedProperty = translations[property] || property;

      let elementType = "";

      if (currentSelector.startsWith(".")) {
        elementType = "елемента з класом";
        currentSelector = currentSelector.substring(1);
        currentSelector = `.${currentSelector}`;
      } else {
        elementType = "елемента";
      }

      const command = property.replace(/-([a-z])/g, (_, letter) =>
        letter.toUpperCase()
      );

      const propertyText = translations[property] || translatedProperty;

      const selectorText = currentSelector.startsWith(".")
        ? `${elementType} ${currentSelector.substring(1)}`
        : `${elementType} ${currentSelector}`;

      const hoverText = isHover ? " при наведенні мишкою" : "";

      const labelValue = value.replace(";", "").replace("px", " пікселів");

      // Пошук відповідного елемента в HTML коді
      const dom = new JSDOM(htmlCode);
      const elements = dom.window.document.querySelectorAll(currentSelector);
      const htmlElement = elements.length > 0 ? elements[0] : null;
      const tagName = htmlElement ? htmlElement.tagName.toLowerCase() : "";

      const title = `Додай для ${
        translations[tagName] || tagName
      } ${hoverText} ${translations[property] || propertyText}`;

      const selector = isHover ? `${currentSelector}:hover` : currentSelector;

      const task = {
        title,
        label: labelValue,
        description: "",
        check: [
          {
            type: isHover ? "cssHoverValue" : "cssValue",
            selector,
            selectorNumber: tasks.length,
            commandCSS: property,
            command,
            value,
            valueCSS: value,
          },
        ],
      };

      tasks.push(task);
    }
  }

  return tasks;
}


export default generatePracticeTask;
