import { auth, firestore } from "../../App";
import styles from "./Chat.module.css";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";

import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "./ChatMessage";
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
const Chat = () => {
  const params = useParams();
  const messagesRef = firestore.collection("locations").doc("london").collection(params.chatID);
  // const messagesRef = firestore.collection("messages");
  // console.log(messagesRef);
  const query = messagesRef.orderBy("createdAt", "desc").limit(15);
  const [messages] = useCollectionData(query, { idField: "id" });
  const messageList =
    messages && messages.reverse().map((msg) => <ChatMessage key={msg.id} message={msg} />);
  const dummy = useRef(null);
  const messageRef = useRef();
  console.log(messages);

  return (
    <>
      <ChatHeader />
      <div ref={messageRef} className={styles["message__list"]}>
        {messageList}
      </div>
      <div ref={dummy}></div>
      <ChatInput />
    </>
  );
};

export default Chat;
