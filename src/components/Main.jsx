import { useState } from "react";

const Main = () => {
  // const ingredients = ["Chicken", "Oregano", "Tomatoes"];
  const [ingredients, setIngredients] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newIngredient = formData.get("ingredient");

    // ingredients.push(newIngredient);

    // the way we can update the array in react is by providing a brand new arr,
    // includes all of previous states and the current one also
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]); // using cb func cuz i interested in prev states

    console.log(ingredients);
    e.target.reset();
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>+ Add ingredient</button>
      </form>

      <ul>
        {ingredients.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </main>
  );
};

export default Main;
