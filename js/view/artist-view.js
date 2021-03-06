import AbstractView from './abstractView';
import PlayerView from './player-view';

export default class ArtistView extends AbstractView {
  constructor(model) {
    super();
    this.model = model;
    this.question = model.currentQuestion;
    this.player = new PlayerView(this.question.src);
  }

  get template() {
    return `<section class="main main--level main--level-artist">
              ${this.model.timer.template}
              ${this.model.mistakes.template}
              <div class="main-wrap">
                <h2 class="title main-title">${this.question.question}</h2>
                ${this.player.template}
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
    this.element.querySelector(`.main-list`).addEventListener(`click`, (evt) => {
      evt.preventDefault();
      const element = evt.target;

      if (element.tagName.toLowerCase() === `img`) {
        this.onAnswerClickArtist(element.parentNode.parentNode.querySelector(`input`).value === `val-true`);
      }
    });

    this.element.querySelector(`.main-wrap`).addEventListener(`click`, (evt) => {
      evt.preventDefault();

      const element = evt.target;
      if (element.classList.contains(`player-control`)) {
        const audio = element.parentNode.querySelector(`audio`);
        if (element.classList.contains(`player-control--pause`)) {
          element.classList.remove(`player-control--pause`);
          audio.pause();
        } else {
          element.classList.add(`player-control--pause`);
          audio.play();
        }
      }
    });
  }

  onAnswerClickArtist() {}
}
