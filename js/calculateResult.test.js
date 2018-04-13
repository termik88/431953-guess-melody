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

const testArrayAnswersVerySlowRun = [
  {isCorrect:	true,	time:	getRandomTime(31, 50)},
  {isCorrect:	true,	time:	getRandomTime(31, 50)},
  {isCorrect:	true,	time:	getRandomTime(31, 50)},
  {isCorrect:	true,	time:	getRandomTime(31, 50)},
  {isCorrect:	true,	time:	getRandomTime(31, 50)},
  {isCorrect:	true,	time:	getRandomTime(31, 50)},
  {isCorrect:	true,	time:	getRandomTime(31, 50)},
  {isCorrect:	true,	time:	getRandomTime(31, 50)},
  {isCorrect:	true,	time:	getRandomTime(31, 50)},
  {isCorrect:	true,	time:	getRandomTime(31, 50)}
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
/*
const testArrayAnswersTimeUp = [
  {isCorrect:	true,	time:	getRandomTime(61, 150)},
  {isCorrect:	true,	time:	getRandomTime(31, 150)},
  {isCorrect:	true,	time:	getRandomTime(31, 150)},
  {isCorrect:	true,	time:	getRandomTime(31, 150)},
  {isCorrect:	true,	time:	getRandomTime(61, 150)},
  {isCorrect:	true,	time:	getRandomTime(61, 150)},
  {isCorrect:	true,	time:	getRandomTime(61, 150)},
  {isCorrect:	true,	time:	getRandomTime(31, 150)},
  {isCorrect:	true,	time:	getRandomTime(31, 150)},
  {isCorrect:	true,	time:	getRandomTime(31, 150)}
];
*/
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

  if (timeUp > 300) {
    return -1;
  }
*/
  return answers.reduce((result, answer) => result + getPoints(answer), 0);
};

describe(`Calculate Result Game`, () => {
  it(`Игрок ответил меньше, чем на 10 вопросов`, () => {
    assert.equal(calculateResult(testArrayAnswersNine), -1);
  });
  it(`Посчет очков быстрой игры и с ответами на все вопросы`, () => {
    assert.equal(calculateResult(testArrayAnswersFastRun), 20);
  });
  it(`Посчет очков игры с несколькими медленными ответами и с ответами на все вопросы`, () => {
    assert.equal(calculateResult(testArrayAnswersSlowRun), 17);
  });
  it(`Посчет очков медленной игры и с ответами на все вопросы`, () => {
    assert.equal(calculateResult(testArrayAnswersVerySlowRun), 10);
  });
  /*
  it(`Законилось время`, () => {
    assert.equal(calculateResult(testArrayAnswersTimeUp), -1);
  });
  */
});
