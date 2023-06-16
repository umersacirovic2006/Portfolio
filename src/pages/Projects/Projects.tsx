import "./Projects.scss";
import bg from "/images/projects.svg";
import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.div
      className="Projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <img src={bg} alt="bg" className="Wave" />
      <div className="projects-wrapper">
        
      </div>
    </motion.div>
  );
}

export default Projects;
