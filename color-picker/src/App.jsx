import { ColorButton } from "./components/ColorButton";
import { ColorContainer } from "./components/ColorContainer";

function App() {
  const colors = ["blue", "green", "red", "random"];

  const listItems = colors.map((color) => (
    <ColorButton color={color}></ColorButton>
  ));

  return (
    <>
      <ColorContainer />
      <div>{listItems}</div>
    </>
  );
}

export default App;
