import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import Search from './components/search_bar';

const API_KEY = 'AIzaSyA5g0F6tuAIU8F5ZXYTwOm8oRvwrjNPvYc';


YTSearch({key: API_KEY, term: 'surfboards'}, function(data{
	console.log(data);
}))

// Create component that generates html
// const means App will never change.
const App = function () {
	// This is JSX
	return (
		<div>
			<Search />
		</div>
	);
}
// How does styling get applied?

// Tell react to insert component in DOM
// Make an instance by wrapping component in JSX tags (< />)
ReactDOM.render(<App />, document.querySelector('.container'));

// React transfroms the components into html
// ReactDOM responsible for placing it into the dom. Render takes 2 args, the
// instance of a component and the DOM element wher you want to plac eit.
