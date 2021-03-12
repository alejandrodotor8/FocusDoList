import React from 'react';
import Header from './Header';
import Task from './Task';
import Input from './Input';
import '../styles/App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className='app'>
				<Header />
				<Task />
				<Input />
			</div>
		);
	}
}

export default App;
