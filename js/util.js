export const createElement = (template) => {
  const outer = document.createElement(`div`);
  outer.innerHTML = template;
  return outer;
};

const layout = document.getElementById(`main`);

export const changeTemplate = (element) => {
  layout.innerHTML = ``;
  layout.appendChild(element);
};
