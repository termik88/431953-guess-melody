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

      if (element.tagNames.toLowerCase() === `img`) {
        Application.showWelcome();
      }
    };

  }









  get screen() {
    return this.view.element;
  }
}
