const IngredientsList = ({ getRecipe, ingredients, isLoading, ref }) => {
  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredients.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {ingredients.length > 1 && (
        <div className="get-recipe-container">
          <div ref={ref}>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={getRecipe} disabled={isLoading}>
            {isLoading ? "Generating..." : "Get a recipe"}
          </button>
        </div>
      )}
    </section>
  );
};

export default IngredientsList;
