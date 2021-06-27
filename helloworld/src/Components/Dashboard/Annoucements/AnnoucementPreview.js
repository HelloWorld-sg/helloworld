import AnnoucementCard from "./AnnoucementCard";
import styles from "./AnnoucementPreview.module.css";
import icons from "../../../Assets/icons.svg";
import Button from "../../UI/Button";
import { Link } from "react-router-dom";
const AnnoucementPreview = () => {
  return (
    <div className={styles.preview}>
      <h5 className={styles["preview__header"]}>
        Latest Annoucement{" "}
        <svg className={styles["preview__icon"]}>
          <use href={`${icons}#icon-megaphone`} />
        </svg>
      </h5>
      <AnnoucementCard className={styles["preview__card-long"]}>
        <p>
          There has been a recent increase in hate crimes against the local Asian communities in
          this area. We strongly advise all parties...
        </p>
        <Link to="/annoucements">
          <Button className={styles["preview__button"]}>Read more</Button>
        </Link>
      </AnnoucementCard>
    </div>
  );
};

export default AnnoucementPreview;
