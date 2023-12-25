import styles from "../../styles/_Paragraph.module.scss";
import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
const Paragraph = ({ text, variants, duration }) => {
  return (
    <motion.h2
      className={styles.paragraph}
      variants={variants}
      transition={{ duration: duration }}
    >
      {text}
    </motion.h2>
  );
};
export default Paragraph;
