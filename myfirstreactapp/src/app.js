import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './components/mylist.js';
import MyButton from './components/mybutton/mybutton.js';

class App extends React.Component {
    state = { value: 0 };
    let leButton = new MyButton;
    console.log(leButton);
    render() {
        return(
            <div>
                { leButton }
            </div>
        );


    }

}

export default App;
