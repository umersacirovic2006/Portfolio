import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Nav from "./components/Nav/Nav";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer/Footer";

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
