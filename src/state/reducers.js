import { LOC_CITY } from './constants.js'

const initialState = {
	city: 'Somerville'
}

export const setCity = (state=initialState, action={}) => {
	switch(action.type) {
		case LOC_CITY:
			return Object.assign({}, state, { city: action.payload });
		default: 
			return state;
	}
}