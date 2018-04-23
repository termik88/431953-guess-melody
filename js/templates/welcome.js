import {getElementFromTemplate, screenChange} from '../util';
import levelArtist from './levelArtist';
import {welcomeDate} from '../data/data';

export default () => {
  const initialState = {
    level: 0,
    lives: 3
  };

  let totalAnswers = [];

  const template = `<section class="main main--welcome">
                      <section class="logo" title="Угадай мелодию"><h1>${welcomeDate.titleGame}</h1></section>
                      <button class="main-play">${welcomeDate.titleButton}</button>
                      <h2 class="title main-title">${welcomeDate.titleScreen}</h2>
                      <p class="text main-text">
                        ${welcomeDate.text}
                      </p>
                    </section>`;

  const screenWelcome = getElementFromTemplate(template);

  const playButton = screenWelcome.querySelector(`.main-play`);
  playButton.addEventListener(`click`, () => screenChange(levelArtist(initialState, totalAnswers)));

  return screenWelcome;
};

