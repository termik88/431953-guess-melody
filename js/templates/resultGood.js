import {getElementFromTemplate, screenChange} from '../util';
import welcome from "../view/welcome-view";

const template = (data) => {
  return `<section class="main main--result">
            <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
        
            <h2 class="title">Вы настоящий меломан!</h2>
            <div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
              <br>вы&nbsp;набрали ${data.playerResult} баллов (${data.numberFastAnswer} быстрых)
              <br>совершив 3 ошибки</div>
            <span class="main-comparison">Вы заняли ${data.positionStatistic} место из ${data.generalStatistic}. Это&nbsp;лучше чем у&nbsp;${data.successRate}&nbsp;игроков</span>
            <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
          </section>`;
};

export default (data) => {
  const screenResultGood = getElementFromTemplate(template(data));

  const replayButton = screenResultGood.querySelector(`.main-replay`);
  replayButton.addEventListener(`click`, () => screenChange(welcome()));

  return screenResultGood;
};
