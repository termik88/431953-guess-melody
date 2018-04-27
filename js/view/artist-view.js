import AbstractView from '../abstractView';
import header from "../templates/header";

export default class ArtistView extends AbstractView {
  constructor(data) {
    super();
    this._data = data;
  }

  get template() {
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
