import styles from "../../styles/_MainButton.module.scss";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const MainButton = ({ text, url, subClass }) => {
  return (
    <Link to={url} className={`${styles.button} ${subClass}`}>
      {text}
    </Link>
  );
};
export default MainButton;
