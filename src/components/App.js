import React, { useState } from 'react';
import Header from './Header';
import TaskList from './TaskList';
import Input from './Input';
import '../styles/App.css';

function App() {
	const [list, setList] = useState([]);
	const handleAddItem = (addItem) => {
		setList([...list, addItem]);
	};
	return (
		<div className='app'>
			<Header />
			<TaskList list={list} setList={setList} />
			<Input handleAddItem={handleAddItem} />
		</div>
	);
}

export default App;
