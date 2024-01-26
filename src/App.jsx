import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  /*let foodItems = [
    "Dal",
    "Green Vegetables",
    "Eggs",
    "Meat",
    "milk",
    "ghee",
    12335,
  ];*/

  let foodItems = [];

  return (
    <>
      <h1>Healthy food</h1>
      {foodItems.length === 0 ? <h3>No Healthy Food Available.</h3> : null}
      <foodItems></foodItems>
    </>
  );
}

export default App;
