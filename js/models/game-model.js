import calculateResult from '../calculate-result';
import {initialState, stats, questionType} from '../data/game-data';

export default class GameModel {
  constructor(questions) {
    this.stats = stats;
    this.initialState = initialState;
    this.questionType = questionType;
    this._questions = questions;
    this.countQuestion = 0;
    this.timerId = ``;
    this.time = 0;
  }

  renderQuestion() {
    this._question = this._questions[this.countQuestion];
    this.countQuestion++;
  }

  get currentQuestion() {
    return this._question;
  }

  get gameSettings() {
    return this.stats;
  }

  loseLife() {
    this.stats.numberLives--;
  }

  outResult() {
    this.result = calculateResult(this.stats.answers);
  }

  startTimer(funUpdate) {
    this.timerId = setInterval(() => {
      this.time++;
      this.stats.time--;
      funUpdate(this.stats.time);
      if (!this.stats.time) {
        clearInterval(this.timerId);
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timerId);
    this.time = 0;
    this.timerId = ``;
  }

  restartGame() {
    this.time = 0;
    this.stats = {
      maxLevel: this.initialState.MAX_LEVEL,
      numberLives: this.initialState.NUMBER_LIVES,
      time: this.initialState.TIME,
      answers: [],
      result: this.initialState.RESULT
    };

    this.countQuestion = 0;
  }

}

