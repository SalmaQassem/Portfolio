import { lazy, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import styles from "../../styles/_FeaturesCards.module.scss";
import { IoSearchOutline } from "react-icons/io5";
import { TfiAnnouncement, TfiTimer } from "react-icons/tfi";
const Container = lazy(() => import("../UI/Container"));
const MainButton = lazy(() => import("../UI/MainButton"));
const FeaturesCards = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref: elementRef, inView } = useInView();
  const cards = [
    {
      name: "search",
      text: "Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident.",
      icon: <IoSearchOutline />,
    },
    {
      name: "announcement",
      text: "Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident.",
      icon: <TfiAnnouncement />,
    },
    {
      name: "timer",
      text: "Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident.",
      icon: <TfiTimer />,
    },
  ];
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
    <Container>
      <motion.div
        className={styles.cards}
        ref={elementRef}
        initial="hidden"
        animate={inView || isVisible ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.2 }}
      >
        {cards.map((item, index) => {
          return (
            <motion.div
              key={index}
              className={styles.card}
              variants={defaultAnimation}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.innerCard}>
                <div className={styles.icon}>
                  <span className={styles.iconWrapper}>{item.icon}</span>
                </div>
                <h2>{item.name}</h2>
                <p className={styles.text}>{item.text}</p>
                <p className={styles.btnWrapper}>
                  <MainButton text="learn more" subClass={styles.button} />
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Container>
  );
};
export default FeaturesCards;
