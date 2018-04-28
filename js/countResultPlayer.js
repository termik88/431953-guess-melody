import data from './data/data';
import ResultOverTime from './view/resultIsOverTime-view';
import ResultBad from './view/resultBad-view';
import ResultGood from "./view/resultGood-view";

export default (playerResult) => {

  const playerStatistics = Object.assign({}, playerResult, {current: true});
  const generalStatistics = [...data.statistics, playerStatistics].sort((a, b) => b.result - a.result);
  const positionCurrentPlayer = generalStatistics.findIndex((item) => item.current) + 1;
  const successRate = (generalStatistics.length - positionCurrentPlayer) / generalStatistics.length * 100;

  if (300 - playerStatistics.time <= 0) {
    return new ResultOverTime();
  }

  if (!playerStatistics.note) {
    return new ResultBad();
  }

  return new ResultGood({
    'playerResult': playerResult.result,
    'numberFastAnswer': playerResult.numberFastAnswer,
    'positionStatistic': positionCurrentPlayer,
    'generalStatistic': generalStatistics.length,
    'successRate': successRate
  });
};
