import icons from '../../img/icons.svg';

export default class View {
  renderMarkUp(data) {
    this._data = data;
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderErrMessage();

    this._clear();

    const markup = this._generateHTML();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner() {
    const spinner = `
  <div class="spinner">
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
  </div>`;
    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin', spinner);
  }

  renderErrMessage(message = this._errMessage) {
    const errMarkUp = `
    <div class="error">
      <div>
        <svg>
          <use href="src/img/${icons}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${message}</p>
    </div>`;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', errMarkUp);
  }

  renderSuccMessage(message = this._succMessage) {
    const errMarkUp = `
    <div class="message">
      <div>
        <svg>
          <use href="src/img/${icons}#icon-smile"></use>
        </svg>
      </div>
      <p>${message}</p>
    </div>`;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', errMarkUp);
  }
}
