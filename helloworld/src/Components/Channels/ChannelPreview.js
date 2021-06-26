import ChannelPreviewItem from "./ChannelPreivewItem";
import styles from "./ChannelPreview.module.css";

const ChannelPreview = () => {
  return (
    <div className={styles.preview}>
      <ChannelPreviewItem />
      <ChannelPreviewItem />
      <ChannelPreviewItem />
    </div>
  );
};

export default ChannelPreview;
