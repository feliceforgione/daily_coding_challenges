/* Create a react component where you have three shapes and a button. WHen button is clicked, the circle shapes will move down 50 px */

import { useState } from "react";

const shapeObjectsInitial = [
  { id: 1, shape: "circle", x: 10, y: 50 },
  { id: 2, shape: "box", x: 110, y: 50 },
  { id: 3, shape: "circle", x: 210, y: 50 },
];

function App() {
  const [shapeObjects, setShapeObjects] = useState(shapeObjectsInitial);

  const handleClick = () => {
    setShapeObjects(
      shapeObjects.map((obj) =>
        obj.shape === "circle" ? { ...obj, y: obj.y + 50 } : obj
      )
    );
  };

  return (
    <div>
      <button onClick={handleClick}>Move circles down 50px</button>
      {shapeObjects.map((obj) => (
        <div
          key={obj.id}
          style={{
            backgroundColor: "red",
            position: "absolute",
            top: obj.y,
            left: obj.x,
            padding: "15px",
            borderRadius: obj.shape === "circle" ? "50%" : 0,
          }}
        >
          {obj.id}
        </div>
      ))}
    </div>
  );
}

export default App;
