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
  bookMarks: [],
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

    if (state.bookMarks.some(bookmark => bookmark.id === id)) {
      state.recipe.bookmarked = true;
    } else {
      state.recipe.bookmarked = false;
    }
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
    state.search.page = 1;
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

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
  });

  state.recipe.servings = newServings;
};

export const addBookmark = function (recipe) {
  if (recipe.id === state.recipe.id) {
    state.bookMarks.push(recipe);
    state.recipe.bookmarked = true;
  }
  persistBookmarks();
};

export const deleteBookmark = function (id) {
  const index = state.bookMarks.findIndex(el => el.id === id);
  state.bookMarks.splice(index, 1);

  if (state.recipe.id === id) state.recipe.bookmarked = false;
  persistBookmarks();
};

const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookMarks));
  console.log('add local');
};

const init = function () {
  const storage = localStorage.getItem('bookmarks');
  if (!storage) return;

  state.bookMarks = JSON.parse(storage);
};

init();

const clearStorageBookmarks = function () {
  localStorage.clear('bookmarks');
};

// clearStorageBookmarks();

export const uploadRecipe = async function (data) {
  try {
    const ingredients = Object.entries(data)
      .filter(el => el[0].includes('ingredient-') && el[1] !== '')
      .map(ing => {
        const ingArr = ing[1].replaceAll(' ', '').split(',');
        if (ingArr.length !== 3)
          throw new Error(
            'Wrong ingredient format! Please use the correct format'
          );

        const [quantity, unit, description] = ingArr;

        console.log({
          quantity: quantity ? +quantity : null,
          unit,
          description,
        });
        return { quantity: quantity ? +quantity : null, unit, description };
      });
    console.log(ingredients);
  } catch (err) {
    throw err;
  }
};
