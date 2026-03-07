import { useState } from "react";

const Joke = (props) => {
  const [isShown, setIsShown] = useState(false);

  const toggleShown = () => {
    setIsShown((prevShown) => !prevShown);
  };

  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      {isShown && <p>{props.punchline}</p>}
      <button onClick={toggleShown}>
        {isShown ? "Hide Punchline" : "Show Punchline"}
      </button>
      <hr />
    </div>
  );
};

export default Joke;
