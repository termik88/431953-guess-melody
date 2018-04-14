export default (statistics, playerResult) => {

  const playerStatistics = Object.assign({}, playerResult, {current: true});
  const generalStatistics = [...statistics, playerStatistics].sort((a, b) => b.points - a.points);
  const positionCurrentPlayer = generalStatistics.findIndex((item) => item.current) + 1;
  const successRate = (generalStatistics.length - positionCurrentPlayer) / generalStatistics.length * 100;

  if (!playerStatistics.timeLeft) {
    return `«Время вышло! Вы не успели отгадать все мелодии»`;
  }
  if (!playerStatistics.note) {
    return `«У вас закончились все попытки. Ничего, повезёт в следующий раз!»`;
  }

  return `Вы заняли ${positionCurrentPlayer} место из ${generalStatistics.length} игроков. Это лучше, чем у ${successRate}% игроков.`;
};
