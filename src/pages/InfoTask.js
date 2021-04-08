import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { getTask, changeCheckTask } from '../actions'
import Checkbox from '../components/Checkbox'
import previous from '../assets/img/previous.svg'
import '../styles/InfoTask.css'

const InfoTask = (props) => {
	const id = props.match.params.id
	let done = props.task.done
	const checkBtn = useRef(null)

	useEffect(() => {
		checkBtn.current.checked = done
	})

	useEffect(() => {
		props.getTask(id)
	})

	const handleChangeCheck = (id, setCheckState) => {
		props.changeCheckTask({ checked: checkBtn.current.checked, id: id })
		setCheckState(checkBtn.current.checked)
	}

	return (
		<div className='info-task'>
			<header>
				<button className='back-btn' type='button' onClick={() => props.history.push('/')}>
					<img src={previous} alt='' />
				</button>
				<h1>{props.task.description}</h1>
				<Checkbox
					checked={props.task.done}
					checkID={id}
					checkBtn={checkBtn}
					handleChange={handleChangeCheck}
				/>
			</header>

			<p>{id}</p>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		task: state.actualTask,
	}
}
const mapDispatchToProps = {
	getTask,
	changeCheckTask,
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoTask)
