import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home/index";
import About from "./components/About/index";
import Projects from "./components/Projects/index";
import Contact from "./components/Contact/index";
import Nav from "./components/Nav/index";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer/index";
import { useApp } from "./context/useApp";

const App = () => {
    const location = useLocation();
    const { isDarkMode } = useApp();

    return (
        <div className={`App ${isDarkMode ? '' : 'dark'}`}>
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
};

export default App;
