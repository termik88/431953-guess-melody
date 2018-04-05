import {getElementFromTemplate, screenChange} from '../util';
import levelArtist from './levelArtist';

const template = `
  <section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
      Ошибиться можно 3 раза.<br>
      Удачи!
    </p>
  </section>`;

const screenWelcome = getElementFromTemplate(template);
const playButton = screenWelcome.querySelector(`.main-play`);
playButton.addEventListener(`click`, () => screenChange(levelArtist));

export default screenWelcome;

