import {statistics} from './data/game-data';

export default (playerResult) => {

  const playerStatistics = Object.assign({}, playerResult, {current: true});
  const generalStatistics = [...statistics, playerStatistics].sort((a, b) => b.result - a.result);
  const positionCurrentPlayer = generalStatistics.findIndex((item) => item.current) + 1;
  const successRate = (generalStatistics.length - positionCurrentPlayer) / generalStatistics.length * 100;

  if (300 - playerStatistics.time <= 0) {
    return {'title': `TIME_OVER`};
  }

  if (!playerStatistics.note) {
    return {'title': `GAME_OVER`};
  }


  return {'title': `SUCCESS`, 'resultObj': {
    'playerResult': playerResult.result,
    'numberFastAnswer': playerResult.numberFastAnswer,
    'positionStatistic': positionCurrentPlayer,
    'generalStatistic': generalStatistics.length,
    'successRate': successRate
  }};
};
