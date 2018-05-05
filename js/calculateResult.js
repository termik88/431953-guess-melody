export default (answers) => {

  const points = {
    FAST_ANSWER: 2,
    SLOW_ANSWER: 1,
    INCORRECT_ANSWER: -2
  };

  const TIME_FAST_ANSWER = 30;
  let fastAnswerCount = 0;

  const getPoints = (answer) => {
    if (!answer.isCorrect) {
      return points.INCORRECT_ANSWER;
    }
    if (answer.time < TIME_FAST_ANSWER) {
      fastAnswerCount++;
      return points.FAST_ANSWER;
    }
    return points.SLOW_ANSWER;
  };

  if (answers.length === 3) {
    return {
      'result': -1,
      'time': answers.reduce((result, answer) => result + answer.time, 0),
      'note': answers[answers.length - 1].note,
      'numberFastAnswer': fastAnswerCount
    };
  }

  return {
    'result': answers.reduce((result, answer) => result + getPoints(answer), 0),
    'time': answers.reduce((result, answer) => result + answer.time, 0),
    'note': answers[answers.length - 1].note,
    'numberFastAnswer': fastAnswerCount
  };
};
