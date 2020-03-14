import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './components/mylist.js';
import MyButton from './components/mybutton/mybutton.js';
import SendFeedback from './components/sendfeedback/sendfeedback.js';
import './styles/App.css'
const pageOpened = Date.now();
console.log(pageOpened);
class App extends React.Component {
    constructor() {
        super();
        const buttonList = ['b1', 'b2', 'b3'];
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
    b1GetReturnedCount = (b1ReturnedCount, b1LastClicked, b1name) => {
        console.log("Time then: " + pageOpened);
        console.log("Time now: " + Date.now());
        var b1clickedAt = Date.now() - pageOpened;
        this.setState({b1ClickedCount: b1ReturnedCount});
        this.setState({b1LastClicked: b1clickedAt});
    }
    b2GetReturnedCount = (b2ReturnedCount, b2LastClicked, b2name) => {
        console.log("Time then: " + pageOpened);
        console.log("Time now: " + Date.now());
        var b2clickedAt = Date.now() - pageOpened;
        this.setState({b2ClickedCount: b2ReturnedCount});
        this.setState({b2LastClicked: b2clickedAt});
    }
    getReturnedCount = (ReturnedCount, ReturnedTime, name) => {
        console.log("Time then: " + pageOpened);
        console.log("Time now: " + Date.now());
        var clickedAt = Date.now() - pageOpened;
        this.setState({
            b3:{
                ClickedCount: ReturnedCount,
                LastClicked: clickedAt
            }
        });
    }

    render() {
        return(
            <div>
                <h1>Justin smells like shoes.</h1>
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
