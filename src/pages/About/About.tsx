import "./About.css";
import bg from "/images/about.svg";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      className="About"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <img src={bg} alt="bg" className="Wave" />
    </motion.div>
  );
}

export default About;
