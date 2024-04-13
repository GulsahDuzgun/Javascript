import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model';
import renderViewObj from './view/recipeView';
import searchViewObj from './view/searchView.js';

const controlRecipes = async function () {
  try {
    renderViewObj.renderSpinner();
    const id = window.location.hash.slice(1);

    if (!id) return; //guard
    await model.loadRecipe(id);

    const { recipe } = model.state;
    renderViewObj.renderMarkUp(recipe);
  } catch (err) {
    renderViewObj.renderErrMessage();
  }
};

const controlSearch = async function () {
  try {
    const query = searchViewObj.getQueryKey();
    if (!query) return;

    await model.loadSearchResult(query);
    console.log(model.state);
  } catch (err) {}
};

const init = function () {
  renderViewObj.addHandlerRender(controlRecipes);
  searchViewObj.addHandlerSearch(controlSearch);
};

init();
