import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './components/mylist.js';
import MyButton from './components/mybutton/mybutton.js';
import SendFeedback from './components/sendfeedback/sendfeedback.js';

const pageOpened = Date.now();
console.log(pageOpened);
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            b3: {
                ClickedCount: 0,
                LastClicked: pageOpened
            },
            b1ClickedCount: 0,
            b1LastClicked: pageOpened,
            b2ClickedCount: 0,
            b2LastClicked: pageOpened,
            server: '192.168.1.76',
        };
        console.log(this.state);
    }
    b1GetReturnedCount = (b1ReturnedCount, b1LastClicked) => {
        console.log("Time then: " + pageOpened);
        console.log("Time now: " + Date.now());
        this.setState({b1ClickedCount: b1ReturnedCount});
        this.setState({b1LastClicked: pageOpened - this.state.b1LastClicked});
    }
    b2GetReturnedCount = (b2ReturnedCount, b2LastClicked) => {
        this.setState({b2ClickedCount: b2ReturnedCount});
        this.setState({b2LastClicked: this.state.b2LastClicked - pageOpened});
    }
    getReturnedCount = (ReturnedCount, ReturnedTime) => {
        console.log("Time then: " + pageOpened);
        console.log("Time now: " + Date.now());
        this.setState({
            b3:{
                ClickedCount: ReturnedCount,
                LastClicked: ReturnedTime - pageOpened
            }
        });
    }

    render() {
        return(
            <div>
                <h1>Yo.</h1>
                <br/>
                <div>B1 Count: {this.state.b1ClickedCount}</div>
                <div>B1 Time: {this.state.b1LastClicked}</div>
                <MyButton getReturnedCount={this.b1GetReturnedCount} name="b1"/>
                <br/>
                <div>B2 Count: {this.state.b2ClickedCount}</div>
                <div>B2 Time: {this.state.b2LastClicked}</div>
                <MyButton getReturnedCount={this.b2GetReturnedCount} name="b2"/>
                <br/>
                <div>B3 Count: {this.state.b3.ClickedCount}</div>
                <div>B3 Time: {this.state.b3.LastClicked}</div>
                <MyButton getReturnedCount={this.getReturnedCount} name="b3"/>
                <br/>
                <SendFeedback data={this.state} name="sender"/>
            </div>
        );


    }

}

export default App;
