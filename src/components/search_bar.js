import React, { Component } from 'react';
// ^Syntax so we don't need React.Component

class Search extends Component {
	// state is an object
	// constructor called automatically when new isntance of class instantiated.

	constructor(props){
		// TODO What is Component's initializer?
		super(props);

		this.state = { term:'' }
	}

	// every react component should have a render method
	render() {
		// onChange is property we pass to input (prop)
		// ^ Specific react event we listen for
		// TODO go to react docs to find more events to listen to
				// <input onChange={this.onInputChange}/>
		return (
			<div>
				<input
					value={this.state.term}
					onChange={event => this.setState({term: event.target.value})}/>
			</div>
		);
		// this.state.term is OK because is getter
		// Curly brace for rendering js variables.

		// We know value is always the correct, latest value because this.setState
		// will change the state and trigger the componenet to be refreshed,
		// giving it the latest value
	}

	// e describes information about event
	// For some reason, value does not render correctly when we use onInputChange,
	// probably because of JS is async
	// onInputChange(e) {
		// this.setState({term: e.target.value});

		// Manipulate state with setState, never do this.state.term = asdfasd;
	// }
}

// Controlled component has value set from state
// Value changes, when the state changes.

// When setState is called, the component automatically rerenders

// Any file that references this will get search
export default Search;