import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteTask, changeCheckTask } from '../actions'
import anime from '../utils/anime.es'
import config from '../assets/img/config.png'
import trash from '../assets/img/trash.png'
//import handleStartClick from '../utils/handleClick';
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

	const handleChangeCheck = (id, setCheckState) => {
		props.changeCheckTask({ checked: checkBtn.current.checked, id: id })
		setCheckState(checkBtn.current.checked)
		done = checkBtn.current.checked
		if (done) {
			linkDiv.current.className = 'label-done label'
			linkP.current.className = 'text-done text'
		} else {
			linkDiv.current.className = 'label'
			linkP.current.className = 'text'
		}
	}
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
			onTouchStart={(e) =>
				taskBody.current.className === 'task__body' && handleStartTouch(e, taskBody.current)
			}
			onTouchMove={(e) =>
				taskBody.current.className === 'task__body' && handleMoveTouch(e, taskBody.current)
			}
			onTouchEnd={() =>
				taskBody.current.className === 'task__body' && handleEndTouch(taskBody.current)
			}
			//onMouseDown={(e) => taskBody.current.className === 'task__body' && handleStartClick(e, id)}
		>
			<button className='task__config'>
				<div className='icon'>
					<img src={config} alt='config' className='icon__img' />
				</div>
			</button>
			<div className='task__body' ref={taskBody}>
				<Link to={`/task/${id}`} className='link'>
					<div ref={linkDiv} className='label'></div>
					<p ref={linkP} className='text'>
						{description}
					</p>
				</Link>

				<Checkbox
					checked={done}
					checkID={id}
					checkBtn={checkBtn}
					handleChange={handleChangeCheck}
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
