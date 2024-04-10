import { async } from 'regenerator-runtime';

export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const data = await res.json();

    if (!res.ok) throw new Error(`${res.status}:  ${data.message}`);

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
  }
};
