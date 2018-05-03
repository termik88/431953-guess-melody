import {changeView} from './util';

import WelcomePresenter from './presenters/welcome-presenter';
import WelcomeModel from './models/welcome-model';

import GamePresenter from './presenters/game-presenter';
import GameModel from './models/game-model';

export default class Application {
  static showWelcome() {
    const welcome = new WelcomePresenter(new WelcomeModel());
    changeView(welcome.screen);
  }

  static showGame() {
    const game = new GamePresenter(new GameModel());
    changeView(game.screen);
  }

  static showStats() {
    const result = new ResultPresenter(model);
    changeView(result.element);
  }
}
