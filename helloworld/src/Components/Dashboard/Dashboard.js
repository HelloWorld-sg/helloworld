import { useEffect } from "react";
import { firestore } from "../../App";
import ChannelPreviewItem from "../Channels/ChannelPreivewItem";
import ChannelPreview from "../Channels/ChannelPreview";
import AnnoucementPreview from "./Annoucements/AnnoucementPreview";
import styles from "./Dashboard.module.css";
import Header from "./Header/Header";

const Dashboard = (props) => {
  return (
    <div className={styles.dashboard}>
      <Header />
      <div className={styles.subscription}>
        <p className={styles["subscription__header"]}>Currently subscribing to:</p>
        <p className={styles["subscription__location"]}>London, United Kingdom</p>
      </div>
      <AnnoucementPreview />
      <ChannelPreview />
      <p className={styles.discover}>Discover more chats in your area...</p>
      <ChannelPreviewItem
        data={{
          photoURL:
            "https://tse3.mm.bing.net/th?id=OIP.oiFbJ-x8hQ_UrcoN6tiYtgHaE7&pid=Api&P=0&w=260&h=174",
          title: "Camden Street 71 Bros",
        }}
      ></ChannelPreviewItem>
    </div>
  );
};
export default Dashboard;
