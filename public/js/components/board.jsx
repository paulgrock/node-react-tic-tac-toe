import React from 'react';
import BoardRow from './board-row.jsx';

export default React.createClass({
	render() {
		const rows = [true, true, true];
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
