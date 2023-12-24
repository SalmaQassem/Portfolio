import styles from "../styles/_About.module.scss";
import { lazy } from "react";
const AnimatedContainer = lazy(() =>
  import("../components/UI/AnimatedContainer")
);
const Header = lazy(() => import("../components/UI/Header"));
const About = () => {
  return (
    <AnimatedContainer>
      <Header></Header>
    </AnimatedContainer>
  );
};
export default About;
