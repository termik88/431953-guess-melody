import {changeView} from "../util";
import welcomeScreen from './welcome-presenter';
import calculateResult from '../calculateResult';
import countResultPlayer from '../countResultPlayer';

export default (data) => {
  const view = calculateResult(data.totalAnswers);

  const resultScreen = countResultPlayer(view);
  changeView(resultScreen.element);

  resultScreen.onClick = () => {
    welcomeScreen(data);
  };
};
