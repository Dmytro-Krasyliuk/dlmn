function generateTasks(cssCode) {
  const translations = {
    width: "ширину",
    height: "висоту",
    background: "фон",
    color: "колір",
    margin: "відступ",
    padding: "внутрішні відступи",
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
  };

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

      const hoverText = isHover ? " при наведені мишкою" : "";

      const labelValue = value.replace(";", "").replace("px", " пікселів");

      const title = `Додай для ${selectorText}${hoverText} ${propertyText}`;

      const task = {
        title,
        label: labelValue,
        description: "",
        check: [
          {
            type: isHover ? "cssHoverValue" : "cssValue",
            selector: currentSelector,
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

// Пример использования:
const cssCode = `
img {
  width: 200px;
}
.img-block {
  border-radius: 300px;
}
.img:hover {
  height: 300px;
}
`;

const tasks = generateTasks(cssCode);
console.log(tasks);

logObject(tasks);

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
