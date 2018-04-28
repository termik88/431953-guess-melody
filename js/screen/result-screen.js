import {changeView} from "../util";
import welcomeScreen from './welcome-screen';
import calculateResult from '../calculateResult';
import countResultPlayer from '../countResultPlayer';

export default (data) => {
  const result = calculateResult(data.totalAnswers);
  /*data.state.lives = 3;
  data.state.time = 300;
  data.totalAnswers = [];*/

  const resultScreen = countResultPlayer(result);
  changeView(resultScreen.element);

  resultScreen.onClick = () => {
    welcomeScreen(data);
  };
};
