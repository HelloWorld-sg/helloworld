import ChannelPreviewItem from "./ChannelPreivewItem";
import styles from "./ChannelPreview.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ChannelPreview = () => {
  const channelList = useSelector((state) => state.firebase.channels);
  const channelCards = channelList.map((channel) => {
    console.log(channel);
    return (
      <Link to={`/chat/${channel.id}`}>
        <ChannelPreviewItem data={channel} />
      </Link>
    );
  });
  return <div className={styles.preview}>{channelCards}</div>;
};

export default ChannelPreview;
