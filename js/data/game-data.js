export const INITIAL_STATE = {
  MAX_LEVEL: 10,
  NUMBER_LIVES: 3,
  TIME: 300,
  ANSWERS: [],
  RESULT: ``
};


export let stats = {
  maxLevel: INITIAL_STATE.MAX_LEVEL,
  numberLives: INITIAL_STATE.NUMBER_LIVES,
  time: INITIAL_STATE.TIME,
  answers: INITIAL_STATE.ANSWERS,
  result: INITIAL_STATE.RESULT
};
/*
тест*/
export const statistics = [
  {result: 18, time: 30, note: 2},
  {result: 17, time: 0, note: 1},
  {result: 10, time: 2, note: 0},
  {result: 20, time: 100, note: 2}];

/*
export let resultText = {
  SUCCESS: (arr) => {
    return {
      title: `Вы настоящий меломан!`,
      text: `Вы заняли ${arr.positionStatistic} место из ${arr.generalStatistic}.
              Это&nbsp;лучше чем у&nbsp;${arr.successRate}&nbsp;игроков`,
      action: `Сыграть ещё раз`
    };
  },
  GAME_OVER: () => {
    return {
      title: `Какая жалость!`,
      text: `У&nbsp;вас закончились все попытки.<br>Ничего, повезёт в&nbsp;следующий раз!`,
      action: `Попробовать ещё раз`
    };
  },
  TIME_OVER: () => {
    return {
      title: `Какая жалость!`,
      text: `Время вышло!<br>Вы&nbsp;не&nbsp;успели отгадать все мелодии`,
      action: `Попробовать ещё раз`
    };
  }
};
*/
