import {changeView} from '../util';
import artistAnswerView from '../view/artist-answer-view';

export default (data) => {
  let html = ``;
  data.forEach((item, index) => {
    html += artistAnswerView(item, index);
  });

  return html;
};
