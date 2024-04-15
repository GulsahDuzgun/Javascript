import View from './View';

class PreviewView extends View {
  _generateHTML() {
    return this._generateResultHTML();
  }

  _generateResultHTML() {
    const activeID = window.location.hash.slice(1);

    return `
      <li class="preview">
      <a class="preview__link ${
        activeID === this._data.id ? 'preview__link--active' : ''
      } " href="#${this._data.id}">
        <figure class="preview__fig">
          <img src="${this._data.img}" alt="Test" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">${this._data.title}</h4>
          <p class="preview__publisher">${this._data.publisher}</p>
         
        </div>
      </a>
    </li>
      `;
  }
}

export default new PreviewView();
