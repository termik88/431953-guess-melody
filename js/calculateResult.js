export default (answers) => {

  const POINTS = {
/*    LOSS: -1,*/
    FAST_ANSWER: 2,
    SLOW_ANSWER: 1,
    INCORRECT_ANSWER: -2
  };
  /*const COUNT_ANSWER = 3;*/
  const TIME_FAST_ANSWER = 30;
  let fastAnswerCount = 0;

  const getPoints = (answer) => {
    if (!answer.isCorrect) {
      return POINTS.INCORRECT_ANSWER;
    }
    if (answer.time < TIME_FAST_ANSWER) {
      fastAnswerCount++;
      return POINTS.FAST_ANSWER;
    }
    return POINTS.SLOW_ANSWER;
  };
/*
  if (answers.length < COUNT_ANSWER) {
    return POINTS.LOSS;
  }
*/
  return {
    'result': answers.reduce((result, answer) => result + getPoints(answer), 0),
    'time': answers.reduce((result, answer) => result + answer.time, 0),
    'note': answers[answers.length - 1].note,
    'numberFastAnswer': fastAnswerCount
  };
};
