import {assert} from 'chai';

const getRandomTime = (min = 0, max = 30) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const testArrayAnswersFastRun = [
  {isCorrect:	true,	time:	getRandomTime()},
  {isCorrect:	true,	time:	getRandomTime()},
  {isCorrect:	true,	time:	getRandomTime()},
  {isCorrect:	true,	time:	getRandomTime()},
  {isCorrect:	true,	time:	getRandomTime()},
  {isCorrect:	true,	time:	getRandomTime()},
  {isCorrect:	true,	time:	getRandomTime()},
  {isCorrect:	true,	time:	getRandomTime()},
  {isCorrect:	true,	time:	getRandomTime()},
  {isCorrect:	true,	time:	getRandomTime()}
];

const testArrayAnswersSlowRun = [
  {isCorrect:	true,	time:	getRandomTime(31, 50)},
  {isCorrect:	true,	time:	getRandomTime(31, 50)},
  {isCorrect:	true,	time:	getRandomTime(31, 50)},
  {isCorrect:	true,	time:	getRandomTime()},
  {isCorrect:	true,	time:	getRandomTime()},
  {isCorrect:	true,	time:	getRandomTime()},
  {isCorrect:	true,	time:	getRandomTime()},
  {isCorrect:	true,	time:	getRandomTime()},
  {isCorrect:	true,	time:	getRandomTime()},
  {isCorrect:	true,	time:	getRandomTime()}
];

const testArrayAnswersNine = [
  {isCorrect:	true,	time:	getRandomTime(31, 50)},
  {isCorrect:	true,	time:	getRandomTime(31, 50)},
  {isCorrect:	true,	time:	getRandomTime(31, 50)},
  {isCorrect:	true,	time:	getRandomTime()},
  {isCorrect:	true,	time:	getRandomTime()},
  {isCorrect:	true,	time:	getRandomTime()},
  {isCorrect:	true,	time:	getRandomTime()},
  {isCorrect:	true,	time:	getRandomTime()},
  {isCorrect:	true,	time:	getRandomTime()}
];

const getPoints = (answer) => {
  if (!answer.isCorrect) {
    return -2;
  }
  if (answer.time < 30) {
    return 2;
  }
  return 1;
};


const calculateResult = (answers) => {
  if (answers.length < 10) {
    return -1;
  }

  /*
  const timeUp = answers.reduce((sum, {time}) => sum + time, 0);
  */

  let result = 0;
  answers.forEach((answer) => {
    result = result + getPoints(answer);
  });

  return result;
};


describe(`Calculate Result Game`, () => {
  it(`Игрок ответил меньше, чем на 10 вопросов`, () => {
    assert.equal(calculateResult(testArrayAnswersNine), -1);
  });
  it(`Посчет очков быстрой игры и с ответами на все вопросы`, () => {
    assert.equal(calculateResult(testArrayAnswersFastRun), 20);
  });
  it(`Посчет очков медленной игры и с ответами на все вопросы`, () => {
    assert.equal(calculateResult(testArrayAnswersSlowRun), 17);
  });
});
