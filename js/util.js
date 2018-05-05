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

export const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};
