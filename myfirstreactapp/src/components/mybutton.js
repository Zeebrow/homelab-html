import React, { Component } from 'react';

const os = require('os');

class MyButton extends Component {
    constructor(props){
        super(props);
		this.state = {count: 0};

        this.clickCounter = this.clickCounter.bind(this);
    }

	clickCounter(){
		this.setState({value: this.state.value+1});
		console.log(this.state.value);
	}

	render(){
		return(
			<div>
				<div>Clicked: {this.state.value}</div>
				<button onClick={this.clickCounter}>Click Me!</button>
			</div>
		);
	}


}

export default MyButton;
