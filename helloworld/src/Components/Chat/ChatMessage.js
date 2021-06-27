import { auth } from "../../App";
import Avatar from "../UI/Avatar";
import styles from "./ChatMessage.module.css";
function msToTime(ms) {
  const dateObj = new Date(ms);
  return `${dateObj.getHours().toString().padStart(2, "0")}:${dateObj
    .getMinutes()
    .toString()
    .padStart(2, "0")} hrs`;
}

const ChatMessage = (props) => {
  const { text, uid, photoURL, createdAt } = props.message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  const time = msToTime(createdAt.seconds * 1000);

  return (
    <div className={`${styles.message} ${styles[messageClass]}`}>
      <Avatar url={photoURL} size="small" />
      <div className={styles["message__text"]}>
        {text} <p className={styles["message__time"]}>{time}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
