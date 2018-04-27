import AbstractView from '../abstractView';
import headerView from "./header-view";

export default class GenreView extends AbstractView {
  constructor(data) {
    super();
    this._data = data;
  }

  get template() {
    const variantsAnswers = (answerArr) => {
      let html = ``;
      answerArr.forEach((item, i) => {
        html += `<div class="genre-answer">
              <div class="player-wrapper">
                <div class="player">
                  <audio src="${item.src}"></audio>
                  <button class="player-control player-control--pause"></button>
                  <div class="player-track">
                    <span class="player-status">${item.genre}"</span>
                  </div>
                </div>
              </div>
              <input type="checkbox" name="answer" value="${item.genre}" id="a-${i}">
              <label class="genre-answer-check" for="a-${i}"></label>
            </div>`;
      });
      return html;
    };

    return `<section class="main main--level main--level-genre">
              ${headerView(this._data.state)}                  
              <div class="main-wrap">
                <h2 class="title">Выберите ${this._data.answers.correct.genre} треки</h2>
                <form class="genre">
                  ${variantsAnswers(this._data.answers.variants)}
                  <button class="genre-answer-send" type="submit">Ответить</button>
                </form>
              </div>
            </section>`;
  }

  bind() {
    const resultButton = this.element.querySelector(`.genre-answer-send`);
    const answersButton = this.element.querySelectorAll(`input[name=answer]`);
    this.element.querySelector(`.genre`).reset();
    resultButton.setAttribute(`disabled`, `true`);

    [...answersButton].forEach((answerButton) => {
      answerButton.addEventListener(`change`, () => {
        const isAnswerButtonChecked = [...answersButton].some((item) => item.checked);
        if (isAnswerButtonChecked) {
          resultButton.removeAttribute(`disabled`);
        }
        if (!isAnswerButtonChecked) {
          resultButton.setAttribute(`disabled`, `true`);
        }
      });
    });

    resultButton.addEventListener(`click`, (evt) => {
      const answersButtonChecked = [...answersButton].filter((item) => item.checked);
      evt.preventDefault();

      this.onAnswerClick(answersButtonChecked.every((item) => item.value === this._data.answers.correct.genre));
    });
  }

  onAnswerClick() {

  }
}
