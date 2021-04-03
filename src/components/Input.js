import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setTask } from '../actions';
import '../styles/Input.css';

const Input = (props) => {
	const [description, setDescription] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		props.setTask({
			done: false,
			id: (+new Date()).toString(),
			description,
		});
		setDescription('');
	};

	return (
		<form className='input-container' onSubmit={handleSubmit}>
			<input
				type='text'
				name='text'
				placeholder='Write a new task'
				className='input-container__text'
				id='input-label'
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<label htmlFor='input-label'></label>
		</form>
	);
};

const mapDispatchToProps = {
	setTask,
};
export default connect(null, mapDispatchToProps)(Input);
