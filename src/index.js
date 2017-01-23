import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import Search from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyA5g0F6tuAIU8F5ZXYTwOm8oRvwrjNPvYc';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term){
    // Use YTSearch to query youtube.
    // returns array of objects with youtube data
    // use setState
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      // Same as this.setState({ videos }), since var and setter are
      // same ES6 sugar
    });
  }

  render() {
    return (
      <div>
        <Search onSearchTermChange={term=>this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}


// NOTES
// Create component that generates html
// const means App will never change.

// How does styling get applied?

// Tell react to insert component in DOM
// Make an instance by wrapping component in JSX tags (< />)
ReactDOM.render(<App />, document.querySelector('.container'));

// React transfroms the components into html
// ReactDOM responsible for placing it into the dom. Render takes 2 args, the
// instance of a component and the DOM element wher you want to plac eit.

//Need to pass data from parent, App, to child, VideoList

// Parent objects cant give data fast enoguh to child element to render.