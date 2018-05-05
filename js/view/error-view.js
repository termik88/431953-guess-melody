import AbstractView from './abstractView';

export default class ErrorView extends AbstractView {

  constructor(error) {
    super();
    this.error = error;
  }

  get template() {
    return `
      <div class="end">
        <p>Произошла ошибка: ${this.error.message}</p>
      </div>`;
  }

}
