import React from 'react';
import BoardCell from './board-cell.jsx';

export default React.createClass({
	render() {
		const {row, rowPosition, rows, endTurn, gameOver} = this.props;
		let offset = rowPosition;
		if (rowPosition) {
			offset = rowPosition * rows.length;
		}
		const boardCells = row.map((cell, idx) => {
			return <BoardCell key={`board-cell-${idx}`} cell={cell} position={offset + idx} endTurn={endTurn} gameOver={gameOver} />
		});
		return (
			<tr>
				{boardCells}
			</tr>
		);
	}
});
