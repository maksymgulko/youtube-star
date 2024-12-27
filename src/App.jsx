import "./App.css";
import About from "./components/About/About";
import For from "./components/For/For";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";
import Tariffs from "./components/Tariffs/Tariffs";
import Value from "./components/Value/Value";

function App() {
  return (
    <div className="container">
      <Navigation />
      <Hero />
      <Tariffs />
      <For />
      <About />
      <Value />
    </div>
  );
}

export default App;
