import React from 'react';
import VideoListItem from './video_list_item';

// Use className to set CSS class because class is conflictng
// props is incoming data from parent component, app/
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    // Add key to help React keep track of list under the hood
    return <VideoListItem key={video.etag} video={video} />
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

// export so other components can make use of it.
export default VideoList;