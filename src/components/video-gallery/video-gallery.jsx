import React from 'react';
import VideoCard from '../video-card/video-card';

const VideoGallery = ({ videos }) => {
  return (
    <div className="video-gallery">
      {/* {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))} */}
    </div>
  );
};

export default VideoGallery;