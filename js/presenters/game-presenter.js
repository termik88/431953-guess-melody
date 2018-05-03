import Application from '../application';
import ArtistView from '../view/artist-view';
import GenreView from '../view/genre-view';

export default class GamePresenter {
  constructor(model) {
    this.model = model;
    this.question = model.getQuestion;
    this.view = (this.question.type === `artist` ? new ArtistView(this.model) : new GenreView(this.model));

    this.view.onAnswerClick = (evt) => {
      const element = evt.target;

      if (element.tagName.toLowerCase() === `img`) {
        Application.showWelcome();
      }
    };

    this.view.controlPlayer();
    this.view.onPlayClick = (evt) => {
      evt.preventDefault();

      const element = evt.currentTarget;
      const audio = evt.currentTarget.parentNode.querySelector(`audio`);
      if (element.classList.contains(`player-control--pause`)) {
        element.classList.remove(`player-control--pause`);
        audio.pause();
      } else {
        element.classList.add(`player-control--pause`);
        audio.play();
      }
    };
  }









  get screen() {
    return this.view.element;
  }
}
