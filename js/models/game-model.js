import {getRandomIndex} from '../util';
import {GAME_SETTINGS} from '../data/game-data';
import questions from '../data/questions';

export default class GameModel {
  constructor() {
    this._gameSetting = GAME_SETTINGS;
    this._questions = questions;
    this._question = this.renderQuestion();
  }

  renderQuestion() {
    return this._questions[getRandomIndex(this._questions.length)];
  }

  get getQuestion() {
    return this._question;
  }

  get getGameSettings() {
    return this._gameSetting;
  }

}

