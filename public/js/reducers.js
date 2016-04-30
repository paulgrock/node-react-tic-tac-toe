import * as types from './actions/types';
const initialState = {
	gameStarted: false,
	whosTurn: 1,
	board: [
		[false, false, false],
		[false, false, false],
		[false, false, false]
	]
};

const reducers = function (state = initialState, action) {
	switch (action.type) {
		case types.END_TURN: {
			const row = state.board[action.row];
			const alteredRow = [
				...row.slice(0, action.column),
				action.player,
				...row.slice(action.column + 1),
			]
			const alteredBoard = [
				...state.board.slice(0, action.row),
				alteredRow,
				...state.board.slice(action.row + 1)
			];
			return Object.assign({}, state, {
				board: alteredBoard
			});
		}

		case types.END_GAME: {
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
