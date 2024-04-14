import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model';
import recipeViewObj from './view/recipeView';
import searchViewObj from './view/searchView.js';
import resultViewObj from './view/resultView.js';
import paginationViewObj from './view/paginationView.js';

// if (module.hot) {
//   module.hot.accept();
// }

const controlRecipes = async function () {
  try {
    recipeViewObj.renderSpinner();
    const id = window.location.hash.slice(1);

    if (!id) return; //guard
    await model.loadRecipe(id);
    const { recipe } = model.state;
    recipeViewObj.renderMarkUp(recipe);
  } catch (err) {
    recipeViewObj.renderErrMessage();
  }
};

const controlSearch = async function () {
  try {
    resultViewObj.renderSpinner();
    const query = searchViewObj.getQueryKey();
    if (!query) return;

    await model.loadSearchResult(query);
    resultViewObj.renderMarkUp(model.getSearchResultPage());
    paginationViewObj.renderMarkUp(model.state.search);
  } catch (err) {
    resultViewObj.renderErrMessage();
  }
};

const controlPagination = function (goToPage) {
  resultViewObj.renderMarkUp(model.getSearchResultPage(goToPage));
  paginationViewObj.renderMarkUp(model.state.search);
};

const controlServings = function (newServings) {
  model.updateServings(newServings);
  recipeViewObj.renderMarkUp(model.state.recipe);
};

const init = function () {
  recipeViewObj.addHandlerRender(controlRecipes);
  searchViewObj.addHandlerSearch(controlSearch);
  paginationViewObj.addHandlerClick(controlPagination);
  recipeViewObj.addHandlerUpdateServings(controlServings);
};

init();
