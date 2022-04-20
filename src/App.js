import "./App.css";
import Nav from "./Components/Nav";
import Card from "./Components/Card";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div>
      <Nav />
      <section className="card-section">{cards}</section>
    </div>
  );
}

export default App;
