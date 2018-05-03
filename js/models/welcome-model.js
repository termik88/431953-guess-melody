import {GAME_SETTINGS} from "../data/game-data";

export default class WelcomeModel {
  constructor() {
    this.startSettings = GAME_SETTINGS;
  }

  get lives() {
    return this.startSettings.NUMBER_LIVES;
  }

  get time() {
    return this.startSettings.TIME / 60;
  }
}
