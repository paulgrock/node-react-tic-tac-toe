import React from 'react';

export default React.createClass({
	render() {
		const {cell, position, gameOver} = this.props;
		let disabled = gameOver;
		if (!disabled) {
			disabled = cell;
		}
		return (
			<td>
				<button onClick={this.props.endTurn} value={position} disabled={disabled}>{cell}</button>
			</td>
		);
	}
});
