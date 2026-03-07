const Star = (props) => {
  let starIcon = props.isFilled ? "/star-filled.png" : "/star-empty.png";

  return (
    <button
      onClick={props.handleStar}
      aria-pressed={props.isFilled}
      aria-label={props.isFilled ? "Remove from favorites" : "Add to favorites"}
      className="favorite-button"
    >
      <img
        src={starIcon}
        alt={props.isFilled ? "filled star icon" : "empty star icon"}
        className="favorite"
      />
    </button>
  );
};

export default Star;
