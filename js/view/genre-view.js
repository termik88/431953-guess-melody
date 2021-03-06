import AbstractView from './abstractView';
import PlayerView from "./player-view";

export default class GenreView extends AbstractView {
  constructor(model) {
    super();
    this.model = model;
    this.question = model.currentQuestion;
  }

  get template() {
    return `<section class="main main--level main--level-genre">
              ${this.model.timer.template}
              ${this.model.mistakes.template}      
              <div class="main-wrap">
                <h2 class="title">${this.question.question}</h2>
                <form class="genre">
                  ${this.getVariantsAnswers(this.question.answers)}
                  <button class="genre-answer-send" type="submit" disabled>Ответить</button>
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
    const resultButton = this.element.querySelector(`.genre-answer-send`);
    const answersButton = this.element.querySelectorAll(`input[name=answer]`);
    let isCorrect;

    [...answersButton].forEach((answerButton) => {
      answerButton.addEventListener(`change`, (evt) => {
        evt.preventDefault();

        const isAnswerButtonChecked = [...answersButton].some((item) => item.checked);
        resultButton.disabled = !isAnswerButtonChecked;
      });
    });

    resultButton.addEventListener(`click`, (evt) => {
      const numberAnswers = [...answersButton].filter((item) => item.value === this.question.genre);
      const answersButtonChecked = [...answersButton].filter((item) => item.checked);
      if (numberAnswers.length === answersButtonChecked.length) {
        isCorrect = answersButtonChecked.every((item) => item.value === this.question.genre);
      } else {
        isCorrect = false;
      }
      evt.preventDefault();

      this.onAnswerClickGender(isCorrect);
    });

    [...this.element.querySelectorAll(`.player-control`)].forEach((playerControlButton) => {
      playerControlButton.addEventListener(`click`, (evt) => {
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
    });
  }


  onAnswerClickGender() {}
}
