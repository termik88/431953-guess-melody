import {changeView} from './util';

import WelcomePresenter from './presenters/welcome-presenter';
import WelcomeModel from './models/welcome-model';

import GamePresenter from './presenters/game-presenter';
import GameModel from './models/game-model';

import ResultPresenter from './presenters/result-presenter';

export default class Application {
  static showWelcome() {
    const welcome = new WelcomePresenter(new WelcomeModel());
    changeView(welcome.screen);
  }

  static showGame(model = new GameModel()) {
    const game = new GamePresenter(model);
    changeView(game.screen);
  }

  static showStats(model) {
    const result = new ResultPresenter(model);
    changeView(result.screen);
  }
}
