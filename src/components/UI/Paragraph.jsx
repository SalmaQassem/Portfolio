import styles from "../../styles/_Paragraph.module.scss";
import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
const Paragraph = ({ text }) => {
  return (
    <motion.h1
      className={styles.paragraph}
      initial={{ y: "40px", opacity: 0, visiblility: "hidden" }}
      animate={{ y: 0, opacity: 1, visibility: "visible" }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {text}
    </motion.h1>
  );
};
export default Paragraph;
