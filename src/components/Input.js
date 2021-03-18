import React from 'react';
import '../styles/Input.css';

const Input = () => {
	return (
		<form className='input-container'>
			<input type='text' name='text' placeholder='Write a new task' className='input-container__text' id='input-label' />
			<label htmlFor='input-label'></label>
		</form>
	);
};
export default Input;
