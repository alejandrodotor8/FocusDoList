import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import reducer from './reducers'
import App from './routes/App'
import './styles/index.css'

const initialState = {
	user: {},
	actualTask: {},
	tasks: [
		{ done: false, id: '1617298074075', description: 'FocusDolist 1.0' },
		{ done: false, id: '1617298089589', description: '@alejandrodotor8' },
		{ done: false, id: '1617298094842', description: 'Task One' },
	],
}

// DEV TOOLS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose

const store = createStore(reducer, initialState, composeEnhancers())

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
)
