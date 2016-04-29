import React from 'react';
import BoardCell from './board-cell.jsx';

export default React.createClass({
	render() {
		const cells = [true, true, true];
		const boardCells = cells.map((cell, idx) => <BoardCell key={`board-cell-${idx}`} />);
		return (
			<tr>
				{boardCells}
			</tr>
		);
	}
});
