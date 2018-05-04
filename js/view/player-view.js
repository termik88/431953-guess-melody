import AbstractView from "../abstractView";

export default class PlayerView extends AbstractView {
  constructor(data) {
    super();
    this.src = data;
  }

  get template() {
    return `<div class="player-wrapper">
              <div class="player">
                <audio src="${this.src}"></audio>
                <button class="player-control"></button>
                <div class="player-track">
                  <span class="player-status"></span>
                </div>
              </div>
            </div>`;
  }
}
