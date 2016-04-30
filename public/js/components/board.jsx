import React from 'react';
import BoardRow from './board-row.jsx';
import chunkArray from '../chunk-array';

export default React.createClass({
	render() {
		const {board, endTurn, gameOver} = this.props;
		const rows = chunkArray(board, 3);
		const boardRows = rows.map((row, idx, rows) => {
			return (
				<BoardRow key={`board-row-${idx}`} row={row} rows={rows} rowPosition={idx} endTurn={endTurn} gameOver={gameOver} />
			);
		});
		return (
			<table>
				<tbody>
					{boardRows}
				</tbody>
			</table>
		);
	}
});
