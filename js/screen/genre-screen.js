import {changeView} from "../util";
import GenreView from '../view/genre-view';
import artistScreen from './artist-screen';
import resultScreen from './result-screen';

export default (data) => {
  data.answers.setType = `genre`;

  const genreScreen = new GenreView(data);

  genreScreen.onAnswerClick = (isCorrect) => {
    if (!isCorrect) {
      data.state.lives = data.state.lives - 1;
    }

    data.totalAnswers.push({'isCorrect': isCorrect, 'time': 25, 'note': data.state.lives});

    if (data.state.lives === 0 || data.totalAnswers.length === data.state.maxNumberGames) {
      resultScreen(data);
    } else {
      artistScreen(data);
    }
  };

  changeView(genreScreen.element);
};
