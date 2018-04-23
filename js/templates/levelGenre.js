import {getElementFromTemplate, screenChange, getCurrentAnswer, getRandomAnswers} from '../util';
import header from "./header";
import questions from "./questions";
import levelArtist from './levelArtist';
import resultGood from './resultGood';
import resultBad from './resultBad';
import resultIsOverTime from './resultIsOverTime';

const variantsAnswers = (answerArr) => {
  let html = ``;
  answerArr.forEach((item, i) => {
    html += `<div class="genre-answer">
              <div class="player-wrapper">
                <div class="player">
                  <audio src="${item.src}"></audio>
                  <button class="player-control player-control--pause"></button>
                  <div class="player-track">
                    <span class="player-status">${item.genre}"</span>
                  </div>
                </div>
              </div>
              <input type="checkbox" name="answer" value="${item.genre}" id="a-${i}">
              <label class="genre-answer-check" for="a-${i}"></label>
            </div>`;
  });
  return html;
};

const template = (state, correctAnswer, answerArr) => {
  return `<section class="main main--level main--level-genre">
              ${header(state)}                  
              <div class="main-wrap">
                <h2 class="title">Выберите ${correctAnswer.genre} треки</h2>
                <form class="genre">
                  ${variantsAnswers(answerArr)}
                  <button class="genre-answer-send" type="submit">Ответить</button>
                </form>
              </div>
            </section>`;
};

export default (data) => {
  const currentState = {
    level: ++data.level,
    lives: data.lives,
    time: data.time,
    gameType: `genre`
  };

  const randomAnswers = getRandomAnswers(questions, currentState.gameType);
  const correctAnswer = getCurrentAnswer(randomAnswers);

  const screenLevelGenre = getElementFromTemplate(template(currentState, correctAnswer, randomAnswers));

  const resultButton = screenLevelGenre.querySelector(`.genre-answer-send`);
  const answersButton = screenLevelGenre.querySelectorAll(`input[name=answer]`);
  screenLevelGenre.querySelector(`.genre`).reset();
  resultButton.setAttribute(`disabled`, `true`);

  [...answersButton].forEach((answerButton) => {
    answerButton.addEventListener(`change`, () => {
      const isAnswerButtonChecked = [...answersButton].some((item) => item.checked);
      if (isAnswerButtonChecked) {
        resultButton.removeAttribute(`disabled`);
      }
      if (!isAnswerButtonChecked) {
        resultButton.setAttribute(`disabled`, `true`);
      }
    });
  });


  resultButton.addEventListener(`click`, () => {
    const answersButtonChecked = [...answersButton].filter((item) => item.checked);
    const isCorrectAnswers = answersButtonChecked.every((item) => item.value === correctAnswer.genre);

    currentState.time = currentState.time - 25;
    if (currentState.time <= 0) {
      screenChange(resultIsOverTime());
    }

    if (isCorrectAnswers) {
      screenChange(levelArtist(currentState));
      if (currentState.level === 10) {
        screenChange(resultGood(currentState));
      }
    }

    if (!isCorrectAnswers) {
      currentState.lives = currentState.lives - 1;
      if (currentState.lives === 0) {
        screenChange(resultBad());
      }
      if (currentState.lives !== 0) {
        screenChange(levelArtist(currentState));
      }
    }
  });

  return screenLevelGenre;
};

