import {stats} from "../data/game-data";

export default class WelcomeModel {
  constructor() {
    this.startSettings = stats;
  }

  get lives() {
    return this.startSettings.numberLives;
  }

  get time() {
    return this.startSettings.time / 60;
  }
}
