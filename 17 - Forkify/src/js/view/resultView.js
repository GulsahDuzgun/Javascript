import View from './View';

class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _errMessage = 'No recipes found for your query! Please try again!';
  _generateHTML() {
    return this._generateResultHTML();
  }

  _generateResultHTML() {
    const activeID = window.location.hash.slice(1);
    return this._data
      .map(entry => {
        return `
      <li class="preview">
      <a class="preview__link ${
        activeID === entry.id ? 'preview__link--active' : ''
      } " href="#${entry.id}">
        <figure class="preview__fig">
          <img src="${entry.img}" alt="Test" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">${entry.title}</h4>
          <p class="preview__publisher">${entry.publisher}</p>
         
        </div>
      </a>
    </li>
      `;
      })
      .join('');
  }
}

export default new ResultView();
