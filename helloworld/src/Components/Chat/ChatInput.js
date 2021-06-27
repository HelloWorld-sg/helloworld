import styles from "./ChatInput.module.css";
import icons from "../../Assets/icons.svg";
import { useState } from "react";
import { auth, firestore } from "../../App";
import { useParams } from "react-router-dom";
import firebase from "firebase/app";

const ChatInput = (props) => {
  const params = useParams();
  const [formValue, setFormValue] = useState("");
  const channelRef = firestore.collection(`locations/london/${params.chatID}`);

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await channelRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
    setFormValue("");
    props.scrollHandler();
  };

  return (
    <form onSubmit={sendMessage}>
      <div className={styles["input__block"]}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Enter message here..."
          className={styles.input}
        ></input>
        <button type="submit" className={styles.submit}>
          <svg className={styles["send__icon"]}>
            <use href={`${icons}#icon-send`}></use>
          </svg>
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
