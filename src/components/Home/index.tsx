import { useApp } from "../../context/useApp";
import { HomeWrapper } from "./Helpers/HomeWrapper";
import "./index.scss";
import bg from "/images/bg.svg";
import { motion } from "framer-motion";

const Home = () => {
    const { isMobile } = useApp();

    return (
        <motion.div
            className={`Home${isMobile ? "Mobile" : "Desktop"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <img src={bg} alt="bg" className="Wave" />
            <HomeWrapper />
        </motion.div>
    );
};

export default Home;
