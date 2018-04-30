import {changeView} from "../util";
import GenreView from '../view/genre-view';
import artistScreen from './artist-screen';
import resultScreen from './result-screen';

export default (data) => {
  data.answers.setType = `genre`;

  const view = new GenreView(data);

  view.onAnswersChange = () => {
    const isAnswerButtonChecked = [...answersButton].some((item) => item.checked);
    resultButton.disabled = !isAnswerButtonChecked;
  };

  view.onAnswerClick = (isCorrect) => {
    if (!isCorrect) {
      data.state.lives = data.state.lives - 1;
    }

    data.totalAnswers.push({'isCorrect': isCorrect, 'time': 25, 'note': data.state.lives});
    view.resetForm();

    if (data.state.lives === 0 || data.totalAnswers.length === data.state.maxNumberGames) {
      resultScreen(data);
    } else {
      artistScreen(data);
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

  const resultButton = view.element.querySelector(`.genre-answer-send`);
  const answersButton = view.element.querySelectorAll(`input[name=answer]`);
  resultButton.disabled = true;

  view.controlPlayer();
  changeView(view.element);
};
