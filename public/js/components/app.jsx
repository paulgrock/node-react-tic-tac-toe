import React from 'react';
import {connect} from 'react-redux';
import Board from './board.jsx';

const App = React.createClass({
	cells: 3,
	rows: 3,
	render() {
		return (
			<main className="main-container">
				<Board cells={this.cells} rows={this.rows} />
			</main>
		);
	}
});

const select = (state) => state;

export default connect(select)(App);
