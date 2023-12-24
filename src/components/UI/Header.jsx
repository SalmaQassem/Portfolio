import styles from "../../styles/_Header.module.scss";

// eslint-disable-next-line react/prop-types
const Header = ({ subClass, children }) => {
  return <div className={`${styles.header} ${subClass}`}>{children}</div>;
};
export default Header;
