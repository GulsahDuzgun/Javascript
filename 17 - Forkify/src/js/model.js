import { async } from 'regenerator-runtime';
import { getJSON } from './helpers';

export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(id);
    console.log(data);
    let { recipe } = data.data;

    console.log(recipe);
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
    console.log(recipe);
  } catch (err) {
    alert(err.message);
    console.log(err);
  }
};
