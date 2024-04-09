const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

const getData = async function () {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`
    );
    const data = await res.json();

    if (!res.ok) throw new Error(`${res.status}:  ${data.message}`);

    let { recipe } = data.data;
    console.log(recipe);

    recipe = {
      id: recipe.id,
      serving: recipe.serving,
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

getData();
