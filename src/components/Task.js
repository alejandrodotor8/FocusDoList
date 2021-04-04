import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteTask, changeCheckTask } from '../actions'
import anime from '../utils/anime.es'
import config from '../assets/img/config.png'
import trash from '../assets/img/trash.png'
//import handleStartClick from '../utils/handleClick';
import { handleStartTouch, handleMoveTouch, handleEndTouch } from '../utils/handleTouch'
import '../styles/Task.css'

const Task = (props) => {
	const {
		data: { id, description, done },
	} = props

	const [checked, setChecked] = useState(done)

	const handleChangeCheck = (e, id) => {
		props.changeCheckTask({ checked: e.target.checked, id: id })
		setChecked(e.target.checked)
	}
	const handleDeleteTask = (e, id) => {
		const target = e.target.parentElement.parentElement
		anime({
			targets: target,
			translateX: 400,
			duration: 3000,
			opacity: 0,
		})
		setTimeout(() => {
			props.deleteTask(id)
		}, 500)
	}

	return (
		<div
			className='task swipe'
			id={id}
			onTouchStart={(e) =>
				e.target.parentElement.className === 'task__body' && handleStartTouch(e)
			}
			onTouchMove={(e) =>
				e.target.parentElement.className === 'task__body' && handleMoveTouch(e)
			}
			onTouchEnd={(e) => e.target.parentElement.className === 'task__body' && handleEndTouch(e)}
			//onMouseDown={(e) =>
			//e.target.parentElement.className === 'task__body' && handleStartClick(e, id)
			//}
		>
			<button className='task__config'>
				<div className='icon'>
					<img src={config} alt='config' className='icon__img' />
				</div>
			</button>
			<div className='task__body'>
				<Link to={`/task/${id}`} className='link'>
					<div className={checked ? 'label-done label' : 'label'}></div>
					<p className={checked ? 'text-done text' : 'text'}>{description}</p>
				</Link>
				<label className='label-check'>
					<input
						defaultChecked={checked}
						type='checkbox'
						className='check'
						name={id}
						onChange={(e) => handleChangeCheck(e, id)}
					/>
				</label>
			</div>
			<button className='task__trash' name={id}>
				<div className='icon' onClick={(e) => handleDeleteTask(e, id)}>
					<img src={trash} alt='trash' className='icon__img' />
				</div>
			</button>
		</div>
	)
}

const mapDispatchToProps = {
	deleteTask,
	changeCheckTask,
}
export default connect(null, mapDispatchToProps)(Task)
