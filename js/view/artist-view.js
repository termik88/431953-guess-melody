import AbstractView from '../abstractView';
import header from "../templates/header";

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
              ${header(state)}
              <div class="main-wrap">
                <h2 class="title main-title">Отгодайте исполнителя</h2>
                <div class="player-wrapper">
                  <div class="player">
                    <audio src="${correctAnswer.src}"></audio>
                    <button class="player-control player-control--pause"></button>
                    <div class="player-track">
                      <span class="player-status">${correctAnswer.artist}</span>
                    </div>
                  </div>
                </div>
                <form class="main-list">
                  ${variantsAnswers(answerArr)}
                </form>
              </div>
            </section>`;
  }

  bind() {
    [...this.element.querySelectorAll(`.main-answer`)].forEach((answer) => {
      answer.onclick = (evt) => {
        evt.preventDefault();

        this.onAnswerClick();
      };
    });


  }
}
