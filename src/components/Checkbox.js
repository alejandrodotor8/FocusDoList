import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { changeCheckTask } from '../actions'
import '../styles/Checkbox.css'

const Checkbox = (props) => {
	const { checked, taskID, checkBtn, changeStyle } = props
	const [check, setCheck] = useState(props.task.done || checked)
	const { linkDiv, linkP } = changeStyle

	const handleChangeCheck = (e) => {
		setCheck(e.target.checked)
		props.changeCheckTask({ id: taskID, checked: e.target.checked })
	}
	useEffect(() => {
		setCheck(check || props.task.done)
		if (check || props.task.done) {
			linkDiv.current.classList.add('label-done')
			linkP.current.classList.add('text-done')
		} else {
			linkDiv.current.classList.remove('label-done')
			linkP.current.classList.remove('text-done')
		}
	}, [check, props])

	return (
		<label className='label-check'>
			<input
				defaultChecked={check}
				type='checkbox'
				className='check'
				ref={checkBtn}
				onChange={handleChangeCheck}
			/>
		</label>
	)
}
const mapStateToProps = (state) => {
	return {
		task: state.actualTask,
	}
}

const mapDispatchToProps = {
	changeCheckTask,
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkbox)
