export const changeView = (screenElement) => {
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

export const getRandomAnswers = (questions, gameType) => {
  let answersArrLength = gameType === `genre` ? 4 : 3;
  let answers = [];

  while (answers.length < answersArrLength) {
    let randomAnswer = questions[getRandomIndex(questions.length)];
    let bred = answers.some((item) => {
      if (item.artist === randomAnswer.artist) {
        return true;
      }
      if (item.name === randomAnswer.name) {
        return true;
      }
      return false;
    });

    if (!bred) {
      answers.push(randomAnswer);
    }

  }
  return answers;
};
