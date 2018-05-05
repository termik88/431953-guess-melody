import {changeView} from './util';

import WelcomePresenter from './presenters/welcome-presenter';
import WelcomeModel from './models/welcome-model';

import GamePresenter from './presenters/game-presenter';
import GameModel from './models/game-model';

import ResultPresenter from './presenters/result-presenter';

import Loader from './loader';
import SplashScreen from './splach/splash-screen';
import ErrorView from "./view/error-view";

let questData;

export default class Application {
  static start() {
    const splash = new SplashScreen();
    changeView(splash.element);
    splash.start();
    Loader.loadData().
        then(Application.showWelcome).
        catch(Application.showError).
        then(() => splash.stop());
  }

  static showWelcome(data) {
    questData = data;
    const welcome = new WelcomePresenter(new WelcomeModel());
    changeView(welcome.screen);
  }

  static showGame(model) {
    const game = new GamePresenter(model || new GameModel(questData));
    changeView(game.screen);
  }

  static showStats(model) {
    const result = new ResultPresenter(model);

    const splash = new SplashScreen();
    splash.start();

    Loader.saveResults(model.result).
        then(() => Loader.loadResults()).
        then((data) => {
          result.setStatistics(data);
          changeView(result.screen);
        });
  }

  static showError(error) {
    const errorView = new ErrorView(error);
    changeView(errorView.element);
  }
}
