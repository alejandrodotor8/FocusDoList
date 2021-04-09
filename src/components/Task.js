import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteTask, changeCheckTask } from '../actions'
import anime from '../utils/anime.es'
import config from '../assets/img/config.png'
import trash from '../assets/img/trash.png'
import { handleStartTouch, handleMoveTouch, handleEndTouch } from '../utils/handleTouch'
import Checkbox from '../components/Checkbox'
import '../styles/Task.css'

const Task = (props) => {
	let {
		data: { id, description, done },
	} = props

	const taskContainer = useRef(null)
	const checkBtn = useRef(null)
	const taskBody = useRef(null)
	const linkDiv = useRef(null)
	const linkP = useRef(null)

	const handleDeleteTask = (id) => {
		anime({
			targets: taskContainer.current,
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
			id={id}
			className='task swipe'
			ref={taskContainer}
			onTouchStart={(e) => {
				if (window.screen.width <= 700 && taskBody.current.className === 'task__body') {
					handleStartTouch(e, taskBody.current)
				}
			}}
			onTouchMove={(e) => {
				if (window.screen.width <= 700 && taskBody.current.className === 'task__body') {
					handleMoveTouch(e, taskBody.current)
				}
			}}
			onTouchEnd={() => {
				if (window.screen.width <= 700 && taskBody.current.className === 'task__body') {
					handleEndTouch(taskBody.current)
				}
			}}
		>
			<button className='task__config'>
				<Link to={`/task/${id}`} className='icon'>
					<img src={config} alt='config' className='icon__img' />
				</Link>
			</button>
			<div className='task__body' ref={taskBody}>
				<div className='link'>
					<div ref={linkDiv} className='label'></div>
					<p ref={linkP} className='text'>
						{description}
					</p>
				</div>
				<Checkbox
					checked={done}
					taskID={id}
					checkBtn={checkBtn}
					changeStyle={{ linkDiv, linkP }}
				/>
			</div>
			<button className='task__trash' name={id}>
				<div className='icon' onClick={() => handleDeleteTask(id)}>
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
