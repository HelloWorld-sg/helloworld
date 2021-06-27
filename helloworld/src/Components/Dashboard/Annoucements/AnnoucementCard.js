import styles from "./AnnoucementCard.module.css";

const AnnoucementCard = (props) => {
  return (
    <div className={`${styles.card} ${props.className}`}>
      <p>{props.children}</p>
    </div>
  );
};

export default AnnoucementCard;
