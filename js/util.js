export const changeView = (element) => {
  const layout = document.querySelector(`.main`);
  layout.innerHTML = ``;
  layout.appendChild(element);
};

export const getElementFromTemplate = (stringTemplate) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = stringTemplate;
  return wrapper.firstElementChild;
};

export const getRandomIndex = (length) => {
  return Math.trunc(Math.random() * (length));
};
