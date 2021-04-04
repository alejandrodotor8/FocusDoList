import React from 'react'
import Header from '../components/Header'
import TaskList from '../components/TaskList'
import Input from '../components/Input'
import '../styles/Home.css'

function Home() {
	return (
		<div className='home'>
			<Header />
			<TaskList />
			<Input />
		</div>
	)
}
export default Home
