import styles from "../../styles/_Title.module.scss";
import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
const Title = ({ text, variants, duration }) => {
  return (
    <motion.h1
      className={styles.title}
      variants={variants}
      transition={{ duration: duration }}
    >
      {text}
    </motion.h1>
  );
};
export default Title;
