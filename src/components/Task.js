import React from 'react';
import '../styles/Task.css';

const Task = () => {
	return (
		<div className='task'>
			<div className='task__label'></div>
			<p className='task__text'>description</p>
			<label>
				<input type='checkbox' className='task__check' name='checked' />
			</label>
		</div>
	);
};
export default Task;
