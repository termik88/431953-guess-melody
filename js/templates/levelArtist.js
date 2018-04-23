import {getElementFromTemplate, screenChange, getCurrentAnswer, getRandomAnswers} from '../util';
import header from './header';
import questions from './questions';
import levelGenre from './levelGenre';
import resultOverTime from './resultIsOverTime';
import resultBad from './resultBad';

const variantsAnswers = (answerArr) => {
  let html = ``;
  answerArr.forEach((item, i) => {
    html += `<div class="main-answer-wrapper">
                      <input class="main-answer-r" type="radio" id="answer-${i}" name="answer" value="val-${item.current}"/>
                      <label class="main-answer" for="answer-${i}">
                        <img class="main-answer-preview" src=${item.image}
                             alt="${item.artist}" width="134" height="134">
                        ${item.artist}
                      </label>
                    </div>`;
  });
  return html;
};

const template = (state, correctAnswer, answerArr) => {
  return `<section class="main main--level main--level-artist">
              ${header(state)}
              <div class="main-wrap">
                <h2 class="title main-title">Отгодайте исполнителя</h2>
                <div class="player-wrapper">
                  <div class="player">
                    <audio src="${correctAnswer.src}"></audio>
                    <button class="player-control player-control--pause"></button>
                    <div class="player-track">
                      <span class="player-status">${correctAnswer.artist}</span>
                    </div>
                  </div>
                </div>
                <form class="main-list">
                  ${variantsAnswers(answerArr)}
                </form>
              </div>
            </section>`;
};

export default (data) => {
  const currentState = {
    level: ++data.level,
    lives: data.lives,
    time: data.time,
    gameType: `artist`
  };

  const randomAnswers = getRandomAnswers(questions, currentState.gameType);
  const correctAnswer = getCurrentAnswer(randomAnswers);

  const screenLevelArtist = getElementFromTemplate(template(currentState, correctAnswer, randomAnswers));

  const answerButton = screenLevelArtist.querySelectorAll(`.main-answer`);
  [...answerButton].forEach((answer) => {
    answer.addEventListener(`click`, (evt) => {

      currentState.time = currentState.time - 25;
      if (currentState.time <= 0) {
        screenChange(resultOverTime());
      }

      if (evt.currentTarget.parentNode.querySelector(`input`).value === `val-true`) {
        screenChange(levelGenre(currentState));
      }

      if (evt.currentTarget.parentNode.querySelector(`input`).value !== `val-true`) {
        currentState.lives = currentState.lives - 1;
        if (currentState.lives === 0) {
          screenChange(resultBad());
        }
        if (currentState.lives !== 0) {
          screenChange(levelGenre(currentState));
        }
      }

    });
  });

  return screenLevelArtist;
};
