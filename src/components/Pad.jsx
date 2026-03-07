const Pad = ({ on, id, color, clickPad }) => {
  return (
    <button
      className={on ? "on" : null}
      style={{ backgroundColor: color }}
      onClick={() => clickPad(id)}
    ></button>
  );
};

export default Pad;
