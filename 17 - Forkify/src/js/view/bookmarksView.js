import View from './View';
import previewViewObj from './previewView';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errMessage = '  No bookmarks yet. Find a nice recipe and bookmark it!';
  _generateHTML() {
    return this._generateResultHTML();
  }

  _generateResultHTML() {
    return this._data
      .map(bookmark => previewViewObj.renderMarkUp(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
