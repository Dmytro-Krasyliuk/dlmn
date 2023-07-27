import { LogarithmicScale } from "chart.js";
import { JSDOM } from "jsdom";

const tagTranslations = {
  div: "прямокутник",
  img: "зображення",
  b: "жирний",
  button: "кнопка",
};

const attributeTranslations = {
  src: "шлях до зображення",
  alt: "альтернативний текст",
  class: "клас",
};

function translateTag(tag) {
  return tagTranslations[tag] || tag;
}

function translateAttribute(attribute) {
  return attributeTranslations[attribute] || attribute;
}

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
    tasks: convertArray(parseHTML(task.codeResult.html), "", "", true),
  };
}

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

function convertArray(
  inputArray,
  parentSelector = "",
  parentClassName = "",
  includeParentInfo = false
) {
  const resultArray = [];
  let selectorCounter = 0;

  function processElement(element, parentSelector = "", parentClassName = "") {
    if (element.tagName) {
      const selector = parentSelector
        ? `${parentSelector} > ${element.tagName}`
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
      const elementLabel =
        includeParentInfo && (parentClassName || parentLabel)
          ? ` в ${translateTag(element.tagName)}`
          : "";

      resultArray.push({
        title: `Створи ${translateTag(
          element.tagName
        )}${elementLabel}${parentLabel}`,
        label: parentClassName || "",
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
            ? `${parentSelector} > ${element.tagName}.${className}`
            : `${element.tagName}.${className}`;
          const classCheck = [
            {
              type: "classElement",
              selector: classSelector,
              selectorNumber: selectorCounter,
              className,
            },
          ];
          resultArray.push({
            title: `Додай клас для ${translateTag(
              element.tagName
            )}${parentLabel}`,
            label: className,
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
            const translatedAttribute = translateAttribute(attribute.attribute);
            resultArray.push({
              title: `Додай ${translatedAttribute}${parentLabel}`,
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
          processElement(childElement, selector, parentClassName);
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
        label: parentClassName || "",
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

let r = generatePracticeTask({
  id: 26,
  name: "Текст по центру та з наведенням миші",
  description: "Текст по центру та з наведенням миші",
  type: "",
  level: 1,
  codeResult: {
    html: `
<div class="block">
  <img src="https://bot.dimanice.repl.co/book.png" alt="photo">
  <div class="happy happy2">
    <b class="bold">element</b>
  </div>
  <button class="click_me">click me</button>
  <button class="click_me">click me</button>
  <div>
    <div class="happy happy2">
      <b class="bold">element <span>o</span></b>
    </div>
  </div>
</div>
    `,
    css: `
img {
  width: 200px;
}
.block:hover {
  background: skyblue;
  width: 300px;
  padding: 30px;
  background: red;
}
    `,
    js: `
let a = 0;
    `,
  },
});

logObject(r);

export default generatePracticeTask;
