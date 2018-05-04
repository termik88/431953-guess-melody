/*
import {assert} from 'chai';
import countResultPlayer from './countResultPlayer';

const statistics = [
  {points: 18, timeLeft: 30, note: 2},
  {points: 17, timeLeft: 0, note: 1},
  {points: 10, timeLeft: 2, note: 0},
  {points: 20, timeLeft: 100, note: 2}];


const playerResult = {
  points: 19,
  timeLeft: 1,
  note: 2,
};

describe(`Функция вывода результата игрока`, () => {
  const testPlyaeResult = Object.assign({}, playerResult);
  it(`Игрок выйграл`, () => {
    assert.equal(countResultPlayer(statistics, testPlyaeResult), `Вы заняли 2 место из 5 игроков. Это лучше, чем у 60% игроков.`);
  });
  it(`У игрока закончилось время`, () => {
    testPlyaeResult.timeLeft = 0;
    assert.equal(countResultPlayer(statistics, testPlyaeResult), `«Время вышло! Вы не успели отгадать все мелодии»`);
  });
  it(`У игрока закончилось попытки`, () => {
    testPlyaeResult.timeLeft = 4;
    testPlyaeResult.note = 0;
    assert.equal(countResultPlayer(statistics, testPlyaeResult), `«У вас закончились все попытки. Ничего, повезёт в следующий раз!»`);
  });
});
*/
