import {getRandomIndex} from '../util';
import {stats} from '../data/game-data';
import questions from '../data/questions';

export default class GameModel {
  constructor() {
    this.stats = stats;
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
    return this.stats;
  }

  loseLife() {
    this.stats.numberLives--;
  }

}

