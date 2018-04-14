import {assert} from 'chai';

const statistics = [
  {points: 18, timeLeft: 30, note: 2},
  {points: 17, timeLeft: 0, note: 1},
  {points: 10, timeLeft: 2, note: 0},
  {points: 20, timeLeft: 100, note: 2}];


const playerResult = {
  points: 19,
  timeLeft: 1,
  note: 2,
  current: true
};

const countResultPlayer = (result) => {
  if (result.timeLeft === 0) {
    return `«Время вышло! Вы не успели отгадать все мелодии»`;
  }
  if (result.note === 0) {
    return `«У вас закончились все попытки. Ничего, повезёт в следующий раз!»`;
  }

  const newStatistics = [...statistics, playerResult].sort((a, b) => b.points - a.points);
  const positionCurrentPlayer = newStatistics.findIndex((item) => item.current) + 1;
  const successRate = (newStatistics.length - positionCurrentPlayer) / newStatistics.length * 100;

  return `Вы заняли ${positionCurrentPlayer} место из ${newStatistics.length} игроков. Это лучше, чем у ${successRate}% игроков.`;
};

describe(`Функция вывода результата игрока`, () => {
  const testPlyaeResult = Object.assign({}, playerResult);
  it(`Игрок выйграл`, () => {
    assert.equal(countResultPlayer(testPlyaeResult), `Вы заняли 2 место из 5 игроков. Это лучше, чем у 60% игроков.`);
  });
  it(`У игрока закончилось время`, () => {
    testPlyaeResult.timeLeft = 0;
    assert.equal(countResultPlayer(testPlyaeResult), `«Время вышло! Вы не успели отгадать все мелодии»`);
  });
  it(`У игрока закончилось попытки`, () => {
    testPlyaeResult.timeLeft = 4;
    testPlyaeResult.note = 0;
    assert.equal(countResultPlayer(testPlyaeResult), `«У вас закончились все попытки. Ничего, повезёт в следующий раз!»`);
  });
});
