import chunkArray from './chunk-array';
import * as scores from './scores';

const hasWon = (ary) => {
	return ary.reduce((prev, curr) => {
		if (!curr) {
			return false;
		}
		if (prev === curr) {
			return curr;
		}
		return false;
	});
};

const boardFull = (board) => {
	return board.every((el) => {
		return el !== false;
	});
};

const determineWinner = (board) => {
	let winner = false;
	const centerVal = board[4];
	const rowChunks = chunkArray(board, 3);

	if (boardFull(board)) {
		return scores['draw'];
	}

	// Columns
	for (let j = 0; j < 3; j++) {
		const column = [];
		for (let i = j; i < board.length; i += 3) {
			column.push(board[i]);
		}
		winner = hasWon(column);
		if (winner) {
			return scores[`player${winner}`];
		}
	}

	// Rows
	for (let i = 0; i < rowChunks.length; i += 1) {
		winner = hasWon(rowChunks[i]);
		if (winner) {
			return scores[`player${winner}`];
		}
	}

	if (centerVal && ((board[0] === centerVal && centerVal === board[8]) || (board[2] === centerVal && centerVal === board[6]))) {
		return scores[`player${centerVal}`];
	}

	return false;
};

export default determineWinner;
