import React, { useState } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import TaskList from '../components/TaskList';
import Input from '../components/Input';
import '../styles/Home.css';

function Home({ tasks }) {
	const [list, setList] = useState(tasks);
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
const mapStateToProps = (state) => {
	return {
		tasks: state.tasks,
	};
};
export default connect(mapStateToProps, null)(Home);
