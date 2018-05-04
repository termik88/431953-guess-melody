import Application from '../application';
import ResultView from '../view/result-view';

export default class ResultPresenter {
  constructor(model) {
    this.model = model;
    this.view = new ResultView(this.model);

    this.view.onRestartGame = (evt) => {
      evt.preventDefault();

      this.model.restartGame();
      Application.showGame(model);
    };
  }

  get screen() {
    return this.view.element;
  }
}

