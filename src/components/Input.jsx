import React, { useState } from 'react'

function InputTask() {
	const [newTask, setNewTask] = useState('')
	const handleSubmit = (e) => {
		e.preventDefault()
		if (newTask !== '') {
			console.log(newTask)
			setNewTask('')
		}
	}

	return (
		<form
			className='w-4/5 sm:w-8/12 md:w-7/12 lg:w-6/12 xl:w-4/12 2xl:w-3/12 mx-auto h-12 fixed left-2/4 bottom-0 translate-x-[-50%] translate-y-[-50%]'
			onSubmit={handleSubmit}
		>
			<input
				value={newTask}
				onChange={(e) => setNewTask(e.target.value)}
				className='w-full h-full text-base-700 text-lg border-none rounded-full outline-none pl-4 shadow-sm placeholder:text-base-500'
				type='text'
				placeholder='Write a new task'
				id='input-label'
			/>
			<label htmlFor='input-label'></label>
		</form>
	)
}

export default InputTask
