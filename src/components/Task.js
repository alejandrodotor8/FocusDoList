import React from 'react';
import '../styles/Task.css';
class Task extends React.Component {
	state = {
		checked: false,
	};
	toggleCheckbox = (e) => {
		this.setState({
			[e.target.name]: e.target.checked,
		});
	};
	render() {
		const { text } = this.props;
		return (
			<div className='task'>
				<div className='task__label'></div>
				<p className='task__text'>{text}</p>
				<label>
					<input
						onChange={this.toggleCheckbox}
						type='checkbox'
						className='task__check'
						name='checked'
						checked={this.state.checked}
					/>
				</label>
			</div>
		);
	}
}
export default Task;
