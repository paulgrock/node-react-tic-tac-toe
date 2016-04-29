import * as types from './actions/types';
const initialState = {
	gameStarted: false,
	whosTurn: 1
};

const reducers = function (state = initialState, action) {
	switch (action.type) {
		case types.START_GAME: {
			return Object.assign({}, state, {
				todos: [...state.todos, {
					title: action.title,
					completed: action.completed,
					id: action.id
				}]
			});
		}

		default:
			return state;
	}
};

export default reducers;
