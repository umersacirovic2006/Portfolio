import "./index.scss";
import bg from "/images/projects.svg";
import mojnp from "/images/mojnp.png";
import { motion } from "framer-motion";
import { useApp } from "../../context/useApp";

const ProjectsContainer = () => {
    return (
        <div className="projects-container">
            <a
                href="https://mojnovipazar.info/"
                target="__blank"
                className="projects-wrapper"
            >
                <div className="left"></div>
                <div className="right"></div>
                <div className="hover-text">Hover Me!</div>
                <img src={mojnp} alt="mojnp" className="projects-image" />
                <p>
                    This project, which started as our final assignment for the
                    CentarNIT frontend course, has now blossomed into an
                    exciting startup venture. We're thrilled to be a part of
                    this journey and are looking forward to the opportunities it
                    brings. What began as a college project has turned into
                    something we're genuinely proud of, and we can't wait to see
                    where it takes us.
                </p>
            </a>
            {/* <a
                href="https://mojnovipazar.info/"
                target="__blank"
                className="projects-wrapper"
            >
                <img src={mojnp} alt="mojnp" className="projects-image" />
                <p>Hello this is a test</p>
            </a>
            <a
                href="https://mojnovipazar.info/"
                target="__blank"
                className="projects-wrapper"
            >
                <img src={mojnp} alt="mojnp" className="projects-image" />
                <p>Hello this is a test</p>
            </a> */}
        </div>
    );
};

const Projects = () => {
    const { isMobile } = useApp();

    return (
        <motion.div
            className={`Projects${isMobile ? "Mobile" : "Desktop"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <img src={bg} alt="bg" className="Wave" />
            <ProjectsContainer />
        </motion.div>
    );
};

export default Projects;
