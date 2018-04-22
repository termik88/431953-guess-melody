import {getElementFromTemplate, screenChange, getCurrentAnswer, getRandomAnswers} from '../util';
import header from './header';
import questions from './questions';
import levelGenre from './levelGenre';
import resultOverTime from './resultIsOverTime';
import resultBad from './resultBad';

export default (data) => {
  const currentState = {
    level: ++data.level,
    lives: data.lives,
    time: data.time
  };

  const randomAnswers = getRandomAnswers(questions);
  const correctAnswer = getCurrentAnswer(randomAnswers);

  const answers = (answerData) => {
    let html = ``;
    answerData.forEach((item, i) => {
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

  const template = `<section class="main main--level main--level-artist">
                      ${header(data)}
                      <div class="main-wrap">
                        <h2 class="title main-title">Отгодайте исполнителя</h2>
                        <div class="player-wrapper">
                          <div class="player">
                            <audio src="${correctAnswer.src}"></audio>
                            <button class="player-control player-control--pause"></button>
                            <div class="player-track">
                              <span class="player-status"></span>
                            </div>
                          </div>
                        </div>
                        <form class="main-list">
                          ${answers(randomAnswers)}
                        </form>
                      </div>
                    </section>`;

  const screenLevelArtist = getElementFromTemplate(template);

  const answerButton = screenLevelArtist.querySelectorAll(`.main-answer`);
  [...answerButton].forEach((answer) => {
    answer.addEventListener(`click`, (evt) => {

      currentState.time = currentState.time - 25
      if (currentState.time <= 0) {
        screenChange(resultOverTime(currentState));
      }

      if (evt.currentTarget.parentNode.querySelector(`input`).value === `val-true`) {
        screenChange(levelGenre(currentState));
      }

      currentState.lives = currentState.lives - 1;
      if (currentState.lives === 0) {
        screenChange(resultBad(currentState));
      }

    });
  });

  return screenLevelArtist;
};
