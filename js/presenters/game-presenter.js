import Application from '../application';
import ArtistView from '../view/artist-view';
import GenreView from '../view/genre-view';

export default class GamePresenter {
  constructor(model) {
    this.model = model;
    this.stats = this.model.gameSettings;
    this.model.renderQuestion();
    this.model.startTimer();
    this.question = this.model.currentQuestion;
    this.view = (this.question.type === this.model.questionType.ARTIST ? new ArtistView(this.model) : new GenreView(this.model));


    this.view.onAnswerClickArtist = (isCorrect) => {

      if (!isCorrect) {
        this.model.loseLife();
      }

      this.stats.answers.push({'isCorrect': isCorrect, 'time': this.model.time, 'note': this.stats.numberLives});
      this.model.stopTimer();

      if (this.stats.numberLives === 0 || this.stats.answers.length === this.stats.maxLevel) {
        this.model.outResult();
        Application.showStats(this.model);
      } else {
        Application.showGame(this.model);
      }
    };

    this.view.onAnswerClickGender = (isCorrect) => {
      if (!isCorrect) {
        this.model.loseLife();
      }

      this.stats.answers.push({'isCorrect': isCorrect, 'time': this.model.time, 'note': this.stats.numberLives});
      this.model.stopTimer();

      if (this.stats.numberLives === 0 || this.stats.answers.length === this.stats.maxLevel) {
        this.model.outResult();
        Application.showStats(this.model);
      } else {
        Application.showGame(this.model);
      }
    };
  }

  get screen() {
    return this.view.element;
  }
}
