import determineWinner from './determine-winner';
import * as scores from './scores';
import switchPlayer from './switch-player';

const negamax = (board, depth, color = -1, currentPlayer) => {
	let bestVal = -Infinity;
	let bestMove;
	const calcScore = (board, depth, color, player) => {
		const winningScore = determineWinner(board);
		if (depth === 0 || winningScore !== false) {
			const emptySpaces = board.filter((val) => val === false);
			if (emptySpaces.length === 1) {
				board.forEach((cell, idx) => {
					if (cell === false) {
						return bestMove = idx;
					}
				});
			} else {
				return Number(color);
			}
		}


		board.forEach((cell, idx) => {
			if (cell === false) {
				const newBoard = [
					...board.slice(0, idx),
					player,
					...board.slice(idx + 1)
				];
				const nextPlayer = switchPlayer(player);
				console.log(newBoard);
				const val = -(calcScore(newBoard, depth - 1, -color, nextPlayer));
				if (val > bestVal) {
					bestVal = val;
					bestMove = idx;
				}
			}
		});
		return bestMove;
	};
	calcScore(board, depth, color, currentPlayer);
	console.log(bestMove);
	return bestMove;
};

export default negamax;
