export default () => {
  const initialState = {
    level: 0,
    lives: 3,
    time: 300,
    gameType: `artist`
  };

  let currrentStat = {

  };

  let totalAnswers = [];

  const welcomeDate = {
    titleGame: `Угадай мелодию`,
    titleButton: `Начать игру`,
    titleScreen: `Правила игры`,
    text: `Правила просты&nbsp;— за&nbsp;${initialState.time / 60} минут ответить на все вопросы.<br>
      Ошибиться можно ${initialState.lives} раза.<br>
      Удачи!`
  };

  const statistics = [
    {result: 18, time: 30, note: 2},
    {result: 17, time: 0, note: 1},
    {result: 10, time: 2, note: 0},
    {result: 20, time: 100, note: 2}];

  return {
    initialState,
    currrentStat,
    totalAnswers,
    welcomeDate,
    statistics
  };
};
