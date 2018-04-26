import WelcomeView from './view/welcome-view';
import {changeView} from './util';
import {welcomeDate} from "./data/data";

const welcome = new WelcomeView(welcomeDate);

changeView(welcome.element);
