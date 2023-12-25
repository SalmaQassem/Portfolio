import styles from "../../styles/_Landing.module.scss";
import { lazy, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Header = lazy(() => import("../UI/Header"));
const Container = lazy(() => import("../UI/Container"));
const MainButton = lazy(() => import("../UI/MainButton"));
const Title = lazy(() => import("../UI/Title"));
const Paragraph = lazy(() => import("../UI/Paragraph"));
const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref: elementRef, inView } = useInView();
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
  const duration = 0.5;
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);
  return (
    <Header subClass={styles.header}>
      <Container>
        <motion.div
          className={styles.title}
          ref={elementRef}
          initial="hidden"
          animate={inView || isVisible ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.2 }}
        >
          <Title
            text="your business to the next level"
            variants={defaultAnimation}
            duration={duration}
          />
          <Paragraph
            text="i'm a Manila based graphic designer, illustrator and webdesigner
          creating awesome and effective visual identities for companies of
          all sizes around the globe. Lets start scrolling and learn more
          about me."
            variants={defaultAnimation}
            duration={duration}
          />
          <motion.p
            className={styles.button}
            variants={defaultAnimation}
            transition={{ duration: duration }}
          >
            <MainButton text="get in touch" url="" />
          </motion.p>
        </motion.div>
      </Container>
    </Header>
  );
};
export default Landing;
