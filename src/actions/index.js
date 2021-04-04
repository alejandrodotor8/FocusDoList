export const setTask = (payload) => ({
	type: 'SET_TASK',
	payload,
});
export const deleteTask = (payload) => ({
	type: 'DELETE_TASK',
	payload,
});
export const changeCheckTask = (payload) => ({
	type: 'CHANGE_CHECK_TASK',
	payload,
});
export const clearDoneTask = (payload) => ({
	type: 'CLEAR_DONE_TASK',
	payload,
});
export const getTask = (payload) => ({
	type: 'GET_TASK',
	payload,
});
