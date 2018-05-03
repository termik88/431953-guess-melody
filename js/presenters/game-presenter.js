import Application from '../application';
import ArtistView from '../view/artist-view';
import GenreView from '../view/genre-view';

export default class GamePresenter {
  constructor(model) {
    this.model = model;
    this.question = model.getQuestion;
    this.view = new ArtistView(this.model);
  }








  get screen() {
    return this.view.element;
  }
}
