import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getTask } from '../actions'
import '../styles/InfoTask.css'

const InfoTask = (props) => {
	const id = props.match.params.id
	useEffect(() => {
		props.getTask(id)
	})
	return (
		<div>
			<button className='back-btn' type='button' onClick={() => props.history.push('/')}>
				go back
			</button>
			<h1>{props.task.description}</h1>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoTask)
