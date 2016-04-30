import React from 'react';

export default React.createClass({
	render() {
		const {cell, coordinate} = this.props;
		return (
			<td>
				<button onClick={this.props.endTurn} value={coordinate} disabled={cell}>{cell}</button>
			</td>
		);
	}
});
