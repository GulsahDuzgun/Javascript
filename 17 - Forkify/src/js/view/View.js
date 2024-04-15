import icons from '../../img/icons.svg';

export default class View {
  renderMarkUp(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderErrMessage();

    this._data = data;

    const markup = this._generateHTML();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  update(data) {
    this._data = data;
    const newMarkup = this._generateHTML();
    const newDOM = document.createRange().createContextualFragment(newMarkup);

    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const currElements = Array.from(this._parentElement.querySelectorAll('*'));

    newElements.forEach((newEl, indx) => {
      const curEl = currElements[indx];
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        curEl.textContent = newEl.textContent;
      }

      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        );
      }
    });
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
