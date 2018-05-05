import calculateResult from '../calculateResult';
import {INITIAL_STATE, stats} from '../data/game-data';

export default class GameModel {
  constructor(questions) {
    this.stats = stats;
    this.initialState = INITIAL_STATE;
    this._questions = questions;
    this.countQuestion = 0;
  }

  renderQuestion() {
    this._question = this._questions[this.countQuestion];
    this.countQuestion++;
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

  outResult() {
    this.result = calculateResult(this.stats.answers);
  }

  get getResult() {
    return this.stats.result;
  }

  restartGame() {
    this.stats = {
      maxLevel: this.initialState.MAX_LEVEL,
      numberLives: this.initialState.NUMBER_LIVES,
      time: this.initialState.TIME,
      answers: this.initialState.ANSWERS,
      result: this.initialState.RESULT
    };

    this.countQuestion = 0;
  }

}

