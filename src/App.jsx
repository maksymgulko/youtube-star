import "./App.css";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";
import Tariffs from "./components/Tariffs/Tariffs";

function App() {
  return (
    <div className="container">
      <Navigation />
      <Hero />
      <Tariffs />
    </div>
  );
}

export default App;
