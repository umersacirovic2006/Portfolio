import { useViewportSize } from "@mantine/hooks";
import "./index.scss";
import bg from "/images/about.svg";
import { motion } from "framer-motion";

const AboutWrapper = () => {
  return (
  <div className="about-wrapper">
    <h1>Currently all attention devoted to my start-up <a href="https://mojnovipazar.info">MojNP</a></h1>
  </div>
  )
};

const AboutDesktop = () => {
  return (
    <motion.div
      className="About-Desktop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <img src={bg} alt="bg" className="Wave" />
      <AboutWrapper />
    </motion.div>
  );
};

const AboutMobile = () => {
  return (
    <motion.div
      className="About-Mobile"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <img src={bg} alt="bg" className="Wave" />
      <AboutWrapper />
    </motion.div>
  );
};

const About = () => {
  const { width } = useViewportSize();
  return <>{width <= 768 ? <AboutMobile /> : <AboutDesktop />}</>;
};

export default About;
