import {END_TURN} from './types';

export default (row, column, player = 'X') => {
	return {
		type: END_TURN,
		row, column, player
	}
}
