import { useState } from "react";
import Tile from "./components/Tile";

function App() {
  const [tiles, setTiles] = useState([
    { value: 1, img: "csgo.png", text: "" },
    {
      value: 2,
      img: "",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in fermentum mauris, pretium venenatis urna. Maecenas nec ultricies turpis, vitae rutrum arcu. Vivamus arcu velit, feugiat vitae orci a.",
    },
    { value: 3, img: "mirage-mid.jpg", text: "" },
    {
      value: 4,
      img: "",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in fermentum mauris, pretium venenatis urna. Maecenas nec ultricies turpis, vitae rutrum arcu. Vivamus arcu velit, feugiat vitae orci a.",
    },
    { value: 5, img: "3d-csgo.jpeg", text: "" },
    {
      value: 6,
      img: "",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in fermentum mauris, pretium venenatis urna. Maecenas nec ultricies turpis, vitae rutrum arcu. Vivamus arcu velit, feugiat vitae orci a.",
    },
  ]);
  const [draggedValue, setDraggedValue] = useState(null);

  function handleHide(e, value) {
    setDraggedValue(value);
  }

  function handleDragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add("grid-item--highlight");
  }

  const handleDrop = (e, droppedTileValue) => {
    const newTiles = [...tiles];
    const draggedTileIndex = tiles.findIndex(
      (tile) => tile.value === draggedValue
    );
    const droppedTileIndex = tiles.findIndex(
      (tile) => tile.value === droppedTileValue
    );

    [newTiles[draggedTileIndex], newTiles[droppedTileIndex]] = [
      newTiles[droppedTileIndex],
      newTiles[draggedTileIndex],
    ];

    e.currentTarget.classList.remove("grid-item--highlight");

    setTiles(newTiles);
  };

  const itemsArr = tiles.map((el) => (
    <Tile
      key={el.value}
      el={el}
      handleHide={(e) => handleHide(e, el.value)}
      handleDragOver={handleDragOver}
      handleDrop={(e) => handleDrop(e, el.value)}
    />
  ));

  return <div className="grid-container">{itemsArr}</div>;
}

export default App;
