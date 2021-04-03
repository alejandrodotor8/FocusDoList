const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_TASK':
			return {
				...state,
				tasks: [...state.tasks, action.payload],
			};
		case 'DELETE_TASK':
			return {
				...state,
				tasks: state.tasks.filter((item) => item.id !== action.payload),
			};
		case 'CHANGE_CHECK_TASK':
			return {
				...state,
				tasks: state.tasks.map((item) => {
					const { checked, id } = action.payload;
					if (item.id === id) {
						item.done = checked;
					}
					return item;
				}),
			};
		case 'CLEAR_DONE_TASK':
			return {
				...state,
				tasks: state.tasks.filter((item) => !item.done),
			};
		default:
			return state;
	}
};
export default reducer;
