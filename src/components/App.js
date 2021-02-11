import React from 'react';
import Header from './Header';
import Task from './Task';
import Input from './Input';
import listTask from '../assets/listTask.json';

class App extends React.Component {
	state = {
		listTask,
		list: {
			text: '',
		},
	};
	handleTask = (e) => {
		this.setState({
			list: {
				...this.state.list,
				[e.target.name]: e.target.value,
			},
		});
	};
	render() {
		return (
			<div className='App'>
				<Header />
				<Task text={this.state.list.text} />
				<Input
					onChange={this.handleTask}
					listValues={this.state.list.text}
				/>
			</div>
		);
	}
}

export default App;
