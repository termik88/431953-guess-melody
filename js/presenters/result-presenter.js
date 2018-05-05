import Application from '../application';
import ResultView from '../view/result-view';

const countStatistic = (playerResult, statistics) => {

  const playerStatistics = Object.assign({}, playerResult, {current: true});
  const generalStatistics = [...statistics, playerStatistics].sort((a, b) => b.result - a.result);
  const positionCurrentPlayer = generalStatistics.findIndex((item) => item.current) + 1;
  const successRate = Math.trunc((generalStatistics.length - positionCurrentPlayer) / generalStatistics.length * 100);

  if (300 - playerStatistics.time <= 0) {
    return {
      title: `Какая жалость!`,
      textScore: ``,
      textRang: `Время вышло!<br>Вы&nbsp;не&nbsp;успели отгадать все мелодии`,
      action: `Попробовать ещё раз`
    };
  }

  if (!playerStatistics.note) {
    return {
      title: `Какая жалость!`,
      textScore: ``,
      textRang: `У&nbsp;вас закончились все попытки.<br>Ничего, повезёт в&nbsp;следующий раз!`,
      action: `Попробовать ещё раз`
    };
  }

  return {
    title: `Вы настоящий меломан!`,
    textScore: `За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
              <br>вы&nbsp;набрали ${playerResult.result} баллов (${playerResult.numberFastAnswer} быстрых)
              <br>совершив 3 ошибки`,
    textRang: `Вы заняли ${positionCurrentPlayer} место из ${generalStatistics.length - 1}.
              Это&nbsp;лучше чем у&nbsp;${successRate}&nbsp;игроков`,
    action: `Сыграть ещё раз`
  };
};

export default class ResultPresenter {
  constructor(model) {
    this.model = model;
    this.model.statistics = [];
  }

  setStatistics(statisticsServer) {
    this.model.statistics = statisticsServer;
  }

  get screen() {
    this.view = new ResultView(countStatistic(this.model.result, this.model.statistics));

    this.view.onRestartGame = (evt) => {
      evt.preventDefault();

      this.model.restartGame();
      Application.showGame(this.model);
    };

    return this.view.element;
  }
}

