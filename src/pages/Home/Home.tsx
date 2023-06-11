import "./Home.css";
import bg from "/images/bg.svg";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      className="Home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <img src={bg} alt="bg" className="Wave" />
      <div className="home-wrapper">
        <h1>There will be section of my introduction leading to the About page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quibusdam?</p>
      </div>
    </motion.div>
  );
}

export default Home;
