import React from 'react';
import Header from './Header';
import TaskList from './TaskList';
import Input from './Input';
import '../styles/App.css';

function App() {
	return (
		<div className='app'>
			<Header />
			<TaskList />
			<Input />
		</div>
	);
}

export default App;
