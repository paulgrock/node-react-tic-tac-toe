import React from 'react';
import {connect} from 'react-redux';
import Board from './board.jsx';

import endTurn from '../actions/end-turn';

const App = React.createClass({
	handleEndTurn(e) {
		e.preventDefault();
		const coordinate = e.target.value.split('-');
		const row = Number(coordinate[0]);
		const column = Number(coordinate[1]);
		this.props.dispatch(endTurn(row, column, 'X'));
		console.log(e.target.value);
		console.log(row, column);
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
