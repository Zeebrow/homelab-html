import React from 'react';

class SendFeedback extends React.Component {
    constructor(props){
        super(props);
		this.state = {
            server: '192.168.1.76',
        };
        this.sendFeedback = this.sendFeedback.bind(this);
    }

    // receiveData() {
    //     console.log("Inside receiveData(). Data: " + this.props.data;
    //     this.setState({data: this.props.data});
    // }

	sendFeedback = () => {
        console.log("Inside sendFeedback(). Data: " + this.props.data;
        this.setState({data: this.props.data});

		this.setState({ server: '192.168.1.76' });
        alert('Sending data to ' + this.state.server);

        console.log("Data: "+this.props.data);
        console.log("Server: "+this.state.server);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", this.props.data, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            data: this.props.data
        }));
        console.log('Sending data to ' + this.state.server);


        //send data, promise
	}
	render() {
		return(
			<div>
				<button onClick={() => this.sendFeedback()}>Send Data</button>
			</div>
		);
    }

}

export default SendFeedback;
