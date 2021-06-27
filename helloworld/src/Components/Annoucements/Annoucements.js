import Header from "../Dashboard/Header/Header";
import AnnoucementHeader from "./AnnoucementHeader";
import styles from "./Annoucements.module.css";
import icons from "../../Assets/icons.svg";
import AnnoucementCard from "../Dashboard/Annoucements/AnnoucementCard";
const Annoucements = () => {
  return (
    <div>
      <AnnoucementHeader />
      <div className={styles["annoucement__block"]}>
        <p className={styles.title}>
          MFA Annoucements{" "}
          <svg className={styles["annoucement__icon"]}>
            <use href={`${icons}#icon-megaphone`} />
          </svg>
        </p>
        <div className={styles["annoucement__item"]}>
          <h3>26 JUNE 2021</h3>
          <AnnoucementCard>
            There has been a recent increase in hate crimes against the local Asian communities in
            this area. We strongly advise all parties to exercise caution and avoid dimly lit areas
            whenever possible.
          </AnnoucementCard>
        </div>
        <div className={styles["annoucement__item"]}>
          <h3>20 JUNE 2021</h3>
          <AnnoucementCard>
            Do note the recent updates to the validity of the mandatory pre-departure COVID-19 test.
            Only tests that were conducted 72 hours before the date of departure will be considered
            valid.
          </AnnoucementCard>
        </div>
        <div className={styles["annoucement__item"]}>
          <h3>15 JUNE 2021</h3>
          <AnnoucementCard>
            ALERT We just received reports of a suspected gunmen near Padding station. All
            Singaporeans are strongly advised to refrain travel to the area. Those currently
            situated there should seek shelter in indoor areas. We will continue to monitor the
            situation as it unfolds. Stay safe.
          </AnnoucementCard>
        </div>
        <div className={styles["annoucement__item"]}>
          <h3>05 JUNE 2021</h3>
          <AnnoucementCard>
            Given the evolving COVID-19 situation and rapid increase of COVID-19 cases around the
            globe, we encourage Singaporean students studying overseas to consider returning home
            soon. Institutes of Higher Learning in Singapore have begun recalling their students
            currently on overseas internship or exchange.
          </AnnoucementCard>
        </div>
        <div className={styles["annoucement__item"]}>
          <h3>22 MAY 2021</h3>
          <AnnoucementCard>
            There has been a recent increase in hate crimes against the local Asian communities in
            this area. We strongly advise all parties to exercise caution and avoid dimly lit areas
            whenever possible.
          </AnnoucementCard>
        </div>
      </div>
    </div>
  );
};

export default Annoucements;
