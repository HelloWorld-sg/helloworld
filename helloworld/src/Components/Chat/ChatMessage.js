import { auth } from "../../App";
import Avatar from "../UI/Avatar";
import styles from "./ChatMessage.module.css";

const ChatMessage = (props) => {
  const { text, uid, photoURL } = props.message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <div className={`${styles.message} ${styles[messageClass]}`}>
      <Avatar url={photoURL} size="small" />
      <div className={styles["message__text"]}>{text}</div>
    </div>
  );
};

export default ChatMessage;
