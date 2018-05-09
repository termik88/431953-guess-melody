import AbstractView from "./abstractView";

export default class MistakesView extends AbstractView {
  constructor(model) {
    super();
    this.model = model;
    this.lives = this.model.gameSettings;
  }

  get template() {
    return `<div class="main-mistakes">
              ${new Array(this.lives.numberLives).fill(`<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`).join(``)}
            </div>`;
  }
}
