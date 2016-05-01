import React from 'react';
import {connect} from 'react-redux';
import Board from './board.jsx';
import negaMax from '../negamax';
import endTurn from '../actions/end-turn';

const App = React.createClass({
	handleEndTurn(e) {
		e.preventDefault();
		const index = Number(e.target.value)
		const player = this.props.player === 'X' ? 'O' : 'X';
		this.props.dispatch(endTurn(index, player));
	},
	negaMax() {
		const nM = negaMax(this.props.board, 9, 1);
		const player = this.props.player === 'X' ? 'O' : 'X';
		this.props.dispatch(endTurn(nM, player));
	},
	render() {
		let gameOver = this.props.winner;
		return (
			<main className="main-container">
				<Board board={this.props.board} endTurn={this.handleEndTurn} gameOver={gameOver} />
				<button onClick={this.negaMax}>AI Move</button>
				<span>{this.props.gameState}</span>
			</main>
		);
	}
});

const select = (state) => state;

export default connect(select)(App);
