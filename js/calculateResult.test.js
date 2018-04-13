import {assert} from 'chai';
import {calculateResult} from './calculateResult';

const getRandomTime = (min = 0, max = 30) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

describe(`Calculate Result Game`, () => {
  const testArrayAnswersFastRun = new Array(10).fill({isCorrect: true, time: getRandomTime()});

  describe(``, () => {
    beforeEach(() => testArrayAnswersFastRun.splice(9, 1));
    it(`Игрок ответил меньше, чем на 10 вопросов`, () => {
      assert.equal(calculateResult(testArrayAnswersFastRun), -1);
    });
  });

  it(`Посчет очков быстрой игры и с ответами на все вопросы`, () => {
    assert.equal(calculateResult(testArrayAnswersFastRun), 20);
  });

  describe(``, () => {
    beforeEach(() => testArrayAnswersFastRun.splice(9, 9, {isCorrect: true, time: getRandomTime(31, 50)}));
    it(`Посчет очков игры с одним несколькими медленными ответами и с ответами на все вопросы`, () => {
      assert.equal(calculateResult(testArrayAnswersFastRun), 19);
    });
  });

  describe(``, () => {
    beforeEach(() => {
      testArrayAnswersFastRun.fill({isCorrect: true, time: getRandomTime(31, 50)});
    });
    it(`Посчет очков медленной игры и с ответами на все вопросы`, () => {
      assert.equal(calculateResult(testArrayAnswersFastRun), 10);
    });
  });
});
