import "./index.scss";
import bg from "/images/about.svg";
import { useApp } from "../../context/useApp";
import { motion } from "framer-motion";
import { AboutWrapper } from "./Helpers/AboutWrapper";

const About = () => {
    const { isMobile } = useApp();

    return (
        <motion.div
            className={`About${isMobile ? "Mobile" : "Desktop"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <img src={bg} alt="bg" className="Wave" />
            <AboutWrapper />
        </motion.div>
    );
};

export default About;
