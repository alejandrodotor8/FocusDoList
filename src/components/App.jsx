import React from 'react'
import MainHeader from './Header'
import InputTask from './Input'

/* const initialState = {
	user: {},
	actualTask: {},
	tasks: [
		{ done: false, id: '1617298074075', description: 'FocusDolist 1.0', notes: '' },
		{ done: false, id: '1617298089589', description: '@alejandrodotor8', notes: '' },
		{ done: false, id: '1617298094842', description: 'Task One', notes: '' },
	],
} */

function App() {
	return (
		<>
			<MainHeader />
			<InputTask />
		</>
	)
}

export default App
