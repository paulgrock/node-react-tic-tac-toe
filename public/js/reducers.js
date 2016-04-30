import * as types from './actions/types';
import chunkArray from './chunk-array';

const initialState = {
	player: 'O',
	board: [false, false, false, false, false, false, false, false, false],
	gameState: 'started'
};

const hasWon = (ary) => {
	return ary.reduce((prev, curr) => {
		if (!curr) {
			return false;
		}
		if (prev === curr) {
			return curr
		}
		return false;
	});
}

const determineWinner = (board) => {
	let columnWin = false;
	let diagWin = false;
	let rowWin = false;
	let centerVal = board[4];
	let rowChunks = chunkArray(board, 3);
	const full = board.every((el, idx) => {
		return el !== false;
	});
	if (full) {
		return 'draw';
	}

	// Columns
	for (let j = 0; j < 3; j++) {
		let column = [];
		for (let i = j; i < board.length; i +=3) {
			column.push(board[i]);
		}
		columnWin = hasWon(column);
		if (columnWin) {
			break;
		}
	}

	// Rows
	for (let i = 0; i < rowChunks.length; i += 1) {
		rowWin = hasWon(rowChunks[i]);
		if (rowWin) {
			break;
		}
	}

	if (centerVal && ((board[0] === centerVal && centerVal === board[8]) || (board[2] === centerVal && centerVal === board[6]))) {
		diagWin = true;
	}

	if (columnWin || rowWin || diagWin) {
		return "It's over!";
	}

	return 'started';
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
			return Object.assign({}, state, {
				board: alteredBoard,
				player: action.player,
				gameState: winner
			});
		}

		default:
			return state;
	}
};

export default reducers;
