import {getCorrectAnswer, getRandomAnswers} from '../util';
import questions from './questions';
const initialState = {
  lives: 3,
  time: 300,
  maxNumberGames: 10
};

let state = {
  lives: ``,
  time: ``,
  maxNumberGames: ``
};

let totalAnswers = [];

const welcomeData = {
  titleGame: `Угадай мелодию`,
  titleButton: `Начать игру`,
  titleScreen: `Правила игры`,
  text: `Правила просты&nbsp;— за&nbsp;${initialState.time / 60} минут ответить на все вопросы.<br>
    Ошибиться можно ${initialState.lives} раза.<br>
    Удачи!`
};

let answers = {
  variants: ``,
  correct: ``,

  set setType(typeGame) {
    this.variants = getRandomAnswers(questions, typeGame);
    this.correct = getCorrectAnswer(this.variants);
  }
};

const statistics = [
  {result: 18, time: 30, note: 2},
  {result: 17, time: 0, note: 1},
  {result: 10, time: 2, note: 0},
  {result: 20, time: 100, note: 2}];

export default {
  initialState,
  state,
  totalAnswers,
  welcomeData,
  answers,
  statistics
};

