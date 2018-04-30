import AbstractView from '../abstractView';
import headerView from "./header-view";

export default class GenreView extends AbstractView {
  constructor(data) {
    super();
    this._data = data;
  }

  get template() {
    return `<section class="main main--level main--level-genre">
              ${headerView(this._data.state)}                  
              <div class="main-wrap">
                <h2 class="title">Выберите ${this._data.answers.correct.genre} треки</h2>
                <form class="genre">
                  ${this.getVariantsAnswers(this._data.answers.variants)}
                  <button class="genre-answer-send" type="submit">Ответить</button>
                </form>
              </div>
            </section>`;
  }

  getVariantsAnswers(answerArr) {
    return answerArr.map((answer, i) => `<div class="genre-answer">
                                        <div class="player-wrapper">
                                          <div class="player">
                                            <audio src="${answer.src}"></audio>
                                            <button class="player-control player-control--pause"></button>
                                            <div class="player-track">
                                              <span class="player-status">${answer.genre}"</span>
                                            </div>
                                          </div>
                                        </div>
                                        <input type="checkbox" name="answer" value="${answer.genre}" id="a-${i}">
                                        <label class="genre-answer-check" for="a-${i}"></label>
                                      </div>`).join(``);
  }

  bind() {
    const resultButton = this.element.querySelector(`.genre-answer-send`);
    const answersButton = this.element.querySelectorAll(`input[name=answer]`);
    let isCorrect;

    [...answersButton].forEach((answerButton) => {
      answerButton.addEventListener(`change`, this.onAnswersChange);
    });

    resultButton.addEventListener(`click`, (evt) => {
      const numberAnswers = [...answersButton].filter((item) => item.value === this._data.answers.correct.genre);
      const answersButtonChecked = [...answersButton].filter((item) => item.checked);
      if (numberAnswers.length === answersButtonChecked.length) {
        isCorrect = answersButtonChecked.every((item) => item.value === this._data.answers.correct.genre);
      } else {
        isCorrect = false;
      }
      evt.preventDefault();

      this.onAnswerClick(isCorrect);
    });
  }

  controlPlayer() {
    const answers = this.element.querySelectorAll(`.genre-answer`);
    [...answers].forEach((answer) => {
      const playerButton = answer.querySelector(`.player-control`);

      playerButton.addEventListener(`click`, (evt) => this.onPlayClick(evt));
    });
  }

  resetForm() {
    this.element.querySelector(`.genre`).reset();
  }

  onAnswersChange() {}

  onAnswerClick() {}
}
