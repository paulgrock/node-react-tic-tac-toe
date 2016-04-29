import React from 'react';
import BoardRow from './board-row.jsx';

export default React.createClass({
	rowCount: 3,
	render() {
		const rows = new Array(this.props.rows);
		const boardRows = rows.map((row, idx) => {
			return (
				<BoardRow key={`board-row-${idx}`} cells={this.props.cells} />
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
