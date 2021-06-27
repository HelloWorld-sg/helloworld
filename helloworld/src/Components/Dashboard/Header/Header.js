import styles from "./Header.module.css";
import icons from "../../../Assets/icons.svg";
import { auth } from "../../../App";
import Avatar from "../../UI/Avatar";

const SignOut = () => {
  return (
    auth.currentUser && (
      <button className={styles.button} onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
};

const Header = () => {
  const { uid, photoURL } = auth.currentUser;
  return (
    <div className={styles.header}>
      <p className={styles.logo}>
        Hello<span>World</span>
      </p>
      <div className={styles.rightPanel}>
        <SignOut />
        <Avatar size="small" url={photoURL}></Avatar>
      </div>
    </div>
  );
};

export default Header;
