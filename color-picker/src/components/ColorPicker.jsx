import { useState } from "react";

export function ColorPicker() {
  let [color, setColor] = useState("white");

  const colors = ["blue", "green", "red", "purple", "orange", "black"];

  function handleClicks() {
    const randomColor = Math.floor(Math.random() * colors.length);
    setColor(colors[randomColor]);
  }

  return (
    <>
      <div
        style={{
          height: "500px",
          width: "500px",
          borderStyle: "solid",
          backgroundColor: color,
        }}
      ></div>
      <button onClick={handleClicks}>Click Me!</button>
    </>
  );
}
