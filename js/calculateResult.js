export default (answers) => {
  const POINTS = {
    LOSS: -1,
    FAST_ANSWER: 2,
    SLOW_ANSWER: 1,
    INCORRECT_ANSWER: -2
  };
  const COUNT_ANSWER = 10;
  const TIME_FAST_ANSWER = 30;

  const getPoints = (answer) => {
    if (!answer.isCorrect) {
      return POINTS.INCORRECT_ANSWER;
    }
    if (answer.time < TIME_FAST_ANSWER) {
      return POINTS.FAST_ANSWER;
    }
    return POINTS.SLOW_ANSWER;
  };

  if (answers.length < COUNT_ANSWER) {
    return POINTS.LOSS;
  }

  return answers.reduce((result, answer) => result + getPoints(answer), 0);
};
