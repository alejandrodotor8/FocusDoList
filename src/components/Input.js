import React from 'react';
import '../styles/Input.css';
class Input extends React.Component {
	state = {};
	render() {
		const { onChange, listValues } = this.props;
		return (
			<div className='input-container'>
				<input
					onChange={onChange}
					type='text'
					name='text'
					placeholder='Write a new task'
					className='input-container__text'
					id='input-label'
					value={listValues}
				/>
				<label htmlFor='input-label'></label>
			</div>
		);
	}
}
export default Input;
