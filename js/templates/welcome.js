import {getElementFromTemplate, screenChange} from '../util';
import levelArtist from './levelArtist';
import {initialState} from '../data/data';

export default (data) => {
  const template = `<section class="main main--welcome">
                      <section class="logo" title="Угадай мелодию"><h1>${data.titleGame}</h1></section>
                      <button class="main-play">${data.titleButton}</button>
                      <h2 class="title main-title">${data.titleScreen}</h2>
                      <p class="text main-text">
                        ${data.text}
                      </p>
                    </section>`;

  const screenWelcome = getElementFromTemplate(template);

  const playButton = screenWelcome.querySelector(`.main-play`);
  playButton.addEventListener(`click`, () => screenChange(levelArtist(initialState)));

  return screenWelcome;
};

