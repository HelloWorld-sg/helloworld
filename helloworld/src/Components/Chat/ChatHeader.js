import styles from "./ChatHeader.module.css";
import icons from "../../Assets/icons.svg";
import Avatar from "../UI/Avatar";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const ChatHeader = () => {
  const params = useParams();
  const [channel] = useSelector((state) =>
    state.firebase.channels.filter((ele) => ele.id === params.chatID)
  );
  console.log(channel);
  return (
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
      <svg className={styles["header__icon"]}>
        <use href={`${icons}#icon-downarrow`}></use>
      </svg>
    </div>
  );
};

export default ChatHeader;
