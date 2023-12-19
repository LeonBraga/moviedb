import React from 'react';
import styles from "./video-card.module.css";

const VideoCard = ({ video }) => {
  const { thumbnailUrl, title, channelName, viewCount, publishedDate } = video;

  return (
    <div className={styles.videoCard}>
      <a href="#">
        <img src={thumbnailUrl} alt={title} />
      </a>
      <div className={styles.videoInfo}>
        <h3>
          <a href="#">{title}</a>
        </h3>
        <p>{channelName}</p>
        <span>{viewCount} views</span>
        <span>{publishedDate}</span>
      </div>
    </div>
  );
};

export default VideoCard;