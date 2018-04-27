import AbstractView from '../abstractView';
import headerView from "./header-view";

export default class ArtistView extends AbstractView {
  constructor(data) {
    super();
    this._data = data;
  }

  get template() {
    const variantsAnswers = (answerArr) => {
      let html = ``;
      answerArr.forEach((item, index) => {
        html += `<div class="main-answer-wrapper">
                      <input class="main-answer-r" type="radio" id="answer-${index}" name="answer" value="val-${item.current}"/>
                      <label class="main-answer" for="answer-${index}">
                        <img class="main-answer-preview" src=${item.image}
                             alt="${item.artist}" width="134" height="134">
                        ${item.artist}
                      </label>
                    </div>`;
      });
      return html;
    };

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
                  ${variantsAnswers(this._data.answers.variants)};
                </form>
              </div>
            </section>`;
  }

  bind() {
    [...this.element.querySelectorAll(`.main-answer`)].forEach((answer) => {
      answer.addEventListener(`click`, (evt) => {
        evt.preventDefault();

        this.onAnswerClick(evt.currentTarget.parentNode.querySelector(`input`).value === `val-true`);
      });
    });
  }

  onAnswerClick() {

  }
}
