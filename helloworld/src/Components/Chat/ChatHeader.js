import styles from "./ChatHeader.module.css";
import icons from "../../Assets/icons.svg";
import Avatar from "../UI/Avatar";
import { useSelector } from "react-redux";
import { Link, Route, useParams, NavLink, useLocation } from "react-router-dom";
import { firestore } from "../../App";

const ChatHeader = () => {
  const params = useParams();
  const [channel] = useSelector((state) =>
    state.firebase.channels.filter((ele) => ele.id === params.chatID)
  );
  const location = useLocation();
  const [endPath] = location.pathname.split("/").slice(-1);

  console.log(channel);
  return (
    <>
      <div className={styles["header"]}>
        <div className={styles["header__main"]}>
          <Link to="/dashboard">
            <svg className={styles["header__icon"]}>
              <use href={`${icons}#icon-leftarrow`}></use>
            </svg>
          </Link>
          <div className={styles["header__channel"]}>
            <Avatar size="small" url={channel.photoURL} />
            <p className={styles["header__title"]}>{channel.title}</p>
          </div>
        </div>
        <Link to={`/chat/${params.chatID}${endPath != "details" ? "/details" : ""}`}>
          <div className={`${styles.wrapper} ${endPath == "details" && styles["wrapper__close"]}`}>
            <svg
              className={`${styles["info__icon"]} ${
                endPath == "details" && styles["collapse__modal"]
              }`}
            >
              <use href={`${icons}#icon-downarrow`}></use>
            </svg>
          </div>
        </Link>
      </div>
      <Route path={`/chat/${params.chatID}/details`}>
        <div className={styles["detail__modal"]}>
          <p>
            <strong>540</strong> subscribers
          </p>
          <p>
            Based in: <strong>London, United Kingdom</strong>
          </p>
          <p> Please discuss issues within the boundaries of this chat group</p>
        </div>
      </Route>
    </>
  );
};

export default ChatHeader;
