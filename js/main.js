import welcome from './templates/welcome';
import {screenChange} from './util';
import {welcomeDate} from "./data/data";

screenChange(welcome(welcomeDate));
