import {changeView} from '../util';
import WelcomeView from '../view/welcome-view';
import artistScreen from './artist-screen';

export default (data) => {
  const welcomeScreen = new WelcomeView(data);

  welcomeScreen.onPlayClick = () => {
    artistScreen(data);
  };

  changeView(welcomeScreen.element);
};
