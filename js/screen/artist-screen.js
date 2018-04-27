import {changeView, screenChange} from "../util";
import ArtistView from '../view/artist-view';
import calculateResult from "../calculateResult";
import countResultPlayer from "../countResultPlayer";
import levelGenre from "../templates/levelGenre";

export default (data) => {
  const artistScreen = new ArtistView(data);

  artistScreen.onAnswerClick = (evt) => {
    const isCorrect = evt.currentTarget.parentNode.querySelector(`input`).value === `val-true`;

    if (isCorrect) {
      data.totalAnswers.push({'isCorrect': true, 'time': 25, 'note': currentState.lives});
      if (currentState.level === 10) {
        screenChange(countResultPlayer(calculateResult(data.totalAnswers)));
      }
      screenChange(levelGenre(currentState, data.totalAnswers));
    }

    if (!isCorrect) {
      currentState.lives = currentState.lives - 1;
      data.totalAnswers.push({'isCorrect': false, 'time': 25, 'note': currentState.lives});
      if (currentState.lives === 0) {
        screenChange(countResultPlayer(calculateResult(data.totalAnswers)));
      }
      if (currentState.lives !== 0) {
        screenChange(levelGenre(currentState, data.totalAnswers));
      }
    }
  };
};
