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
            b1LastClicked: '',
            b2ClickedCount: 0,
            b2LastClicked: '',
            server: '192.168.1.76'
        };
        console.log(this.state);
    }
    b1GetReturnedCount = (b1ReturnedCount) => {
        this.setState({b1ClickedCount: b1ReturnedCount});
        this.setState({b1LastClicked: 'today, lol!!1'});
    }
    b2GetReturnedCount = (b2ReturnedCount) => {
        this.setState({b2ClickedCount: b2ReturnedCount});
        this.setState({b2LastClicked: 'today, lol!!1'});
    }

    render() {
        return(
            <div>
                <h1>Yo.</h1>
                <br/>
                <div>Count: {this.state.b1ClickedCount}</div>
                <MyButton getReturnedCount={this.b1GetReturnedCount} name="b1"/>
                <MyButton getReturnedCount={this.b2GetReturnedCount} name="b2"/>
                <br/>
                <SendFeedback data={this.state} name="sender"/>
            </div>
        );


    }

}

export default App;
