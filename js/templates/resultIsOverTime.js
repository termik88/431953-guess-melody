import {getElementFromTemplate, screenChange} from '../util';
import welcome from "./welcome";

const template = () => {
  return `<section class="main main--result">
            <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
        
            <h2 class="title">Увы и ах!</h2>
            <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
            <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
          </section>`;
};

export default () => {
  const screenIsOverTime = getElementFromTemplate(template());

  const replayButton = screenIsOverTime.querySelector(`.main-replay`);
  replayButton.addEventListener(`click`, () => screenChange(welcome()));

  return screenIsOverTime;
};
