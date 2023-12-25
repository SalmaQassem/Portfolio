import styles from "../../styles/_SectionHead.module.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// eslint-disable-next-line react/prop-types
const SactionHead = ({ headText, paragraph }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref: elementRef, inView } = useInView({ threshold: 0.5 });
  const defaultAnimation = {
    hidden: {
      opacity: 0,
      visiblility: "hidden",
      transform: "translateY(2.5rem)",
    },
    visible: {
      opacity: 1,
      visibility: "visible",
      transform: "translateY(0)",
    },
  };
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);
  return (
    <motion.div
      className={styles.wrapper}
      ref={elementRef}
      variants={defaultAnimation}
      initial="hidden"
      animate={inView || isVisible ? "visible" : "hidden"}
      transition={{ duration: 0.5 }}
    >
      <h2 className={styles.header}>{headText}</h2>
      <p className={styles.paragraph}>{paragraph}</p>
    </motion.div>
  );
};
export default SactionHead;
