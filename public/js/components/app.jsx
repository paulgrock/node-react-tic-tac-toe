import React from 'react';
import {connect} from 'react-redux';
import Board from './board.jsx';
import endTurn from '../actions/end-turn';
import switchPlayer from '../switch-player';

const App = React.createClass({
	handleEndTurn(e) {
		e.preventDefault();
		const index = Number(e.target.value);
		const player = switchPlayer(this.props.player);
		this.props.dispatch(endTurn(index, player));
	},
	render() {
		let gameOver = this.props.winner;
		return (
			<main className="main-container">
				<Board board={this.props.board} endTurn={this.handleEndTurn} gameOver={gameOver} />
				<span>{this.props.gameState}</span>
			</main>
		);
	}
});

const select = (state) => state;

export default connect(select)(App);
