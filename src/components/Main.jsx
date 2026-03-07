import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
const Main = () => {
  // const ingredients = ["Chicken", "Oregano", "Tomatoes"];
  const [ingredients, setIngredients] = useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);
  const [recipeShown, setRecipeShown] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const formData = new FormData(e.target);
  //   const newIngredient = formData.get("ingredient");

  //   // ingredients.push(newIngredient);

  //   // the way we can update the array in react is by providing a brand new arr,
  //   // includes all of previous states and the current one also
  //   setIngredients((prevIngredients) => [...prevIngredients, newIngredient]); // using cb func cuz i interested in prev states

  //   console.log(ingredients);
  //   e.target.reset();
  // };

  // ======== React 19 ========
  const addIngredient = (formData) => {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIng) => [...prevIng, newIngredient]);

    console.log(ingredients);
  };

  const handleRecipeShown = () => {
    setRecipeShown(!recipeShown);
  };

  return (
    <main>
      <form
        // onSubmit={handleSubmit}
        action={addIngredient}
        className="add-ingredient-form"
      >
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
          required
        />
        <button>+ Add ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList
          clickRecipeShown={handleRecipeShown}
          ingredients={ingredients}
        />
      )}
      {recipeShown && <ClaudeRecipe />}
    </main>
  );
};

export default Main;
