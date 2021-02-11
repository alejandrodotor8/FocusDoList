import React from 'react';
import Header from './Header';
import Task from './Task';
import Input from './Input';
import listTask from '../assets/listTask.json';

class App extends React.Component {
	state = {
		listTask,
		task: { id: '', task_title: '' },
	};
	handleSubmit = (e, value) => {
		e.preventDefault();
		if (value !== '') {
			this.setState({
				listTask: [...this.state.listTask, this.state.task],
				task: { id: '', task_title: '' },
			});
		} else {
			console.log('Empty Input');
		}
	};
	handleTask = (e) => {
		this.setState({
			task: { id: new Date().getTime(), task_title: e.target.value },
		});
	};
	render() {
		return (
			<div className='App'>
				<Header />
				{this.state.listTask.map((task) => {
					return <Task key={task.id} text={task.task_title} />;
				})}
				<Input
					onChange={this.handleTask}
					task_title={this.state.task.task_title}
					onSubmit={this.handleSubmit}
				/>
			</div>
		);
	}
}

export default App;
