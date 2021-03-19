import React, { Fragment } from 'react';
import Task from './Task';
import '../styles/TaskList.css';

const TaskList = (props) => {
	const { list, setList } = props;

	const onChangeStatus = (e) => {
		const { name, checked } = e.target;
		const updatedList = list.map((item) => {
			if (item.id === name) {
				item.done = checked;
			}
			return item;
		});
		console.log(updatedList);
		setList(updatedList);
		setTimeout(() => {
			const removedList = updatedList.filter((item) => !item.done);
			setList(removedList);
		}, 5000);
	};

	const checkList = list.map((item) => (
		<Task key={item.id} data={item} onChange={onChangeStatus} />
	));
	return (
		<Fragment>
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
