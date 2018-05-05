import calculateResult from '../calculateResult';
import countResultPlayer from '../countResultPlayer';
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
    const {title, resultObj = ``} = countResultPlayer(calculateResult(this.stats.answers));
    if (title === `SUCCESS`) {
      this.stats.result = {
        title: `Вы настоящий меломан!`,
        textScore: `За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
              <br>вы&nbsp;набрали ${resultObj.playerResult} баллов (${resultObj.numberFastAnswer} быстрых)
              <br>совершив 3 ошибки`,
        textRang: `Вы заняли ${resultObj.positionStatistic} место из ${resultObj.generalStatistic}.
              Это&nbsp;лучше чем у&nbsp;${resultObj.successRate}&nbsp;игроков`,
        action: `Сыграть ещё раз`
      };
    }
    if (title === `GAME_OVER`) {
      this.stats.result = {
        title: `Какая жалость!`,
        textScore: ``,
        textRang: `У&nbsp;вас закончились все попытки.<br>Ничего, повезёт в&nbsp;следующий раз!`,
        action: `Попробовать ещё раз`
      };
    }
    if (title === `TIME_OVER`) {
      this.stats.result = {
        title: `Какая жалость!`,
        textScore: ``,
        textRang: `Время вышло!<br>Вы&nbsp;не&nbsp;успели отгадать все мелодии`,
        action: `Попробовать ещё раз`
      };
    }
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

