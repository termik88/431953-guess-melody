export const initialState = {
  level: 0,
  lives: 3,
  time: 300,
  gameType: `artist`
};

export const welcomeDate = {
  titleGame: `Угадай мелодию`,
  titleButton: `Начать игру`,
  titleScreen: `Правила игры`,
  text: `Правила просты&nbsp;— за&nbsp;${initialState.time / 60} минут ответить на все вопросы.<br>
      Ошибиться можно ${initialState.lives} раза.<br>
      Удачи!`
};

export const statistics = [
  {result: 18, time: 30, note: 2},
  {result: 17, time: 0, note: 1},
  {result: 10, time: 2, note: 0},
  {result: 20, time: 100, note: 2}];
