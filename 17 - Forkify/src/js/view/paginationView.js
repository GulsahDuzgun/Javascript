import View from './View';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateHTML() {
    const currPage = this._data.page;
    const numPage = Math.ceil(
      this._data.searchResults.length / this._data.resultPerPage
    );
    // First Page
    if (currPage === 1 && numPage > currPage) {
      return `
      <button class="btn--inline pagination__btn--next" data-goto=${
        currPage + 1
      }>
        <span>Page ${currPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>
      `;
    }
    // Last Page
    if (currPage === numPage && numPage > 1) {
      return ` 
       <button class="btn--inline pagination__btn--prev"
        data-goto=${currPage - 1}>
         <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${currPage - 1}</span>
        </button>`;
    }
    // Middle Page
    if (currPage > 1 && currPage < numPage) {
      return `
      <button class="btn--inline pagination__btn--prev" data-goto=${
        currPage - 1
      }>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${currPage - 1}</span>
      </button>
      <button class="btn--inline pagination__btn--next" data-goto=${
        currPage + 1
      }>
        <span>Page ${currPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>
    `;
    }
    // Just one Page ->No Pagination
    return '';
  }

  //publisher
  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const gotoPage = +btn.dataset.goto;
      handler(gotoPage);
    });
  }
}

export default new PaginationView();
