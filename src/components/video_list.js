import React from 'react';
import { connect } from 'react-redux';
import VideoListItem from './video_list_item';

// define a `mapStateToProps` function that takes in state and maps it to a key in an object.
const mapStateToProps = (reduxState) => ({
  videos: reduxState.video.list,
});

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} />;
  });

  return (
    <ul>
      {videoItems}
    </ul>
  );
};

// connect videolist so that now props.videos comes from redux
export default connect(mapStateToProps, null)(VideoList);
