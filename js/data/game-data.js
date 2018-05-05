export const INITIAL_STATE = Object.freeze({
  MAX_LEVEL: 10,
  NUMBER_LIVES: 3,
  TIME: 300,
  ANSWERS: [],
  RESULT: ``
});


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
