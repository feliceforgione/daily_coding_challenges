/* Create a react component where a small square box follows the mouse around the screen */

import { useState } from "react";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.PointerEvent<HTMLElement>) => {
    console.log(e);
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <main
      onPointerMove={handleMove}
      style={{ width: "100vw", height: "100vh", position: "relative" }}
    >
      <div
        style={{
          width: "20px",
          height: "20px",
          backgroundColor: "red",
          position: "absolute",
          top: position.y,
          left: position.x,
        }}
      ></div>
    </main>
  );
}

export default App;
