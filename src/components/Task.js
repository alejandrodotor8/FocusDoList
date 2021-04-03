import React from 'react';
import { Link } from 'react-router-dom';
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
			className='task swipe'
			id={id}
			onTouchStart={(e) =>
				e.target.parentElement.className === 'task__body' && handleStartTouch(e)
			}
			onTouchMove={(e) =>
				e.target.parentElement.className === 'task__body' && handleMoveTouch(e)
			}
			onTouchEnd={(e) => e.target.parentElement.className === 'task__body' && handleEndTouch(e)}
			onMouseDown={(e) =>
				e.target.parentElement.className === 'task__body' && handleStartClick(e, id)
			}
		>
			<button className='task__config'>
				<div className='icon'>
					<img src={config} alt='config' className='icon__img' />
				</div>
			</button>
			<div className='task__body'>
				<Link to={`/task/${id}`} className='link'>
					<div className={done ? 'label-done label' : 'label'}></div>
					<p className={done ? 'text-done text' : 'text'}>{description}</p>
				</Link>
				<label className='label-check'>
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
