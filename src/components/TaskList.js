import React, { Fragment } from 'react';
import Task from './Task';
import '../styles/TaskList.css';
import anime from '../utils/anime.es';

const TaskList = (props) => {
	const { list, setList } = props;

	const handleChangeCheck = (e) => {
		const { name, checked } = e.target;
		const updatedList = list.map((item) => {
			if (item.id === name) {
				item.done = checked;
				/* const elem = document.getElementById(item.id);
				console.log(elem); */
			}
			return item;
		});
		setList(updatedList);
	};
	const removeDone = () => {
		const updatedList = list.filter((item) => !item.done);
		const deleteList = [];
		list.forEach((item) => {
			if (item.done) {
				deleteList.push(document.getElementById(item.id));
			}
		});
		anime({
			targets: [...deleteList],
			translateX: 400,
			duration: 3000,
			opacity: 0,
		});
		setTimeout(() => {
			setList(updatedList);
		}, 500);
	};
	const handleClickTrash = (e) => {
		const target = e.target.parentElement.parentElement;
		const nameBtn = e.target.parentElement.name;
		const updatedList = list.filter((item) => item.id !== nameBtn);
		anime({
			targets: target,
			translateX: 400,
			duration: 3000,
			opacity: 0,
		});
		setTimeout(() => {
			setList(updatedList);
		}, 500);
	};

	const checkList = list.map((item) => (
		<Task
			key={item.id}
			data={item}
			onChangeCheck={handleChangeCheck}
			onClickTrash={handleClickTrash}
		/>
	));
	const removeList = () => {
		const deleteList = [];
		list.forEach((item) => {
			if (item.done) {
				deleteList.push(document.getElementById(item.id));
			}
		});
		return deleteList;
	};
	return (
		<Fragment>
			{removeList().length !== 0 ? (
				<button className='delete-done-btn' onClick={removeDone}>
					Delete Done
				</button>
			) : null}
			<div className='container'>
				<div className='task_list'>
					{list.length ? checkList : <p className='empty'>No task</p>}
				</div>
			</div>
			<div className='div_gradient top_gradient'></div>
			<div className='div_gradient bottom_gradient'></div>
			<div className='fakeInput'></div>
		</Fragment>
	);
};
export default TaskList;
