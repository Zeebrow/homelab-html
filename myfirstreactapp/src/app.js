import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './components/mylist.js';
import MyButton from './components/mybutton/mybutton.js';
import SendFeedback from './components/sendfeedback/sendfeedback.js';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            b1:{ClickedCount: 0, LastClicked: ''},
            b2:{ClickedCount: 0, LastClicked: ''},
            server: '192.168.1.76'
        };
    }
    b1GetReturnedCount = (b1ReturnedCount) => {
        this.setState({b1.ClickedCount: b1ReturnedCount});
        this.setState({b1.LastClicked: 'today, lol!!1'});
    }
    b2GetReturnedCount = (b2ReturnedCount) => {
        this.setState({b2.ClickedCount: b2ReturnedCount});
        this.setState({b2.LastClicked: 'today, lol!!1'});
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
                <SendFeedback />
            </div>
        );


    }

}

export default App;
