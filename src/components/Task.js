import React from 'react';
import '../styles/Task.css';

class Task extends React.Component {
	render() {
		const { name } = this.props;
		return (
			<div className='task'>
				<p>Lorem ipsum dolor sit amet cat {name}</p>
			</div>
		);
	}
}
export default Task;
