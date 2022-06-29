import React, { useState } from 'react'

import Btn from './Button'
import logo from '../img/logo.svg'

function App() {
	const [count, setCount] = useState(0)
	const addOne = () => {
		setCount(count + 1)
	}
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p className='font-semibold text-2xl'>Hello Vite + React!</p>
				<p>
					count is: {count}
					<Btn handleClick={addOne}></Btn>
				</p>
				<p>
					Edit <code>App.jsx</code> and save to test HMR updates.
				</p>
				<p>
					<a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
						Learn React
					</a>
					{' | '}
					<a
						className='App-link'
						href='https://vitejs.dev/guide/features.html'
						target='_blank'
						rel='noopener noreferrer'
					>
						Vite Docs
					</a>
				</p>
			</header>
		</div>
	)
}

export default App
