import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firebaseAction } from "./store/mainSlice";

import { useDispatch, useSelector } from "react-redux";
import Chat from "./Components/Chat/Chat";
import Annoucements from "./Components/Annoucements/Annoucements";
import icons from "./Assets/icons.svg";

firebase.initializeApp({
  apiKey: "AIzaSyB8oHZr0Dao122Gg4B1Xv96l-TdjreD4f4",
  authDomain: "helloworld-97b45.firebaseapp.com",
  projectId: "helloworld-97b45",
  storageBucket: "helloworld-97b45.appspot.com",
  messagingSenderId: "566752995643",
  appId: "1:566752995643:web:0585729d57781dbd7bef1e",
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// function ChatRoom() {
//   const messagesRef = firestore.collection("messages");
//   const query = messagesRef.orderBy("createdAt").limit(25);
//   const [messages] = useCollectionData(query, { idField: "id" });
// }

const App = () => {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  const channelInfo = useSelector((state) => state.firebase.channels);

  useEffect(() => {
    async function getData() {
      // const channelRef = await firestore.collection("locations").doc("london");
      const queryChannels = await firestore.doc("locations/london").get();
      const channels = queryChannels.data().channels;
      console.log(channels);
      const channelInfo = await Promise.all(
        channels.map(async (ele) => {
          const querySnapshot = await firestore.doc(`locations/london/${ele}/info`).get();
          return querySnapshot.data();
        })
      );
      dispatch(firebaseAction.setChannels(channelInfo));
    }
    getData();
  }, []);

  if (channelInfo.length < 1) return <div></div>;

  return (
    <>
      {user && (
        <>
          <Route path="/dashboard">
            <div>
              <Dashboard></Dashboard>
              {/* <ChannelList /> */}
            </div>
          </Route>
          <Route path="/chat/:chatID">
            <Chat />
          </Route>
          <Route path="/annoucements">
            <Annoucements />
          </Route>
        </>
      )}
      {!user && (
        <SignIn />
        // <Route path="*">
        //   <Redirect to="/signin"></Redirect>
        // </Route>
      )}
      <Route path="*">
        <Redirect to="/dashboard"></Redirect>
      </Route>
      {/* <Route path="/signin">
        <SignIn />
      </Route> */}
    </>
  );
};
export default App;

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <div className={"signIn__block"}>
      <p className={"signIn__logo"}>
        Hello<span>World</span>
      </p>
      <button className={"google__button"} onClick={signInWithGoogle}>
        <img
          className={"google__logo"}
          src="https://www.wemu.org/sites/wemu/files/201701/Google_-G-_Logo.svg_.png"
        ></img>
        Sign in with Google
      </button>
    </div>
  );
}

// function ChannelList() {
//   const dispatch = useDispatch();

//   async function getData() {
//     // const channelRef = await firestore.collection("locations").doc("london");
//     const queryChannels = await firestore.doc("locations/london").get();
//     const channels = queryChannels.data().channels;
//     console.log(channels);
//     const channelInfo = await Promise.all(
//       channels.map(async (ele) => {
//         const querySnapshot = await firestore.doc(`locations/london/${ele}/info`).get();
//         return querySnapshot.data();
//       })
//     );
//     // .collection("covid-19")
//     // .doc("info");
//     console.log(channelInfo);
//     // console.log(channelRef.data());
//     // channelRef && dispatch(firebaseAction.setChannels(channelRef));
//   }
//   getData();
//   return <div></div>;
// }

// function ChatRoom() {
//   const messagesRef = firestore.collection("locations").doc("london").collection("london-socials");
//   // const messagesRef = firestore.collection("messages");
//   // console.log(messagesRef);
//   const query = messagesRef.orderBy("createdAt").limit(25);
//   const [messages] = useCollectionData(query, { idField: "id" });
//   const messageList = messages && messages.map((msg) => <ChatMessage key={msg.id} message={msg} />);
//   return <div>{messageList}</div>;
// }

function ChatMessage(props) {
  const { text, uid } = props.message;
  return <p>{text}</p>;
}
