import styles from "./AnnoucementCard.module.css";

const AnnoucementCard = (props) => {
  return <div className={`${styles.card} ${props.className}`}>{props.children}</div>;
};

export default AnnoucementCard;
