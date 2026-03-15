import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromAI } from "../ai";

// I'm gonna save the response in React state.
// Trigger getting the recipe when user click Get a recipe button.

const Main = () => {
  const [ingredients, setIngredients] = useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);

  // const [recipeShown, setRecipeShown] = useState(false);
  const [recipe, setRecipe] = useState("");
  // const [recipeMarkdown, setRecipeMarkdown] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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
  };

  const getRecipe = async () => {
    setIsLoading(true);
    setError("");

    try {
      const aiRecipe = await getRecipeFromAI(ingredients);
      // setRecipeMarkdown(aiRecipe);
      // setRecipeShown(true);
      setRecipe(aiRecipe);
    } catch (err) {
      setError(err.message || "Failed to generate recipe.");
      // setRecipeShown(false);
    } finally {
      setIsLoading(false);
    }
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
          getRecipe={getRecipe}
          ingredients={ingredients}
          isLoading={isLoading}
        />
      )}
      {error && <p aria-live="polite">{error}</p>}
      {/* {recipeShown && <ClaudeRecipe recipe={recipeMarkdown} />} */}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
};

export default Main;
