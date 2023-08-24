import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home/index";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact/Contact";
import Nav from "./components/Nav/index";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer/index";

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      <Nav />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
