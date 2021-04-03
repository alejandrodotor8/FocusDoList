import React, { useState } from 'react';
import Header from '../components/Header';
import TaskList from '../components/TaskList';
import Input from '../components/Input';
import taskJSON from '../utils/arrayTask';
import '../styles/Home.css';

function Home() {
	const [list, setList] = useState(taskJSON);
	const handleAddItem = (addItem) => {
		setList([...list, addItem]);
	};
	return (
		<div className='home'>
			<Header />
			<TaskList list={list} setList={setList} />
			<Input handleAddItem={handleAddItem} />
		</div>
	);
}

export default Home;
