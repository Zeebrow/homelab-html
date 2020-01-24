import React from 'react';
import ReactDOM from 'react-dom';

//const myfirstelement = <h1>Hello React!</h1>
const someJsx = <h1> Yo, dawg. </h1>;
const jsxTable = (
<div>
	<ul>
		<li>one</li>
		<li>two</li>
		<li>three</li>
	</ul>
</div>
);

ReactDOM.render(jsxTable, document.getElementById('root'));
