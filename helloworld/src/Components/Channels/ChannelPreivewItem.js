import { useEffect, useState } from "react";
import { firestore } from "../../App";
import Avatar from "../UI/Avatar";
import styles from "./ChannelPreviewItem.module.css";

const ChannelPreviewItem = (props) => {
  const [lastMessageData, setLastMessageData] = useState();
  async function getLastMessage() {
    if (!props.data.id) return;
    const lastMessageRef = firestore.collection(`locations/london/${props.data.id}`);
    const lastMessage = await lastMessageRef.orderBy("createdAt", "desc").limit(1).get();
    console.log(lastMessage);
    const data = lastMessage.forEach((ele) => ele && setLastMessageData(ele.data()));
  }

  useEffect(() => {
    getLastMessage();
  }, []);

  if (!lastMessageData && !props.type) return <></>;
  return (
    <div className={styles["preview__item"]}>
      <img className={styles["preview__image"]} src={props.data.photoURL}></img>
      <div className={styles["channel__info"]}>
        <p className={styles["channel__header"]}>{props.data.title}</p>
        {props.type && <button className={styles["channel__join"]}>Join</button>}

        {!props.type && (
          <p className={styles["channel__message"]}>
            <Avatar url={lastMessageData.photoURL} size="mini" /> {lastMessageData.text}
          </p>
        )}
      </div>
    </div>
  );
};

export default ChannelPreviewItem;
