import { lazy, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/_Features.module.scss";
import { IoSearchOutline } from "react-icons/io5";
import { TfiAnnouncement, TfiTimer } from "react-icons/tfi";
const Container = lazy(() => import("../components/UI/Container"));
const MainButton = lazy(() => import("../components/UI/MainButton"));
const Features = () => {
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
  useEffect(() => {
    console.log(inView);
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);
  return (
    <div className={styles.features} ref={elementRef}>
      <Container>
        <AnimatePresence>
          {(inView || isVisible) && (
            <div className={styles.cards}>
              {cards.map((item, index) => {
                return (
                  <motion.div
                    key={index}
                    className={styles.card}
                    initial={{
                      opacity: 0,
                      visibility: "hidden",
                      transform: "translate3d(0, 40px, 0)",
                    }}
                    animate={{
                      opacity: 1,
                      visibility: "visible",
                      transform: "translate3d(0, 0, 0)",
                    }}
                    transition={{
                      type: "spring",
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                  >
                    <div className={styles.innerCard}>
                      <div className={styles.icon}>
                        <span className={styles.iconWrapper}>{item.icon}</span>
                      </div>
                      <h2>{item.name}</h2>
                      <p className={styles.text}>{item.text}</p>
                      <p className={styles.btnWrapper}>
                        <MainButton
                          text="learn more"
                          subClass={styles.button}
                        />
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </AnimatePresence>
      </Container>
    </div>
  );
};
export default Features;
