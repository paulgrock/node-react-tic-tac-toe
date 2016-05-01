import * as types from './actions/types';
import determineWinner from './determine-winner';
import * as scores from './scores';

const initialState = {
	player: 'O',
	board: [false, false, false, false, false, false, false, false, false],
	gameState: 'Game started',
	winner: false
};

const reducers = function (state = initialState, action) {
	switch (action.type) {
		case types.END_TURN: {
			const alteredBoard = [
				...state.board.slice(0, action.index),
				action.player,
				...state.board.slice(action.index + 1)
			];
			const winner = determineWinner(alteredBoard);
			let newGameState = state.gameState;
			if (winner === scores['draw']) {
				newGameState = "Draw :("
			} else if (winner === scores['playerX']) {
				newGameState = "X wins!"
			} else if (winner === scores['playerO']) {
				newGameState = "O wins!"			
			}
			return Object.assign({}, state, {
				board: alteredBoard,
				player: action.player,
				gameState: newGameState,
				winner
			});
		}

		default:
			return state;
	}
};

export default reducers;
