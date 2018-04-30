import AbstractView from '../abstractView';
import headerView from "./header-view";

export default class ArtistView extends AbstractView {
  constructor(data) {
    super();
    this._data = data;
  }

  get template() {
    return `<section class="main main--level main--level-artist">
              ${headerView(this._data.state)}
              <div class="main-wrap">
                <h2 class="title main-title">Отгодайте исполнителя</h2>
                <div class="player-wrapper">
                  <div class="player">
                    <audio src="${this._data.answers.correct.src}"></audio>
                    <button class="player-control player-control--pause"></button>
                    <div class="player-track">
                      <span class="player-status">${this._data.answers.correct.artist}</span>
                    </div>
                  </div>
                </div>
                <form class="main-list">
                  ${this.getVariantsAnswers(this._data.answers.variants)};
                </form>
              </div>
            </section>`;
  }

  getVariantsAnswers(answerArr) {
    return answerArr.map((answer, index) => `<div class="main-answer-wrapper">
                                            <input class="main-answer-r" type="radio" id="answer-${index}" name="answer" value="val-${answer.current}"/>
                                            <label class="main-answer" for="answer-${index}">
                                              <img class="main-answer-preview" src=${answer.image}
                                                   alt="${answer.artist}" width="134" height="134">
                                              ${answer.artist}
                                            </label>
                                          </div>`).join(``);
  }

  bind() {
    [...this.element.querySelectorAll(`.main-answer`)].forEach((answer) => {
      answer.addEventListener(`click`, this.onAnswerClick);
    });
  }

  controlPlayer() {
    const playerButton = this.element.querySelector(`.player-control`);
    playerButton.addEventListener(`click`, (evt) => this.onPlayClick(evt));
  }

  onAnswerClick() {}

  onPlayClick() {}
}
