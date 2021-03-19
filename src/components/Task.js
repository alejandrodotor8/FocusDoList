import React from 'react';
import '../styles/Task.css';

const Task = (props) => {
	const {
		onChange,
		data: { id, description, done },
	} = props;
	return (
		<div className='task'>
			<div className='task__label'></div>
			<p className='task__text'>{description}</p>
			<label>
				<input
					defaultChecked={done}
					onChange={onChange}
					type='checkbox'
					className='task__check'
					name={id}
				/>
			</label>
		</div>
	);
};
export default Task;
