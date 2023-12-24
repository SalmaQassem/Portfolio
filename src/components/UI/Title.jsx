import styles from "../../styles/_Title.module.scss";
import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
const Title = ({ text }) => {
  return (
    <motion.h1
      className={styles.title}
      initial={{ y: "40px", opacity: 0, visiblility: "hidden" }}
      animate={{ y: 0, opacity: 1, visibility: "visible" }}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.h1>
  );
};
export default Title;
