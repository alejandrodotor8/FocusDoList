import React, { useState } from 'react'
import MainHeader from './Header'
import InputTask from './Input'
import List from './List'
import Task from './Task'

const initialState  = {
	user: {},
	actualTask: {},
	tasks: [
		{ done: false, id: '1617298074075', description: 'FocusDolist 1.0', notes: '' },
		{ done: false, id: '1617298089589', description: '@alejandrodotor8', notes: '' },
		{ done: false, id: '1617298094842', description: 'Task One', notes: '' },
	],
}

function App() {
	const [tasks, setTasks] = useState(initialState.tasks)
	return (
		<>
			<MainHeader />
			<List>
				{tasks.map((task) => (
					<Task key={task.id} {...task} />
				))}
			</List>
			<InputTask />
		</>
	)
}

export default App
