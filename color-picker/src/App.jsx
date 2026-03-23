import { ColorButton } from "./components/ColorButton";

function App() {
  const colors = ["blue", "green", "red", "random"];

  const listItems = colors.map((color) => (
    <ColorButton color={color}></ColorButton>
  ));

  return (
    <>
      <div>{listItems}</div>
    </>
  );
}

export default App;
