import {changeView} from "../util";
import ArtistView from '../view/artist-view';
import genreScreen from './genre-screen';
import resultScreen from "./result-screen";

export default (data) => {
  data.answers.setType = `artist`;

  const artistScreen = new ArtistView(data);

  artistScreen.onAnswerClick = (isCorrect) => {
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

  changeView(artistScreen.element);
};
