import React, { useState } from 'react';
import '../styles/Input.css';

const Input = (props) => {
	const { handleAddItem } = props;
	const [description, setDescription] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		handleAddItem({
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
export default Input;
