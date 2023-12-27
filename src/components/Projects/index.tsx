import "./index.scss";
import { motion } from "framer-motion";
import { useApp } from "../../context/useApp";
import mojnp from "/images/mojnp.png";

const Projects = () => {
    const { isMobile, isDarkMode } = useApp();

    return (
        <motion.div
            className={`Projects${isMobile ? "Mobile" : "Desktop"} ${isDarkMode ? '' : 'dark'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
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
                        This project, which started as our final assignment for
                        the CentarNIT frontend course, has now blossomed into an
                        exciting startup venture. We're thrilled to be a part of
                        this journey and are looking forward to the
                        opportunities it brings. What began as a college project
                        has turned into something we're genuinely proud of, and
                        we can't wait to see where it takes us.
                    </p>
                </a>
            </div>
        </motion.div>
    );
};

export default Projects;
