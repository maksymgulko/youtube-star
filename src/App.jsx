import { useState } from "react";
import "./App.css";
import About from "./components/About/About";
import Channels from "./components/Channels/Channels";
import Courses from "./components/Courses/Courses";
import Faq from "./components/FAQ/Faq";
import Footer from "./components/Footer/Footer";
import For from "./components/For/For";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";
import Reviews from "./components/Reviews/Reviews";
import Tariffs from "./components/Tariffs/Tariffs";
import Value from "./components/Value/Value";
import Modal from "react-modal";

function App() {
  Modal.setAppElement("#root");
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="container">
      <Navigation />
      <Hero />
      <About />
      <Channels />
      <Tariffs />
      <For />
      <Value />
      <Courses />
      <Reviews />
      <Faq />
      <Footer isOpen={isOpen} openModal={openModal} closeModal={closeModal} />
    </div>
  );
}

export default App;
