import React from 'react'
import config_icon from '/img/config.png'
import trash_icon from '/img/trash.png'

function Task({ done, id, description }) {
	return (
		<div id={id} className='w-full h-14 relative flex items-center justify-evenly'>
			<button className='w-3/6 absolute left-0 bg-base-500'>
				<img src={config_icon} alt='task configuration' />
			</button>
			<div className='w-full'>{description}</div>
			<button className='w-3/6 absolute right-0 bg-focus-red'>
				<img src={trash_icon} alt='task configuration' />
			</button>
		</div>
	)
}



export default Task
