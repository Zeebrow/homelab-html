import React from 'react';

class MyButton extends React.Component {
    constructor(props){
        super(props);
		this.state = {
            clickedCount: 1,
            lastClicked: ''
        };
        this.clickCounter = this.clickCounter.bind(this);
    }

	clickCounter(){
        const t = Date.now();
        this.setState({ clickedCount: this.state.clickedCount+1 });
        this.setState({ lastClicked: t });
        this.props.getReturnedCount(this.state.clickedCount, this.state.lastClicked);
		console.log(this.props.name + " clicked count: "+this.state.clickedCount);
        console.log(this.props.name + " last licked count: "+this.state.lastClicked);
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
