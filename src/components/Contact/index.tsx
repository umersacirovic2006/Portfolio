import "./index.scss";
import bg from "/images/contact.svg";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.div
            className="Contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <img src={bg} alt="bg" className="Wave" />
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
}

export default Contact;