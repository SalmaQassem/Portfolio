import styles from "../../styles/_Features.module.scss";
import { lazy } from "react";
const Container = lazy(() => import("../UI/Container"));
const SectionHead = lazy(() => import("../UI/SectionHead"));
const FeaturesList = lazy(() => import("./FeaturesList"));
const Features = () => {
  return (
    <section className={styles.features}>
      <Container>
        <SectionHead
          headText="aesthetic features"
          paragraph="Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius."
        />
        <FeaturesList />
      </Container>
    </section>
  );
};
export default Features;
