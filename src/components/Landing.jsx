import styles from "../styles/_Landing.module.scss";
import { lazy } from "react";
import { motion } from "framer-motion";
const Header = lazy(() => import("./UI/Header"));
const Container = lazy(() => import("./UI/Container"));
const MainButton = lazy(() => import("./UI/MainButton"));
const Title = lazy(() => import("./UI/Title"));
const Paragraph = lazy(() => import("./UI/Paragraph"));
const Landing = () => {
  return (
    <Header subClass={styles.header}>
      <Container>
        <div className={styles.title}>
          <Title text="your business to the next level" />
          <Paragraph
            text="i'm a Manila based graphic designer, illustrator and webdesigner
          creating awesome and effective visual identities for companies of
          all sizes around the globe. Lets start scrolling and learn more
          about me."
          />
          <motion.p
            className={styles.button}
            initial={{ y: "40px", opacity: 0, visiblility: "hidden" }}
            animate={{ y: 0, opacity: 1, visibility: "visible" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <MainButton text="get in touch" url="" />
          </motion.p>
        </div>
      </Container>
    </Header>
  );
};
export default Landing;
