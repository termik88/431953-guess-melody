import {changeView} from '../util';
import WelcomeView from '../view/welcome-view';
import artistScreen from './artist-screen';

export default (data) => {
  const welcome = new WelcomeView(data);

  welcome.onPlayClick = () => {
    changeView(artistScreen(data));
  };

  changeView(welcome.element);
};
