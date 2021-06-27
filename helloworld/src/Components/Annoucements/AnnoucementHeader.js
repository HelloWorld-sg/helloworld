import { Link } from "react-router-dom";
import styles from "./AnnoucementHeader.module.css";
import icons from "../../Assets/icons.svg";
const AnnoucementHeader = () => {
  return (
    <div className={styles.header}>
      <Link to="/dashboard">
        <svg className={styles["header__icon"]}>
          <use href={`${icons}#icon-leftarrow`}></use>
        </svg>
      </Link>
      <p className={styles["header__title"]}>London, United Kingdom</p>
    </div>
  );
};

export default AnnoucementHeader;
