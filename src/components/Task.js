import React from 'react';
import '../styles/Task.css';
import config from '../assets/img/config.png';
import trash from '../assets/img/trash.png';
import handleStartClick from '../utils/handleClick';
import { handleStartTouch, handleMoveTouch, handleEndTouch } from '../utils/handleTouch';
const Task = (props) => {
	const {
		onChangeCheck,
		onClickTrash,
		data: { id, description, done },
	} = props;

	return (
		<div
			id={id}
			onTouchStart={handleStartTouch}
			onTouchMove={handleMoveTouch}
			onTouchEnd={handleEndTouch}
			onMouseDown={(e) => handleStartClick(e, id)}
			className='task swipe'
		>
			<button className='task__config'>
				<div className='icon'>
					<img src={config} alt='config' className='icon__img' />
				</div>
			</button>
			<div className='task__body'>
				<div className={done ? 'label-done label' : 'label'}></div>
				<p className={done ? 'text-done text' : 'text'}>{description}</p>
				<label>
					<input
						defaultChecked={done}
						onChange={onChangeCheck}
						type='checkbox'
						className='check'
						name={id}
					/>
				</label>
			</div>
			<button className='task__trash' name={id}>
				<div className='icon' onClick={onClickTrash}>
					<img src={trash} alt='trash' className='icon__img' />
				</div>
			</button>
		</div>
	);
};
export default Task;
