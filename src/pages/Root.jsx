import styles from "../styles/_Root.module.scss";
import { lazy } from "react";
import { Outlet } from "react-router-dom";
const NavBar = lazy(() => import("../components/NavBar/NavBar"));
const Root = () => {
  return (
    <div className={styles.wrapper}>
      <NavBar />
      <Outlet />
    </div>
  );
};
export default Root;
