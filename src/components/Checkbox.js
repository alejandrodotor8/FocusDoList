import React, { useState } from 'react'
import '../styles/Checkbox.css'

const Checkbox = (props) => {
	const { checked, checkID, checkBtn, handleChange } = props
	const [checkState, setCheckState] = useState(checked)
	return (
		<label className='label-check'>
			<input
				defaultChecked={checkState}
				type='checkbox'
				className='check'
				ref={checkBtn}
				onChange={() => handleChange(checkID, setCheckState)}
			/>
		</label>
	)
}

export default Checkbox
