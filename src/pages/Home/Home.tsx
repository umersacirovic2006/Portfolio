import "./Home.scss";
import bg from "/images/bg.svg";
import { motion } from "framer-motion";
import { useViewportSize } from "@mantine/hooks";

const HomeWrapper = () => {
  return (
    <div className="home-wrapper">
        <h5>I am</h5>
        <h1>
          Umer
          <br /> <span>Sacirovic</span>
        </h1>
        <p>
          I'm Umer Sacirovic, a skilled and passionate web developer
          specializing in using HTML, CSS, JavaScript, Typescript, and React.
        </p>
      </div>
  )
}

const HomeDesktop = () => {
  return (
    <motion.div
      className="Home-Desktop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <img src={bg} alt="bg" className="Wave" />
      <HomeWrapper />
    </motion.div>
  );
};

const HomeMobile = () => {
  return (
    <motion.div
      className="Home-Mobile"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <img src={bg} alt="bg" className="Wave" />
      <HomeWrapper />
    </motion.div>
  );
};

const Home = () => {
  const { width } = useViewportSize();
  return <>{width <= 768 ? <HomeMobile /> : <HomeDesktop />}</>;
};

export default Home;
