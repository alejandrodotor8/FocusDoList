import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { getTask, setNoteTask, clearTask } from '../actions'
import Checkbox from '../components/Checkbox'
import Notes from '../components/Notes'
import '../styles/InfoTask.css'

const InfoTask = (props) => {
	const id = props.match.params.id

	const checkBtn = useRef(null)
	const linkDiv = useRef(null)
	const linkP = useRef(null)

	useEffect(() => {
		props.getTask(id)
	}, [])

	return (
		<div ref={linkDiv} className='info-task'>
			<header className='info-task__header'>
				<button
					className='back-btn'
					type='button'
					onClick={() => {
						props.clearTask()
						props.history.push('/')
					}}
				>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 55.753 55.753'>
						<path d='M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 017.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 01-7.636 7.637L13.658 32.464a5.367 5.367 0 01-.913-.727 5.367 5.367 0 01-1.572-3.911 5.369 5.369 0 011.572-3.911z' />
					</svg>
				</button>
				<h1 ref={linkP}>{props.task.description}</h1>
				<Checkbox
					checked={props.task.done}
					taskID={id}
					checkBtn={checkBtn}
					changeStyle={{ linkDiv, linkP }}
				/>
			</header>
			<section className='info-task__section'>
				<ul className='section__selects'>
					<li>Label</li>
					<li>Calendar</li>
					<li>Alert</li>
				</ul>
				<div className='section__subtask'>SubTask</div>
				<Notes taskID={id} notes={props.task.notes} />
			</section>
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
	setNoteTask,
	clearTask,
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoTask)
