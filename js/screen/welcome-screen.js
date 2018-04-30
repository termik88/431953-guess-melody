import {changeView} from '../util';
import WelcomeView from '../view/welcome-view';
import artistScreen from './artist-screen';

export default (data) => {
  data.state.lives = data.initialState.lives;
  data.state.time = data.initialState.time;
  data.state.maxNumberGames = data.initialState.maxNumberGames;

  const view = new WelcomeView(data);

  view.onPlayClick = (evt) => {
    evt.preventDefault();
    artistScreen(data);
  };

  changeView(view.element);
};
