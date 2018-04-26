import AbstractView from '../abstractView';
import {changeView} from "../util";

export default class WelcomeView extends AbstractView {
  constructor(data) {
    super();
    this._data = data;
  }

  get template() {
    return `<section class="main main--welcome">
                      <section class="logo" title="Угадай мелодию"><h1>${this._data.titleGame}</h1></section>
                      <button class="main-play">${this._data.titleButton}</button>
                      <h2 class="title main-title">${this._data.titleScreen}</h2>
                      <p class="text main-text">
                        ${this._data.text}
                      </p>
                    </section>`;
  }

  bind(element) {
    element.querySelector(`.main-play`).addEventListener(`click`, () => alert(`OK~~~~`)/*changeView(levelArtist(initialState, totalAnswers))*/);
  }
}
