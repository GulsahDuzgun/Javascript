import { API_KEY } from '../config';
import View from './View';
import icons from '../../img/icons.svg';

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
        <div class="preview__user-generated ${
          API_KEY !== this._data.key ? 'hidden' : ''
        }">
        <svg>
          <use href="${icons}#icon-user"></use>
        </svg>
      </div>
      </a>
    </li>
      `;
  }
}

export default new PreviewView();
