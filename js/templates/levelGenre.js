import {screenChange, getElementFromTemplate, getRandomIndex} from '../util';
import resultGood from './resultGood';
import resultBad from './resultBad';
import resultIsOverTime from './resultIsOverTime';
import header from "./header";

export default (data) => {
  const template = `<section class="main main--level main--level-genre">
                      ${header(data)}                  
                      <div class="main-wrap">
                        <h2 class="title">Выберите инди-рок треки</h2>
                        <form class="genre">
                          <div class="genre-answer">
                            <div class="player-wrapper">
                              <div class="player">
                                <audio></audio>
                                <button class="player-control player-control--pause"></button>
                                <div class="player-track">
                                  <span class="player-status"></span>
                                </div>
                              </div>
                            </div>
                            <input type="checkbox" name="answer" value="answer-1" id="a-1">
                            <label class="genre-answer-check" for="a-1"></label>
                          </div>
                  
                          <div class="genre-answer">
                            <div class="player-wrapper">
                              <div class="player">
                                <audio></audio>
                                <button class="player-control player-control--play"></button>
                                <div class="player-track">
                                  <span class="player-status"></span>
                                </div>
                              </div>
                            </div>
                            <input type="checkbox" name="answer" value="answer-1" id="a-2">
                            <label class="genre-answer-check" for="a-2"></label>
                          </div>
                  
                          <div class="genre-answer">
                            <div class="player-wrapper">
                              <div class="player">
                                <audio></audio>
                                <button class="player-control player-control--play"></button>
                                <div class="player-track">
                                  <span class="player-status"></span>
                                </div>
                              </div>
                            </div>
                            <input type="checkbox" name="answer" value="answer-1" id="a-3">
                            <label class="genre-answer-check" for="a-3"></label>
                          </div>
                  
                          <div class="genre-answer">
                            <div class="player-wrapper">
                              <div class="player">
                                <audio></audio>
                                <button class="player-control player-control--play"></button>
                                <div class="player-track">
                                  <span class="player-status"></span>
                                </div>
                              </div>
                            </div>
                            <input type="checkbox" name="answer" value="answer-1" id="a-4">
                            <label class="genre-answer-check" for="a-4"></label>
                          </div>
                  
                          <button class="genre-answer-send" type="submit">Ответить</button>
                        </form>
                      </div>
                    </section>`;

  const screenLevelGenre = getElementFromTemplate(template);

  const result = {
    good: resultGood,
    bad: resultBad,
    isOverTime: resultIsOverTime
  };

  const resultLength = Object.keys(result).length;
  const resultArrayKey = Object.getOwnPropertyNames(result);
  const resultIndex = getRandomIndex(resultLength);
  const resultRandomKey = resultArrayKey[resultIndex];
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

  resultButton.addEventListener(`click`, () => screenChange(result[resultRandomKey]()));

  return screenLevelGenre;
};

