const changeTemplate = (element) => {
  const layout = document.querySelector(`.main`);
  layout.innerHTML = ``;
  layout.appendChild(element);
};

export default changeTemplate;
