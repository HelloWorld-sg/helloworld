import styles from "./Header.module.css";
import icons from "../../../Assets/icons.svg";
const Header = () => {
  return (
    <div className={styles.header}>
      <p className={styles.logo}>
        Hello<span>World</span>
      </p>
      <figure>
        <svg className={styles.profile}>
          <use href={`${icons}#icon-profile`} />
        </svg>
      </figure>
    </div>
  );
};

export default Header;
