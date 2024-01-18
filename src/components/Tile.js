export default function Tile(props) {
  const { el, handleHide, handleDrop, handleDragOver } = props;

  const resetStyle = (e) => {
    e.currentTarget.classList.remove("grid-item--highlight");
  };
  return (
    <div
      className="grid-item"
      draggable="true"
      onDragStart={() => handleHide(el.value)}
      onDragOver={handleDragOver}
      onDragLeave={resetStyle}
      onDrop={handleDrop}
    >
      {el.img && <img src={`img/${el.img}`}></img>}
      {<p className="text">{el.text}</p>}
    </div>
  );
}
