import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { clearDoneTask } from '../actions';
import anime from '../utils/anime.es';
import Task from './Task';
import '../styles/TaskList.css';

const TaskList = (props) => {
	const { tasks } = props;

	const doneList = () => {
		const deleteList = [];
		tasks.forEach((item) => {
			if (item.done) {
				deleteList.push(document.getElementById(item.id));
			}
		});
		return deleteList;
	};

	const handleClearDone = () => {
		anime({
			targets: [...doneList()],
			translateX: 400,
			duration: 3000,
			opacity: 0,
		});
		setTimeout(() => {
			props.clearDoneTask();
		}, 500);
	};

	const checkList = tasks.map((item) => <Task key={item.id} data={item} />);
	return (
		<Fragment>
			{doneList().length !== 0 ? (
				<button className='delete-done-btn' onClick={handleClearDone}>
					Delete Done
				</button>
			) : null}
			<div className='container'>
				<div className='task_list'>
					{tasks.length ? checkList : <p className='empty'>No task</p>}
				</div>
			</div>
			<div className='div_gradient top_gradient'></div>
			<div className='div_gradient bottom_gradient'></div>
			<div className='fakeInput'></div>
		</Fragment>
	);
};
const mapStateToProps = (state) => {
	return {
		tasks: state.tasks,
	};
};
const mapDispatchToProps = {
	clearDoneTask,
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
