import {getRandomIndex} from '../util';
import {GAME_SETTINGS} from '../data/game-data';
import questions from '../data/questions';

export default class GameModel {
  constructor() {
    this._gameSetting = GAME_SETTINGS;
    this._questions = questions;
  }

  get gameSettings() {
    return this._gameSetting;
  }

  get getQuestion() {
    return this._questions[getRandomIndex(this._questions)];
  }
}

