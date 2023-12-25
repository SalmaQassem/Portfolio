import styles from "../../styles/_FeaturesList.module.scss";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { TfiVector, TfiSettings, TfiRulerPencil,TfiTablet } from "react-icons/tfi";
import { motion } from "framer-motion";
const FeaturesList = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref: elementRef, inView } = useInView({ threshold: 0.5 });
  const features = [
    {
      icon: <TfiVector />,
      title: "pixel perfect",
      description:
        "Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident.",
    },
    {
      icon: <TfiTablet />,
      title: "fully responsive",
      description:
        "Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident.",
    },
    {
      icon: <TfiSettings />,
      title: "web development",
      description:
        "Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident.",
    },
    {
      icon: <TfiRulerPencil />,
      title: "web design",
      description:
        "Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident.",
    },
  ];
  const defaultAnimation = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);
  return (
    <motion.div
      className={styles.featuresList}
      ref={elementRef}
      initial="hidden"
      animate={inView || isVisible ? "visible" : "hidden"}
      transition={{ staggerChildren: 0.25 }}
    >
      {features.map((item, index) => {
        return (
          <motion.div
            key={index}
            className={styles.featureWrapper}
            variants={defaultAnimation}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.feature}>
              <div className={styles.icon}>{item.icon}</div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
export default FeaturesList;
