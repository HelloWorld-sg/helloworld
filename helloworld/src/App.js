import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
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

firebase.initializeApp({
  apiKey: "AIzaSyB8oHZr0Dao122Gg4B1Xv96l-TdjreD4f4",
  authDomain: "helloworld-97b45.firebaseapp.com",
  projectId: "helloworld-97b45",
  storageBucket: "helloworld-97b45.appspot.com",
  messagingSenderId: "566752995643",
  appId: "1:566752995643:web:0585729d57781dbd7bef1e",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

// export const SignOut = () => {
//   return auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>;
// };

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
              <ChatRoom />
              {/* <ChannelList /> */}
            </div>
          </Route>
          <Route path="/chat/:chatID">
            <Chat />
          </Route>
        </>
      )}
      {!user && <SignIn />}
    </>
  );
};
export default App;

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
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

function ChatRoom() {
  const messagesRef = firestore.collection("locations").doc("london").collection("london-socials");
  // const messagesRef = firestore.collection("messages");
  // console.log(messagesRef);
  const query = messagesRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });
  const messageList = messages && messages.map((msg) => <ChatMessage key={msg.id} message={msg} />);
  return <div>{messageList}</div>;
}

function ChatMessage(props) {
  const { text, uid } = props.message;
  return <p>{text}</p>;
}
