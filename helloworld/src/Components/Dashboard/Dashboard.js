import styles from "./Dashboard.module.css";
import Header from "./Header/Header";
const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className={styles.subscription}>
        <p className={styles["subscription__header"]}>Currently subscribing to:</p>
        <p className={styles["subscription__location"]}>London, United Kingdom</p>
      </div>
    </div>
  );
};

export default Dashboard;
