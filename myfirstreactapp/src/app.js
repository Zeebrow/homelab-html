import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './components/mylist.js';
import MyButton from './components/mybutton/mybutton.js';
import SendFeedback from './components/sendfeedback/sendfeedback.js';

class App extends React.Component {
    constructor() {
        super();
        this.state = { value: 0 };
    }

    render() {
        return(
            <div>
                <h1>Yo.</h1>
                <MyButton />
                <br/>
                <SendFeedback />
            </div>
        );


    }

}

export default App;
