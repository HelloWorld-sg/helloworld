import styles from "./ChatInput.module.css";
import icons from "../../Assets/icons.svg";

const ChatInput = () => {
  return (
    <div className={styles["input__block"]}>
      <input placeholder="Enter message here..." className={styles.input}></input>
      <svg className={styles["send__icon"]}>
        <use href={`${icons}#icon-send`}></use>
      </svg>
    </div>
  );
};

export default ChatInput;
