import React from 'react';
import '../styles/Input.css';
class Input extends React.Component {
	state = {};
	render() {
		const { onChange, task_title, onSubmit } = this.props;
		return (
			<form
				className='input-container'
				onSubmit={(e) => {
					onSubmit(e, task_title);
				}}
			>
				<input
					onChange={onChange}
					type='text'
					name='text'
					placeholder='Write a new task'
					className='input-container__text'
					id='input-label'
					value={task_title}
				/>
				<label htmlFor='input-label'></label>
			</form>
		);
	}
}
export default Input;
