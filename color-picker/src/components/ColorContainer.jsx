import { useState } from "react";

export function ColorContainer() {
  let [color, setColor] = useState("white");

  return (
    <div
      style={{
        height: "500px",
        width: "500px",
        borderStyle: "solid",
        backgroundColor: { color },
      }}
    ></div>
  );
}
