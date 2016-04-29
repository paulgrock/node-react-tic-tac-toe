import React from 'react';
import BoardCell from './board-cell.jsx';

export default React.createClass({
	render() {
		const cells = new Array(this.props.cells);
		const boardCells = cells.map((cell, idx) => <BoardCell key={`board-cell-${idx}`} />);
		return (
			<tr>
				{boardCells}
			</tr>
		);
	}
});
