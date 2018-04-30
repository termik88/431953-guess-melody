import {changeView} from "../util";
import ArtistView from '../view/artist-view';
import genreScreen from './genre-screen';
import resultScreen from "./result-screen";

export default (data) => {
  data.answers.setType = `artist`;

  const view = new ArtistView(data);

  view.onAnswerClick = (evt) => {
    evt.preventDefault();
    const isCorrect = (evt.currentTarget.parentNode.querySelector(`input`).value === `val-true`);

    if (!isCorrect) {
      data.state.lives = data.state.lives - 1;
    }

    data.totalAnswers.push({'isCorrect': isCorrect, 'time': 25, 'note': data.state.lives});

    if (data.state.lives === 0 || data.totalAnswers.length === data.state.maxNumberGames) {
      resultScreen(data);
    } else {
      genreScreen(data);
    }
  };

  view.onPlayClick = (evt) => {
    evt.preventDefault();
    const element = evt.currentTarget;
    const audio = evt.currentTarget.parentNode.querySelector(`audio`);
    if (element.classList.contains(`player-control--pause`)) {
      element.classList.remove(`player-control--pause`);
      audio.pause();
    } else {
      element.classList.add(`player-control--pause`);
      audio.play();
    }
  };

  view.controlPlayer();
  changeView(view.element);
};
