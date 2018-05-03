import AbstractView from '../abstractView';

export default class WelcomeView extends AbstractView {
  constructor(state) {
    super();
    this.lives = state.lives;
    this.time = state.time;
  }

  get template() {
    return `<section class="main main--welcome">
              <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
              <button class="main-play">Начать игру</button>
              <h2 class="title main-title">Правила игры</h2>
              <p class="text main-text">
                Правила просты&nbsp;— за&nbsp;${this.time} минут ответить на все вопросы.<br>
                Ошибиться можно ${this.lives} раза.<br>
                Удачи!
              </p>
            </section>`;
  }

  bind() {
    this.element.querySelector(`.main-play`).addEventListener(`click`, (evt) => this.onPlayClick(evt));
  }

  onPlayClick() {}
}
