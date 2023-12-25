import styles from "../styles/_Home.module.scss";
import { lazy } from "react";
const AnimatedContainer = lazy(() =>
  import("../components/UI/AnimatedContainer")
);
const Landing = lazy(() => import("../components/HomePage/Landing"));
const FeaturesCards = lazy(() => import("../components/HomePage/FeaturesCards"));
const Features = lazy(() => import("../components/HomePage/Features"));
const Home = () => {
  return (
    <AnimatedContainer>
      <div className={styles.home}>
        <Landing />
        <FeaturesCards />
        <Features />
      </div>
    </AnimatedContainer>
  );
};
export default Home;
