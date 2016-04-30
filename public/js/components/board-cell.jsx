import React from 'react';

export default React.createClass({
	render() {
		const {cell, position} = this.props;
		return (
			<td>
				<button onClick={this.props.endTurn} value={position} disabled={cell}>{cell}</button>
			</td>
		);
	}
});
