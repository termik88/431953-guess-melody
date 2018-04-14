import {getElementFromTemplate, screenChange} from '../util';
import welcome from "./welcome";

const template = `
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Какая жалость!</h2>
    <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>`;

const screenResultBad = getElementFromTemplate(template);

export default () => {
  const replayButton = screenResultBad.querySelector(`.main-replay`);
  replayButton.addEventListener(`click`, () => screenChange(welcome()));

  return screenResultBad;
};