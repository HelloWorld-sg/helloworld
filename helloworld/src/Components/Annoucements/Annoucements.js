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
            There has been a recent increase in hate crimes against the local Asian communities in
            this area. We strongly advise all parties to exercise caution and avoid dimly lit areas
            whenever possible.
          </AnnoucementCard>
        </div>
        <div className={styles["annoucement__item"]}>
          <h3>15 JUNE 2021</h3>
          <AnnoucementCard>
            There has been a recent increase in hate crimes against the local Asian communities in
            this area. We strongly advise all parties to exercise caution and avoid dimly lit areas
            whenever possible.
          </AnnoucementCard>
        </div>
        <div className={styles["annoucement__item"]}>
          <h3>05 JUNE 2021</h3>
          <AnnoucementCard>
            There has been a recent increase in hate crimes against the local Asian communities in
            this area. We strongly advise all parties to exercise caution and avoid dimly lit areas
            whenever possible.
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
