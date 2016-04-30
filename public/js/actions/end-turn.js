import {END_TURN} from './types';

export default (index, player = 'X') => {
	return {
		type: END_TURN,
		index, player
	}
}
