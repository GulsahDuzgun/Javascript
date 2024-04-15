import View from './View';
import previewViewObj from './previewView';

class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _errMessage = 'No recipes found for your query! Please try again!';

  _generateHTML() {
    return this._data
      .map(res => previewViewObj.renderMarkUp(res, false))
      .join('');
  }
}

export default new ResultView();
