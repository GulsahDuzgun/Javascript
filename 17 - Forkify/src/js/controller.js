import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model';
import recipeViewObj from './view/recipeView';
import searchViewObj from './view/searchView.js';
import resultViewObj from './view/resultView.js';
import paginationViewObj from './view/paginationView.js';
import bookmarkViewObj from './view/bookmarksView.js';
import addRecipeView from './view/addRecipeView.js';
import { MODAL_CLOSE_SEC } from './config.js';

// if (module.hot) {
//   module.hot.accept();
// }

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return; //guard
    await model.loadRecipe(id);
    const { recipe } = model.state;

    recipeViewObj.renderMarkUp(recipe);
    resultViewObj.update(model.getSearchResultPage());
    bookmarkViewObj.update(model.state.bookMarks);
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
  // recipeViewObj.renderMarkUp(model.state.recipe);
  recipeViewObj.update(model.state.recipe);
};

const controlAddBookmark = function () {
  if (model.state.recipe.bookmarked) {
    model.deleteBookmark(model.state.recipe.id);
  } else {
    model.addBookmark(model.state.recipe);
  }
  recipeViewObj.update(model.state.recipe);
  bookmarkViewObj.renderMarkUp(model.state.bookMarks);
};

const controlUpdateBookmarks = function () {
  bookmarkViewObj.renderMarkUp(model.state.bookMarks);
};

const controlAddRecipe = async function (data) {
  try {
    addRecipeView.renderSpinner();

    await model.uploadRecipe(data);

    bookmarkViewObj.renderMarkUp(model.state.bookMarks);

    addRecipeView.renderSuccMessage();

    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);

    recipeViewObj.renderMarkUp(model.state.recipe);

    window.history.pushState(null, '', `#${model.state.recipe.id}`);
  } catch (err) {
    addRecipeView.renderErrMessage(err.message);
  }
};

const init = function () {
  recipeViewObj.addHandlerRender(controlRecipes);
  searchViewObj.addHandlerSearch(controlSearch);
  paginationViewObj.addHandlerClick(controlPagination);
  recipeViewObj.addHandlerUpdateServings(controlServings);
  recipeViewObj.addHandlerAddBookmark(controlAddBookmark);
  bookmarkViewObj.addHandlerUpdateBookmarks(controlUpdateBookmarks);
  addRecipeView._addHandlerUpdate(controlAddRecipe);
};

init();
