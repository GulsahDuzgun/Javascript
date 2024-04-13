import { async } from 'regenerator-runtime';
import { getJSON } from './helpers';
import { API_URL, RES_PER_PAGE } from './config';

export const state = {
  recipe: {},
  search: {
    query: '',
    searchResults: [],
    resultPerPage: RES_PER_PAGE,
    page: 1,
  },
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);
    let { recipe } = data.data;

    state.recipe = {
      id: recipe.id,
      servings: recipe.servings,
      title: recipe.title,
      publisher: recipe.publisher,
      ingredients: recipe.ingredients,
      sourceUrl: recipe.source_url,
      img: recipe.image_url,
      cookingTime: recipe.cooking_time,
    };
  } catch (err) {
    throw err;
  }
};

export const loadSearchResult = async function (query) {
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}?search=${query}`);

    console.log(data.data.recipes);
    state.search.searchResults = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        img: rec.image_url,
      };
    });

    console.log(state.search.searchResults);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getSearchResultPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultPerPage;
  const end = page * state.search.resultPerPage;
  return state.search.searchResults.slice(start, end);
};
