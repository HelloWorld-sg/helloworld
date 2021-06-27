import styles from "./ChannelPreviewItem.module.css";

const ChannelPreviewItem = (props) => {
  return (
    <div className={styles["preview__item"]}>
      <img className={styles["preview__image"]} src={props.data.photoURL}></img>
      <div className={styles["channel__info"]}>
        <p className={styles["channel__header"]}>{props.data.title}</p>
        {/* <p className={styles["channel__message"]}>
          <strong>Tom: </strong>Does anyone else feel homesick...
        </p> */}
      </div>
    </div>
  );
};

export default ChannelPreviewItem;
