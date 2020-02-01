import React from 'react';

class MyButton extends React.Component {
    constructor(props){
        super(props);
		this.state = {clickedCount: 0};
        this.clickCounter = this.clickCounter.bind(this);
    }

	clickCounter(){
        this.setState({clickedCount: this.state.clickedCount+1});
        this.props.getReturnedCount(this.state.clickedCount);
		console.log(this.props.name + " clicked count: "+this.state.clickedCount);
	}

	render() {
		return(
			<div>
				<div>{this.props.name} clicked: {this.state.value}</div>
				<button onClick={this.clickCounter}>Click Me!</button>
			</div>
		);
    }

}

export default MyButton;
