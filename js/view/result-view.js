import AbstractView from '../abstractView';

export default class ResultView extends AbstractView {
  constructor(model) {
    super();
    this.model = model;
    this.data = this.model.getResult;
  }

  get template() {
    return `<section class="main main--result">
            <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
        
            <h2 class="title">${this.data.title}</h2>
            <div class="main-stat">${this.data.textScore}</div>
            <span class="main-comparison">${this.data.textRang}</span>
            <span role="button" tabindex="0" class="main-replay">${this.data.action}</span>
          </section>`;
  }

  bind() {
    this.element.querySelector(`.main-replay`).addEventListener(`click`, (evt) => this.onRestartGame(evt));
  }

  onRestartGame() {}
}
