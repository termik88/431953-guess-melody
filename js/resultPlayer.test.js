import {assert} from 'chai';
/*
const resultsOtherPlayers = [
  {playerName: `gufi`, result: 18},
  {playerName: `Vasa`, result: 17},
  {playerName: `Obama`, result: 10},
  {playerName: `Sima`, result: 20}];
*/
const plyaeResult = {
  result: 19,
  timeLeft: 1
};

const countResultPlayer = (result) => {
  if (result.timeLeft === 0) {
    return `«Время вышло! Вы не успели отгадать все мелодии»`;
  }

  return `a`;
};

describe(`Функция вывода результата игрока`, () => {

  describe(`Тест на время`, () => {
    const testPlyaeResult = Object.assign({}, plyaeResult);
    afterEach(() => {
      testPlyaeResult.timeLeft--;
    });
    it(`У игрока осталось время время`, () => {
      assert.equal(countResultPlayer(testPlyaeResult), `a`);
    });
    it(`У игрока закончилось время`, () => {
      assert.equal(countResultPlayer(testPlyaeResult), `«Время вышло! Вы не успели отгадать все мелодии»`);
    });
  });
});
