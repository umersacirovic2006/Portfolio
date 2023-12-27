import "./index.scss";
import { useApp } from "../../context/useApp";
import { motion } from "framer-motion";
import { useState } from "react";
import { IconButton } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import DownloadBtn from "./Helpers/DownloadBtn";

const About = () => {
    const { isMobile, isDarkMode } = useApp();

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);

    return (
        <motion.div
            className={`About${isMobile ? "Mobile" : "Desktop"} ${isDarkMode ? '' : 'dark'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
                        <div>
                <IconButton
                    onClick={() => setIsOpen(!isOpen)}
                    disableRipple={true}
                >
                    {isOpen ? <IoIosArrowForward /> : <IoIosArrowDown />}
                    <h3>About me</h3>
                </IconButton>
                <motion.p
                    animate={{
                        height: isOpen ? "auto" : "0px",
                    }}
                >
                    Welcome to my digital domain, where lines of code dance to
                    the rhythm of innovation. I'm Umer Sacirovic, a fervent
                    explorer of the digital realm, passionate about shaping the
                    future through technology.
                </motion.p>
            </div>
            <div>
                <IconButton
                    onClick={() => setIsOpen1(!isOpen1)}
                    disableRipple={true}
                >
                    {isOpen1 ? <IoIosArrowForward /> : <IoIosArrowDown />}
                    <h3>The Alchemist of Code</h3>
                </IconButton>
                <motion.p
                    animate={{
                        height: isOpen1 ? "auto" : "0px",
                    }}
                >
                    In the labyrinth of ones and zeros, I am the alchemist,
                    turning abstract ideas into tangible digital experiences.
                    With a keyboard as my wand, I conjure solutions that defy
                    the ordinary. My journey in the world of web development has
                    been nothing short of a thrilling adventure.
                </motion.p>
            </div>
            <div>
                <IconButton
                    onClick={() => setIsOpen2(!isOpen2)}
                    disableRipple={true}
                >
                    {isOpen2 ? <IoIosArrowForward /> : <IoIosArrowDown />}
                    <h3>Creativity and Functionality</h3>
                </IconButton>
                <motion.p
                    animate={{
                        height: isOpen2 ? "auto" : "0px",
                    }}
                >
                    Beyond the syntax and semantics of code lies a canvas where
                    creativity and functionality converge. I specialize in HTML,
                    CSS, JavaScript, TypeScript, and the enchanting world of
                    React/React Native. Every project is an opportunity to weave
                    seamless user experiences that leave an indelible mark.
                </motion.p>
            </div>
            <div>
                <IconButton
                    onClick={() => setIsOpen3(!isOpen3)}
                    disableRipple={true}
                >
                    {isOpen3 ? <IoIosArrowForward /> : <IoIosArrowDown />}
                    <h3>Beyond the Screen</h3>
                </IconButton>
                <motion.p
                    animate={{
                        height: isOpen3 ? "auto" : "0px",
                    }}
                >
                    But my passion extends beyond the glow of screens. I see
                    technology not just as a tool but as a catalyst for positive
                    change. Whether it's a startup project or a personal
                    endeavor, I believe in the power of technology to transform
                    ideas into reality.
                </motion.p>
            </div>
            <div>
                <IconButton
                    onClick={() => setIsOpen4(!isOpen4)}
                    disableRipple={true}
                >
                    {isOpen4 ? <IoIosArrowForward /> : <IoIosArrowDown />}
                    <h3>Skills</h3>
                </IconButton>
                <motion.ul
                    animate={{
                        height: isOpen4 ? "auto" : "0px",
                    }}
                >
                    <li>
                        HTML & CSS Virtuoso: Crafting elegant and responsive
                        interfaces is my forte.
                    </li>
                    <li>
                        JavaScript Sorcerer: From the simplest scripts to
                        complex algorithms, I orchestrate the language of the
                        web.
                    </li>
                    <li>
                        React/React Native Maestro: Building intuitive and
                        engaging user interfaces that stand the test of user
                        expectations.
                    </li>
                </motion.ul>
            </div>
            <div>
                <IconButton
                    onClick={() => setIsOpen5(!isOpen5)}
                    disableRipple={true}
                >
                    {isOpen5 ? <IoIosArrowForward /> : <IoIosArrowDown />}
                    <h3>The Journey Continues</h3>
                </IconButton>
                <motion.p
                    animate={{
                        height: isOpen5 ? "auto" : "0px",
                    }}
                >
                    As I continue this odyssey through the ever-evolving
                    landscape of technology, I invite you to join me. Let's
                    embark on a journey where innovation knows no bounds, and
                    each line of code is a step towards a brighter, more
                    connected future.
                </motion.p>
            </div>
            <div className="download-btn">
                <p>
                    If you wish to download my CV, please click on the button
                    below:
                </p>
                <DownloadBtn />
            </div>
        </motion.div>
    );
};

export default About;
