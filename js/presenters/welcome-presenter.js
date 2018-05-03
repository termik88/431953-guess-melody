import Application from '../application';
import WelcomeView from '../view/welcome-view';

export default class WelcomePresenter {
  constructor(model) {
    this.view = new WelcomeView(model);

    this.view.onPlayClick = (evt) => {
      evt.preventDefault();
      Application.showGame();
    };
  }

  get screen() {
    return this.view.element;
  }
}
