import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './components/mylist.js';
import MyButton from './components/mybutton/mybutton.js';

let leButton = new MyButton;
console.log(leButton);
class App extends React.Component {
    state = { value: 0 };
    render() {
        return(
            <div>Yo.
            </div>
        );


    }

}

export default App;
