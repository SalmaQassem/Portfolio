import styles from "../styles/_Home.module.scss";
import { lazy } from "react";
const AnimatedContainer = lazy(() =>
  import("../components/UI/AnimatedContainer")
);
const Landing = lazy(() => import("../components/Landing"));
const Features = lazy(() => import("../components/Features"));
const Home = () => {
  return (
    <AnimatedContainer>
      <div className={styles.home}>
        <Landing />
        <Features />
      </div>
    </AnimatedContainer>
  );
};
export default Home;
