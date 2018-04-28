import AbstractView from '../abstractView';

export default class ResultGood extends AbstractView {
  constructor(data) {
    super();
    this._data = data;
  }

  get template() {
    return `<section class="main main--result">
            <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
        
            <h2 class="title">Вы настоящий меломан!</h2>
            <div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
              <br>вы&nbsp;набрали ${this._data.playerResult} баллов (${this._data.numberFastAnswer} быстрых)
              <br>совершив 3 ошибки</div>
            <span class="main-comparison">Вы заняли ${this._data.positionStatistic} место из ${this._data.generalStatistic}.
            Это&nbsp;лучше чем у&nbsp;${this._data.successRate}&nbsp;игроков</span>
            <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
          </section>`;
  }

  bind() {
    this.element.querySelector(`.main-replay`).addEventListener(`click`, (evt) => {
      evt.preventDefault();

      this.onClick();
    });
  }

  onClick() {

  }
}
