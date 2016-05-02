import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import App from './components/app.jsx';
import switchPlayer from './switch-player';
import negaMax from './negamax';
import endTurn from './actions/end-turn';

const store = createStore(reducers);

store.subscribe(() => {
	const state = store.getState();
	if (state.player === 'X') {
		const player = switchPlayer(state.player);
		const nM = negaMax(state.board, 9, 1, player);
		store.dispatch(endTurn(nM, player));
	}
})

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);
