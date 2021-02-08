import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Header from './components/Header';
import Task from './components/Task';

ReactDOM.render(
	<React.StrictMode>
		<Header />
		<Task name='Rafael' />
	</React.StrictMode>,
	document.getElementById('root')
);
