import React from 'react';
import Task from './Task';
import '../styles/TaskList.css';

const TaskList = () => {
	return (
		<div className='task_list'>
			<Task />
			<Task />
			<Task />
		</div>
	);
};
export default TaskList;
