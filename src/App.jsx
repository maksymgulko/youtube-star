import "./App.css";
import About from "./components/About/About";
import Courses from "./components/Courses/Courses";
import For from "./components/For/For";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";
import Reviews from "./components/Reviews/Reviews";
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
      <Courses />
      <Reviews />
    </div>
  );
}

export default App;
