import Application from '../application';
import ArtistView from '../view/artist-view';
import GenreView from '../view/genre-view';

export default class GamePresenter {
  constructor(model) {
    this.model = model;
    this.stats = this.model.stats;
    this.question = this.model.getQuestion;
    this.view = (this.question.type === `artist` ? new ArtistView(this.model) : new GenreView(this.model));

    this.view.onPlayClick = (evt) => {
      evt.preventDefault();

      const element = evt.target;
      if (element.classList.contains(`player-control`)) {
        const audio = evt.currentTarget.parentNode.querySelector(`audio`);
        if (element.classList.contains(`player-control--pause`)) {
          element.classList.remove(`player-control--pause`);
          audio.pause();
        } else {
          element.classList.add(`player-control--pause`);
          audio.play();
        }
      }
    };

    this.view.onAnswerClick = (evt) => {
      evt.preventDefault();
      const element = evt.target;

      if (element.tagName.toLowerCase() === `img`) {
        const isCorrect = (element.parentNode.parentNode.querySelector(`input`).value === `val-true`);

        if (!isCorrect) {
          this.model.loseLife();
        }

        this.stats.answers.push({'isCorrect': isCorrect, 'time': 25, 'note': this.stats.numberLives});


        if (this.stats.numberLives === 0 || this.stats.answers.length === this.stats.maxLevel) {
          alert(`!!!!!!!!!`);
        } else {
          Application.showGame(this.model);
        }
      }
    };

    this.view.onAnswerClick1 = (isCorrect) => {
      if (!isCorrect) {
        this.model.loseLife();
      }

      this.stats.answers.push({'isCorrect': isCorrect, 'time': 25, 'note': this.stats.numberLives});
      this.view.resetForm();

      if (this.stats.numberLives === 0 || this.stats.answers.length === this.stats.maxLevel) {
        alert(`!!!!!!!!!`);
      } else {
        Application.showGame(this.model);
      }
    };

  }









  get screen() {
    return this.view.element;
  }
}
