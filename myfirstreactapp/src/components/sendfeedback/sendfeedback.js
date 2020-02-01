import React from 'react';

class SendFeedback extends React.Component {
    constructor(props){
        super(props);
		this.state = {
            server: '192.168.1.76',
            data: 'test-data'
        };

        this.sendFeedback = this.sendFeedback.bind(this);
    }

	sendFeedback = () => {
		this.setState({ server: '192.168.1.76' });
		console.log('Sending data to ' + this.state.server);
        alert('Sending data to ' + this.state.server);
        //send data, promise
	}
	render() {
		return(
			<div>
				<div>Server: {this.state.value}</div>
				<button onClick={() => this.sendFeedback()}>Send Data</button>
			</div>
		);
    }

}

export default SendFeedback;
