import { useState } from "react";

export function ColorPicker() {
  let [color, setColor] = useState("white");

  const colors = ["blue", "green", "red"];

  const listItems = colors.map((color) => <button>{color}</button>);

  return (
    <>
      <div
        style={{
          height: "500px",
          width: "500px",
          borderStyle: "solid",
          backgroundColor: { color },
        }}
      ></div>
      <div>{listItems}</div>
    </>
  );
}
