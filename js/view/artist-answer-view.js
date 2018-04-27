import AbstractView from '../abstractView';

export default class ArtistAnswerView extends AbstractView {
  constructor(data, index) {
    super();
    this._data = data;
    this._index = index;
  }

  get template() {
    return `<div class="main-answer-wrapper">
                      <input class="main-answer-r" type="radio" id="answer-${this._index}" name="answer" value="val-${this._data.current}"/>
                      <label class="main-answer" for="answer-${this._index}">
                        <img class="main-answer-preview" src=${this._data.image}
                             alt="${this._data.artist}" width="134" height="134">
                        ${this._data.artist}
                      </label>
                    </div>`;
  }
}
