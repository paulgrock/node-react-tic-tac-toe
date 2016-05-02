import determineWinner from './determine-winner';
import * as scores from './scores';
import switchPlayer from './switch-player';

const negamax = (board, depth, color = -1, currentPlayer) => {
	let bestVal = -Infinity;
	let bestMove;
	const calcScore = (board, depth, color, player) => {
		const winningScore = determineWinner(board);
		if (depth === 0 || winningScore !== false) {
			return Number(color);
		}
		board.forEach((cell, idx) => {
			if (cell === false) {
				const nextPlayer = switchPlayer(player);
				const newBoard = [
					...board.slice(0, idx),
					nextPlayer,
					...board.slice(idx + 1)
				];
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
