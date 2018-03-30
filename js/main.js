const KEY_CODES = {
  LEFT: 37,
  RIGHT: 39
};

const templates = document.querySelector(`#templates`);
const templatesArray = Array.from(templates.content.querySelectorAll(`section.main`));
const layout = document.querySelector(`.app > .main`);
const maxTemplatesArray = templatesArray.length - 1;
let currentTemplatesIndex = 0;

const showTemplates = (index) => {
  const currentTemplates = templatesArray[index];

  if (layout.hasChildNodes()) {
    layout.removeChild(layout.firstChild);
  }

  layout.appendChild(currentTemplates);
};

showTemplates(currentTemplatesIndex);

document.onKeyDown = (key) => {
  if (key.altKey && key.keyCode === KEY_CODES.LEFT && currentTemplatesIndex > 0) {
    showTemplates(--currentTemplatesIndex);
  }
  if (key.altKey && key.keyCode === KEY_CODES.RIGHT && currentTemplatesIndex < maxTemplatesArray) {
    showTemplates(++currentTemplatesIndex);
  }
};
