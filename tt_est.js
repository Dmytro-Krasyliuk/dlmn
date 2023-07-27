function parseHTML(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

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

  return [parseNode(doc.body.firstChild)];
}

let a45 = parseHTML(`
<div class="block">
  <img src="https://bot.dimanice.repl.co/book.png" alt="photo">
  <div class="happy happy2">
    <b class="bold">element</b>
  </div>
  <button class="click_me">click me</button>
</div>

`);

console.log(a45);





let res = [
  // [object Object]
  {
    tagName: "div",
    attributes: [
      {
        attribute: "class",
        value: "block",
      },
    ],
    children: [
      {
        tagName: "img",
        attributes: [
          {
            attribute: "src",
            value: "https://bot.dimanice.repl.co/book.png",
          },
          {
            attribute: "alt",
            value: "photo",
          },
        ],
        children: [],
      },
      {
        tagName: "div",
        attributes: [
          {
            attribute: "class",
            value: "happy happy2",
          },
        ],
        children: [
          {
            tagName: "b",
            attributes: [
              {
                attribute: "class",
                value: "bold",
              },
            ],
            children: [
              {
                type: "text",
                text: "element",
              },
            ],
          },
        ],
      },
      {
        tagName: "button",
        attributes: [
          {
            attribute: "class",
            value: "click_me",
          },
        ],
        children: [
          {
            type: "text",
            text: "click me",
          },
        ],
      },
    ],
  },
];

function convertArray(inputArray, parentSelector = "") {
  const resultArray = [];
  let selectorCounter = 0;

  function processElement(element, parentSelector = "") {
    if (element.tagName) {
      const selector = parentSelector ? `${parentSelector}>${element.tagName}` : element.tagName;
      const check = [
        {
          type: "htmlElement",
          selector,
          selectorNumber: selectorCounter,
          amount: 1,
        },
      ];

      const parentElement = resultArray.find((item) => item.check[0].selector === parentSelector);
      const parentLabel = parentElement ? ` в ${parentElement.title}` : "";

      resultArray.push({
        title: `Створи ${element.tagName}${parentLabel}`,
        label: "",
        description: "",
        check,
      });

      if (element.tagName === "div" && element.attributes && element.attributes.length > 0 && element.attributes[0].attribute === "class") {
        const classNames = element.attributes[0].value.split(" ");
        classNames.forEach((className) => {
          const classSelector = parentSelector ? `${parentSelector}>div.${className}` : `div.${className}`;
          const classCheck = [
            {
              type: "classElement",
              selector: classSelector,
              selectorNumber: selectorCounter,
              className,
            },
          ];
          resultArray.push({
            title: `Додай клас для прямокутника${parentLabel}`,
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
          processElement(childElement, `${selector}:nth-child(${selectorCounter})`);
        });
      }
    } else if (element.type === "text") {
      const parentElement = resultArray.find((item) => item.check[0].selector === parentSelector);
      const parentLabel = parentElement ? ` у ${parentElement.title}` : "";
      const textCheck = {
        type: "textHTMLElement",
        selector: parentSelector,
        selectorNumber: parentElement ? parentElement.check[0].selectorNumber : 0,
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

// Пример использования:
// const input = [/* ваш исходный массив */];
// const output = convertArray(input);
// console.log(output);
// console.log(JSON.stringify(res));
const input = res;
const output = convertArray(input);

console.log(JSON.stringify(output));












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


for (let i = 0; i < output.length; i++) {
  logObject(output[i], "\t");
}