import styles from "./ChannelPreviewItem.module.css";

const ChannelPreviewItem = () => {
  return (
    <div className={styles["preview__item"]}>
      <img
        className={styles["preview__image"]}
        src={
          "https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg"
        }
      ></img>
      <div className={styles["channel__info"]}>
        <p className={styles["channel__header"]}>London Socials</p>
        <p className={styles["channel__message"]}>
          <strong>Tom: </strong>Does anyone else feel homesick...
        </p>
      </div>
    </div>
  );
};

export default ChannelPreviewItem;
