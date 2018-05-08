export const initialState = Object.freeze({
  MAX_LEVEL: 10,
  NUMBER_LIVES: 3,
  TIME: 50,
  ANSWERS: [],
  RESULT: ``
});


export let stats = {
  maxLevel: initialState.MAX_LEVEL,
  numberLives: initialState.NUMBER_LIVES,
  time: initialState.TIME,
  answers: initialState.ANSWERS,
  result: initialState.RESULT
};

export const questionType = {
  GENRE: `genre`,
  ARTIST: `artist`
};
