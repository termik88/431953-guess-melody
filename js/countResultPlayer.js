import {statistics} from './data/data';
import resultOverTime from './templates/resultIsOverTime';
import resultBad from './templates/resultBad';
import resultGood from "./templates/resultGood";

export default (playerResult) => {

  const playerStatistics = Object.assign({}, playerResult, {current: true});
  const generalStatistics = [...statistics, playerStatistics].sort((a, b) => b.result - a.result);
  const positionCurrentPlayer = generalStatistics.findIndex((item) => item.current) + 1;
  const successRate = (generalStatistics.length - positionCurrentPlayer) / generalStatistics.length * 100;

/*  if (!playerStatistics.time) {
    return resultOverTime();
  }*/

  if (300 - playerStatistics.time <= 0) {
    return resultOverTime();
  }

  if (!playerStatistics.note) {
    return resultBad();
  }

  return resultGood({
    'playerResult': playerResult.result,
    'numberFastAnswer': playerResult.numberFastAnswer,
    'positionStatistic': positionCurrentPlayer,
    'generalStatistic': generalStatistics.length,
    'successRate': successRate
  });
};
