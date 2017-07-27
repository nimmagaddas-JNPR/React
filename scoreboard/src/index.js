import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var playerList=[
  {id:1,name:"Mick", score:30},
  {id:2,name:"Jim", score:39},
  {id:3,name:"Scoop" ,score:35}
]

ReactDOM.render(
	<App initialplayers = {playerList}/>, 
	document.getElementById('root')
);
registerServiceWorker();
