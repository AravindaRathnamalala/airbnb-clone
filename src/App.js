import logo from "./logo.svg";
import NavBar from "./components/NavBar";
import "./App.css";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data/Data";

function App() {
  console.log(data);
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    );
  });

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
