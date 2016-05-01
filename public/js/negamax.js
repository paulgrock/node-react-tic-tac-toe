import determineWinner from './determine-winner';
import * as scores from './scores';

const negamax = (board, depth, color = -1) => {
	let bestVal = -Infinity;
	let bestMove;
	const currentPlayer = scores.playerX === color ? 'X' : 'O';
	const calcScore = (board, depth, color) => {
		const winningScore = determineWinner(board);
		if (winningScore !== false) {
			return Number(winningScore);
		}
		if (depth === 0) {
			return Number(color);
		}
		board.forEach((cell, idx) => {
			if (cell === false) {
				const newBoard = [
					...board.slice(0, idx),
					currentPlayer,
					...board.slice(idx + 1)
				];
				const val = -calcScore(newBoard, depth - 1, -color);
				if (val > bestVal) {
					bestVal = val;
					bestMove = idx;
				}
			}
		});
		return bestMove;
	};
	calcScore(board, depth, color);
	return bestMove;
};

export default negamax;
