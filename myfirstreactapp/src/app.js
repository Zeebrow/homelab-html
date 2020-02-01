import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './components/mylist.js';
import MyButton from './components/mybutton/mybutton.js';
import SendFeedback from './components/sendfeedback/sendfeedback.js';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            b1ClickedCount: 0,
            server: '192.168.1.76'
        };
    }
    b1GetReturnedCount = (b1ReturnedCount) => {
        this.setState({b1ClickedCount: b1ReturnedCount});
    }

    render() {
        return(
            <div>
                <h1>Yo.</h1>
                <br/>
                <div>Count: {this.state.b1ClickedCount}</div>
                <MyButton getReturnedCount={this.b1GetReturnedCount} name="b1"/>
                <br/>
                <SendFeedback />
            </div>
        );


    }

}

export default App;
