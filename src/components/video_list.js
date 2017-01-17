import React from 'react';

// Use className to set CSS class because class is conflictng
const VideoList = (props) => {
  return (
    <ul className="col-md-4 list-group">
      {props.videos.length}
    </ul>
  );
};

// export so other components can make use of it.
export default VideoList;