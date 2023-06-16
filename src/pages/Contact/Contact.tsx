import "./Contact.scss";
import bg from "/images/contact.svg";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      className="Contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <img src={bg} alt="bg" className="Wave" />
    </motion.div>
  );
}

export default Contact;
