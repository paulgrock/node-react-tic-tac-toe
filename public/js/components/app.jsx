import React from 'react';
import {connect} from 'react-redux';
import Board from './board.jsx';

import endTurn from '../actions/end-turn';

const App = React.createClass({
	handleEndTurn(e) {
		e.preventDefault();
		const index = Number(e.target.value)
		const player = this.props.player === 'X' ? 'O' : 'X';
		this.props.dispatch(endTurn(index, player));
	},
	render() {
		return (
			<main className="main-container">
				<Board board={this.props.board} endTurn={this.handleEndTurn} />
			</main>
		);
	}
});

const select = (state) => state;

export default connect(select)(App);
