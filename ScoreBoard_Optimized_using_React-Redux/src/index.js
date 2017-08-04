import React from 'react';
import {render} from 'react-dom';
import './index.css';
import Scoreboard from './containers/Scoreboard';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PlayerReducer from './reducers/Player';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(
	PlayerReducer
	);

render(
	<Provider store={store}>
	<Scoreboard/>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
