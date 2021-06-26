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
    </div>
  );
};
export default Dashboard;
