// change require to es6 import style
import '../style.scss';
import debounce from 'lodash.debounce';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './search_bar';
import youtubeSearch from '../youtube-api';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import { setVideos } from '../actions';


/* function p(x) {
  const num = (new Date().getTime()) - x;
  $('#main').html(`Youve been on this page for ${num / 1000} seconds.`);
}

const starttime = new Date().getTime();
setInterval(function() { p(starttime); }, 1000);  */


class YouTube extends Component {
  // here's what our constructor would look like
  constructor(props) {
    super(props);

    this.search = debounce(this.search, 300);
    this.search('pixar');
  }

  search = (text) => {
    youtubeSearch(text).then((videos) => {
      this.props.setVideos(videos);
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchChange={this.search} />
        <div id="video-section">
          <VideoDetail />
          <VideoList />
        </div>
      </div>
    );
  }
}

export default connect(null, { setVideos })(YouTube);
