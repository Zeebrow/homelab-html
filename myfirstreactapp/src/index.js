import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import MyButton from './components/mybutton/mybutton.js';
/* Not sure why this doesnt work:
ReactDOM.render(<MyList />, document.getElementById('button1'));
*/
ReactDOM.render(<App />, document.getElementById('root'));
