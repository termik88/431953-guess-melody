import AbstractView from '../abstractView';
import headerView from "./header-view";

export default class ArtistView extends AbstractView {
  constructor(model) {
    super();
    this.model = model;
    this.question = model.getQuestion;
  }

  get template() {
    return `<section class="main main--level main--level-artist">
              ${headerView(this.model.getGameSettings)}
              <div class="main-wrap">
                <h2 class="title main-title">${this.model.question}</h2>
                <div class="player-wrapper">
                  <div class="player">
                    <audio src="${this.question.src}"></audio>
                    <button class="player-control player-control--pause"></button>
                    <div class="player-track">
                      <span class="player-status"></span>
                    </div>
                  </div>
                </div>
                <form class="main-list">
                  ${this.getVariantsAnswers(this.question.answers)};
                </form>
              </div>
            </section>`;
  }

  getVariantsAnswers(answerArr) {
    return answerArr.map((answer, index) => `<div class="main-answer-wrapper">
                                            <input class="main-answer-r" type="radio" id="answer-${index}" name="answer" value="val-${answer.isCorrect}"/>
                                            <label class="main-answer" for="answer-${index}">
                                              <img class="main-answer-preview" src=${answer.image.url}
                                                   alt="${answer.title}" width="${answer.image.width}" height="${answer.image.height}">
                                              ${answer.title}
                                            </label>
                                          </div>`).join(``);
  }

  bind() {
    this.element.querySelector(`.main-list`).addEventListener(`click`, (evt) => this.onAnswerClick(evt));
  }

  controlPlayer() {
    const playerButton = this.element.querySelector(`.player-control`);
    playerButton.addEventListener(`click`, (evt) => this.onPlayClick(evt));
  }

  onAnswerClick() {}

  onPlayClick() {}
}
