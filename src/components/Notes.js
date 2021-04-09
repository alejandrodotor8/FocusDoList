import React, { useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import { setNoteTask } from '../actions'
import '../styles/Notes.css'

const Notes = (props) => {
	const { taskID, notes } = props
	const [note, setNote] = useState(notes)
	const notesArea = useRef(null)

	useEffect(() => {
		notesArea.current.value = notes
	}, [notes])

	const handleChange = () => {
		setNote(notesArea.current.value)

		const timeoutId = setTimeout(() => {
			props.setNoteTask({
				id: taskID,
				notes: notesArea.current.value,
			})
		}, 1000)
		return () => clearTimeout(timeoutId)
	}
	let timeoutID

	const handleKeyUp = () => {
		clearTimeout(timeoutID)
		timeoutID = setTimeout(() => {
			props.setNoteTask({
				id: taskID,
				notes: notesArea.current.value,
			})
			console.log('Done Type')
		}, 1000)
	}

	return (
		<label className='section__notes'>
			<textarea
				ref={notesArea}
				placeholder='Notes'
				value={note}
				onChange={(e) => {
					setNote(e.target.value)
					clearTimeout(timeoutID)
				}}
				onKeyUp={handleKeyUp}
			/>
		</label>
	)
}

const mapDispatchToProps = {
	setNoteTask,
}

export default connect(null, mapDispatchToProps)(Notes)
