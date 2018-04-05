export const screenChange = (screenElement) => {
  const layout = document.querySelector(`.main`);
  layout.innerHTML = ``;
  layout.appendChild(screenElement);
};

export const getElementFromTemplate = (stringTemplate) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = stringTemplate;
  return wrapper.firstElementChild;
};

export const getRandomIndex = (length) => {
  return Math.trunc(Math.random() * (length));
};
