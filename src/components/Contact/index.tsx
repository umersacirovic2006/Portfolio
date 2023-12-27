import { useApp } from "../../context/useApp";
import "./index.scss";
import { motion } from "framer-motion";

const Contact = () => {
    const { isMobile, isDarkMode } = useApp();

    return (
        <motion.div
            className={`Contact${isMobile ? "Mobile" : "Desktop"} ${isDarkMode ? '' : 'dark'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="contact">
                <p>Contact me</p>
                <form
                    action="mailto:asacirovic90@gmail.com"
                    method="post"
                    encType="text/plain"
                >
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Ime i prezime"
                    />

                    <input type="email" name="email" placeholder="Email" />

                    <input type="text" name="subject" placeholder="Naslov" />

                    <textarea name="message" placeholder="Poruka"></textarea>

                    <input
                        type="submit"
                        value="Submit"
                        className="submit-button"
                    />
                </form>
            </div>
        </motion.div>
    );
};

export default Contact;
