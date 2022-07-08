import React from 'react'
import Task from './Task'

function List({ list }) {
	return (
		<div className='w-11/12 mx-auto'>
			{list.map((task) => (
				<Task key={task.id} {...task} />
			))}
		</div>
	)
}

export default List
