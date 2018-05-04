import AbstractView from '../abstractView';
import HeaderView from "./header-view";
import PlayerView from "./player-view";

export default class GenreView extends AbstractView {
  constructor(model) {
    super();
    this.model = model;
    this.question = model.getQuestion;
    this.header = new HeaderView(this.model.getGameSettings);
  }

  get template() {
    return `<section class="main main--level main--level-genre">
              ${this.header.template}      
              <div class="main-wrap">
                <h2 class="title">${this.question.question}</h2>
                <form class="genre">
                  ${this.getVariantsAnswers(this.question.answers)}
                  <button class="genre-answer-send" type="submit">Ответить</button>
                </form>
              </div>
            </section>`;
  }

  getVariantsAnswers(answerArr) {
    return answerArr.map((answer, i) => `<div class="genre-answer">
                                          ${(new PlayerView(answer.src)).template}
                                          <input type="checkbox" name="answer" value="${answer.genre}" id="a-${i}">
                                          <label class="genre-answer-check" for="a-${i}"></label>
                                        </div>`).join(``);
  }

  bind() {
    this.element.querySelector(`.main-wrap`).addEventListener(`click`, (evt) => this.onPlayClick(evt));

    const resultButton = this.element.querySelector(`.genre-answer-send`);
    const answersButton = this.element.querySelectorAll(`input[name=answer]`);
    let isCorrect;

    [...answersButton].forEach((answerButton) => {
      answerButton.addEventListener(`change`, () => {
        const isAnswerButtonChecked = [...answersButton].some((item) => item.checked);
        resultButton.disabled = !isAnswerButtonChecked;
      });
    });

    resultButton.addEventListener(`click`, (evt) => {
      const numberAnswers = [...answersButton].filter((item) => item.value === `val-true`);
      const answersButtonChecked = [...answersButton].filter((item) => item.checked);
      if (numberAnswers.length === answersButtonChecked.length) {
        isCorrect = answersButtonChecked.every((item) => item.value === `val-true`);
      } else {
        isCorrect = false;
      }
      evt.preventDefault();

      this.onAnswerClick1(isCorrect);
    });
  }


  resetForm() {
    this.element.querySelector(`.genre`).reset();
  }

  onAnswersChange() {}

  onAnswerClick1() {}

  onPlayClick() {}
}
