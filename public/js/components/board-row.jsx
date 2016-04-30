import React from 'react';
import BoardCell from './board-cell.jsx';

export default React.createClass({
	render() {
		const {row, rowPosition, endTurn} = this.props;
		const boardCells = row.map((cell, idx) => <BoardCell key={`board-cell-${idx}`} cell={cell} coordinate={`${rowPosition}-${idx}`} endTurn={endTurn} />);
		return (
			<tr>
				{boardCells}
			</tr>
		);
	}
});
