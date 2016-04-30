import React from 'react';
import BoardRow from './board-row.jsx';

export default React.createClass({
	render() {
		const {board, endTurn} = this.props;
		const boardRows = board.map((row, idx) => {
			return (
				<BoardRow key={`board-row-${idx}`} row={row} rowPosition={idx} endTurn={endTurn} />
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
