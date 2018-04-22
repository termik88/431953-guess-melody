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

export const getCurrentAnswer = (arrAnswers) => {
  const currentAnswer = arrAnswers[getRandomIndex(arrAnswers.length)];
  currentAnswer.current = true;

  return currentAnswer;
};

export const getRandomAnswers = (questions) => {
  let answers = [];
  while (answers.length < 3) {
    let randomAnswer = questions[getRandomIndex(questions.length)];
    let bred = answers.some((item) => {
      for (let key in item) {
        if (item[key] === randomAnswer[key]) {
          return true;
        }
      }
      return false;
    });
    if (!bred) {
      answers.push(randomAnswer);
    }
  }
  return answers;
};
