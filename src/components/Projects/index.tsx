import { useViewportSize } from "@mantine/hooks";
import "./index.scss";
import bg from "/images/projects.svg";
import { motion } from "framer-motion";

const ProjectsWrapper = () => {
  return (
    <div className="projects-wrapper">
      <h2>Hello this is a test</h2>
    </div>
  );
}

const ProjectsDesktop = () => {
  return (
    <motion.div
      className="Projects-Desktop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <img src={bg} alt="bg" className="Wave" />
      <ProjectsWrapper />
    </motion.div>
  );
}

const ProjectsMobile = () => {
  return (
    <motion.div
      className="Projects-Mobile"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <img src={bg} alt="bg" className="Wave" />
      <ProjectsWrapper />
    </motion.div>
  );
}

const Projects = () => {
  const { width } = useViewportSize();
  return <>{width <= 768 ? <ProjectsMobile /> : <ProjectsDesktop />}</>;
};

export default Projects;
